// *** Vendors are loaded dynamically from the webpack configuration when an external dependency
// is found in node modules.  Do not add any dependencies here without knowing what your are doing.
// Once we can get rid of jquery we will get rid of this file all together.
import * as jquery from 'jquery';
// tslint:disable-next-line
window['jQuery'] = window['$'] = jquery;
