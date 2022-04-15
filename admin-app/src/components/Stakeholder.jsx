import React from 'react';
const Stakeholder = ({stakeholder}) => {
    return ( <div>
            <div class="card my-3 shadow-lg" style={{maxWidth: "540px"}}>
                       <div className="row">
    <div class="col-4 d-inline my-4">
      <img src={stakeholder.imgUrl} class="img-fluid rounded-circle ms-2" alt="..."/>
    </div>
    <div class="col-8">
      <div class="card-body">
        <h5 class="card-title">{stakeholder.name}</h5>
        <p class="card-text"><a>{stakeholder.email}</a></p>
        <button className='btn btn-danger'>Delete</button>
      </div>
    </div>
    </div>
</div>
    </div> );
}
 
export default Stakeholder;