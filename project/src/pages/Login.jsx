import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { axiosInstance } from '../utils/APICalls'
import Bigloader from '../components/common/Bigloader'
import ButtonLoader from '../components/ButtonLoader'
import { getItem, setItem } from '../utils/storageUtils'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [loader, setLoader] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [inputData, setInputData] = useState({
    username: "",
    password: ""
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setInputData({...inputData, 
      [e.target.name]: e.target.value.trim(),
    })
  }
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
    if(!inputData.username || !inputData.password) {
      toast("Please enter a valid credential")
    } else {
      setLoader(true)
      const loginResponse = await axiosInstance.post("/auth/login", {username:inputData.username,password:inputData.password})
      setLoader(false)
      setItem("accessToken", loginResponse.data.token)
      navigate('/dashboard')
    }
  } catch (e) {
    setLoader(false)
    toast(e.message || "Something went wrong")
  }
  }
  useEffect(()=>{
    const accessToken = getItem("accessToken");
    if(accessToken) {
      navigate("/dashboard")
    }
  })
  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="py-2 fs-5" >Username</label>
            <input name="username" type="text" className="form-control fs-5 w-100" onChange={handleChange} placeholder="something@gmail.com" />
          </div>
          <div className="form-group my-4">
            <label className='py-1 fs-5'>Password</label>
            <div className="input-group">
              <input name="password" type={showPassword ? "text" : "password"} onChange={handleChange} className="form-control fs-5" placeholder="*****" />
              <span className='input-group-text' onClick={handleShowPassword}>{showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}</span>
            </div>

          </div>
          {
            loader?<ButtonLoader />:<button type="submit" className="btn btn-primary">Submit</button>
}
        </form>
      </div>
    </>
  )
}

export default Login