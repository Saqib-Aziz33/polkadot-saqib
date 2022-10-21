import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

function AnyTypeData() {
  return (
    <div className="any-type-data py-5 mt-5 bg-dark text-white">
      <Container className="cards-wrapper">
        <Row className="cards">
          <Col md={4} className="mb-3">
            <div className="wrapper">
              <Image src="/assets/tl-3.svg" height={50} width={50} alt="" />
              <div>
                <h4>GitHub</h4>
                <p>Latest versionn & history</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="wrapper">
              <Image src="/assets/tl-2.svg" height={50} width={50} alt="" />
              <div>
                <h4>Documentation</h4>
                <p>Read the documentation</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="wrapper">
              <Image src="/assets/tl-1.svg" height={50} width={50} alt="" />
              <div>
                <h4>Element chat</h4>
                <p>Get your questions answered</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="py-5">
          <Col md={8} className="mb-3 col-bg"></Col>
          <Col md={4} className="mb-3">
            <h2>Any type of data across any type of blockchain</h2>
            <p className="text-white" style={{ textAlign: "justify" }}>
              Polkadot is a network protocol that allows arbitrary data—not just
              tokens—to be transferred across blockchains. This means Polkadot
              is a true multi-chain application environment where things like
              cross-chain registries and cross-chain computation are possible.
              Polkadot can transfer this data across public, open,
              permissionless blockchains as well as private, permissioned
              blockchains. This makes it possible to build applications that get
              permissioned data from a private blockchain and use it on a public
              blockchain. For instance, a {"school's"} private, permissioned
              academic records chain could send a proof to a degree-verification
              smart contract on a public chain.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default AnyTypeData;
