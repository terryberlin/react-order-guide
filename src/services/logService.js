import Raven from "raven-js";
function init() {
  Raven.config("https://9eed6c5e171f4006b31067d085dd28de@sentry.io/1527213", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  //Raven.captureException(error);
}

export default {
  init,
  log
};
