<footer class="content-info footer">
  <div class="container">
    <section>
      <div class="footer__newsletter--header">
        <h3>Bring some culture to your inbox.</h3>
        <div class="footer__newsletter-signup">
          <input
            id="newsletter-input"
            class="newsletter-input"
            type="email"
            placeholder="Enter your email to sign up for our newsletter."
          >
          <button class="newsletter-submit">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
    <section>
      <div class="footer__nav" role="navigation">
        <h3>
          <a href="https://www.metmuseum.org/about-the-met" target="_blank">About the Met</a>
        </h3>
        <h3>
          <a href="https://www.metmuseum.org/blogs" target="_blank">Blogs</a>
        </h3>
        <h3>
          <a href="https://www.metmuseum.org/metmedia" target="_blank">Videos</a>
        </h3>
        <h3>
          <a href="https://www.metmuseum.org/press" target="_blank">Press</a>
        </h3>
      </div>
    </section>
    <section>
      <div class="contacts">
        <div class="footer__addresses">
          <div class="address address1">
            <h4><a href="https://www.metmuseum.org/visit/plan-your-visit/met-fifth-avenue" target="_blank">The Met Fifth Avenue</a></h4>
            <address>
              <ul>
                <li>1000 Fifth Avenue</li>
                <li>New York, NY 10028</li>
                <li><a href="tel:+2125357710">Phone: 212-535-7710</a></li>
              </ul>
            </address>
          </div>
          <div class="address address2">
            <h4><a href="https://www.metmuseum.org/visit/plan-your-visit/met-breuer" target="_blank">The Met Breuer</a></h4>
            <address>
              <ul>
                <li>945 Madison Ave</li>
                <li>at 75th Street</li>
                <li><a href="tel:+2127311675">Phone: 212-731-1675</a></li>
              </ul>
            </address>
          </div>
          <div class="address address3">
            <h4><a href="https://www.metmuseum.org/visit/plan-your-visit/met-cloisters" target="_blank">The Met Cloisters </a></h4>
            <address>
              <ul>
                <li>99 Margaret Corbin Drive</li>
                <li>New York, NY 10040</li>
                <li><a href="tel:+2129233700">Phone: 212-923-3700</a></li>
              </ul>
            </address>
          </div>
        </div>
        <section>
          <div class="footer__newsletter--footer">
            <h3 class="title">Newsletter:</h3>
            <div class="footer__newsletter-signup">
              <input
                id="newsletter-input"
                class="newsletter-input"
                type="email"
                placeholder="Enter your email to sign up for our newsletter."
              >
              <button class="newsletter-submit">Sign Up</button>
            </div>
          </div>
        </section>
        @include('partials.components.social-media')
      </div>
    </section>
  </div>
</footer>
