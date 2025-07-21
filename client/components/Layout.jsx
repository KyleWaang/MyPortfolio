import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import auth from "../lib/auth-helper";
import { set } from 'lodash';
export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/service">Service</Link> | <Link
        to="/project">Project</Link>| <Link to="/contact">Contact</Link> |
        {!auth.isAuthenticated() && (
          <>
            <Link to="/signup">Sign up</Link> |
            <Link to="/signin">Sign In</Link>
          </>
        )}

        {auth.isAuthenticated() && (
          <Button
            sx={{ color: "#ffffff" }}
            onClick={() => {
              auth.clearJWT(() => navigate("/"));
            }}
          >
            Sign out
          </Button>
        )}
      </nav>
        <br/>
      <hr />
    </>
  );
}