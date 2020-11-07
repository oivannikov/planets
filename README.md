[DEMO LINK](https://oivannikov.github.io/planets/);

#Инструкция по установке:

#Create project

Создать проект с помощью команды "npx create-react-app имя вашего проекта"
Подключить проект на GitHub с помощью команды "git remote add origin git@github.com:yourName/nameProject.git"
Отправить изменения на ветку master с помощью команды "git push -u origin master"
Проект успешно синхронизировался с ветковой master на GitHub
#Publish project(deploy)

Запустить команду "npm run build"
Добавить "homepage": "http://yourName(in GitHub).github.io/nameProject(in GitHub)" на самый верх файла package.json
Cнова запустить команду "npm run build"
Добавить две команды в файл package.json в объект "scripts" следующим образом:
"scripts": {
  "predeploy": "npm run build" или если у вас yarn, то "yarn build" без слова run,
  "deploy": "gh-pages -b build"
 }
Установить пакет gh-pages c помощью команды "npm i -D gh-pages"
Запустить команду "npm run deploy"
Зайти в настройки link
Найти заголовок link где и будет ваша ссылка на DEMO
Скопировать ссылку, зайти в редактор и вставить ее в REDMI файл [Demo](ваша ссылка)
Запушить на GitHub и будет вам счастье)
