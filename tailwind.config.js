/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },

        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
        },

        extend: {
            colors: {
                primary: '#3D1DF3', //Purple Color
                secondary: '#00EA77', //Green Color
                info: '#C7FFB1', //Ligth Yellow color
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            borderRadius: {
                'custom-10': '10px', // Radio de esquinas personalizado
                'custom-5': '5px', // Radio de esquinas personalizado
            },
            borderWidth: {
                0.5: '0.5px', // Ancho de borde personalizado
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
