import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: false,
        },
        themes: {
            light: {
                primary: colors.purple.base,
                secondary: colors.teal.base,
                accent: colors.lime.base,
                error: colors.red.base,
                warning: colors.amber.base,
                info: colors.lightBlue.base,
                success: colors.green.base
            }
        }
    }
});
