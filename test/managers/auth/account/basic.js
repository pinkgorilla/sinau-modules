var dataUtil = require("../../../data/auth/account-data-util");
var options = {
    manager: require("../../../../src/managers/auth/account-manager"),
    model: require("sinau-models").auth.Account,
    validator: require("sinau-models").validator.auth.account,
    newDataCallback: dataUtil.getNewData,
    createDuplicate: true,
    keys: ["username"]
};

var basicTest = require("../../basic-test-factory");
basicTest(options);
