import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class AdminServices extends GenericService {
  constructor() {
    super();
  }
  getDoctors = () => this.get("doctors");
  getPharmicst = () => this.get("pharmacist");
  getRespondant = () => this.get("respondant");
  getProducts = () => this.get("products");
  getCustomers = () => this.get("customers");
  deleteUser = (_id) => this.delete("user/" + _id);
  deleteProduct = (_id) => this.delete("products/" + _id);
  addProduct = (data) => this.post("products", data);
  updateProduct = (_id, data) => this.put("products/" + _id, data);
  login = (data) =>
  new Promise((resolve, reject) => {
    this.post("login/", data)
      .then((token) => {
        console.log(token);
        localStorage.setItem("accessToken", token.accessToken);
        resolve(token);
      })
      .catch((err) => {
        console.log(err.message);
        reject(err);

      });
  });

logout = () => {
  localStorage.removeItem("accessToken");
};
isLoggedIn = () => {
  return localStorage.getItem("accessToken") ? true : false;
};
getLoggedInUser = () => {
  try {
    const jwt = localStorage.getItem("accessToken");
    if (jwt != null) return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
};
}
let adminServices = new AdminServices();
export default adminServices;
