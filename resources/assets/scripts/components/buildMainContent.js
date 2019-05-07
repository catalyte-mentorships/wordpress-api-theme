import endpoints from '../util/api/endpoints';
import spinner from './spinner';
import buildMainContentHTML from './buildMainContentHTML';

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @param {HTMLElement} el
 */
const buildMainContent = (el) => {
  // Turn the sinner on
  spinner('on', el);

  fetch(`${endpoints.getPostByCategoryEndpoint('2')}`)
    .then(results => {
      return results.json();
    })
    .then(posts => {
      console.log(posts);
      return buildMainContentHTML(posts);
    })
    .then(cards => {
      el.innerHTML = cards;
      // Turn the sinner off
      spinner('off', el);
    })
    .catch(err => console.error(err));
};

export default buildMainContent;

