#!/usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("Happy-Happy", {
        font: "Soft",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
  console.log(
    chalk.green(
      figlet.textSync("Create By Liu Qi", {
        font: "Soft",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
};

init();
