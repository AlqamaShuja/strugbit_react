

const CustomerCard = ({ imageUrl, id, name, email }) => {
  return (
    <div className="customer-component w-full max-w-[280px] bg-white rounded-lg drop-shadow-lg py-4">
        <div className="flex w-full justify-center">
          <img src={imageUrl} width={240} alt="" className="rounded-md" />
        </div>
        <div className="ml-4 mt-3">
          <div className="flex items-center gap-x-3">
            <div className="font-bold">Customer ID:</div>
            <div className="text-gray-600">{id}</div>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="font-bold">Customer Name:</div>
            <div className="text-gray-600">{name}</div>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="font-bold">Email:</div>
            <div className="text-gray-600">{email}</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-4 mt-6">
          <button className="rounded-md text-red-800 bg-red-500/50 hover:bg-red-500/60 w-[90px] py-1 ">Delete</button>
          <button className="rounded-md text-green-800 bg-green-500/50 hover:bg-green-500/60 w-[90px] py-1 ">Edit</button>
        </div>
    </div>
  )
}

export default CustomerCard