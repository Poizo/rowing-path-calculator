/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,scss,ts}",
        "./user-management/**/*.{html,scss,ts}",
        "./design-system/**/*.{html,scss,ts}",
        "./advanced-search/**/*.{html,scss,ts}",
        "./styles/**/*.{css,scss}"],
    theme: {
        colors: {
            transparent: "transparent",
            action: {
                primary: 'var(--color-action-primary)',
                dark: 'var(--color-action-dark)',
                darker: 'var(--color-action-darker)',
                light: 'var(--color-action-light)',
                lighter: 'var(--color-action-lighter)',
            },
            success: {
                primary: 'var(--color-success-primary)',
                dark: 'var(--color-success-dark)',
                darker: 'var(--color-success-darker)',
                light: 'var(--color-success-light)',
                lighter: 'var(--color-success-lighter)',
            },
            danger: {
                primary: 'var(--color-danger-primary)',
                dark: 'var(--color-danger-dark)',
                darker: 'var(--color-danger-darker)',
                light: 'var(--color-danger-light)',
                lighter: 'var(--color-danger-lighter)',
            },
            warning: {
                primary: 'var(--color-warning-primary)',
                dark: 'var(--color-warning-dark)',
                darker: 'var(--color-warning-darker)',
                light: 'var(--color-warning-light)',
                lighter: 'var(--color-warning-lighter)',
            },
            accent: {
                primary: 'var(--color-accent-primary)',
                dark: 'var(--color-accent-dark)',
                darker: 'var(--color-accent-darker)',
                light: 'var(--color-accent-light)',
                lighter: 'var(--color-accent-lighter)',
            },
            brand: {
                primary: 'var(--color-brand-primary)',
                dark: 'var(--color-brand-dark)',
                darker: 'var(--color-brand-darker)',
                light: 'var(--color-brand-light)',
                lighter: 'var(--color-brand-lighter)',
            },
            grey: {
                "00": "#FFFFFF",
                "01": "#F9FAFB",
                "02": "#F0F1F2",
                "03": "#DEDFE0",
                "04": "#B4B6B8",
                "05": "#9EA1A3",
                "06": "#73777A",
                "07": "#595D61",
                "08": "#3A3E42",
                "09": "#2C3034",
                "10": "#040405"
            },
            bridgeColor: 'var(--color-bridge)',
            buildingColor: 'var(--color-building)',
            mapBackgroundColor: 'var(--color-map-background)',
            parkColor: 'var(--color-park)',
            wateColorr: 'var(--color-water)',
        },
        fontFamily: {
            body: ["Roboto", "sans-serif", "system-ui"],
        },
        gap: {
            DEFAULT: "8px",
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'
        },
        extend: {
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        require("postcss-import"),
        require("postcss-nested-ancestors"),
        require("prettier-plugin-tailwindcss")
    ],
};
