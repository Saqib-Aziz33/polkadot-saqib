import { Container, Col, Row } from "react-bootstrap";
import Blog from "./Blog";

function Blogs({ blogs }) {
  return (
    <div className="blogs">
      <Container>
        <Row className="align-items-stretch">
          {blogs.map((blog, i) => (
            <Col md={6} lg={4} key={i} className="mb-3">
              <Blog blog={blog}></Blog>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Blogs;
