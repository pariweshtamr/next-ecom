import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { db } from "../../../firebase/firebase-config"
import { fetchAllProducts } from "../../../redux/action/productAction"
import Loader from "../loader/Loader"
import ProductsPageCard from "../productCard/productsPageCard"
import { ProductListStyles } from "./productListStyles"

const ProductsList = ({ filters }) => {
  const [prods, setProds] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [shouldFetch, setShouldFetch] = useState(true)
  const dispatch = useDispatch()
  const { type } = filters

  const { isLoading, products } = useSelector((state) => state.product)

  useEffect(() => {
    shouldFetch && dispatch(fetchAllProducts())
    setShouldFetch(false)
    setProds(products)
  }, [dispatch, products])

  useEffect(() => {
    if (type !== "All") {
      setFilteredProducts(
        prods.filter((product) =>
          Object.entries(filters).every(([key, value]) =>
            product[key].includes(value)
          )
        )
      )
    } else {
      setFilteredProducts(prods)
    }
  }, [prods, filters])
  return (
    <ProductListStyles>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filteredProducts?.map((product) => (
            <ProductsPageCard key={product.id} product={product} />
          ))}
        </>
      )}
    </ProductListStyles>
  )
}

export default ProductsList
