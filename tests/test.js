const currentTime = Date.now() + 5000;


module.exports = {

    async printForFiveSeconds() {
        let timer = setInterval(() => {

            console.log("hello world");
            if (Date.now() > currentTime) {
                clearInterval(timer);
            }
        }, 1000);

    }
}