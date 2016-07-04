// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by open-sans.js.
import { name as packageName } from "meteor/cwattrus:open-sans";

// Write your tests here!
// Here is an example.
Tinytest.add('open-sans - example', function (test) {
  test.equal(packageName, "open-sans");
});
