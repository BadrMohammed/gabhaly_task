import Head from "next/head";
// import styles from "../styles/Home.module.css";

import { ProductContext } from "../Components/Context/ProductContext";
import React, { Component } from "react";
import ProductCard from "../Components/Context/ProductCard";
import Header from "../Components/Header";
export default class Home extends Component {
  static contextType = ProductContext;

  render() {
    const {
      products,
      addtoCart,
      productCart,
      handleRangeChnage,
      quantity,
      deleteProduct,
      editCart,
    } = this.context;
    return (
      <div>
        <Head>
          <title>Online Shopping</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossOrigin="anonymous"
          ></link>
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
            integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
            integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
            crossOrigin="anonymous"
          ></script>
        </Head>

        <main>
          <Header
            productCart={productCart}
            deleteProduct={deleteProduct}
            editCart={editCart}
            quantity={quantity}
            handleRangeChnage={handleRangeChnage}
          />
          <div>
            <ProductCard
              products={products}
              quantity={quantity}
              addtoCart={addtoCart}
              productCart={productCart}
              handleRangeChnage={handleRangeChnage}
            />
          </div>
        </main>
      </div>
    );
  }
}
