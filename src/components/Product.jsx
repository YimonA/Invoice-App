
const Product = ({product:{id,name,price},index}) => {
  return (
    <li className="flex justify-between items-center"><span>{index+1}. {name}</span><span>{price}</span></li>
  )
}

export default Product