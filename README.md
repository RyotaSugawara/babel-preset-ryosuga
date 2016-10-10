# babel-preset-ryosuga

> A babel preset for transforming my Javascript.

## Install
```bash
npm i git://github.com/RyotaSugawara/babel-preset-ryosuga.git -D
```

## Usage
### Via `.babelrc` (Recommended)
**.babelrc**
```
{
  "presets": ["ryosuga"]
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

