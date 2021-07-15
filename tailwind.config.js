module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primaryYellow: "#FFBD12",
                primaryBlack: "#18191F",
                softYellow: "#FFF4CC",
                softGreen: "#D6FCF7",
            },
            fontFamily: { sans: ["Montserrat"] },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
