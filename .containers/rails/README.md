# How to use
## Initialize
### 1.いったんrails newする
```
docker-compose run --rm app rails new . --force --database=mysql --skip-bundle
```

### 2.作成されたGemfileを編集（飛ばしてもいいよ、たぶん）
- ここのコメントアウトを外す
```
# gem 'mini_racer', platforms: :ruby
```

### 3.Dockerをビルド
```
docker-compose build
```

### 4.database.ymlをコピー
```
cp .docker/containers/rails/config/database.yml config/database.yml
```

### 5.Docker起動
```
docker-compose up -d
```

- ここで落ちる…
```
rails_app | Traceback (most recent call last):
rails_app |     3: from bin/rails:3:in `<main>'
rails_app |     2: from bin/rails:3:in `require_relative'
rails_app |     1: from /app/config/boot.rb:4:in `<top (required)>'
rails_app | /app/config/boot.rb:4:in `require': cannot load such file -- bootsnap/setup (LoadError)
```

### 6.DBを作る
```
docker-compose run --rm app rake db:create
```