import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "./utils/Button";

function Hero() {
  const outer = useRef(null);
  const inner = useRef(null);
  const middle = useRef(null);

  useEffect(() => {
    function rotateImg() {
      if (window.scrollY < 1000) {
        outer.current.style.rotate = `${Math.floor(
          (window.scrollY % 180) / 10
        )}deg`;
        middle.current.style.rotate = `${Math.abs(
          Math.floor(((window.scrollY % 180) - 180) / 10)
        )}deg`;
        inner.current.style.rotate = `-${Math.floor(window.scrollY / 5)}grad`;
      }
    }
    window.addEventListener("scroll", rotateImg);

    return () => {
      window.removeEventListener("scroll", rotateImg);
    };
  }, []);
  return (
    <div className="hero mt-5 pb-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-3">
            <h1 className="display-2 fw-bold">
              The multichain vision for Web3 starts here.
            </h1>
            <p className="my-4" style={{ fontSize: "1.1rem" }}>
              Polkadot unites and secures a growing ecosystem of specialized
              blockchains called parachains. Apps and services on Polkadot can
              securely communicate across chains, forming the basis for a truly
              interoperable decentralized web.
            </p>
            <div className="d-flex flex-wrap gap-4">
              <Button>Learn Parachains</Button>
              <Button>Learn Cross-Chain</Button>
            </div>
          </Col>
          <Col lg={6} className="mb-3">
            <div className="scroll-animation">
              <div ref={outer} className="outer">
                <div ref={middle} className="middle">
                  <div ref={inner} className="inner"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Hero;
