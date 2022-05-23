import "./featured-products.style.scss";
import {
  Container,
  Row,
  Col,
} from "../../grid/TailwindGrid/tailwind-grid.component";
import ProductThumbnail from "../ProductThumbnail/product-thumbnail.component";
import COLLECTION_DATA from "../../data/collection";

const FeaturedProducts = () => {
  return (
    <div className="c-featured-products">
      <Container>
        <Row cols={12} gap={6}>
          {COLLECTION_DATA.map((item) => (
            <Col key={item.id} span={{ default: 12, md: 6 }}>
              <ProductThumbnail {...item}>
                <div dangerouslySetInnerHTML={{ __html: item.type }} />
              </ProductThumbnail>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
