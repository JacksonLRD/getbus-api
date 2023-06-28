import config from "../../config/env/default.js"

export default function debug() {
  debug.active = config.app.debug

  const noop = new Proxy({}, { get: () => () => void 0 });

  return debug.active ? console : noop;
}
