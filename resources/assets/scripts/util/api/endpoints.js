import location from '../location';

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @description Build out all of the endpoints needed to gather API data from endpoints
 */
export default {
  getPostEndpoint: (post_type = 'post') => {
    return `${location.getHost()}/wp-json/wp/v2/${post_type}`;
  },
};
