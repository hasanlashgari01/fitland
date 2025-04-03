import useTitle from "../../hooks/useTitle";
import Header from "../../layout/public/header";

const NotFoundPage = () => {
  useTitle("خطای ۴۰۴");

  return (
    <div>
      <Header />
      NotFoundPage
    </div>
  );
};

export default NotFoundPage;
