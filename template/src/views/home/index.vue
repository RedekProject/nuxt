{{#pug}}
<template lang="pug" src="./home.pug"></template>
{{else}}
<template src="./home.html"></template>
{{/pug}}
<script src="./home.script.js"></script>
{{#sass}}
<style lang="scss" src="./home.style.scss" scoped></style>
{{else}}
<style src="./home.style.css" scoped></style>
{{/sass}}

