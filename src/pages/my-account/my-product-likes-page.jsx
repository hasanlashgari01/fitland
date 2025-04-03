import Empty from "../../components/empty";
import Product from "../../components/product";
import { useMyProductLikes } from "../../hooks/useMyAccount";

const MyProductLikesPage = () => {
  const { data } = useMyProductLikes();

  return (
    <div className="flex flex-wrap gap-6">
      {data?.length > 0 ? data.map(({ product }) => <Product key={product._id} {...product} />) : <Empty />}
    </div>
  );
};

export default MyProductLikesPage;
