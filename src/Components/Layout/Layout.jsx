import { useState } from "react"
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import Main from "../Main/Main";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="flex relative top-0 left-0 w-full min-h-screen">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`flex flex-col flex-grow sm:absolute left-0 min-h-screen sm:left-[400px] w-[calc(100%-400px)] ${isOpen ? '':''}`}> 
            <Header setIsOpen={setIsOpen} />
            <Main>{children}</Main>
        </div>
    </div>
  )
}

export default Layout