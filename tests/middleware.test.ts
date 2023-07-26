import { Logger } from 'pino'

import createPinoMiddleware from '../src/middleware'
import { createTestRequest, createTestResponse } from './fixtures'

jest.mock('pino')

describe('Unit: Logger', () => {
  let logger: jest.Mocked<Logger>

  beforeEach(() => {
    logger = {
      ...logger,
      info: jest.fn(),
    } satisfies jest.Mocked<Logger>
  })

  test('logs info message for request and response', () => {
    const middleware = createPinoMiddleware({
      logger,
    })

    const next = jest.fn()

    const request = createTestRequest({
      uri:    '/foo/bar',
      method: 'GET',
    })

    const response = createTestResponse({
      statusCode: 200,
      body:       {
        foo: 'bar',
      },
    })

    const execute = () => {
      middleware(next)(request, response)
    }

    expect(() => execute()).not.toThrow()
    expect(logger.info).toHaveBeenNthCalledWith(1, request, 'request')
    expect(logger.info).toHaveBeenNthCalledWith(2, response, 'response')
  })
})
