module.exports = {
  presets: [
    require('babel-preset-es2015-without-strict'),
    require('babel-preset-react')
  ],
  plugins: [
    require('babel-plugin-async-to-promises'),
    require('babel-plugin-transform-class-properties'),
    [require('babel-plugin-transform-es2015-template-literals'), { spec: true }],
    [require('babel-plugin-transform-es2015-for-of'), { loose: true }],
    require('babel-plugin-transform-es3-member-expression-literals'),
    require('babel-plugin-transform-es3-property-literals'),
    require('babel-plugin-transform-exponentiation-operator'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-runtime')
  ]
};
