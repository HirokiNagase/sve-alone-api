# SVE-ALONE-TOOL-API

## やりたいこと(単体)

しょぼい
既存の公開されている API をラップして自分のところのおもちゃ(フロント)でも使ってやろう

## やりたいこと(全体)

1. これ
1. フロントのこれ使う部分の機能追加(JS)
1. フロントにバグがあるらしい。重要度は低いがやっとくか。
1. フロント実は JS なので TS に書き換えたい。nuxt は変えたくないです。100 面倒なので

## ラップしたい API

```
POST https://decklog.bushiroad.com/view/${code}
referrer: https://decklog.bushiroad.com/view/
```

responce の中の list が欲しい

## 作る API

- 今の所作りたい機能(エンドポイントは一つ)
- GET
- query で上の API の code の部分取得
- list のデータを使いやすく整形して responce にする
