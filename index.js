const DEFAULT_NOT_ALLOWED_EXTENSIONS = [
  'html',
  'css',
  'sass',
  'scss',
  'less',
  'stylus',
  'svg',
  'png',
  'jpg',
  'jpeg',
  'gif',
];

module.exports = function ({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const NOT_ALLOWED_EXTENSIONS = [
          ...DEFAULT_NOT_ALLOWED_EXTENSIONS,
          ...state.opts.extends,
        ];
        let source = path.node.source.value;
        source = source.split('.');
        const extension = source[source.length - 1];

        // import something from 'something.extension'
        // with not allowed extension such as .css, .svg
        if (!NOT_ALLOWED_EXTENSIONS.includes(extension.toLowerCase())) {
          return;
        }

        // else remove path
        path.remove();
      },
    },
  };
};
