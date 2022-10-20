// components
import Hero from "../components/Hero";
import HomeNetwork from "../components/HomeNetwork";
import BannerBox from "../components/utils/BannerBox";
import Button from "../components/utils/Button";

export default function Home() {
  return (
    <section className="home">
      <Hero />
      <HomeNetwork />
      <BannerBox heading="Learn more about Polkadot's technology">
        <Button>Discover Polkadot</Button>
      </BannerBox>
    </section>
  );
}
