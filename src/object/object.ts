export default function objectSample() {
    const a: object = {
        name: 'Taro',
        age: 28
    }
    // Property name does not exist on type ''object
    // a.name

    // オブジェクトリテラル記法で型定義
    const country: {
        language: string,
        name: string
    } = {
        language: 'Japanese',
        name:'Taro'
    }

    console.log("contry:", country)

    // オプショナル(?)なプロパティと読み取り専用(readonly)プロパティ
    const person: {
        age: number
        lastName: string  //必ず初期化、再代入できる
        readonly firstName: string // 再代入できない
        gender?: string // optionなので初期化しなくても良い
    } = {
        age: 27,
        lastName: 'Tanaka',
        firstName: 'Tarou',
    }

    console.log(person.age);
    // Cannot assign to 'firstName' because it is a read-only property.
    // person.firstName = ’Suzuki’

    // インデックスシグネチャ
    const capitals: {
        [countryName: string]: string
    } = {
        Japan: 'Tokyo',
        Korea: 'Seoul',
    }
    capitals.China = 'Beijing'
    capitals.Canada = 'Ottawa'

    console.log('Object object sample 5:', capitals)

    // 型エイリアス
    type Country = {
        capital: string
        language: string
        name: string
    }

    const japan: Country = {
        capital: 'Tokyo',
        language: 'Jananese',
        name: 'Japan'
    }
    console.log(japan);

    const america: Country = {
        capital: 'Washington, D.C.',
        language: 'English',
        name: 'United States of America',
      }
    console.log(america)

    // 合併型(union)と交差型(intersection)
    type Knight = {
        hp: number
        sp: number
        weapon: string
        swordSkill: string
    }

    type Wizard = {
        hp: number
        mp: number
        weapon: string
        magicSkill: string
    }

    type Adventurer = Knight | Wizard // 合併型: KnightとWizardどちらかの型を持つ
    type Paladin = Knight & Wizard // 交差型: KnightとWizardが持つ型を全て持っている(ポケモンでタイプを２つ持つイメージ)

    // Knightの型を持つadventurer2
    const adventurer1: Adventurer = {
        hp: 100,
        sp: 30,
        weapon: '木の剣',
        swordSkill: '三連斬り',
    }

    console.log('Object alias sample 3:', adventurer1)

    // Wizardの型を持つadventurer2
    const adventurer2: Adventurer = {
        hp: 100,
        mp: 30,
        weapon: '木の杖',
        magicSkill: 'ファイヤボール',
    }

    console.log('Object alias sample 4:', adventurer2)

    // KnightとWizard両方の型を持つpaladin
    const paladin: Paladin = {
        hp: 300,
        sp: 100,
        mp: 100,
        weapon: '銀の剣',
        swordSkill: '三連斬り',
        magicSkill: 'ファイヤボール',
    }

}