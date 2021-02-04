"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Generator = require("yeoman-generator");
var fs = require('fs');
module.exports = /** @class */ (function (_super) {
    __extends(exports, _super);
    function exports(args, opts) {
        var _this = _super.call(this, args, opts) || this;
        _this.log("Initializing...");
        return _this;
    }
    exports.prototype.start = function () {
        var _this = this;
        this.prompt([
            {
                type: "checkbox",
                name: "typescript",
                message: "Wanna use Typescript?",
                choices: ["Yes"]
            },
        ]).then(function (_a) {
            var typescript = _a.typescript;
            if (typescript.toString() === "Yes") {
                _this.fs.copy(_this.templatePath("Typescript"), _this.destinationPath(process.cwd().toString()));
            }
            else {
                _this.fs.copy(_this.templatePath("Javascript"), _this.destinationPath(process.cwd().toString()));
            }
            _this.yarnInstall();
        });
    };
    return exports;
}((Generator)));
