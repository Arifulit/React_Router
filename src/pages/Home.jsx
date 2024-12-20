// eslint-disable-next-line no-unused-vars
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
// import Categories from '../components/Categories';
import { Outlet } from 'react-router-dom';



const Home = () => {

   

    return (
        <div>
            {/* Banner */}
            
            <Banner></Banner>
            {/* Heading */}
            <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
            {/* Categories tab section */}
            
            {/* Dynamic Nested Component */}
            <Outlet />

        </div>
    );
};

export default Home;