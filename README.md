[DEMO LINK](https://oivannikov.github.io/planets/);

#Инструкция по установке:

  #Create project


  1) Создать проект с помощью команды "npx create-react-app имя вашего проекта"
  2) Подключить проект на GitHub с помощью команды "git remote add origin git@github.com:yourName/nameProject.git"
  3) Отправить изменения на ветку master с помощью команды "git push -u origin master"
  4) Проект успешно синхронизировался с ветковой master на GitHub

  #Publish project(deploy)


  1) Запустить команду "npm run build"
  2) Добавить  "homepage": "http://yourName(in GitHub).github.io/nameProject(in GitHub)" на самый верх файла package.json
  3) Cнова запустить команду "npm run build"
  4) Добавить две команды в файл package.json в объект "scripts" следующим образом: 

    "scripts": {
      "predeploy": "npm run build" или если у вас yarn, то "yarn build" без слова run,
      "deploy": "gh-pages -b build"
     }

  5) Установить пакет gh-pages c помощью команды "npm i -D gh-pages"
  6) Запустить команду "npm run deploy"
  7) Зайти в настройки [link](https://prnt.sc/uxe0vz)
  8) Найти заголовок [link](https://prnt.sc/uxe14g) где и будет ваша ссылка на DEMO
  9) Скопировать ссылку, зайти в редактор и вставить ее в REDMI файл [Demo](ваша ссылка)
  10) Запушить на GitHub и будет вам счастье) 
