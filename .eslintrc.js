module.exports = {
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
	},
	plugins: ["sonarjs", "import", "prettier"],
	env: {
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:sonarjs/recommended",
		"plugin:prettier/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
	],
	rules: {
		"import/no-unresolved": "off",
		"@typescript-eslint/no-var-requires": "off",
		quotes: [
			"error",
			"double",
			{ avoidEscape: rue, allowTemplateLiterals: false },
		],
		"sonarjs/cognitive-complexity": ["error", 12],
		"import/order": [
			"error",
			{
				pathGroups: [
					{
						pattern: "~/*",
						group: "external",
						position: "after",
					},
					{ pattern: "./*", group: "internal", position: "before" },
				],
				pathGroupsExcludedImportTypes: ["builtin"],
			},
		],
	},
};
