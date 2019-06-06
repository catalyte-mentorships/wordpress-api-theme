/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @description Build out all of the endpoints needed to gather API data from endpoints
 */
export default {
  getPostEndpoint: (postType = 'post') => {
    return `/wp-json/wp/v2/${postType}?_embed`;
  },
  getPostByCategoryEndpoint: (category) => {
    return `/wp-json/wp/v2/posts?categories=${category}&_embed`;
  },
};
