import { Container, Row, Col } from "react-bootstrap";

function EasilyBuild() {
  return (
    <div className="bg-dark my-5 py-5 text-white">
      <Container className="my-4">
        <div className="text-center">
          <h1>Easily build a Polkadot parachain with Substrate</h1>
          <p className="lead text-primary px-4">
            Build your application-specific blockchain with the{" "}
            <span className="text-white text-decoration-underline">
              Substrate{" "}
            </span>
            framework now and easily connect it to Polkadot after launch.
          </p>
        </div>

        <Row className="my-5">
          <Col lg={4} md={6} className="mb-4">
            <h3>Native Polkadot compatibility</h3>
            <p className=" text-white">
              Blockchains built with Substrate are natively compatible with
              Polkadot, so they can be easily connected to Polkadot as a
              parachain or parathread.
            </p>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <h3>Fork-free upgrades</h3>
            <p className=" text-white">
              Upgrade your blockchain without a hard fork. Your runtime is a
              Wasm binary stored on-chain and can be updated using your chain’s
              governance mechanism.
            </p>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <h3>Plug-and-play modular framework</h3>
            <p className=" text-white">
              Substrate allows you to simply plug in the functionalities you
              need, while also giving you the freedom to customize as needed.
            </p>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <h3>Interchain connectivity</h3>
            <p className=" text-white">
              By connecting your blockchain to Polkadot, your blockchain will be
              able to pass arbitrary messages to other chains in the Polkadot
              network.
            </p>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <h3>Instant security</h3>
            <p className=" text-white">
              Simply by connecting your blockchain to Polkadot, your blockchain
              will be secured by Polkadot’s pooled security.
            </p>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <h3>Multiple languages</h3>
            <p className=" text-white">
              With Substrate, you can write your blockchain logic in any
              language that can compile to WebAssembly (Rust, C/C++, C#, Go,
              etc).
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default EasilyBuild;
