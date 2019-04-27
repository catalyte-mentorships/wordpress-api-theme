import Glide from '@glidejs/glide'

// My modules
import locations from '../util/location';
import endpoints from '../util/api/endpoints';
import buildSlides from '../components/buildSlides';
import buildMainContent from '../components/buildMainContent';
/**
 * @author Keith Murphy | nomadmystics@gmail.com
 */

export default {
  init() {

  },
  finalize() {
    // DOM elements
    const heroVideo = window.document.getElementById('hero__video');
    const whatsOnGlider = window.document.getElementById('js-whats-on-glider');
    const mainContent = window.document.getElementById('js-main-content');
    const videoSrc = `http://${locations.getHost()}/app/uploads/2019/04/hero_video.mp4`;

    /**
     * @description This will check if the screen size is a desktop and play the video
     */
    const playVideo = () => {
      let status = 0;
      fetch(videoSrc,{
        method: 'HEAD',
      })
      .then(res => {
        if (res.status === 200) {
          status = 200;

          if (window.innerWidth >= 1028) {
            heroVideo.src = videoSrc;
            heroVideo.play();
          }
        }
      });

      // If the user has a bigger screen on resize play video
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1028) {
          if (status === 200) {
            heroVideo.src = videoSrc;
            heroVideo.play();
          }
        }
      }, false)
    };
    playVideo();

    // Build the whats on slider
    // @todo Change to an imported module
    fetch(`${endpoints.getPostEndpoint('whats_on')}`)
      .then(results => {
        return results.json();
      })
      .then(posts => {
        return buildSlides(posts);
      })
      .then(slides => {
        whatsOnGlider.innerHTML = slides;
        createGlider();
      })
      .catch(err => console.error(err));

      // Build main content
      // @todo Change to an imported module
      fetch(`${endpoints.getPostByCategoryEndpoint('2')}`)
        .then(results => {
          return results.json();
        })
        .then(posts => {
          console.log(posts);
          return buildMainContent(posts);
        })
        .then(cards => {
          mainContent.innerHTML = cards;
        })
        .catch(err => console.error(err));
  },
};

// @todo Change to an imported module
const createGlider = () => {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    breakpoints: {
      // 1400: {
      //   gap: 5,
      //   perView: 7,
      // },
      1028: {
        gap: 5,
        perView: 5,
      },
      900: {
        gap: 5,
        perView: 4,
      },
      800: {
        gap: 5,
        perView: 3,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
    focusAt: 'center',
  }).mount();
};
