import { Container } from "react-bootstrap";

function BannerBox({ children, heading }) {
  return (
    <div className="banner-box my-5 py-5">
      <Container className="text-center" style={{ maxWidth: "600px" }}>
        <h2 className="display-6 fw-bold">{heading}</h2>
        <div className="mt-4">{children}</div>
      </Container>
    </div>
  );
}
export default BannerBox;
