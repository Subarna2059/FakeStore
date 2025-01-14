import React, { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [inputData, setInputData] = useState({
    email:"",
    password:"",
  })
  const handleSubmit = (e) => {
    [...inputData,{
      [e.target.name]:e.target.value,
    }]
  }
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
    <div className="formContainer">
    <form>
  <div className="form-group">
    <label className="py-2 fs-5" >Email address</label>
    <input name="email" type="email" className="form-control fs-5 w-100  "  placeholder="something@gmail.com" />
  </div>
  <div className="form-group my-4">
    <label className='py-1 fs-5'>Password</label>
    <div className="input-group">
      <input name="password" type={showPassword?"text":"password"} className="form-control fs-5" placeholder="*****" />
    <span className='input-group-text' onClick={handleShowPassword}>{showPassword?<i class="bi bi-eye"></i>:<i class="bi bi-eye-slash"></i>}</span>
    </div>

  </div>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default Login