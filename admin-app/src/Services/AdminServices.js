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
  deleteDoctor = (_id) => this.delete("doctors/" + _id);
  deletePharmacist = (_id) => this.delete("pharmacist/" + _id);
  deleteRespondant = (_id) => this.delete("respondant/" + _id);
  deleteProduct = (_id) => this.delete("products/" + _id);
   deleteCustomer = (_id) => this.delete("customer/" + _id);
  addProduct = (data) => this.post("products", data);
  updateProduct = (_id, data) => this.put("products/" + _id, data);
}
let adminServices = new AdminServices();
export default adminServices;
