// 「01.環境構築」と「02.ESLint&Prettier」のサンプルコード
// 拡張子の.tsは省略することができる webpack.config.jsのresolve
// import World from './world'
// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World')

// 03.基本の型定義
// import { primitiveSample } from './basic'
// anySample()
// notExist()
// primitiveSample()
// unknownSample()

// 「04.関数の型定義」のサンプルコード
// import { logMessage4 } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

// logMessage4('Hello TypeScript!')
// logMessage5('Hello Type Signature!')
isUserSignedIn('ABC', 'jiro')
isUserSignedIn('123')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(1000, 2000, 100,200)
console.log('Function parameters sample 5: Total price:', sum)
