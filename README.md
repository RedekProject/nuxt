<p align="center">
    <a href="https://www.redekproject.fr/" target="_blank">
        <img alt="Redek Project" src="http://www.redekproject.fr/public_data/images/Logo%20medium.png" width="300">
    </a>
</p>

<h1 align="center">NuxtJS template with Vuetify</h1>

A [Nuxt.js](https://github.com/nuxt/nuxt.js) + [Vuetify.js](https://github.com/vuetifyjs/vuetify) starter project template with a different organization to the usual one. This package will allow you to install several components from the initialization.

# 🔨 Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init RedekProject/vuetify-nuxt my-project
$ cd my-project
$ npm install
$ npm run dev
```
> **Make sure to use a version of vue-cli >= 2.1 (Know the vue-cli version : vue -V).**

# 🚀 Usage

## Development

Command to develop your web application.

```bash
# Server with hot reloading at localhost:3000
$ npm run dev
```

Go to [http://localhost:3000](http://localhost:3000).

## Production - No SPA

```bash
# Build for production and launch the server
$ npm run build
$ npm start
```

## Generate - For SPA

```bash
# Generate a static project
$ npm run generate
```

# Directory Structure

```bash
.
├── config
|   └── # Contains all nuxt configuration files.
├── rules
|   └── # Contains all rules islint configurable easily and quickly. (credit : @slynova/eslint-config).
├── src
|   ├── assets
|   |   ├── fonts # Default font installed to show how _fonts.scss works.
|   |   |   ├── Nunito
|   |   |   └── Roboto
|   |   ├── images
|   |   └── style
|   |       ├── css # If `SASS` is not installed.
|   |       ├── scss # If `SASS` is installed.
|   |       └── styl
|   ├── components
|   ├── layouts
|   ├── middleware
|   ├── pages # If `@nuxtjs/router` is not installed.
|   ├── plugins
|   ├── static
|   ├── store
|   ├── views # If `@nuxtjs/router` is installed.
|   └── router.js # If `@nuxtjs/router` is installed.
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── nuxt.config.js
├── package.json
└── README.md
```

# 🔌 Components

- @nuxtjs/axios : [https://github.com/nuxt-community/axios-module](https://github.com/nuxt-community/axios-module)
- @nuxtjs/router : [https://github.com/nuxt-community/router-module](https://github.com/nuxt-community/router-module)
- @nuxtjs/sitemap : [https://github.com/nuxt-community/sitemap-module](https://github.com/nuxt-community/sitemap-module)
- Vuetify - A La Carte : [https://vuetifyjs.com/en/guides/a-la-carte](https://vuetifyjs.com/en/guides/a-la-carte)
- PUG : [https://github.com/pugjs/pug](https://github.com/pugjs/pug)
- SCSS :
    - Node-Sass : [https://github.com/sass/node-sass](https://github.com/sass/node-sass)
    - Sass-Loader : [https://github.com/webpack-contrib/sass-loader](https://github.com/webpack-contrib/sass-loader)
- Polyfill :
    - Babel Polyfill : [https://babeljs.io/](https://babeljs.io/)
    - Eventsource Polyfill : [https://github.com/amvtek/EventSource](https://github.com/amvtek/EventSource)

# 📘 Documentations

- VueJS : [https://vuejs.org](https://vuejs.org/v2/guide/)
- VueX : [https://vuex.vuejs.org](https://vuex.vuejs.org/en/intro.html)
- Nuxt : [https://nuxtjs.org](https://nuxtjs.org)
- Pug : [https://pugjs.org](https://pugjs.org/api/getting-started.html)
- SASS : [https://sass-lang.com](https://sass-lang.com/guide)

# 👥 Author
- **DESPLATS Philippe** - *Full-stack developer* - [Redek Project](https://github.com/RedekProject/)

> Credit : [Vuetify.js](https://github.com/vuetifyjs/nuxt)

# 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/RedekProject/vuetify-nuxt/blob/master/LICENSE) file for details.