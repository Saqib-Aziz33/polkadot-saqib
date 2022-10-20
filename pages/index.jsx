// components
import Hero from "../components/Hero";
import HomeNetwork from "../components/HomeNetwork";
import BannerBox from "../components/utils/BannerBox";
import Button from "../components/utils/Button";
import Powering from "../components/Powering";
import Blogs from "../components/Blogs";
import Link from "next/link";
// data
import blogs from "../libs/homeBlogs.json";
import homeNetworkingData from "../libs/homeNetworking.json";
import tokenInfo from "../libs/tokenInfo.json";

export async function getStaticProps() {
  return {
    props: { blogs, homeNetworkingData, tokenInfo },
  };
}

export default function Home({ blogs, homeNetworkingData, tokenInfo }) {
  return (
    <section className="home">
      <Hero />
      <HomeNetwork homeNetworkingData={homeNetworkingData} />
      <BannerBox heading="Learn more about Polkadot's technology">
        <Button>Discover Polkadot</Button>
      </BannerBox>
      <Powering tokenInfo={tokenInfo} />
      <BannerBox heading="From The Blogs" />
      <Blogs blogs={blogs} />
      <BannerBox heading="Want to get involved?">
        <Button>Join the community</Button>
        <p className="mt-4">
          or learn about how to <Link href="/">build on Polkadot.</Link>
        </p>
      </BannerBox>
    </section>
  );
}
