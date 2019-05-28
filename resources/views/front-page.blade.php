@extends('layouts.app')


@section('content')
	<section>
		<div class="home-wrapper">
{{--			@while(have_posts()) @php the_post() @endphp--}}
        @include('template-front-page')
{{--			@endwhile--}}
    </div>
	</section>
@endsection

