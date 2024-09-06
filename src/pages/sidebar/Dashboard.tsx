import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../../authContext";

function Dashboard() {
  const { user } = useGlobalContext();

  const { name, userId, role } = user;
  return (
    <>
      {role === "user" && (
        <Wrapper className="page">
          <h1>User dashboard</h1>
          <h2>Hello there, {user.name}</h2>
          <p>
            Your ID : <span>{userId}</span>
          </p>
          <p>
            Your Role : <span>{role}</span>
          </p>
        </Wrapper>
      )}
      {role === "agent" && (
        <Wrapper className="page">
          <h1>Agent Dashboard</h1>
          <h2>Hello there, {user.name}</h2>
          <p>
            Your ID : <span>{userId}</span>
          </p>
          <p>
            Your Role : <span>{role}</span>
          </p>
        </Wrapper>
      )}

      {role === "admin" && (
        <Wrapper className="page">
          <h1>Admin Dashboard</h1>
          <h2>Hello there, {user.name}</h2>
          <p>
            Your ID : <span>{userId}</span>
          </p>
          <p>
            Your Role : <span>{role}</span>
          </p>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  p span {
    background: var(--primary-500);
    padding: 0.15rem 0.25rem;
    color: var(--white);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
  }
`;

export default Dashboard;
