import Image from "next/image";
import Link from "next/link";

function Blog({ blog }) {
  return (
    <div className="blog h-100">
      <Image
        src={blog.img}
        height={100}
        width={200}
        layout="responsive"
        alt=""
      />
      <div className="p-4">
        <p className="text-primary">{blog.by}</p>
        <Link href="/blogs">
          <h4
            className="my-3"
            style={{ userSelect: "none", cursor: "pointer" }}
          >
            {blog.title}
          </h4>
        </Link>
        <p style={{ opacity: "0.8", fontSize: "1.1rem" }}>{blog.text}</p>
      </div>
    </div>
  );
}
export default Blog;
