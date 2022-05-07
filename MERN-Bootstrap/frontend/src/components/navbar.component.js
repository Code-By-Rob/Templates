import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">MERN + Bootstrap App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample09">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Link' className="nav-link">Link</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Link2' className="nav-link">Link 2</Link>
                            </li>
                        </ul>
                        <form>
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }

}