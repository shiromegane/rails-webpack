# How to use

## 以下のコマンドでRailsアプリ作成済みの状態
```
docker-compose run --rm app bundle exec rails new . -d mysql -f -BGSJT --skip-gemfile --skip-coffee --skip-turbolinks --skip-system-test
```
### オプション詳細
- -d mysql
  * MySQLを使用する
- -f
  * 既存ファイル上書きする
- -BGSJT
  * bundle installを実行しない
  * .gitignoreを生成しない
  * Sprocketsを無効
  * JavaScriptを組み込まない
  * テストを組み込まない
- --skip-gemfile
  * Gemfileを生成しない
- --skip-coffee
  * CoffeeScriptを使用しない
- --skip-turbolinks
  * turbolinksを無効
- --skip-system-test
  * system testを無効

## 1. envファイルをコピーして適宜編集（※初回のみ）
```
cp rails.env.default rails.env
```

## 2. DBを作る（※初回のみ）
```
docker-compose run --rm rails bundle exec rake db:create
```

## 3. 起動
```
docker-compose up -d
```
