import bootstrap from '@/bootstrap'
import { serverConfig } from '@/infra/env'
import log from '@/infra/logging'
import { server } from '.'

bootstrap(() => {
    server.listen(serverConfig.port, () => {
        log(`Rodando na porta: ${serverConfig.port}`, 'debug')
    })
})
