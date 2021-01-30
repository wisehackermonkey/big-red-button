# Big Red Button
```
by Oran C
oranbusiness@gmail.com
github.com/wisehackermonkey
20190413
```
[![Netlify Status](https://api.netlify.com/api/v1/badges/aca6afd1-cc6c-4c5e-96e2-17b91e68fc67/deploy-status)](https://app.netlify.com/sites/big-red-button/deploys)
### Description
```
Just a big red button, a one page app the uses nodejs for backend and javascript front
```

### How to build and run using docker container


Run:
```
npm install && npm run start

docker run -i -p 80:80 -t wisehackermonkey/big-red-button-run:latest

Open: http://localhost:80

build from git repo
cd  big-red-button-run
docker build -t big-red-button-run -f Dockerfile-run ./
docker run -i -p 80:80 -t big-red-button-run:latest
```

### Screenshot
#### the front end
![Screenshot](screenshot.png)
---
#### server in action
![Server running](screenshot2.png)
