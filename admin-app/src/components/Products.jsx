import React from 'react';
const Products = () => {
  const [pressed,setPressed]=React.useState(false);
  //    function getData(){
  //      axios.get('http://localhost:5000/api/products/cart',{withCredentials:true}).then((res)=>{
  //           console.log(res.data.cart);
  //          setItems(res.data.cart);
  //       }).catch((err)=>{
  //           console.log(err);
  //       });
  //   }
  //   function removeItem(_id){
  //     {axios.get("http://localhost:5000/api/products/cart/remove/"+_id,{withCredentials:true}).then(res=>{
  //        console.log(res);
  //       // window.location.reload();
  //            toast.success("Item removed fom Cart", {
  //       position: toast.POSITION.TOP_CENTER
  //     });
  //      }).catch(err=>console.log(err.message))}
  //   }
   const [items,setItems]=React.useState([{name:"panadol",price:20},{name:"Nuberal fort",price:120}]);
   // React.useEffect(getData,[]);
    return ( <div id='products' className='container'>
      <div className=' d-flex justify-content-between mb-3'>
      <h1 className='d-inline'>Our Products</h1>
      <button className='btn btn-primary  ' id='btn-addProduct' onClick={()=>{setPressed(true)}} >Add product</button>
      </div>
      {/* add product form code */}
      {pressed?(
<div className="container mb-3">
    <div className="row from-row" >
        <div className="col-lg-5" id='add-form-brand'>
            <h1>AR MEDICARE</h1>
            <h3>Pakistan's Medicare is now online</h3>
        </div>
        <div className="col-lg-7 px-5">
          <h2 className='mt-3'>Add product</h2>

                <form>
  <div class="mb-3 col-lg-9">
    <label for="exampleInputEmail1" class="form-label">Product Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3 col-lg-9">
    <label for="exampleInputPassword1" class="form-label">Product Price</label>
    <input type="number" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary signIn-btn mb-5">Add</button>
</form>
        </div>
    </div>
</div>

):(<></>)}

  {/* Table code starting from here */}
        <table className="table shadow-lg text-center">
  <thead className='table-head'>
    <tr>
      <th scope="col">Item name</th>
      <th scope="col">Price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
   <tbody>
    
     { items.map(item=>
       <tr>
       <td>{item.name}</td>
       <td>{item.price}</td>
       <td><input type="button" value="Remove" className='btn btn-danger me-2 t-buttons' />
       <input type="button" value="Edit" className='btn btn-primary t-buttons'/></td>
       </tr>
     )}
   
    
  </tbody> 
</table>
    </div> );
}
 
export default Products;