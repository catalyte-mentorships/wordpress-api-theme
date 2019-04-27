{{--
  Template Name: Front Page template
--}}

{{--@extends('layouts.app')--}}

@include('partials.front-page.hero')
<section>
  <div class="whats-on">
    <h1 class="whats-on__title">What's On</h1>
    <h5 class="whats-on__sub-title">
      The latest exhibitions across our three locations.
    </h5>
    @include('partials.components.slider')
  </div>
  <section>
    <main>
      @include('partials.front-page.main-content')
    </main>
  </section>
</section>
