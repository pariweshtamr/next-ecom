import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { db } from "../../../firebase/firebase-config"
import { fetchAllProducts } from "../../../redux/action/productAction"
import Loader from "../loader/Loader"
import ProductsPageCard from "../productCard/productsPageCard"
import { ProductListStyles } from "./productListStyles"

const ProductsList = ({ filters, searchTerm }) => {
  const [prods, setProds] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [shouldFetch, setShouldFetch] = useState(true)
  const dispatch = useDispatch()
  const { search } = searchTerm

  const { isLoading, products } = useSelector((state) => state.product)

  useEffect(() => {
    shouldFetch && dispatch(fetchAllProducts())
    setShouldFetch(false)
    setProds(products)
  }, [dispatch, products])

  useEffect(() => {
    if (filters?.type !== "All") {
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

  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(
        prods.filter(
          (product) =>
            product.detail.toLowerCase().includes(search.toLowerCase()) ||
            product.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    }
  }, [searchTerm, prods])
  return (
    <ProductListStyles>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="products-list">
          {filteredProducts.length === 0 ? (
            <h1 className="no-prods">No Products Found!</h1>
          ) : (
            filteredProducts?.map((product) => (
              <ProductsPageCard key={product.id} product={product} />
            ))
          )}
        </div>
      )}
    </ProductListStyles>
  )
}

export default ProductsList
