# 初回のみ
## 1. Railsアプリケーション新規作成
```docker
docker-compose run --rm app rails new . -d mysql -f -BGSJT --skip-gemfile --skip-coffee --skip-turbolinks --skip-system-test
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

## 2. database.ymlをコピー
```
cp .containers/app/config/database.yml application/config/database.yml
```

## 3. envファイルをコピーして適宜編集
```
cp rails.env.default rails.env
```

## 4. DBを作る
```docker
docker-compose run --rm app rake db:create
```

# 初期設定後
## 起動
```docker
docker-compose up -d
```
