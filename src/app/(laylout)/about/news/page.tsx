const News = async () => {
  const data = await fetch('https://dummyjson.com/carts', {cache: "force-cache"});
  const carts = await data.json();
  

  return <div><News data={carts}/></div>;
};

export default News;
