/* Automatically generated by './build/bin/build-entry.js' */

import Form from '../packages/form/index.js';
import locale from 'element-ui/src/locale';

const components = [
  Form
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Form
};
