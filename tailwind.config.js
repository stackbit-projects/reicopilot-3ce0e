const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    darkMode: 'media', // false or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            primary: colors.indigo,
            secondary: colors.yellow,
            red: colors.red,
            green: colors.green,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
