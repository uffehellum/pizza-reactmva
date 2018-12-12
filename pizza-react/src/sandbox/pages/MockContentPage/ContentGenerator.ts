import { timer } from 'rxjs'
import ContentBlock from './ContentBlock'

type contentEmitter = (add: (c: ContentBlock) => void) => () => void

export const showPeople: contentEmitter = (add) => () => {
    timer(3000, 1000).forEach(
        (x: number) => {
            const b: ContentBlock = {
                header: 'title' + String(x),
                body: 'body'
            }
            add(b)
        }
    )
}

export const showDog: contentEmitter = (add) => () =>
    add({ header: 'Dog', body: 'Swishy <i>wagging</i> Tail' })

export const showSquirrel: contentEmitter = (add) => () =>
    add({ header: 'squirrel', body: 'Bushy Tail' })
