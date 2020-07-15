/* globals gauge*/
"use strict";
const test = require('./test');


step("Validate timer in gauge project", async () => {
    await test.printForFiveSeconds(); 
});
