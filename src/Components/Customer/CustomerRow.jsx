import { convertIdToThreeDigits } from "../../utils/utils";

const CustomerRow = ({ imageUrl, id, name, email, handleDelete, handleEdit }) => {
    return(
        <div className="bg-white w-full py-2 grid grid-cols-5 justify-center items-center mt-4 rounded-lg">
          <div className="ml-2 h-[70px] overflow-hidden flex items-center">
            <img src={imageUrl} alt="" width={70} height={70} className="rounded-lg" />
          </div>
          <div className="">{convertIdToThreeDigits(id.toString())}</div>
          <div className="truncate">{name}</div>
          <div className="truncate mr-2">{email}</div>
          <div className="flex justify-center items-center gap-x-2 mr-2">
            <button onClick={()=>handleDelete(id)} className="rounded-md text-red-800 bg-red-500/50 hover:bg-red-500/60 w-[90px] py-1 ">Delete</button>
            <button onClick={()=>handleEdit(id)} className="rounded-md text-green-800 bg-green-500/50 hover:bg-green-500/60 w-[90px] py-1 ">Edit</button>
          </div>
        </div>
    );
}

export default CustomerRow;