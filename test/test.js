var $ = require("jquery");
var assert = require("chai/chai").assert;

require("steal-mocha");

describe("PrevNext", function() {
  // TO-DO
	var $testArea;

	beforeEach(function() {
		$testArea = $("#test-area");
	});

	afterEach(function() {
		$testArea.empty();
	});
});
