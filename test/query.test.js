var assert = require('assert');
const query = require("../dist");

describe("it should query versai", function () {
	it("should return an valid object", async function () {
		try {
			const data = await query("versai.pro", 19132);
			assert.equal(typeof data, "object");
		} catch (e) {
			throw new Error("Query did not succedd")
		}
	})
});

describe("it should timeout", function() {
	it("should return an error", async function() {
		try {
			const data = await query("hypixel.net", 19132);
			assert.notEqual(typeof data, "object");
		} catch (e) {
			assert.equal(e.message, "Challenge recovery time out");
		}
	})
})