import winston from 'winston'

const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            ),
        }),
    ],
})

export default function log(
    message: string,
    level: 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error'
) {
    logger.log({ level, message })
}
