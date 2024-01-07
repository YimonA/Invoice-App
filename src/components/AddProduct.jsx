import { useContext, useRef } from "react";
import { GeneralContext } from "../contexts/GeneralContext";

const AddProduct = () => {
  const nameRef = useRef();
  const priceRef = useRef();
  const { addProduct } = useContext(GeneralContext);

  const addProductHandler = () => {
    const newProduct = {
      id: Date.now(),
      name: nameRef.current.value,
      price: priceRef.current.valueAsNumber,
    };
    addProduct(newProduct);
    nameRef.current.value = "";
    priceRef.current.value = "";
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label>Name</label>
        <input type="text" className="input-style" ref={nameRef} />
      </div>
      <div className="flex flex-col gap-1">
        <label>Price</label>
        <input type="number" className="input-style" ref={priceRef} />
      </div>
      <button className="btn" onClick={addProductHandler}>
        Add
      </button>
    </div>
  );
};

export default AddProduct;
