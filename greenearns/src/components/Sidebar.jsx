import { CgHomeAlt } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbSettings } from "react-icons/tb";
import { ImCart } from "react-icons/im";
import { BsBell } from "react-icons/bs";
import { BsReceipt } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';

const Sidebar = () =>  {
  const activeStyle = {
    borderLeft: '1px solid #DBECDB',
    borderRight: '1px solid #DBECDB',
    width: '100%',
    padding: '20px'
  };

  return (
    <div className='bg-[#DBECDB] w-[100%] text-[rgb(15,22,15)] p-8 py-12 h-[100vh]'>
      <img src={logo} alt='logo'/>
      <NavLink to="/dashboard" className="text-[14px] text-[#0F160F] flex items-center py-4 mb-4 px-4 hover:text-[#015C28]" style={({isActive}) => isActive ? activeStyle : null } end><CgHomeAlt className="mr-4" />Dashboard</NavLink>
      <NavLink to="chat" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#015C28]" style={({isActive}) => isActive ? activeStyle : null }><BiBox className="mr-4" /> Chat</NavLink>
      <NavLink to="add_product" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#015C28]" style={({isActive}) => isActive ? activeStyle : null }><IoIosAddCircleOutline  className="mr-4" /> Add Product</NavLink>
      <NavLink to="market_place" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#015C28]" style={({isActive}) => isActive ? activeStyle : null }><ImCart className="mr-4" /> Marketplace</NavLink>
      <NavLink to="notifications" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#015C28]" style={({isActive}) => isActive ? activeStyle : null }><BsBell className="mr-4" /> Notifications</NavLink>
      <NavLink to="transactions" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#015C28]" style={({isActive}) => isActive ? activeStyle : null }><BsReceipt className="mr-4" /> Transactions</NavLink>
      <NavLink to="logout" className="text-[14px] text-[#0F160F]  flex items-center py-4 mb-4 px-6  hover:text-[#015C28]" style={({isActive}) => isActive ? activeStyle : null }><TbSettings className="mr-4" /> Log out</NavLink>
    </div>
  );
}

export default Sidebar;