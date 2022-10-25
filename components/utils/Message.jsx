import Image from "next/image";
import { useState, useEffect } from "react";

function Message() {
  const [showBox, setShowBox] = useState(false);
  useEffect(() => {
    function toggleBox() {
      window.scrollY > 400 ? setShowBox(true) : setShowBox(false);
    }
    window.addEventListener("scroll", toggleBox);

    return () => {
      window.removeEventListener("scroll", toggleBox);
    };
  }, []);
  return (
    <a
      href="https://google.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`message bg-primary ${showBox && "active"}`}
      title="support"
    >
      <Image src="/assets/support.svg" height={30} width={30} alt="" />
    </a>
  );
}
export default Message;
