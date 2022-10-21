import HeroBanner from "../components/utils/HeroBanner";
import Blogs from "../components/Blogs";
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
      </>
    </div>
  );
}
