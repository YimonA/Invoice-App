import { useContext } from "react"
import { GeneralContext } from "../contexts/GeneralContext"

const Footer = () => {
  const {toggleDrawer}=useContext(GeneralContext);
const printHandler=()=>{
  print();
}
  return (
    <div className=""><button className="btn" onClick={toggleDrawer}>Manage Product</button>
    <button onClick={printHandler} className="btn-outline ml-3">Print</button></div>
  )
}

export default Footer