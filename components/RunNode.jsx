import { Container, Row, Col } from "react-bootstrap";
import BannerBox from "./utils/BannerBox";
import Button from "./utils/Button";

function RunNode({ data }) {
  return (
    <div className="run-a-node bg-dark pt-5">
      <Container>
        <Row className="col-card-wrapper justify-content-center">
          {data.map((item) => (
            <Col lg={4} md={6} className="mb-3" key={item.title}>
              <div className="col-card py-3 px-3 px-md-4 d-flex align-items-center bg-white gap-2">
                <img src={item.img} height={50} width={50} alt="" />
                <div>
                  <h6>{item.title}</h6>
                  <p className="mb-3">{item.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <Row className="my-5 pb-5">
          <h2 className="display-4 fw-bold text-white text-center px-0 px-md-4 mb-4">
            Run a node and interact with the Polkadot testnet
          </h2>
          <Col md={6}>
            <p className="lead text-white">
              {`If you'd like to play with Polkadot, you'll need to install and
              run the Parity Polkadot client. Get the client at `}{" "}
              <Button className="p-1 fs-6 text-white">
                Parity’s Polkadot repo
              </Button>
            </p>
            <p className="lead text-white">
              Alexander is the current default public testnet for Polkadot. By
              default, any node running on the Alexander testnet will appear on
              the
              <Button className="p-1 fs-6 text-white">
                telemetry.polkadot.io
              </Button>
            </p>
            <p className="lead text-white">
              The testnet allows you to create accounts, propose governance
              referenda, stake testnet DOT to become a validator or nominate
              other accounts as validators with your testnet DOT.
            </p>
          </Col>
          <Col md={6}>
            <p className="lead text-white">
              Connect your running node to the main Polkadot user interface to
              play around.
            </p>
            <p className="lead text-white">
              Get testnet DOT to stake by following these instructions on the
              Polkadot Wiki
            </p>
            <p className="lead text-white">
              Before interacting with the testnet,
              <Button className="p-1 fs-6 text-white">please read this</Button>
            </p>
            <p className="lead text-white">
              If you don’t want to run a node, you can still interact with the
              network by using the explorer
            </p>
          </Col>
        </Row>
      </Container>

      <div className="wrapper py-5 text-white bg-primary-grad">
        <BannerBox heading="Getting Involved">
          <p className="lead fw-bold text-white">
            From running a validator on Polkadot, to applying for a Web3
            Foundation Grant, to joining the Polkadot Ambassador Program — there
            are many ways to engage with the Polkadot community.
          </p>
        </BannerBox>
      </div>
    </div>
  );
}
export default RunNode;
