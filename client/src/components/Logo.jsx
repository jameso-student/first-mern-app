import React from "react";

import logo from '../logo.svg'

export default function Logo() {
    return (
        <div>
            <a className="navbar-brand" href="https://rmit.instructure.com/">
                <img src={logo} width="50" height="50" />
            </a>
        </div>
    );
}