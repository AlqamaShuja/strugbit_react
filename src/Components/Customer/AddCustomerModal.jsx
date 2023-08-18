import { useEffect, useRef, useState } from 'react';
import headerImage from '../../assets/Mask Group 1@2x.png';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomerList } from '../../slices/customerSlice';
import toastMessage from '../../utils/toastMessage';

const AddCustomerModal = ({ closeModal, isNew=true, customer={} }) => {  
  const title = isNew ? "Add New Customer" : "Edit Customer";
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();
  const customerList = useSelector(state => state.customer.customerList);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if(Object.keys(customer).length > 0){
      nameRef.current.value = customer?.first_name + " " + customer?.last_name || "";
      emailRef.current.value = customer?.email || "";
    }
  }, [customer]);

  const handleAddNewCustomer = () => {
    if(isNew){
      console.log(selectedImage, "selected22");
      if(!selectedImage){
        toastMessage("Please select image", "error");
        return;
      }
      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        avatar: selectedImage
      }
      
      const customers = [...customerList]; 
      customers.push({ ...data, id: customers[customers.length-1].id + 1 });
  
      dispatch(updateCustomerList(customers));
      nameRef.current.value = '';
      emailRef.current.value = '';
      setSelectedImage(null);
      closeModal()
    }
    else {
      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        avatar: selectedImage ? selectedImage : customer.avatar
      }
      const updatedCustomer = customerList.map(cus => {
        if(cus.id === customer.id) return { data, id: customer.id }
        else return cus;
      });

      dispatch(updateCustomerList(updatedCustomer));
      nameRef.current.value = '';
      emailRef.current.value = '';
      setSelectedImage(null);
      closeModal()
    }
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setSelectedImage(base64Image);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="rounded-lg w-[450px]">
        <div className="">
            <div className="relative w-full flex justify-center items-center">
                <img src={headerImage} alt="" />
                <h1 className='text-white text-3xl font-bold absolute bottom-7'>{title}</h1>
            </div>
            <div className="bg-white pb-8 rounded-b-lg">
              <div className="pt-8 mx-5">
                <input type="text" ref={nameRef} placeholder='Customer Name' className='border-2 border-gray-200 rounded-md w-full py-2 px-3'/>
              </div>
              <div className="mt-5 mx-5">
                <input type="text" ref={emailRef} placeholder='Email' className='border-2 border-gray-200 rounded-md w-full py-2 px-3'/>
              </div>
              <div className="ml-5 mt-3 flex gap-x-4">
                <input type="file" id="upload" accept='.jpg,.png,jpeg' onChange={handleImageUpload} hidden/>
                <label htmlFor="upload" className='text-green-500 underline cursor-pointer'>Upload Photo</label>
              </div>
              <div className="mt-10 flex flex-wrap justify-center w-full">
                <Button onClick={handleAddNewCustomer} className='bg-gradient-to-r from-[#57BC90] to-mygreen hover:bg-gradient-to-l drop-shadow-lg'>
                  <div className='flex justify-center w-full'>ADD CUSTOMER</div>
                </Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AddCustomerModal