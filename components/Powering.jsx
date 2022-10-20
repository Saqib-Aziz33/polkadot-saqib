import { Col, Container, Row } from "react-bootstrap";
import BannerBox from "./utils/BannerBox";
import Button from "./utils/Button";

function Powering({ tokenInfo }) {
  return (
    <div className="powering text-white bg-dark pt-5">
      <Container className="text-center">
        <h2 className="display-4">Powering the Polkadot network</h2>
        <p className="lead text-white mx-auto" style={{ maxWidth: "500px" }}>
          The DOT token serves three distinct purposes: governance over the
          network, staking and bonding.
        </p>

        <Row className="mt-5">
          {tokenInfo.map((item) => (
            <Col md={4} key={item.title} className="mb-3">
              <img src={item.img} width={200} alt="" />
              <h4 className="mt-3">{item.title}</h4>
              <p className="text-white">{item.text}</p>
            </Col>
          ))}
        </Row>
      </Container>

      <Container
        className="text-center my-5 pb-5"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="fs-3 mb-4 fw-bold">Learn more about the DOT token</h2>
        <Button>Discover DOT</Button>
      </Container>

      <section className="bg-primary px-2 py-5">
        <Container>
          <Row className="my-4">
            <Col md={6}>
              <h2 className="display-5 fw-bold">
                An open-source protocol built for everyone
              </h2>
            </Col>
            <Col md={6}>
              <p className="lead fw-normal text-white">
                Polkadot is an open-source project founded by the Web3
                Foundation.
              </p>
              <p className="lead fw-normal text-white">
                Web3 Foundation has commissioned five teams and over 100
                developers to build Polkadot, including:
              </p>
            </Col>
          </Row>
          <div className="d-flex gap-5 justify-content-around flex-wrap">
            <img width={80} src="/assets/ti-1.svg" alt="" />
            <img width={80} src="/assets/ti-2.svg" alt="" />
            <img width={80} src="/assets/ti-3.svg" alt="" />
            <img width={80} src="/assets/ti-4.svg" alt="" />
          </div>
        </Container>
      </section>

      <section className="founded py-5 ps-5">
        <h1 className="display-1 fw-bold mb-3" style={{ maxWidth: "1000px" }}>
          Founded by some of the blockchain industry’s foremost builders
        </h1>
        <Button className="text-white">Learn About the polkadot Team</Button>
      </section>
    </div>
  );
}
export default Powering;
