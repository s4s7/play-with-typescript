// 「01.環境構築」と「02.ESLint&Prettier」のサンプルコード

// 拡張子の.tsは省略することができる webpack.config.jsのresolve
import World from './world'

const root: HTMLElement | null = document.getElementById('root')
const world = new World('Hello World')
world.sayHello(root)
