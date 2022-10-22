import { Container, Stack } from "react-bootstrap";

function InThePress() {
  return (
    <div className="in-the-press my-5 py-5">
      <Container>
        <h2 className="mb-5 text-center">In The Press:</h2>
        <Stack className="flex-row gap-4 justify-content-center flex-wrap">
          <img src="assets/logo-bloomberg.svg" alt="" />
          <img src="assets/logo-coindesk.svg" alt="" />
          <img src="assets/logo-economist.svg" alt="" />
          <img src="assets/logo-techcrunch.svg" alt="" />
          <img src="assets/logo-theblock.svg" alt="" />
          <img src="assets/logo-wsj.svg" alt="" />
        </Stack>
      </Container>
    </div>
  );
}
export default InThePress;
