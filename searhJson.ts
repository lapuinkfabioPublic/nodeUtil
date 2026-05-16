import json from './guia.json' with { type: 'json' }
import * as fs from 'fs'

const result: any[] = []

Object.entries(json).forEach(([key, value]) => {
    if (key === 'entities') {
        const res = value as any[]

        res.forEach(m => {
            m.values.forEach((v: any) => {
                if (v.type === 'patterns') {
                    result.push({
                        title: m.entity,
                        value: v.value,
                        patterns: v.patterns
                    })
                }
            })
        })
    }
})

fs.writeFileSync(
    'resultado.json',
    JSON.stringify(result, null, 2),
    'utf-8'
)

console.log('Arquivo salvo com sucesso!')
