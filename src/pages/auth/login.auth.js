import React, { useEffect, useState } from "react";
import { AuthService, StorageService } from "../../services";
import { useNavigate, useLocation, Link } from "react-router-dom";

const LoginAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(AuthService.isLoggedIn());

  const scrollToTop = () => {
    // scroll to top on load window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const checkUserIslogedInAndRedirect = () => {
    // check if user is loged in then redirect it to home or profile page
    // const isLogedIn = AuthService.isLoggedIn();
    if (isLogedIn) {
      navigate("/shop", { replace: true });
    }
  };

  useEffect(() => {
    checkUserIslogedInAndRedirect();
    // const isLogedIn = AuthService.isLoggedIn();
    // if (isLogedIn) {
    //   navigate("/shop", { replace: true });
    //   window.location.reload();
    // }

    // alert("login page")
    // on page load focus on name field
    // console.log(location);
    if (
      location.state &&
      location.state.email &&
      location.state.email !== null
    ) {
      setEmail(location.state.email);
      let passField = document.getElementById("password");
      // console.log(emailField)
      if (passField !== null) {
        passField.focus();
      }
    } else {
      let emailField = document.getElementById("email");
      // console.log(emailField)
      if (emailField !== null) {
        emailField.focus();
      }
    }

    // scroll to top on load window
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "smooth",
    // });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccess("");

    setIsLoading(true);

    let user_data = {
      email: email,
      password: password,
    };

    AuthService.login(user_data)
      .then((res) => {
        // console.log(res);
        setSuccess(true);
        setMessage(res.message);
        setIsLoading(false);
        scrollToTop();
        // console.log(res.user)
        // // store the data into local storage
        StorageService.setSession(res.token, res.user);
        // redirect the user to shop page

        // if (location && location.state) {
        //   setTimeout(() => {
        //     navigate(-1, {
        //       replace: true,
        //     });
        //     window.location.reload(true);
        //   }, 1500);
        // } else {
        setTimeout(() => {
          if (res.user.user_type === "admin") {
            navigate("/admin", {
              replace: true,
            });
          } else {
            navigate("/shop", {
              replace: true,
            });
          }

          window.location.reload(true);
        }, 1500);
        // }
      })
      .catch((error) => {
        // console.log(error.response.data)
        // console.log(error.response.data.message);
        setSuccess(false);
        scrollToTop();
        // if (error.response.data.message) {
        //   console.log(error)
        setMessage(error.response.data.message);
        // }

        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="wrappage">
        <div className="container container-240">
          <div className="myaccount">
            <ul className="breadcrumb v3">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Login</li>
            </ul>
            {isLoading ? (
              <div className="d-flex">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                <div className="row flex justify-arround w-75">
                  {message && message !== null ? (
                    success ? (
                      <div
                        className="alert alert-success  w-100 text-center"
                        role="alert"
                      >
                        {message}
                      </div>
                    ) : (
                      <div
                        className="alert alert-danger w-100 text-center"
                        role="alert"
                      >
                        {message}
                      </div>
                    )
                  ) : (
                    <></>
                  )}
                </div>
                <div className="row flex pd justify-arround">
                  <div className="account-element bd-7 ">
                    <div className="cmt-title text-center abs">
                      <h1 className="page-title v1">Login</h1>
                    </div>
                    <div className="page-content">
                      <p>Login account to get rental products!</p>
                      <form
                        className="register-form"
                        method="post"
                        onSubmit={(e) => handleSubmit(e)}
                      >
                        <div className="form-group">
                          <label>
                            Email{" "}
                            <span className="f-red" htmlFor="email">
                              *
                            </span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control bdr"
                            required={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={
                              location.state &&
                              location.state.email &&
                              location.state.email !== null
                            }
                          />

                          <label htmlFor="password">
                            Password <span className="f-red">*</span>
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="form-control bdr"
                            name="password"
                            required={true}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={8}
                            maxLength={12}
                          />
                        </div>
                        <div className="flex lr">
                          <button
                            type="submit"
                            className="btn btn-submit btn-gradient"
                            disabled={!email || !password}
                          >
                            Login
                          </button>
                          <Link
                            type="submit"
                            className="btn btn-submit btn-gradient"
                            to="/register"
                          >
                            Sign Up Now
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAuth;
