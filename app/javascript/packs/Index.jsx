import React from "react";
import { render } from "react-dom";
import 'stylesheets/application';
import { Provider } from "react-redux";
import store from "../components/redux/store";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "../components/App";


document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById('root')
  const questions = JSON.parse(node.getAttribute('data'))
  render(
      <Provider store={store(questions)}><App /></Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});