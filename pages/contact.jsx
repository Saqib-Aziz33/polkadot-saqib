import HeroBanner from "../components/utils/HeroBanner";
import BannerBox from "../components/utils/BannerBox";
import Button from "../components/utils/Button";
import { Col, Container, Row } from "react-bootstrap";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <>
        <HeroBanner title="Get in touch with the Polkadot team" />

        <section className="bg-dark my-5 py-5">
          <Container>
            <Row className="col-card-wrapper justify-content-center">
              <Col lg={4} md={6} className="mb-3">
                <div className="col-card py-3 px-3 px-md-4 d-flex align-items-center bg-white gap-2">
                  <img
                    src="assets/logo-circle-chat.svg"
                    height={50}
                    width={50}
                    alt=""
                  />
                  <div>
                    <h6>For general chat</h6>
                    <p className="mb-3">
                      Join <a href="#">Watecooler</a> or <a href="#">discord</a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="mb-3">
                <div className="col-card py-3 px-3 px-md-4 d-flex align-items-center bg-white gap-2">
                  <img
                    src="assets/logo-circle-newsletter.svg"
                    height={50}
                    width={50}
                    alt=""
                  />
                  <div>
                    <h6>For press inquiries</h6>
                    <p className="mb-3">
                      Please fill out <a href="#">this</a>form
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="mb-3">
                <div className="col-card py-3 px-3 px-md-4 d-flex align-items-center bg-white gap-2">
                  <img
                    src="assets/logo-circle-element.svg"
                    height={50}
                    width={50}
                    alt=""
                  />
                  <div>
                    <h6>For all other inquiries</h6>
                    <p className="mb-3">
                      <a href="#">support.polkadot.network</a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="my-5">
              <Col md={6}>
                <h2 className="text-white">
                  Stay informed of updates and events
                </h2>
                <p className="lead text-white">
                  Subscribe to the newsletter or read the blog
                </p>
              </Col>
              <Col md={6}>
                <h2 className="text-white">Join the teams building Polkadot</h2>
                <p className="lead text-white">
                  See jobs at Web3 Foundation or at Parity Technologies
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <BannerBox heading="Have a question about building on Polkadot?">
          <Button>Lets Connect</Button>
        </BannerBox>
      </>
    </div>
  );
}
