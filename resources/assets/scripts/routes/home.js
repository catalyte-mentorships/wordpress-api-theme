// My modules
// import locations from '../util/location';
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
    const heroVideoSourceElm = window.document.getElementById('hero__video-source');
    const whatsOnGlider = window.document.getElementById('js-whats-on-glider');
    const discoverMoreGlider = window.document.getElementById('js-discover-more-glider');
    const mainContent = window.document.getElementById('js-main-content');

    const videoSrc = heroVideoSourceElm.innerHTML;

    console.log(videoSrc);

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

    // Build the sliders
    buildSlides('whats_on', whatsOnGlider);
    buildSlides('discover_more', discoverMoreGlider);

    // Build main content
    buildMainContent(mainContent);
  },
};
