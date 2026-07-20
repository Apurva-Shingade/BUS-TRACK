import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StaffLogin = () => {
  return (
    <div className="bg-offwhite min-vh-100 d-flex">
      <Container fluid className="p-0">
        <Row className="h-100 m-0">
          
          <Col lg={5} className="d-none d-lg-flex flex-column align-items-center justify-content-center p-5" style={{ backgroundColor: '#fcfcfc', borderRight: '1px solid #eaeaea' }}>
            <div className="text-center mb-5">
              <div className="mx-auto icon-circle mb-3" style={{ width: '120px', height: '120px', backgroundColor: '#fce8e8' }}>
                <span style={{ fontSize: '3.5rem' }}>👮‍♂️</span>
              </div>
              <h2 className="fw-bolder text-dark mt-2 fs-1">Staff Portal</h2>
              <p className="text-secondary text-georgia fs-5">Manage routes, schedules & passengers</p>
            </div>

            <div className="w-100" style={{ maxWidth: '400px' }}>
              <Card className="custom-card mb-4 p-2">
                <Card.Body className="d-flex align-items-center p-2">
                  <div className="me-4 icon-circle bg-primary bg-opacity-10 text-primary" style={{ width: '50px', height: '50px' }}>🗺️</div>
                  <div className="text-georgia">
                    <h6 className="m-0 fw-bold fs-5">Route Management</h6>
                    <span className="text-secondary">Update and manage bus routes</span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="custom-card mb-4 p-2">
                <Card.Body className="d-flex align-items-center p-2">
                  <div className="me-4 icon-circle bg-warning bg-opacity-10 text-warning" style={{ width: '50px', height: '50px' }}>📋</div>
                  <div className="text-georgia">
                    <h6 className="m-0 fw-bold fs-5">Schedule Control</h6>
                    <span className="text-secondary">Set and modify bus schedules</span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="custom-card p-2">
                <Card.Body className="d-flex align-items-center p-2">
                  <div className="me-4 icon-circle bg-secondary bg-opacity-10 text-secondary" style={{ width: '50px', height: '50px' }}>👥</div>
                  <div className="text-georgia">
                    <h6 className="m-0 fw-bold fs-5">Passenger Tracking</h6>
                    <span className="text-secondary">Monitor ridership and capacity</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={7} xs={12} className="d-flex align-items-center justify-content-center p-4 p-lg-5">
            <div className="login-box">
              <div className="text-center mb-4">
                <h2 className="fw-bolder text-dark">Staff Sign In</h2>
                <p className="text-secondary text-georgia">Access the staff management portal</p>
              </div>

              <div className="d-flex p-1 mb-5 rounded" style={{ backgroundColor: '#f3f4f6' }}>
                <Link to="/login" className="flex-fill text-center py-2 text-secondary link-no-decor fw-bold text-georgia">
                  User
                </Link>
                <Link to="/staff-login" className="flex-fill text-center py-2 bg-dark text-white rounded link-no-decor fw-bold">
                  Staff
                </Link>
                <div className="flex-fill text-center py-2 text-secondary text-opacity-50 fw-bold text-georgia" style={{ cursor: 'not-allowed' }}>
                  Admin
                </div>
              </div>

              <Form>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-dark text-georgia">STAFF ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter your staff ID (e.g. BT-2024-001)" className="shadow-none py-3 rounded" style={{ border: '1px solid #e2e8f0' }} />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-dark text-georgia">PASSWORD</Form.Label>
                  <div className="d-flex align-items-center rounded overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>
                    <Form.Control type="password" placeholder="••••••••••••" className="border-0 shadow-none py-3" />
                    <Button variant="link" className="text-decoration-none shadow-none px-4 text-danger fw-bold text-georgia">Show</Button>
                  </div>
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-5 text-georgia">
                  <Form.Check type="checkbox" label="Remember me" id="remember-me" className="text-secondary" />
                  <a href="#forgot" className="text-danger fw-bold link-no-decor">Forgot password?</a>
                </div>

                <Button className="btn-custom-red w-100 py-3 mb-5 fs-5 text-georgia">
                  Sign In to Staff Portal &rarr;
                </Button>
              </Form>

              <div className="d-flex align-items-center mb-4 text-georgia">
                <hr className="flex-fill m-0 opacity-25" />
                <span className="px-3 text-secondary">or continue with</span>
                <hr className="flex-fill m-0 opacity-25" />
              </div>

              <Button className="btn-custom-outline w-100 py-3 mb-5 d-flex align-items-center justify-content-center text-georgia fs-5">
                <span className="fw-bolder text-primary me-2">G</span> Continue with Google
              </Button>

              <div className="text-center mb-4 text-georgia">
                <span className="text-secondary">Not a staff member? Contact admin</span><br />
                <a href="mailto:admin@bustrack.in" className="text-danger fw-bold link-no-decor fs-5">admin@bustrack.in</a>
              </div>

              <div className="text-center p-3 rounded bg-light border text-georgia">
                <span className="text-secondary">🔒 Secure Staff Access · All sessions are logged</span>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StaffLogin;