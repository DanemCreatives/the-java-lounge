import "./single-product.style.scss";
import ProductSpec from "../../components/ProductSpec/product-spec.component";
import OtherProducts from "../../components/OtherProducts/other-products.component";
import COLLECTION_DATA from "../../data/collection";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const item = COLLECTION_DATA.find((item) =>
    location.pathname.includes(item.slug)
  );

  return (
    <div className="single-product page">
      <ProductSpec item={item} />
      <OtherProducts item={item} />
    </div>
  );
};

export default SingleProduct;
