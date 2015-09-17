# PkmnLib.js
---
> A Pokemon library for JavaScript. That's it.

---
## API
### `config.js`
`config.js` is a ES6 module. It's default export should be in the following format:
```js
{
    modules: [ // Will be automatically deep flattened for dependency management
        /* A module from the project */
    ]
}
```
Here is the built in file for reference:
```js
import Core from './src/core';

export default {
	modules: [
		Core
	]
};
```

### Built file
The built file is available as an ES6 module (`dist/build-es6.js`), a UMD module in ES6 (`dist/build-es6-umd.js`), a UMD module in ES5 (`dist/build-es5.js`), and a minified UMD module in ES5 (`dist/build-es5.min.js`). By default, it is JSON in the following format:
```js
{
    core: {
        loaded: true
    },
    Module: /* See Module documentation */
}
```
However, in order for it to be useful, you must add modules. To add modules, add them to `config.js`'s `modules` array.

### Module
A PkmnLib.js module should be an ES6 class that extends `PkmnLib.Module`. A module's constructor should **not** handle initialization. It should only call `super()`. It's `init` method should handle initialization. Use `this.originalPkmnLib` to get properties from other modules. Set properties on `this` to add to the core module. See `src/core.js` for an example.

### Actually doing things
In order to be useful, this library must be extended with modules. See `config.js` to learn how to add modules.

## License
See `LICENSE` in the project root.
