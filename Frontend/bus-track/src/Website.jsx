import React from 'react'

 const website = () => {
 return (
  <>

    <nav className="navbar">
      <h2 className="logo">BRAND</h2>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

  
    <section className="hero">
      <div className="body">
        <h1>Welcome to Our Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br />
          Doloremque, eius modi? Asperiores dolorum sunt nemo.
        </p>
        <button>Get Started</button>
      </div>
    </section>

  
    <section className="services">
      <h1>Our Services</h1>

      <div className="service-container">

        <div className="card">
          <i className="fas fa-rocket"></i>
          <h2>Web Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="card">
          <i className="fas fa-code"></i>
          <h2>Web Development</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="card">
          <i className="fas fa-life-ring"></i>
          <h2>Support</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

      </div>
    </section>

  
    <footer>
      <div className="footer-container">

        <div className="footer-box">
          <h2>BRAND</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt.
          </p>
        </div>

        <div className="footer-box">
           
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>

        <div className="footer-box">
          <h3>Services</h3>
          <p>Web Design</p>
          <p>Web Development</p>
          <p>SEO Optimization</p>
          <p>Digital Marketing</p>
          <p>Support</p>
        </div>

        <div className="footer-box">
          <h3>Contact Info</h3>
          <p>📍 123 Main Street, City</p>
          <p>📞 +123 456 7890</p>
          <p>✉️ info@example.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2024 Brand. All Rights Reserved.
      </p>
    </footer>
  </>
);
}
export default website