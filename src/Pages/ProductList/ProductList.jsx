import React, { useEffect } from 'react'
import ProductCards from '../ProductCards/ProductCards'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setProducts } from '../../GlobalStates/ProductSlice'

function ProductList() {
  const {products}=useSelector((store)=>store.products)
  const dispatch=useDispatch()

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts=()=>{
    axios('https://fakestoreapi.com/products').then((res)=>{
      dispatch(setProducts(res.data))
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className='Product-list'>
      {products.map((product,index)=><ProductCards product={product} key={index}/>)}
    </div>
  )
}

export default ProductList