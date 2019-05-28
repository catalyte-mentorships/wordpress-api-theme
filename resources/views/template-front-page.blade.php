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
    @include('partials.components.slider', [
      'type' => 'whats-on'
    ])
  </div>
  <section>
    <main>
      @include('partials.front-page.main-content')
    </main>
  </section>
  <section>
    <div class="discover-more">
      <h1 class="discover-more__title">Discover More at The Met</h1>
      <h5 class="discover-more__sub-title">Connect to creativity, knowledge, and ideas through all the Museum has to offer.</h5>
      @include('partials.components.slider', [
			 'type' => 'discover-more'
      ])
    </div>
  </section>
{{--  @include('partials.footer')--}}
</section>
