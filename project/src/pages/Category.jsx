import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../utils/APICalls';
import { toast } from 'react-toastify';

const Category = () => {
    const[product,setProduct] = useState([])
    const {slug} = useParams();
    const getProductByCategory = async() => {
        try{
        const responseData = await axiosInstance.get(`/products/category/${slug}`);
        setProduct(responseData.data)
        console.log(responseData.data);
        
        
        } catch (e) {
            toast(e.message || "Something went wrong")
        }
    }
    useEffect(()=>{
        getProductByCategory()
    },[])
  return (
    <>
        <h6 className='category-heading'>{slug}</h6>
        {product?.map((item) =>{
            <div className="card col-4" style="width: 18rem;">
            <img className="card-img-top" src={product?.image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{product?.title}</h5>
              <p className="card-text">{Number(product?.price).toFixed(2)}</p>
            </div>
          </div>
        })
}
    </>
  )
}

export default Category