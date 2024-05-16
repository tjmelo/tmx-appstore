import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import login from "./login.module.scss";

export const Login: React.FC = (): JSX.Element => {
    return (
      <div className={login.login}>
        <FontAwesomeIcon icon={faUser} />
        <Link data-testid="login" to="/login">
          Login
        </Link>
        <span>|</span>
        <Link data-testid="register" to="/cadastre">
          Register
        </Link>
      </div>
    );
  };
