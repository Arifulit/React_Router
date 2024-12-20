const Banner = () => {
    return (

        <>
            <div className=" relative container mx-auto  bg-purple-600 py-12 flex flex-col items-center text-center  h-[494px]  mb-[400px]">
                {/* Title */}
                <div className="pb-6">
                    <div className="text-white px-4">
                        <h1 className="text-3xl md:text-5xl font-bold">Upgrade Your Tech with Gadget Heaven Accessories</h1>
                        <p className="text-md md:text-lg mt-4">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>

                    {/* Button */}
                    <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full mt-6 hover:bg-gray-200">
                        Shop Now
                    </button>
                </div>


                <div className=" bg-purple-700 rounded-xl mx-auto w-full max-w-4xl">
                    <img src="/assets/banner.jpg" alt="VR Headset"
                        className="w-[910px] h-[461px] rounded-lg shadow-lg" />
                </div>

            </div>

        </>

    );
};

export default Banner;