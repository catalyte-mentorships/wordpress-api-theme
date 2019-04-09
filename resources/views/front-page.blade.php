@extends('layouts.app')


@section('content')
	<section>
		<div class="home-wrapper">
			@while(have_posts()) @php the_post() @endphp
			@include('partials.front-page.hero')
			<section>
				<div class="whats-on">
					<h1 class="whats-on__title">What's On</h1>
					<h5 class="whats-on__sub-title">
						The latest exhibitions across our three locations.
					</h5>
					@include('partials.components.slider')
				</div>
			</section>
			@include('partials.content-page')
			@endwhile
			<div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, eaque enim eveniet, exercitationem incidunt
					iste minus nesciunt pariatur perspiciatis possimus quaerat quos similique ut? Alias distinctio doloremque dolores
					natus pariatur!</p>
				<p>Ab beatae distinctio doloremque eligendi error, est eveniet magnam magni minima natus nobis quam sapiente,
					tempore ut voluptate? Dolorem est eum id molestias necessitatibus nobis numquam quos repellendus sit totam?</p>
				<p>Adipisci aliquam fugiat natus odio odit placeat, quaerat sapiente sunt suscipit voluptatibus. Accusantium aliquam
					cumque, deserunt doloribus ex fuga ipsa iusto minima necessitatibus odio, reprehenderit rerum sed suscipit totam
					unde.</p>
				<p>Ad alias cupiditate, dignissimos dolorem dolores dolorum eos in ipsum nihil numquam obcaecati optio quibusdam
					quis reprehenderit veniam. Animi dolorum eius in ipsum maxime nihil, repellat repellendus tempore voluptates
					voluptatum.</p>
			</div>
		</div>
	</section>
@endsection

