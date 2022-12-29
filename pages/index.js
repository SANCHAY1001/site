import Head from 'next/head'
import db from '../utils/db'
import About from '../components/About'
import Product from '../models/Product'
import ProductItem from '../components/ProductItem'
import Vision from '../components/Vision'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
// import ViewElement from '../components/ViewElement'
import { useContext } from 'react'
import { Store } from '../utils/Store'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function Home({products}) {
  const {state , dispatch} = useContext(Store);
  const {cart} = state;

  const addToCartHandler = async(product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem? existItem.quantity + 1 : 1;
    const {data} = await axios.get(`/api/products/${product._id}`);
    if(data.countInStock < quantity) {
        toast.error('Sorry . Product is out of stock')
        return;
    }
    dispatch({type: 'CART_ADD_ITEM' , payload: {...product, quantity}});

    toast.success('Product added to cart successfully')
}
  return (
    <>
        <Layout className="w-full items-center " title="Home Page">
          <Banner />
          <div className='grid max-w-[1240px] m-auto grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {products.slice(0,1).map((product) => (
              <ProductItem product={product} key={product.slug} addToCartHandler = {addToCartHandler}></ProductItem>
            ))} 
          </div>  
          <About />
          <div className='grid max-w-[1240px] m-auto grid-cols-1  gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {products.slice(1,2).map((product) => (
              <ProductItem product={product} key={product.slug} addToCartHandler = {addToCartHandler}></ProductItem>
            ))} 
          </div>
          <Vision />
          <div className='grid max-w-[1240px] m-auto grid-cols-1  gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {products.slice(2,4).map((product) => (
              <ProductItem product={product} key={product.slug} addToCartHandler = {addToCartHandler}></ProductItem>
            ))} 
          </div>
          {/* <ViewElement/> */}

        </Layout> 
    </>
  )
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find() .lean();
  return {
    props: {
      products: products.map(db.convertDocToObj)
    },
  }
}
