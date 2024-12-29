// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify styles
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Material Design Icons

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light', // Change to 'dark' for dark mode
        themes: {
            light: {
                colors: {
                    primary: '#6200ea',
                    secondary: '#03dac6',
                },
            },
            dark: {
                colors: {
                    primary: '#bb86fc',
                    secondary: '#03dac6',
                },
            },
        },
    },
    defaults: {
        VBtn: {
            rounded: 'lg',
            elevation: 2,
        }
    },
    icons: {
        defaultSet: 'mdi', // Use Material Design Icons
        aliases,
        sets: {
            mdi,
        },
    },
});

export default vuetify;
