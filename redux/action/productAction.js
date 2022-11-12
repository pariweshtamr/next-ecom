import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase-config"
import {
  getSingleProductSuccess,
  requestFail,
  requestPending,
} from "../slice/productSlice"

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
