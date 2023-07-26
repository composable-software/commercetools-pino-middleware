import type { PartialDeep } from 'type-fest'
import { mergeDeepRight } from 'rambda'

import type { MiddlewareRequest, MiddlewareResponse } from '@commercetools/sdk-client-v2'

export function createTestRequest(data: PartialDeep<MiddlewareRequest> = {}): MiddlewareRequest {
  const base = {
    uri:     'foo',
    method:  'GET',
    body:    null,
    headers: {},
  }

  return mergeDeepRight(base, data)
}

export function createTestResponse(data: PartialDeep<MiddlewareResponse> = {}): MiddlewareResponse {
  const base: Partial<MiddlewareResponse> = {
    statusCode: 200,
    headers:    {},
    body:       {},
  }

  return mergeDeepRight(base, data)
}
