import { useParams } from "react-router";
import CommentList from "../../features/public/components/comment-list";
import ProductPageHeader from "../../features/public/components/product-page-header";
import RelatedProduct from "../../features/public/components/related-product";
import TopComment from "../../features/public/components/top-comment";
import { useProductBySlug } from "../../hooks/useProduct";

const ProductPage = () => {
  const { slug } = useParams();
  const product = useProductBySlug(slug);

  return (
    <div className="container mt-10">
      <ProductPageHeader {...product} />
      <div className="mt-20 border-t border-gray-300 py-5">
        <TopComment slug={slug} />
        <CommentList slug={slug} />
      </div>
      {!product.isLoading && <RelatedProduct productId={product.data?._id} />}
    </div>
  );
};

export default ProductPage;
