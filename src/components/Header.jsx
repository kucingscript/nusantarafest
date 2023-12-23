import { Link, useLocation, useNavigate } from "react-router-dom";
import { headerLists } from "../constants";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { useUserCredentials } from "../context";

const Header = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [userRole, setUserRole, isLogin] = useUserCredentials();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentIndex = headerLists.findIndex(
      (header) => header.target === location.pathname
    );
    setActiveIndex(currentIndex);
  }, [location.pathname]);

  const handleClick = async () => {
    if (isLogin) {
      try {
        await auth.signOut();
        setUserRole("");
        navigate("/login");
      } catch (error) {
        console.error(error.message);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="header bg-navy pt-2">
      <nav className="container navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src="/images/logo.svg" alt="nusantarafest-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto my-3 my-lg-0">
              {headerLists.map((header, index) => (
                <Link
                  key={index}
                  className={`nav-link ${
                    index === activeIndex ? "active" : ""
                  }`}
                  to={header.target}
                >
                  {header.label}
                </Link>
              ))}
              {+userRole === 1 ? (
                <Link className="nav-link" to={"/admin/dashboard"}>
                  Admin
                </Link>
              ) : (
                ""
              )}
            </div>
            <div className="d-grid">
              <button onClick={handleClick} className="btn-navy">
                {isLogin ? "Sign Out" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {children}
    </header>
  );
};

export default Header;
