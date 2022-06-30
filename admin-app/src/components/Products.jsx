import React from "react";
import adminServices from "../Services/AdminServices";
import alert from "../Services/Alert";
import convertImageToBase64 from "./ImageBase64";
import { uploadImage } from "./ImageUpload";
import FileUploader from "./FileUploader";
const Products = () => {
  const [pressed, setPressed] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [imgUrl, setImgUrl] = React.useState();
  const [TData, setTData] = React.useState({
    id: "",
    title: "",
    price: "",
    quantity: "",
    description: "",
    img: "",
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
    if (!TData.img) {
      alert.showErrorAlert("Please upload image");
      return;
    }
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
    window.scrollTo(0, 0);
    const data = {
      id: item._id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      description: item.description,
      img: item.img,
    };
    setImgUrl(item.img);
    setTData(data);
    setPressed(true);
    setBtnText("Update");
  }
  const onDrop = (acceptedFiles, rejectedFiles, imgName) => {
    if (rejectedFiles.length > 0) {
      alert.showWarningAlert("Upload only one image and size limit of 1 MB");
      return;
    } else if (acceptedFiles) {
      convertImageToBase64(acceptedFiles[0], (result, success) => {
        if (success) {
          uploadImage(result, (url, success) => {
            if (success) {
              handleData("img", `${url}`);
              setImgUrl(acceptedFiles[0].name);
            }
          });
        }
      });
    }
  };
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
                    required
                  />
                </div>
                <div class="mb-3 col-lg-9">
                  <label for="exampleInputPassword1" class="form-label">
                    Medicine Quantity
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={TData.quantity}
                    onChange={(e) => handleData("quantity", e.target.value)}
                    required
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
                    required
                  />
                </div>
                <div class="mb-3 col-lg-9">
                  <label for="exampleInputPassword1" class="form-label">
                    Medicine Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={TData.description}
                    onChange={(e) => handleData("description", e.target.value)}
                    required
                  />
                </div>

                <div class="mb-2 col-lg-9" id="imageuploader">
                  <label for="exampleInputPassword1" class="form-label">
                    upload an image
                  </label>
                  <FileUploader
                    placeholder={imgUrl ? imgUrl : "Click here to upload"}
                    accept={["image/jpeg", "image/png", "image/bmp"]}
                    maxFiles={1}
                    maxSize={1000000}
                    onDrop={(acceptedFiles, rejectedFiles) =>
                      onDrop(acceptedFiles, rejectedFiles, "frontSideImage")
                    }
                    required
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
            <th scope="col">Quantity</th>
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
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td>
                  <input
                    type="button"
                    value="Remove"
                    className="btn btn-danger me-2 t-buttons mb-2"
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
