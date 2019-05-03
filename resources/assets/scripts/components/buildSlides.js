import buildSlidesHTML from './buildSlidesHTML';
import endpoints from '../util/api/endpoints';
import createGlider from './glider';
import spinner from './spinner';

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @param {string} type
 * @param {HTMLElement} el
 */
const buildSlides = (type, el) => {
  // Turn the sinner on
  spinner('on', el);

  fetch(`${endpoints.getPostEndpoint(type)}`)
    .then(results => {
      return results.json();
    })
    .then(posts => {
      // Create the sides HTML template
      return buildSlidesHTML(posts);
    })
    .then(slides => {
      // Populate the DOM with slides
      el.innerHTML = slides;
      // Activate the Glider lib
      createGlider(type);
      // Turn the sinner off
      spinner('off', el);
    })
    .catch(err => console.error(err));
};

export default buildSlides;
