import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/APICalls'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Bigloader from '../components/common/Bigloader'

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState([])
  const requestProduct = async () => {
    try {
      setLoading(true)
    const response = await axiosInstance.get("/products")
    const data = await response.data;
    setProduct(data)
    setLoading(false)
    } catch (error) {
      toast(error.message || "Something went wrong")
      setLoading(false)
    }
  }
  useEffect(()=>{
    requestProduct()
  },[])
  return (
    <>
    {loading?<Bigloader />:
    <div className='row'>
    {
      product.map((item) => (
        <div className='col-md-2 mx-3' key={item.id}>
          <Link to={`/products/${item.id}`}>
          <img src={item.image} width={"200px"} height={"200px"} />
          <h6>{item.title}</h6>
          <p>{item.price}</p>
          </Link>
        </div>
      ))
    }
    </div>
}
</>
  )
}
export default Dashboard