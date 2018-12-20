module.exports = {
    "root":true,
    "extends": "standard",
    // "plugins":["standard"],
    "parser":"babel-eslint",
    "parserOptions":{
        "ecmaVersion":6,
        "sourceType":"script"
    },
    "globals":{
        "window":true
    },
    "env":{
        "browser":false,
        "node":true,
        "es6":true,
    },
    "rules": {
    //     // enable additional rules
    //     "indent": ["error", 2],
    //     // "linebreak-style": ["error", "unix"],
    //     "quotes": ["error", "single"],
    //     "semi": ["error", "never"],

    //     // override default options for rules from base configurations
    //     // "comma-dangle": ["error", "always"],
    //     "no-cond-assign": ["error", "always"],

    //     // disable rules from base configurations
    //     "no-console": ["error", { allow: ["warn", "info"] }] 
    }
}