import React, { useEffect, useState } from 'react'
import Table from '../../components/common/Table'
import { toast } from 'react-toastify'
import { axiosInstance } from '../../utils/APICalls'
import Modal from '../../components/common/Modal'

const UpdateProduct = () => {
    const [products, setProduts] = useState([])
    const [formValue, setFormValue] = useState({
        id: '',
        title: '',
        description: '',
        price: '',
        category: '',
    })
    const { id,title, description, price } = formValue;
    const tableItem = ['Title', 'Price', 'Action']
    const icon = <i className="bi bi-pencil"></i>
    const getData = async () => {
        try {
            const data = await axiosInstance.get('/products');
            setProduts(data.data)
        } catch (e) {
            toast(e.message || "Something went wrong")
        }
    }
    const handleOnChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        getData()
    }, [])
    const handleFormSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await axiosInstance.put(`products/${id}`,{
                title,
                description,
                price
            })
            toast("Product updated successfully")
        } catch (e) {
            toast(e.message||"Something went wrong")
        }
        console.log(formValue);
    }
    return (
        <>
            <div>
                <Table tableItem={tableItem} icon={icon} product={products} setFormValue={setFormValue} />
                <Modal title="Edit Product">
                    <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type="text" name='title' value={title} onChange={handleOnChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input type="text" name='price' value={price} onChange={handleOnChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <input type="text" name='description' value={description} onChange={handleOnChange} className="form-control" />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                    </div>
                    </form>
                </Modal>
            </div>
        </>
    )
}

export default UpdateProduct