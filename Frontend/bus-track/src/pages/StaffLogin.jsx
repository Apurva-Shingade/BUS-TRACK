import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import monthdateschedule from "../assets/Images/month-date-schedule.svg";
// import PassengerTracking from "../assets/Images/PassengerTracking.svg";
// import routemanagment from "../assets/Images/route-managment.svg";

const StaffLogin = () => {
  return (
    <div className="staff-login-page">

      <Container fluid className="p-0">

        <Row className="h-100 m-0">

          {/* Left Column */}
          <Col
            lg={5}
            className="staff-left-panel d-none d-lg-flex flex-column align-items-center justify-content-center p-5"
          >

            <div className="text-center mb-5">

              <div className="staff-logo-circle mx-auto d-flex align-items-center justify-content-center mb-3">
                <span className="staff-logo-icon">
                  
                </span>
              </div>

              <h2 className="staff-portal-title mt-2">
                Staff Portal
              </h2>

              <p className="staff-subtitle">
                Manage routes, schedules & passengers
              </p>

            </div>

            <div className="staff-feature-container">

              {/* Route Management */}
              <Card className="staff-feature-card mb-3">

                <Card.Body className="d-flex align-items-center p-3">

                  <div className="staff-feature-icon route-icon me-3">
                    {/* <img
                        src={routemanagmnet}
                        alt="routemanagement"
                        className="feature-image"
                      /> */}
                  </div>

                  <div>

                    <h6 className="staff-feature-title">
                      Route Management
                    </h6>

                    <small className="staff-feature-description">
                      Update and manage bus routes
                    </small>

                  </div>

                </Card.Body>

              </Card>


              {/* Schedule Control */}
              <Card className="staff-feature-card mb-3">

                <Card.Body className="d-flex align-items-center p-3">

                  <div className="staff-feature-icon schedule-icon me-3">
                    {/* <img
                        src={monthdateschedule}
                        alt="monthdateschedule"
                        className="feature-image"
                      /> */}
                  </div>

                  <div>

                    <h6 className="staff-feature-title">
                      Schedule Control
                    </h6>

                    <small className="staff-feature-description">
                      Set and modify bus schedules
                    </small>

                  </div>

                </Card.Body>

              </Card>


              {/* Passenger Tracking */}
              <Card className="staff-feature-card">

                <Card.Body className="d-flex align-items-center p-3">

                  <div className="staff-feature-icon passenger-icon me-3">
                    {/* <img
                        src={PassengerTracking}
                        alt="Passenger Tracking"
                        className="feature-image"
                      /> */}
                  </div>

                  <div>

                    <h6 className="staff-feature-title">
                      Passenger Tracking
                    </h6>

                    <small className="staff-feature-description">
                      Monitor ridership and capacity
                    </small>

                  </div>

                </Card.Body>

              </Card>

            </div>

          </Col>


          {/* Right Column */}
          <Col
            lg={7}
            xs={12}
            className="d-flex align-items-center justify-content-center p-4 p-lg-5"
          >

            <div className="staff-login-form-container">

              <div className="text-center mb-4">

                <h2 className="staff-signin-title">
                  Staff Sign In
                </h2>

                <p className="staff-signin-subtitle">
                  Access the staff management portal
                </p>

              </div>


              {/* Role Toggle */}
              <div className="d-flex p-1 mb-4 staff-role-toggle">

                <Link
                  to="/login"
                  className="staff-role-link staff-inactive-role"
                >
                  User
                </Link>

                <Link
                  to="/staff-login"
                  className="staff-role-link staff-active-role"
                >
                  Staff
                </Link>

                <div className="staff-role-link staff-disabled-role">
                  Admin
                </div>

              </div>


              <Form>

                {/* Staff ID */}
                <Form.Group className="mb-4">

                  <Form.Label className="staff-form-label">
                    STAFF ID
                  </Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter your staff ID (e.g. BT-2024-001)"
                    className="staff-input shadow-none py-2"
                  />

                </Form.Group>


                {/* Password */}
                <Form.Group className="mb-4">

                  <Form.Label className="staff-form-label">
                    PASSWORD
                  </Form.Label>

                  <div className="staff-password-wrapper">

                    <Form.Control
                      type="password"
                      placeholder="••••••••••••"
                      className="border-0 shadow-none py-2 staff-password-input"
                    />

                    <Button
                      variant="link"
                      className="staff-show-btn text-decoration-none shadow-none px-3"
                    >
                      Show
                    </Button>

                  </div>

                </Form.Group>


                {/* Remember & Forgot */}
                <div className="d-flex justify-content-between align-items-center mb-4">

                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    id="remember-me"
                    className="remember-me"
                  />

                  <a
                    href="#forgot"
                    className="forgot-password"
                  >
                    Forgot password?
                  </a>

                </div>


                {/* Sign In */}
                <Button className="w-100 py-2 mb-4 staff-signin-btn">
                  Sign In to Staff Portal →
                </Button>

              </Form>


              {/* Divider */}
              <div className="d-flex align-items-center mb-4">

                <hr className="flex-fill m-0 staff-divider-line" />

                <span className="px-3 staff-divider-text">
                  or continue with
                </span>

                <hr className="flex-fill m-0 staff-divider-line" />

              </div>


              {/* Google */}
              <Button
                variant="outline-dark"
                className="w-100 py-2 mb-4 d-flex align-items-center justify-content-center shadow-none staff-google-btn"
              >

                <span className="staff-google-letter">
                  G
                </span>

                Continue with Google

              </Button>


              {/* Admin Contact */}
              <div className="text-center mb-4">

                <span className="staff-contact-text">
                  Not a staff member? Contact admin
                </span>

                <br />

                <a
                  href="mailto:admin@bustrack.in"
                  className="admin-email"
                >
                  admin@bustrack.in
                </a>

              </div>


              {/* Security */}
              <div className="text-center p-2 staff-security-box">

                <span className="staff-security-text">
                  🔒 Secure Staff Access · All sessions are logged
                </span>

              </div>

            </div>

          </Col>

        </Row>

      </Container>

    </div>
  );
};

export default StaffLogin;