import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "./Card";

const ProductCards = () => {
    const { productData } = useLoaderData();
    const { category } = useParams(); // Get the category from the URL
    const [products, setProducts] = useState(productData);

    console.log(category);

    useEffect(() => {
        if (category) {
            const filteredProducts = productData.filter(
                (product) => product.category === category
            );
            setProducts(filteredProducts.length > 0 ? filteredProducts : productData);
        }
    }, [category, productData]);

    return (
        <div className="w-full lg:w-3/4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products?.length > 0 ? (
                    products?.map((product) => (
                        <Card key={product.product_id} product={product} />
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default ProductCards;