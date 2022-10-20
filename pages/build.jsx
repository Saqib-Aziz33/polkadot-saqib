import Button from "../components/utils/Button";
import HeroBanner from "../components/utils/HeroBanner";

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
      </>
    </div>
  );
}
