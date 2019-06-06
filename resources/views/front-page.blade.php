@extends('layouts.app')

@section('content')
	<section>
		<div class="home-wrapper">
			@while(have_posts()) @php the_post() @endphp
        @include('template-front-page', [
          'hero_video' => $hero_video,
        ])
			@endwhile
    </div>
	</section>
@endsection
