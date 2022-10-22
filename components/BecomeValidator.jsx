import { Col, Container, Row } from "react-bootstrap";
import BannerBox from "./utils/BannerBox";
import Button from "./utils/Button";

function BecomeValidator() {
  return (
    <div className="my-5 py-5">
      <Container style={{ overflowX: "hidden" }}>
        <h2 className="display-4 fw-bold mb-5">Become a validator</h2>
        <Row>
          <Col md={6} className="mb-4">
            <h4 className="mb-3">1. Set up your machine</h4>
            <p className="opacity-75">
              In addition to any usual CLI parameters that you run polkadot
              with, you&apos;ll need to add an extra two:
            </p>
            <ul className="opacity-75">
              <li>
                <small className="text-primary">--validator </small>
                This tells your node to try to validate when it sees itself as a
                listed authority on the network;
              </li>
              <li>
                <small className="text-primary">--key &gt;SEED&lt;</small> This
                provides your node with a secret key that lets it know whether
                it`&apos;`s a listed authority on the network, and, if it is,
                lets it sign statements to authorise the creation of new blocks.
              </li>
            </ul>
          </Col>
          <Col md={6} className="mb-4">
            <h4 className="mb-3">2. Apply to validate</h4>
            <p className="opacity-75">
              New validators will be chosen every 24 hours on mainnet. You’ll
              need to create separate accounts for Controller, Session, and
              Stash keys on the Polkadot UI
              <a href="#">(https://polkadot.js.org/apps/#/accounts/create)</a>.
              These accounts will be used to represent and control the validator
              node you just set up.
            </p>
            <p className="opacity-75">
              Next you will need to get some DOT from the faucet or by asking on
              Element. Assuming you have more DOT than the lowest staked
              validator or there is an open validator slot, you can register to
              be staked. A step-by-step guide demonstrating how to set up your
              accounts and bond your DOT is available on the{" "}
              <a href="#">wiki.</a>
            </p>
          </Col>
        </Row>
      </Container>

      <BannerBox heading="Want to become a validator?">
        <Button>Read More</Button>
        <p className="mt-4">
          You can see validator stats on <a href="#">Telemetry.</a>
        </p>
      </BannerBox>
    </div>
  );
}
export default BecomeValidator;
