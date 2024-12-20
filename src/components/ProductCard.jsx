import { FaTimesCircle } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    
    const {
        product_title,
        product_image,
        price,
        description
    } = product || {};

    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto mb-4 bg-white border rounded-lg p-4 shadow-sm">
            <div className="flex flex-col md:flex-row items-center w-full md:w-2/3">
                {/* Display product image if available, otherwise show a placeholder */}
                <div className="w-full sm:w-[30%] md:w-[20%] lg:w-[15%] h-auto bg-gray-200 rounded-lg overflow-hidden mb-3 md:mb-0 mr-4">
                    {product_image ? (
                        <img
                            src={product_image}
                            alt={product_title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-300" />
                    )}
                </div>
                
                <div className="w-full sm:w-[60%] md:w-[70%]">
                    <h2 className="text-lg font-semibold">{product_title}</h2>
                    {/* Product description if available */}
                    {description && <p className="text-gray-500 text-sm">{description}</p>}
                    {/* Product price */}
                    <p className="text-gray-700 font-semibold mt-1">Price: ${price}</p>
                </div>
            </div>
            
            <button className="text-red-500 hover:text-red-700 mt-3 md:mt-0">
                <FaTimesCircle size={20} />
            </button>
        </div>
    );
};

export default ProductCard;
