import { useContext, useRef } from "react";
import { GeneralContext } from "../contexts/GeneralContext";

const CheckoutForm = () => {
  const idRef = useRef("");
  const qtyRef = useRef("");
  const { addRecords, products }=useContext(GeneralContext);

  const recordHandler = () => {
    const currentProduct = products.find(
      (product) => product.id === parseInt(idRef.current.value)
    );
    console.log("currentProduct", currentProduct);

    const cost = currentProduct.price * qtyRef.current.valueAsNumber;
    const newRecordData = {
      id: Date.now(),
      productId: parseInt(idRef.current.value),
      name: currentProduct.name,
      price: currentProduct.price,
      quantity: qtyRef.current.valueAsNumber,
      cost,
    };
    addRecords(newRecordData);
    qtyRef.current.value = "";
    console.log("newRecordData", newRecordData);

  };
  return (
    <div className="flex justify-between items-end mb-4">
      <div className="flex flex-col gap-1">
        <label>Select your product</label>
        <select className="select-style" ref={idRef}>
          {/* {products.map(product=><Product key={product.id} product={product}/>)} */}
          {products?.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label>Quantity</label>
        <input type="number" className="input-style" ref={qtyRef} />
      </div>
      <button className="btn" onClick={recordHandler}>
        Buy
      </button>
    </div>
  );
};

export default CheckoutForm;
