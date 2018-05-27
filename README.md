# How to use

## 1. bundle install
```
docker-compose run --rm app bundle install
```

## 1-1. Railsアプリケーション新規作成（※初回のみ）
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

## 1-2. database.ymlをコピー（※初回のみ）
```
cp .containers/app/config/database.yml application/config/database.yml
```

## 1-3. envファイルをコピーして適宜編集（※初回のみ）
```
cp rails.env.default rails.env
```

## 1-4. DBを作る（※初回のみ）
```
docker-compose run --rm app rake db:create
```

## 2. 起動
```
docker-compose up -d
```
