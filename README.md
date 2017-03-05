# babel-preset-ryosuga

> A babel preset for transforming my Javascript.

## Install
```bash
npm i @ryo_suga/babel-preset-ryosuga -D
```

## Usage
### Via `.babelrc` (Recommended)
**.babelrc**
```
{
  "presets": ["@ryo_suga/babel-preset-ryosuga"]
}
```

### Via CLI
```
$ babel script.js --presets ryosuga
```

### Via Node API
```
require('babel-core').transform('code', {
  presets: ['ryosuga']
});
```

