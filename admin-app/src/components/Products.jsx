import React from "react";
import adminServices from "../Services/AdminServices";
import alert from "../Services/Alert";
const Products = () => {
  const [pressed, setPressed] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [TData, setTData] = React.useState({
    id: "",
    title: "",
    price: "",
    description: "",
  });
  const [btnText, setBtnText] = React.useState("Add");
  function handleData(key, value) {
    setTData({ ...TData, [key]: value });
  }
  function getData() {
    adminServices
      .getProducts()
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function removeItem(_id) {
    adminServices
      .deleteProduct(_id)
      .then((res) => {
        console.log(res);
        setItems(items.filter((u) => u._id !== _id));
      })
      .catch((err) => console.log(err.message));
    alert.showSuccessAlert("item removed successfully!");
  }
  function addItem(data) {
    adminServices
      .addProduct(data)
      .then((res) => {
        console.log(res);
        getData();
        setPressed(false);
        //window.location.reload(false);
        alert.showSuccessAlert("Item addded successfully!");
      })
      .catch((err) => console.log(err.message));
  }
  function updateItem(_id, data) {
    adminServices
      .updateProduct(_id, data)
      .then((res) => {
        console.log(res);
        window.location.reload(false);
        alert.showSuccessAlert("Item updated successfully!");
      })
      .catch((err) => console.log(err.message));
  }
  function showUpdateTable(item) {
    const data = {
      id: item._id,
      title: item.title,
      price: item.price,
    };
    setTData(data);
    setPressed(true);
    setBtnText("Update");
  }
  React.useEffect(getData, []);
  return (
    <div id="products" className="container">
      <div className=" d-flex justify-content-between mb-3">
        <h1 className="d-inline">Our Medicines</h1>
        <button
          className="btn btn-primary  "
          id="btn-addProduct"
          onClick={() => {
            setPressed(true);
          }}
        >
          Add Medicine
        </button>
      </div>
      {/* add product form code */}
      {pressed ? (
        <div className="container mb-3">
          <div className="row from-row ">
            <div
              className="col-lg-5 d-flex text-center align-items-center "
              id="add-form-brand"
            >
              <div>
                <h1>AR MEDICARE</h1>
                <h3>Pakistan's Medicare is now online</h3>
              </div>
            </div>
            <div className="col-lg-7 px-5">
              <h2 className="mt-3">Add medicine</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                <div class="mb-3 col-lg-9">
                  <label for="exampleInputEmail1" class="form-label">
                    Medicine Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={TData.title}
                    onChange={(e) => handleData("title", e.target.value)}
                  />
                </div>
                <div class="mb-3 col-lg-9">
                  <label for="exampleInputPassword1" class="form-label">
                    Medicine Price
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={TData.price}
                    onChange={(e) => handleData("price", e.target.value)}
                  />
                  <label for="exampleInputPassword1" class="form-label">
                    Medicine Description
                  </label>
                  <input
                    type="type"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={TData.description}
                    onChange={(e) => handleData("description", e.target.value)}
                  />
                </div>
                <button
                  class="btn btn-primary signIn-btn mb-5"
                  onClick={(e) => {
                    btnText == "Add"
                      ? addItem(TData)
                      : updateItem(TData.id, TData);
                  }}
                >
                  {btnText}
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* Table code starting from here */}
      <table className="table shadow text-center">
        <thead className="table-head">
          <tr>
            <th scope="col">Item name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {typeof items !== "object" ? (
          <></>
        ) : (
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <input
                    type="button"
                    value="Remove"
                    className="btn btn-danger me-2 t-buttons"
                    onClick={(e) => removeItem(item._id)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    className="btn btn-primary t-buttons"
                    onClick={(e) => {
                      showUpdateTable(item);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Products;
