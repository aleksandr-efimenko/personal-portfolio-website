import { type ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mb-12 text-center text-3xl font-bold leading-tight tracking-tighter md:text-left md:text-3xl md:leading-none lg:text-4xl">
      {children}
    </h1>
  );
};

export default PostTitle;
