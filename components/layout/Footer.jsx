import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FaRedditAlien, FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import Button from "../utils/Button";

function Footer() {
  return (
    <footer className="footer bg-dark pb-2 pt-5 px-2 text-white">
      <Container>
        <Row>
          <Col xs={6} md={4} lg={3}>
            <h2>General</h2>
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Telemetry</Link>
              </li>
              <li>
                <Link href="/">Roadmap</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Support</Link>
              </li>
              <li>
                <Link href="/">Build</Link>
              </li>
              <li>
                <Link href="/">Grants and Bounties</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <h2>Technology</h2>
            <ul>
              <li>
                <Link href="/">Technology</Link>
              </li>
              <li>
                <Link href="/">Staking</Link>
              </li>
              <li>
                <Link href="/">XCM</Link>
              </li>
              <li>
                <Link href="/">Parachains</Link>
              </li>
              <li>
                <Link href="/">Token</Link>
              </li>
              <li>
                <Link href="/">Substrate</Link>
              </li>
              <li>
                <Link href="/">Lightpaper</Link>
              </li>
              <li>
                <Link href="/">Whitepaper</Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <h2>Community</h2>
            <ul>
              <li>
                <Link href="/">Community</Link>
              </li>
              <li>
                <Link href="/">Academy</Link>
              </li>
              <li>
                <Link href="/">Auctions</Link>
              </li>
              <li>
                <Link href="/">Treasury</Link>
              </li>
              <li>
                <Link href="/">Documentation</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Brand Assets</Link>
              </li>
              <li>
                <Link href="/">Element Chat</Link>
              </li>
              <li>
                <Link href="/">Medium</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3}>
            <div className="icons align-items-center gap-2 d-flex justify-content-between">
              <span className="icon">
                <FaGithub size={20} />
              </span>
              <span className="icon">
                <FaDiscord size={20} />
              </span>
              <span className="icon">
                <FaTwitter size={20} />
              </span>
              <span className="icon">
                <FaRedditAlien size={20} />
              </span>
              <span className="icon">
                <AiFillYoutube size={20} />
              </span>
            </div>
            <p className="text-white my-3">
              Subscribe to the newsletter to hear about Polkadot updates and
              events.
            </p>
            <Button className="fw-bold text-white py-1">Subscribe</Button>
          </Col>
        </Row>
        <div className="d-flex mt-4 align-items-center gap-4">
          <Image src="/assets/footer-logo.svg" height={75} width={150} alt="" />
          <p className="text-white mb-0 mt-2 opacity-50">
            © 2022 Web3 Foundation | Impressum | Disclaimer | Privacy
          </p>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
