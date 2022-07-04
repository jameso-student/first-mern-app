import React from "react";
import { Link } from 'react-router-dom';

export default function Links() {
    return (
        <div>
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    My first MERN demo application
                </Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav mr-auto">
                        <div className="collpase navbar-collapse">
                            <Link to="/movies/list" className="nav-link">
                                List Movies
                            </Link>
                        </div>
                        <div className="collpase navbar-collapse">
                            <Link to="/movies/create" className="nav-link">
                                Create Movie
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}