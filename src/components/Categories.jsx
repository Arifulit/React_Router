import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Categories = ({ categories }) => {
    return (
        <div className="w-full lg:w-1/4 p-4 lg:p-0">
            <div role="tablist" className="flex flex-col space-y-2 py-1 ml-14 w-48 font-bold  text-center">
                 {/* eslint-disable-next-line react/prop-types */}
                {categories?.map((category) => (
                    <NavLink
                        key={category.category}
                        to={`/category/${category.category}`}
                        role="tab"
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "pending"
                                : isActive
                                    ? "active bg-green-700 text-white tab border border-gray-300 rounded hover:bg-gray-800 text-left px-4 py-2 text-sm md:text-base"
                                    : "tab border border-gray-300 rounded hover:bg-gray-200 text-left px-4 py-2 text-gray-600 text-sm md:text-base"
                        }
                    >
                        {category.category}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;