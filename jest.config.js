module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	globals: {
		"ts-jest": {
			tsconfig: "./tsconfig.json",
		},
	},
	moduleNameMapper: {
		"^.+\\.svg$": "<rootDir>/fileMock.js",
		"^.+\\.css$": "<rootDir>/fileMock.js",
	},
	setupFilesAfterEnv: ["./jest.setup.ts"],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
}
