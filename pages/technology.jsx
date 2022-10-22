import HeroBanner from "../components/utils/HeroBanner";
import AnyTypeData from "../components/AnyTypeData";
import BannerBox from "../components/utils/BannerBox";

export default function TechnologyPage() {
  return (
    <div className="technology-page">
      <>
        <HeroBanner title="A scalable, interoperable & secure network protocol for the next web" />
        <AnyTypeData />
        <div className="wrapper py-5 text-white bg-primary-grad">
          <BannerBox heading="Network Glossary">
            <p className="text-white">
              Polkadot unites a network of heterogeneous blockchains called
              parachains and parathreads. These chains connect to and are
              secured by the Polkadot Relay Chain. They can also connect with
              external networks via bridges.
            </p>
          </BannerBox>
        </div>
      </>
    </div>
  );
}
