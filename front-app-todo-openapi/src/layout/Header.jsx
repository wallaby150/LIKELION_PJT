import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_mini.png";

const Header = () => {
  // 반응형을 위해서
  let [isNavShow, setIsNavShow] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <Link to="/">
          <img
            src={logo}
            alt="Don't Forget Logo"
            className="navbar-brand ps-2"
            style={{ width: "100px", height: "auto", marginRight: "50px" }}
          />
        </Link>
        <button
          onClick={() => setIsNavShow(!isNavShow)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            isNavShow
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
          id="navbarNav"
          style={{
            justifyContent: "end",
          }}
        >
          <ul className="navbar-nav text-end">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todos">
                TODO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/eduinfo">
                EDU INFO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/eatsinfo">
                EATS INFO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
