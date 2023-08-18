import { toast } from 'react-toastify';

const toastMessage = (message, type, duration=2000) => {
  if(type === 'info'){
    toast.info(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: duration, // milliseconds
    });
  }
  else if(type === 'success'){
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: duration, // milliseconds
    });
  }
  else if(type === 'error'){
    console.log('aaaaaaaa');
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: duration, // milliseconds
    });
  }
}

export default toastMessage;