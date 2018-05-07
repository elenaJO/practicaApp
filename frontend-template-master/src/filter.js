function round(value, decimals = 2) {
	return value.toFixed(decimals);
}

/* eslint-disable space-before-function-paren */
export default function(Vue) {
	Vue.filter('round', round);
}
