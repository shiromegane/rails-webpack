# How to use

## 初回のみ
### 1.rails new
```
docker-compose run --rm app rails new . -f -S -J -d mysql -T -G -B --webpack
```

### 2.database.ymlをコピー
```
cp .containers/app/config/database.yml application/config/database.yml
```

### 3.DBを作る
```
docker-compose run --rm app rake db:create
```

## 起動
```
docker-compose up -d
```
