<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Circular Array Stream

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a [readable stream][readable-stream] from a circular array-like object.



<section class="usage">

## Usage

```javascript
import circularArrayStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-from-circular-array@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory, objectMode } from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-from-circular-array@esm/index.mjs';
```

<a name="circular-array-stream"></a>

#### circularArrayStream( src\[, options] )

Returns a [readable stream][readable-stream] from an array-like `object` which repeatedly iterates over a provided value's elements.

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

var iStream;
var stream;
var count;

function log( chunk ) {
    console.log( chunk.toString() );
    count += 1;
    if ( count === 20 ) {
        stream.destroy();
    }
}

stream = circularArrayStream( [ 1, 2, 3, 4 ] );
iStream = inspectStream( log );

count = 0;
stream.pipe( iStream );
```

The function accepts the following `options`:

-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.
-   **highWaterMark**: specifies the maximum number of bytes to store in an internal buffer before pausing streaming.
-   **sep**: separator used to join streamed data. This option is only applicable when a stream is **not** in [objectMode][object-mode]. Default: `'\n'`.
-   **serialize**: custom serialization function. This option is only applicable when a stream is **not** in [objectMode][object-mode].
-   **iter**: number of iterations. Default: `1e308`.
-   **dir**: iteration direction. If set to `-1`, the stream iterates over elements from right-to-left. Default: `1`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var stream = circularArrayStream( [ 1, 2, 3, 4 ], opts );
```

By default, the returned [stream][stream] is an infinite stream (i.e., never ends). To limit the number of streamed values, set the `iter` option.

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

function log( chunk ) {
    console.log( chunk.toString() );
}

var opts = {
    'iter': 10
};
var stream = circularArrayStream( [ 1, 2, 3, 4 ], opts );
var iStream = inspectStream( log );

stream.pipe( iStream );
```

By default, when not operating in [objectMode][object-mode], a returned [stream][stream] delineates individual values using a newline character. To specify an alternative separator, set the `sep` option.

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

function log( chunk ) {
    console.log( chunk.toString() );
}

var stream = circularArrayStream( [ 1, 2, 3, 4 ], {
    'sep': ',',
    'iter': 10
});

var iStream = inspectStream( log );

stream.pipe( iStream );
```

By default, when not operating in [objectMode][object-mode], a returned [stream][stream] serializes values as JSON strings. To specify custom serialization behavior (either to a `string` or `Buffer`), set the `serialize` option.

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

function serialize( v ) {
    return 'v::' + v.toString();
}

function log( chunk ) {
    console.log( chunk.toString() );
}

var stream = circularArrayStream( [ 1, 2, 3, 4 ], {
    'serialize': serialize,
    'iter': 10
});

var iStream = inspectStream( log );

stream.pipe( iStream );
```

* * *

#### circularArrayStream.factory( \[options] )

Returns a `function` for creating [readable streams][readable-stream] from array-like objects.

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var createStream = circularArrayStream.factory( opts );

var stream1 = createStream( [ 1, 2, 3, 4 ] );
var stream2 = createStream( [ 5, 6, 7, 8 ] );
// ...
```

The method accepts the same `options` as [`circularArrayStream()`](#circular-array-stream).

* * *

#### circularArrayStream.objectMode( src\[, options] )

This method is a convenience function to create [streams][stream] which **always** operate in [objectMode][object-mode].

```javascript
import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';

function log( v ) {
    console.log( v );
}

var opts = {
    'iter': 10
};
var stream = circularArrayStream.objectMode( [ 1, 2, 3, 4 ], opts );

opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

stream.pipe( iStream );
```

This method accepts the same `options` as [`circularArrayStream()`](#circular-array-stream); however, the method will **always** override the [`objectMode`][object-mode] option in `options`.

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes

-   In [`objectMode`][object-mode], `null` is a reserved value. If an `array` contains `null` values (e.g., as a means to encode missing values), the stream will prematurely end. Consider an alternative encoding or filter `null` values prior to invocation.
-   In binary mode, if an `array` contains `undefined` values, the stream will emit an error. Consider providing a custom serialization function or filtering `undefined` values prior to invocation.

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import inspectStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-inspect-sink@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import circularArrayStream from 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-from-circular-array@esm/index.mjs';

function log( v ) {
    console.log( v.toString() );
}

// Create an array containing uniformly distributed pseudorandom numbers:
var arr = new Float64Array( 10 );

var i;
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = randu();
}

// Convert the array to a stream:
var opts = {
    'objectMode': true,
    'iter': arr.length * 3
};
var stream = circularArrayStream( arr, opts );

// Create a writable stream for inspecting stream data:
opts = {
    'objectMode': true
};
var iStream = inspectStream( opts, log );

// Begin data flow:
stream.pipe( iStream );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/streams-node/from-array`][@stdlib/streams/node/from-array]</span><span class="delimiter">: </span><span class="description">create a readable stream from an array-like object.</span>
-   <span class="package-name">[`@stdlib/streams-node/from-iterator`][@stdlib/streams/node/from-iterator]</span><span class="delimiter">: </span><span class="description">create a readable stream from an iterator.</span>
-   <span class="package-name">[`@stdlib/streams-node/from-strided-array`][@stdlib/streams/node/from-strided-array]</span><span class="delimiter">: </span><span class="description">create a readable stream from a strided array-like object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/streams-node-from-circular-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/streams-node-from-circular-array

[test-image]: https://github.com/stdlib-js/streams-node-from-circular-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/streams-node-from-circular-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/streams-node-from-circular-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/streams-node-from-circular-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/streams-node-from-circular-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/streams-node-from-circular-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/streams-node-from-circular-array/tree/deno
[deno-readme]: https://github.com/stdlib-js/streams-node-from-circular-array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/streams-node-from-circular-array/tree/umd
[umd-readme]: https://github.com/stdlib-js/streams-node-from-circular-array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/streams-node-from-circular-array/tree/esm
[esm-readme]: https://github.com/stdlib-js/streams-node-from-circular-array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/streams-node-from-circular-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/streams-node-from-circular-array/main/LICENSE

[stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[readable-stream]: https://nodejs.org/api/stream.html

<!-- <related-links> -->

[@stdlib/streams/node/from-array]: https://github.com/stdlib-js/streams-node-from-array/tree/esm

[@stdlib/streams/node/from-iterator]: https://github.com/stdlib-js/streams-node-from-iterator/tree/esm

[@stdlib/streams/node/from-strided-array]: https://github.com/stdlib-js/streams-node-from-strided-array/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
