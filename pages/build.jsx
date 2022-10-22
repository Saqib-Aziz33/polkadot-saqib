import Button from "../components/utils/Button";
import HeroBanner from "../components/utils/HeroBanner";
import BannerBox from "../components/utils/BannerBox";
import EasilyBuild from "../components/EasilyBuild";
import { Container, Row, Col } from "react-bootstrap";

export default function BuildPage() {
  return (
    <div className="build-page">
      <>
        <HeroBanner title="Build on Polkadot">
          <p className="lead">
            Polkadot is 100% open-source. Anyone can contribute to the{" "}
            <a href="#">codebase</a>, run a node, or{" "}
            <a href="#">build services</a> on Polkadot. You can even{" "}
            <a href="#">get a grant.</a>
          </p>
          <Button className="mt-4">Start Building</Button>
        </HeroBanner>

        <EasilyBuild />

        <BannerBox heading="Start building your custom parachain with Substrate">
          <Button>Substrate Developer Hub</Button>
          <p className="mt-4">
            or <a href="#">Learn more</a>
          </p>
        </BannerBox>

        <Container className="my-5 py-5">
          <Row>
            <Col md={6} className="mb-4">
              <h2>Get a grant to build the Polkadot ecosystem</h2>
              <p className="lead">
                Web3 Foundation provides grants to steward research and
                development of Polkadot and the Web3 tech stack. The program
                funds work on runtime modules and parachains, development tools,
                UI, protocol integrations, maintenance, and more.
              </p>
              <Button className="py-2">Learn More</Button>
            </Col>
            <Col md={6} className="mb-4">
              <ul>
                <li className="lead">
                  Development and deployment tooling (e.g. IDEs, parachain
                  development kits)
                </li>
                <li className="lead">
                  Polkadot Runtime Modules (e.g. interoperability, governance)
                </li>
                <li className="lead">
                  Second layer protocols (e.g. dedicated parachains, state
                  channels)
                </li>
                <li className="lead">Monitoring (e.g. explorers)</li>
                <li className="lead">
                  Protocol integrations (e.g. bridges to other blockchains,
                  distributed file storage)
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        <BannerBox heading="Have a question about building on Polkadot?">
          <Button>Lets Connect</Button>
        </BannerBox>
      </>
    </div>
  );
}
