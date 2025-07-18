
import Cart from '../../../components/Cart';
const Lorem = async () => {
  const data = await fetch("https://dummyjson.com/carts", {cache: "force-cache"});
  const carts = await data.json();
  
console.log(carts);

  return <div><Cart data={carts}/></div>;
};

export default Lorem;