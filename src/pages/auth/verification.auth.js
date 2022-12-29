import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthService } from "../../services";

const VerificationAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(
    location.state && location.state.email ? location.state.email : ""
  );
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkUserIslogedInAndRedirect = () => {
    // check if user is loged in then redirect it to home or profile page
    const isLogedIn = AuthService.isLoggedIn();
    if (isLogedIn) {
      navigate("/shop", { replace: true });
    }
  };

  const scrollToTop = () => {
    // scroll to top on load window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkUserIslogedInAndRedirect();
    // on page load focus on name field
    if (location.state && location.state.email) {
      const verificationField = document.getElementById("verification_code");
      verificationField.focus();
    } else {
      let emailField = document.getElementById("email");
      emailField.focus();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await AuthService.verifyCode(email, verificationCode)
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setMessage(res.message);
        setIsLoading(false);
        scrollToTop();

        // redirect the user to login page
        setTimeout(() => {
          navigate("/login", {
            replace: true,
            state: { email: email },
          });
          window.location.reload(true);
        }, 1500);
        // setTimeout(() => {
        // redirect();
        // setInterval(
        //   () => {
        // navigate("/login", {
        //   replace: true,
        //   state: { email: email },
        // });
        //   },
        //   1500
        // );
        //
        // navigate("/login", {
        //   replace: true,
        //   state: { email: email },
        // });
        // alert("hello")
        // }, 1500);
      })
      .catch((err) => {
        setSuccess(false);
        setMessage(err.response.data.message);
        setIsLoading(false);
        scrollToTop();
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
              <li className="active">Verfication Code</li>
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
                      <h1 className="page-title v1">Verfication</h1>
                    </div>
                    <div className="page-content">
                      <p>Verify account</p>
                      <form
                        className="login-form"
                        onSubmit={(e) => {
                          handleSubmit(e);
                        }}
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
                              location.state && location.state.email
                                ? location.state.email
                                : ""
                            }
                          />
                          <label>
                            Verification Code <span className="f-red">*</span>
                          </label>
                          <input
                            type="number"
                            id="verification_code"
                            name="verification_code"
                            className="form-control bdr"
                            required={true}
                            value={verificationCode}
                            minLength={6}
                            maxLength={6}
                            onChange={(e) =>
                              setVerificationCode(e.target.value)
                            }
                          />
                        </div>
                        <div className="flex lr">
                          <button
                            type="submit"
                            className="btn btn-submit btn-gradient"
                            disabled={!email || !verificationCode}
                          >
                            Verify
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

export default VerificationAuth;
