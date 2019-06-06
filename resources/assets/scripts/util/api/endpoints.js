/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @description Build out all of the endpoints needed to gather API data from endpoints
 */
export default {
  getPostEndpoint: (postType = 'post') => {
    if (window.location.href.includes('com')) {
      return `/the_met/wp-json/wp/v2/${postType}?_embed`;
    }
    return `/wp-json/wp/v2/${postType}?_embed`;
  },
  getPostByCategoryEndpoint: (category) => {
    if (window.location.href.includes('com')) {
      console.log('com');
      return `/the_met/wp-json/wp/v2/posts?categories=${category}&_embed`;
    }
    console.log('everything else');
    return `/wp-json/wp/v2/posts?categories=${category}&_embed`;
  },
};
