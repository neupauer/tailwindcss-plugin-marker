# Tailwind CSS Plugin – Marker

This plugin allows you to customize the list marker box.

## Install

1. Install the plugin:

```bash
# Using npm
npm install @neupauer/tailwindcss-plugin-marker --save-dev

# Using Yarn
yarn add @neupauer/tailwindcss-plugin-marker -D
```

2. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [require("@neupauer/tailwindcss-plugin-marker")],
};
```

## Configuration

By default, no variation is added, so you must enable it yourself.

E.g, enable variations for text color (`marker:text-red-500`) and list style type (`marker:list-disc`)

```js
// tailwind.config.js
module.exports = {
  variants: {
    textColor: [/** ... */, "marker"],
    listStyleType: [/** ... */, "marker"],
  },
};
```

## Usage

> You must first add the "activator" class `.marker` and then you can use the enabled variants

```html
<ul class="marker marker:list-disc marker:text-red-500">
  <li>Hello</li>
  <li>World</li>
</ul>

<!-- With prefix `tw-` -->
<ul class="tw-marker marker:tw-list-disc marker:tw-text-red-500">
  <li>Hello</li>
  <li>World</li>
</ul>

<!-- With responsive variant -->
<ul class="marker marker:list-disc marker:text-red-500 sm:marker:text-blue-500">
  <li>Hello</li>
  <li>World</li>
</ul>
```
