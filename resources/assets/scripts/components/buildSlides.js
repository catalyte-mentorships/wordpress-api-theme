import buildSlidesHTML from './buildSlidesHTML';
import endpoints from '../util/api/endpoints';
import createGlider from './glider';

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @param {string} type
 * @param el
 */
const buildSlides = (type, el) => {
  console.log(type);
  console.log(el);

  fetch(`${endpoints.getPostEndpoint(type)}`)
    .then(results => {
      return results.json();
    })
    .then(posts => {
      return buildSlidesHTML(posts);
    })
    .then(slides => {
      el.innerHTML = slides;
      createGlider(type);
    })
    .catch(err => console.error(err));
};

export default buildSlides;
