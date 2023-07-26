import pino, { Logger } from 'pino'

import { PinoLoggerOptions } from './types'

export const getLogger = (options: PinoLoggerOptions): Logger => {
  if (options.logger) {
    return options.logger
  }

  return pino({
    name:  'commercetools',
    level: 'info',
  })
}
