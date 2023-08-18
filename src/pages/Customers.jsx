import Button from "../Components/Button/Button";
import { addIcon } from "../utils/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerList } from "../slices/customerSlice";
import toastMessage from "../utils/toastMessage";
import CustomerCard from "../Components/Customer/CustomerCard";
import CustomerTable from "../Components/Customer/CustomerTable";
import Modal from "../Components/Modal/Modal";
import AddCustomerModal from "../Components/Customer/AddCustomerModal";
import DeleteCustomerModal from "../Components/Customer/DeleteCustomerModal";


const Customers = () => {
  const dispatch = useDispatch();
  const customerList = useSelector(state => state.customer.customerList);
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [isDelete, setIsDelete] = useState(null);

  useEffect(()=>{
    dispatch(fetchCustomerList())
    .unwrap()
    .then(()=>{})
    .catch(e => {
      console.log(e);
      toastMessage(e.message, "error");
    })
  }, []);

  const handleDelete = (id) => {
    setIsDelete(id);
  }
  
  const handleEdit = (id) => {
    setIsEdit(id);
  }

  return (
    <div className="min-h-screen">
      <Modal isShow={isDelete} closeModal={() => setIsDelete(null)}>
        <DeleteCustomerModal id={isDelete} closeModal={()=>setIsDelete(null)} />
      </Modal>
      <Modal isShow={isEdit} closeModal={() => setIsEdit(null)}>
        <AddCustomerModal closeModal={() => setIsEdit(null)} isNew={false} customer={customerList.find(x => x.id === isEdit)} />
      </Modal>
      <Modal isShow={isShow} closeModal={() => setIsShow(false)}>
        <AddCustomerModal closeModal={() => setIsShow(false)}/>
      </Modal>
      <div className="mt-6 mb-10 flex w-full justify-center sm:justify-start">
        <Button onClick={()=>setIsShow(true)} className='bg-gradient-to-r from-[#57BC90] to-mygreen hover:bg-gradient-to-l drop-shadow-lg'>
          <span className='ml-5 mr-8'>{addIcon}</span>
          <span>ADD NEW CUSTOMER</span>
        </Button>
      </div>
      <CustomerTable handleDelete={handleDelete} handleEdit={handleEdit} />
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 lg:hidden">
        {customerList?.map(customer => <CustomerCard key={customer.id} handleDelete={handleDelete} handleEdit={handleEdit} id={customer.id} imageUrl={customer.avatar} email={customer.email} name={customer.first_name + " " + customer.last_name} />)}
      </div>
      
    </div>
  )
}

export default Customers;