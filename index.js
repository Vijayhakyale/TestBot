const { App } = require('@slack/bolt');
const currentTime = new Date().toTimeString();
//const request = require('request');
const app = new App({
    token:SLACK_BOT_TOKEN,
    signingSecret:SLACK_SIGNING_SECRET,
  port:process.env.PORT || 3000
});
(async () => {
    //START YOUR APP
    await app.start();
    console.log('bolt app is running')
})();