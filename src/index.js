import React from "react";
//import ReactDOM from "react-dom";
import { hydrateRoot } from 'react-dom/client';
import "./index.css";
import { Menu } from "./Menu";
import data from './assets/recipes.json' //data - данные json

/*
hydrateRoot позволяет отображать компоненты React внутри 
DOM-узла браузера, HTML-содержимое которого ранее было 
сгенерировано react-dom/server.
*/
hydrateRoot(document.getElementById('root'),
  <Menu
    recipes={data}
    title="Delicious Recipes"
  />);
