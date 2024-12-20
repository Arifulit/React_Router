import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
// import ProductCards from '../components/ProductCards';
import MainComponent from '../components/MainComponent';
import ProductDetails from '../pages/ProductDetails';
// import ProductDetails from '../components/ProductDetails';
import ErrorPage from '../components/ErrorPage';
import Summery from '../pages/Summery';
// import Details from '../pages/ProductDetails';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <MainComponent />,
                        loader: async () => {
                            const categoryData = await fetch('../categories.json').then(response => response.json());
                            const productData = await fetch('../products.json').then(response => response.json());

                            return {
                                categoryData,
                                productData
                            }

                        },
                    },
                    {
                        path: '/category/:category',
                        element: <MainComponent />,
                        loader: async () => {
                            const categoryData = await fetch('../categories.json').then(response => response.json());
                            const productData = await fetch('../products.json').then(response => response.json());

                            return {
                                categoryData,
                                productData
                            }

                        },
                    },


                ],
            },


            {
                path: '/statistics',
                element: <Statistics />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/summery',
                element: <Summery></Summery>,
            },
           {
            path:'/product/:product_id',
            element:<ProductDetails></ProductDetails>,
            loader: () => fetch('../products.json'),
           }
        ],
    },
]);

export default routes;
