import { useContext } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { GeneralContext } from "../contexts/GeneralContext";

const ProductDrawer = () => {
  const {toggleDrawer,openDrawer, products}=useContext(GeneralContext);

  return (
    <div
      className={`shadow-lg fixed top-0 right-0 h-screen duration-300 p-3 ${
        !openDrawer && "translate-x-full "
      }`}
    >
      <div className="mb-3 flex justify-between items-center">
      <p className=" text-lg font-semibold">Your Product</p>
      <button onClick={toggleDrawer} className="btn-circle">X</button>
      </div>
      <ul className="mb-2 border border-blue-600 p-2">
      {products.map((product,index)=><Product key={product.id} index={index} product={product}/>)}
      </ul>
      <AddProduct/>
    </div>
  );
};

export default ProductDrawer;
