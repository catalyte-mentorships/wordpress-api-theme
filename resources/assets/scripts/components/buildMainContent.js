import removeHTML from '../util/strings/removeHTML';

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @param posts
 * @returns {Promise<any>}
 */
const buildMainContent = (posts) => {
  return new Promise((res, rej) => {
    let slides = '';
    const postReversed = posts.reverse();

    postReversed.forEach((post) => {
      slides += `
        <div class="main-content__card">
          <div class="img-container">
            <img src="${post._embedded['wp:featuredmedia'][0].source_url}" alt="" class="img">
          </div>
          <div class="content">
            <h4>${post.title.rendered}</h4>
            <p>${removeHTML(post.content.rendered)}</p>
            <a href="#">Lets's Rock!</a>
          </div>
        </div>
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

export default buildMainContent;
