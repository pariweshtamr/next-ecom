import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebase-config"
import {
  getProductsSuccess,
  getSingleProductSuccess,
  requestFail,
  requestPending,
} from "../slice/productSlice"

export const fetchAllProducts = () => async (dispatch) => {
  dispatch(requestPending())
  let prods = []
  try {
    const querySnapshot = await getDocs(collection(db, "products"))
    querySnapshot.forEach((doc) => {
      const { id } = doc
      const data = { ...doc.data(), id }
      prods.push(data)
    })
    dispatch(getProductsSuccess(prods))
  } catch (error) {
    dispatch(requestFail(error))
    console.log(error)
  }
}

export const fetchProductById = (id) => async (dispatch) => {
  dispatch(requestPending())

  try {
    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      dispatch(getSingleProductSuccess(docSnap.data()))
      return
    }
    dispatch(requestFail(docSnap.data()))
  } catch (error) {
    console.log(error)
  }
}
