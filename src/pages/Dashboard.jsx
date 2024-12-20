import { useState, useEffect } from 'react';
import { getAllFavorites, getAllFavorites1 } from '../utils';
import ProductCard from '../components/ProductCard';
import WishCard from '../components/WishList';
import PurchaseModal from './PurchaseModal';

const Dashboard = () => {
    const [product, setProduct] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalWishlistPrice, setTotalWishlistPrice] = useState(0); // New state for wishlist total price
    const [view, setView] = useState("cart");
    const [isPurchaseModalOpen, setPurchaseModalOpen] = useState(false);

    useEffect(() => {
        // Fetch and set wishlist data asynchronously
        const fetchWishlist = async () => {
            const favorites = await getAllFavorites1();
            setWishlist(favorites);

            // Calculate total price for wishlist
            const wishlistTotal = favorites.reduce((total, item) => total + item.price, 0);
            setTotalWishlistPrice(wishlistTotal);
        };
        fetchWishlist();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const favorites = await getAllFavorites();
            setProduct(favorites);

            // Calculate total price for cart
            const cartTotal = favorites.reduce((total, item) => total + item.price, 0);
            setTotalPrice(cartTotal);
        };
        fetchProducts();
    }, []);

    const handleSortByPrice = () => {
        // Sort products or wishlist items by price in descending order based on the current view
        if (view === "cart") {
            const sortedProducts = [...product].sort((a, b) => b.price - a.price);
            setProduct(sortedProducts);
        } else if (view === "wishlist") {
            const sortedWishlist = [...wishlist].sort((a, b) => b.price - a.price);
            setWishlist(sortedWishlist);
        }
    };

    const handlePurchase = () => {
        // Open the purchase modal
        setPurchaseModalOpen(true);
    };

    const closePurchaseModal = () => {
        // Close the modal, clear the current view's items, and reset total price
        setPurchaseModalOpen(false);

        if (view === "cart") {
            setTotalPrice(0);
            setProduct([]);
        } else if (view === "wishlist") {
            setTotalWishlistPrice(0);
            setWishlist([]);
        }
    };

    return (
        <>
            <div className="bg-purple-700 text-white py-12 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Dashboard</h1>
                <p className="mt-4 text-md sm:text-lg md:text-xl">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="mt-3 flex justify-center gap-3">
                    <button
                        className={`border-white rounded-lg px-4 py-2 border-2 text-white ${view === "cart" ? "bg-purple-500" : "bg-transparent"} sm:px-6 sm:py-3 text-sm sm:text-lg`}
                        onClick={() => setView("cart")}
                    >
                        Cart
                    </button>
                    <button
                        className={`border-white rounded-lg px-4 py-2 border-2 text-white ${view === "wishlist" ? "bg-purple-500" : "bg-transparent"} sm:px-6 sm:py-3 text-sm sm:text-lg`}
                        onClick={() => setView("wishlist")}
                    >
                        WishList
                    </button>
                </div>
            </div>

            <div className="flex justify-between mt-5 mb-2">
                <div className="ml-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{view === "cart" ? "Cart" : "WishList"}</h3>
                </div>
                <div className="flex items-center gap-3 sm:gap-5 mr-6">
                    <p className="text-lg sm:text-xl lg:text-2xl font-medium">
                        Total cost: ${view === "cart" ? totalPrice : totalWishlistPrice}
                    </p>
                    <button
                        onClick={handleSortByPrice}
                        className="btn btn-outline bg-purple-500 text-white sm:text-lg"
                    >
                        Sort by Price
                    </button>
                    <button
                        onClick={handlePurchase}
                        className="btn btn-outline bg-purple-500 text-white sm:text-lg"
                    >
                        Purchase
                    </button>
                </div>
            </div>

            <div className="border-5 border-red-700 mb-14">
                {view === "cart" ? (
                    product.length > 0 ? (
                        product.map((productItem) => (
                            <ProductCard key={productItem.product_id} product={productItem} />
                        ))
                    ) : (
                        <p className="text-center mt-10">Cart is currently empty.</p>
                    )
                ) : (
                    wishlist.length > 0 ? (
                        wishlist.map((wishlistItem) => (
                            <WishCard key={wishlistItem.product_id} wishlist={wishlistItem} />
                        ))
                    ) : (
                        <p className="text-center mt-10">WishList is currently empty.</p>
                    )
                )}
            </div>

            {isPurchaseModalOpen && (
                <PurchaseModal totalPrice={view === "cart" ? totalPrice : totalWishlistPrice} onClose={closePurchaseModal} />
            )}
        </>
    );
};

export default Dashboard;
