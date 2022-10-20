import { Col, Container, Row } from "react-bootstrap";

function Hero() {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col md={6} className="mb-3">
            <h1>The multichain vision for Web3 starts here.</h1>
            <p>
              Polkadot unites and secures a growing ecosystem of specialized
              blockchains called parachains. Apps and services on Polkadot can
              securely communicate across chains, forming the basis for a truly
              interoperable decentralized web.
            </p>
          </Col>
          <Col md={6} className="mb-3"></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Hero;
