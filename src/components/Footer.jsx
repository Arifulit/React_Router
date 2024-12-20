const Footer = () => {
    return (
        <footer className="bg-white py-10 text-gray-700">
            <div className="max-w-screen-xl mx-auto text-center">
                {/* Brand and Tagline */}
                <h2 className="text-2xl font-semibold text-black">Gadget Heaven</h2>
                <p className="mt-2 text-gray-500">Leading the way in cutting-edge technology and innovation.</p>

                {/* Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {/* Services Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Services</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-gray-900">Product Support</a></li>
                            <li><a href="#" className="hover:text-gray-900">Order Tracking</a></li>
                            <li><a href="#" className="hover:text-gray-900">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:text-gray-900">Returns</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
