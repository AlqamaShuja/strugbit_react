import headerImage from '../../assets/Mask Group 1@2x.png';

const CustomerModal = () => {
  return (
    <div className="rounded-lg w-[500px]">
        <div className="">
            <div className="relative w-full flex justify-center items-center">
                <img src={headerImage} alt="" />
                <h1 className='text-white text-3xl font-bold absolute bottom-7'>Add New Customer</h1>
            </div>
        </div>
    </div>
  )
}

export default CustomerModal