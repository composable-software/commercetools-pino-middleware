import { Logger as PinoLogger } from 'pino'

export type Logger = PinoLogger

export type PinoLoggerOptions = {
  logger?: Logger
}
