# Big Red Button

by Oran C
oranbusiness@gmail.com
github.com/wisehackermonkey
20190413

### Description
```
Just a big red button, a one page app the uses nodejs for backend and javascript front
```

### How to build and run using docker container
```

Run:
docker run -i -p 3000:3000 -t wisehackermonkey/big-red-button-run:latest

Open: http://localhost:3000

build from git repo
cd  big-red-button-run
docker build -t big-red-button-run -f Dockerfile-run ./
docker run -i -p 80:3000 -t big-red-button-run:latest
```

### Screenshot
#### the front end
![Screenshot](screenshot.png)
---
#### server in action
![Server running](screenshot2.png)