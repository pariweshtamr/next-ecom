import { collection, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { db } from "../firebase/firebase-config"
import { fetchAllProducts } from "../redux/action/productAction"
import {
  getProductsSuccess,
  requestFail,
  requestPending,
} from "../redux/slice/productSlice"
import { CollectionStyles } from "../styles/CollectionStyles.jsx"
import Loader from "./components/loader/Loader"
import MainLayout from "./components/mainLayout/MainLayout"
import ProductsPageCard from "./components/productCard/productsPageCard"
import ProductsList from "./components/productsList/ProductsList"

const Collection = () => {
  const [prods, setProds] = useState([])
  const [filters, setFilters] = useState({})
  const [shouldFetch, setShouldFetch] = useState(true)

  const dispatch = useDispatch()

  const handleFilters = (e) => {
    const value = e.target.value

    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  return (
    <MainLayout>
      <CollectionStyles>
        <div className="products-list-container">
          <div className="filter-container">
            <div>
              <h3>Filter Products:</h3>
              <select name="type" onChange={handleFilters} defaultValue="type">
                <option disabled value="type">
                  TYPE
                </option>
                <option value="All">All</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
              </select>

              <select name="size" onChange={handleFilters} defaultValue="">
                <option disabled value="type">
                  SIZE
                </option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="collection-search"
            />
          </div>

          <div className="products-list">
            <ProductsList filters={filters} />
          </div>
        </div>
      </CollectionStyles>
    </MainLayout>
  )
}

export default Collection
