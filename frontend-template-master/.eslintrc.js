module.exports = {
	root: true,
	plugins: ['prettier'],
	extends: [
		'plugin:vue/essential',
		'plugin:prettier/recommended',
		'@vue/airbnb',
	],
	rules: {
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-tabs': 0,
		indent: [2, 'tab'],
	},
};
