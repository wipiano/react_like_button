# react_like_button
react で いいねボタン的な

[30分間React入門「いいねボタン」作成チュートリアル](http://c16e.com/1510161700/)　←これを参考に

## 下準備
### node_modules
```bash
$ npm init

# webpack と babel をインストール
$ npm install --save-dev webpack babel-loader babel-core

# react インストール
$ npm install --save react react-dom

# node-static (テスト用の web サーバ、任意)
$ sudo npm install -g node-static
```

### webpack
webpack.config.js に書く

```js
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "like-button.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader"}
        ]
    }
};
```

### build task
package.json に ビルドタスクをかく

```json
{
    "scripts": {
        "build": "rm -rf dist/*.js && webpack",
        "watch": "rm -rf dist/*.js && webpack -w"
    },
}
```

### 確認用に index.html
`dist/index.html` をこんなかんじに

```html
<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>React like button demo</title>
</head>
<body>
<h1>demo</h1>
<script src="like-button.js"></script>
</body>
</html>
```

### 確認用の js
`src/main.js` をこんな感じに

```js
console.log("hello");
```

### ビルドをためす
```bash
$ npm run build
```

### node-static を起動
```bash
# ポート 12351 で dist ディレクトリで web サーバ立ち上げ
$ static -p 12351 dist
```

めんどいので sh かいた (`start-server.sh`)
```bash
#!/bin/sh
static -p 12351 -c 1 dist
```
```bash
$ chmod u+x start-server.sh
```

### ブラウザでみてみる
`http://localhost:12351/`
をみてみる

console に hello ってでてたら OK!!!