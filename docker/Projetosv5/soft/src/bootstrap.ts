import log from './infra/logging'
//import { SoftnovaAccDataSource } from '@/infra/databases/sources/softnovaAcc'

export default async function bootstrap(callback: () => void) {
    //await SoftnovaAccDataSource.initialize()

    log('Bancos iniciados', 'info')

    callback()
}
