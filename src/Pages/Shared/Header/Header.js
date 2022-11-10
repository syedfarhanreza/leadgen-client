import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
        {
            user?.uid ?
                <>
                    <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
                    <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
                    <p className='text-orange-600 pl-6 pt-3'>{user?.email}</p>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar h-20 bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
           <div className="navbar-end">
           {
                user?.uid ?
                    < >
                        <button onClick={handleLogOut} className="btn bg-red-600">Log Out</button>
                    </>
                    :
                    <></>
            }
           </div>
        </div>
    );
};

export default Header;