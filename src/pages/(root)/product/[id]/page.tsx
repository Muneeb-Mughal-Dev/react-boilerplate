import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  return <div>SingleProduct page {id}</div>;
};

export default SingleProduct;
