import React, { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="py-5 mb-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <h1 className="page-title pb-2">About Us</h1>
            <nav className="breadcrumb fs-6">
              <a className="breadcrumb-item nav-link" href="link">
                Home
              </a>

              <span className="breadcrumb-item active" aria-current="page">
                About Us
              </span>
            </nav>
          </div>
        </div>
      </section>
      <section className="company-detail py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                cursus leo vel orci malesuada, id sodales em volutpat.
              </blockquote>
              <p>
                <strong>Vivamus sagittis pulvinar dignissim.</strong> Mauris
                tempus a lacus eu aliquet. Mauris gravida at ectus quis
                venenatis. Aenean quis feugiat turpis. Etiam lacinia interdum
                nibh, non convallis magna lementum vel. Phasellus varius quam
                ligula, in lobortis risus porttitor ut. Praesent ipsum elit,
                lobortis n tincidunt Vestibulum ut ros sed enim feugiat
                lobortis. Suspendisse fermentum nunc in est mattis molestie.
                Mauris ut placerat isus. Aenean mollis neque libero, ut
                pellentesque arcu dapibus vel.
              </p>
              <p>
                Praesent nec nisl euismod, lacinia tellus eget, bibendum ex.
                Maecenas imperdiet gravida pulvinar. aecenas feugiat id tellus
                sed sodales. Praesent maximus ultricies elit eget accumsan.
                Proin tortor ante, ltrices a aliquet a, facilisis quis sapien.
                Donec eu turpis at velit scelerisque faucibus id eget dolor.
                tiam lobortis ante ipsum, sed venenatis ligula facilisis quis.
                Fusce blandit commodo mauris, sed fringilla isi congue et. Nunc
                eu eros ex.
              </p>
            </div>
          </div>
          <h2>About Foodmart Team</h2>
          <div className="row">
            <div className="col-md-4">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste.
              </p>
            </div>
            <div className="col-md-4">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste.
              </p>
            </div>
            <div className="col-md-4">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                  <a href="link">
                    <img
                      src="images/post-thumb-1.jpg"
                      alt="post"
                      className="card-img-top"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date">
                      <svg width="16" height="16">
                      </svg>
                      22 Aug 2021
                    </div>
                    <div className="meta-categories">
                      <svg width="16" height="16">
                      </svg>
                      tips &amp; tricks
                    </div>
                  </div>
                  <div className="post-header">
                    <h3 className="post-title">
                      <a href="link" className="text-decoration-none">
                        Top 10 casual look ideas to dress up your kids
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipi elit.
                      Aliquet eleifend viverra enim tincidunt donec quam. A in
                      arcu, hendrerit neque dolor morbi...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                  <a href="link">
                    <img
                      src="images/post-thumb-2.jpg"
                      alt="post"
                      className="card-img-top"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date">
                      <svg width="16" height="16">
                      </svg>
                      25 Aug 2021
                    </div>
                    <div className="meta-categories">
                      <svg width="16" height="16">
                      </svg>
                      trending
                    </div>
                  </div>
                  <div className="post-header">
                    <h3 className="post-title">
                      <a href="link" className="text-decoration-none">
                        Latest trends of wearing street wears supremely
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipi elit.
                      Aliquet eleifend viverra enim tincidunt donec quam. A in
                      arcu, hendrerit neque dolor morbi...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                  <a href="link">
                    <img
                      src="images/post-thumb-3.jpg"
                      alt="post"
                      className="card-img-top"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date">
                      <svg width="16" height="16">
                      </svg>
                      28 Aug 2021
                    </div>
                    <div className="meta-categories">
                      <svg width="16" height="16">
                      </svg>
                      inspiration
                    </div>
                  </div>
                  <div className="post-header">
                    <h3 className="post-title">
                      <a href="link" className="text-decoration-none">
                        10 Different Types of comfortable clothes ideas for
                        women
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipi elit.
                      Aliquet eleifend viverra enim tincidunt donec quam. A in
                      arcu, hendrerit neque dolor morbi...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                  <a href="link">
                    <img
                      src="images/post-thumb-1.jpg"
                      alt="post"
                      className="card-img-top"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date">
                      <svg width="16" height="16">
                      </svg>
                      22 Aug 2021
                    </div>
                    <div className="meta-categories">
                      <svg width="16" height="16">
                      </svg>
                      tips &amp; tricks
                    </div>
                  </div>
                  <div className="post-header">
                    <h3 className="post-title">
                      <a href="link" className="text-decoration-none">
                        Top 10 casual look ideas to dress up your kids
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipi elit.
                      Aliquet eleifend viverra enim tincidunt donec quam. A in
                      arcu, hendrerit neque dolor morbi...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                  <a href="link">
                    <img
                      src="images/post-thumb-2.jpg"
                      alt="post"
                      className="card-img-top"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date">
                      <svg width="16" height="16">
                      </svg>
                      25 Aug 2021
                    </div>
                    <div className="meta-categories">
                      <svg width="16" height="16">
                      </svg>
                      trending
                    </div>
                  </div>
                  <div className="post-header">
                    <h3 className="post-title">
                      <a href="link" className="text-decoration-none">
                        Latest trends of wearing street wears supremely
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipi elit.
                      Aliquet eleifend viverra enim tincidunt donec quam. A in
                      arcu, hendrerit neque dolor morbi...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                  <a href="link">
                    <img
                      src="images/post-thumb-3.jpg"
                      alt="post"
                      className="card-img-top"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date">
                      <svg width="16" height="16">
                      </svg>
                      28 Aug 2021
                    </div>
                    <div className="meta-categories">
                      <svg width="16" height="16">
                      </svg>
                      inspiration
                    </div>
                  </div>
                  <div className="post-header">
                    <h3 className="post-title">
                      <a href="link" className="text-decoration-none">
                        10 Different Types of comfortable clothes ideas for
                        women
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipi elit.
                      Aliquet eleifend viverra enim tincidunt donec quam. A in
                      arcu, hendrerit neque dolor morbi...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                  <a href="link">
                    <img
                      src="images/post-thumb-1.jpg"
                      alt="post"
                      className="card-img-top"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date">
                      <svg width="16" height="16">
                      </svg>
                      22 Aug 2021
                    </div>
                    <div className="meta-categories">
                      <svg width="16" height="16">
                      </svg>
                      tips &amp; tricks
                    </div>
                  </div>
                  <div className="post-header">
                    <h3 className="post-title">
                      <a href="link" className="text-decoration-none">
                        Top 10 casual look ideas to dress up your kids
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipi elit.
                      Aliquet eleifend viverra enim tincidunt donec quam. A in
                      arcu, hendrerit neque dolor morbi...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                  <a href="link">
                    <img
                      src="images/post-thumb-2.jpg"
                      alt="post"
                      className="card-img-top"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date">
                      <svg width="16" height="16">
                      </svg>
                      25 Aug 2021
                    </div>
                    <div className="meta-categories">
                      <svg width="16" height="16">
                      </svg>
                      trending
                    </div>
                  </div>
                  <div className="post-header">
                    <h3 className="post-title">
                      <a href="link" className="text-decoration-none">
                        Latest trends of wearing street wears supremely
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipi elit.
                      Aliquet eleifend viverra enim tincidunt donec quam. A in
                      arcu, hendrerit neque dolor morbi...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                  <a href="link">
                    <img
                      src="images/post-thumb-3.jpg"
                      alt="post"
                      className="card-img-top"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date">
                      <svg width="16" height="16">
                      </svg>
                      28 Aug 2021
                    </div>
                    <div className="meta-categories">
                      <svg width="16" height="16">
                      </svg>
                      inspiration
                    </div>
                  </div>
                  <div className="post-header">
                    <h3 className="post-title">
                      <a href="link" className="text-decoration-none">
                        10 Different Types of comfortable clothes ideas for
                        women
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipi elit.
                      Aliquet eleifend viverra enim tincidunt donec quam. A in
                      arcu, hendrerit neque dolor morbi...
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          
        </div>
      </div>
      <section className="py-5 my-5 d-none">
        <div className="container-fluid">
          <div className="bg-warning py-5 rounded-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="images/phone.png"
                    alt="phone"
                    className="image-float img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <h2 className="my-5">Shop faster with foodmart App</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sagittis sed ptibus liberolectus nonet psryroin. Amet sed
                    lorem posuere sit iaculis amet, ac urna. Adipiscing fames
                    semper erat ac in suspendisse iaculis. Amet blandit tortor
                    praesent ante vitae. A, enim pretiummi senectus magna.
                    Sagittis sed ptibus liberolectus non et psryroin.
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <img src="images/app-store.jpg" alt="app-store" />
                    <img src="images/google-play.jpg" alt="google-play" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
