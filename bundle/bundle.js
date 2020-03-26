(function (decamelize, pkg1, pkg2) {
	'use strict';

	decamelize = decamelize && Object.prototype.hasOwnProperty.call(decamelize, 'default') ? decamelize['default'] : decamelize;
	pkg1 = pkg1 && Object.prototype.hasOwnProperty.call(pkg1, 'default') ? pkg1['default'] : pkg1;
	pkg2 = pkg2 && Object.prototype.hasOwnProperty.call(pkg2, 'default') ? pkg2['default'] : pkg2;

	console.log('loaded');
	console.log(decamelize('bunDle'));
	pkg1();
	pkg2();

}(decamelize, pkg1, pkg2));
