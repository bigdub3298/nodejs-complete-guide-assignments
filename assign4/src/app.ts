import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

const users: Array<{username:string}> = [{username: 'worldwidemess'}]; 

app.get('/users', (_, res) => {
  res.render('users', {pageTitle: 'Users', path: '/users', users}); 
})
app.get("/", (_, res) => {
  res.render("index", { pageTitle: "Add User", path:'/'});
});

app.listen(3000);
