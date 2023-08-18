import { useSelector } from "react-redux";
import CustomerRow from "./CustomerRow";


const CustomerTable = ({ handleDelete, handleEdit }) => {
    const customerList = useSelector(state => state.customer.customerList);
  return (
    <div className="customer-table hidden lg:block">
        <div className="bg-green-400/60 rounded-lg w-full py-3 grid grid-cols-5">
          <div className=""></div>
          <div className="">Customer ID#</div>
          <div className="">Customer Name</div>
          <div className="">Email</div>
          <div className=""></div>
        </div>
        {customerList?.map(customer => <CustomerRow key={customer.id} handleDelete={handleDelete} handleEdit={handleEdit} id={customer.id} imageUrl={customer.avatar} email={customer.email} name={customer.first_name + " " + customer.last_name} />)}
    </div>
  )
}



export default CustomerTable