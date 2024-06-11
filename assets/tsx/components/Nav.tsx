import githubIcon from "../../icons/github.svg";

export default function Nav() {
  return (
    <nav>
      <div className="logo-container">
        <span>Unix</span>
        <span>Css</span>
        <sup>&copy;</sup>
      </div>
      <a
        href="https://github.com/favorodera/unixCss"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-social"
      >
        <img src={githubIcon} alt="" />
      </a>
    </nav>
  );
}
