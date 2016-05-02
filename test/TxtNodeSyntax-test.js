// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import TxtNodeSyntax from "../src/TxtNodeSyntax";
describe("TxtNodeSyntax-test", function () {
    it("should has types", function () {
        var typeOfNode = Object.keys(TxtNodeSyntax);
        assert(typeOfNode != null);
        assert(typeOfNode.length > 0);
        typeOfNode.forEach(key => assert(typeof key === "string"));
    });
});