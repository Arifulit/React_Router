import { FaTimesCircle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const WishList = ({ wishlist }) => {
    return (
        <div className="w-full">
            <div className="bg-base-300 flex justify-between w-[90%] gap-5 mb-4 mx-auto border-2 mt-5 rounded-md border-gray-400">
                <div className="w-full">
                    <div className="hero-content flex flex-col sm:flex-row lg:flex-row gap-4 sm:gap-6">
                        <img
                            // eslint-disable-next-line react/prop-types
                            src={wishlist.product_image}
                            className="w-full sm:w-48 sm:h-40 lg:w-52 lg:h-44 rounded-lg shadow-2xl object-cover"
                        />
                        <div className="flex justify-between flex-1">
                            <div className="ml-4 sm:ml-6">
                                {/* eslint-disable-next-line react/prop-types */}
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{wishlist.product_title}</h3>
                                {/* eslint-disable-next-line react/prop-types */}
                                <p className="text-sm sm:text-md lg:text-lg text-gray-500">{wishlist.description}</p>
                                {/* eslint-disable-next-line react/prop-types */}
                                <p className="text-lg sm:text-xl lg:text-2xl font-semibold">${wishlist.price}</p>
                            </div>

                            <div className="flex items-start justify-center">
                                <button className="text-red-500 hover:text-red-700">
                                    <FaTimesCircle size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishList;
