import fs from 'fs'
import path from 'path'
import os from 'os'
import axios from 'axios'
import ClamScan from 'clamscan'

import { serverConfig } from '@/infra/env'
import type { AntivirusFile } from '@/types/antivirus.types'

const clamScan = new ClamScan().init({
    clamdscan: {
        host: serverConfig.host,
        port: serverConfig.port,
    },
})

export async function scanVirus(payload: AntivirusFile) {
    const tempPath = path.join(os.tmpdir(), payload.title)

    const response = await axios({
        method: 'GET',
        url: payload.url,
        responseType: 'stream',
    })

    const writer = fs.createWriteStream(tempPath)

    response.data.pipe(writer)

    await new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })

    const result = (await clamScan).scanFile(tempPath)

    fs.unlinkSync(tempPath)

    return result
}
