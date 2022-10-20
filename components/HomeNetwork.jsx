import { Col, Container, Row } from "react-bootstrap";

function HomeNetwork({ homeNetworkingData }) {
  return (
    <div className="home-network my-5 pt-5">
      <Container>
        <Row>
          {homeNetworkingData.map((item) => (
            <Col key={item.title} md={6} lg={4} className="mb-4 px-4">
              <img src={item.img} width={50} alt="" />
              <h4 className="my-3 fw-bold">{item.title}</h4>
              <p dangerouslySetInnerHTML={item.text}></p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default HomeNetwork;
