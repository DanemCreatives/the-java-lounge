import "./product-thumbnail.style.scss";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ProductThumbnail = ({
  imgSrc,
  slug,
  title,
  children,
  price,
  link,
  id,
}) => {
  return (
    <AnimationOnScroll
      className="c-product-thumbnail"
      animateIn="animate__fadeIn"
      offset={0}
    >
      <div className="c-product-thumbnail__canvas">
        <img className="c-product-thumbnail__image" src={imgSrc} alt={slug} />
      </div>
      <div className="c-product-thumbnail__textbox">
        <h3 className="c-product-thumbnail__title">{title}</h3>
        <h2 className="c-product-thumbnail__header">{children}</h2>
        <p className="c-product-thumbnail__price">{price}</p>
      </div>
      <div className="c-product-thumbnail__ctas">
        <CustomButton styleType="primary" text="View more" to={link} />
      </div>
    </AnimationOnScroll>
  );
};

export default ProductThumbnail;
