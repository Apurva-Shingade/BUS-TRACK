import React from 'react';
import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import logo from '../assets/Images/Bus-track-logo.svg';
import clock from '../assets/Images/clock.svg';
import crowd from '../assets/Images/crowd.svg';
import explore from '../assets/Images/explore.svg';
import gps from '../assets/Images/gps.svg';
import points from '../assets/Images/points.svg';
import share from '../assets/Images/share.svg';
import staff from '../assets/Images/staff.svg';
import track from '../assets/Images/track.svg';
import commuter from '../assets/Images/commuter.svg';

const Track = () => {
  return (
    <div className="bg-offwhite min-vh-100">
      <div className="top-border-line"></div>

      <Container fluid className="px-5 py-3">
        <div className="text-secondary fs-6 font-inter">
          <Link to="/" className="link-no-decor text-secondary">Home</Link> &rsaquo; <span className="text-danger fw-bold">Select Mode</span>
        </div>
      </Container>

      <Container className="py-4">
        <div className="text-center mb-4">
          <h2 className="fw-bolder text-dark heading-title font-poppins">
            How are you travelling today?
          </h2>
          <p className="text-secondary fs-5 font-inter">
            Select your passenger mode to get the best experience
          </p>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <div className="bg-white rounded-pill shadow-sm d-inline-flex align-items-center p-2 px-4 border border-light">
            <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold tp-avatar font-poppins">
              TP
            </div>
            <div className="text-start">
              <div className="d-flex align-items-center gap-2 mb-1 font-inter">
                <span className="fw-bold text-dark text-095">Transit Points Balance:</span>
                <span className="text-danger fw-bolder fs-5 font-poppins">47 pts</span>
              </div>
              <div className="text-secondary text-080 font-georgia">
                Share location to earn more · Redeem for free passes
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative mb-5 cards-container">
          
          <div className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle shadow-sm d-none d-lg-flex align-items-center justify-content-center fw-bold text-secondary or-divider font-poppins">
            OR
          </div>

          <Row className="g-4">
            <Col lg={6}>
              <Card className="custom-card overflow-hidden h-100 border border-light">
                <div className="bg-dark-section position-relative d-flex flex-column align-items-center justify-content-center py-5">
                  <Badge className="bg-danger px-3 py-2 position-absolute top-0 mt-4 rounded-pill badge-custom font-poppins">
                    COMMUTER
                  </Badge>
                  <div className="rounded-circle bg-white bg-opacity-10 d-flex align-items-center justify-content-center mt-3 image-circle-lg">
                    <img src={commuter} alt="Commuter" className="icon-lg-white" />
                  </div>
                </div>

                <Card.Body className="p-5 bg-white text-center">
                  <h3 className="fw-bolder text-dark mb-2 font-poppins">I'm Travelling</h3>
                  <p className="text-secondary mb-4 text-095 font-inter">Waiting at stop or onboard bus</p>

                  <div className="text-start mb-5">
                    <div className="d-flex align-items-start mb-4">
                      <div className="icon-circle me-3 mt-1">
                        <img src={track} alt="Track" className="icon-sm" />
                      </div>
                      <div>
                        <div className="fw-bold text-dark text-095 font-inter">View Live Bus Locations</div>
                        <div className="text-secondary text-085 font-georgia">See all buses on interactive map</div>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <div className="icon-circle me-3 mt-1">
                        <img src={clock} alt="Clock" className="icon-sm" />
                      </div>
                      <div>
                        <div className="fw-bold text-dark text-095 font-inter">Get Real-Time ETA</div>
                        <div className="text-secondary text-085 font-georgia">Know exactly when your bus arrives</div>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <div className="icon-circle me-3 mt-1">
                        <img src={gps} alt="Alerts" className="icon-sm" />
                      </div>
                      <div>
                        <div className="fw-bold text-dark text-095 font-inter">Set Arrival Alerts</div>
                        <div className="text-secondary text-085 font-georgia">Notify me 5 mins before bus arrives</div>
                      </div>
                    </div>

                    <div className="d-flex align-items-start">
                      <div className="icon-circle me-3 mt-1">
                        <img src={explore} alt="Search" className="icon-sm" />
                      </div>
                      <div>
                        <div className="fw-bold text-dark text-095 font-inter">Search Any Route</div>
                        <div className="text-secondary text-085 font-georgia">By bus number or source-destination</div>
                      </div>
                    </div>
                  </div>

                  <Button as={Link} to="/routes" variant="dark" className="w-100 py-3 rounded-3 fw-bold fs-5 font-poppins">
                    I'm Travelling &rarr; View Buses
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="custom-card overflow-hidden h-100 border border-light">
                <div className="bg-red-section position-relative d-flex flex-column align-items-center justify-content-center py-5">
                  <Badge className="bg-white bg-opacity-25 text-white px-3 py-2 position-absolute top-0 mt-4 rounded-pill badge-custom font-poppins">
                    ON BOARD
                  </Badge>
                  <div className="rounded-circle bg-white bg-opacity-25 d-flex align-items-center justify-content-center mt-3 position-relative image-circle-lg">
                    <img src={commuter} alt="Commuter" className="icon-lg-white" />
                  </div>
                </div>

                <Card.Body className="p-5 bg-white text-center">
                  <h3 className="fw-bolder text-dark mb-2 font-poppins">I'm On The Bus</h3>
                  <p className="text-secondary mb-4 text-095 font-inter">Currently onboard · Share your location</p>

                  <div className="text-start mb-5">
                    <div className="d-flex align-items-start mb-4">
                      <div className="icon-circle me-3 mt-1">
                        <img src={gps} alt="Location" className="icon-sm" />
                      </div>
                      <div>
                        <div className="fw-bold text-dark text-095 font-inter">Share Live Location</div>
                        <div className="text-secondary text-085 font-georgia">Broadcast your bus position to others</div>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <div className="icon-circle me-3 mt-1">
                        <img src={points} alt="Points" className="icon-sm" />
                      </div>
                      <div>
                        <div className="fw-bold text-dark text-095 font-inter">Earn Transit Points</div>
                        <div className="text-secondary text-085 font-georgia">+2 pts/min while actively sharing</div>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                      <div className="icon-circle me-3 mt-1">
                        <img src={crowd} alt="Crowd" className="icon-sm" />
                      </div>
                      <div>
                        <div className="fw-bold text-dark text-095 font-inter">Help Other Commuters</div>
                        <div className="text-secondary text-085 font-georgia">Your data helps people plan trips</div>
                      </div>
                    </div>

                    <div className="d-flex align-items-start">
                      <div className="icon-circle me-3 mt-1">
                        <img src={share} alt="Share" className="icon-sm" />
                      </div>
                      <div>
                        <div className="fw-bold text-dark text-095 font-inter">WhatsApp Share</div>
                        <div className="text-secondary text-085 font-georgia">1-click share bus location to friends</div>
                      </div>
                    </div>
                  </div>

                  <Button as={Link} to="/" className="btn-custom-red w-100 py-3 rounded-3 fw-bold fs-5 font-poppins">
                    I'm On The Bus &rarr; Share Location
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </div>

        <div className="text-center mb-5">
          <div className="text-secondary mb-2 text-095 font-inter">
            You can switch modes anytime from your dashboard
          </div>
          <div className="text-secondary text-085 font-georgia">
            🔒 Location shared only while you're active - Stops automatically on tab close
          </div>
        </div>
      </Container>

      <footer className="footer-main">
        <Container fluid className="px-5">
          <Row className="mb-5">
            <Col lg={4} md={12} className="mb-5 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <img src={logo} alt="Bus Mini Graphic" className="footer-logo" />
              </div>
              <p className="text-secondary footer-desc font-georgia">
                A crowd-powered, real-time bus tracking platform. Turning passengers into infrastructure.
              </p>
            </Col>

            <Col lg={2} md={4} xs={6} className="mb-4 mb-md-0">
              <h6 className="fw-bolder text-white mb-4 footer-heading font-poppins">PLATFORM</h6>
              <div className="d-flex flex-column gap-3 font-inter">
                <Link to="/track" className="link-no-decor text-secondary">Track Live</Link>
                <Link to="/routes" className="link-no-decor text-secondary">Routes</Link>
                <Link to="/schedule" className="link-no-decor text-secondary">Schedules</Link>
                <Link to="/login" className="link-no-decor text-secondary">Transit Points</Link>
              </div>
            </Col>

            <Col lg={2} md={4} xs={6} className="mb-4 mb-md-0">
              <h6 className="fw-bolder text-white mb-4 footer-heading font-poppins">ACCOUNT</h6>
              <div className="d-flex flex-column gap-3 font-inter">
                <Link to="/signup" className="link-no-decor text-secondary">Sign Up</Link>
                <Link to="/login" className="link-no-decor text-secondary">Login</Link>
                <Link to="/staff-login" className="link-no-decor text-secondary">Staff Portal</Link>
                <Link to="/admin-login" className="link-no-decor text-secondary">Admin Portal</Link>
              </div>
            </Col>

            <Col lg={2} md={4} xs={6}>
              <h6 className="fw-bolder text-white mb-4 footer-heading font-poppins">COMPANY</h6>
              <div className="d-flex flex-column gap-3 font-inter">
                <Link to="/about" className="link-no-decor text-secondary">About</Link>
                <Link to="/privacy" className="link-no-decor text-secondary">Privacy Policy</Link>
                <Link to="/terms" className="link-no-decor text-secondary">Terms of Service</Link>
                <Link to="/contact" className="link-no-decor text-secondary">Contact</Link>
              </div>
            </Col>
          </Row>

          <div className="pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary footer-bottom font-georgia">
            <div className="mb-3 mb-md-0">
              © 2026 BUS TRACK · G.P. Khamgaon
            </div>
            <div className="d-flex gap-4">
              <Link to="/privacy" className="link-no-decor text-secondary">Privacy Policy</Link>
              <Link to="/terms" className="link-no-decor text-secondary">Terms of Service</Link>
              <Link to="/contact" className="link-no-decor text-secondary">Contact</Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Track;