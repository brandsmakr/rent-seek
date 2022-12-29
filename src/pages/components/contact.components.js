import React, { useEffect, useState } from "react";
import { ContactService } from "../../services";
import { Link } from "react-router-dom";

const ContactComponents = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // scroll to top on load window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    ContactService.leaveContactQuery(data)
      .then((res) => {
        // console.log(res);
        setLoading(false);
        setSuccess(true);
        setResponseMessage(res.message);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
        setSuccess(false);
        setResponseMessage(err.response.data.message);
      });
  };

  return (
    <>
      <div className="e-contact pt-10">
        {responseMessage && responseMessage !== null ? (
          success ? (
            <div class="alert alert-success  w-100 text-center" role="alert">
              {responseMessage}
            </div>
          ) : (
            <div class="alert alert-danger w-100 text-center" role="alert">
              {responseMessage}
            </div>
          )
        ) : (
          <></>
        )}
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-7">
            <div className="contact-info">
              <h1 className="contact-title spc">Contact Details</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has...
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has...
              </p>
            </div>
            <div className="e-contact-address footer-about">
              <h3 className="contact-title v2">Lahore Store</h3>
              <ul className="footer-block-content">
                <li className="address">
                  <span>H8F3+33M Library, St Nagar, Lahore, Punjab 54000</span>
                </li>
                <li className="phone">
                  <span>(+92) 304 1432 583 - (+92) 316 4727 384</span>
                </li>
                <li className="email">
                  <span>
                    <a
                      // href="https://landing.engotheme.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="24674b4a50454750645d4b5156474b4954454a5d0a474b49"
                    >
                      talahrafiq123456@gmail.com
                    </a>
                  </span>
                </li>
                <li className="time">
                  <span>
                    Mon-Sat 9:00pm - 5:00pm &nbsp;&nbsp;&nbsp; Sun : Closed
                  </span>
                </li>
              </ul>
            </div>
            {/* <div className="e-contact-address footer-about">
              <h3 className="contact-title v2">Faislabad Store</h3>
              <ul className="footer-block-content">
                <li className="address">
                  <span>H8F3+33M Library, St Nagar, Lahore, Punjab 54000</span>
                </li>
                <li className="phone">
                  <span>(+92) 304 1432 583 - (+92) 316 4727 384</span>
                </li>
                <li className="email">
                  <span>
                    <a
                      href="https://landing.engotheme.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="5b1834352f3a382f1b22342e293834362b3a352275383436"
                    >
                      brandsmakr8@gmial.com
                    </a>
                  </span>
                </li>
                <li className="time">
                  <span>
                    Mon-Sat 9:00pm - 5:00pm &nbsp;&nbsp;&nbsp; Sun : Closed
                  </span>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-5 pdl">
            <h1 className="contact-title spc">Leave a message</h1>
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  className="form-control bdr"
                  name="name"
                  placeholder="Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                  minLength={5}
                />
                <input
                  type="email"
                  id="email"
                  className="form-control bdr"
                  name="email"
                  placeholder="Emal *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
                <input
                  type="text"
                  id="phone"
                  className="form-control bdr"
                  name="phone"
                  placeholder="Phone Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  min={11}
                  // max={11}
                  required={true}
                />
                <textarea
                  id="message"
                  className="form-control bdr3"
                  name="message"
                  rows={10}
                  placeholder="Your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  min={50}
                  required={true}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-submit btn-gradient"
                  disabled={loading}
                >
                  {loading ? "Sending Message" : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="banner-callus image-bd effect_img2">
          <a href="#">
            <img src="img/banner/h1_b7.jpg" alt="" className="img-responsive" />
          </a>
          <div className="box-center v2">
            <p>Call us free : + (123) 456 789</p>
            <Link to="/shop" className="btn-callus">
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponents;
