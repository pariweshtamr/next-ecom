import { collection, getDocs } from "firebase/firestore"
import Head from "next/head"
import React, { useState } from "react"

import { CollectionStyles } from "../styles/CollectionStyles.jsx"
import MainLayout from "./components/mainLayout/MainLayout"
import ProductsList from "./components/productsList/ProductsList"

const Collection = () => {
  const [filters, setFilters] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const handleFilters = (e) => {
    const value = e.target.value

    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }
  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm({ ...searchTerm, [e.target.name]: value })
  }

  return (
    <>
      <Head>
        <title>Next-Store - Collection</title>
      </Head>
      <MainLayout>
        <CollectionStyles>
          <div className="products-list-container">
            <div className="filter-container">
              <div>
                <h3>Filter Products:</h3>
                <select
                  name="type"
                  onChange={handleFilters}
                  defaultValue="type"
                >
                  <option disabled value="type">
                    TYPE
                  </option>
                  <option value="All">All</option>
                  <option value="indoor">Indoor</option>
                  <option value="outdoor">Outdoor</option>
                </select>

                <select
                  name="size"
                  onChange={handleFilters}
                  defaultValue="size"
                >
                  <option disabled value="size">
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
                name="search"
                placeholder="Search..."
                className="collection-search"
                onChange={handleSearch}
              />
            </div>

            <div className="products-list">
              <ProductsList filters={filters} searchTerm={searchTerm} />
            </div>
          </div>
        </CollectionStyles>
      </MainLayout>
    </>
  )
}

export default Collection
