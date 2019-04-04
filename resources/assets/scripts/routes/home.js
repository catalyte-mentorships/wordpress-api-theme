import locationString from '../util/location';
import Flickity from 'flickity';

export default {
  init() {
    const slider = window.document.getElementById('slider');
    new Flickity(slider, {
      freeScroll: true,
      wrapAround: true,
      imagesLoaded: true,
    });
  },
  finalize() {
    // DOM elements
    const heroVideo = window.document.getElementById('hero__video');

    /**
     * @description This will check if the screen size is a desktop and play the video
     */
    const playVideo = () => {
      if (window.innerWidth >= 1028) {
        // http://nomadslittlebrother.test/app/uploads/2019/04/hero_video.mp4
        heroVideo.src = `http://${locationString.getHost()}/app/uploads/2019/04/hero_video.mp4`;
        heroVideo.play();
      }
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1028) {
          // http://nomadslittlebrother.test/app/uploads/2019/04/hero_video.mp4
          heroVideo.src = `http://${locationString.getHost()}/app/uploads/2019/04/hero_video.mp4`;
          heroVideo.play();
        }
      }, false)
    };
    playVideo();
  },
};
