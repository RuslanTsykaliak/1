import { ParamsType } from "@/types/type";



const Greeting = ({params}: {params: ParamsType}) => {
  const name = params.name.charAt(0).toUpperCase() + params.name.slice(1);
  return (
  <div>
    <h1> Nice to meet you! {name}</h1>
  </div>
  );
}

export default Greeting;
