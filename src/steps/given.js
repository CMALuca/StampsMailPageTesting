const { Given } = require('cucumber'); //This particular block of code is how WebDriver IO manually launches their test runner, and returns back to us additional details.
const Launcher = require('@wdio/cli').default;
const wdio = new Launcher('wdio.conf.js')
wdio.run().then((code) => {
    process.exit(code)
}, (error) => {
    console.error('Launcher failed to start the test', error.stacktrace)
    process.exit(1)
})

Given('I launch "chrome" browser', async function () {
});