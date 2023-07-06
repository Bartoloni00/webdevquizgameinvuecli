import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                primary: '#F88D65',
                secondary: '#E3B76E',
                accent: '#FF7E1C',
                error: '#22A0FF',
                warning: '#00A1FF',
                info: '#FFBB99',
                success: '#4CAF50'
              }
        }
    }
});
