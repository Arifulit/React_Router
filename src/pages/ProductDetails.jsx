import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { addFavorite, addFavorite1, getAllFavorites} from "../utils";



const ProductDetails = () => {
    const data = useLoaderData();
    const { product_id } = useParams();
    const [product, setProduct] = useState({});
    console.log(product);


const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const singleProduct = data.find((product) => product.product_id == product_id);
        setProduct(singleProduct);
        const favorites = getAllFavorites()
        const isExist = favorites.find(item=>item.product_id ==product.product_id)
         if(isExist){
            setIsFavorite(true)
         }
            
    }, [data, product.product_id, product_id]);




    const {
        product_title,
        product_image,
        price,
        description,
        Specification = [],
        availability,
        rating
    } = product;

  

    const handleFavorite = (product) => {
        addFavorite(product);
        setIsFavorite(true);
    }
    
    const handleFavoriteall = (product) => {
        addFavorite1(product);
        
    }


    return (
        <>
            <div className="relative w-full mx-auto bg-purple-600 py-12 flex flex-col items-center text-center h-[494px] mb-[400px]">
                {/* Title */}
                <div className="pb-6">
                    <div className="text-white px-4">
                        <h1 className="text-3xl md:text-5xl font-bold">Product Details</h1>
                        <p className="text-md md:text-lg mt-4">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>

                    {/* Button */}
                    <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full mt-6 hover:bg-gray-200">
                        Shop Now
                    </button>
                </div>

                {/* Product Details Card */}
                <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">

                        {/* Product Image */}
                        <div className="w-full lg:w-1/3 flex justify-center">
                            <img src={product_image} alt={product_title} className="w-64 h-64 rounded-md bg-gray-200 object-cover" />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 space-y-4 text-left">
                            <h1 className="text-3xl font-bold">{product_title}</h1>
                            <p className="text-xl font-semibold text-gray-700">Price: ${price}</p>

                            {/* Availability */}
                            <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${availability === "In Stock" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {availability || "Out of Stock"}
                            </span>

                            {/* Description */}
                            <p className="text-gray-600">{description || "No description available."}</p>

                            {/* Specifications */}
                            <div>
                                <h2 className="font-semibold">Specification:</h2>
                                <ul className="list-disc ml-5 text-gray-700">
                                    {Specification.map((spec, index) => (
                                        <li key={index}>{spec}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold">Rating</span>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 ${i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}`}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-gray-600">{rating}</span>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="flex space-x-3 mt-4">
                                <button 
                                disabled={isFavorite}
                                 onClick={()=>handleFavorite(product)} className="flex items-center px-6 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-800 transition">
                                    <span>Add To Cart</span>
                                    <FiShoppingCart size={20} className="ml-2" />
                                </button>
                                <button onClick={()=>handleFavoriteall(product)}
                                 className="p-2 bg-white text-purple-600 rounded-full hover:bg-purple-700 hover:text-white transition">
                                    <FiHeart size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
