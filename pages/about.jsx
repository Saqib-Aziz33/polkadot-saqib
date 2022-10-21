import HeroBanner from "../components/utils/HeroBanner";
import Mission from "../components/Mission";

export default function AboutPage() {
  return (
    <div className="about-page">
      <>
        <HeroBanner title="About Polkadot, a platform for Web3"></HeroBanner>
        <Mission />
      </>
    </div>
  );
}
