import { buffer } from "micro"
import * as admin from "firebase-admin"

// Secure a connection to firebase from the backend
import serviceAccount from "../../permissions.json"
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app()

// Establish connection to stripe
import Stripe from "stripe"
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const endPointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfillOrder = async (session) => {
  console.log("Fulfilling order", session)
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.userId)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} has been to the DB`)
    })
}

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString()
    const sig = req.headers["stripe-signature"]

    let event
    // Verify that the event posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endPointSecret)
    } catch (error) {
      console.log("Error", error.message)
      return res.status(400).send(`Webhook error: ${error.message}`)
    }

    // Handle the checkout session completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object

      // Fullfill the order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => {
          res.status(400).send(`Webhook error: ${err.message}`)
        })
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}
