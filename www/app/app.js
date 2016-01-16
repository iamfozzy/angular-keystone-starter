// Angular
import 'angular';
import 'ui-router';
import 'angular-ui-router-title';

// SCSS
import './app.scss';

// Modules
import modCommon from './common/common.module';

let mod = angular.module('app', [
    'app.common',
    'ui.router',
    'ui.router.title'
]);

export default mod = mod.name;