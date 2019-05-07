/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @param {string} mode
 * @param {HTMLElement} el
 */
const spinner = (mode, el) => {

  if ('on' === mode) {
    if ('js-whats-on-glider' === el.id) {

      const whatsOnSpinner = window.document.querySelector('.spinner-whats-on');
      whatsOnSpinner.style.animationPlayState = 'running';

    } else if ('js-discover-more-glider' === el.id) {

      const discoverMoreSpinner = window.document.querySelector('.spinner-discover-more');
      discoverMoreSpinner.style.animationPlayState = 'running';

    } else if ('js-main-content' === el.id) {

      const mainContentSpinner = window.document.querySelector('.spinner-main-content');
      mainContentSpinner.style.animationPlayState = 'running';

    }
  } else if ('off' === mode) {
    if ('js-whats-on-glider' === el.id) {

      const whatsOnSpinner = window.document.querySelector('.spinner-whats-on');
      whatsOnSpinner.style.animationPlayState = 'paused';
      whatsOnSpinner.style.display = 'none';

    } else if ('js-discover-more-glider' === el.id) {

      const discoverMoreSpinner = window.document.querySelector('.spinner-discover-more');
      discoverMoreSpinner.style.animationPlayState = 'paused';
      discoverMoreSpinner.style.display = 'none';

    } else if ('js-main-content' === el.id) {

      const mainContentSpinner = window.document.querySelector('.spinner-main-content');
      mainContentSpinner.style.animationPlayState = 'paused';
      mainContentSpinner.style.display = 'none';

    }
  }
};

export default spinner;
