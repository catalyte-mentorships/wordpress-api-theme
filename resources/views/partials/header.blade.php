<header class="banner">
  <div class="container">
    <section class="nav">
      <div class="nav__logo">
        <a href="/" class="nav__logo-svg"></a>
      </div>
      <div class="nav__controls">
        <a href="https://rsecure.metmuseum.org/admissions/tickets" class="buy-tickets">Buy Tickets</a>
        <div class="search">
          <a href="#">
            <span class="icon"></span>
          </a>
        </div>

        <a href="#main-menu" class="menu-toggle">
          <span class="fa fa-bars"></span>
        </a>

        <nav class="nav__menu">
          <a href="#main-menu-toggle" class="menu-close">
            <span class="fa fa-close"></span>
          </a>
          {{--@if (has_nav_menu('primary_navigation'))--}}
            {{--{!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}--}}
          {{--@endif--}}
        </nav>
        <a href="#main-menu-toggle" class="backdrop" hidden></a>
      </div><!--controls-->
    </section>
  </div>
</header>
