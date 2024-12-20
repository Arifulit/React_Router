

import toast from "react-hot-toast"

const getAllFavorites = () => {
    const all = localStorage.getItem('favorites');
    if (all) {
        const favorities = JSON.parse(all);
        console.log(favorities);
        return favorities;
    } else {
        console.log([])
        return []
    }

    // console.log(favorities)
}



const addFavorite = (product) => {
   

    const favorites = getAllFavorites()
    const isExist = favorites.find((item) => item.product_id == product.product_id)
    if (isExist) return toast.error('Product already exist!');


    favorites.push(product)
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Successfully added');

}





const getAllFavorites1 = () => {
    const all = localStorage.getItem('wishlist');
    if (all) {
        return JSON.parse(all);
    } else {
        // Initialize wishlist in localStorage if it doesn't exist
        localStorage.setItem('wishlist', JSON.stringify([]));
        return [];
    }
};

// Add a product to the wishlist in localStorage
const addFavorite1 = (product) => {
    // Get all previously saved product data
    const favorites = getAllFavorites1(); // Corrected this line
    const isExist = favorites.find((item) => item.product_id === product.product_id);
    if (isExist) {
        return toast.error('Product already in wishlist!');
    }

    favorites.push(product);
    localStorage.setItem('wishlist', JSON.stringify(favorites));
    toast.success('Successfully added to wishlist!');
};


export { addFavorite, getAllFavorites, addFavorite1, getAllFavorites1};