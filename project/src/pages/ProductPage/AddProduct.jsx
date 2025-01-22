import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../utils/APICalls'
import { addProduct } from '../../services/addProduct';
import ButtonLoader from '../../components/ButtonLoader';

const AddProduct = () => {
    const [loading,setLoading] = useState(false)
    const [category, setCategory] = useState([]);
    const [inputValues, setInputValues] = useState({
        title: '',
        price: '',
        description: '',
    });
    const [selectcategory, setSelectCategory] = useState("")
    const {title, price, description} = inputValues;
    const hadndleCategoryChange = (e) => {
        setSelectCategory(e.target.value)
        console.log(selectcategory);
        
    }
    const handleInputValues = (e) => {
        setInputValues({...inputValues, [e.target.name]:e.target.value})
    }
    const handleCategory = async () => {
        try {
            const data = await axiosInstance.get('products/categories')
            const response = await data
            setCategory(response.data)

        } catch (e) {
            toast(e.message || "Something went wrong")
        }
    }
    useEffect(() => {
        handleCategory()
    }, [])
    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!title || !price || !description || !category) {
            toast("Please enter valid value")
        } else if(price<1) {
            toast("Please enter price greater than 0")
        } else {
            try{
            const data = {
                title,
                description,
                price,
                image:'https://i.pravatar.cc',
                category,
            }
            setLoading(true)
            const newProduct = await addProduct(data)
            setLoading(false)
        } catch (e) {
            toast(e.message ||"something went wrong")
            setLoading(false)
        }
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Title</label>
                    <input type="text" name='title' value={title} className="form-control"  onChange={handleInputValues}/>
                </div>
                <div className="form-group">
                    <label >Price</label>
                    <input type="text" name='price' value={price} className="form-control"  onChange={handleInputValues}/>
                </div>
                <div className="form-group">
                    <label >Example textarea</label>
                    <textarea className="form-control" value={description} name='description' id="exampleFormControlTextarea1" onChange={handleInputValues} rows="3"></textarea>
                </div>
                <div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={hadndleCategoryChange}>
                        {category.map((item, key) => {
                            return (
                                <option key={key} value={item}>{item}</option>
                            )
                        })
                        }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">{loading?<ButtonLoader />:"Submit"}
                </button>
            </form>
        </>
    )
}

export default AddProduct