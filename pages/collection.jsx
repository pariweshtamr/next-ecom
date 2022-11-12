import { collection, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { db } from "../firebase/firebase-config"
import {
  getProductsSuccess,
  requestFail,
  requestPending,
} from "../redux/slice/productSlice"
import { CollectionStyles } from "../styles/CollectionStyles.jsx"
import Loader from "./components/loader/Loader"
import MainLayout from "./components/mainLayout/MainLayout"
import ProductsPageCard from "./components/productCard/productsPageCard"

const Collection = () => {
  const [allProducts, setAllProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const dispatch = useDispatch()

  const { isLoading, products } = useSelector((state) => state.product)

  const getProds = async () => {
    let prods = []
    try {
      dispatch(requestPending())
      const querySnapshot = await getDocs(collection(db, "products"))
      querySnapshot.forEach((doc) => {
        const { id } = doc
        const data = { ...doc.data(), id }
        prods.push(data)
      })
      setAllProducts(prods)
      dispatch(getProductsSuccess(prods))
    } catch (error) {
      dispatch(requestFail(error))
      console.log(error)
    }
  }

  useEffect(() => {
    getProds()
  }, [])

  return (
    <MainLayout>
      <CollectionStyles>
        {isLoading ? (
          <Loader />
        ) : (
          allProducts.map((product) => (
            <ProductsPageCard key={product.id} product={product} />
          ))
        )}
      </CollectionStyles>
    </MainLayout>
  )
}

export default Collection
