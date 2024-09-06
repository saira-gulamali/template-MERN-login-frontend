import styled from "styled-components";
// import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../authContext";
import api from "../utils/axios";

const Navbar = () => {
  const { user, removeUser } = useGlobalContext();
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await api.delete(`/api/v1/auth/logout`);
      removeUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/" className="home-link">
          {/* <img src={logo} alt="jobs app" className="logo" /> */}
          Home Logo
        </Link>
        {user && (
          <div className="nav-links">
            <p>hello, {user.name}</p>
            <button
              className="btn btn-small"
              onClick={() => {
                logoutUser();
              }}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--white);
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
  }
  .nav-links p {
    margin: 0;
    text-transform: capitalize;
    margin-bottom: 0.25rem;
  }
  .home-link {
    display: flex;
    align-items: flex-end;
  }
  @media (min-width: 776px) {
    .nav-links {
      flex-direction: row;
      align-items: center;
    }
    .nav-links p {
      margin: 0;
      margin-right: 1.5rem;
    }
  }
`;

export default Navbar;
