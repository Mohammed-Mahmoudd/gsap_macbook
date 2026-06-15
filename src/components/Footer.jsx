import { footerLinks } from "../constants";

function Footer() {
  return (
    <footer>
      <div className="info">
        <p>
          Copyright &copy; 2024 Apple Inc. All rights reserved.
        </p>
        <p>
          Designed by <span>Mohammed</span>
        </p>
      </div>
      <hr />
      <div className="links">
        <p>United States</p>
        <ul>
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
