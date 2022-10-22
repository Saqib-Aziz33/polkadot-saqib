import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/utils/Button";

function Mission() {
  return (
    <div className="mission bg-dark pt-5 text-white">
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

      <section className="bg-primary-grad px-2 py-5">
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
          <h2 className="display-3 fw-bold text-center" data-aos="fade-up">
            Founded by some of the blockchain industry’s foremost builders
          </h2>
        </Container>
      </section>

      <section className="bg-white text-black">
        <Container>
          <Row className="founder-cards">
            <Col className="mb-4" md={4}>
              <div className="col-card">
                <h4 className="mb-0">Robert Habermeier</h4>
                <p>Founder</p>
                <p>
                  Robert Habermeier is a Thiel Fellow and co-founder of
                  Polkadot. He has a research and development background in
                  blockchains, distributed systems, and cryptography. A longtime
                  member of the Rust community, he has focused on leveraging the
                  language’s features to build highly parallel and performant
                  solutions.
                </p>
              </div>
            </Col>
            <Col className="mb-4" md={4}>
              <div className="col-card">
                <h4 className="mb-0">Dr. Gavin Wood</h4>
                <p>Founder</p>
                <p>
                  Gavin began originating blockchain technology as co-founder
                  and CTO of Ethereum. He invented fundamental components of the
                  blockchain industry, including Solidity, Proof-of-Authority
                  consensus, and Whisper. At Parity, Gavin currently leads
                  innovation on Substrate and Polkadot. He coined the term Web
                  3.0 in 2014 and serves as President of Web3 Foundation.
                </p>
              </div>
            </Col>
            <Col className="mb-4" md={4}>
              <div className="col-card">
                <h4 className="mb-0">Peter Czaban</h4>
                <p>Founder</p>
                <p>
                  Peter is the Technology Director of the Web3 Foundation, where
                  he works on supporting the development of the next generation
                  of distributed technologies. He obtained his Masters of
                  Engineering degree at the University of Oxford, reading
                  Engineering Science where he focused on Bayesian Machine
                  Learning. He has worked across defense, finance and data
                  analytics industries, working on mesh networks, distributed
                  knowledge bases, quantitative pricing models, machine learning
                  and business development.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
export default Mission;
