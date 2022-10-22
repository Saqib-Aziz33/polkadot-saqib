import HeroBanner from "../components/utils/HeroBanner";
import Blogs from "../components/Blogs";
import Pagination from "react-bootstrap/Pagination";
import BannerBox from "../components/utils/BannerBox";
import Button from "../components/utils/Button";
// data
import blogs from "../libs/blogs.json";

export async function getStaticProps() {
  return {
    props: { blogs },
  };
}

export default function BlogPage({ blogs }) {
  return (
    <div className="blog-page">
      <>
        <HeroBanner title="Polkadot blog" />
        <Blogs blogs={blogs} />
        <Pagination className="container d-flex justify-content-center">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        <BannerBox heading="Subscribe to the newsletter to hear about updates and events.">
          <Button>Subscribe</Button>
        </BannerBox>
      </>
    </div>
  );
}
