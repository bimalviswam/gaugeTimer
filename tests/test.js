const {
    now
} = require("moment");


const currentTime = now + 5000;


module.exports = {

    async printForFiveSeconds() {
        let timer = setInterval(() => {
            console.log("hello world");
            if (now() > currenttime) {
                clearInterval(timer);
            }
        }, 1000);

    }
}