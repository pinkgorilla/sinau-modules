var dataUtil = require("../../../data/auth/role-data-util");
var options = {
    manager: require("../../../../src/managers/auth/role-manager"),
    model: require("sinau-models").auth.Role,
    validator: require("sinau-models").validator.auth.role,
    newDataCallback: dataUtil.getNewData,
    createDuplicate: true,
    keys: ["code"]
};

var basicTest = require("../../basic-test-factory");
basicTest(options);
