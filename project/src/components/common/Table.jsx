import React from 'react'

const Table = ({tableItem,icon,product,setFormValue}) => {
    const handleOnClick = (id) =>{
        const selectedValue = product?.filter((item)=>item.id === id)[0]
        setFormValue(selectedValue)
}  
return (
    <>
    <div>
    <table className="table">
  <thead>
    <tr>
      {
          tableItem?.map((item,key)=>{
              return(
                  <th scope='col' key={key}>{item}</th>
                )
            })
        }
        </tr>
  </thead>
  <tbody>
    {product.map((item,key)=>{return(
        <tr key={key}>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td type="button" data-bs-toggle="modal" onClick={(()=>handleOnClick(item?.id))} data-bs-target="#exampleModal" >{icon}</td>
         </tr>
)})
}
  </tbody>
</table>
    </div>
    </>
  )
}

export default Table