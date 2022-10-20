import HeroBanner from "../components/utils/HeroBanner";

export default function CommunityPage() {
  return (
    <div className="community-page">
      <>
        <HeroBanner title="Join the Polkadot community">
          <p className="lead">
            Polkadot is a 100% open-source project created to enable a
            decentralized web and better society. Anyone can contribute.
          </p>
        </HeroBanner>
      </>
    </div>
  );
}
