import { useEffect, useState } from 'react';
import { FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { getAllFavorites } from '../utils';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const favorite = getAllFavorites();
        setProducts(favorite);
    }, []);

  
    const isHomePage = location.pathname === '/';

  
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav
            className={`container mx-auto p-4 flex items-center justify-between ${
                isHomePage ? 'bg-purple-600 text-white' : 'bg-transparent text-black'
            }`}
        >
            {/* Mobile Menu Icon and Logo */}
            <div className="flex items-center space-x-4">
                <button onClick={toggleSidebar} className="md:hidden">
                    {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                <div className="text-lg font-semibold">
                    Gadget Heaven
                </div>
            </div>

         
            <div className="hidden md:flex space-x-8">
                {['/', '/statistics', '/dashboard', '/summery'].map((path, index) => (
                    <Link
                        key={index}
                        to={path}
                        className={`font-semibold ${
                            location.pathname === path ? 'text-orange-900' : ''
                        }`}
                    >
                        {path === '/'
                            ? 'Home'
                            : path.slice(1).charAt(0).toUpperCase() + path.slice(2)
                        }
                    </Link>
                ))}
            </div>

            {/* Icons */}
            <div className="flex space-x-4">
                <button
                    className={`p-2 rounded-full transition ${
                        isHomePage ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'
                    } hover:bg-purple-700 hover:text-white`}
                >
                    {products.length} <FiShoppingCart size={20} />
                </button>
                <button
                    className={`p-2 rounded-full transition ${
                        isHomePage ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'
                    } hover:bg-purple-700 hover:text-white`}
                >
                    <FiHeart size={20} />
                </button>
            </div>

            {/* Sidebar for Mobile */}
            <div
                className={`fixed top-0 left-0 w-3/4 h-full bg-white z-50 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 md:hidden`}
            >
                <div className="flex flex-col items-start p-6 space-y-6">
                    <button onClick={toggleSidebar} className="text-gray-800 self-end">
                        <FiX size={24} />
                    </button>
                    {['/', '/statistics', '/dashboard', '/summery'].map((path, index) => (
                        <Link
                            key={index}
                            onClick={toggleSidebar}
                            to={path}
                            className={`text-lg hover:underline ${
                                location.pathname === path ? 'text-purple-600 font-semibold' : 'text-gray-800'
                            }`}
                        >
                            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
