import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toast {
  public success(message: string) {
    toast.success(message);
  }

  public warn(message: string) {
    toast.warn(message);
  }

  public error(message: string) {
    toast.error(message);
  }
}

export default Toast;
