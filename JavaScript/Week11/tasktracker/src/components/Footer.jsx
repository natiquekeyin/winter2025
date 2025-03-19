import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <p>Copyright &copy; 2025</p>
      {/* <a href="/about">About</a> */}

      <Link to="/about">About</Link>
    </footer>
  );
};
export default Footer;
