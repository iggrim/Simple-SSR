import path from "path";
import fs from "fs";
import React from "react";
import express from "express";
//import ReactDOMServer from "react-dom/server";
import { renderToString } from 'react-dom/server';
import { Menu } from "../src/Menu.js";
import recipes from '../src/assets/recipes.json' //data - данные json

const PORT = process.env.PORT || 4000;
const app = express();



app.get("/", (req, res) => {
  const app = renderToString(
    <Menu 
      recipes={recipes}
      title="HTML-документ получен от сервера"
    />
  );
  
  console.log('--app', app)

  const indexFile = path.resolve(
    "./build/index.html"
   
  );

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Ошибка!");
    }

    
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${app}</div> <script>alert('HTML-ДОКУМЕНТ ПОЛУЧЕН ОТ СЕРВЕРА И СОДЕРЖИТ СЛЕДУЮЩИЕ ДАННЫЕ: ${JSON.stringify(recipes)}')</script>`
      )
    )
  });

}); // конец функции app.get

app.use(express.static("./build"));

app.listen(PORT, () =>
  console.log(
    `Server is listening on port ${PORT}`
  )
);
