import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  return (
    <div className="bg-offwhite min-vh-100 d-flex">
      <Container fluid className="p-0">
        <Row className="h-100 m-0">
          
          {/* Left Column - Information & Features */}
          <Col lg={5} className="d-none d-lg-flex flex-column align-items-center justify-content-center p-5" style={{ backgroundColor: '#fcfcfc', borderRight: '1px solid #eaeaea', borderTop: '4px solid #ef3b3a' }}>
            <div className="text-center mb-5">
              <div className="mx-auto icon-circle mb-3" style={{ width: '120px', height: '120px', backgroundColor: '#fce8e8' }}>
                <span style={{ fontSize: '3.5rem' }}>🛡️</span>
              </div>
              <h2 className="fw-bolder text-dark mt-2 fs-1">Admin Portal</h2>
              <p className="text-secondary text-georgia fs-5">Full system control & oversight</p>
            </div>

            <div className="w-100" style={{ maxWidth: '400px' }}>
              <Card className="custom-card mb-4 p-2">
                <Card.Body className="d-flex align-items-center p-2">
                  <div className="me-4 icon-circle bg-secondary bg-opacity-10 text-secondary" style={{ width: '50px', height: '50px' }}>⚙️</div>
                  <div className="text-georgia">
                    <h6 className="m-0 fw-bold fs-5">System Configuration</h6>
                    <span className="text-secondary">Manage platform settings & permissions</span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="custom-card mb-4 p-2">
                <Card.Body className="d-flex align-items-center p-2">
                  <div className="me-4 icon-circle bg-primary bg-opacity-10 text-primary" style={{ width: '50px', height: '50px' }}>👤</div>
                  <div className="text-georgia">
                    <h6 className="m-0 fw-bold fs-5">User & Staff Management</h6>
                    <span className="text-secondary">Add, edit, and remove accounts</span>
                  </div>
                </Card.Body>
              </Card>

              <Card className="custom-card p-2">
                <Card.Body className="d-flex align-items-center p-2">
                  <div className="me-4 icon-circle bg-success bg-opacity-10 text-success" style={{ width: '50px', height: '50px' }}>📊</div>
                  <div className="text-georgia">
                    <h6 className="m-0 fw-bold fs-5">Analytics & Reports</h6>
                    <span className="text-secondary">Full fleet & ridership insights</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Right Column - Login Form */}
          <Col lg={7} xs={12} className="d-flex align-items-center justify-content-center p-4 p-lg-5">
            <div className="login-box">
              <div className="text-center mb-4">
                <h2 className="fw-bolder text-dark">Admin Sign In</h2>
                <p className="text-secondary text-georgia">Restricted access — authorised personnel only</p>
              </div>

              {/* Role Toggle */}
              <div className="d-flex p-1 mb-4 rounded" style={{ backgroundColor: '#f3f4f6' }}>
                <Link to="/login" className="flex-fill text-center py-2 text-secondary link-no-decor fw-bold text-georgia">
                  User
                </Link>
                <Link to="/staff-login" className="flex-fill text-center py-2 text-secondary link-no-decor fw-bold text-georgia">
                  Staff
                </Link>
                <Link to="/admin-login" className="flex-fill text-center py-2 text-secondary link-no-decor fw-bold text-georgia">
                 Admin
                </Link>
              </div>

              {/* Restricted Access Alert */}
              <div className="d-flex align-items-center p-3 mb-4 rounded bg-danger bg-opacity-10 border border-danger border-opacity-50 text-georgia">
                <span className="me-3 fs-4">🔐</span>
                <div>
                  <div className="text-danger fw-bold" style={{ fontSize: '0.85rem' }}>Restricted Access</div>
                  <div className="text-danger text-opacity-75" style={{ fontSize: '0.75rem' }}>All login attempts are monitored and logged</div>
                </div>
              </div>

              <Form>
                {/* Email Field */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-dark text-georgia" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>ADMIN EMAIL</Form.Label>
                  <Form.Control type="email" placeholder="Enter your admin email address" className="shadow-none py-3 rounded" style={{ border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-dark text-georgia" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>PASSWORD</Form.Label>
                  <div className="d-flex align-items-center rounded overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>
                    <Form.Control type="password" placeholder="••••••••••••" className="border-0 shadow-none py-3" style={{ fontSize: '0.95rem' }} />
                    <Button variant="link" className="text-decoration-none shadow-none px-4 text-danger fw-bold text-georgia" style={{ fontSize: '0.85rem' }}>Show</Button>
                  </div>
                </Form.Group>

                {/* 2FA Field */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-dark text-georgia" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>TWO-FACTOR CODE</Form.Label>
                  <div className="d-flex align-items-center rounded overflow-hidden bg-white pe-3" style={{ border: '1px solid #e2e8f0' }}>
                    <Form.Control type="text" placeholder="Enter 6-digit authenticator code" className="border-0 shadow-none py-3 px-3" style={{ fontSize: '0.95rem' }} />
                    <span className="text-secondary text-georgia text-nowrap" style={{ fontSize: '0.85rem' }}>From your app</span>
                  </div>
                </Form.Group>

                {/* Checkbox and Forgot Password */}
                <div className="d-flex justify-content-between align-items-center mb-4 text-georgia">
                  <Form.Check type="checkbox" label="Remember this device" id="remember-me-admin" className="text-secondary" style={{ fontSize: '0.9rem' }} />
                  <a href="#forgot" className="text-danger fw-bold link-no-decor" style={{ fontSize: '0.9rem' }}>Forgot password?</a>
                </div>

                {/* Working Submit Button */}
                <Button 
                  as={Link} 
                  to="/" 
                  className="btn-custom-red w-100 py-3 mb-5 fs-5 text-georgia"
                >
                  Sign In to Admin Portal &rarr;
                </Button>
              </Form>

              <div className="text-center mb-4 text-georgia">
                <span className="text-secondary" style={{ fontSize: '0.9rem' }}>Access issues? Contact your system administrator</span><br />
                <a href="mailto:sysadmin@bustrack.in" className="text-danger fw-bold link-no-decor" style={{ fontSize: '0.9rem' }}>sysadmin@bustrack.in</a>
              </div>

              <div className="text-center p-3 rounded bg-light border text-georgia">
                <span className="text-secondary" style={{ fontSize: '0.8rem' }}>🔒 Secure Admin Access · 2FA Required · Sessions logged</span>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLogin;