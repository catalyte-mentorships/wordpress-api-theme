import removeHTML from '../util/strings/removeHTML';
// import endpoints from '../util/api/endpoints';

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
      // fetch(`${endpoints.getPostMetaData(post.id)}`)
      //   .then(results => {
      //     console.log(results);
      //   });

      slides += `
        <div class="main-content__card">
          <div class="img-container">
            <a href="${post.custom_fields['external-link']}" target="_blank">
              <img src="${post._embedded['wp:featuredmedia'][0].source_url}" alt="" class="img">
            </a>
          </div>
          <div class="content">
            <h4>${post.title.rendered}</h4>
            <p>${removeHTML(post.content.rendered)}</p>
            <a href="${post.custom_fields['external-link']}" target="_blank">${removeHTML(post.excerpt.rendered)}</a>
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
