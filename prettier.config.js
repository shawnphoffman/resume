module.exports = {
	parser: 'babel',
	printWidth: 100,
	useTabs: true,
	semi: false,
	arrowParens: 'avoid',
	trailingComma: 'es5',
	singleQuote: true,
	overrides: [
		{
			files: '*.lang.js',
			options: {
				printWidth: 99999,
			},
		},
	],
}
