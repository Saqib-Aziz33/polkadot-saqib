import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/utils/Button";

function Mission() {
  return (
    <div className="bg-dark py-5 text-white">
      <Container>
        <Row className="py-5">
          <Col md={6} className="mb-4">
            <h1 className="mb-3">The Polkadot mission</h1>
            <h5>
              We envision a Web where our identity and our data is our own -
              safely secured from any central authority.
            </h5>
          </Col>
          <Col md={6}>
            <p className="text-white">
              Polkadot will enable a completely decentralized web where users
              are in control.
            </p>
            <p className="text-white">
              Polkadot is built to connect private and consortium chains, public
              and permissionless networks, oracles, and future technologies that
              are yet to be created. Polkadot facilitates an internet where
              independent blockchains can exchange information and transactions
              in a trustless way via the Polkadot relay chain.
            </p>
            <p className="text-white">
              Polkadot makes it easier than ever to create and connect
              decentralized applications, services, and institutions. By
              empowering innovators to build better solutions, we seek to free
              society from its reliance on a broken web where its large
              institutions can’t violate our trust.
            </p>
            <Button className="py-2 text-white">
              Learn about the technology
            </Button>
          </Col>
        </Row>
      </Container>

      <section className="bg-primary px-2 py-5">
        <Container>
          <Row className="my-4">
            <Col md={6}>
              <h2 className="display-5 fw-bold">
                {"Who's"} building Polkadot?
              </h2>
              <p className="text-white">
                Polkadot is the flagship project by Web3 Foundation, a Swiss
                Foundation founded to facilitate a fully functional and
                user-friendly decentralized web.
              </p>
            </Col>
            <Col md={6}>
              <p className="text-white">
                The Web3 Foundation is partnering with best-in-class entities to
                build Polkadot and foster development of the services and
                applications that will run on it.
              </p>
              <p className="text-white">
                Researchers from Inria Paris and ETH Zurich, developers from
                Parity Technologies, and capital partners from crypto-funds such
                as Polychain Capital are all working together to develop a
                superlative realization of Web3, with Polkadot at its core.
              </p>
              <p className="text-white">
                Web3 Foundation is providing grants for development of the
                ecosystem.
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

      <section className="founded-by">
        <Container className="px-2 px-md-5">
          <h2 className="display-3 fw-bold text-center">
            Founded by some of the blockchain industry’s foremost builders
          </h2>
        </Container>
      </section>
    </div>
  );
}
export default Mission;
