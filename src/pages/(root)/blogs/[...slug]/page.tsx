import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { slug } = useParams<{ slug: string }>();
  return <div>SingleBlog page {slug}</div>;
};

export default SingleBlog;
