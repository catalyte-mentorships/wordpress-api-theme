
const buildSlides = (posts) => {
  return new Promise((res, rej) => {
    let slides = '';

    posts.forEach((post) => {
      slides += `
        <li class="glide__slide">
          <figure>           
            <img src="${post._embedded['wp:featuredmedia'][0].source_url}" alt="">
          </figure>
          <div class="glide__content">
            <a href="${post.link}">
              <h3 class="title">${post.title.rendered}</h3>
            </a>
              <h5 class="sub-title">${post.excerpt.rendered}</h5>
          </div>
        </li>
       `;
    });

    if (slides) {
      res(slides);
    }

    // @todo This is not good error handling!!!
    if (!slides) {
      rej('There was an error in the creation of the slides');
    }
  });
};

export default buildSlides;
