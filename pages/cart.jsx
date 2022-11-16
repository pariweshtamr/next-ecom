import Head from "next/head"
import { useSelector } from "react-redux"
import { CartStyles } from "../styles/CartStyles"
import { motion } from "framer-motion"
import MainLayout from "./components/mainLayout/MainLayout"
import Link from "next/link"

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart)
  console.log(cartItems)
  return (
    <>
      <Head>
        <title>Next-Store - Shopping Cart</title>
      </Head>
      <MainLayout>
        <CartStyles>
          <div className="cart-wrapper">
            <h1 className="cart-title">Your Cart</h1>
            <div className="cart-top">
              <Link href="/products">
                <button className="cart-top-btn">CONTINUE SHOPPING</button>
              </Link>
              <div className="cart-top-texts">
                <span>Shopping Bag ({cartItems.length})</span>
              </div>
            </div>

            {cartItems.length === 0 ? (
              <>
                <h1>Cart is Empty.</h1>
                <Link href="/products">Go to Shop</Link>{" "}
              </>
            ) : (
              <div className="cart-bottom">
                <div className="cart-product-info">
                  {cartItems?.map((item) => (
                    <div className="" key={item._id}>
                      <div className="cart-product">
                        <div className="product-details">
                          <img src={item.img} alt={item.detail} />

                          <div className="product-description">
                            <div className="product-name">
                              <b>Product:</b>
                              <Link href={`/products/${item.id}`}>
                                {item.detail}
                              </Link>
                            </div>
                          </div>

                          <div className="price-detail">
                            <div className="product-qty-container"></div>
                            <div className="product-price">
                              ${item.price * item.quantity}
                            </div>
                          </div>

                          <div className="cart-actions">
                            <button className="remove-btn">REMOVE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button className="clear-cart-btn">CLEAR CART</button>
                </div>

                <div className="cart-summary">
                  <div className="summary-title">ORDER SUMMARY</div>

                  <div className="summary-item">
                    <div className="summary-item-text">
                      Subtotal ({cartItems.totalQuantity}
                      item(s)) :
                    </div>
                    <div className="summary-item-price">
                      ${cartItems.totalAmount}
                    </div>
                  </div>

                  <div className="summary-item">
                    <div className="summary-item-text">Shipping:</div>
                    <div className="summary-item-price">
                      ${cartItems.totalAmount}
                    </div>
                  </div>

                  <div className="summary-item">
                    <div className="summary-item-text">Total</div>
                    <div className="summary-item-price">
                      ${cartItems.totalAmount}
                    </div>
                  </div>

                  <button className="cart-summary-btn">
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            )}
          </div>
        </CartStyles>
      </MainLayout>
    </>
  )
}

export default Cart
