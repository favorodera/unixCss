import githubIcon from "../../icons/github.svg";
import xIcon from "../../icons/x.svg";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div>
        <p>Built By</p>
        <p>favorodera</p>
        <div className="footer-socials">
          <a
            href="https://github.com/favorodera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="" />
          </a>
          <div
            style={{
              width: "0.065rem",
              height: "1rem",
              backgroundColor: "#747474",
            }}
          ></div>
          <a
            href="https://twitter.com/favorodera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={xIcon} alt="" />
          </a>
        </div>
      </div>
      <p>&copy; {year} UnixCss.</p>
    </footer>
  );
}
