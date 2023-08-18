import { useDispatch, useSelector } from "react-redux";
import { deleteIcon } from "../../utils/icons"
import { updateCustomerList } from "../../slices/customerSlice";
import toastMessage from "../../utils/toastMessage";


const DeleteCustomerModal = ({ id, closeModal }) => {
    const dispatch = useDispatch();
    const customerList = useSelector(state => state.customer.customerList);

    const finalDelete = () => {
        const filterCustomer = customerList.filter(x => x.id !== id);
        dispatch(updateCustomerList(filterCustomer));
        closeModal();
        toastMessage("Successfully Deleted", "success");
    }
  return (
    <div className="relative bg-white p-4 pb-12 rounded-lg w-[450px]">
        <p onClick={closeModal} className="absolute top-4 right-4 text-black font-lg font-bold cursor-pointer">X</p>
        <div className="w-full flex flex-col items-center mt-14">
            <div className="">{deleteIcon}</div>
            <p className="font-bold text-2xl mt-5">Are you sure?</p>
            <p className="text-center mt-4">Do you really want to delete this customer?<br /> This process can not be undone.</p>
            <div className="flex flex-row gap-x-4 mt-6">
                <button onClick={closeModal} className="rounded-lg px-12 py-2 text-white bg-gray-400 ">CANCEL</button>
                <button onClick={finalDelete} className="rounded-lg px-12 py-2 text-white bg-red-600 ">DELETE</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteCustomerModal