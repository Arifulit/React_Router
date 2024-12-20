import { Link, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card = ({ product }) => {
    const { pathname } = useLocation();

    const {
        product_id,
        product_title,
        product_image,
        price,
    } = product || {};

    return (
        <div className='relative rounded-xl shadow-lg overflow-hidden bg-white'>
            <div className='transition-transform transform hover:scale-105 rounded-lg overflow-hidden'>
                <figure className='w-full h-48 flex justify-center items-center bg-gray-100'>
                    <img
                        className='w-4/5 h-4/5 object-cover rounded-lg'
                        src={product_image}
                        alt={product_title}
                    />
                </figure>
                <div className='p-4'>
                    <h1 className='text-xl font-bold mb-2'>{product_title}</h1>
                    <p className='text-lg mb-2'>Price: ${price}k</p>

                    <Link 
                        to={`/product/${product_id}`} 
                        className="border border-primary text-primary py-2 px-4 rounded hover:bg-primary hover:text-white transition duration-300"
                    >
                        Details
                    </Link>
                </div>
            </div>

            {pathname === '/dashboard' && (
                <button 
                    className='absolute -top-3 -right-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md'
                    onClick={() => console.log(`Delete ${product_id}`)} // Replace with actual delete function
                >
                    Delete
                </button>
            )}
        </div>
    );
};

export default Card;
