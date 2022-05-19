import GenericService from "./GenericService";
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
  adminLogin = (data) => this.post("login", data);
}
let adminServices = new AdminServices();
export default adminServices;
