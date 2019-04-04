import locationString from '../util/location';

export default {
  init() {
    // JavaScript to be fired on the home page
    // https://players.brightcove.net/911432378001/default_default/index.html?videoId=5992547911001
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
    };
    playVideo();
  },
};
