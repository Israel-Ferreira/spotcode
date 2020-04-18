import React from "react";
import {Button, Dropdown} from "react-bulma-components"
import {FaUserCircle}  from "react-icons/fa"
import { useLocation } from "react-router-dom";


const NavbarButton = () => {
  if (useLocation().pathname == "/") {
    return (
      <a href="/users/sign_in" className="is-pulled-right is-right">
        <Button outlined={true} color="white">
          ENTRAR
        </Button>
      </a>
    );
  } else {
    return (
      <Dropdown
        className="is-pulled-right is-right"
        color="dark"
        label={<FaUserCircle size="2em" />}
      >
        <Dropdown.Item value="other">
          <a href="/users/edit">Edit User</a>
        </Dropdown.Item>
        <Dropdown.Item value="other">
          <a href="/users/sign_out">LogOut</a>
        </Dropdown.Item>
      </Dropdown>
    );
  }
};

export default NavbarButton;
