# How to use

## 初回のみ
### 1.rails new
```docker
docker-compose run --rm app rails new . -f -S -J -d mysql -T -G -B --webpack
```

### 2.database.ymlをコピー
```sh
cp .containers/app/config/database.yml application/config/database.yml
```

### 3.envファイルをコピーして適宜編集
```sh
cp rails.env.default rails.env
```

### 4.DBを作る
```docker
docker-compose run --rm app rake db:create
```

## 起動
```docker
docker-compose up -d
```
