const http = require('http');

const fs = require('fs');
const css = fs.readFileSync('../css/style.css', 'utf8');
const app = fs.readFileSync('../js/app.js', 'utf8');
const text = fs.readFileSync('../index.html', 'utf8');
const users = fs.readFileSync('Users.json', 'utf8');

http.createServer((request, response) => {
   console.log("Server started");

   if (request.url == '/css/style.css') response.end(css)
   else if (request.url == '/js/app.js') response.end(app)
   else if (request.url == '/') response.end(text)
   else if (request.method == "POST") {
      let body = "";
      request.on("data", chunk => body += chunk.toString());
      request.on("end", () => {
         let temp = fs.readFileSync('Users.json', 'utf8');
         temp = JSON.parse(temp);
         temp.push(body);
         fs.writeFile("Users.json", JSON.stringify(temp), (err) => {
            if (err) console.log(err);
         });
         response.end(body);
      });
   };
}).listen(process.env.PORT || 3000);