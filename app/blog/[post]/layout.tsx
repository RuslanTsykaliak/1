// app/blog/[post]/layout.tsx

import { ParamsType } from "@/types/type";

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
return children;
}

export default BlogLayout;

export async function generateMetadata({params}: {params: ParamsType}){
  return {
    title: params.post.split('-').join(" ")
  }
}
