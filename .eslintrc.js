module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jest/recommended",
		"plugin:jest/style",
		"testing-library",
	],
	plugins: [
		"jest",
		"react",
		"@typescript-eslint",
		"plugin:testing-library/react",
	],
	env: {
		browser: true,
		es2021: true,
		"jest/globals": true,
	},
	parserOptions: {
		project: "./tsconfig.json",
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	settings: {
		react: {
			version: "detect",
		},
		jest: {
			version: 27,
		},
	},
	rules: {
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
	},
}