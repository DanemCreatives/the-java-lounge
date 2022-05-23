import {
  Col,
  Container,
  Row,
} from "../../grid/TailwindGrid/tailwind-grid.component";
import "./product-spec.style.scss";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import InputFieldset from "../../objects/InputFieldset/input-fieldset.object";

const ProductSpec = ({ item }) => {
  const { title, slug, type, imgSrc, price, content } = item;
  return (
    <div className="c-product-spec">
      <Container>
        <Row cols={{ default: 12 }}>
          <Col
            span={{ default: 12, lg: 6 }}
            className="c-product-spec__col-left"
          >
            <div className="c-product-spec__canvas">
              <img className="c-product-spec__image" src={imgSrc} alt={slug} />
            </div>
          </Col>
          <Col
            span={{ default: 12, lg: 6 }}
            className="c-product-spec__col-right"
          >
            <div className="c-product-spec__details">
              <div className="c-product-spec__intro">
                <h3 className="c-product-spec__title">{title}</h3>
                <p
                  className="c-product-spec__header"
                  dangerouslySetInnerHTML={{ __html: type }}
                />
                <p className="c-product-spec__price">{price}</p>
              </div>
              <div
                className="c-product-spec__textbox wysiwyg"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <div className="c-product-spec__alterer">
                <InputFieldset label="Size" type="select">
                  <option value="small">125G - Small</option>
                  <option value="medium">250G - Medium</option>
                  <option value="large">500G - Large</option>
                </InputFieldset>
              </div>
              <div className="c-product-spec__applier">
                <InputFieldset
                  label="Quantity"
                  placeholder="enter quantity"
                  type="number"
                  defaultValue="1"
                />
                <CustomButton styleType="primary" text="Add To Cart">
                  Add To Cart
                </CustomButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSpec;
