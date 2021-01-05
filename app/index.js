"use strict";
const Generator = require("yeoman-generator");
const fs = require('fs'); 
module.exports = class extends (
  Generator
) {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }
  start() {
    this.prompt([
      {
        type: "checkbox",
        name: "typescript",
        message: "Wanna use Typescript?",
        choices: ["Yes"],
      },
    ]).then(({ typescript }) => {
      if (typescript.toString() === "Yes") {
        this.fs.copy(
          this.templatePath("Typescript"),
          this.destinationPath(process.cwd().toString())
        );
      } else {
        this.fs.copy(
            this.templatePath("Javascript"),
            this.destinationPath(process.cwd().toString())
          );
      }
      this.npmInstall({ "save": true });
      this.log("Finished installing dependencies");
    });
  }
};
