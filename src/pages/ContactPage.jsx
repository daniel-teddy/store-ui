import React, { useEffect } from 'react'
// import backgroundpattern from '../images/background-pattern.jpg'
import MapsGoogle from '../components/mapsGoogle'
import JustArrived from '../components/justArrived';

function ContactPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <section className="py-5 mb-5" style={{
        // backgroundImage: `url(${backgroundpattern})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <h1 className="page-title pb-2">Contact Us</h1>
          <nav className="breadcrumb fs-6">
            <a className="breadcrumb-item nav-link" href="https">Home</a>
            <a className="breadcrumb-item nav-link" href="https">Pages</a>
            <span className="breadcrumb-item active" aria-current="page">Contact Us</span>
          </nav>
        </div>
      </div>
    </section>
    <section className="contact-us py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="contact-info col-lg-6 pb-3">
            <p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
            <div className="page-content d-flex flex-wrap">
              <div className="col-lg-6 col-sm-12">
                <div className="content-box text-dark pe-4 mb-5">
                  <h3 className="card-title">Office</h3>
                  <div className="contact-address pt-3">
                    <p>730 Glenstone Ave 65802, Springfield, US</p>
                  </div>
                  <div className="contact-number">
                    <p>
                      <a href="https">+123 987 321</a>
                    </p>
                    <p>
                      <a href="https">+123 123 654</a>
                    </p>
                  </div>
                  <div className="email-address">
                    <p>
                      <a href="https">contact@website.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="content-box">
                  <h3 className="card-title">Management</h3>
                  <div className="contact-address pt-3">
                    <p>730 Glenstone Ave 65802, Springfield, US</p>
                  </div>
                  <div className="contact-number">
                    <p>
                      <a href="https">+123 987 321</a>
                    </p>
                    <p>
                      <a href="https">+123 123 654</a>
                    </p>
                  </div>
                  <div className="email-address">
                    <p>
                      <a href="https">contact@website.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inquiry-item col-lg-6">
            <div className="bg-light p-5 rounded-5">
              <h2 className="display-7 text-dark">Get in Touch</h2>
              <p>Use the form below to get in touch with us.</p>
              <form id="form" className="form-group flex-wrap">
                <div className="form-input col-lg-12 d-flex mb-3">
                  <input type="text" name="email" placeholder="Write Your Name Here" className="form-control ps-3 me-3" />
                  <input type="text" name="email" placeholder="Write Your Email Here" className="form-control ps-3" />
                </div>
                <div className="col-lg-12 mb-3">
                  <input type="text" name="email" placeholder="Phone Number" className="form-control ps-3" />
                </div>
                <div className="col-lg-12 mb-3">
                  <input type="text" name="email" placeholder="Write Your Subject Here" className="form-control ps-3" />
                </div>
                <div className="col-lg-12 mb-3">
                  <textarea placeholder="Write Your Message Here" className="form-control ps-3" style={{ height: '150px' }}></textarea>
                </div>
              </form>
              <div className="d-grid">
                <button className="btn btn-primary btn-lg text-uppercase btn-rounded-none">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <JustArrived />
    <MapsGoogle />
    </>
  )
}

export default ContactPage