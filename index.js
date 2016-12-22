module.exports = {
    managers: {
        auth: {
            AccountManager: require("./src/managers/auth/account-manager"),
            AuthManager: require("./src/managers/auth/auth-manager"),
            RoleManager: require("./src/managers/auth/role-manager")
        }
    },
    test: {
        data: {
            auth: {
                account: require("./test/data/auth/account-data-util"),
                role: require("./test/data/auth/role-data-util")
            }
        }
    }
};
