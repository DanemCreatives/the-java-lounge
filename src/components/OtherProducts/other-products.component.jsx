import "./other-products.style.scss";
import {
  Col,
  Container,
  Row,
} from "../../grid/TailwindGrid/tailwind-grid.component";
import ProductThumbnail from "../ProductThumbnail/product-thumbnail.component";
import COLLECTION_DATA from "../../data/collection";

const OtherProducts = ({ item }) => {
  const otherItems = COLLECTION_DATA.filter(
    (otherItems) => otherItems.id !== item.id
  );
  return (
    <div className="c-other-products">
      <Container>
        <div className="c-other-products__intro">
          <h2 className="c-other-products__header">Try Our Other Products</h2>
        </div>
        <Row cols={12} gap={6}>
          {otherItems.map((item) => {
            return (
              <Col key={item.id} span={{ default: 12, lg: 4 }}>
                <ProductThumbnail {...item}>
                  <div dangerouslySetInnerHTML={{ __html: item.type }} />
                </ProductThumbnail>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default OtherProducts;
