import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import gift from "../assets/Images/gift.svg";
// import clock from "../assets/Images/clock.svg";
// import locationpin from "../assets/Images/location-pin.svg";

import '../index.css';

const UserLogin = () => {
  return (
    <Container fluid className="user-login-page">
      <Row className="g-0">

        {/* Left Column */}
        <Col
          lg={5}
          className="login-left-panel d-none d-lg-flex flex-column align-items-center justify-content-center p-5"
        >

          <div className="text-center mb-5">

            <div className="login-logo-circle mx-auto d-flex align-items-center justify-content-center mb-3">
              <span className="login-logo-icon"></span>
            </div>

            <h4 className="bus-track-title">
              BUS TRACK
            </h4>

            <h2 className="welcome-title mt-2">
              Welcome Back!
            </h2>

            <p className="login-subtitle">
              Sign in to track your bus in real-time
            </p>

          </div>

          <div className="w-100 feature-container">

            {/* Live Bus Tracking */}
            <Card className="feature-card mb-3">
              <Card.Body className="d-flex align-items-center p-3">

                <div className="feature-icon location-icon me-3">
                  <img
                    src={locationpin}
                    alt="Location Pin"
                    className="feature-image"
                  />
                </div>

                <div>
                  <h6 className="feature-title">
                    Live Bus Tracking
                  </h6>

                  <small className="feature-description">
                    Know exactly where your bus is
                  </small>
                </div>

              </Card.Body>
            </Card>

            {/* Real-Time ETAs */}
            <Card className="feature-card mb-3">
              <Card.Body className="d-flex align-items-center p-3">

                <div className="feature-icon clock-icon me-3">
                  <img
                    src={clock}
                    alt="Clock"
                    className="feature-image"
                  />
                </div>

                <div>
                  <h6 className="feature-title">
                    Real-Time ETAs
                  </h6>

                  <small className="feature-description">
                    Accurate arrival predictions
                  </small>
                </div>

              </Card.Body>
            </Card>

            {/* Free Passes */}
            <Card className="feature-card">
              <Card.Body className="d-flex align-items-center p-3">

                <div className="feature-icon gift-icon me-3">
                  <img
                    src={gift}
                    alt="Gift"
                    className="feature-image"
                  />
                </div>

                <div>
                  <h6 className="feature-title">
                    New User: 5 Free Passes
                  </h6>

                  <small className="feature-description">
                    Signup bonus — worth ₹150
                  </small>
                </div>

              </Card.Body>
            </Card>

          </div>

        </Col>

        {/* Right Column - Login Form */}
        <Col
          lg={7}
          xs={12}
          className="d-flex align-items-center justify-content-center p-4 p-lg-5"
        >

          <div className="login-form-container">

            <div className="text-center mb-4">

              <h2 className="sign-in-title">
                Sign In
              </h2>

              <p className="sign-in-subtitle">
                Choose your role to continue
              </p>

            </div>

            {/* Role Toggle */}
            <div className="d-flex p-1 mb-4 role-toggle">

              <Link
                to="/login"
                className="role-link active-role"
              >
                User
              </Link>

              <Link
                to="/staff-login"
                className="role-link inactive-role"
              >
                Staff
              </Link>

              <div className="role-link disabled-role">
                Admin
              </div>

            </div>

            {/* Offer Alert */}
            <div className="d-flex align-items-center p-3 mb-4 offer-alert">

              <span className="offer-icon">
                🎁
              </span>

              <div>

                <div className="offer-title">
                  New User Offer!
                </div>

                <div className="offer-text">
                  Get 5 Free Transit Passes on first sign-up · Worth ₹150
                </div>

              </div>

            </div>

            <Form>

              {/* Mobile Number */}
              <Form.Group className="mb-4">

                <Form.Label className="form-label-custom">
                  MOBILE NUMBER
                </Form.Label>

                <div className="d-flex mobile-input-wrapper">

                  <div className="d-flex align-items-center justify-content-center px-3 country-code">
                    +91
                  </div>

                  <Form.Control
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="border-0 shadow-none py-2 mobile-input"
                  />

                </div>

              </Form.Group>

              {/* OTP */}
              <Form.Group className="mb-4">

                <div className="d-flex justify-content-between align-items-center mb-2">

                  <Form.Label className="m-0 form-label-custom">
                    OTP VERIFICATION
                  </Form.Label>

                  <a
                    href="#resend"
                    className="resend-otp"
                  >
                    Resend OTP
                  </a>

                </div>

                <div className="d-flex justify-content-between gap-2">

                  {[1, 2, 3, 4].map((i) => (

                    <Form.Control
                      key={i}
                      type="text"
                      maxLength="1"
                      className={`text-center py-2 shadow-none otp-input ${
                        i === 1 ? 'active-otp' : ''
                      }`}
                      defaultValue={i === 1 ? '•' : ''}
                    />

                  ))}

                </div>

              </Form.Group>

              {/* Send OTP */}
              <Button className="w-100 py-2 mb-4 send-otp-btn">
                Send OTP →
              </Button>

            </Form>

            {/* Divider */}
            <div className="d-flex align-items-center mb-4">

              <hr className="flex-fill m-0 divider-line" />

              <span className="px-3 divider-text">
                or continue with
              </span>

              <hr className="flex-fill m-0 divider-line" />

            </div>

            {/* Google Login */}
            <Button
              variant="outline-dark"
              className="w-100 py-2 mb-4 d-flex align-items-center justify-content-center shadow-none google-btn"
            >

              <span className="google-letter">
                G
              </span>

              Continue with Google

            </Button>

            {/* Create Account */}
            <div className="text-center mb-3">

              <span className="account-text">
                Don't have an account?
              </span>

            </div>

            <Button
              variant="outline-dark"
              className="w-100 py-2 mb-4 shadow-none create-account-btn"
            >
              Create Account
            </Button>

            {/* Security */}
            <div className="text-center">

              <span className="security-text">
                🔒 Secured with OTP · Your data is safe
              </span>

            </div>

          </div>

        </Col>

      </Row>
    </Container>
  );
};

export default UserLogin;