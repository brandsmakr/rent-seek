import React, { useEffect, useState } from "react";
import { AuthService } from "../../services";
import { useNavigate } from "react-router-dom";

const RegisterAuth = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnic, setCnic] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passMatchedError, setPassMatchedError] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    const isLogedIn = AuthService.isLoggedIn();
    if (isLogedIn) {
      navigate("/shop", { replace: true });
    }
  };

  useEffect(() => {
    checkUserIslogedInAndRedirect();
    // on page load focus on name field
    const nameField = document.getElementById("name");
    nameField.focus();

    
  }, []);

  const checkPasswordMatched = () => {
    if (password !== confirmPassword) {
      setPassMatchedError(true);
    } else {
      setPassMatchedError(false);
    }
  };

  const registerUser = () => {
    setIsLoading(true);

    let userData = {
      name: name,
      email: email,
      password: password,
      cnic: cnic,
    };

    AuthService.register(userData)
      .then((res) => {
        setSuccess(true);
        setMessage(res.message);
        setIsLoading(false);
        scrollToTop();
        // redirect the user to verfication page
        setTimeout(() => {
          navigate("/verify-account", {
            replace: true,
            state: { email: email },
          });
          window.location.reload(true);
        }, 1500);
      })
      .catch((err) => {
        setSuccess(false);
        setMessage(err.response.data.message);
        setIsLoading(false);
        scrollToTop();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passMatchedError) {
      registerUser();
    } else {
      return checkPasswordMatched();
    }
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
              <li className="active">Register</li>
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
                        class="alert alert-success  w-100 text-center"
                        role="alert"
                      >
                        {message}
                      </div>
                    ) : (
                      <div
                        class="alert alert-danger w-100 text-center"
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
                      <h1 className="page-title v1">Register</h1>
                    </div>
                    <div className="page-content">
                      <p>Create your very own account</p>
                      <form
                        className="register-form"
                        method="post"
                        onSubmit={(e) => handleSubmit(e)}
                      >
                        <div className="form-group">
                          <label htmlFor="name">
                            Name <span className="f-red">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="form-control bdr"
                            name="name"
                            required={true}
                            value={name}
                            minLength={3}
                            maxLength={24}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label>
                            Email{" "}
                            <span className="f-red" htmlFor="email">
                              *
                            </span>
                          </label>
                          <input
                            type="email"
                            id="emial"
                            name="email"
                            className="form-control bdr"
                            required={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="cnic">
                            Cnic{" "}
                            <span className="f-red" htmlFor="cnic">
                              *
                            </span>
                          </label>
                          <input
                            type="number"
                            id="cnic"
                            name="cnic"
                            className="form-control bdr"
                            required={true}
                            value={cnic}
                            minLength={13}
                            // maxLength={13}
                            onChange={(e) => setCnic(e.target.value)}
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
                          <label htmlFor="confirm_password">
                            Confirm Password <span className="f-red">*</span>
                          </label>
                          <input
                            type="password"
                            id="confirm_password"
                            className="form-control bdr error-feedback"
                            name="confirm_password"
                            required={true}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={(e) => checkPasswordMatched()}
                            minLength={8}
                            maxLength={12}
                          />
                          {passMatchedError ? (
                            <small className="error">
                              Both Password Must be Matched
                            </small>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="flex lr">
                          <button
                            type="submit"
                            className="btn btn-submit btn-gradient"
                            disabled={
                              !name ||
                              !email ||
                              !cnic ||
                              !password ||
                              !confirmPassword
                            }
                          >
                            Register
                          </button>
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

export default RegisterAuth;
