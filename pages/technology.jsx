import HeroBanner from "../components/utils/HeroBanner";
import AnyTypeData from "../components/AnyTypeData";
import BannerBox from "../components/utils/BannerBox";
import Button from "../components/utils/Button";
import { Container, Row, Col } from "react-bootstrap";
// data
import technologyData from "../libs/techData.json";

export async function getStaticProps() {
  return { props: { techData: technologyData } };
}
export default function TechnologyPage({ techData }) {
  return (
    <div className="technology-page">
      <>
        <HeroBanner title="A scalable, interoperable & secure network protocol for the next web" />
        <AnyTypeData />
        <div className="wrapper py-5 text-white bg-primary-grad">
          <BannerBox heading="Network Glossary">
            <p className="text-white">
              Polkadot unites a network of heterogeneous blockchains called
              parachains and parathreads. These chains connect to and are
              secured by the Polkadot Relay Chain. They can also connect with
              external networks via bridges.
            </p>
          </BannerBox>
        </div>

        <Container className="my-5">
          {techData.map((item, i) => (
            <Row key={item.title}>
              <Col md={4} className={`${i % 2 === 0 && "order-md-2"} my-5`}>
                <img
                  src={item.img}
                  className="img-fluid d-block mx-auto"
                  alt=""
                  style={{ maxWidth: "200px" }}
                />
              </Col>
              <Col md={8} className={`my-5 p-2 p-md-4`}>
                <h2>{item.title}</h2>
                <div dangerouslySetInnerHTML={item.text}></div>
              </Col>
            </Row>
          ))}
        </Container>

        <BannerBox heading="Want to get started">
          <Button>Build on Polkadot</Button>
        </BannerBox>
      </>
    </div>
  );
}
