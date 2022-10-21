import { useEffect, useRef } from "react";

function TopScrollBar() {
  const progress_bar = useRef(null);

  useEffect(() => {
    function topProgress() {
      let pixelsFromTop = window.scrollY;

      let documentHeight = document.body.clientHeight;

      let windowHeight = window.innerHeight;

      let difference = documentHeight - windowHeight;

      let percentage = (pixelsFromTop * 100) / difference;
      // js
      // document.querySelector(".progress_bar").style.width = `${percentage}%`;
      // react
      progress_bar.current.style.width = `${percentage}%`;
    }
    window.addEventListener("scroll", topProgress);

    return () => {
      window.removeEventListener("scroll", topProgress);
    };
  }, []);
  return (
    // classes not used
    <div
      className="progress_wrapper"
      style={{ position: "fixed", top: 0, left: 0, width: "100%" }}
    >
      <div
        ref={progress_bar}
        className="progress_bar"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: "5px",
          backgroundColor: "#e6007aFF",
        }}
      />
    </div>
  );
}
export default TopScrollBar;
