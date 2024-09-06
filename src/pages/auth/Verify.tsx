// import React from "react";

// export default function Verify() {
//   return <div>Verify</div>;
// }

import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../../authContext";
import api from "../../utils/axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const VerifyPage = () => {
  console.log("in verify component");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isLoading } = useGlobalContext();
  const query = useQuery();
  console.log({ isLoading });
  const role = query.get("role");
  const verifyToken = async () => {
    setLoading(true);
    try {
      await api.post(`/api/v1/auth/verify-email`, {
        verificationToken: query.get("token"),
        email: query.get("email"),
      });
      const token = query.get("token");
      console.log("in verify email");
      console.log(token);
    } catch (error) {
      console.log(error.response);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      verifyToken();
    }
  }, [isLoading]);

  if (loading) {
    return (
      <Wrapper className="page">
        <h2>Loading...</h2>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper className="page">
        <h4>There was an error, please double check your verification link </h4>
      </Wrapper>
    );
  }

  return (
    <>
      {role === "user" && (
        <Wrapper className="page">
          <h2>Account Confirmed</h2>
          <Link to="/login/user" className="btn">
            Please login
          </Link>
        </Wrapper>
      )}
      {role === "agent" && (
        <Wrapper className="page">
          <h2>Account Confirmed</h2>
          <Link to="/login/agent" className="btn">
            Please login
          </Link>
        </Wrapper>
      )}
      {role === "admin" && (
        <Wrapper className="page">
          <h2>Account Confirmed</h2>
          <Link to="/login/user" className="btn">
            Please login
          </Link>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.section``;

export default VerifyPage;
