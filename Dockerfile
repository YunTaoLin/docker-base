From node:12
workdir /usr/src/app
copy . .
run npm install
CMD node app.js