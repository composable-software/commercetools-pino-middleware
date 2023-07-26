# commercetools-pino-middleware

![npm](https://img.shields.io/npm/v/@composable-commerce/commercetools-pino-middleware?color=blue) ![npm](https://img.shields.io/npm/l/@composable-commerce/commercetools-pino-middleware)

## Overview

`commercetools-pino-middleware` is a library that provides a seamless integration of Pino logger with the commercetools SDK. It allows you to easily log SDK requests, responses, and other relevant information with Pino, a fast and minimalist Node.js logger. The middleware is designed to be flexible and can be set up with either an auto-generated Pino instance or a custom Pino logger with specific configurations.

## Installation

You can install the library via npm:

```bash
npm install @composable-commerce/commercetools-pino-middleware
```
or with yarn
```bash
yarn add @composable-commerce/commercetools-pino-middleware
```

## Usage

### 1. Using Auto-generated Pino Instance

If you prefer a hassle-free setup, you can let the middleware create and configure the Pino instance for you. Simply pass an empty object when setting up the middleware:

```javascript
import { createPinoMiddleware } from 'commercetools-pino-middleware';
import { ClientBuilder } from '@commercetools/sdk-client-v2';

/**
 * Middleware with automatic Pino factory
 */
const client = new ClientBuilder()
  .withMiddleware(createPinoMiddleware({}))
  .build();
```

In this method, the middleware will handle the instantiation and configuration of the Pino logger automatically.

### 2. Using a Custom Pino Instance

If you need a more customized Pino logger, you can pass your own Pino instance through options:

```javascript
import pino from 'pino';
import { createPinoMiddleware } from 'commercetools-pino-middleware';
import { ClientBuilder } from '@commercetools/sdk-client-v2';

/**
 * Custom Pino logger instance that can be passed to the middleware
 */
const logger = pino({
  name: 'custom-logger',
  level: 'info',
});

const options = {
  logger: logger,
};

const client = new ClientBuilder()
  .withMiddleware(createPinoMiddleware(options))
  .build();
```

In this case, the middleware will use the provided Pino instance to log the information, allowing you to have full control over the logger's configuration.

## Logging Details

The `commercetools-pino-middleware` logs essential details related to SDK requests and responses, including:

- Request method and URL
- Request headers
- Request body (if applicable)
- Response status code
- Response headers
- Response body (if applicable)

All logs are output in a structured JSON format, which makes it easy to parse and analyze the logged data.

## Examples

Here are some examples of how the middleware logs different scenarios:

- **Successful Request:**

```json
{"level":"info","time":1678376443924,"msg":"Request sent","method":"POST","url":"https://api.commercetools.com/products","headers":{"Authorization":"Bearer <access_token>","Content-Type":"application/json"},"body":{"typeId":"product","id":"abc123","version":5}}
{"level":"info","time":1678376453920,"msg":"Response received","status":201,"headers":{"x-request-id":"abc123","content-type":"application/json"},"body":{"id":"abc123","version":5}}
```

- **Failed Request:**

```json
{"level":"error","time":1678376463922,"msg":"Request failed","method":"GET","url":"https://api.commercetools.com/products/xyz789","headers":{"Authorization":"Bearer <access_token>"}}
{"level":"error","time":1678376473923,"msg":"Response received with error","status":404,"headers":{"x-request-id":"xyz789"},"body":{"statusCode":404,"message":"Not Found"}}
```

## Contributing

We welcome contributions from the community! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on our [GitHub repository](https://github.com/your-github-account/commercetools-pino-middleware).

## License

This library is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](./LICENSE) file for more details.