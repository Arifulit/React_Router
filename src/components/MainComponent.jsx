import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import ProductCards from "./ProductCards";


const MainComponent = () => {
    const data = useLoaderData()
  console.log(data);

    return (
        
      <div className="flex flex-col lg:flex-row">
        
         <Categories categories={data.categoryData} />
         <ProductCards></ProductCards>
      </div>
    );
};

export default MainComponent;