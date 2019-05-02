import Glide from '@glidejs/glide'

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @param {string} type
 */
const createGlider = (type) => {
  const cssType = type.replace(/_/g, '-');

  new Glide(`.glide-${cssType}`, {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    breakpoints: {
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

export default createGlider;
