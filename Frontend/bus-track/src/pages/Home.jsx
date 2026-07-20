import React from 'react';
import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/Images/banner.svg';
import smallBusImg from '../assets/Images/sbus.svg';
import logo from '../assets/Images/Bus-track-logo.svg'; 
const Home = () => {
  return (
    <div className="bg-offwhite min-vh-100">
      
      <div className="top-banner">
        <Container fluid className="px-5 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center text-georgia">
            <Badge bg="warning" className="me-2 text-white fw-bold px-2 py-1 rounded">
              NEW USER
            </Badge>
            <span style={{ color: '#3c352d' }}>
              Get <strong className="fw-bold">5 Free Transit Passes</strong> on first sign-up — worth ₹150. Auto-credited on verification.
            </span>
          </div>
          <Link to="/login" className="text-danger fw-bold link-no-decor">
            Claim Now <span className="fs-6 align-middle">&rarr;</span>
          </Link>
        </Container>
      </div>

      <div className="bg-dark-section py-5">
        <Container fluid className="px-5 mt-4 mb-5">
          <Row className="align-items-center">
            
            <Col lg={6} md={12} className="pr-lg-5">
              <div className="mb-4">
                <span className="badge rounded-pill d-inline-flex align-items-center py-2 px-3" style={{ backgroundColor: 'rgba(239, 59, 58, 0.08)', color: '#ef3b3a', border: '1px solid rgba(239, 59, 58, 0.25)' }}>
                  <span className="rounded-circle me-2" style={{ width: '6px', height: '6px', backgroundColor: '#ef3b3a' }}></span>
                  LIVE TRACKING ACTIVE
                </span>
              </div>

              <h1 className="fw-bolder mb-4" style={{ fontSize: '4.2rem', lineHeight: '1.1', letterSpacing: '-1.5px' }}>
                Know where <br />
                <span style={{ color: '#ef3b3a' }}>your bus</span> <br />
                is, right now.
              </h1>

              <p className="text-secondary mb-4 text-georgia fs-5" style={{ maxWidth: '480px', lineHeight: '1.6' }}>
                Crowd-powered real-time bus tracking. Earn Transit Points by sharing your ride — spend them to track any bus for free.
              </p>

              <div className="d-flex gap-3 mb-5">
                <Button className="btn-custom-red px-4 py-3">
                  Track My Bus
                </Button>
                <Button variant="outline-light" className="px-4 py-3 fw-bold rounded" style={{ borderColor: '#333333', color: '#cccccc', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  View Routes
                </Button>
              </div>

              <div className="d-flex pt-4" style={{ borderTop: '1px solid #262626', maxWidth: '450px', gap: '40px' }}>
                <div>
                  <h3 className="m-0 fw-bolder fs-2">2,400+</h3>
                  <div className="text-georgia text-secondary fw-bold mt-1" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>ACTIVE RIDERS</div>
                </div>
                <div style={{ borderLeft: '1px solid #262626', paddingLeft: '40px' }}>
                  <h3 className="m-0 fw-bolder fs-2">48</h3>
                  <div className="text-georgia text-secondary fw-bold mt-1" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>ROUTES COVERED</div>
                </div>
                <div style={{ borderLeft: '1px solid #262626', paddingLeft: '40px' }}>
                  <h3 className="m-0 fw-bolder fs-2">94%</h3>
                  <div className="text-georgia text-secondary fw-bold mt-1" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>ETA ACCURACY</div>
                </div>
              </div>
            </Col>

            <Col lg={6} md={12} className="d-flex flex-column align-items-center justify-content-center mt-5 mt-lg-0">
              <div className="w-100 position-relative" style={{ maxWidth: '480px' }}>
                <img src={bannerImg} alt="Bus Vector Art" className="img-fluid d-block w-100" />
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      <div className=" section-padding" style={{ backgroundColor: '#e5e6e5' }}>
        <Container fluid className="px-5">
          <div className="mb-5">
            <div className="text-danger fw-bolder text-georgia" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
              HOW IT WORKS
            </div>
            <h2 className="fw-bolder text-dark mt-1 mb-2" style={{ fontSize: '2.5rem', letterSpacing: '-0.5px' }}>
              Track, Share, Earn.
            </h2>
            <p className="text-secondary text-georgia fs-5">
              BUS TRACK turns every passenger into a live GPS signal — no hardware needed.
            </p>
          </div>

          <Row className="align-items-center">
            <Col lg={3} md={12} className="mb-4 lg-mb-0">
              <Card className="custom-card p-4 h-100">
                <Card.Body className="p-0">
                  <div className="icon-circle bg-danger text-white fw-bold mb-4" style={{ width: '32px', height: '32px' }}>
                    1
                  </div>
                  <Card.Title className="fw-bold text-dark mb-2">Board your bus</Card.Title>
                  <Card.Text className="text-secondary text-georgia" style={{ lineHeight: '1.6' }}>
                    Open BUS TRACK and tap "I'm on this bus." Your phone silently shares anonymous location data to the network.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={1} className="d-none d-lg-flex justify-content-center text-danger fs-1 fw-light">
              &rsaquo;
            </Col>

            <Col lg={3} md={12} className="mb-4 lg-mb-0">
              <Card className="custom-card p-4 h-100">
                <Card.Body className="p-0">
                  <div className="icon-circle bg-danger text-white fw-bold mb-4" style={{ width: '32px', height: '32px' }}>
                    2
                  </div>
                  <Card.Title className="fw-bold text-dark mb-2">Earn Transit Points</Card.Title>
                  <Card.Text className="text-secondary text-georgia" style={{ lineHeight: '1.6' }}>
                    Every trip you share earns you Transit Points. The more you contribute, the more points you accumulate.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={1} className="d-none d-lg-flex justify-content-center text-danger fs-1 fw-light">
              &rsaquo;
            </Col>

            <Col lg={3} md={12}className="mb-4 lg-mb-0">
              <Card className="custom-card p-4 h-100">
                <Card.Body className="p-0">
                  <div className="icon-circle bg-danger text-white fw-bold mb-4" style={{ width: '32px', height: '32px' }}>
                    3
                  </div>
                  <Card.Title className="fw-bold text-dark mb-2">Track or redeem</Card.Title>
                  <Card.Text className="text-secondary text-georgia" style={{ lineHeight: '1.6' }}>
                    Spend points to view any bus live — or redeem for free travel passes worth ₹150 each.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section-padding" style={{ backgroundColor: '#e8e5e5' }}>
        <Container fluid className="px-5">
          <div className="mb-5">
            <span className="text-danger fw-bolder text-georgia" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
              FEATURES
            </span>
            <h2 className="fw-bolder text-dark mt-1 mb-2" style={{ fontSize: '2.5rem', letterSpacing: '-0.5px' }}>
              Built for daily commuters.
            </h2>
            <p className="text-secondary text-georgia fs-5">
              Everything you need to stop guessing and start commuting with confidence.
            </p>
          </div>

          <Row>
            <Col lg={6} md={12}>
              <div className="p-4 mb-4 d-flex align-items-start custom-card">
                <div className="me-3 icon-circle" style={{ backgroundColor: '#fcdede', color: '#ef3b3a', width: '40px', height: '40px' }}>
                  🎯
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">Live Bus Tracking</h5>
                  <p className="text-secondary text-georgia mb-2" style={{ lineHeight: '1.5' }}>
                    See your bus move on a live map. Updated every few seconds using crowdsourced passenger GPS — zero hardware dependency.
                  </p>
                  <Badge style={{ backgroundColor: '#fcdede', color: '#f9f7f7' }}>CROWD-POWERED</Badge>
                </div>
              </div>

              <div className="p-4 mb-4 d-flex align-items-start custom-card">
                <div className="me-3 icon-circle" style={{ backgroundColor: '#fef3c7', color: '#f7f6f5', width: '40px', height: '40px' }}>
                  ⭐
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">Transit Points Economy</h5>
                  <p className="text-secondary text-georgia mb-2" style={{ lineHeight: '1.5' }}>
                    Earn points by sharing your ride location. Redeem for live tracking sessions or free passes worth ₹150.
                  </p>
                  <Badge style={{ backgroundColor: '#fef3c7', color: '#faf9f8' }}>GIVE & TAKE</Badge>
                </div>
              </div>

              <div className="p-4 mb-4 mb-lg-0 d-flex align-items-start custom-card">
                <div className="me-3 icon-circle" style={{ backgroundColor: '#fee2e2', color: '#dc2626', width: '40px', height: '40px' }}>
                  💬
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">WhatsApp Location Share</h5>
                  <p className="text-secondary text-georgia mb-0" style={{ lineHeight: '1.5' }}>
                    1-tap share of your bus's live location via WhatsApp — help family or friends track when you'll arrive.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div className="p-4 mb-4 d-flex align-items-start custom-card">
                <div className="me-3 icon-circle" style={{ backgroundColor: '#dbeafe', color: '#edeeef', width: '40px', height: '40px' }}>
                  ⏱️
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">Smart ETA Prediction</h5>
                  <p className="text-secondary text-georgia mb-2" style={{ lineHeight: '1.5' }}>
                    Arrival times adjusted in real-time for traffic and crowd levels. Know exactly when to leave home.
                  </p>
                  <Badge style={{ backgroundColor: '#dbeafe', color: '#f4f6f9' }}>AI-POWERED</Badge>
                </div>
              </div>

              <div className="p-4 mb-4 d-flex align-items-start custom-card">
                <div className="me-3 icon-circle" style={{ backgroundColor: '#dcfce7', color: '#e3e8e5', width: '40px', height: '40px' }}>
                  👥
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">Crowd Status Reports</h5>
                  <p className="text-secondary text-georgia mb-2" style={{ lineHeight: '1.5' }}>
                    Live seat availability from fellow passengers — Empty, Moderate, or Full — before you even reach the stop.
                  </p>
                  <Badge style={{ backgroundColor: '#dcfce7', color: '#ffffff' }}>LIVE DATA</Badge>
                </div>
              </div>

              <div className="p-4 d-flex align-items-start custom-card">
                <div className="me-3 icon-circle" style={{ backgroundColor: '#e0f2fe', color: '#0369a1', width: '40px', height: '40px' }}>
                  📋
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-1">Route & Schedule Explorer</h5>
                  <p className="text-secondary text-georgia mb-0" style={{ lineHeight: '1.5' }}>
                    Browse all routes, stops, and timetables. Plan trips ahead with predictive scheduling built on real ridership data.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-dark-section section-padding">
        <Container fluid className="px-5">
          <Row className="align-items-center">
            
            <Col lg={7} md={12} className="mb-5 mb-lg-0 pr-lg-5">
              <span className="text-danger fw-bolder text-georgia" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                TRANSIT POINTS
              </span>
              <h2 className="fw-bolder mt-1 mb-3" style={{ fontSize: '2.5rem', letterSpacing: '-0.5px' }}>
                A fair deal for every rider.
              </h2>
              <p className="text-secondary text-georgia fs-5 mb-5" style={{ maxWidth: '550px', lineHeight: '1.6' }}>
                Share location when you ride, earn points. Spend points to track buses or get free passes. No one rides free without contributing.
              </p>

              <div className="d-flex flex-column gap-3 text-georgia">
                <div className="d-flex align-items-center">
                  <span className="me-3 icon-circle text-danger bg-danger bg-opacity-10 fw-bold" style={{ width: '20px', height: '20px', fontSize: '0.75rem' }}>✓</span>
                  <span className="text-light"><strong className="text-white fw-bold">Earn 10 points</strong> per ride you share location on</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-3 icon-circle text-danger bg-danger bg-opacity-10 fw-bold" style={{ width: '20px', height: '20px', fontSize: '0.75rem' }}>✓</span>
                  <span className="text-light"><strong className="text-white fw-bold">Spend 5 points</strong> to view any bus live for 30 minutes</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-3 icon-circle text-danger bg-danger bg-opacity-10 fw-bold" style={{ width: '20px', height: '20px', fontSize: '0.75rem' }}>✓</span>
                  <span className="text-light"><strong className="text-white fw-bold">Redeem 50 points</strong> for 1 Free Transit Pass (₹150 value)</span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-3 icon-circle text-danger bg-danger bg-opacity-10 fw-bold" style={{ width: '20px', height: '20px', fontSize: '0.75rem' }}>✓</span>
                  <span className="text-light"><strong className="text-white fw-bold">5 passes free</strong> just for signing up — worth ₹750</span>
                </div>
              </div>
            </Col>

            <Col lg={5} md={12} className="d-flex justify-content-center">
              <div className="w-100 overflow-hidden text-georgia" style={{ backgroundColor: '#1b1b1b', border: '1px solid #262626', borderRadius: '12px', maxWidth: '380px' }}>
                <div className="bg-danger p-4">
                  <span className="fw-bold text-white text-opacity-75" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                    TRANSIT POINTS
                  </span>
                  <h2 className="m-0 mt-1 fw-bolder text-white" style={{ fontSize: '2.5rem' }}>
                    240 pts
                  </h2>
                </div>

                <div className="p-4" style={{ backgroundColor: '#111111' }}>
                  <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-dark">
                    <span className="text-secondary">Today's rides</span>
                    <span className="text-success fw-bold">+20 pts</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-dark">
                    <span className="text-secondary">Tracking used</span>
                    <span className="text-danger fw-bold">-5 pts</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-3 border-bottom border-dark">
                    <span className="text-secondary">Free passes left</span>
                    <span className="text-white fw-bold">4 passes</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-3 mb-4">
                    <span className="text-secondary">Until next pass</span>
                    <span className="text-warning fw-bold">10 pts to go</span>
                  </div>

                  <Button as={Link} to="/login" className="btn-custom-red w-100 py-3 text-georgia">
                    Redeem Points &rarr;
                  </Button>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      <div className="section-padding" style={{ backgroundColor: '#e5e6e5' }}>
        <Container fluid className="px-5">
          <div className="mb-5">
            <span className="text-danger fw-bolder text-georgia" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
              DATA QUALITY
            </span>
            <h2 className="fw-bolder text-dark mt-1 mb-2" style={{ fontSize: '2.5rem', letterSpacing: '-0.5px' }}>
              Three-tier GPS accuracy.
            </h2>
            <p className="text-secondary text-georgia fs-5">
              BUS TRACK intelligently blends multiple data sources for the most accurate position.
            </p>
          </div>

          <Row>
            <Col lg={4} md={12} className="mb-4 lg-mb-0">
              <Card className="custom-card p-4 text-center h-100" style={{ borderTop: '4px solid #2563eb' }}>
                <Card.Body className="p-0 position-relative">
                  <Badge style={{ backgroundColor: '#dbeafe', color: '#f9f9fa', position: 'absolute', top: '-10px', right: '-10px' }}>TIER 1</Badge>
                  <div className="fs-1 mt-4 mb-3">🚌</div>
                  <Card.Title className="fw-bold text-dark mb-2">Staff GPS</Card.Title>
                  <Card.Text className="text-secondary text-georgia mb-4" style={{ lineHeight: '1.6' }}>
                    Authoritative location broadcast from the driver's device. Highest accuracy, always prioritised first.
                  </Card.Text>
                  <div className="text-danger fw-bold text-georgia">Priority: 1st</div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={12} className="mb-4 lg-mb-0">
              <Card className="custom-card p-4 text-center h-100" style={{ borderTop: '4px solid #16a34a' }}>
                <Card.Body className="p-0 position-relative">
                  <Badge style={{ backgroundColor: '#dcfce7', color: '#f2f7f4', position: 'absolute', top: '-10px', right: '-10px' }}>TIER 2</Badge>
                  <div className="fs-1 mt-4 mb-3">👥</div>
                  <Card.Title className="fw-bold text-dark mb-2">Passenger GPS</Card.Title>
                  <Card.Text className="text-secondary text-georgia mb-4" style={{ lineHeight: '1.6' }}>
                    Aggregated anonymous location from multiple riders on the same bus. Reliable and self-correcting.
                  </Card.Text>
                  <div className="text-danger fw-bold text-georgia">Priority: 2nd</div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={12} className="mb-4 lg-mb-0">
              <Card className="custom-card p-4 text-center h-100" style={{ borderTop: '4px solid #7c3aed' }}>
                <Card.Body className="p-0 position-relative">
                  <Badge style={{ backgroundColor: '#f3e8ff', color: '#eeebf3', position: 'absolute', top: '-10px', right: '-10px' }}>TIER 3</Badge>
                  <div className="fs-1 mt-4 mb-3">📡</div>
                  <Card.Title className="fw-bold text-dark mb-2">Hardware GPS</Card.Title>
                  <Card.Text className="text-secondary text-georgia mb-4" style={{ lineHeight: '1.6' }}>
                    Physical transponder fallback for routes with low ridership. Future integration with MSRTC hardware.
                  </Card.Text>
                  <div className="text-danger fw-bold text-georgia">Priority: 3rd</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>

      <div className=" section-padding" style={{ borderTop: '1px solid #eaeaea', backgroundColor: '#e8e5e5' }}>
        <Container fluid className="px-5">
          <div className="mb-5">
            <span className="text-danger fw-bolder text-georgia" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
              WHAT RIDERS SAY
            </span>
            <h2 className="fw-bolder text-dark mt-1 mb-2" style={{ fontSize: '2.5rem', letterSpacing: '-0.5px' }}>
              Trusted by daily commuters.
            </h2>
          </div>

          <Row>
            <Col lg={4} md={12} className="mb-4 lg-mb-0">
              <Card className="custom-card p-4 d-flex flex-column justify-content-between h-100">
                <Card.Body className="p-0">
                  <div className="text-warning fs-5 mb-3">★★★★★</div>
                  <Card.Text className="text-dark text-georgia" style={{ lineHeight: '1.6', fontStyle: 'italic' }}>
                    "I used to wait 30+ minutes not knowing if the bus was coming. BUS TRACK changed my mornings completely."
                  </Card.Text>
                </Card.Body>
                <div className="d-flex align-items-center mt-4">
                  <div className="me-3 icon-circle bg-danger text-white fw-bold" style={{ width: '40px', height: '40px' }}>
                    RP
                  </div>
                  <div className="text-georgia">
                    <h6 className="fw-bold text-dark m-0">Ramesh Patil</h6>
                    <span className="text-secondary" style={{ fontSize: '0.8rem' }}>Daily commuter, Khamgaon</span>
                  </div>
                </div>
              </Card>
            </Col>

            <Col lg={4} md={12} className="mb-4 lg-mb-0">
              <Card className="custom-card p-4 d-flex flex-column justify-content-between h-100">
                <Card.Body className="p-0">
                  <div className="text-warning fs-5 mb-3">★★★★★</div>
                  <Card.Text className="text-dark text-georgia" style={{ lineHeight: '1.6', fontStyle: 'italic' }}>
                    "The points system is brilliant. I earn passes just by riding like I always do. Got 3 free passes this month."
                  </Card.Text>
                </Card.Body>
                <div className="d-flex align-items-center mt-4">
                  <div className="me-3 icon-circle bg-primary text-white fw-bold" style={{ width: '40px', height: '40px' }}>
                    SK
                  </div>
                  <div className="text-georgia">
                    <h6 className="fw-bold text-dark m-0">Sunita Kulkarni</h6>
                    <span className="text-secondary" style={{ fontSize: '0.8rem' }}>Student, Buldhana</span>
                  </div>
                </div>
              </Card>
            </Col>

            <Col lg={4} md={12} className="mb-4 lg-mb-0">
              <Card className="custom-card p-4 d-flex flex-column justify-content-between h-100">
                <Card.Body className="p-0">
                  <div className="text-warning fs-5 mb-3">★★★★☆</div>
                  <Card.Text className="text-dark text-georgia" style={{ lineHeight: '1.6', fontStyle: 'italic' }}>
                    "The crowd status feature is underrated. I skip the full buses and take the next one — saves me 45 minutes standing."
                  </Card.Text>
                </Card.Body>
                <div className="d-flex align-items-center mt-4">
                  <div className="me-3 icon-circle bg-success text-white fw-bold" style={{ width: '40px', height: '40px' }}>
                    AM
                  </div>
                  <div className="text-georgia">
                    <h6 className="fw-bold text-dark m-0">Arjun More</h6>
                    <span className="text-secondary" style={{ fontSize: '0.8rem' }}>Office worker, Akola</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-red-section text-center section-padding">
        <Container>
          <h2 className="fw-bolder mb-3" style={{ fontSize: '3.5rem', letterSpacing: '-1px' }}>
            Start tracking buses for free.
          </h2>
          <p className="text-white text-opacity-75 text-georgia fs-5 mb-5">
            Create your account in 60 seconds. Get 5 free transit passes instantly.
          </p>
          
          <div className="d-flex justify-content-center gap-3 mb-4">
            <Button as={Link} to="/login" className="bg-white text-danger border-0 fw-bold px-5 py-3 fs-5 rounded">
              Create Account
            </Button>
            <Button variant="outline-light" className="fw-bold px-5 py-3 fs-5 rounded bg-transparent">
              View Live Map
            </Button>
          </div>

          <p className="text-white text-opacity-50 text-georgia m-0">
            New user bonus: 5 Free Transit Passes (₹150) credited on mobile verification.
          </p>
        </Container>
      </div>

      <footer className="footer-main">
        <Container fluid className="px-5">
          <Row className="mb-5">
            
            <Col lg={4} md={12} className="mb-5 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <img src={logo} alt="Bus Mini Graphic" style={{ height: '55px', marginRight: '10px' }} />
              </div>
              <p className="text-secondary text-georgia" style={{ lineHeight: '1.6', maxWidth: '280px' }}>
                A crowd-powered, real-time bus tracking platform. Turning passengers into infrastructure.
              </p>
            </Col>

            <Col lg={2} md={4} xs={6} className="mb-4 mb-md-0">
              <h6 className="fw-bolder text-white mb-4" style={{ letterSpacing: '0.5px' }}>PLATFORM</h6>
              <div className="d-flex flex-column gap-3 text-georgia">
                <Link to="/track" className="link-no-decor text-secondary">Track Live</Link>
                <Link to="/routes" className="link-no-decor text-secondary">Routes</Link>
                <Link to="/schedule" className="link-no-decor text-secondary">Schedules</Link>
                <Link to="/login" className="link-no-decor text-secondary">Transit Points</Link>
              </div>
            </Col>

            <Col lg={2} md={4} xs={6} className="mb-4 mb-md-0">
              <h6 className="fw-bolder text-white mb-4" style={{ letterSpacing: '0.5px' }}>ACCOUNT</h6>
              <div className="d-flex flex-column gap-3 text-georgia">
                <Link to="/login" className="link-no-decor text-secondary">Sign Up</Link>
                <Link to="/login" className="link-no-decor text-secondary">Login</Link>
                <Link to="/staff-login" className="link-no-decor text-secondary">Staff Portal</Link>
                <Link to="/admin" className="link-no-decor text-secondary">Admin Portal</Link>
              </div>
            </Col>

            <Col lg={2} md={4} xs={6}>
              <h6 className="fw-bolder text-white mb-4" style={{ letterSpacing: '0.5px' }}>COMPANY</h6>
              <div className="d-flex flex-column gap-3 text-georgia">
                <Link to="/about" className="link-no-decor text-secondary">About</Link>
                <Link to="/privacy" className="link-no-decor text-secondary">Privacy Policy</Link>
                <Link to="/terms" className="link-no-decor text-secondary">Terms of Service</Link>
                <Link to="/contact" className="link-no-decor text-secondary">Contact</Link>
              </div>
            </Col>
          </Row>

          <div className="pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary text-georgia" style={{ borderTop: '1px solid #222222' }}>
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

export default Home;