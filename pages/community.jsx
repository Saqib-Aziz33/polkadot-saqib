import HeroBanner from "../components/utils/HeroBanner";
import RunNode from "../components/RunNode";
import BecomeValidator from "../components/BecomeValidator";
// data
import communityPageData from "../libs/communityPageData.json";

export async function getStaticProps() {
  return {
    props: { communityPageData },
  };
}

export default function CommunityPage({ communityPageData }) {
  console.log(communityPageData);
  return (
    <div className="community-page">
      <>
        <HeroBanner title="Join the Polkadot community">
          <p className="lead">
            Polkadot is a 100% open-source project created to enable a
            decentralized web and better society. Anyone can contribute.
          </p>
        </HeroBanner>
        <RunNode data={communityPageData} />
        <BecomeValidator />
      </>
    </div>
  );
}
