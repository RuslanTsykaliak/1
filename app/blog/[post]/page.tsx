import { ParamsType } from "@/types/type";


const Post = ({params}: {params: ParamsType}) => {
  return (
  <div>
    
    <h1> 
      Post: {params.post}
      </h1>
    </div>
    );
};

export default Post;
