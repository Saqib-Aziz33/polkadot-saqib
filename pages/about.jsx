import HeroBanner from "../components/utils/HeroBanner";
import Mission from "../components/Mission";
import InThePress from "../components/InThePress";
import BannerBox from "../components/utils/BannerBox";
import Blogs from "../components/Blogs";
import Button from "../components/utils/Button";
// data
import blogs from "../libs/homeBlogs.json";

export async function getStaticProps() {
  return {
    props: { blogs },
  };
}

export default function AboutPage({ blogs }) {
  return (
    <div className="about-page">
      <>
        <HeroBanner title="About Polkadot, a platform for Web3"></HeroBanner>
        <Mission />
        <InThePress />
        <BannerBox heading="From The Blogs" />
        <Blogs blogs={blogs} />
        <BannerBox heading="Want to get involved?">
          <Button>Join the community</Button>
        </BannerBox>
      </>
    </div>
  );
}
