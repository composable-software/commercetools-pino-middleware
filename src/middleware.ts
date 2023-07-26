import type { Middleware, Dispatch, MiddlewareRequest, MiddlewareResponse } from '@commercetools/sdk-client-v2'

import type { PinoLoggerOptions, Logger } from './types'
import { getLogger } from './logger'

export default function createPinoMiddleware(options: PinoLoggerOptions): Middleware  {
  return (next: Dispatch): Dispatch => (
    request: MiddlewareRequest,
    response: MiddlewareResponse,
  ) => {
    // pino factory
    const logger: Logger = getLogger(options)

    logger.info(request, 'request')
    logger.info(response, 'response')

    return next(request, response)
  }
}
