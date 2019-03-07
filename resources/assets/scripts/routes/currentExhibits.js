import endpoints from '../util/api/endpoints';

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @description This will be all of the Javascript that is run on the Current Exhibits page.
 * @todo Work out how to best gather/manipulate the DOM
 */
export default {
  init() {
    // JavaScript to be fired on the Current Events page
    const currentExhibitsEndpoint = endpoints.getPostEndpoint('current_exhibits');

    // Test fetch
    // @todo move this to a util module
    fetch(`http://${currentExhibitsEndpoint}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch(err => console.log(err.message()));

    // Testing only
    // const body = window.document.getElementsByTagName('BODY')[0];
    // body.style.backgroundColor = '#000000';
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
