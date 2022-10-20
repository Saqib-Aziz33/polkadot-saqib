import { Col, Container, Row } from "react-bootstrap";
import Button from "./utils/Button";

function Hero() {
  return (
    <div className="hero mt-5 pb-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-3">
            <h1 className="display-2 fw-bold">
              The multichain vision for Web3 starts here.
            </h1>
            <p className="lead my-4">
              Polkadot unites and secures a growing ecosystem of specialized
              blockchains called parachains. Apps and services on Polkadot can
              securely communicate across chains, forming the basis for a truly
              interoperable decentralized web.
            </p>
            <div className="d-flex gap-4">
              <Button>Learn Parachains</Button>
              <Button>Learn Cross-Chain</Button>
            </div>
          </Col>
          <Col lg={6} className="mb-3">
            <div className="scroll-animation">
              <div className="outer">
                <div className="inner"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Hero;
