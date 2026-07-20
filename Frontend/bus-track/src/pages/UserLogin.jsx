import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  return (
    <div className="bg-offwhite min-vh-100 d-flex">
      <Container fluid className="p-0">
        <Row className="h-100 m-0">
          
          <Col lg={5} className="d-none d-lg-flex flex-column align-items-center justify-content-center p-5" style={{ backgroundColor: '#fcfcfc', borderRight: '1px solid #eaeaea' }}>
            <div className="text-center mb-5">
              <div className="mx-auto icon-circle mb-3" style={{ width: '120px', height: '120px', backgroundColor: '#fce8e8' }}>
                <span style={{ fontSize: '3.5rem' }}>🚌</span>
              </div>
              <h4 className="fw-bolder text-secondary" style={{ letterSpacing: '1px' }}>BUS TRACK</h4>
              <h2 className="fw-bolder text-dark mt-2 fs-1">Welcome Back!</h2>
              <p className="text-secondary text-georgia fs-5">Sign in to track your bus in real-time</p>
            </div>

            <div className="w-100" style={{ maxWidth: '400px' }}>
              <Card className="custom-card mb-4 p-2">
                <Card.Body className="d-flex align-items-center p-2">
                  <div className="me-4 icon-circle bg-danger bg-opacity-10 text-danger" style={{ width: '50px', height: '50px' }}>📍</div>
                  <div className="text-georgia">
                    <h6 className="m-0 fw-bold fs-5">Live Bus Tracking</h6>
                    <span className="text-secondary">Know exactly where your bus is</span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="custom-card mb-4 p-2">
                <Card.Body className="d-flex align-items-center p-2">
                  <div className="me-4 icon-circle bg-secondary bg-opacity-10 text-secondary" style={{ width: '50px', height: '50px' }}>⏱️</div>
                  <div className="text-georgia">
                    <h6 className="m-0 fw-bold fs-5">Real-Time ETAs</h6>
                    <span className="text-secondary">Accurate arrival predictions</span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="custom-card p-2">
                <Card.Body className="d-flex align-items-center p-2">
                  <div className="me-4 icon-circle bg-warning bg-opacity-10 text-warning" style={{ width: '50px', height: '50px' }}>🎁</div>
                  <div className="text-georgia">
                    <h6 className="m-0 fw-bold fs-5">New User: 5 Free Passes</h6>
                    <span className="text-secondary">Signup bonus — worth ₹150</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={7} xs={12} className="d-flex align-items-center justify-content-center p-4 p-lg-5">
            <div className="login-box">
              <div className="text-center mb-4">
                <h2 className="fw-bolder text-dark">Sign In</h2>
                <p className="text-secondary text-georgia">Choose your role to continue</p>
              </div>

              <div className="d-flex p-1 mb-4 rounded" style={{ backgroundColor: '#f3f4f6' }}>
                <Link to="/login" className="flex-fill text-center py-2 bg-dark text-white rounded link-no-decor fw-bold">
                  User
                </Link>
                <Link to="/staff-login" className="flex-fill text-center py-2 text-secondary link-no-decor fw-bold text-georgia">
                  Staff
                </Link>
                <div className="flex-fill text-center py-2 text-secondary text-opacity-50 fw-bold text-georgia" style={{ cursor: 'not-allowed' }}>
                  Admin
                </div>
              </div>

              <div className="d-flex align-items-center p-3 mb-4 rounded bg-warning bg-opacity-10 border border-warning border-opacity-50 text-georgia">
                <span className="me-3 fs-4">🎁</span>
                <div>
                  <div className="text-danger fw-bold">New User Offer!</div>
                  <div className="text-danger text-opacity-75">Get 5 Free Transit Passes on first sign-up · Worth ₹150</div>
                </div>
              </div>

              <Form>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-dark text-georgia">MOBILE NUMBER</Form.Label>
                  <div className="d-flex rounded overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>
                    <div className="d-flex align-items-center justify-content-center px-4 bg-light border-end border-secondary border-opacity-25 fw-bold">
                      +91
                    </div>
                    <Form.Control type="tel" placeholder="Enter your mobile number" className="border-0 shadow-none py-3" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2 text-georgia">
                    <Form.Label className="m-0 fw-bold text-dark">OTP VERIFICATION</Form.Label>
                    <a href="#resend" className="text-danger fw-bold link-no-decor">Resend OTP</a>
                  </div>
                  <div className="d-flex justify-content-between gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Form.Control key={i} type="text" maxLength="1" className="text-center py-3 shadow-none fs-3 fw-bold rounded" style={{ border: i === 1 ? '2px solid #111' : '1px solid #e2e8f0' }} defaultValue={i === 1 ? '•' : ''} />
                    ))}
                  </div>
                </Form.Group>

                <Button className="btn-custom-red w-100 py-3 mb-4 fs-5 text-georgia">
                  Send OTP &rarr;
                </Button>
              </Form>

              <div className="d-flex align-items-center mb-4 text-georgia">
                <hr className="flex-fill m-0 opacity-25" />
                <span className="px-3 text-secondary">or continue with</span>
                <hr className="flex-fill m-0 opacity-25" />
              </div>

              <Button className="btn-custom-outline w-100 py-3 mb-4 d-flex align-items-center justify-content-center text-georgia fs-5">
                <span className="fw-bolder text-primary me-2">G</span> Continue with Google
              </Button>

              <div className="text-center mb-3 text-georgia">
                <span className="text-secondary">Don't have an account?</span>
              </div>
              <Button className="btn-custom-outline text-dark border-dark w-100 py-3 mb-4 text-georgia fs-5">
                Create Account
              </Button>

              <div className="text-center text-georgia">
                <span className="text-secondary">🔒 Secured with OTP · Your data is safe</span>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserLogin;