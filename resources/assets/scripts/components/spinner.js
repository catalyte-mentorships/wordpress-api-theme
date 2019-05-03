// Dom Elements
const whatsOnSpinner = window.document.querySelector('.spinner-whats-on');
const discoverMoreSpinner = window.document.querySelector('.spinner-discover-more');

/**
 * @author Keith Murphy | nomadmystics@gmail.com
 * @param {string} mode
 * @param {html5} el
 */
const spinner = (mode, el) => {
  if ('on' === mode) {
    if ('js-whats-on-glider' === el.id) {
      whatsOnSpinner.style.animationPlayState = 'running';
    } else if ('js-discover-more-glider' === el.id) {
      discoverMoreSpinner.style.animationPlayState = 'running';
    }
  } else if ('off' === mode) {
    if ('js-whats-on-glider' === el.id) {
      whatsOnSpinner.style.animationPlayState = 'paused';
      whatsOnSpinner.style.display = 'none';
    } else if ('js-discover-more-glider' === el.id) {
      discoverMoreSpinner.style.animationPlayState = 'paused';
      discoverMoreSpinner.style.display = 'none';
    }
  }
};

export default spinner;
