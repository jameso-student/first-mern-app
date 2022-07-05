import React from "react";

import Logo from "./Logo";
import Links from "./Links";

export default function NavBar() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="navbar navbar-expand-lg navbar-dark bg-dark mb-20">
                    <Logo />
                    <Links />
                </div>
            </div>
        </React.Fragment>
    );
}