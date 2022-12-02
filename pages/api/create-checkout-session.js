import Stripe from "stripe"

export default async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

  const { items, email } = req.body

  const transformedItems = items.map((item) => ({
    quantity: item.quantity,
    price_data: {
      currency: "aud",
      product_data: {
        name: item.name,
        images: [item.img],
      },
      unit_amount: item.price * 100,
    },
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["AU", "US"],
    },
    // shipping_options: ["shr_1MARFxHGEIWTdsJBmFZiDNVw"],
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 5 * 100, currency: "aud" },
          display_name: "Express-Shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 1 },
            maximum: { unit: "business_day", value: 3 },
          },
        },
      },
    ],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.img)),
    },
  })

  res.status(200).json({
    id: session.id,
  })
}
