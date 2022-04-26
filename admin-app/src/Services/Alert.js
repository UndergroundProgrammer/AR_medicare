import { toast } from "react-toastify";
class Alert {
  constructor() {}
  showSuccessAlert = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  showErrorAlert = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
}

let alert = new Alert();
export default alert;
