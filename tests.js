QUnit.config.reorder = false;

QUnit.test("Word Filter",
    function(assert) {
        assert.strictEqual(
            typeof cleanUp,
            "function",
            "Create a cleanUp function."
        );
        assert.strictEqual(
            cleanUp("I hate these flipping rats of the seas"),
            "I hate therse seas"
        );
    }
);
