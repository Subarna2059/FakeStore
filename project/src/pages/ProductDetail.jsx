import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../utils/APICalls'
import { toast } from 'react-toastify'

const ProductDetail = () => {
    const [productDetails, setProductDetails] = useState(undefined)
    const {id} = useParams("id")
    const getDetail = async () => {
        try {
        const data = await axiosInstance.get(`/products/${id}`)
        setProductDetails(data);
        console.log(productDetails);
        
        } catch (error) {
            toast("error")
        }
    }
    useEffect(()=>{
        getDetail();
    },[])
  return (
    <>
    <div className='row'>
        <div className='image col-5'>
            <img src={productDetails?.image} alt="" />
            <p>wddw</p>
        </div>
        <div className='col-7'>
            <h6>{productDetails?.title}</h6>
            <p>{productDetails?.description}</p>
            <p>{Number(productDetails?.price).toFixed(2)}</p>
            <span className="badge badge-secondary">{productDetails?.category}</span>
        </div>
    </div>
    </>
  )
}

export default ProductDetail