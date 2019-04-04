@extends('layouts.app')

<section>
	<div class="home-wrapper">
		@section('content')
			@while(have_posts()) @php the_post() @endphp
			@include('partials.front-page.hero')
			@include('partials.content-page')
			@endwhile
		@endsection
	</div>
</section>
