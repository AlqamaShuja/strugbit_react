import icon from '../../assets/icon.png'
import { customerIcon } from '../../utils/icons';
import Button from '../Button/Button';

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`top-0 left-0 min-h-screen bg-mygreen ${isOpen ? "fixed block z-50 w-[90%]":"fixed hidden w-[400px]"} max-w-[400px] sm:block`}>
        <div className="flex justify-end mr-4 mt-2 text-white font-bold cursor-pointer sm:hidden" onClick={() => setIsOpen(false)}>
            X
        </div>
        <div className="mt-6 sm:mt-8 flex justify-center w-full">
            <img src={icon} className='object-fill' alt="" />
        </div>
        <div className="flex justify-center mt-14 w-full">
            <Button>
                <span className='ml-5 mr-8'>{customerIcon}</span>
                <span>CUSTOMER</span>
            </Button>
        </div>
    </div>
  );
}

export default SideBar