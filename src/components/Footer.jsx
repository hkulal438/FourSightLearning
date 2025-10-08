import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    // Smooth scroll to top
    const scrollBtn = document.querySelector(".btn-scroll-top");
    if (scrollBtn) {
      scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Animate links on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    });

    document.querySelectorAll(".footer-link").forEach((el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.5s ease";
      observer.observe(el);
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* About Section */}
          <div className="footer-col">
            <h5 className="footer-heading">About Us</h5>
            <p className="footer-text">
              Your company description goes here. Provide brief information about your business.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-link"><i className="fab fa-github"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-list">
              <li><a href="#" className="footer-link"><i className="fas fa-chevron-right"></i> Home</a></li>
              <li><a href="#" className="footer-link"><i className="fas fa-chevron-right"></i> About</a></li>
              <li><a href="#" className="footer-link"><i className="fas fa-chevron-right"></i> Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-list">
              <li><i className="fas fa-map-marker-alt"></i> 123 Street, City, Country</li>
              <li><i className="fas fa-phone"></i> +1 234 567 890</li>
              <li><i className="fas fa-envelope"></i> info@example.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h5 className="footer-heading">Newsletter</h5>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter email" className="newsletter-input" />
              <button type="button" className="newsletter-btn">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <button className="btn-scroll-top"><i className="fas fa-arrow-up"></i></button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 4SightLearning. All rights reserved.</p>
          <p className="developed">
            Developed with <i className="fas fa-code text-danger"></i> by{" "}
            <a href="https://4SightLearning.com" target="_blank" rel="noreferrer" className="hover-text-success">
              4SightLearning
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
