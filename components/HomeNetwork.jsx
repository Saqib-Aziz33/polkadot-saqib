import { Col, Container, Row } from "react-bootstrap";

const componentData = [
  {
    title: "True interoperability",
    text: {
      __html:
        "Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens. Connecting to Polkadot gives you the ability to interoperate with a wide variety of blockchains in the Polkadot network.",
    },
    img: "/assets/home-icon1.svg",
  },
  {
    title: "Economic & transactional scalability",
    text: {
      __html:
        "Polkadot provides unprecedented economic scalability by enabling a common set of validators to secure multiple blockchains. Polkadot provides transactional scalability by spreading transactions across multiple parallel blockchains.",
    },
    img: "/assets/home-icon2.svg",
  },
  {
    title: "Easy blockchain innovation",
    text: {
      __html:
        "Create a custom blockchain in minutes using the <a href='https://google.com'>Substrate</a> framework. Connect your chain to Polkadot and get interoperability and security from day one. This ease of development helps Polkadot's network grow.",
    },
    img: "/assets/home-icon3.svg",
  },
  {
    title: "High energy efficiency",
    text: {
      __html:
        "Polkadot consumes a small fraction of the energy used by conventional blockchains thanks to its next-generation nominated proof-of-stake (NPoS) model. Using the equivalent of ~6.6 US households worth of energy per year, Polkadot has the <a href='https://google.com'>lowest carbon footprint</a> among proof-of-stake protocols analyzed in recent research.",
    },
    img: "/assets/home-icon4.svg",
  },
  {
    title: "Security for everyone",
    text: {
      __html:
        "Polkadot's novel data availability and validity scheme allows chains to interact with each other in a meaningful way. Chains remain independent in their governance, but united in their security.",
    },
    img: "/assets/home-icon5.svg",
  },
  {
    title: "User-driven governance",
    text: {
      __html:
        "Polkadot has a sophisticated governance system where all stakeholders have a voice. Network upgrades are coordinated on-chain and enacted autonomously and without forking the network, ensuring that Polkadot’s development remains future-proof and community-driven.",
    },
    img: "/assets/home-icon6.svg",
  },
];

function HomeNetwork() {
  return (
    <div className="home-network my-5 pt-5">
      <Container>
        <Row>
          {componentData.map((item) => (
            <Col key={item.title} md={4} className="mb-4 px-4">
              <img src={item.img} width={50} alt="" />
              <h4 className="my-3 fw-bold">{item.title}</h4>
              <p dangerouslySetInnerHTML={item.text}></p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default HomeNetwork;
