# Babel Plugin Not-Js Import Remover

This plugin removes Not-Js Import from files.

## Purpose

The original purpose is removing CSSs and images import statments from react components when trying to SSR.

## Installation

using npm:

`npm install --save-dev babel-plugin-not-js-import-remover`

or using yarn:

`yarn add babel-plugin-not-js-import-remover -D`

## Caution

You **Must** use this plugin before @babel/plugin-transform-modules-commonjs or plugins shuch that converting import statements to require calls,
Because this module doesn't remove calling require at all. it only removes import statements that have not allowed extensions.

## How to Use

### Default Not Allowed Extensions

- html,
- css,
- sass,
- scss,
- less,
- stylus,
- svg,
- png,
- jpg,
- jpeg,
- gif,

### Extend Not Allowed Extensions

```javascript
{
  plugins: [
    ['not-js-import-remover', { extends: ['extension1', 'extension2'] }],
  ];
}
```

```json
{
  "plugins": [
    ["not-js-import-remover", { "extends": ["extension1", "extension2"] }],
  ];
}
```
