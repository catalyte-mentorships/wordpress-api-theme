<header class="banner">
  <div class="container">
    <section class="nav">
      <div class="nav__logo">
        <a href="/" class="nav__logo-svg"></a>
      </div>
      <div class="nav__controls">
        <a href="https://rsecure.metmuseum.org/admissions/tickets" target="_blank" class="buy-tickets">Buy Tickets</a>
        <div class="search">
          <a href="#">
            <span class="icon"></span>
          </a>
        </div>

        <a
          href="#main-menu"
          class="menu-toggle"
          id="#main-menu-toggle">
          <span class="fa fa-bars"></span>
        </a>

        <nav class="nav__main-menu" id="main-menu">
          <a
            href="#main-menu-toggle"
            id="main-menu-close"
            class="menu-close">
            <span class="fas fa-plus close-button"></span>
          </a>
          @if (has_nav_menu('primary_navigation'))
            {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav__ul']) !!}
          @endif
        </nav>
        <a href="#main-menu-toggle" class="backdrop" hidden></a>
      </div><!--controls-->
    </section>
  </div>
</header>
