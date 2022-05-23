import "./header-drop-shadow.style.scss";

const HeaderDropShadow = ({ children, className }) => {
  return (
    <h1 className={`o-header-drop-shadow ` + (className ? className : "")}>
      <span>{children}</span>
    </h1>
  );
};

export default HeaderDropShadow;
