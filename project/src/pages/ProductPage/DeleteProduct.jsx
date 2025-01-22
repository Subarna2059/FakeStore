import React, { useEffect, useState } from 'react'
import Table from '../../components/common/Table'
import { axiosInstance } from '../../utils/APICalls'
import { toast } from 'react-toastify'

const DeleteProduct = () => {
    const [products, setProduts] = useState([])
     const getData = async () => {
            try {
                const data = await axiosInstance.get('/products');
                setProduts(data.data)
                console.log(products);
                
            } catch (e) {
                toast(e.message || "Something went wrong")
            }
        }
  useEffect(()=>{
    getData()
    console.log(products);
  },[])
  return (
    <>
    {/* <Table tableItem={products} /> */}
    </>
  )
}

export default DeleteProduct