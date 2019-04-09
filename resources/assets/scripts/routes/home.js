import locationString from '../util/location';
// import Flickity from 'flickity';
import Glide from '@glidejs/glide'



export default {
  init() {
    // const slider = window.document.getElementById('slider');
    // new Flickity(slider, {
    //   freeScroll: true,
    //   wrapAround: true,
    //   imagesLoaded: true,
    // });
    new Glide('.slider', {
      type: 'carousel',
      startAt: 0,
      perView: 10,
      breakpoints: {
        1400: {
          gap: 5,
          perView: 7,
        },
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
  },
  finalize() {
    // DOM elements
    const heroVideo = window.document.getElementById('hero__video');

    /**
     * @description This will check if the screen size is a desktop and play the video
     */
    const playVideo = () => {
      const videoSrc = `http://${locationString.getHost()}/app/uploads/2019/04/hero_video.mp4`;
      let status = 0;

      if (window.innerWidth >= 1028) {
        fetch(videoSrc,{
          method: 'HEAD',
        })
        .then(res => {
            console.log(res);
          if (res.status === 200) {
            status = 200;
            // http://nomadslittlebrother.test/app/uploads/2019/04/hero_video.mp4
            heroVideo.src = videoSrc;
            heroVideo.play();
          }
        });
      }
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1028) {
          if (status === 200) {
            // http://nomadslittlebrother.test/app/uploads/2019/04/hero_video.mp4
            heroVideo.src = `http://${locationString.getHost()}/app/uploads/2019/04/hero_video.mp4`;
            heroVideo.play();
          }
        }
      }, false)
    };
    playVideo();
  },
};
