import Vue from 'vue'
{{#alacarte}}
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar
  },
  theme: {
    primary: '#1976D2',
    accent: '#ce93d8',
    secondary: '#424242',
    info: '#27B1DB',
    warning: '#F5F542',
    error: '#F14B4B',
    success: '#63C017'
  }
})
{{else}}
import Vuetify from 'vuetify'

Vue.use(Vuetify, { theme: {
  primary: '#1976D2',
  accent: '#ce93d8',
  secondary: '#424242',
  info: '#27B1DB',
  warning: '#F5F542',
  error: '#F14B4B',
  success: '#63C017'
}})
{{/alacarte}}
