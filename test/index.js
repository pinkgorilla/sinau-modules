function test(name, path) {
    describe(name, function() {
        require(path);
    });
}


describe("#bateeq-module", function(done) {
    this.timeout(2 * 6000);

    test("@AUTH/ACCOUNT-MANAGER", "./managers/auth/account");
    test("@AUTH/ROLE-MANAGER", "./managers/auth/role");
    test("@AUTH/AUTH-MANAGER", "./managers/auth/auth"); 
});
