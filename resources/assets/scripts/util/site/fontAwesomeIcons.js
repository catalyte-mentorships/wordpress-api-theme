// Add Font Awesome here for Tree shaking
// import then needed Font Awesome functionality
import { library, dom } from '@fortawesome/fontawesome-svg-core/index';
// import the Facebook and Twitter icons
import {
	faFacebook,
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import {
	faBars,
	faSearch,
	faPlus,
	faArrowRight,
	faArrowLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default {
	exposeIcons: () => {
		// add the imported icons to the library
		library.add(faFacebook,
			faTwitter,
			faYoutube,
			faInstagram,
			faBars,
			faSearch,
			faPlus,
			faArrowRight,
			faArrowLeft,
      faChevronRight
		);

		// tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup
		dom.watch();
	},
}
