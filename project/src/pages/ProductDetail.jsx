import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { axiosInstance } from '../utils/APICalls'
import { toast } from 'react-toastify'
import Bigloader from '../components/common/Bigloader'

const ProductDetail = () => {
    const [loading, setLoading] = useState(false)
    const [productDetails, setProductDetails] = useState(undefined)
    const {id} = useParams("id")
    const getDetail = async () => {
        try {
            setLoading(true)
        const responseData = await axiosInstance.get(`/products/${id}`)
        const data = await responseData
        setProductDetails(data.data);
        setLoading(false)
        console.log(productDetails);
        } catch (error) {
            setLoading(false)
            toast("error")
        }
    }
    useEffect(()=>{
        getDetail();
    },[])
  return (
    <>
    {loading? <Bigloader /> :
    <div className='row'>
        <div className='image col-5'>
            <img src={productDetails?.image} alt="" />
            <p>wddw</p>
        </div>
        <div className='col-7'>
            <h6>{productDetails?.title}</h6>
            <p>{productDetails?.description}</p>
            <p>{Number(productDetails?.price).toFixed(2)}</p>
            <Link to={`/category/${productDetails?.category}`}><span className="badge badge-secondary">{productDetails?.category}</span></Link>
        </div>
    </div>
}
    </>
  )
}

export default ProductDetail