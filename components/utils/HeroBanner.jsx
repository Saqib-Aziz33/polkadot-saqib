import { Container } from "react-bootstrap";

function HeroBanner({ title, children }) {
  return (
    <div className="page-hero-banner my-5 py-5 text-center">
      <Container style={{ maxWidth: "800px" }}>
        <h2 data-aos="fade-up" className="display-2 fw-bold">
          {title}
        </h2>
        <div className="my-5">{children}</div>
      </Container>
    </div>
  );
}
export default HeroBanner;
