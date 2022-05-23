import "./product-listing.style.scss";
import FeaturedBanner from "../../components/FeaturedBanner/featured-banner.component";
import FeaturedProducts from "../../components/FeaturedProducts/featured-products.component";
import WindowCollection from "../../assets/images/window-collection.jpg";

const ProductListing = () => {
  return (
    <div className="page product-listing">
      <FeaturedBanner src={WindowCollection} title="The Collection" />
      <FeaturedProducts />
    </div>
  );
};

export default ProductListing;
