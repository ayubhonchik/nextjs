import Todo from '../../../components/Todos';
const Lorem = async () => {
  const data = await fetch("https://dummyjson.com/todos", {cache: "force-cache"});
  const todos = await data.json();
  


  return <div><Todo data={todos}/></div>;
};

export default Lorem;