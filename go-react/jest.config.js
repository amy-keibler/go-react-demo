module.exports = {
    "globals": {
        "ts-jest": {
            "tsConfig": "./tsconfig.json",
            "useBabelrc": true
        }
    },
    "transform": {
        "^.+\\.(js|jsx)?$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.(ts|tsx)?$": "ts-jest",
    },
    "testRegex": "((\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": ["ts", "tsx", "js", "jsx"]
};
