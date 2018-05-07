{{#pug}}
<template lang="pug" src="./default/default.pug"></template>
{{else}}
<template src="./default/default.html"></template>
{{/pug}}
<script src="./default/default.script.js"></script>
{{#sass}}
<style lang="scss" src="./default/default.style.scss" scoped></style>
{{else}}
<style src="./default/default.style.css" scoped></style>
{{/sass}}
