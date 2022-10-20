function Button({ children, className }) {
  return (
    <button className={`my-btn ${className}`}>
      <span className="btn-bg-grad" />
      {children}
    </button>
  );
}
export default Button;
