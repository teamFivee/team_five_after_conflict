import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";

function Login() {
    var [user, setuser] = useState({});
    let history = useHistory();

    var handleChange = (e) => {
        var x = user;
        x[e.target.name] = e.target.value;
        console.log(x);
        setuser(x);
    };

    var login = () => {
        axios
            .post("http://localhost:5000/api/login", user)
            .then((res) => {
                console.log(res);
               
                if (res.data !== "wrong password") {
                    history.push("/");
                    localStorage.setItem("session", JSON.stringify(res.data));
                } else {
                    alert("Wrong user neme or password");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="card bg-dark text-white"
                            style={{ borderRadius: "1rem" }}
                        >
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">
                                        Login
                                    </h2>
                                    <p className="text-white-50 mb-5">
                                        Please enter your userName and password!
                                    </p>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            name="userName"
                                            type="text"
                                            onChange={handleChange}
                                          
                                            className="form-control form-control-lg"
                                        />
                                        <label className="form-label">
                                            User Name
                                        </label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            name="password"
                                            type="password"
                                            onChange={handleChange}
                                            id="typePasswordX"
                                            className="form-control form-control-lg"
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="typePasswordX"
                                        >
                                            Password
                                        </label>
                                    </div>

                                    <button
                                        className="btn btn-outline-light btn-lg px-5"
                                        type="submit"
                                        onClick={login}
                                    >
                                        Login
                                    </button>
                                </div>
                                <div>
                                    <p className="mb-0">
                                        Don't have an account?{" "}
                                        <a
                                            href="/sign-up"
                                            className="text-white-50 fw-bold"
                                            onClick={login}
                                        >
                                            Sign Up
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
