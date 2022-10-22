import { Container, Navbar, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const navLinks = [
  { title: "Technology", url: "/technology" },
  { title: "Community", url: "/community" },
  { title: "About", url: "/about" },
  { title: "Blog", url: "/blog" },
  { title: "Build", url: "/build" },
  { title: "Contact", url: "contact" },
];

function Header() {
  const [showLang, setShowLang] = useState(false);
  useEffect(() => {
    document.getElementById("main").addEventListener("click", () => {
      setShowLang(false);
    });
  }, []);
  return (
    <header className="header">
      <Container className="top opacity-50 pt-3 justify-content-between align-items-center d-none d-sm-flex">
        <div className="lang-selector">
          <p className="mb-0" onClick={() => setShowLang(!showLang)}>
            EN
          </p>
          {showLang && (
            <div className="options">
              <span>Urdu</span>
              <span>Hindko</span>
              <span>Pashto</span>
              <span>Punjabi</span>
            </div>
          )}
        </div>
        <div className="d-flex gap-4 align-items-center">
          <p>Lightpaper</p>
          <p>Whitepaper</p>
          <p>Wiki</p>
          <div className="icons align-items-center gap-2 d-none d-md-flex">
            <span className="icon">
              <FaGithub />
            </span>
            <span className="icon">
              <FaDiscord />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
          </div>
          <button className="btn btn-sm">Support</button>
        </div>
      </Container>

      <hr className="opacity-50 d-none d-sm-block" />

      <Navbar expand="lg" className="py-0">
        <Container>
          <Link href="/">
            <Navbar.Brand>
              <Image
                src="/assets/logo.svg"
                style={{ cursor: "pointer" }}
                height={90}
                width={170}
                alt=""
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            className="bg-light"
            style={{ border: "none" }}
            aria-controls="basic-navbar-nav"
          >
            <FaBars size={25} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link) => (
                <Link key={link.title} href={link.url}>
                  <a className="nav-link">
                    <span>.</span>
                    {link.title}
                  </a>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
