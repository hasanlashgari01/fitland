import CommentList from "../../features/public/components/comment-list";
import NewComment from "../../features/public/components/new-comment";
import ProductPageHeader from "../../features/public/components/product-page-header";

const ProductPage = () => {
  return (
    <div className="container mt-10">
      <ProductPageHeader />
      <NewComment />
      <CommentList />
    </div>
  );
};

export default ProductPage;
