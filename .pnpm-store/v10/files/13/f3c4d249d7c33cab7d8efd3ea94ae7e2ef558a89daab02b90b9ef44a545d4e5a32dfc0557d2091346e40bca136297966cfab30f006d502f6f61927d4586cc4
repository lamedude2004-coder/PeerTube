// src/util.ts
import { hostname as hostname2, platform as platform3, type as type2, version as version2, arch as arch3, tmpdir } from "node:os";
import crypto from "node:crypto";
import fs8 from "node:fs";
import zlib from "node:zlib";
import { format, promisify as promisify2 } from "node:util";
import path7 from "node:path";
import util3 from "node:util";
import gitRepoInfo from "git-repo-info";
import gitconfig from "gitconfiglocal";
import { performance as performance2 } from "node:perf_hooks";

// src/logPatcher.ts
import Transport from "winston-transport";
var LOG_LEVELS = {
  INFO: "INFO",
  ERROR: "ERROR",
  DEBUG: "DEBUG",
  TRACE: "TRACE",
  WARN: "WARN"
};
var logPatcher = class extends Transport {
  logToTestOps = (level = LOG_LEVELS.INFO, message = [""]) => {
    process.emit(`bs:addLog:${process.pid}`, {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      level: level.toUpperCase(),
      message: `"${message.join(", ")}"`,
      kind: "TEST_LOG",
      http_response: {}
    });
  };
  /* Patching this would show user an extended trace on their cli */
  trace = (...message) => {
    this.logToTestOps(LOG_LEVELS.TRACE, message);
  };
  debug = (...message) => {
    this.logToTestOps(LOG_LEVELS.DEBUG, message);
  };
  info = (...message) => {
    this.logToTestOps(LOG_LEVELS.INFO, message);
  };
  warn = (...message) => {
    this.logToTestOps(LOG_LEVELS.WARN, message);
  };
  error = (...message) => {
    this.logToTestOps(LOG_LEVELS.ERROR, message);
  };
  log = (...message) => {
    this.logToTestOps(LOG_LEVELS.INFO, message);
  };
};
var logPatcher_default = logPatcher;

// src/instrumentation/performance/performance-tester.ts
import { createObjectCsvWriter } from "csv-writer";
import fs4 from "node:fs";
import fsPromise from "node:fs/promises";
import { performance, PerformanceObserver } from "node:perf_hooks";
import util2 from "node:util";
import worker from "node:worker_threads";
import path4 from "node:path";
import { arch as arch2, hostname, platform as platform2, type, version } from "node:os";

// src/bstackLogger.ts
import path from "node:path";
import fs from "node:fs";
import chalk from "chalk";
import logger from "@wdio/logger";

// package.json
var package_default = {
  name: "@wdio/browserstack-service",
  version: "9.36.0",
  description: "WebdriverIO service for better Browserstack integration",
  author: "BrowserStack <support@browserstack.com>",
  homepage: "https://github.com/browserstack/wdio-browserstack-service",
  license: "MIT",
  engines: {
    node: ">=18.20.0"
  },
  repository: {
    type: "git",
    url: "git+https://github.com/browserstack/wdio-browserstack-service.git",
    directory: "packages/browserstack-service"
  },
  keywords: [
    "webdriverio",
    "wdio",
    "browserstack",
    "wdio-service"
  ],
  bugs: {
    url: "https://github.com/browserstack/wdio-browserstack-service/issues"
  },
  type: "module",
  types: "./build/index.d.ts",
  exports: {
    ".": {
      types: "./build/index.d.ts",
      import: "./build/index.js"
    },
    "./cleanup": {
      types: "./build/cleanup.d.ts",
      import: "./build/cleanup.js",
      source: "./src/cleanup.ts"
    }
  },
  typeScriptVersion: "3.8.3",
  files: [
    "build",
    "src/proto/**/*.proto",
    "browserstack-service.d.ts",
    "README.md",
    "LICENSE"
  ],
  scripts: {
    clean: "rimraf ./build src/grpc/generated",
    generate: "buf generate",
    build: "rimraf ./build src/grpc/generated && buf generate && node ./scripts/build.mjs && tsc -p tsconfig.prod.json",
    "build:watch": "node ./scripts/build.mjs --watch",
    test: "vitest --run",
    "test:watch": "vitest",
    prepack: "npm run build"
  },
  dependencies: {
    "@browserstack/ai-sdk-node": "1.5.17",
    "@bufbuild/protobuf": "^2.5.2",
    "@grpc/grpc-js": "~1.13.5",
    "@percy/appium-app": "^2.0.9",
    "@percy/selenium-webdriver": "^2.2.2",
    "@types/gitconfiglocal": "^2.0.1",
    "browserstack-local": "^1.5.1",
    chalk: "^5.3.0",
    "csv-writer": "^1.6.0",
    "git-repo-info": "^2.1.1",
    gitconfiglocal: "^2.1.0",
    glob: "^11.0.0",
    tar: "^7.5.11",
    undici: "^6.24.0",
    uuid: "^11.1.0",
    "winston-transport": "^4.5.0",
    yauzl: "^3.4.0",
    "@wdio/logger": "^9.0.0",
    "@wdio/reporter": "^9.0.0",
    "@wdio/types": "^9.0.0",
    webdriverio: "^9.0.0"
  },
  peerDependencies: {
    "@wdio/cli": "^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0 || ^9.0.0"
  },
  devDependencies: {
    "@bufbuild/buf": "^1.55.1",
    "@changesets/cli": "^2.27.9",
    "@types/node": "^20.1.0",
    "@types/tar": "^7.0.87",
    "@types/yauzl": "^2.10.3",
    "@wdio/globals": "^9.0.0",
    "@wdio/logger": "^9.0.0",
    "@wdio/reporter": "^9.0.0",
    "@wdio/types": "^9.0.0",
    esbuild: "^0.27.2",
    rimraf: "^6.0.1",
    "ts-proto": "^2.7.5",
    typescript: "^5.8.3",
    vitest: "^3.2.4",
    webdriverio: "^9.0.0"
  },
  publishConfig: {
    access: "public"
  }
};

// src/constants.ts
var bstackServiceVersion = package_default.version;
var consoleHolder = Object.assign({}, console);
var APP_ALLY_ISSUES_ENDPOINT = "api/v1/issues";
var APP_ALLY_ISSUES_SUMMARY_ENDPOINT = "api/v1/issues-summary";
var DATA_BATCH_ENDPOINT = "api/v1/batch";
var BSTACK_SERVICE_VERSION = bstackServiceVersion;
var BROWSERSTACK_TEST_PLAN_ID = "BROWSERSTACK_TEST_PLAN_ID";
var LOGS_FILE = "logs/bstack-wdio-service.log";
var CLI_DEBUG_LOGS_FILE = "log/sdk-cli-debug.log";
var UPLOAD_LOGS_ENDPOINT = "client-logs/upload";
var BROWSERSTACK_WDIO_CONFIG_FILE_PATH = "BROWSERSTACK_WDIO_CONFIG_FILE_PATH";
var BROWSERSTACK_DISABLE_AUTO_CAPTURE_LOGS = "BROWSERSTACK_DISABLE_AUTO_CAPTURE_LOGS";
var BROWSERSTACK_WDIO_CONFIG_STRATEGY = "BROWSERSTACK_WDIO_CONFIG_STRATEGY";
var SUPPORTED_WDIO_CONFIG_EXTENSIONS = [".js", ".ts", ".mjs", ".mts", ".cjs", ".cts"];
var DEFAULT_WDIO_CONFIG_BASENAME = "wdio.conf";
var WDIO_CLI_SUBCOMMANDS = ["run", "install", "repl", "config"];
var MAX_CAPTURED_CONFIG_FILE_BYTES = 1024 * 1024;
var MAX_CAPTURED_CONFIG_FILES = 6;
var CAPTURE_CONFIG_IMPORT_DEPTH = 1;
var MAX_PACKAGE_JSON_WALK_UP = 5;
var COMPOUND_SECRET_SUFFIXES_CAMEL = "Key|Token|Secret|Password|Passwd|Credential";
var COMPOUND_SECRET_SUFFIXES_SNAKE = "key|token|secret|password|passwd|credential";
var PEM_BLOCK_REGEX = /(-----BEGIN [^-\r\n]+-----)(?:(?!-----BEGIN)[\s\S]){0,65536}?(-----END [^-\r\n]+-----)/g;
var PEM_UNTERMINATED_REGEX = /(-----BEGIN [^-\r\n]+-----)(?:\r?\n[A-Za-z0-9+/=]{20,8192}(?=[^A-Za-z0-9+/=]|$))+/g;
var URL_USERINFO_REGEX = /([a-zA-Z][a-zA-Z0-9+.-]{0,64}:\/\/)[^\s/@:]{1,256}(?::[^\s/@]{0,256})?@/g;
var REDACTED_KEYS = [
  "user",
  "key",
  "userName",
  "accessKey",
  "browserstack.user",
  "browserstack.key",
  "browserstack.userName",
  "browserstack.accessKey",
  "password",
  "proxyPassword",
  "proxyUser",
  "proxyPass",
  "localProxyUser",
  "localProxyPass",
  "proxyUrl",
  "authToken",
  "apiKey",
  "accessToken",
  "secret",
  "token",
  "customVariables",
  "user_data",
  "httpProxy",
  "httpsProxy"
];
var SMART_SELECTION_MODE_RELEVANT_FIRST = "relevantFirst";
var SMART_SELECTION_MODE_RELEVANT_ONLY = "relevantOnly";
var BROWSERSTACK_TESTHUB_JWT = "BROWSERSTACK_TESTHUB_JWT";
var TESTOPS_SCREENSHOT_ENV = "BS_TESTOPS_ALLOW_SCREENSHOTS";
var BROWSERSTACK_TESTHUB_UUID = "BROWSERSTACK_TESTHUB_UUID";
var BROWSERSTACK_KILL_SIGNAL = "BROWSERSTACK_SDK_KILL_SIGNAL";
var PERF_MEASUREMENT_ENV = "BROWSERSTACK_O11Y_PERF_MEASUREMENT";
var RERUN_ENV = "BROWSERSTACK_RERUN";
var TESTOPS_BUILD_COMPLETED_ENV = "BS_TESTOPS_BUILD_COMPLETED";
var BROWSERSTACK_ACCESSIBILITY = "BROWSERSTACK_ACCESSIBILITY";
var BROWSERSTACK_OBSERVABILITY = "BROWSERSTACK_OBSERVABILITY";
var BROWSERSTACK_LTS_SESSION_ID = "BROWSERSTACK_LTS_SESSION_ID";
var BROWSERSTACK_LTS = "BROWSERSTACK_LTS";
var MAX_GIT_META_DATA_SIZE_IN_BYTES = 64 * 1024;
var GIT_META_DATA_TRUNCATED = "...[TRUNCATED]";
var BINARY_BUSY_ERROR_CODES = ["ETXTBSY", "EBUSY"];
var WDIO_NAMING_PREFIX = "WebdriverIO-";
var STOP_BUILD_MAX_ATTEMPTS = 4;
var STOP_BUILD_ATTEMPT_TIMEOUT_MS = 1e4;
var STOP_BUILD_TOTAL_BUDGET_MS = 3e4;
var STOP_BUILD_BACKOFF_BASE_MS = 1e3;
var UPDATED_CLI_ENDPOINT = "sdk/v1/update_cli";

// src/bstackLogger.ts
var log = logger("@wdio/browserstack-service");
var BStackLogger = class {
  static logFilePath = path.join(process.cwd(), LOGS_FILE);
  static logFolderPath = path.join(process.cwd(), "logs");
  static logFileStream;
  static redactCredentials(logMessage) {
    return logMessage.replace(/(["']?(?:username|userName|accesskey|accessKey|user|key)["']?\s*[:=]\s*["']?)([^"'\s,}]+)/gi, "$1").replace(/([?&](?:username|userName|access_key|accesskey|accessKey|user|key)=)([^&#\s]+)/gi, "$1");
  }
  static logToFile(logMessage, logLevel) {
    try {
      const redactedMessage = this.redactCredentials(logMessage);
      if (!this.logFileStream) {
        this.ensureLogsFolder();
        this.logFileStream = fs.createWriteStream(this.logFilePath, { flags: "a" });
      }
      if (this.logFileStream && this.logFileStream.writable) {
        this.logFileStream.write(this.formatLog(redactedMessage, logLevel));
      }
    } catch (error) {
      log.debug(`Failed to log to file. Error ${error}`);
    }
  }
  static formatLog(logMessage, level) {
    return `${chalk.gray((/* @__PURE__ */ new Date()).toISOString())} ${chalk[COLORS[level]](level.toUpperCase())} ${chalk.whiteBright("@wdio/browserstack-service")} ${logMessage}
`;
  }
  static info(message) {
    const redactedMessage = this.redactCredentials(message);
    this.logToFile(redactedMessage, "info");
    log.info(redactedMessage);
  }
  static error(message) {
    const redactedMessage = this.redactCredentials(message);
    this.logToFile(redactedMessage, "error");
    log.error(redactedMessage);
  }
  static debug(message, param) {
    const redactedMessage = this.redactCredentials(message);
    this.logToFile(redactedMessage, "debug");
    if (param) {
      log.debug(redactedMessage, param);
    } else {
      log.debug(redactedMessage);
    }
  }
  static warn(message) {
    const redactedMessage = this.redactCredentials(message);
    this.logToFile(redactedMessage, "warn");
    log.warn(redactedMessage);
  }
  static trace(message) {
    const redactedMessage = this.redactCredentials(message);
    this.logToFile(redactedMessage, "trace");
    log.trace(redactedMessage);
  }
  /**
   * Drain whatever is still sitting in the log stream's buffer onto disk.
   *
   * `logToFile` writes to an async `fs.WriteStream`, so a line logged immediately before the
   * archive is built is very likely NOT in the file yet — the stream's `open` is async too,
   * so early on the file may not exist at all. Anything that snapshots the log (the debug-log
   * upload) must flush first or it ships a truncated copy.
   *
   * A zero-length write's callback fires only after every chunk queued ahead of it has been
   * handed to the fs layer, which drains the buffer without ending the stream — unlike
   * `clearLogger()`, logging continues to work afterwards.
   */
  static async flushLogFile(timeoutMs = 2e3) {
    const stream = this.logFileStream;
    if (!stream || !stream.writable) {
      return;
    }
    await new Promise((resolve) => {
      const timer = setTimeout(resolve, timeoutMs);
      timer.unref?.();
      stream.write("", () => {
        clearTimeout(timer);
        resolve();
      });
    });
  }
  static clearLogger() {
    if (this.logFileStream) {
      this.logFileStream.end();
    }
    this.logFileStream = null;
  }
  static clearLogFile() {
    if (fs.existsSync(this.logFilePath)) {
      fs.truncateSync(this.logFilePath);
    }
  }
  static ensureLogsFolder() {
    if (!fs.existsSync(this.logFolderPath)) {
      fs.mkdirSync(this.logFolderPath);
    }
  }
};

// src/cli/apiUtils.ts
var APIUtils = class {
  static FUNNEL_INSTRUMENTATION_URL = "https://api.browserstack.com/sdk/v1/event";
  static BROWSERSTACK_AUTOMATE_API_URL = "https://api.browserstack.com";
  static BROWSERSTACK_AA_API_URL = "https://api.browserstack.com";
  static BROWSERSTACK_PERCY_API_URL = "https://api.browserstack.com";
  static BROWSERSTACK_AUTOMATE_API_CLOUD_URL = "https://api-cloud.browserstack.com";
  static BROWSERSTACK_AA_API_CLOUD_URL = "https://api-cloud.browserstack.com";
  static APP_ALLY_ENDPOINT = "https://app-accessibility.browserstack.com/automate";
  static DATA_ENDPOINT = "https://collector-observability.browserstack.com";
  static UPLOAD_LOGS_ADDRESS = "https://upload-observability.browserstack.com";
  static EDS_URL = "https://eds.browserstack.com";
  static updateURLSForGRR(apis) {
    this.FUNNEL_INSTRUMENTATION_URL = `${apis.automate.api}/sdk/v1/event`;
    this.BROWSERSTACK_AUTOMATE_API_URL = apis.automate.api;
    this.BROWSERSTACK_AA_API_URL = apis.appAutomate.api;
    this.BROWSERSTACK_PERCY_API_URL = apis.percy.api;
    this.BROWSERSTACK_AUTOMATE_API_CLOUD_URL = apis.automate.upload;
    this.BROWSERSTACK_AA_API_CLOUD_URL = apis.appAutomate.upload;
    this.APP_ALLY_ENDPOINT = `${apis.appAccessibility.api}/automate`;
    this.DATA_ENDPOINT = apis.observability.api;
    this.UPLOAD_LOGS_ADDRESS = apis.observability.upload;
    this.EDS_URL = apis.edsInstrumentation.api;
  }
};

// src/cli/cliUtils.ts
import fs3 from "node:fs";
import fsp from "node:fs/promises";
import { platform, arch, homedir } from "node:os";
import path3 from "node:path";
import util, { promisify } from "node:util";
import { exec } from "node:child_process";
import { Readable } from "node:stream";
import yauzl from "yauzl";
import { threadId } from "node:worker_threads";

// src/fetchWrapper.ts
import { fetch as undiciFetch, ProxyAgent } from "undici";
var ResponseError = class extends Error {
  response;
  constructor(message, res) {
    super(message);
    this.response = res;
  }
};
async function fetchWrap(input, init) {
  const res = await _fetch(input, init);
  if (!res.ok) {
    throw new ResponseError(`Error response from server ${res.status}:  ${await res.text()}`, res);
  }
  return res;
}
function _fetch(input, init) {
  const proxyUrl = process.env.HTTP_PROXY || process.env.HTTPS_PROXY;
  if (proxyUrl) {
    const noProxy = process.env.NO_PROXY && process.env.NO_PROXY.trim() ? process.env.NO_PROXY.trim().split(/[\s,;]+/) : [];
    const request = new Request(input);
    const url = new URL(request.url);
    if (!noProxy.some((str) => url.hostname.endsWith(str))) {
      return undiciFetch(
        request.url,
        { ...init, dispatcher: new ProxyAgent(proxyUrl) }
      );
    }
  }
  return fetch(input, init);
}

// src/instrumentation/performance/constants.ts
var EVENTS = {
  SDK_SETUP: "sdk:setup",
  SDK_CLEANUP: "sdk:cleanup",
  SDK_PRE_TEST: "sdk:pre-test",
  SDK_TEST: "sdk:test",
  SDK_POST_TEST: "sdk:post-test",
  SDK_HOOK: "sdk:hook",
  SDK_DRIVER: "sdk:driver",
  SDK_A11Y: "sdk:a11y",
  SDK_O11Y: "sdk:o11y",
  SDK_AUTO_CAPTURE: "sdk:auto-capture",
  SDK_PROXY_SETUP: "sdk:proxy-setup",
  SDK_TESTHUB: "sdk:testhub",
  SDK_AUTOMATE: "sdk:automate",
  SDK_APP_AUTOMATE: "sdk:app-automate",
  SDK_TURBOSCALE: "sdk:turboscale",
  SDK_PERCY: "sdk:percy",
  SDK_PRE_INITIALIZE: "sdk:driver:pre-initialization",
  SDK_POST_INITIALIZE: "sdk:driver:post-initialization",
  SDK_CLI_CHECK_UPDATE: "sdk:cli:check-update",
  SDK_CLI_DOWNLOAD: "sdk:cli:download",
  SDK_CLI_ON_BOOTSTRAP: "sdk:cli:on-bootstrap",
  SDK_CLI_ON_CONNECT: "sdk:cli:on-connect",
  SDK_CLI_START: "sdk:cli:start",
  SDK_CLI_ON_STOP: "sdk:cli:on-stop",
  SDK_CONNECT_BIN_SESSION: "sdk:connectBinSession",
  SDK_START_BIN_SESSION: "sdk:startBinSession",
  // New events from Python SDK
  SDK_DRIVER_INIT: "sdk:driverInit",
  SDK_FIND_NEAREST_HUB: "sdk:findNearestHub",
  SDK_AUTOMATION_FRAMEWORK_INIT: "sdk:automationFrameworkInit",
  SDK_AUTOMATION_FRAMEWORK_START: "sdk:automationFrameworkStart",
  SDK_AUTOMATION_FRAMEWORK_STOP: "sdk:automationFrameworkStop",
  SDK_ACCESSIBILITY_CONFIG: "sdk:accessibilityConfig",
  SDK_OBSERVABILITY_CONFIG: "sdk:observabilityConfig",
  SDK_AI_SELF_HEAL_STEP: "sdk:aiSelfHealStep",
  SDK_AI_SELF_HEAL_GET_RESULT: "sdk:aiSelfHealGetResult",
  SDK_TEST_FRAMEWORK_EVENT: "sdk:testFrameworkEvent",
  SDK_TEST_SESSION_EVENT: "sdk:testSessionEvent",
  SDK_CLI_LOG_CREATED_EVENT: "sdk:cli:logCreatedEvent",
  SDK_CLI_ENQUEUE_TEST_EVENT: "sdk:cli:enqueueTestEvent",
  SDK_ON_STOP: "sdk:onStop",
  SDK_SEND_LOGS: "sdk:sendlogs",
  // Funnel Events
  SDK_FUNNEL_TEST_ATTEMPTED: "sdk:funnel:test-attempted",
  SDK_FUNNEL_TEST_SUCCESSFUL: "sdk:funnel:test-successful",
  // Log Upload Events
  SDK_UPLOAD_LOGS: "sdk:upload-logs",
  // Key Metrics Events
  SDK_SEND_KEY_METRICS: "sdk:send-key-metrics",
  SDK_KEY_METRICS_PREPARATION: "sdk:key-metrics:preparation",
  SDK_KEY_METRICS_UPLOAD: "sdk:key-metrics:upload",
  // CLI Binary Events
  SDK_CLI_DOWNLOAD_BINARY: "sdk:cli:download-binary",
  SDK_CLI_BINARY_VERIFICATION: "sdk:cli:binary-verification",
  // Cleanup & Shutdown Events (tracking gap between driver:quit and funnel:test-successful)
  SDK_LISTENER_WORKER_END: "sdk:listener:worker-end",
  SDK_PERCY_TEARDOWN: "sdk:percy:teardown",
  SDK_WORKER_SAVE_DATA: "sdk:worker:save-data",
  SDK_PERFORMANCE_REPORT_GEN: "sdk:performance:report-generation",
  SDK_PERFORMANCE_JSON_WRITE: "sdk:performance:json-write",
  SDK_PERFORMANCE_HTML_GEN: "sdk:performance:html-generation",
  // Device Allocation Event (tracking gap between beforeSession and before hooks)
  SDK_DEVICE_ALLOCATION: "sdk:device-allocation"
};
var TESTHUB_EVENTS = {
  START: `${EVENTS.SDK_TESTHUB}:start`,
  STOP: `${EVENTS.SDK_TESTHUB}:stop`
};
var AUTOMATE_EVENTS = {
  KEEP_ALIVE: `${EVENTS.SDK_AUTOMATE}:keep-alive`,
  HUB_MANAGEMENT: `${EVENTS.SDK_AUTOMATE}:hub-management`,
  LOCAL_START: `${EVENTS.SDK_AUTOMATE}:local-start`,
  LOCAL_STOP: `${EVENTS.SDK_AUTOMATE}:local-stop`,
  DRIVER_MANAGE: `${EVENTS.SDK_AUTOMATE}:driver-manage`,
  SESSION_NAME: `${EVENTS.SDK_AUTOMATE}:session-name`,
  SESSION_STATUS: `${EVENTS.SDK_AUTOMATE}:session-status`,
  SESSION_ANNOTATION: `${EVENTS.SDK_AUTOMATE}:session-annotation`,
  IDLE_TIMEOUT: `${EVENTS.SDK_AUTOMATE}:idle-timeout`,
  GENERATE_CI_ARTIFACT: `${EVENTS.SDK_AUTOMATE}:ci-artifacts`,
  PRINT_BUILDLINK: `${EVENTS.SDK_AUTOMATE}:print-buildlink`
};
var A11Y_EVENTS = {
  PERFORM_SCAN: `${EVENTS.SDK_A11Y}:driver-performscan`,
  SAVE_RESULTS: `${EVENTS.SDK_A11Y}:save-results`,
  GET_RESULTS: `${EVENTS.SDK_A11Y}:get-accessibility-results`,
  GET_RESULTS_SUMMARY: `${EVENTS.SDK_A11Y}:get-accessibility-results-summary`
};
var PERCY_EVENTS = {
  DOWNLOAD: `${EVENTS.SDK_PERCY}:download`,
  SCREENSHOT: `${EVENTS.SDK_PERCY}:screenshot`,
  START: `${EVENTS.SDK_PERCY}:start`,
  STOP: `${EVENTS.SDK_PERCY}:stop`,
  AUTO_CAPTURE: `${EVENTS.SDK_PERCY}:auto-capture`,
  SNAPSHOT: `${EVENTS.SDK_PERCY}:snapshot`,
  SCREENSHOT_APP: `${EVENTS.SDK_PERCY}:screenshot-app`
};
var O11Y_EVENTS = {
  SYNC: `${EVENTS.SDK_O11Y}:sync`,
  TAKE_SCREENSHOT: `${EVENTS.SDK_O11Y}:driver-takeScreenShot`,
  PRINT_BUILDLINK: `${EVENTS.SDK_O11Y}:print-buildlink`
};
var HOOK_EVENTS = {
  BEFORE_EACH: `${EVENTS.SDK_HOOK}:before-each`,
  AFTER_EACH: `${EVENTS.SDK_HOOK}:after-each`,
  AFTER_ALL: `${EVENTS.SDK_HOOK}:after-all`,
  BEFORE_ALL: `${EVENTS.SDK_HOOK}:before-all`,
  BEFORE: `${EVENTS.SDK_HOOK}:before`,
  AFTER: `${EVENTS.SDK_HOOK}:after`
};
var TURBOSCALE_EVENTS = {
  HUB_MANAGEMENT: `${EVENTS.SDK_TURBOSCALE}:hub-management`,
  PRINT_BUILDLINK: `${EVENTS.SDK_TURBOSCALE}:print-buildlink`
};
var APP_AUTOMATE_EVENTS = {
  APP_UPLOAD: `${EVENTS.SDK_APP_AUTOMATE}:app-upload`
};
var DRIVER_EVENT = {
  QUIT: `${EVENTS.SDK_DRIVER}:quit`,
  GET: `${EVENTS.SDK_DRIVER}:get`,
  PRE_EXECUTE: `${EVENTS.SDK_DRIVER}:pre-execute`,
  POST_EXECUTE: `${EVENTS.SDK_DRIVER}:post-execute`,
  INIT: EVENTS.SDK_DRIVER_INIT,
  PRE_INITIALIZE: EVENTS.SDK_PRE_INITIALIZE,
  POST_INITIALIZE: EVENTS.SDK_POST_INITIALIZE
};
var FRAMEWORK_EVENTS = {
  INIT: EVENTS.SDK_AUTOMATION_FRAMEWORK_INIT,
  START: EVENTS.SDK_AUTOMATION_FRAMEWORK_START,
  STOP: EVENTS.SDK_AUTOMATION_FRAMEWORK_STOP
};
var CONFIG_EVENTS = {
  ACCESSIBILITY: EVENTS.SDK_ACCESSIBILITY_CONFIG,
  OBSERVABILITY: EVENTS.SDK_OBSERVABILITY_CONFIG
};
var AI_EVENTS = {
  SELF_HEAL_STEP: EVENTS.SDK_AI_SELF_HEAL_STEP,
  SELF_HEAL_GET_RESULT: EVENTS.SDK_AI_SELF_HEAL_GET_RESULT
};
var DISPATCHER_EVENTS = {
  TEST_FRAMEWORK: EVENTS.SDK_TEST_FRAMEWORK_EVENT,
  TEST_SESSION: EVENTS.SDK_TEST_SESSION_EVENT,
  LOG_CREATED: EVENTS.SDK_CLI_LOG_CREATED_EVENT,
  ENQUEUE_TEST: EVENTS.SDK_CLI_ENQUEUE_TEST_EVENT
};

// src/cli/cliLogger.ts
import path2 from "node:path";
import fs2 from "node:fs";
import chalk2 from "chalk";
import logger2 from "@wdio/logger";
var log2 = logger2("@wdio/browserstack-service/cli");
var BStackLogger2 = class {
  static logFilePath = path2.join(process.cwd(), LOGS_FILE);
  static logFolderPath = path2.join(process.cwd(), "logs");
  static logFileStream;
  static logToFile(logMessage, logLevel) {
    try {
      if (!this.logFileStream) {
        this.ensureLogsFolder();
        this.logFileStream = fs2.createWriteStream(this.logFilePath, { flags: "a" });
      }
      if (this.logFileStream && this.logFileStream.writable) {
        this.logFileStream.write(this.formatLog(logMessage, logLevel));
      }
    } catch (error) {
      log2.debug(`Failed to log to file. Error ${error}`);
    }
  }
  static formatLog(logMessage, level) {
    return `${chalk2.gray((/* @__PURE__ */ new Date()).toISOString())} ${chalk2[COLORS[level]](level.toUpperCase())} ${chalk2.whiteBright("@wdio/browserstack-service")} ${logMessage}
`;
  }
  static info(message) {
    this.logToFile(message, "info");
    log2.info(message);
  }
  static error(message) {
    this.logToFile(message, "error");
    log2.error(message);
  }
  static debug(message, param) {
    this.logToFile(message, "debug");
    if (param) {
      log2.debug(message, param);
    } else {
      log2.debug(message);
    }
  }
  static warn(message) {
    this.logToFile(message, "warn");
    log2.warn(message);
  }
  static trace(message) {
    this.logToFile(message, "trace");
    log2.trace(message);
  }
  static clearLogger() {
    if (this.logFileStream) {
      this.logFileStream.end();
    }
    this.logFileStream = null;
  }
  static clearLogFile() {
    if (fs2.existsSync(this.logFilePath)) {
      fs2.truncateSync(this.logFilePath);
    }
  }
  static ensureLogsFolder() {
    if (!fs2.existsSync(this.logFolderPath)) {
      fs2.mkdirSync(this.logFolderPath);
    }
  }
};

// src/cli/frameworks/constants/testFrameworkConstants.ts
var TestFrameworkConstants = {
  KEY_TEST_UUID: "test_uuid",
  KEY_TEST_ID: "test_id",
  KEY_TEST_NAME: "test_name",
  KEY_TEST_FILE_PATH: "test_file_path",
  KEY_TEST_TAGS: "test_tags",
  KEY_TEST_RESULT: "test_result",
  KEY_TEST_RESULT_AT: "test_result_at",
  KEY_TEST_STARTED_AT: "test_started_at",
  KEY_TEST_ENDED_AT: "test_ended_at",
  KEY_TEST_LOCATION: "test_location",
  KEY_TEST_SCOPE: "test_scope",
  KEY_TEST_SCOPES: "test_scopes",
  KEY_TEST_FRAMEWORK_NAME: "test_framework_name",
  KEY_TEST_FRAMEWORK_VERSION: "test_framework_version",
  KEY_TEST_CODE: "test_code",
  KEY_TEST_RERUN_NAME: "test_rerun_name",
  KEY_PLATFORM_INDEX: "platform_index",
  KEY_TEST_FAILURE: "test_failure",
  KEY_TEST_FAILURE_TYPE: "test_failure_type",
  KEY_TEST_FAILURE_REASON: "test_failure_reason",
  KEY_TEST_LOGS: "test_logs",
  KEY_TEST_META: "test_meta",
  KEY_CUSTOM_TAGS: "custom_metadata",
  KEY_TEST_DEFERRED: "test_deferred",
  KEY_SESSION_NAME: "test_session_name",
  KEY_AUTOMATE_SESSION_NAME: "automate_session_name",
  KEY_AUTOMATE_SESSION_STATUS: "automate_session_status",
  KEY_AUTOMATE_SESSION_REASON: "automate_session_reason",
  KEY_EVENT_STARTED_AT: "event_started_at",
  KEY_EVENT_ENDED_AT: "event_ended_at",
  KEY_HOOK_ID: "hook_id",
  KEY_HOOK_RESULT: "hook_result",
  KEY_HOOK_LOGS: "hook_logs",
  KEY_HOOK_NAME: "hook_name",
  KEY_HOOKS_STARTED: "test_hooks_started",
  KEY_HOOKS_FINISHED: "test_hooks_finished",
  DEFAULT_TEST_RESULT: "pending",
  DEFAULT_HOOK_RESULT: "pending",
  KIND_SCREENSHOT: "TEST_SCREENSHOT",
  KIND_LOG: "TEST_LOG",
  HOOK_REGEX: "^(BEFORE_|AFTER_)"
};

// src/cli/cliUtils.ts
var CLI_LOCK_TIMEOUT_MS = 5 * 60 * 1e3;
var CLI_LOCK_POLL_MS = 1e3;
var CLI_DOWNLOAD_TIMEOUT_MS = 5 * 60 * 1e3;
var CLI_DOWNLOAD_TMP_PREFIX = "downloaded_file_";
var CLI_DOWNLOAD_TMP_SUFFIX = ".zip";
var CLIUtils = class _CLIUtils {
  static automationFrameworkDetail = {};
  static testFrameworkDetail = {};
  static CLISupportedFrameworks = ["mocha"];
  static isDevelopmentEnv() {
    return process.env.BROWSERSTACK_CLI_ENV === "development";
  }
  static getCLIParamsForDevEnv() {
    return {
      id: process.env.BROWSERSTACK_CLI_ENV || "",
      listen: `unix:/tmp/sdk-platform-${process.env.BROWSERSTACK_CLI_ENV}.sock`
    };
  }
  /**
   * Build config object for binary session request
   * @returns {string}
   * @throws {Error}
   */
  static getBinConfig(config, capabilities, options, buildTag) {
    const modifiedOpts = { ...options };
    if (modifiedOpts.opts) {
      modifiedOpts.browserStackLocalOptions = modifiedOpts.opts;
      delete modifiedOpts.opts;
    }
    delete modifiedOpts.testManagementOptions;
    modifiedOpts.testContextOptions = {
      skipSessionName: isFalse(modifiedOpts.setSessionName),
      skipSessionStatus: isFalse(modifiedOpts.setSessionStatus),
      sessionNameOmitTestTitle: modifiedOpts.sessionNameOmitTestTitle || false,
      sessionNamePrependTopLevelSuiteTitle: modifiedOpts.sessionNamePrependTopLevelSuiteTitle || false,
      sessionNameFormat: modifiedOpts.sessionNameFormat || ""
    };
    const commonBstackOptions = (() => {
      if (capabilities && !Array.isArray(capabilities) && typeof capabilities === "object" && "bstack:options" in capabilities) {
        return capabilities["bstack:options"] || {};
      }
      return {};
    })();
    const isNonBstackA11y = isTurboScale(options) || !shouldAddServiceVersion(
      config,
      options.testObservability
    );
    const observabilityOptions = options.testObservabilityOptions || {};
    const testManagementOptions = options.testManagementOptions || {};
    const testPlanId = typeof testManagementOptions.testPlanId === "string" ? testManagementOptions.testPlanId.trim() : "";
    const binconfig = {
      userName: observabilityOptions.user || config.user,
      accessKey: observabilityOptions.key || config.key,
      platforms: [],
      isNonBstackA11yWDIO: isNonBstackA11y,
      ...modifiedOpts,
      ...commonBstackOptions
    };
    binconfig.buildName = observabilityOptions.buildName || binconfig.buildName;
    binconfig.projectName = observabilityOptions.projectName || binconfig.projectName;
    binconfig.buildTag = this.getObservabilityBuildTags(observabilityOptions, buildTag) || [];
    if (testPlanId.length > 0) {
      binconfig.testManagementOptions = {
        testPlanId
      };
    }
    const caps = Array.isArray(capabilities) ? capabilities : [capabilities];
    for (const cap of caps) {
      const platform4 = {};
      const capability = cap;
      Object.keys(capability).filter((key) => key !== "bstack:options").forEach((key) => {
        platform4[key] = capability[key];
      });
      if (capability["bstack:options"]) {
        Object.keys(
          capability["bstack:options"]
        ).forEach((key) => {
          platform4[key] = capability["bstack:options"][key];
        });
      }
      binconfig.platforms.push(platform4);
    }
    return JSON.stringify(binconfig);
  }
  static getSdkVersion() {
    return BSTACK_SERVICE_VERSION;
  }
  static getSdkLanguage() {
    return "ECMAScript";
  }
  static async setupCliPath(config) {
    BStackLogger2.debug("Configuring Cli path.");
    const developmentBinaryPath = process.env.SDK_CLI_BIN_PATH || null;
    if (!isNullOrEmpty(developmentBinaryPath)) {
      BStackLogger2.debug(`Development Cli Path: ${developmentBinaryPath}`);
      return developmentBinaryPath;
    }
    try {
      const cliDir = this.getCliDir();
      if (isNullOrEmpty(cliDir)) {
        throw new Error("No writable directory available for the CLI");
      }
      const existingCliPath = this.getExistingCliPath(cliDir);
      const finalBinaryPath = await this.checkAndUpdateCli(
        existingCliPath,
        cliDir,
        config
      );
      BStackLogger2.debug(`Resolved binary path: ${finalBinaryPath}`);
      return finalBinaryPath;
    } catch (err) {
      BStackLogger2.debug(
        `Error in setting up cli path directory, Exception: ${util.format(err)}`
      );
    }
    return null;
  }
  static async checkAndUpdateCli(existingCliPath, cliDir, config) {
    if (process.env.BROWSERSTACK_TESTHUB_JWT) {
      BStackLogger2.debug(
        `Worker process detected, skipping CLI update. Using existing: ${existingCliPath}`
      );
      if (existingCliPath && fs3.existsSync(existingCliPath)) {
        return existingCliPath;
      }
      BStackLogger2.warn(
        "Worker process has no existing CLI binary, attempting download as fallback."
      );
    }
    PerformanceTester.start(EVENTS.SDK_CLI_CHECK_UPDATE);
    BStackLogger2.info(`Current CLI Path Found: ${existingCliPath}`);
    const queryParams = {
      sdk_version: _CLIUtils.getSdkVersion(),
      os: platform(),
      os_arch: arch(),
      cli_version: "0",
      sdk_language: this.getSdkLanguage()
    };
    if (!isNullOrEmpty(existingCliPath)) {
      if (this.isBinaryBusy(existingCliPath)) {
        BStackLogger2.warn(`Existing binary is currently in use, skipping update: ${existingCliPath}`);
        PerformanceTester.end(EVENTS.SDK_CLI_CHECK_UPDATE);
        return existingCliPath;
      }
      const version3 = await this.runShellCommand(
        `${existingCliPath} version`
      );
      if (version3.toLowerCase().includes("text file busy")) {
        BStackLogger2.warn(`Binary busy during version check, skipping update: ${existingCliPath}`);
        PerformanceTester.end(EVENTS.SDK_CLI_CHECK_UPDATE);
        return existingCliPath;
      }
      queryParams.cli_version = version3;
    }
    const response = await this.requestToUpdateCLI(queryParams, config);
    if (nestedKeyValue(response, ["updated_cli_version"])) {
      BStackLogger2.debug(
        `Need to update binary, current binary version: ${queryParams.cli_version}`
      );
      const browserStackBinaryUrl = process.env.BROWSERSTACK_BINARY_URL || null;
      if (!isNullOrEmpty(browserStackBinaryUrl)) {
        BStackLogger2.debug(
          `Using BROWSERSTACK_BINARY_URL: ${browserStackBinaryUrl}`
        );
        response.url = browserStackBinaryUrl;
      }
      const finalBinaryPath = await this.downloadLatestBinary(
        nestedKeyValue(response, ["url"]),
        cliDir,
        nestedKeyValue(response, ["updated_cli_version"])
      );
      PerformanceTester.end(EVENTS.SDK_CLI_CHECK_UPDATE);
      return finalBinaryPath;
    }
    PerformanceTester.end(EVENTS.SDK_CLI_CHECK_UPDATE);
    return existingCliPath;
  }
  static getCliDir() {
    const writableDir = this.getWritableDir();
    try {
      if (isNullOrEmpty(writableDir)) {
        throw new Error("No writable directory available for the CLI");
      }
      const cliDirPath = path3.join(writableDir, "cli");
      if (!fs3.existsSync(cliDirPath)) {
        createDir(cliDirPath);
      }
      return cliDirPath;
    } catch (err) {
      BStackLogger2.error(
        `Error in getting writable directory, writableDir=${util.format(err)}`
      );
      return "";
    }
  }
  static getWritableDir() {
    const writableDirOptions = [
      process.env.BROWSERSTACK_FILES_DIR,
      path3.join(homedir(), ".browserstack"),
      path3.join("tmp", ".browserstack")
    ];
    for (const path11 of writableDirOptions) {
      if (isNullOrEmpty(path11)) {
        continue;
      }
      try {
        if (fs3.existsSync(path11)) {
          BStackLogger2.debug(`File ${path11} already exist`);
          if (!isWritable(path11)) {
            BStackLogger2.debug(`Giving write permission to ${path11}`);
            const success = setReadWriteAccess(path11);
            if (!isTrue(success)) {
              BStackLogger2.warn(
                `Unable to provide write permission to ${path11}`
              );
            }
          }
        } else {
          BStackLogger2.debug(`File does not exist: ${path11}`);
          createDir(path11);
          BStackLogger2.debug(`Giving write permission to ${path11}`);
          const success = setReadWriteAccess(path11);
          if (!isTrue(success)) {
            BStackLogger2.warn(
              `Unable to provide write permission to ${path11}`
            );
          }
        }
        return path11;
      } catch (err) {
        BStackLogger2.error(
          `Unable to get writable directory, exception ${util.format(err)}`
        );
      }
    }
    return null;
  }
  static getExistingCliPath(cliDir) {
    try {
      if (!fs3.existsSync(cliDir) || !fs3.statSync(cliDir).isDirectory()) {
        return "";
      }
      const allBinaries = fs3.readdirSync(cliDir).map((file) => path3.join(cliDir, file)).filter(
        (filePath) => fs3.statSync(filePath).isFile() && path3.basename(filePath).startsWith("binary-")
      );
      if (allBinaries.length > 0) {
        const latestBinary = allBinaries.map((filePath) => ({
          filePath,
          mtime: fs3.statSync(filePath).mtime
        })).reduce(
          (latest, current) => {
            if (!latest || !latest.mtime) {
              return current;
            }
            if (current.mtime > latest.mtime) {
              return current;
            }
            return latest;
          },
          null
        );
        return latestBinary ? latestBinary.filePath : "";
      }
      return "";
    } catch (err) {
      BStackLogger2.error(`Error while reading CLI path: ${util.format(err)}`);
      return "";
    }
  }
  static isBinaryBusy(binaryPath) {
    if (isNullOrEmpty(binaryPath)) {
      return false;
    }
    if (platform() === "darwin") {
      return false;
    }
    if (!fs3.existsSync(binaryPath)) {
      return false;
    }
    try {
      const fd = fs3.openSync(binaryPath, "r+");
      fs3.closeSync(fd);
      return false;
    } catch (err) {
      if (BINARY_BUSY_ERROR_CODES.includes(err.code)) {
        BStackLogger2.debug(`Binary is busy: ${binaryPath}`);
        return true;
      }
      BStackLogger2.debug(`Error checking if binary is busy: ${err.message}`);
      return false;
    }
  }
  static requestToUpdateCLI = async (queryParams, config) => {
    const params = new URLSearchParams(queryParams);
    const requestInit = {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(`${getBrowserStackUser(config)}:${getBrowserStackKey(config)}`).toString("base64")}`
      }
    };
    const response = await _fetch(
      `${APIUtils.BROWSERSTACK_AUTOMATE_API_URL}/${UPDATED_CLI_ENDPOINT}?${params.toString()}`,
      requestInit
    );
    const jsonResponse = await response.json();
    BStackLogger2.debug(`response ${JSON.stringify(jsonResponse)}`);
    return jsonResponse;
  };
  static runShellCommand(cmdCommand, workingDir = "") {
    return new Promise((resolve) => {
      const process2 = exec(
        cmdCommand,
        { cwd: workingDir, timeout: 5e3 },
        (error, stdout, stderr) => {
          if (error) {
            resolve(stderr.trim() || "SHELL_EXECUTE_ERROR");
          } else {
            resolve(stdout.trim());
          }
        }
      );
      process2.on("error", () => {
        resolve("SHELL_EXECUTE_ERROR");
      });
    });
  }
  /**
   * Version encoded in a binary download URL, e.g.
   * `.../binary-macos-arm64-1.48.0.zip` -> `1.48.0`. Null when the URL does
   * not carry one (custom BROWSERSTACK_BINARY_URL).
   */
  static getVersionFromBinaryUrl(binDownloadUrl) {
    return /-(\d+\.\d+\.\d+)\.zip(?:\?|$)/.exec(binDownloadUrl || "")?.[1] ?? null;
  }
  /**
   * Whether the binary on disk is already the version we were asked to fetch.
   * A peer worker winning the download race leaves the *target* version here;
   * a merely-pre-existing binary is stale. Only the former may short-circuit
   * the download — see `downloadLatestBinary`.
   */
  static async isBinaryAtVersion(binaryPath, expectedVersion) {
    if (!expectedVersion) {
      return false;
    }
    try {
      const actual = await _CLIUtils.runShellCommand(`${binaryPath} version`);
      return actual.trim() === expectedVersion;
    } catch {
      return false;
    }
  }
  static downloadLatestBinary = async (binDownloadUrl, cliDir, expectedVersion) => {
    const lockPath = path3.join(cliDir, "download.lock");
    const targetVersion = expectedVersion || _CLIUtils.getVersionFromBinaryUrl(binDownloadUrl);
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const parseLockFile = () => {
      try {
        const content = fs3.readFileSync(lockPath, "utf8").trim();
        const [pidLine, timestampLine] = content.split("\n");
        const pid = Number.parseInt(pidLine, 10);
        const timestamp = Number.parseInt(timestampLine, 10);
        if (!Number.isFinite(pid) || !Number.isFinite(timestamp)) {
          return null;
        }
        return { pid, timestamp };
      } catch {
        return null;
      }
    };
    const isProcessRunning = (pid) => {
      try {
        process.kill(pid, 0);
        return true;
      } catch {
        return false;
      }
    };
    const acquireLock = async (timeoutMs = CLI_LOCK_TIMEOUT_MS, pollMs = CLI_LOCK_POLL_MS) => {
      const start = Date.now();
      while (true) {
        try {
          const fd = fs3.openSync(lockPath, "wx");
          try {
            fs3.writeFileSync(fd, `${process.pid}
${Date.now()}
`);
          } catch {
          }
          return () => {
            try {
              fs3.closeSync(fd);
            } catch {
            }
            try {
              fs3.unlinkSync(lockPath);
            } catch {
            }
          };
        } catch (e) {
          const error = e;
          if (error.code === "EEXIST") {
            const lockMeta = parseLockFile();
            if (lockMeta) {
              const lockAge = Date.now() - lockMeta.timestamp;
              const running = isProcessRunning(lockMeta.pid);
              if (!running || lockAge > timeoutMs) {
                BStackLogger2.warn(
                  `Stale CLI download lock detected (pid=${lockMeta.pid}, age=${lockAge}ms). Removing lock.`
                );
                try {
                  fs3.unlinkSync(lockPath);
                } catch {
                }
                continue;
              }
            }
            const existingBinary = _CLIUtils.getExistingCliPath(cliDir);
            if (existingBinary && fs3.existsSync(existingBinary) && fs3.statSync(existingBinary).size > 0 && await _CLIUtils.isBinaryAtVersion(
              existingBinary,
              targetVersion
            )) {
              BStackLogger2.debug(
                `Binary v${targetVersion} appeared while waiting for lock: ${existingBinary}`
              );
              return { alreadyExists: existingBinary };
            }
            if (Date.now() - start > timeoutMs) {
              throw new Error(
                `Timeout waiting for lock: ${lockPath}`
              );
            }
            await sleep(pollMs);
            continue;
          }
          throw e;
        }
      }
    };
    const cleanupTemporaryDownloads = (maxAgeMs = CLI_LOCK_TIMEOUT_MS) => {
      try {
        const now = Date.now();
        const tmpExtractRe = /\.tmp\.\d+$/;
        for (const entry of fs3.readdirSync(cliDir)) {
          const isDownloadZip = entry.startsWith(CLI_DOWNLOAD_TMP_PREFIX) && entry.endsWith(CLI_DOWNLOAD_TMP_SUFFIX);
          const isExtractTmp = tmpExtractRe.test(entry);
          if (!isDownloadZip && !isExtractTmp) {
            continue;
          }
          const filePath = path3.join(cliDir, entry);
          let stats;
          try {
            stats = fs3.statSync(filePath);
          } catch {
            continue;
          }
          if (now - stats.mtimeMs < maxAgeMs) {
            continue;
          }
          try {
            fs3.unlinkSync(filePath);
          } catch (err) {
            BStackLogger2.debug(
              `Failed to delete temp CLI file ${filePath}: ${util.format(err)}`
            );
          }
        }
      } catch (err) {
        BStackLogger2.debug(
          `Failed to scan temp CLI files in ${cliDir}: ${util.format(err)}`
        );
      }
    };
    PerformanceTester.start(EVENTS.SDK_CLI_DOWNLOAD);
    BStackLogger2.debug(`Downloading SDK binary from: ${binDownloadUrl}`);
    let downloadEnded = false;
    const endDownload = (success = true, errMsg) => {
      if (downloadEnded) {
        return;
      }
      downloadEnded = true;
      if (success) {
        PerformanceTester.end(EVENTS.SDK_CLI_DOWNLOAD);
        return;
      }
      PerformanceTester.end(
        EVENTS.SDK_CLI_DOWNLOAD,
        false,
        errMsg
      );
    };
    let releaseLock;
    try {
      const lockResult = await acquireLock();
      if (typeof lockResult !== "function") {
        endDownload();
        return lockResult.alreadyExists;
      }
      releaseLock = lockResult;
      const existingBinary = _CLIUtils.getExistingCliPath(cliDir);
      if (existingBinary && fs3.existsSync(existingBinary) && fs3.statSync(existingBinary).size > 0 && await _CLIUtils.isBinaryAtVersion(existingBinary, targetVersion)) {
        BStackLogger2.debug(
          `Binary already at v${targetVersion} after acquiring lock: ${existingBinary}`
        );
        endDownload();
        releaseLock();
        return existingBinary;
      }
      cleanupTemporaryDownloads();
      const zipFilePath = path3.join(
        cliDir,
        `${CLI_DOWNLOAD_TMP_PREFIX}${process.pid}_${Date.now()}${CLI_DOWNLOAD_TMP_SUFFIX}`
      );
      const downloadedFileStream = fs3.createWriteStream(zipFilePath);
      return new Promise((resolve, reject) => {
        downloadedFileStream.on("error", function(err) {
          BStackLogger2.error(
            `Got Error while downloading cli binary file: ${err}`
          );
          endDownload(false, util.format(err));
          releaseLock?.();
          reject(err);
        });
        const processDownload = async () => {
          const abortController = new AbortController();
          const timeout = setTimeout(
            () => abortController.abort(),
            CLI_DOWNLOAD_TIMEOUT_MS
          );
          let response;
          try {
            response = await _fetch(binDownloadUrl, {
              signal: abortController.signal
            });
          } finally {
            clearTimeout(timeout);
          }
          if (!response.body) {
            throw new Error("No response body received");
          }
          try {
            const arrayBuffer = await response.arrayBuffer();
            const nodeStream = Readable.from([
              new Uint8Array(arrayBuffer)
            ]);
            nodeStream.pipe(downloadedFileStream);
            _CLIUtils.downloadFileStream(
              downloadedFileStream,
              zipFilePath,
              cliDir,
              (result) => {
                endDownload();
                releaseLock?.();
                resolve(result);
              },
              (err) => {
                endDownload(false, util.format(err));
                releaseLock?.();
                reject(err);
              }
            );
          } catch (err) {
            BStackLogger2.error(
              `Got Error in cli binary downloading request ${util.format(err)}`
            );
            endDownload(false, util.format(err));
            releaseLock?.();
            reject(err);
          }
        };
        processDownload().catch((err) => {
          downloadedFileStream.destroy();
          endDownload(false, util.format(err));
          releaseLock?.();
          reject(err);
        });
      });
    } catch (err) {
      releaseLock?.();
      endDownload(false, util.format(err));
      BStackLogger2.debug(
        `Failed to download binary, Exception: ${util.format(err)}`
      );
      return null;
    }
  };
  static downloadFileStream(downloadedFileStream, zipFilePath, cliDir, resolve, reject) {
    downloadedFileStream.on("close", async function() {
      const yauzlOpenPromise = promisify(yauzl.open);
      try {
        const zipfile = await yauzlOpenPromise(zipFilePath, {
          lazyEntries: true
        });
        let resolvedBinaryPath = null;
        zipfile.readEntry();
        zipfile.on("entry", async (entry) => {
          if (/\/$/.test(entry.fileName)) {
            zipfile.readEntry();
            return;
          }
          const candidatePath = path3.join(cliDir, entry.fileName);
          const resolvedCandidate = path3.resolve(candidatePath);
          const resolvedDir = path3.resolve(cliDir) + path3.sep;
          if (!resolvedCandidate.startsWith(resolvedDir)) {
            zipfile.close();
            reject(new Error(`Zip-slip detected: entry "${entry.fileName}" resolves outside ${cliDir}`));
            return;
          }
          const isBinaryEntry = path3.basename(entry.fileName).startsWith("binary-");
          if (!isBinaryEntry) {
            const directStream = fs3.createWriteStream(candidatePath);
            directStream.on("error", (writeErr) => {
              zipfile.close();
              reject(writeErr);
            });
            const openReadStreamPromise2 = promisify(
              zipfile.openReadStream
            ).bind(zipfile);
            try {
              const readStream = await openReadStreamPromise2(entry);
              readStream.on("end", function() {
                directStream.end();
                directStream.on("close", () => zipfile.readEntry());
              });
              readStream.pipe(directStream);
            } catch (zipErr) {
              zipfile.close();
              reject(zipErr);
            }
            return;
          }
          const finalPath = candidatePath;
          const tempPath = path3.join(cliDir, `${entry.fileName}.tmp.${process.pid}`);
          const writeStream = fs3.createWriteStream(tempPath);
          let writeStreamErrored = false;
          writeStream.on("error", (writeErr) => {
            writeStreamErrored = true;
            fsp.unlink(tempPath).catch(() => {
            });
            zipfile.close();
            reject(writeErr);
          });
          writeStream.on("close", async () => {
            if (writeStreamErrored) {
              return;
            }
            try {
              await fsp.chmod(tempPath, "0755");
              try {
                await fsp.rename(tempPath, finalPath);
              } catch (renameErr) {
                if (renameErr.code !== "EXDEV") {
                  throw renameErr;
                }
                BStackLogger2.warn(`Atomic rename failed (cross-device), falling back to copy: ${renameErr.message}`);
                await fsp.copyFile(tempPath, finalPath);
                await fsp.unlink(tempPath).catch(() => {
                });
              }
              if (!resolvedBinaryPath) {
                resolvedBinaryPath = finalPath;
              }
              zipfile.readEntry();
            } catch (err) {
              await fsp.unlink(tempPath).catch(() => {
              });
              zipfile.close();
              reject(err);
            }
          });
          const openReadStreamPromise = promisify(
            zipfile.openReadStream
          ).bind(zipfile);
          try {
            const readStream = await openReadStreamPromise(entry);
            readStream.on("end", function() {
              writeStream.end();
            });
            readStream.pipe(writeStream);
          } catch (zipErr) {
            fsp.unlink(tempPath).catch(() => {
            });
            zipfile.close();
            reject(zipErr);
          }
        });
        zipfile.on("error", (zipErr) => {
          reject(zipErr);
        });
        zipfile.once("end", () => {
          fsp.unlink(zipFilePath).catch(() => {
            BStackLogger2.warn(`Failed to delete zip file: ${zipFilePath}`);
          });
          if (!resolvedBinaryPath) {
            zipfile.close();
            reject(new Error("No binary-* entry found in zip; cannot complete CLI binary extraction"));
            return;
          }
          zipfile.close();
          resolve(resolvedBinaryPath);
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  static getTestFrameworkDetail() {
    if (process.env.BROWSERSTACK_TEST_FRAMEWORK_DETAIL) {
      return JSON.parse(process.env.BROWSERSTACK_TEST_FRAMEWORK_DETAIL);
    }
    return this.testFrameworkDetail;
  }
  static getAutomationFrameworkDetail() {
    if (process.env.BROWSERSTACK_AUTOMATION_FRAMEWORK_DETAIL) {
      return JSON.parse(
        process.env.BROWSERSTACK_AUTOMATION_FRAMEWORK_DETAIL
      );
    }
    return this.automationFrameworkDetail;
  }
  static setFrameworkDetail(testFramework, automationFramework) {
    if (!testFramework || !automationFramework) {
      BStackLogger2.debug(
        `Test or Automation framework not provided testFramework=${testFramework}, automationFramework=${automationFramework}`
      );
    }
    this.testFrameworkDetail = {
      name: testFramework,
      version: { [testFramework]: _CLIUtils.getSdkVersion() }
    };
    this.automationFrameworkDetail = {
      name: automationFramework,
      version: { [automationFramework]: _CLIUtils.getSdkVersion() }
    };
    process.env.BROWSERSTACK_AUTOMATION_FRAMEWORK_DETAIL = JSON.stringify(
      this.automationFrameworkDetail
    );
    process.env.BROWSERSTACK_TEST_FRAMEWORK_DETAIL = JSON.stringify(
      this.testFrameworkDetail
    );
  }
  /**
   * Get the current instance name using thread id and processId
   * @returns {string}
   */
  static getCurrentInstanceName() {
    return `${process.pid}:${threadId}`;
  }
  /**
   * Generate a unique client worker identifier combining thread ID and process ID.
   * This identifier is used to track worker-specific events and performance metrics
   * across distributed test execution. Format matches the Python SDK implementation
   * for consistency across SDKs.
   *
   * Format: "threadId-processId"
   *
   * @param context - Optional execution context with threadId and processId
   * @returns Worker ID string in format "threadId-processId"
   * @example
   * const workerId = CLIUtils.getClientWorkerId() // Returns "1-12345"
   * const workerId = CLIUtils.getClientWorkerId({ threadId: 123, processId: 456 }) // Returns "123-456"
   */
  static getClientWorkerId(context) {
    const workerThreadId = context?.threadId?.toString() || threadId.toString();
    const workerProcessId = context?.processId?.toString() || process.pid.toString();
    return `${workerThreadId}-${workerProcessId}`;
  }
  /**
   *
   * @param {TestFrameworkState | AutomationFrameworkState} frameworkState
   * @param {HookState} hookState
   * @returns {string}
   */
  static getHookRegistryKey(frameworkState, hookState) {
    return `${frameworkState}:${hookState}`;
  }
  static matchHookRegex(hookState) {
    const pattern = new RegExp(TestFrameworkConstants.HOOK_REGEX);
    return pattern.test(hookState);
  }
  static getObservabilityBuildTags(observabilityOptions, bstackBuildTag) {
    if (process.env.TEST_OBSERVABILITY_BUILD_TAG) {
      return process.env.TEST_OBSERVABILITY_BUILD_TAG.split(",");
    }
    if (observabilityOptions.buildTag) {
      return observabilityOptions.buildTag;
    }
    if (bstackBuildTag) {
      return [bstackBuildTag];
    }
    return [];
  }
  static checkCLISupportedFrameworks(framework) {
    if (framework === void 0) {
      return false;
    }
    return this.CLISupportedFrameworks.includes(framework);
  }
};

// src/instrumentation/performance/performance-tester.ts
function safeMark(markName) {
  try {
    performance.mark(markName);
  } catch {
  }
}
function safeMeasure(measureName, start, end) {
  try {
    performance.measure(measureName, start, end);
  } catch {
  }
}
var PerformanceTester = class _PerformanceTester {
  static _observer;
  static _csvWriter;
  static _events = [];
  static _measuredEvents = [];
  static _hasStoppedGeneration = false;
  static _stopGenerateCallCount = 0;
  static started = false;
  static details = {};
  static eventsMap = {};
  static browser;
  static scenarioThatRan;
  static jsonReportDirName = "performance-report";
  static jsonReportDirPath = path4.join(process.cwd(), "logs", this.jsonReportDirName);
  static jsonReportFileName = `${this.jsonReportDirPath}/performance-report-${_PerformanceTester.getProcessId()}.json`;
  static startMonitoring(csvName = "performance-report.csv") {
    if (!fs4.existsSync(this.jsonReportDirPath)) {
      fs4.mkdirSync(this.jsonReportDirPath, { recursive: true });
    }
    this._observer = new PerformanceObserver((list) => {
      list.getEntries().filter((entry) => entry.entryType === "measure").forEach(
        (entry) => {
          let finalEntry = entry.toJSON();
          try {
            if (typeof finalEntry.startTime === "number" && typeof performance.timeOrigin === "number") {
              const originalStartTime = finalEntry.startTime;
              finalEntry.startTime = performance.timeOrigin + finalEntry.startTime;
              BStackLogger.debug(`Timestamp conversion for ${entry.name}: ${originalStartTime} -> ${finalEntry.startTime} (timeOrigin: ${performance.timeOrigin})`);
            }
          } catch (e) {
            BStackLogger.debug(`Error converting startTime to epoch: ${util2.format(e)}`);
          }
          if (this.details[entry.name]) {
            finalEntry = Object.assign(finalEntry, this.details[entry.name]);
          }
          delete this.details[entry.name];
          this._measuredEvents.push(finalEntry);
        }
      );
      if (process.env[PERF_MEASUREMENT_ENV]) {
        list.getEntries().forEach((entry) => this._events.push(entry));
      }
    });
    const entryTypes = ["measure"];
    if (process.env[PERF_MEASUREMENT_ENV]) {
      entryTypes.push("function");
    }
    this._observer.observe({ buffered: true, entryTypes });
    this.started = true;
    if (process.env[PERF_MEASUREMENT_ENV]) {
      this._csvWriter = createObjectCsvWriter({
        path: csvName,
        header: [
          { id: "name", title: "Function Name" },
          { id: "time", title: "Execution Time (ms)" }
        ]
      });
    }
  }
  static calculateTimes(methods) {
    const times = {};
    this._events.map((entry) => {
      if (!times[entry.name]) {
        times[entry.name] = 0;
      }
      times[entry.name] += entry.duration;
    });
    const timeTaken = methods.reduce((a, c) => {
      return times[c] + (a || 0);
    }, 0);
    BStackLogger.debug(`Time for ${methods} is ${timeTaken}`);
    return timeTaken;
  }
  static async stopAndGenerate(filename = "performance-own.html") {
    if (!this.started) {
      return;
    }
    try {
      const eventsJson = JSON.stringify(this._measuredEvents);
      const finalJSONStr = eventsJson.slice(1, -1) + ",";
      await fsPromise.appendFile(this.jsonReportFileName, finalJSONStr);
    } catch (er) {
      BStackLogger.debug(`Failed to write events of the worker to ${this.jsonReportFileName}: ${util2.format(er)}`);
    }
    this._observer.disconnect();
    if (!process.env[PERF_MEASUREMENT_ENV]) {
      return;
    }
    this.started = false;
    this.generateCSV(this._events);
    const content = this.generateReport(this._events);
    const dir = path4.join(process.cwd(), filename);
    try {
      await fsPromise.writeFile(dir, content);
      BStackLogger.info(`Performance report is at ${path4}`);
    } catch (err) {
      BStackLogger.error(`Error in writing html ${util2.format(err)}`);
    }
  }
  static generateReport(entries) {
    let html = "<!DOCTYPE html><html><head><title>Performance Report</title></head><body>";
    html += "<h1>Performance Report</h1>";
    html += "<table><thead><tr><th>Function Name</th><th>Duration (ms)</th></tr></thead><tbody>";
    entries.forEach((entry) => {
      html += `<tr><td>${entry.name}</td><td>${entry.duration}</td></tr>`;
    });
    html += "</tbody></table></body></html>";
    return html;
  }
  static generateCSV(entries) {
    const times = {};
    entries.map((entry) => {
      if (!times[entry.name]) {
        times[entry.name] = 0;
      }
      times[entry.name] += entry.duration;
      return {
        name: entry.name,
        time: entry.duration
      };
    });
    const dat = Object.entries(times).map(([key, value]) => {
      return {
        name: key,
        time: value
      };
    });
    this._csvWriter.writeRecords(dat).then(() => BStackLogger.info("Performance CSV report generated successfully")).catch((error) => console.error(error));
  }
  static Measure(label, details = {}) {
    const self = this;
    return (target, key, descriptor) => {
      const originalMethod = descriptor.value;
      if (descriptor.value) {
        descriptor.value = function(...args) {
          return _PerformanceTester.measure.apply(self, [label, originalMethod, { methodName: key.toString(), ...details }, args, this]);
        };
      }
    };
  }
  static measureWrapper(name, fn, details = {}) {
    const self = this;
    details.worker = _PerformanceTester.getProcessId();
    details.testName = _PerformanceTester.scenarioThatRan && _PerformanceTester.scenarioThatRan[_PerformanceTester.scenarioThatRan.length - 1];
    details.platform = _PerformanceTester.browser?.sessionId;
    return function(...args) {
      return self.measure(name, fn, details, args);
    };
  }
  static isEnabled() {
    return !(process.env.BROWSERSTACK_SDK_INSTRUMENTATION === "false");
  }
  static measure(label, fn, details = {}, args, thisArg = null) {
    if (!this.started || !this.isEnabled()) {
      return fn.apply(thisArg, args);
    }
    const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(7)}`;
    const startMark = `${label}-start-${uniqueId}`;
    const endMark = `${label}-end-${uniqueId}`;
    safeMark(startMark);
    const detailsWithContext = {
      ...details,
      measurementId: uniqueId
    };
    try {
      const returnVal = fn.apply(thisArg, args);
      if (returnVal instanceof Promise) {
        return new Promise((resolve, reject) => {
          returnVal.then((v) => {
            safeMark(endMark);
            safeMeasure(label, startMark, endMark);
            this.details[label] = Object.assign({
              success: true,
              failure: void 0
            }, Object.assign(Object.assign({
              clientWorkerId: _PerformanceTester.getClientWorkerId(),
              worker: _PerformanceTester.getProcessId(),
              platform: _PerformanceTester.browser?.sessionId,
              testName: _PerformanceTester.scenarioThatRan?.pop()
            }, detailsWithContext), this.details[label] || {}));
            resolve(v);
          }).catch((e) => {
            safeMark(endMark);
            safeMeasure(label, startMark, endMark);
            this.details[label] = Object.assign({
              success: false,
              failure: util2.format(e)
            }, Object.assign(Object.assign({
              clientWorkerId: _PerformanceTester.getClientWorkerId(),
              worker: _PerformanceTester.getProcessId(),
              platform: _PerformanceTester.browser?.sessionId,
              testName: _PerformanceTester.scenarioThatRan?.pop()
            }, detailsWithContext), this.details[label] || {}));
            reject(e);
          });
        });
      }
      safeMark(endMark);
      safeMeasure(label, startMark, endMark);
      this.details[label] = Object.assign({
        success: true,
        failure: void 0
      }, Object.assign(Object.assign({
        clientWorkerId: _PerformanceTester.getClientWorkerId(),
        worker: _PerformanceTester.getProcessId(),
        platform: _PerformanceTester.browser?.sessionId,
        testName: _PerformanceTester.scenarioThatRan?.pop()
      }, detailsWithContext), this.details[label] || {}));
      return returnVal;
    } catch (er) {
      safeMark(endMark);
      safeMeasure(label, startMark, endMark);
      this.details[label] = Object.assign({
        success: false,
        failure: util2.format(er)
      }, Object.assign(Object.assign({
        clientWorkerId: _PerformanceTester.getClientWorkerId(),
        worker: _PerformanceTester.getProcessId(),
        platform: _PerformanceTester.browser?.sessionId,
        testName: _PerformanceTester.scenarioThatRan?.pop()
      }, detailsWithContext), this.details[label] || {}));
      throw er;
    }
  }
  static start(event) {
    const finalEvent = event + "-start";
    if (this.eventsMap[finalEvent]) {
      return;
    }
    safeMark(finalEvent);
    this.eventsMap[finalEvent] = 1;
  }
  static end(event, success = true, failure, details = {}) {
    safeMark(event + "-end");
    safeMeasure(event, event + "-start", event + "-end");
    delete this.eventsMap[event + "-start"];
    this.details[event] = Object.assign({ success, failure: util2.format(failure) }, Object.assign(Object.assign({
      clientWorkerId: _PerformanceTester.getClientWorkerId(),
      worker: _PerformanceTester.getProcessId(),
      platform: _PerformanceTester.browser?.sessionId,
      testName: _PerformanceTester.scenarioThatRan && _PerformanceTester.scenarioThatRan[_PerformanceTester.scenarioThatRan.length - 1]
    }, details), this.details[event] || {}));
  }
  /**
   * Get client worker ID in format "threadId-processId".
   * This method provides a consistent identifier across the SDK for tracking
   * worker-specific events and performance metrics.
   *
   * @returns Worker ID string in format "threadId-processId"
   */
  static getClientWorkerId() {
    return CLIUtils.getClientWorkerId();
  }
  static getProcessId() {
    return `${process.pid}-${worker.threadId}`;
  }
  static sleep = (ms = 100) => new Promise((resolve) => setTimeout(resolve, ms));
  static async uploadEventsData() {
    this.start(EVENTS.SDK_SEND_KEY_METRICS);
    try {
      const workerId = `${process.pid}`;
      BStackLogger.debug(`[Performance Upload] Starting upload for worker ${workerId}`);
      this.start(EVENTS.SDK_KEY_METRICS_PREPARATION);
      let measures = [];
      if (await fsPromise.access(this.jsonReportDirPath).then(() => true).catch(() => false)) {
        const files = (await fsPromise.readdir(this.jsonReportDirPath)).map((file) => path4.resolve(this.jsonReportDirPath, file));
        measures = (await Promise.all(files.map((file) => fsPromise.readFile(file, "utf-8")))).map((el) => `[${el.slice(0, -1)}]`).map((el) => JSON.parse(el)).flat();
      }
      BStackLogger.debug(`[Performance Upload] Total events from files: ${measures.length}`);
      if (this._measuredEvents.length > 0) {
        BStackLogger.debug(`[Performance Upload] Adding ${this._measuredEvents.length} in-memory events`);
        measures = measures.concat(
          this._measuredEvents.map((e) => {
            if (typeof e.toJSON === "function") {
              return e.toJSON();
            }
            return e;
          })
        );
      }
      const ensureEpochTimes = (arr) => {
        const now = Date.now();
        const cutoff = 1e12;
        const timeOrigin = typeof performance !== "undefined" && typeof performance.timeOrigin === "number" ? performance.timeOrigin : now - process.uptime() * 1e3;
        return arr.map((entry) => {
          if (typeof entry.startTime === "number" && entry.startTime < cutoff) {
            entry.startTime = timeOrigin + entry.startTime;
          }
          return entry;
        });
      };
      measures = ensureEpochTimes(measures);
      const date = /* @__PURE__ */ new Date();
      const options = {
        timeZone: "UTC",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        fractionalSecondDigits: 3,
        // To include microseconds
        hour12: false
      };
      const formattedDate = new Intl.DateTimeFormat("en-GB", options).formatToParts(date).map(({ type: type3, value }) => type3 === "timeZoneName" ? "Z" : value).join("").replace(",", "T");
      this.end(EVENTS.SDK_KEY_METRICS_PREPARATION, true);
      const payload = {
        event_type: "sdk_events",
        data: {
          testhub_uuid: process.env.PERF_TESTHUB_UUID || process.env.SDK_RUN_ID,
          created_day: formattedDate,
          event_name: "SDKFeaturePerformance",
          user_data: process.env.PERF_USER_NAME,
          host_info: JSON.stringify({
            hostname: hostname(),
            platform: platform2(),
            type: type(),
            version: version(),
            arch: arch2()
          }),
          event_json: { measures, sdkRunId: process.env.SDK_RUN_ID }
        }
      };
      const result = await fetchWrap(`${APIUtils.EDS_URL}/send_sdk_events`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      BStackLogger.debug(`[Performance Upload] Successfully uploaded to EDS: ${util2.format(await result.text())}`);
      this.end(EVENTS.SDK_SEND_KEY_METRICS, true);
    } catch (er) {
      BStackLogger.debug(`[Performance Upload] Failed to upload events: ${util2.format(er)}`);
      this.end(EVENTS.SDK_KEY_METRICS_PREPARATION, false, er);
      this.end(EVENTS.SDK_SEND_KEY_METRICS, false, er);
    }
    try {
      if (await fsPromise.access(this.jsonReportDirPath).then(() => true, () => false)) {
        const files = await fsPromise.readdir(this.jsonReportDirPath);
        for (const file of files) {
          await fsPromise.unlink(path4.join(this.jsonReportDirPath, file));
        }
        BStackLogger.debug(`[Performance Upload] Cleaned up ${files.length} temporary report files`);
      }
    } catch (er) {
      BStackLogger.debug(`[Performance Upload] Failed to delete temporary files: ${util2.format(er)}`);
    }
  }
};

// src/testHub/utils.ts
var handleErrorForObservability = (error) => {
  process.env[BROWSERSTACK_OBSERVABILITY] = "false";
  logBuildError(error, "Test Reporting and Analytics");
};
var handleErrorForAccessibility = (error) => {
  process.env[BROWSERSTACK_ACCESSIBILITY] = "false";
  logBuildError(error, "accessibility");
};
var logBuildError = (error, product = "") => {
  if (!error || !error.errors) {
    BStackLogger.error(`${product.toUpperCase()} Build creation failed ${error}`);
    return;
  }
  for (const errorJson of error.errors) {
    const errorType = errorJson.key;
    const errorMessage = errorJson.message;
    if (errorMessage) {
      switch (errorType) {
        case "ERROR_INVALID_CREDENTIALS":
          BStackLogger.error(errorMessage);
          break;
        case "ERROR_ACCESS_DENIED":
          BStackLogger.info(errorMessage);
          break;
        case "ERROR_SDK_DEPRECATED":
          BStackLogger.error(errorMessage);
          break;
        default:
          BStackLogger.error(errorMessage);
      }
    }
  }
};
var getProductMapForBuildStartCall = (config, accessibilityAutomation) => {
  const lts = isLoadTestingSession();
  const entries = [
    ["observability", config.testObservability.enabled],
    ["accessibility", accessibilityAutomation],
    ["percy", config.percy],
    ["automate", lts ? false : config.automate],
    ["app_automate", config.appAutomate]
  ];
  if (lts) {
    entries.push(["lts", true]);
  }
  return Object.fromEntries(entries.filter(([, v]) => v !== null));
};

// src/testorchestration/testorcherstrationutils.ts
import fs5 from "node:fs";
var RUN_SMART_SELECTION = "runSmartSelection";
var ALLOWED_ORCHESTRATION_KEYS = [
  RUN_SMART_SELECTION
];
var isPlainObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
var asString = (value) => {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return value.toString();
  }
  return void 0;
};
var TestOrdering = class {
  enabled;
  name;
  constructor() {
    this.enabled = false;
    this.name = null;
  }
  enable(name) {
    this.enabled = true;
    this.name = name;
  }
  disable() {
    this.enabled = false;
    this.name = null;
  }
  getEnabled() {
    return this.enabled;
  }
  getName() {
    return this.name;
  }
};
var OrchestrationUtils = class _OrchestrationUtils {
  static _instance = null;
  runSmartSelection;
  smartSelectionMode;
  testOrdering;
  smartSelectionSource;
  projectName;
  buildName;
  buildIdentifier;
  /**
   * @param config Configuration object
   */
  constructor(config) {
    this.runSmartSelection = false;
    this.smartSelectionMode = SMART_SELECTION_MODE_RELEVANT_FIRST;
    this.testOrdering = new TestOrdering();
    this.smartSelectionSource = null;
    const configRecord = isPlainObject(config) ? config : {};
    let testOrchOptions = isPlainObject(configRecord.testOrchestrationOptions) ? configRecord.testOrchestrationOptions : {};
    const services = Array.isArray(configRecord.services) ? configRecord.services : void 0;
    if (Object.keys(testOrchOptions).length === 0 && Array.isArray(services)) {
      for (const service of services) {
        if (Array.isArray(service) && service[0] === "browserstack" && isPlainObject(service[1]) && isPlainObject(service[1].testOrchestrationOptions)) {
          testOrchOptions = service[1].testOrchestrationOptions;
          BStackLogger.debug("[constructor] Found testOrchestrationOptions in browserstack service config");
          break;
        }
      }
    }
    const runSmartSelectionOpts = isPlainObject(testOrchOptions[RUN_SMART_SELECTION]) ? testOrchOptions[RUN_SMART_SELECTION] : {};
    this._setRunSmartSelection(
      runSmartSelectionOpts.enabled ?? false,
      runSmartSelectionOpts.mode || SMART_SELECTION_MODE_RELEVANT_FIRST,
      runSmartSelectionOpts.source ?? null
    );
    this._extractBuildDetails(config);
  }
  /**
   * Extract build details from capabilities
   */
  _extractBuildDetails(config) {
    try {
      const configRecord = isPlainObject(config) ? config : {};
      const capabilities = configRecord.capabilities;
      if (Array.isArray(capabilities)) {
        capabilities.forEach((capability) => this._parseCapability(capability));
      } else if (isPlainObject(capabilities)) {
        Object.values(capabilities).forEach((caps) => {
          if (isPlainObject(caps) && "capabilities" in caps && isPlainObject(caps.capabilities)) {
            this._parseCapability(caps.capabilities);
          }
        });
      }
      BStackLogger.debug(`[_extractBuildDetails] Extracted - projectName: ${this.projectName}, buildName: ${this.buildName}, buildIdentifier: ${this.buildIdentifier}`);
    } catch (error) {
      BStackLogger.error(`[_extractBuildDetails] ${error}`);
    }
  }
  _parseCapability(capability) {
    if (!isPlainObject(capability)) {
      return;
    }
    const bstackOptionsRaw = capability["bstack:options"];
    if (isPlainObject(bstackOptionsRaw)) {
      const buildName = asString(bstackOptionsRaw.buildName);
      const projectName = asString(bstackOptionsRaw.projectName);
      const buildIdentifier = asString(bstackOptionsRaw.buildIdentifier);
      if (buildName) {
        this.buildName = buildName;
      }
      if (projectName) {
        this.projectName = projectName;
      }
      if (buildIdentifier) {
        this.buildIdentifier = buildIdentifier;
      }
    } else {
      const legacyBuildIdentifier = asString(capability["browserstack.buildIdentifier"]);
      const legacyBuildName = asString(capability.build);
      if (legacyBuildIdentifier) {
        this.buildIdentifier = legacyBuildIdentifier;
      }
      if (legacyBuildName) {
        this.buildName = legacyBuildName;
      }
    }
  }
  /**
   * Get or create an instance of OrchestrationUtils
   */
  static getInstance(config) {
    if (!_OrchestrationUtils._instance && config) {
      _OrchestrationUtils._instance = new _OrchestrationUtils(config);
    }
    return _OrchestrationUtils._instance;
  }
  /**
   * Get orchestration data from config
   */
  static getOrchestrationData(config) {
    const configRecord = isPlainObject(config) ? config : {};
    const orchestrationData = isPlainObject(configRecord.testOrchestrationOptions) ? configRecord.testOrchestrationOptions : {};
    const result = {};
    Object.entries(orchestrationData).forEach(([key, value]) => {
      if (ALLOWED_ORCHESTRATION_KEYS.includes(key)) {
        result[key] = value;
      }
    });
    return result;
  }
  /**
   * Get run smart selection setting
   */
  getRunSmartSelection() {
    return this.runSmartSelection;
  }
  /**
   * Get smart selection mode
   */
  getSmartSelectionMode() {
    return this.smartSelectionMode;
  }
  /**
   * Get smart selection source
   */
  getSmartSelectionSource() {
    return this.smartSelectionSource;
  }
  /**
   * Get project name
   */
  getProjectName() {
    return this.projectName;
  }
  /**
   * Get build name
   */
  getBuildName() {
    return this.buildName;
  }
  /**
   * Get build identifier
   */
  getBuildIdentifier() {
    return this.buildIdentifier;
  }
  /**
   * Set build details
   */
  setBuildDetails(projectName, buildName, buildIdentifier) {
    this.projectName = projectName;
    this.buildName = buildName;
    this.buildIdentifier = buildIdentifier;
    BStackLogger.debug(`[setBuildDetails] Set - projectName: ${this.projectName}, buildName: ${this.buildName}, buildIdentifier: ${this.buildIdentifier}`);
  }
  /**
   * Set run smart selection
   */
  _setRunSmartSelection(enabled, mode, source = null) {
    try {
      this.runSmartSelection = isValidEnabledValue(enabled);
      this.smartSelectionMode = mode;
      this.smartSelectionSource = [];
      BStackLogger.debug(`Setting runSmartSelection: enabled=${this.runSmartSelection}, mode=${this.smartSelectionMode}`);
      if (this.runSmartSelection) {
        const validModes = [SMART_SELECTION_MODE_RELEVANT_FIRST, SMART_SELECTION_MODE_RELEVANT_ONLY];
        if (!validModes.includes(this.smartSelectionMode)) {
          BStackLogger.warn(`Invalid smart selection mode '${this.smartSelectionMode}' provided. Defaulting to '${SMART_SELECTION_MODE_RELEVANT_FIRST}'.`);
          this.smartSelectionMode = SMART_SELECTION_MODE_RELEVANT_FIRST;
        }
        if (source === null) {
          this.smartSelectionSource = null;
          BStackLogger.debug("No source provided for smart selection; defaulting to null.");
        } else if (Array.isArray(source)) {
          this.smartSelectionSource = source;
          BStackLogger.debug(`Smart selection source set to array: ${JSON.stringify(source)}`);
        } else if (typeof source === "string" && source.endsWith(".json")) {
          this.smartSelectionSource = this._loadSourceFromFile(source) || [];
          BStackLogger.debug(`Smart selection source loaded from file: ${source}`);
        }
        this._setTestOrdering();
      }
    } catch (e) {
      BStackLogger.error(`[_setRunSmartSelection] ${e}`);
    }
  }
  /**
   * Parse JSON source configuration file and format it for smart selection.
   *
   * @param filePath - Path to the JSON configuration file
   * @returns Formatted list of repository configurations
   */
  _loadSourceFromFile(filePath) {
    if (!fs5.existsSync(filePath)) {
      BStackLogger.error(`Source file '${filePath}' does not exist.`);
      return [];
    }
    let data = null;
    try {
      const fileContent = fs5.readFileSync(filePath, "utf8");
      data = JSON.parse(fileContent);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      BStackLogger.error(`Error parsing JSON from source file '${filePath}': ${message}`);
      return [];
    }
    let featureBranchEnvMap = null;
    const loadFeatureBranchMaps = () => {
      const envVar = process.env.BROWSERSTACK_ORCHESTRATION_SMART_SELECTION_FEATURE_BRANCHES || "";
      let envMap = {};
      try {
        envMap = envVar.startsWith("{") && envVar.endsWith("}") ? JSON.parse(envVar) : envVar.split(",").filter((item) => item.includes(":")).reduce((acc, item) => {
          const [key, value] = item.split(":");
          if (key && value) {
            acc[key.trim()] = value.trim();
          }
          return acc;
        }, {});
      } catch (error) {
        BStackLogger.error(`Error parsing feature branch mappings: ${error}`);
      }
      BStackLogger.debug(`Feature branch mappings from env: ${JSON.stringify(envMap)}`);
      return envMap;
    };
    featureBranchEnvMap = loadFeatureBranchMaps();
    const getFeatureBranch = (name, repoInfo) => {
      if (featureBranchEnvMap && featureBranchEnvMap[name]) {
        return featureBranchEnvMap[name];
      }
      if (repoInfo.featureBranch) {
        return repoInfo.featureBranch;
      }
      return null;
    };
    if (typeof data === "object" && data !== null && !Array.isArray(data)) {
      const formattedData = [];
      const namePattern = /^[A-Z0-9_]+$/;
      for (const [name, repoInfo] of Object.entries(data)) {
        if (!isPlainObject(repoInfo)) {
          continue;
        }
        const typedRepoInfo = repoInfo;
        if (!typedRepoInfo.url || typeof typedRepoInfo.url !== "string") {
          BStackLogger.warn(`Repository URL is missing or invalid for source '${name}': ${JSON.stringify(repoInfo)}`);
          continue;
        }
        if (typedRepoInfo.baseBranch !== void 0 && typeof typedRepoInfo.baseBranch !== "string") {
          BStackLogger.warn(`Base branch must be a string for source '${name}': ${JSON.stringify(repoInfo)}`);
          continue;
        }
        if (typedRepoInfo.featureBranch !== void 0 && typeof typedRepoInfo.featureBranch !== "string") {
          BStackLogger.warn(`Feature branch must be a string for source '${name}': ${JSON.stringify(repoInfo)}`);
          continue;
        }
        if (!namePattern.test(name)) {
          BStackLogger.warn(`Invalid source identifier format for '${name}': ${JSON.stringify(repoInfo)}`);
          continue;
        }
        if (name.length > 30 || name.length < 1) {
          BStackLogger.warn(`Source identifier '${name}' must have a length between 1 and 30 characters.`);
          continue;
        }
        const featureBranch = getFeatureBranch(name, typedRepoInfo);
        const filteredRepoInfo = {
          name,
          url: typedRepoInfo.url,
          featureBranch: featureBranch ?? void 0
        };
        if (typedRepoInfo.baseBranch) {
          filteredRepoInfo.baseBranch = typedRepoInfo.baseBranch;
        }
        if (!filteredRepoInfo.featureBranch || filteredRepoInfo.featureBranch === "") {
          BStackLogger.warn(`Feature branch not specified for source '${name}': ${JSON.stringify(repoInfo)}`);
          continue;
        }
        if (filteredRepoInfo.baseBranch && filteredRepoInfo.baseBranch === filteredRepoInfo.featureBranch) {
          BStackLogger.warn(`Feature branch and base branch cannot be the same for source '${name}': ${JSON.stringify(repoInfo)}`);
          continue;
        }
        formattedData.push(filteredRepoInfo);
      }
      return formattedData;
    }
    if (Array.isArray(data)) {
      return data.filter(isPlainObject);
    }
    return [];
  }
  /**
   * Set test ordering based on priorities
   */
  _setTestOrdering() {
    if (this.runSmartSelection) {
      this.testOrdering.enable(RUN_SMART_SELECTION);
    } else {
      this.testOrdering.disable();
    }
  }
  /**
   * Check if test ordering is enabled
   */
  testOrderingEnabled() {
    return this.testOrdering.getEnabled();
  }
  /**
   * Get test ordering name
   */
  getTestOrderingName() {
    if (this.testOrdering.getEnabled()) {
      return this.testOrdering.getName();
    }
    return null;
  }
  /**
   * Get test orchestration metadata
   */
  getTestOrchestrationMetadata() {
    const data = {
      "run_smart_selection": {
        "enabled": this.getRunSmartSelection(),
        "mode": this.getSmartSelectionMode(),
        "source": this.getSmartSelectionSource()
      }
    };
    return data;
  }
  /**
   * Get build start data
   */
  getBuildStartData() {
    return {
      run_smart_selection: {
        enabled: this.getRunSmartSelection(),
        mode: this.getSmartSelectionMode()
        // Not sending "source" to TH builds
      }
    };
  }
};

// src/crash-reporter.ts
var CrashReporter = class {
  /* User test config for build run minus PII */
  static userConfigForReporting = {};
  /* User credentials used for reporting crashes in browserstack service */
  static credentialsForCrashReportUpload = {};
  static setCredentialsForCrashReportUpload(options, config) {
    this.credentialsForCrashReportUpload = {
      username: getObservabilityUser(options, config),
      password: getObservabilityKey(options, config)
    };
    process.env.CREDENTIALS_FOR_CRASH_REPORTING = JSON.stringify(this.credentialsForCrashReportUpload);
  }
  static setConfigDetails(userConfig, capabilities, options) {
    const configWithoutPII = this.filterPII(userConfig);
    const filteredCapabilities = this.filterCapabilities(capabilities);
    this.userConfigForReporting = {
      framework: userConfig.framework,
      services: configWithoutPII.services,
      capabilities: filteredCapabilities,
      env: {
        "BROWSERSTACK_BUILD": process.env.BROWSERSTACK_BUILD,
        "BROWSERSTACK_BUILD_NAME": process.env.BROWSERSTACK_BUILD_NAME,
        "BUILD_TAG": process.env.BUILD_TAG
      }
    };
    process.env.USER_CONFIG_FOR_REPORTING = JSON.stringify(this.userConfigForReporting);
    this.setCredentialsForCrashReportUpload(options, userConfig);
  }
  static async uploadCrashReport(exception, stackTrace) {
    try {
      if (!this.credentialsForCrashReportUpload.username || !this.credentialsForCrashReportUpload.password) {
        this.credentialsForCrashReportUpload = process.env.CREDENTIALS_FOR_CRASH_REPORTING !== void 0 ? JSON.parse(process.env.CREDENTIALS_FOR_CRASH_REPORTING) : this.credentialsForCrashReportUpload;
      }
    } catch (error) {
      return BStackLogger.error(`[Crash_Report_Upload] Failed to parse user credentials while reporting crash due to ${error}`);
    }
    if (!this.credentialsForCrashReportUpload.username || !this.credentialsForCrashReportUpload.password) {
      return BStackLogger.error("[Crash_Report_Upload] Failed to parse user credentials while reporting crash");
    }
    try {
      if (Object.keys(this.userConfigForReporting).length === 0) {
        this.userConfigForReporting = process.env.USER_CONFIG_FOR_REPORTING !== void 0 ? JSON.parse(process.env.USER_CONFIG_FOR_REPORTING) : {};
      }
    } catch (error) {
      BStackLogger.error(`[Crash_Report_Upload] Failed to parse user config while reporting crash due to ${error}`);
      this.userConfigForReporting = {};
    }
    const data = {
      hashed_id: process.env[BROWSERSTACK_TESTHUB_UUID],
      observability_version: {
        frameworkName: WDIO_NAMING_PREFIX + (this.userConfigForReporting.framework || "null"),
        sdkVersion: BSTACK_SERVICE_VERSION
      },
      exception: {
        error: exception.toString(),
        stackTrace
      },
      config: this.userConfigForReporting
    };
    const url = `${APIUtils.DATA_ENDPOINT}/api/v1/analytics`;
    const encodedAuth = Buffer.from(`${this.credentialsForCrashReportUpload.username}:${this.credentialsForCrashReportUpload.password}`, "utf8").toString("base64");
    const headers = {
      ...DEFAULT_REQUEST_CONFIG.headers,
      Authorization: `Basic ${encodedAuth}`
    };
    const response = await _fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers
    });
    if (response.ok) {
      let body = await response.text();
      try {
        body = JSON.stringify(JSON.parse(body));
      } catch {
      }
      BStackLogger.debug(`[Crash_Report_Upload] Success response: ${body}`);
    } else {
      BStackLogger.error(`[Crash_Report_Upload] Failed due to ${response.body}`);
    }
  }
  static recursivelyRedactKeysFromObject(obj, keys) {
    if (!obj) {
      return;
    }
    if (Array.isArray(obj)) {
      obj.map((ele) => this.recursivelyRedactKeysFromObject(ele, keys));
    } else {
      for (const prop in obj) {
        if (keys.includes(prop.toLowerCase())) {
          obj[prop] = "[REDACTED]";
        } else if (typeof obj[prop] === "object" && obj[prop] !== null) {
          this.recursivelyRedactKeysFromObject(obj[prop], keys);
        } else if (typeof obj[prop] === "string") {
          try {
            const parsed = JSON.parse(obj[prop]);
            if (typeof parsed === "object" && parsed !== null) {
              this.recursivelyRedactKeysFromObject(parsed, keys);
              obj[prop] = JSON.stringify(parsed);
            }
          } catch {
          }
        }
      }
    }
  }
  static deletePIIKeysFromObject(obj) {
    if (!obj) {
      return;
    }
    ["user", "username", "key", "accessKey"].forEach((key) => delete obj[key]);
  }
  static filterCapabilities(capabilities) {
    const capsCopy = JSON.parse(JSON.stringify(capabilities));
    this.recursivelyRedactKeysFromObject(capsCopy, ["extensions"]);
    return capsCopy;
  }
  static filterPII(userConfig) {
    const configWithoutPII = JSON.parse(JSON.stringify(userConfig));
    this.deletePIIKeysFromObject(configWithoutPII);
    const finalServices = [];
    const initialServices = configWithoutPII.services;
    delete configWithoutPII.services;
    try {
      for (const serviceArray of initialServices) {
        if (Array.isArray(serviceArray) && serviceArray.length >= 2 && serviceArray[0] === "browserstack") {
          for (let idx = 1; idx < serviceArray.length; idx++) {
            this.deletePIIKeysFromObject(serviceArray[idx]);
            if (serviceArray[idx]) {
              this.deletePIIKeysFromObject(serviceArray[idx].testReportingOptions);
              this.deletePIIKeysFromObject(serviceArray[idx].testObservabilityOptions);
            }
          }
          finalServices.push(serviceArray);
          break;
        }
      }
    } catch (err) {
      BStackLogger.error(`Error in parsing user config PII with error ${err ? err.stack || err : err}`);
      return configWithoutPII;
    }
    configWithoutPII.services = finalServices;
    return configWithoutPII;
  }
};

// src/configCapture.ts
import fs6 from "node:fs";
import path5 from "node:path";
var isReadableFile = (filePath) => {
  try {
    return fs6.existsSync(filePath) && fs6.statSync(filePath).isFile();
  } catch {
    return false;
  }
};
var resolveCandidate = (value) => {
  if (typeof value !== "string" || !value.trim()) {
    return void 0;
  }
  try {
    const full = path5.resolve(process.cwd(), value.trim());
    const ext = path5.extname(full);
    const stem = SUPPORTED_WDIO_CONFIG_EXTENSIONS.includes(ext) ? full.slice(0, -ext.length) : full;
    return [full, ...SUPPORTED_WDIO_CONFIG_EXTENSIONS.map((e) => `${stem}${e}`)].find(isReadableFile);
  } catch {
    return void 0;
  }
};
var relativeToCwd = (filePath) => {
  try {
    return path5.relative(process.cwd(), filePath) || path5.basename(filePath);
  } catch {
    return path5.basename(filePath);
  }
};
var relativeDirToCwd = (dir) => {
  try {
    return path5.relative(process.cwd(), dir) || ".";
  } catch {
    return ".";
  }
};
function resolveWdioConfigPath(config) {
  const record = config || {};
  try {
    const positionals = Array.isArray(record._) ? record._ : [];
    const positional = positionals.filter(
      (entry) => typeof entry === "string" && !WDIO_CLI_SUBCOMMANDS.includes(entry)
    )[0];
    const rootDir = typeof record.rootDir === "string" ? record.rootDir : void 0;
    const rungs = [
      ["env_override", process.env[BROWSERSTACK_WDIO_CONFIG_FILE_PATH]],
      ["cli_config_path", record["config-path"]],
      ["config_positional", positional],
      ["root_dir_default", rootDir && path5.join(rootDir, DEFAULT_WDIO_CONFIG_BASENAME)],
      ["cwd_default", DEFAULT_WDIO_CONFIG_BASENAME]
    ];
    for (const [strategy, value] of rungs) {
      const configPath = resolveCandidate(value);
      if (configPath) {
        return { configPath, strategy };
      }
    }
    return { reason: "config_not_found" };
  } catch {
    return { reason: "config_resolve_exception" };
  }
}
function initWdioConfigPath(config) {
  try {
    const alreadyResolved = process.env[BROWSERSTACK_WDIO_CONFIG_FILE_PATH];
    if (alreadyResolved) {
      return {
        configPath: alreadyResolved,
        strategy: process.env[BROWSERSTACK_WDIO_CONFIG_STRATEGY] || "env_override"
      };
    }
    const resolution = resolveWdioConfigPath(config);
    if (resolution.configPath) {
      process.env[BROWSERSTACK_WDIO_CONFIG_FILE_PATH] = resolution.configPath;
      if (resolution.strategy) {
        process.env[BROWSERSTACK_WDIO_CONFIG_STRATEGY] = resolution.strategy;
      }
      BStackLogger.debug(`Resolved wdio config file ${relativeToCwd(resolution.configPath)} for auto-capture (strategy ${resolution.strategy})`);
    } else {
      BStackLogger.debug(`Could not resolve wdio config file for auto-capture: ${resolution.reason}`);
    }
    return resolution;
  } catch (error) {
    BStackLogger.debug(`Error while resolving wdio config file: ${error}`);
    return { reason: "config_resolve_exception" };
  }
}
function isAutoCaptureLogsDisabled(options) {
  if (options?.disableAutoCaptureLogs === true) {
    return true;
  }
  return String(process.env[BROWSERSTACK_DISABLE_AUTO_CAPTURE_LOGS] || "").toLowerCase() === "true";
}
function redactSensitiveContent(text) {
  if (!text) {
    return text;
  }
  const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const keys = [...REDACTED_KEYS].sort((a, b) => b.length - a.length).map(escapeRegex).join("|");
  const redactRegex = new RegExp(`^.*?(?<![A-Za-z0-9_$])(${keys})(?![A-Za-z0-9_$]).*$`, "gmi");
  const compoundCamelRegex = new RegExp(
    `^.*?(?<![A-Za-z0-9_$])([A-Za-z0-9_$]{1,64}(?:${COMPOUND_SECRET_SUFFIXES_CAMEL}))\\s*[:=].*$`,
    "gm"
  );
  const compoundSnakeRegex = new RegExp(
    `^.*?(?<![A-Za-z0-9_$])([A-Za-z0-9_$]{0,64}_(?:${COMPOUND_SECRET_SUFFIXES_SNAKE}))\\s*[:=].*$`,
    "gmi"
  );
  return text.toString().replace(PEM_BLOCK_REGEX, "$1[REDACTED]$2").replace(PEM_UNTERMINATED_REGEX, "$1[REDACTED]").replace(URL_USERINFO_REGEX, "$1[REDACTED]@").replace(redactRegex, "$1: [REDACTED]").replace(compoundCamelRegex, "$1: [REDACTED]").replace(compoundSnakeRegex, "$1: [REDACTED]");
}
var readCappedFile = (filePath) => {
  try {
    const size = fs6.statSync(filePath).size;
    if (size > MAX_CAPTURED_CONFIG_FILE_BYTES) {
      return { reason: `${path5.basename(filePath)}: too_large (${size} bytes)` };
    }
    return { content: fs6.readFileSync(filePath, "utf8") };
  } catch (error) {
    return { reason: `${path5.basename(filePath)}: ${error?.message || String(error)}` };
  }
};
var isConfigFileName = (filePath) => /\.conf(ig)?\.[^.]+$/i.test(path5.basename(filePath));
var resolveRelativeImport = (specifier, fromFile) => {
  const base = path5.resolve(path5.dirname(fromFile), specifier);
  if (isReadableFile(base) && SUPPORTED_WDIO_CONFIG_EXTENSIONS.includes(path5.extname(base))) {
    return isConfigFileName(base) ? base : void 0;
  }
  const withoutExt = SUPPORTED_WDIO_CONFIG_EXTENSIONS.includes(path5.extname(base)) ? base.slice(0, -path5.extname(base).length) : base;
  for (const ext of SUPPORTED_WDIO_CONFIG_EXTENSIONS) {
    const candidate = `${withoutExt}${ext}`;
    if (isReadableFile(candidate) && isConfigFileName(candidate)) {
      return candidate;
    }
  }
  for (const ext of SUPPORTED_WDIO_CONFIG_EXTENSIONS) {
    const candidate = path5.join(base, `index${ext}`);
    if (isReadableFile(candidate) && isConfigFileName(candidate)) {
      return candidate;
    }
  }
  return void 0;
};
var collectLocalImports = (entryPath, entryContent, budget) => {
  const found = [];
  const seen = /* @__PURE__ */ new Set([entryPath]);
  let frontier = [{ filePath: entryPath, content: entryContent }];
  for (let depth = 0; depth < CAPTURE_CONFIG_IMPORT_DEPTH && found.length < budget; depth++) {
    const next = [];
    for (const { filePath, content } of frontier) {
      const importRegex = /(?:from|import|require)\s*\(?\s*['"](\.[^'"]*)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        if (found.length >= budget) {
          break;
        }
        const resolved = resolveRelativeImport(match[1], filePath);
        if (!resolved || seen.has(resolved) || resolved.includes(`${path5.sep}node_modules${path5.sep}`)) {
          continue;
        }
        seen.add(resolved);
        const { content: importedContent } = readCappedFile(resolved);
        if (importedContent === void 0) {
          continue;
        }
        found.push({ filePath: resolved, content: importedContent });
        next.push({ filePath: resolved, content: importedContent });
      }
    }
    if (next.length === 0) {
      break;
    }
    frontier = next;
  }
  return found;
};
function dedupeEntryName(filePath, taken) {
  const base = path5.basename(filePath);
  if (!taken.has(base)) {
    taken.add(base);
    return base;
  }
  const ext = path5.extname(base);
  const stem = ext ? base.slice(0, -ext.length) : base;
  let index = 1;
  let candidate = `${stem}.${index}${ext}`;
  while (taken.has(candidate)) {
    index++;
    candidate = `${stem}.${index}${ext}`;
  }
  taken.add(candidate);
  return candidate;
}
function collectConfigFilesForUpload(config) {
  const failures = [];
  const files = [];
  const takenNames = /* @__PURE__ */ new Set();
  try {
    const resolution = initWdioConfigPath(config);
    if (!resolution.configPath) {
      failures.push(resolution.reason || "config_not_found");
      return { files, failures };
    }
    const { content, reason } = readCappedFile(resolution.configPath);
    if (content === void 0) {
      failures.push(reason || "config_read_failed");
      return { files, failures, strategy: resolution.strategy };
    }
    files.push({
      name: dedupeEntryName(resolution.configPath, takenNames),
      sourcePath: resolution.configPath,
      content: redactSensitiveContent(content)
    });
    const remaining = MAX_CAPTURED_CONFIG_FILES - files.length;
    if (remaining > 0) {
      for (const imported of collectLocalImports(resolution.configPath, content, remaining)) {
        files.push({
          name: dedupeEntryName(imported.filePath, takenNames),
          sourcePath: imported.filePath,
          content: redactSensitiveContent(imported.content)
        });
      }
    }
    return { files, failures, strategy: resolution.strategy };
  } catch (error) {
    failures.push(`config_capture_exception: ${error?.message || String(error)}`);
    return { files, failures };
  }
}
var findUpwards = (startDir, fileName) => {
  let current = startDir;
  for (let depth = 0; depth <= MAX_PACKAGE_JSON_WALK_UP; depth++) {
    const candidate = path5.join(current, fileName);
    if (isReadableFile(candidate)) {
      return candidate;
    }
    const parent = path5.dirname(current);
    if (parent === current) {
      break;
    }
    current = parent;
  }
  return void 0;
};
function findPackageJsonForUpload() {
  const configPath = process.env[BROWSERSTACK_WDIO_CONFIG_FILE_PATH];
  const startDirs = [configPath ? path5.dirname(configPath) : void 0, process.cwd()].filter((dir) => Boolean(dir));
  for (const dir of Array.from(new Set(startDirs))) {
    const found = findUpwards(dir, "package.json");
    if (found) {
      return found;
    }
  }
  return void 0;
}

// src/testOps/featureStats.ts
var FeatureStats = class _FeatureStats {
  triggeredCount = 0;
  sentCount = 0;
  failedCount = 0;
  groups = {};
  mark(status, groupId) {
    switch (status) {
      case "triggered":
        this.triggered(groupId);
        break;
      case "success":
      case "sent":
        this.sent(groupId);
        break;
      case "failed":
        this.failed(groupId);
        break;
      default:
        BStackLogger.debug("Request to mark usage for unknown status - " + status);
        break;
    }
  }
  triggered(groupId) {
    this.triggeredCount += 1;
    if (groupId) {
      this.createGroup(groupId).triggered();
    }
  }
  sent(groupId) {
    this.sentCount += 1;
    if (groupId) {
      this.createGroup(groupId).sent();
    }
  }
  failed(groupId) {
    this.failedCount += 1;
    if (groupId) {
      this.createGroup(groupId).failed();
    }
  }
  success(groupId) {
    this.sent(groupId);
  }
  createGroup(groupId) {
    if (!this.groups[groupId]) {
      this.groups[groupId] = new _FeatureStats();
    }
    return this.groups[groupId];
  }
  getTriggeredCount() {
    return this.triggeredCount;
  }
  getSentCount() {
    return this.sentCount;
  }
  getFailedCount() {
    return this.failedCount;
  }
  getUsageForGroup(groupId) {
    return this.groups[groupId] || new _FeatureStats();
  }
  getOverview() {
    return { triggeredCount: this.triggeredCount, sentCount: this.sentCount, failedCount: this.failedCount };
  }
  getGroups() {
    return this.groups;
  }
  add(featureStats) {
    this.triggeredCount += featureStats.getTriggeredCount();
    this.sentCount += featureStats.getSentCount();
    this.failedCount += featureStats.getFailedCount();
    Object.entries(featureStats.getGroups()).forEach(([groupId, group]) => {
      this.createGroup(groupId).add(group);
    });
  }
  // omitGroups: true/false -> Include groups or not
  // onlyGroups: true/false -> data includes only groups
  // nestedGroups: true/false -> groups will be nested in groups if true
  toJSON(config = {}) {
    const overviewData = !config.onlyGroups ? {
      triggeredCount: this.triggeredCount,
      sentCount: this.sentCount,
      failedCount: this.failedCount
    } : {};
    const groupsData = {};
    if (!config.omitGroups) {
      Object.entries(this.groups).forEach(([groupId, group2]) => {
        groupsData[groupId] = group2.toJSON();
      });
    }
    const group = config.nestedGroups ? { groups: groupsData } : groupsData;
    return {
      ...overviewData,
      ...group
    };
  }
  static fromJSON(json) {
    const stats = new _FeatureStats();
    if (!json || isObjectEmpty(json)) {
      return stats;
    }
    stats.triggeredCount = json.triggeredCount;
    stats.sentCount = json.sentCount;
    stats.failedCount = json.failedCount;
    if (!json.groups) {
      return stats;
    }
    Object.entries(json.groups).forEach(([groupId, group]) => {
      stats.groups[groupId] = _FeatureStats.fromJSON(group);
    });
    return stats;
  }
};
var featureStats_default = FeatureStats;

// src/testOps/featureUsage.ts
var FeatureUsage = class {
  isTriggered;
  status;
  error;
  constructor(isTriggered) {
    if (isTriggered !== void 0) {
      this.isTriggered = isTriggered;
    }
  }
  getTriggered() {
    return this.isTriggered;
  }
  setTriggered(triggered) {
    this.isTriggered = triggered;
  }
  setStatus(status) {
    this.status = status;
  }
  setError(error) {
    this.error = error;
  }
  triggered() {
    this.isTriggered = true;
  }
  failed(e) {
    this.status = "failed";
    this.error = getErrorString(e);
  }
  success() {
    this.status = "success";
  }
  getStatus() {
    return this.status;
  }
  getError() {
    return this.error;
  }
  toJSON() {
    return {
      isTriggered: this.isTriggered,
      status: this.status,
      error: this.error
    };
  }
};
var featureUsage_default = FeatureUsage;

// src/testOps/testOpsConfig.ts
var TestOpsConfig = class _TestOpsConfig {
  constructor(enabled = true, manuallySet = false) {
    this.enabled = enabled;
    this.manuallySet = manuallySet;
    _TestOpsConfig._instance = this;
  }
  enabled;
  manuallySet;
  static _instance;
  buildStopped = false;
  buildHashedId;
  static getInstance(...args) {
    if (!this._instance) {
      this._instance = new _TestOpsConfig(...args);
    }
    return this._instance;
  }
};
var testOpsConfig_default = TestOpsConfig;

// src/testOps/usageStats.ts
var UsageStats = class _UsageStats {
  static instance;
  testStartedStats;
  testFinishedStats;
  hookStartedStats;
  hookFinishedStats;
  cbtSessionStats;
  logStats;
  launchBuildUsage;
  stopBuildUsage;
  static getInstance() {
    if (!_UsageStats.instance) {
      _UsageStats.instance = new _UsageStats();
    }
    return _UsageStats.instance;
  }
  constructor() {
    this.testStartedStats = new featureStats_default();
    this.testFinishedStats = new featureStats_default();
    this.hookStartedStats = new featureStats_default();
    this.hookFinishedStats = new featureStats_default();
    this.cbtSessionStats = new featureStats_default();
    this.logStats = new featureStats_default();
    this.launchBuildUsage = new featureUsage_default();
    this.stopBuildUsage = new featureUsage_default();
  }
  add(usageStats) {
    this.testStartedStats.add(usageStats.testStartedStats);
    this.testFinishedStats.add(usageStats.testFinishedStats);
    this.hookStartedStats.add(usageStats.hookStartedStats);
    this.hookFinishedStats.add(usageStats.hookFinishedStats);
    this.cbtSessionStats.add(usageStats.cbtSessionStats);
    this.logStats.add(usageStats.logStats);
  }
  getFormattedData(workersData) {
    this.addDataFromWorkers(workersData);
    const testOpsConfig = testOpsConfig_default.getInstance();
    const usage = {
      enabled: testOpsConfig.enabled,
      manuallySet: testOpsConfig.manuallySet,
      buildHashedId: testOpsConfig.buildHashedId
    };
    if (!usage.enabled) {
      return usage;
    }
    try {
      usage.events = this.getEventsData();
    } catch (e) {
      BStackLogger.debug("exception in getFormattedData: " + e);
    }
    return usage;
  }
  addDataFromWorkers(workersData) {
    workersData.map((workerData) => {
      try {
        const usageStatsForWorker = _UsageStats.fromJSON(workerData.usageStats);
        this.add(usageStatsForWorker);
      } catch (e) {
        BStackLogger.debug("Exception in adding workerData: " + e);
      }
    });
  }
  getEventsData() {
    return {
      buildEvents: {
        started: this.launchBuildUsage.toJSON(),
        finished: this.stopBuildUsage.toJSON()
      },
      testEvents: {
        started: this.testStartedStats.toJSON(),
        finished: this.testFinishedStats.toJSON({ omitGroups: true }),
        ...this.testFinishedStats.toJSON({ onlyGroups: true })
      },
      hookEvents: {
        started: this.hookStartedStats.toJSON(),
        finished: this.hookFinishedStats.toJSON({ omitGroups: true }),
        ...this.hookFinishedStats.toJSON({ onlyGroups: true })
      },
      logEvents: this.logStats.toJSON(),
      cbtSessionEvents: this.cbtSessionStats.toJSON()
    };
  }
  getDataToSave() {
    return {
      testEvents: {
        started: this.testStartedStats.toJSON(),
        finished: this.testFinishedStats.toJSON({ nestedGroups: true })
      },
      hookEvents: {
        started: this.hookStartedStats.toJSON(),
        finished: this.hookFinishedStats.toJSON({ nestedGroups: true })
      },
      logEvents: this.logStats.toJSON({ nestedGroups: true }),
      cbtSessionEvents: this.cbtSessionStats.toJSON()
    };
  }
  static fromJSON(data) {
    const usageStats = new _UsageStats();
    usageStats.testStartedStats = featureStats_default.fromJSON(data.testEvents.started);
    usageStats.testFinishedStats = featureStats_default.fromJSON(data.testEvents.finished);
    usageStats.hookStartedStats = featureStats_default.fromJSON(data.hookEvents.started);
    usageStats.hookFinishedStats = featureStats_default.fromJSON(data.hookEvents.finished);
    usageStats.logStats = featureStats_default.fromJSON(data.logEvents);
    usageStats.cbtSessionStats = featureStats_default.fromJSON(data.cbtSessionStats);
    return usageStats;
  }
};
var usageStats_default = UsageStats;

// src/util.ts
import { create } from "tar";

// src/scripts/accessibility-scripts.ts
import path6 from "node:path";
import fs7 from "node:fs";
import os from "node:os";
var AccessibilityScripts = class _AccessibilityScripts {
  static instance = null;
  performScan = null;
  getResults = null;
  getResultsSummary = null;
  saveTestResults = null;
  commandsToWrap = null;
  ChromeExtension = {};
  browserstackFolderPath = "";
  commandsPath = "";
  // don't allow to create instances from it other than through `checkAndGetInstance`
  constructor() {
    this.browserstackFolderPath = this.getWritableDir();
    this.commandsPath = path6.join(this.browserstackFolderPath, "commands.json");
  }
  static checkAndGetInstance() {
    if (!_AccessibilityScripts.instance) {
      _AccessibilityScripts.instance = new _AccessibilityScripts();
      _AccessibilityScripts.instance.readFromExistingFile();
    }
    return _AccessibilityScripts.instance;
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  getWritableDir() {
    const orderedPaths = [
      path6.join(os.homedir(), ".browserstack"),
      process.cwd(),
      os.tmpdir()
    ];
    for (const orderedPath of orderedPaths) {
      try {
        if (fs7.existsSync(orderedPath)) {
          fs7.accessSync(orderedPath);
          return orderedPath;
        }
        fs7.mkdirSync(orderedPath, { recursive: true });
        return orderedPath;
      } catch (error) {
      }
    }
    return "";
  }
  readFromExistingFile() {
    try {
      if (fs7.existsSync(this.commandsPath)) {
        const data = fs7.readFileSync(this.commandsPath, "utf8");
        if (data) {
          this.update(JSON.parse(data));
        }
      }
    } catch {
    }
  }
  update(data) {
    if (data.scripts) {
      this.performScan = data.scripts.scan;
      this.getResults = data.scripts.getResults;
      this.getResultsSummary = data.scripts.getResultsSummary;
      this.saveTestResults = data.scripts.saveResults;
    }
    if (data.commands && data.commands.length) {
      this.commandsToWrap = data.commands;
    }
    if (data.nonBStackInfraA11yChromeOptions) {
      this.ChromeExtension = data.nonBStackInfraA11yChromeOptions;
    }
  }
  store() {
    if (!fs7.existsSync(this.browserstackFolderPath)) {
      fs7.mkdirSync(this.browserstackFolderPath);
    }
    fs7.writeFileSync(this.commandsPath, JSON.stringify({
      commands: this.commandsToWrap,
      scripts: {
        scan: this.performScan,
        getResults: this.getResults,
        getResultsSummary: this.getResultsSummary,
        saveResults: this.saveTestResults
      },
      nonBStackInfraA11yChromeOptions: this.ChromeExtension
    }));
  }
};
var accessibility_scripts_default = AccessibilityScripts.checkAndGetInstance();

// src/util.ts
var pGitconfig = promisify2(gitconfig);
var DEFAULT_REQUEST_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    "X-BSTACK-OBS": "true"
  }
};
var COLORS = {
  error: "red",
  warn: "yellow",
  info: "cyanBright",
  debug: "green",
  trace: "cyan",
  progress: "magenta"
};
function processError(error, fn, args) {
  BStackLogger.error(`Error in executing ${fn.name} with args ${args}: ${error}`);
  let argsString;
  try {
    argsString = JSON.stringify(args);
  } catch {
    argsString = util3.inspect(args, { depth: 2 });
  }
  CrashReporter.uploadCrashReport(`Error in executing ${fn.name} with args ${argsString} : ${error}`, error && error.stack || "unknown error");
}
function o11yErrorHandler(fn) {
  return function(...args) {
    try {
      let functionToHandle = fn;
      if (process.env[PERF_MEASUREMENT_ENV]) {
        functionToHandle = performance2.timerify(functionToHandle);
      }
      const result = functionToHandle(...args);
      if (result instanceof Promise) {
        return result.catch((error) => processError(error, fn, args));
      }
      return result;
    } catch (error) {
      processError(error, fn, args);
    }
  };
}
async function nodeRequest(requestType, apiEndpoint, options, apiUrl, timeout = 12e4) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    const response = await _fetch(`${apiUrl}/${apiEndpoint}`, {
      method: requestType,
      signal: controller.signal,
      ...options
    });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    BStackLogger.debug(`Error in firing request ${apiUrl}/${apiEndpoint}: ${format(error)}`);
    const isLogUpload = apiEndpoint === UPLOAD_LOGS_ENDPOINT;
    if (error && error.response) {
      const errorMessageJson = error.response.body ? JSON.parse(error.response.body.toString()) : null;
      const errorMessage = errorMessageJson ? errorMessageJson.message : null;
      if (errorMessage) {
        const message = `${errorMessage} - ${error.stack}`;
        if (isLogUpload) {
          BStackLogger.debug(message);
        } else {
          BStackLogger.error(message);
        }
      }
      if (isLogUpload) {
        return;
      }
      throw error;
    } else {
      if (isLogUpload) {
        BStackLogger.debug(`Failed to fire api request due to ${error} - ${error.stack}`);
        return;
      }
      BStackLogger.debug(`Failed to fire api request due to ${error} - ${error.stack}`);
      throw error;
    }
  }
}
var processTestObservabilityResponse = (response) => {
  if (!response.observability) {
    handleErrorForObservability(null);
    return;
  }
  if (!response.observability.success) {
    handleErrorForObservability(response.observability);
    return;
  }
  process.env[BROWSERSTACK_OBSERVABILITY] = "true";
  if (response.observability.options.allow_screenshots) {
    process.env[TESTOPS_SCREENSHOT_ENV] = response.observability.options.allow_screenshots.toString();
  }
};
var jsonifyAccessibilityArray = (dataArray, keyName, valueName) => {
  const result = {};
  dataArray.forEach((element) => {
    result[element[keyName]] = element[valueName];
  });
  return result;
};
var processAccessibilityResponse = (response, options) => {
  if (!response.accessibility) {
    if (options.accessibility === true) {
      handleErrorForAccessibility(null);
    }
    return;
  }
  if (!response.accessibility.success) {
    handleErrorForAccessibility(response.accessibility);
    return;
  }
  if (response.accessibility.options) {
    const { accessibilityToken, pollingTimeout, scannerVersion } = jsonifyAccessibilityArray(response.accessibility.options.capabilities, "name", "value");
    const result = jsonifyAccessibilityArray(response.accessibility.options.capabilities, "name", "value");
    const scriptsJson = {
      "scripts": jsonifyAccessibilityArray(response.accessibility.options.scripts, "name", "command"),
      "commands": response.accessibility.options.commandsToWrap?.commands ?? [],
      "nonBStackInfraA11yChromeOptions": result["goog:chromeOptions"]
    };
    if (scannerVersion) {
      process.env.BSTACK_A11Y_SCANNER_VERSION = scannerVersion;
      BStackLogger.debug(`Accessibility scannerVersion ${scannerVersion}`);
    }
    if (accessibilityToken) {
      process.env.BSTACK_A11Y_JWT = accessibilityToken;
      process.env[BROWSERSTACK_ACCESSIBILITY] = "true";
    }
    if (pollingTimeout) {
      process.env.BSTACK_A11Y_POLLING_TIMEOUT = pollingTimeout;
    }
    if (scriptsJson) {
      accessibility_scripts_default.update(scriptsJson);
      accessibility_scripts_default.store();
    }
  }
};
var processLaunchBuildResponse = (response, options) => {
  if (options.testObservability) {
    processTestObservabilityResponse(response);
  }
  processAccessibilityResponse(response, options);
};
var launchTestSession = PerformanceTester.measureWrapper(TESTHUB_EVENTS.START, o11yErrorHandler(async function launchTestSession2(options, config, bsConfig, bStackConfig, accessibilityAutomation) {
  const launchBuildUsage = usageStats_default.getInstance().launchBuildUsage;
  launchBuildUsage.triggered();
  const data = {
    format: "json",
    project_name: getObservabilityProject(options, bsConfig.projectName),
    name: getObservabilityBuild(options, bsConfig.buildName),
    build_identifier: bsConfig.buildIdentifier,
    started_at: (/* @__PURE__ */ new Date()).toISOString(),
    tags: getObservabilityBuildTags(options, bsConfig.buildTag),
    host_info: {
      hostname: hostname2(),
      platform: platform3(),
      type: type2(),
      version: version2(),
      arch: arch3()
    },
    ci_info: getCiInfo(),
    build_run_identifier: process.env.BROWSERSTACK_BUILD_RUN_IDENTIFIER,
    failed_tests_rerun: process.env[RERUN_ENV] || false,
    version_control: await getGitMetaData(),
    accessibility: {
      settings: options.accessibilityOptions
    },
    browserstackAutomation: shouldAddServiceVersion(config, options.testObservability),
    framework_details: {
      frameworkName: WDIO_NAMING_PREFIX + config.framework,
      frameworkVersion: bsConfig.bstackServiceVersion,
      sdkVersion: bsConfig.bstackServiceVersion,
      language: "ECMAScript",
      testFramework: {
        name: "WebdriverIO",
        version: bsConfig.bstackServiceVersion
      }
    },
    product_map: getProductMapForBuildStartCall(bStackConfig, accessibilityAutomation),
    config: {},
    test_orchestration: OrchestrationUtils.getInstance(config)?.getBuildStartData() || {},
    test_management: {
      test_plan_id: getTestPlanId(options)
    }
  };
  if (accessibilityAutomation && (isTurboScale(options) || data.browserstackAutomation === false)) {
    data.accessibility.settings ??= {};
    data.accessibility.settings.includeEncodedExtension = true;
  }
  try {
    if (Object.keys(CrashReporter.userConfigForReporting).length === 0) {
      CrashReporter.userConfigForReporting = process.env.USER_CONFIG_FOR_REPORTING !== void 0 ? JSON.parse(process.env.USER_CONFIG_FOR_REPORTING) : {};
    }
  } catch (error) {
    return BStackLogger.error(`[Crash_Report_Upload] Failed to parse user config while sending build start event due to ${error}`);
  }
  data.config = CrashReporter.userConfigForReporting;
  try {
    const url = `${APIUtils.DATA_ENDPOINT}/api/v2/builds`;
    const encodedAuth = Buffer.from(`${getObservabilityUser(options, config)}:${getObservabilityKey(options, config)}`, "utf8").toString("base64");
    const headers = {
      ...DEFAULT_REQUEST_CONFIG.headers,
      Authorization: `Basic ${encodedAuth}`
    };
    const response = await _fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data)
    });
    const jsonResponse = await response.json();
    delete data?.accessibility?.settings?.includeEncodedExtension;
    BStackLogger.debug(`[Start_Build] Success response: ${JSON.stringify(jsonResponse)}`);
    BStackLogger.debug(`Test Plan Id sent in request: ${getTestPlanId(options)}`);
    process.env[TESTOPS_BUILD_COMPLETED_ENV] = "true";
    if (jsonResponse.jwt) {
      process.env[BROWSERSTACK_TESTHUB_JWT] = jsonResponse.jwt;
    }
    if (jsonResponse.build_hashed_id) {
      process.env[BROWSERSTACK_TESTHUB_UUID] = jsonResponse.build_hashed_id;
      testOpsConfig_default.getInstance().buildHashedId = jsonResponse.build_hashed_id;
      BStackLogger.info(`Testhub started with id: ${testOpsConfig_default.getInstance()?.buildHashedId}`);
    }
    processLaunchBuildResponse(jsonResponse, options);
    launchBuildUsage.success();
    return jsonResponse;
  } catch (error) {
    BStackLogger.debug(`TestHub build start failed: ${format(error)}`);
    if (!error.success) {
      launchBuildUsage.failed(error);
      logBuildError(error);
      return null;
    }
  }
}));
var isAccessibilityAutomationSession = (accessibilityFlag) => {
  try {
    const hasA11yJwtToken = typeof process.env.BSTACK_A11Y_JWT === "string" && process.env.BSTACK_A11Y_JWT.length > 0 && process.env.BSTACK_A11Y_JWT !== "null" && process.env.BSTACK_A11Y_JWT !== "undefined";
    return accessibilityFlag && hasA11yJwtToken;
  } catch (error) {
    BStackLogger.debug(`Exception in verifying the Accessibility session with error : ${error}`);
  }
  return false;
};
var isAppAccessibilityAutomationSession = (accessibilityFlag, isAppAutomate) => {
  const accessibilityAutomation = isAccessibilityAutomationSession(accessibilityFlag);
  return accessibilityAutomation && isAppAutomate;
};
var formatString = (template, ...values) => {
  let i = 0;
  if (template === null) {
    return "";
  }
  return template.replace(/%s/g, () => {
    const value = values[i++];
    return value !== null && value !== void 0 ? value : "";
  });
};
var _getParamsForAppAccessibility = (commandName, testName, hookRunUuid, isGlobalHook) => {
  return {
    // A scan from a WDIO config-level hook belongs to no test. TEST_ANALYTICS_ID in that
    // window holds a uuid the framework minted at instance creation — a test that has not
    // started — so sending it would attribute the scan to a test it did not come from.
    "thTestRunUuid": isGlobalHook ? void 0 : process.env.TEST_ANALYTICS_ID,
    // Present only when the scan fires inside a hook (dropped by JSON.stringify when undefined,
    // so in-test scans are unchanged). SeleniumHub appAllyHandler relays this as `hook_run_uuid`.
    "thHookRunUuid": hookRunUuid || void 0,
    "thBuildUuid": process.env.BROWSERSTACK_TESTHUB_UUID,
    "thJwtToken": process.env.BROWSERSTACK_TESTHUB_JWT,
    "authHeader": process.env.BSTACK_A11Y_JWT,
    "scanTimestamp": Date.now(),
    "method": commandName,
    "testName": testName
  };
};
var performA11yScan = async (isAppAutomate, browser, isBrowserStackSession, isAccessibility, commandName, testName, hookRunUuid, isGlobalHook) => {
  if (!isAccessibilityAutomationSession(isAccessibility)) {
    BStackLogger.warn("Not an Accessibility Automation session, cannot perform Accessibility scan.");
    return;
  }
  try {
    if (isAppAccessibilityAutomationSession(isAccessibility, isAppAutomate)) {
      const results = await browser.execute(formatString(accessibility_scripts_default.performScan, JSON.stringify(_getParamsForAppAccessibility(commandName, testName, hookRunUuid, isGlobalHook))), {});
      BStackLogger.debug(util3.format(results));
      return results;
    }
    if (accessibility_scripts_default.performScan) {
      const results = await executeAccessibilityScript(browser, accessibility_scripts_default.performScan, { method: commandName || "" });
      return results;
    }
    BStackLogger.error("AccessibilityScripts.performScan is null");
    return;
  } catch (err) {
    BStackLogger.error("Accessibility Scan could not be performed : " + err);
    return;
  }
};
var getA11yResults = PerformanceTester.measureWrapper(A11Y_EVENTS.GET_RESULTS, async (isAppAutomate, browser, isBrowserStackSession, isAccessibility) => {
  if (!isAccessibilityAutomationSession(isAccessibility)) {
    BStackLogger.warn("Not an Accessibility Automation session, cannot retrieve Accessibility results.");
    return [];
  }
  try {
    BStackLogger.debug("Performing scan before getting results");
    await performA11yScan(isAppAutomate, browser, isBrowserStackSession, isAccessibility);
    if (accessibility_scripts_default.getResults) {
      const results = await executeAccessibilityScript(browser, accessibility_scripts_default.getResults);
      return results;
    }
    BStackLogger.error("AccessibilityScripts.getResults is null");
    return [];
  } catch (error) {
    BStackLogger.error("No accessibility results were found.");
    BStackLogger.debug(`getA11yResults Failed. Error: ${error}`);
    return [];
  }
});
var getAppA11yResults = PerformanceTester.measureWrapper(A11Y_EVENTS.GET_RESULTS, async (isAppAutomate, browser, testName, isBrowserStackSession, isAccessibility, sessionId) => {
  if (!isBrowserStackSession) {
    return [];
  }
  if (!isAppAccessibilityAutomationSession(isAccessibility, isAppAutomate)) {
    BStackLogger.warn("Not an Accessibility Automation session, cannot retrieve Accessibility results summary.");
    return [];
  }
  try {
    const apiUrl = `${APIUtils.APP_ALLY_ENDPOINT}/${APP_ALLY_ISSUES_ENDPOINT}`;
    const apiRespone = await getAppA11yResultResponse(apiUrl, isAppAutomate, browser, testName, isBrowserStackSession, isAccessibility, sessionId);
    const result = apiRespone?.data?.data?.issues;
    BStackLogger.debug(`Polling Result: ${JSON.stringify(result)}`);
    return result;
  } catch (error) {
    BStackLogger.error("No accessibility summary was found.");
    BStackLogger.debug(`getAppA11yResults Failed. Error: ${error}`);
    return [];
  }
});
var getAppA11yResultsSummary = PerformanceTester.measureWrapper(A11Y_EVENTS.GET_RESULTS_SUMMARY, async (isAppAutomate, browser, testName, isBrowserStackSession, isAccessibility, sessionId) => {
  if (!isBrowserStackSession) {
    return {};
  }
  if (!isAppAccessibilityAutomationSession(isAccessibility, isAppAutomate)) {
    BStackLogger.warn("Not an Accessibility Automation session, cannot retrieve Accessibility results summary.");
    return {};
  }
  try {
    const apiUrl = `${APIUtils.APP_ALLY_ENDPOINT}/${APP_ALLY_ISSUES_SUMMARY_ENDPOINT}`;
    const apiRespone = await getAppA11yResultResponse(apiUrl, isAppAutomate, browser, testName, isBrowserStackSession, isAccessibility, sessionId);
    const result = apiRespone?.data?.data?.summary;
    BStackLogger.debug(`Polling Result: ${JSON.stringify(result)}`);
    return result;
  } catch {
    BStackLogger.error("No accessibility summary was found.");
    return {};
  }
});
var getAppA11yResultResponse = async (apiUrl, isAppAutomate, browser, testName, isBrowserStackSession, isAccessibility, sessionId) => {
  BStackLogger.debug("Performing scan before getting results summary");
  await performA11yScan(isAppAutomate, browser, isBrowserStackSession, isAccessibility, void 0, testName);
  const upperTimeLimit = process.env.BSTACK_A11Y_POLLING_TIMEOUT ? Date.now() + parseInt(process.env.BSTACK_A11Y_POLLING_TIMEOUT) * 1e3 : Date.now() + 3e4;
  const params = { test_run_uuid: process.env.TEST_ANALYTICS_ID, session_id: sessionId, timestamp: Date.now() };
  const header = { Authorization: `Bearer ${process.env.BSTACK_A11Y_JWT}` };
  const apiRespone = await pollApi(apiUrl, params, header, upperTimeLimit);
  BStackLogger.debug(`Polling Result: ${JSON.stringify(apiRespone)}`);
  return apiRespone;
};
var getA11yResultsSummary = PerformanceTester.measureWrapper(A11Y_EVENTS.GET_RESULTS_SUMMARY, async (isAppAutomate, browser, isBrowserStackSession, isAccessibility) => {
  if (!isAccessibilityAutomationSession(isAccessibility)) {
    BStackLogger.warn("Not an Accessibility Automation session, cannot retrieve Accessibility results summary.");
    return {};
  }
  try {
    BStackLogger.debug("Performing scan before getting results summary");
    await performA11yScan(isAppAutomate, browser, isBrowserStackSession, isAccessibility);
    if (accessibility_scripts_default.getResultsSummary) {
      const summaryResults = await executeAccessibilityScript(browser, accessibility_scripts_default.getResultsSummary);
      return summaryResults;
    }
    BStackLogger.error("AccessibilityScripts.getResultsSummary is null");
    return {};
  } catch {
    BStackLogger.error("No accessibility summary was found.");
    return {};
  }
});
var describeErrorWithCause = (error, depth = 3) => {
  if (error === null || error === void 0) {
    return String(error);
  }
  const described = error instanceof Error ? `${error.name}: ${error.message}` : String(error);
  const cause = error.cause;
  if (cause === null || cause === void 0 || depth <= 1) {
    return described;
  }
  return `${described} <- caused by ${describeErrorWithCause(cause, depth - 1)}`;
};
var stopBuildUpstream = PerformanceTester.measureWrapper(TESTHUB_EVENTS.STOP, o11yErrorHandler(async function stopBuildUpstream2() {
  const stopBuildUsage = usageStats_default.getInstance().stopBuildUsage;
  stopBuildUsage.triggered();
  if (!process.env[TESTOPS_BUILD_COMPLETED_ENV]) {
    stopBuildUsage.failed("Build is not completed yet");
    return {
      status: "error",
      message: "Build is not completed yet"
    };
  }
  if (!process.env[BROWSERSTACK_TESTHUB_JWT]) {
    stopBuildUsage.failed("Token/buildID is undefined, build creation might have failed");
    BStackLogger.debug("[STOP_BUILD] Missing Authentication Token/ Build ID");
    return {
      status: "error",
      message: "Token/buildID is undefined, build creation might have failed"
    };
  }
  const data = {
    "stop_time": (/* @__PURE__ */ new Date()).toISOString()
  };
  const killSignal = process.env[BROWSERSTACK_KILL_SIGNAL];
  if (killSignal) {
    data.finished_metadata = [{ reason: "user_killed", signal: killSignal }];
  }
  const url = `${APIUtils.DATA_ENDPOINT}/api/v1/builds/${process.env[BROWSERSTACK_TESTHUB_UUID]}/stop`;
  const deadline = Date.now() + STOP_BUILD_TOTAL_BUDGET_MS;
  let lastError;
  let attempts = 0;
  for (let attempt = 1; attempt <= STOP_BUILD_MAX_ATTEMPTS; attempt++) {
    const budgetLeft = deadline - Date.now();
    if (budgetLeft <= 0) {
      break;
    }
    attempts = attempt;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), Math.min(STOP_BUILD_ATTEMPT_TIMEOUT_MS, budgetLeft));
    try {
      const response = await _fetch(url, {
        method: "PUT",
        headers: {
          ...DEFAULT_REQUEST_CONFIG.headers,
          "Authorization": `Bearer ${process.env[BROWSERSTACK_TESTHUB_JWT]}`
        },
        body: JSON.stringify(data),
        signal: controller.signal
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
      BStackLogger.debug(`[STOP_BUILD] Success response: ${await response.text()}`);
      stopBuildUsage.success();
      return {
        status: "success",
        message: ""
      };
    } catch (error) {
      lastError = controller.signal.aborted ? new Error(`build stop request timed out after ${Math.min(STOP_BUILD_ATTEMPT_TIMEOUT_MS, budgetLeft)}ms`) : error;
      BStackLogger.debug(`[STOP_BUILD] Attempt ${attempt}/${STOP_BUILD_MAX_ATTEMPTS} failed. Error: ${describeErrorWithCause(lastError)}`);
      const backoff = STOP_BUILD_BACKOFF_BASE_MS * Math.pow(2, attempt - 1);
      if (attempt >= STOP_BUILD_MAX_ATTEMPTS || Date.now() + backoff >= deadline) {
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, backoff));
    } finally {
      clearTimeout(timeoutId);
    }
  }
  stopBuildUsage.failed(lastError);
  BStackLogger.debug(`[STOP_BUILD] Failed after ${attempts} attempt(s). Error: ${describeErrorWithCause(lastError)}`);
  return {
    status: "error",
    message: lastError?.message ?? "stop build failed"
  };
}));
function getCiInfo() {
  const env = process.env;
  if (typeof env.JENKINS_URL === "string" && env.JENKINS_URL.length > 0 || typeof env.JENKINS_HOME === "string" && env.JENKINS_HOME.length > 0) {
    return {
      name: "Jenkins",
      build_url: env.BUILD_URL,
      job_name: env.JOB_NAME,
      build_number: env.BUILD_NUMBER
    };
  }
  if (isTrue(env.CI) && isTrue(env.CIRCLECI)) {
    return {
      name: "CircleCI",
      build_url: env.CIRCLE_BUILD_URL,
      job_name: env.CIRCLE_JOB,
      build_number: env.CIRCLE_BUILD_NUM
    };
  }
  if (isTrue(env.CI) && isTrue(env.TRAVIS)) {
    return {
      name: "Travis CI",
      build_url: env.TRAVIS_BUILD_WEB_URL,
      job_name: env.TRAVIS_JOB_NAME,
      build_number: env.TRAVIS_BUILD_NUMBER
    };
  }
  if (isTrue(env.CI) && env.CI_NAME === "codeship") {
    return {
      name: "Codeship",
      build_url: null,
      job_name: null,
      build_number: null
    };
  }
  if (env.BITBUCKET_BRANCH && env.BITBUCKET_COMMIT) {
    return {
      name: "Bitbucket",
      build_url: env.BITBUCKET_GIT_HTTP_ORIGIN,
      job_name: null,
      build_number: env.BITBUCKET_BUILD_NUMBER
    };
  }
  if (isTrue(env.CI) && isTrue(env.DRONE)) {
    return {
      name: "Drone",
      build_url: env.DRONE_BUILD_LINK,
      job_name: null,
      build_number: env.DRONE_BUILD_NUMBER
    };
  }
  if (isTrue(env.CI) && isTrue(env.SEMAPHORE)) {
    return {
      name: "Semaphore",
      build_url: env.SEMAPHORE_ORGANIZATION_URL,
      job_name: env.SEMAPHORE_JOB_NAME,
      build_number: env.SEMAPHORE_JOB_ID
    };
  }
  if (isTrue(env.CI) && isTrue(env.GITLAB_CI)) {
    return {
      name: "GitLab",
      build_url: env.CI_JOB_URL,
      job_name: env.CI_JOB_NAME,
      build_number: env.CI_JOB_ID
    };
  }
  if (isTrue(env.CI) && isTrue(env.BUILDKITE)) {
    return {
      name: "Buildkite",
      build_url: env.BUILDKITE_BUILD_URL,
      job_name: env.BUILDKITE_LABEL || env.BUILDKITE_PIPELINE_NAME,
      build_number: env.BUILDKITE_BUILD_NUMBER
    };
  }
  if (isTrue(env.TF_BUILD) && env.TF_BUILD_BUILDNUMBER) {
    return {
      name: "Visual Studio Team Services",
      build_url: `${env.SYSTEM_TEAMFOUNDATIONSERVERURI}${env.SYSTEM_TEAMPROJECTID}`,
      job_name: env.SYSTEM_DEFINITIONID,
      build_number: env.BUILD_BUILDID
    };
  }
  if (isTrue(env.APPVEYOR)) {
    return {
      name: "Appveyor",
      build_url: `${env.APPVEYOR_URL}/project/${env.APPVEYOR_ACCOUNT_NAME}/${env.APPVEYOR_PROJECT_SLUG}/builds/${env.APPVEYOR_BUILD_ID}`,
      job_name: env.APPVEYOR_JOB_NAME,
      build_number: env.APPVEYOR_BUILD_NUMBER
    };
  }
  if (env.AZURE_HTTP_USER_AGENT && env.TF_BUILD) {
    return {
      name: "Azure CI",
      build_url: `${env.SYSTEM_TEAMFOUNDATIONSERVERURI}${env.SYSTEM_TEAMPROJECTID}`,
      job_name: env.BUILD_BUILDID,
      build_number: env.BUILD_BUILDID
    };
  }
  if (env.CODEBUILD_BUILD_ID || env.CODEBUILD_RESOLVED_SOURCE_VERSION || env.CODEBUILD_SOURCE_VERSION) {
    return {
      name: "AWS CodeBuild",
      build_url: env.CODEBUILD_PUBLIC_BUILD_URL,
      job_name: env.CODEBUILD_BUILD_ID,
      build_number: env.CODEBUILD_BUILD_ID
    };
  }
  if (env.bamboo_buildNumber) {
    return {
      name: "Bamboo",
      build_url: env.bamboo_buildResultsUrl,
      job_name: env.bamboo_shortJobName,
      build_number: env.bamboo_buildNumber
    };
  }
  if (env.WERCKER || env.WERCKER_MAIN_PIPELINE_STARTED) {
    return {
      name: "Wercker",
      build_url: env.WERCKER_BUILD_URL,
      job_name: env.WERCKER_MAIN_PIPELINE_STARTED ? "Main Pipeline" : null,
      build_number: env.WERCKER_GIT_COMMIT
    };
  }
  if (env.GCP_PROJECT || env.GCLOUD_PROJECT || env.GOOGLE_CLOUD_PROJECT) {
    return {
      name: "Google Cloud",
      build_url: null,
      job_name: env.PROJECT_ID,
      build_number: env.BUILD_ID
    };
  }
  if (env.SHIPPABLE) {
    return {
      name: "Shippable",
      build_url: env.SHIPPABLE_BUILD_URL,
      job_name: env.SHIPPABLE_JOB_ID ? `Job #${env.SHIPPABLE_JOB_ID}` : null,
      build_number: env.SHIPPABLE_BUILD_NUMBER
    };
  }
  if (isTrue(env.NETLIFY)) {
    return {
      name: "Netlify",
      build_url: env.DEPLOY_URL,
      job_name: env.SITE_NAME,
      build_number: env.BUILD_ID
    };
  }
  if (isTrue(env.GITHUB_ACTIONS)) {
    return {
      name: "GitHub Actions",
      build_url: `${env.GITHUB_SERVER_URL}/${env.GITHUB_REPOSITORY}/actions/runs/${env.GITHUB_RUN_ID}`,
      job_name: env.GITHUB_WORKFLOW,
      build_number: env.GITHUB_RUN_ID
    };
  }
  if (isTrue(env.CI) && env.VERCEL === "1") {
    return {
      name: "Vercel",
      build_url: `http://${env.VERCEL_URL}`,
      job_name: null,
      build_number: null
    };
  }
  if (env.TEAMCITY_VERSION) {
    return {
      name: "Teamcity",
      build_url: null,
      job_name: null,
      build_number: env.BUILD_NUMBER
    };
  }
  if (env.CONCOURSE || env.CONCOURSE_URL || env.CONCOURSE_USERNAME || env.CONCOURSE_TEAM) {
    return {
      name: "Concourse",
      build_url: null,
      job_name: env.BUILD_JOB_NAME || null,
      build_number: env.BUILD_ID || null
    };
  }
  if (env.GO_JOB_NAME) {
    return {
      name: "GoCD",
      build_url: null,
      job_name: env.GO_JOB_NAME,
      build_number: env.GO_PIPELINE_COUNTER
    };
  }
  if (env.CF_BUILD_ID) {
    return {
      name: "CodeFresh",
      build_url: env.CF_BUILD_URL,
      job_name: env.CF_PIPELINE_NAME,
      build_number: env.CF_BUILD_ID
    };
  }
  return null;
}
async function getGitMetaData() {
  const info = gitRepoInfo();
  if (!info.commonGitDir) {
    return;
  }
  const { remote } = await pGitconfig(info.commonGitDir);
  const remotes = remote ? Object.keys(remote).map((remoteName) => ({ name: remoteName, url: remote[remoteName].url })) : [];
  let gitMetaData = {
    name: "git",
    sha: info.sha,
    short_sha: info.abbreviatedSha,
    branch: info.branch,
    tag: info.tag,
    committer: info.committer,
    committer_date: info.committerDate,
    author: info.author,
    author_date: info.authorDate,
    commit_message: info.commitMessage,
    root: info.root,
    common_git_dir: info.commonGitDir,
    worktree_git_dir: info.worktreeGitDir,
    last_tag: info.lastTag,
    commits_since_last_tag: info.commitsSinceLastTag,
    remotes
  };
  gitMetaData = checkAndTruncateVCSInfo(gitMetaData);
  return gitMetaData;
}
function isLoadTestingSession() {
  if (process.env[BROWSERSTACK_LTS_SESSION_ID]) {
    return true;
  }
  const flag = process.env[BROWSERSTACK_LTS];
  return flag === "true" || flag === "1";
}
function isBStackSession(config) {
  if (typeof config.user === "string" && typeof config.key === "string" && config.key.length === 20) {
    return true;
  }
  return false;
}
function isBrowserstackInfra(config, caps) {
  const isBrowserstack = (str) => {
    return str === "browserstack.com" || str.endsWith(".browserstack.com");
  };
  if (config.hostname && !isBrowserstack(config.hostname)) {
    return false;
  }
  if (caps && typeof caps === "object") {
    if (Array.isArray(caps)) {
      for (const capability of caps) {
        if (capability.hostname && !isBrowserstack(capability.hostname)) {
          return false;
        }
      }
    } else {
      for (const key in caps) {
        const capability = caps[key];
        if (capability.hostname && !isBrowserstack(capability.hostname)) {
          return false;
        }
      }
    }
  }
  if (!isBStackSession(config)) {
    return false;
  }
  return true;
}
function shouldAddServiceVersion(config, testObservability, caps) {
  if (config.services && config.services.toString().includes("chromedriver") && testObservability !== false || !isBrowserstackInfra(config, caps)) {
    return false;
  }
  return true;
}
async function batchAndPostEvents(eventUrl, kind, data) {
  if (!process.env[TESTOPS_BUILD_COMPLETED_ENV]) {
    throw new Error("Build not completed yet");
  }
  const jwtToken = process.env[BROWSERSTACK_TESTHUB_JWT];
  if (!jwtToken) {
    throw new Error("Missing authentication Token");
  }
  try {
    const url = `${APIUtils.DATA_ENDPOINT}/${eventUrl}`;
    const response = await _fetch(url, {
      method: "POST",
      headers: {
        ...DEFAULT_REQUEST_CONFIG.headers,
        "Authorization": `Bearer ${jwtToken}`
      },
      body: JSON.stringify(data)
    });
    const responseBody = await response.text();
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}${responseBody ? ` \u2014 ${responseBody.slice(0, 300)}` : " (empty body)"}`);
    }
    BStackLogger.debug(`[${kind}] Success response: ${responseBody}`);
  } catch (error) {
    BStackLogger.debug(`[${kind}] EXCEPTION IN ${kind} REQUEST TO TEST REPORTING AND ANALYTICS : ${error}`);
    throw new Error("Exception in request " + error);
  }
}
function getObservabilityUser(options, config) {
  if (process.env.BROWSERSTACK_USERNAME) {
    return process.env.BROWSERSTACK_USERNAME;
  }
  if (options.testObservabilityOptions && options.testObservabilityOptions.user) {
    return options.testObservabilityOptions.user;
  }
  return config.user;
}
function getObservabilityKey(options, config) {
  if (process.env.BROWSERSTACK_ACCESS_KEY) {
    return process.env.BROWSERSTACK_ACCESS_KEY;
  }
  if (options.testObservabilityOptions && options.testObservabilityOptions.key) {
    return options.testObservabilityOptions.key;
  }
  return config.key;
}
function getObservabilityProject(options, bstackProjectName) {
  if (process.env.TEST_OBSERVABILITY_PROJECT_NAME) {
    return process.env.TEST_OBSERVABILITY_PROJECT_NAME;
  }
  if (options.testObservabilityOptions && options.testObservabilityOptions.projectName) {
    return options.testObservabilityOptions.projectName;
  }
  return bstackProjectName;
}
function getObservabilityBuild(options, bstackBuildName) {
  if (process.env.TEST_OBSERVABILITY_BUILD_NAME) {
    return process.env.TEST_OBSERVABILITY_BUILD_NAME;
  }
  if (options.testObservabilityOptions && options.testObservabilityOptions.buildName) {
    return options.testObservabilityOptions.buildName;
  }
  return bstackBuildName || path7.basename(path7.resolve(process.cwd()));
}
function getObservabilityBuildTags(options, bstackBuildTag) {
  if (process.env.TEST_OBSERVABILITY_BUILD_TAG) {
    return process.env.TEST_OBSERVABILITY_BUILD_TAG.split(",");
  }
  if (options.testObservabilityOptions && options.testObservabilityOptions.buildTag) {
    return options.testObservabilityOptions.buildTag;
  }
  if (bstackBuildTag) {
    return [bstackBuildTag];
  }
  return [];
}
function getTestPlanId(options) {
  if (process.env[BROWSERSTACK_TEST_PLAN_ID]) {
    return process.env[BROWSERSTACK_TEST_PLAN_ID];
  }
  const CLI_ARG = "--browserstack.testManagementOptions.testPlanId";
  const argIndex = process.argv.indexOf(CLI_ARG);
  if (argIndex !== -1 && process.argv[argIndex + 1]) {
    return process.argv[argIndex + 1];
  }
  const argWithEquals = process.argv.find((arg) => arg.startsWith(`${CLI_ARG}=`));
  if (argWithEquals) {
    return argWithEquals.split("=")[1];
  }
  const testPlanId = options.testManagementOptions?.testPlanId;
  if (typeof testPlanId === "string" && testPlanId.trim().length > 0) {
    return testPlanId.trim();
  }
  return void 0;
}
function getBrowserStackUser(config) {
  if (process.env.BROWSERSTACK_USERNAME) {
    return process.env.BROWSERSTACK_USERNAME;
  }
  return config.user;
}
function getBrowserStackKey(config) {
  if (process.env.BROWSERSTACK_ACCESS_KEY) {
    return process.env.BROWSERSTACK_ACCESS_KEY;
  }
  return config.key;
}
function isTrue(value) {
  return (value + "").toLowerCase() === "true";
}
function isFalse(value) {
  return (value + "").toLowerCase() === "false";
}
var patchConsoleLogs = o11yErrorHandler(() => {
  const BSTestOpsPatcher = new logPatcher_default({});
  Object.keys(consoleHolder).forEach((method) => {
    if (!(method in console) || method === "Console" || typeof console[method] !== "function") {
      BStackLogger.debug(`Skipping method: ${method}, exists: ${method in console}, type: ${typeof console[method]}`);
      return;
    }
    const origMethod = console[method].bind(console);
    console[method] = (...args) => {
      try {
        if (!Object.keys(BSTestOpsPatcher).includes(method)) {
          origMethod(...args);
        } else {
          origMethod(...args);
          BSTestOpsPatcher[method](...args);
        }
      } catch (error) {
        BStackLogger.debug(`Error while patching console logs : ${error}`);
        origMethod(...args);
      }
    };
  });
});
async function uploadLogs(user, key, clientBuildUuid, options = {}) {
  const eventName = EVENTS.SDK_UPLOAD_LOGS;
  let success = true;
  let failure;
  let stagingDir;
  PerformanceTester.start(eventName);
  try {
    if (isAutoCaptureLogsDisabled(options)) {
      success = false;
      failure = "skipped: disableAutoCaptureLogs=true";
      BStackLogger.debug("Skipping log upload, auto-capture is disabled");
      return;
    }
    if (!user || !key) {
      success = false;
      failure = "skipped: missing_credentials";
      BStackLogger.debug("Uploading logs failed due to no credentials");
      return;
    }
    stagingDir = fs8.mkdtempSync(path7.join(tmpdir(), "bstack-wdio-logs-"));
    const tmpDir = stagingDir;
    const tarPath = path7.join(tmpDir, "logs.tar");
    const tarGzPath = path7.join(tmpDir, "logs.tar.gz");
    const takenNames = /* @__PURE__ */ new Set(["logs.tar", "logs.tar.gz"]);
    const copiedFileNames = [];
    const archiveAddFailures = [];
    const uniqueName = (filePath) => dedupeEntryName(filePath, takenNames);
    const { files: configFiles, failures: configFailures, strategy } = collectConfigFilesForUpload(options.config);
    const capturedConfigNames = configFiles.map((f) => f.name);
    const packageJsonPath = findPackageJsonForUpload();
    if (packageJsonPath) {
      try {
        configFiles.push({
          name: path7.basename(packageJsonPath),
          sourcePath: packageJsonPath,
          content: redactSensitiveContent(fs8.readFileSync(packageJsonPath, "utf8"))
        });
      } catch (pkgErr) {
        configFailures.push(`package.json: ${pkgErr?.message || String(pkgErr)}`);
      }
    }
    for (const configFile of configFiles) {
      try {
        const entryName = uniqueName(configFile.name);
        fs8.writeFileSync(path7.join(tmpDir, entryName), configFile.content);
        copiedFileNames.push(entryName);
      } catch (writeErr) {
        const msg = writeErr?.message || String(writeErr);
        configFailures.push(`${configFile.name}: ${msg}`);
      }
    }
    if (capturedConfigNames.length > 0) {
      BStackLogger.debug(`Auto-captured ${capturedConfigNames.length} config file(s) via ${strategy}: ${capturedConfigNames.join(", ")}`);
    } else {
      BStackLogger.debug(`No wdio config captured${strategy ? ` (strategy ${strategy})` : ""}`);
    }
    if (packageJsonPath) {
      BStackLogger.debug(`Auto-captured package.json from ${relativeDirToCwd(path7.dirname(packageJsonPath))}`);
    }
    if (configFailures.length > 0 && failure === void 0) {
      failure = `config_capture: ${configFailures.join("; ")}`.substring(0, 300);
    }
    await BStackLogger.flushLogFile();
    const filesToArchive = [
      BStackLogger.logFilePath,
      CLI_DEBUG_LOGS_FILE
    ].filter((f) => Boolean(f) && fs8.existsSync(f));
    for (const f of filesToArchive) {
      try {
        const entryName = uniqueName(f);
        fs8.copyFileSync(f, path7.join(tmpDir, entryName));
        copiedFileNames.push(entryName);
      } catch (copyErr) {
        const msg = copyErr?.message || String(copyErr);
        archiveAddFailures.push(`${path7.basename(f)}: ${msg}`);
      }
    }
    if (archiveAddFailures.length > 0) {
      success = false;
      failure = `archive_add_failed [${archiveAddFailures.length}]: ${archiveAddFailures.join("; ")}`.substring(0, 300);
    }
    BStackLogger.debug(`Auto-capture archive entries: ${copiedFileNames.join(", ")}`);
    await create(
      {
        file: tarPath,
        cwd: tmpDir,
        portable: true,
        noDirRecurse: true
      },
      copiedFileNames
    );
    await new Promise((resolve, reject) => {
      const source = fs8.createReadStream(tarPath);
      const dest = fs8.createWriteStream(tarGzPath);
      const gzip = zlib.createGzip({ level: 1 });
      source.pipe(gzip).pipe(dest);
      dest.on("finish", resolve);
      dest.on("error", reject);
    });
    const formData = new FormData();
    const file = typeof fs8.openAsBlob === "function" ? await fs8.openAsBlob(tarGzPath, { type: "application/x-gzip" }) : new Blob([fs8.readFileSync(tarGzPath)], { type: "application/x-gzip" });
    formData.append("data", file, "logs.tar.gz");
    formData.append("clientBuildUuid", clientBuildUuid);
    const auth = Buffer.from(`${user}:${key}`).toString("base64");
    const requestOptions = {
      body: formData,
      headers: {
        "Authorization": `Basic ${auth}`
      }
    };
    const response = await nodeRequest(
      "POST",
      UPLOAD_LOGS_ENDPOINT,
      requestOptions,
      APIUtils.UPLOAD_LOGS_ADDRESS
    );
    if (fs8.existsSync(CLI_DEBUG_LOGS_FILE)) {
      fs8.unlinkSync(CLI_DEBUG_LOGS_FILE);
    }
    if (!response) {
      success = false;
      failure = "upload_no_response";
    } else if (response.status && response.status !== "success") {
      success = false;
      failure = `upload_status: ${response.status}${response.message ? " - " + String(response.message).slice(0, 200) : ""}`;
    }
    return response;
  } catch (error) {
    success = false;
    failure = `uploadLogs exception: ${getErrorString(error)}`;
    BStackLogger.error(`Error while uploading logs: ${getErrorString(error)}`);
    return null;
  } finally {
    if (stagingDir) {
      try {
        fs8.rmSync(stagingDir, { recursive: true, force: true });
      } catch (cleanupErr) {
        BStackLogger.debug(`Failed to clean up log staging dir ${stagingDir}: ${getErrorString(cleanupErr)}`);
      }
    }
    PerformanceTester.end(eventName, success, failure);
  }
}
var getPlatformVersion = o11yErrorHandler(function getPlatformVersion2(caps, userCaps) {
  if (!caps && !userCaps) {
    return void 0;
  }
  const bstackOptions = userCaps?.["bstack:options"];
  const keys = ["platformVersion", "platform_version", "osVersion", "os_version"];
  for (const key of keys) {
    if (caps?.[key]) {
      BStackLogger.debug(`Got ${key} from driver caps`);
      return String(caps?.[key]);
    } else if (bstackOptions && bstackOptions?.[key]) {
      BStackLogger.debug(`Got ${key} from user bstack options`);
      return String(bstackOptions?.[key]);
    } else if (userCaps[key]) {
      BStackLogger.debug(`Got ${key} from user caps`);
      return String(userCaps[key]);
    }
  }
  return void 0;
});
var getResolvedDeviceName = o11yErrorHandler(function getResolvedDeviceName2(driverCaps, requestedCaps) {
  const flattenMultiremote = (caps) => {
    if (!caps) {
      return [];
    }
    const obj = caps;
    if (obj.deviceModel || obj["appium:deviceModel"] || obj.deviceName || obj["bstack:options"]) {
      return [caps];
    }
    return Object.values(obj).filter((v) => v !== null && typeof v === "object" && "capabilities" in v).map((v) => v.capabilities).filter(Boolean);
  };
  const sources = [
    ...flattenMultiremote(driverCaps),
    ...flattenMultiremote(requestedCaps)
  ];
  if (!sources.length) {
    return void 0;
  }
  const pickString = (obj, key) => {
    const v = obj?.[key];
    return typeof v === "string" && v.length > 0 ? v : void 0;
  };
  const paths = [
    (c) => pickString(c, "deviceModel"),
    (c) => pickString(c, "appium:deviceModel"),
    (c) => pickString(c["bstack:options"], "deviceName"),
    (c) => pickString(c, "appium:deviceName"),
    (c) => pickString(c, "deviceName")
  ];
  for (const path11 of paths) {
    for (const src of sources) {
      const v = path11(src);
      if (v) {
        return v;
      }
    }
  }
  return void 0;
});
var isObjectEmpty = (objectName) => {
  return objectName && Object.keys(objectName).length === 0 && objectName.constructor === Object;
};
var getErrorString = (err) => {
  if (!err) {
    return void 0;
  }
  if (typeof err === "string") {
    return err;
  } else if (err instanceof Error) {
    return err.message;
  }
};
function truncateString(field, truncateSizeInBytes) {
  try {
    const bufferSizeInBytes = Buffer.from(GIT_META_DATA_TRUNCATED).length;
    const fieldBufferObj = Buffer.from(field);
    const lenOfFieldBufferObj = fieldBufferObj.length;
    const finalLen = Math.ceil(lenOfFieldBufferObj - truncateSizeInBytes - bufferSizeInBytes);
    if (finalLen > 0) {
      const truncatedString = fieldBufferObj.subarray(0, finalLen).toString() + GIT_META_DATA_TRUNCATED;
      return truncatedString;
    }
  } catch (error) {
    BStackLogger.debug(`Error while truncating field, nothing was truncated here: ${error}`);
  }
  return field;
}
function getSizeOfJsonObjectInBytes(jsonData) {
  try {
    const buffer = Buffer.from(JSON.stringify(jsonData));
    return buffer.length;
  } catch (error) {
    BStackLogger.debug(`Something went wrong while calculating size of JSON object: ${error}`);
  }
  return -1;
}
function checkAndTruncateVCSInfo(gitMetaData) {
  const gitMetaDataSizeInBytes = getSizeOfJsonObjectInBytes(gitMetaData);
  if (gitMetaDataSizeInBytes && gitMetaDataSizeInBytes > MAX_GIT_META_DATA_SIZE_IN_BYTES) {
    const truncateSize = gitMetaDataSizeInBytes - MAX_GIT_META_DATA_SIZE_IN_BYTES;
    const truncatedCommitMessage = truncateString(gitMetaData.commit_message, truncateSize);
    gitMetaData.commit_message = truncatedCommitMessage;
    BStackLogger.info(`The commit has been truncated. Size of commit after truncation is ${getSizeOfJsonObjectInBytes(gitMetaData) / 1024} KB`);
  }
  return gitMetaData;
}
function isTurboScale(options) {
  return Boolean(options?.turboScale);
}
async function pollApi(url, params, headers, upperLimit, startTime = Date.now()) {
  params.timestamp = Math.round(Date.now() / 1e3);
  BStackLogger.debug(`current timestamp ${params.timestamp}`);
  try {
    const response = await makeGetRequest(url, params, headers);
    const responseData = await response.json();
    return {
      data: responseData,
      headers: response.headers,
      message: "Polling succeeded."
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      const nextPollTime = parseInt(error.response.headers.get("next_poll_time"), 10) * 1e3;
      BStackLogger.debug(`timeInMillis ${nextPollTime}`);
      if (isNaN(nextPollTime)) {
        BStackLogger.warn("Invalid or missing `nextPollTime` header. Stopping polling.");
        return {
          data: {},
          headers: error.response.headers,
          message: "Invalid nextPollTime header value. Polling stopped."
        };
      }
      const elapsedTime = nextPollTime - Date.now();
      BStackLogger.debug(
        `elapsedTime ${elapsedTime} timeInMillis ${nextPollTime} upperLimit ${upperLimit}`
      );
      if (nextPollTime > upperLimit) {
        BStackLogger.warn("Polling stopped due to upper time limit.");
        return {
          data: {},
          headers: error.response.headers,
          message: "Polling stopped due to upper time limit."
        };
      }
      BStackLogger.debug(`Polling again in ${elapsedTime}ms with params:`, params);
      await new Promise((resolve) => setTimeout(resolve, elapsedTime));
      return pollApi(url, params, headers, upperLimit, startTime);
    } else if (error.response) {
      let errorMessage = error.response.statusText;
      try {
        const parsedError = JSON.parse(error.response.json());
        errorMessage = parsedError.message;
      } catch {
        BStackLogger.debug(`Error parsing pollApi request body ${error.response.body}`);
        errorMessage = "Unknown error";
      }
      throw {
        data: {},
        headers: {},
        message: errorMessage
      };
    } else {
      BStackLogger.error(`Unexpected error occurred: ${error}`);
      return { data: {}, headers: {}, message: "Unexpected error occurred." };
    }
  }
}
async function makeGetRequest(url, params, headers) {
  const urlObj = new URL(url);
  Object.keys(params).forEach((key) => urlObj.searchParams.append(key, params[key]));
  const response = await _fetch(urlObj.toString(), {
    method: "GET",
    headers
  });
  if (!response.ok) {
    const error = new Error("Request failed");
    error.response = response;
    throw error;
  }
  return response;
}
async function executeAccessibilityScript(browser, fnBody, arg) {
  return browser.execute(
    `return (function (...bstackSdkArgs) {
            return new Promise((resolve, reject) => {
                const data = bstackSdkArgs[0];
                bstackSdkArgs.push(resolve);
                ${fnBody.replace(/arguments/g, "bstackSdkArgs")}
            });
        })(${arg ? JSON.stringify(arg) : ""})`
  );
}
function getBooleanValueFromString(value) {
  if (!value) {
    return false;
  }
  return ["true"].includes(value.trim().toLowerCase());
}
function isValidEnabledValue(value) {
  if (value === void 0 || value === null) {
    return false;
  }
  if (typeof value === "boolean") {
    return value === true;
  }
  if (typeof value === "string") {
    return getBooleanValueFromString(value);
  }
  return false;
}
function isNullOrEmpty(string) {
  return !string || string.trim() === "";
}
function isHash(entity) {
  return Boolean(entity && typeof entity === "object" && !Array.isArray(entity));
}
function nestedKeyValue(hash, keys) {
  return keys.reduce((hash2, key) => isHash(hash2) ? hash2[key] : void 0, hash);
}
function removeDir(dir) {
  const list = fs8.readdirSync(dir);
  for (let i = 0; i < list.length; i++) {
    const filename = path7.join(dir, list[i]);
    const stat = fs8.statSync(filename);
    if (filename === "." || filename === "..") {
    } else if (stat.isDirectory()) {
      removeDir(filename);
    } else {
      fs8.unlinkSync(filename);
    }
  }
  fs8.rmdirSync(dir);
}
function createDir(dir) {
  if (fs8.existsSync(dir)) {
    removeDir(dir);
  }
  fs8.mkdirSync(dir, { recursive: true });
}
function isWritable(dirPath) {
  try {
    fs8.accessSync(dirPath, fs8.constants.W_OK);
    return true;
  } catch {
    return false;
  }
}
function setReadWriteAccess(dirPath) {
  try {
    fs8.chmodSync(dirPath, 438);
    BStackLogger.debug(`Directory ${dirPath} is now read/write accessible.`);
  } catch (err) {
    BStackLogger.error(`Failed to set directory access: ${err.stack}`);
  }
}

// src/testOps/openRunsJournal.ts
import path8 from "node:path";
import fs9 from "node:fs";
var OPEN_RUNS_DIR = path8.join(process.cwd(), "logs", "bstack_open_runs");
var ORPHAN_FAILURE_REASON = "Test run did not complete: the process was interrupted or terminated before the test finished (finalized by BrowserStack SDK exit cleanup)";
function collectOrphanedRuns() {
  const orphans = [];
  try {
    if (!fs9.existsSync(OPEN_RUNS_DIR)) {
      return orphans;
    }
    for (const file of fs9.readdirSync(OPEN_RUNS_DIR)) {
      try {
        orphans.push(JSON.parse(fs9.readFileSync(path8.join(OPEN_RUNS_DIR, file), "utf8")));
      } catch (e) {
        BStackLogger.debug(`openRunsJournal: skipping unreadable journal file ${file}: ${e}`);
      }
    }
    fs9.rmSync(OPEN_RUNS_DIR, { recursive: true, force: true });
  } catch (e) {
    BStackLogger.debug("openRunsJournal: failed to collect orphaned runs: " + e);
  }
  return orphans;
}
async function finalizeOrphanedRuns() {
  try {
    const orphans = collectOrphanedRuns();
    if (!orphans.length) {
      return 0;
    }
    const finishedAt = (/* @__PURE__ */ new Date()).toISOString();
    const events = orphans.map((runData) => {
      const startedAtMs = runData.started_at ? new Date(runData.started_at).getTime() : NaN;
      const finishedRun = {
        ...runData,
        finished_at: finishedAt,
        result: "failed",
        duration_in_ms: Number.isNaN(startedAtMs) ? void 0 : Math.max(0, Date.now() - startedAtMs),
        failure: [{ backtrace: [ORPHAN_FAILURE_REASON] }],
        failure_reason: ORPHAN_FAILURE_REASON,
        failure_type: "UnhandledError"
      };
      if (runData.type === "hook") {
        return { event_type: "HookRunFinished", hook_run: finishedRun };
      }
      return { event_type: "TestRunFinished", test_run: finishedRun };
    });
    await batchAndPostEvents(DATA_BATCH_ENDPOINT, "ORPHANED_TEST_RUN_FINALIZATION", events);
    BStackLogger.info(`Finalized ${events.length} orphaned test/hook run(s) left behind by an interrupted run`);
    return events.length;
  } catch (e) {
    BStackLogger.debug("openRunsJournal: failed to finalize orphaned runs: " + e);
    return 0;
  }
}

// src/cleanup.ts
import fs12 from "node:fs";
import util5 from "node:util";

// src/instrumentation/funnelInstrumentation.ts
import os2 from "node:os";
import util4, { format as format2 } from "node:util";
import path10 from "node:path";
import fs11 from "node:fs";

// src/data-store.ts
import path9 from "node:path";
import fs10 from "node:fs";
var workersDataDirPath = path9.join(process.cwd(), "logs", "worker_data");

// src/instrumentation/funnelInstrumentation.ts
function redactCredentialsFromFunnelData(data) {
  if (data) {
    if (data.userName) {
      data.userName = "[REDACTED]";
    }
    if (data.accessKey) {
      data.accessKey = "[REDACTED]";
    }
  }
  return data;
}
async function fireFunnelRequest(data) {
  const { userName, accessKey } = data;
  redactCredentialsFromFunnelData(data);
  BStackLogger.debug("Sending SDK event with data " + util4.inspect(data, { depth: 6 }));
  const encodedAuth = Buffer.from(`${userName}:${accessKey}`, "utf8").toString("base64");
  const response = await fetchWrap(APIUtils.FUNNEL_INSTRUMENTATION_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Basic ${encodedAuth}`
    },
    body: JSON.stringify(data)
  });
  BStackLogger.debug("Funnel Event Response: " + JSON.stringify(await response.text()));
}

// src/cleanup.ts
var BStackCleanup = class _BStackCleanup {
  static async startCleanup() {
    try {
      const funnelDataCleanup = process.argv.includes("--funnelData");
      let funnelData = null;
      if (funnelDataCleanup) {
        const index = process.argv.indexOf("--funnelData");
        const filePath = process.argv[index + 1];
        funnelData = _BStackCleanup.getFunnelDataFromFile(filePath);
      }
      const funnelUser = funnelData?.userName;
      const funnelKey = funnelData?.accessKey;
      if (process.argv.includes("--observability") && funnelData) {
        await this.executeObservabilityCleanup(funnelData);
      }
      if (funnelDataCleanup && funnelData) {
        await this.sendFunnelData(funnelData);
      }
      if (process.argv.includes("--uploadLogs")) {
        await this.executeLogsUpload(funnelUser, funnelKey);
      }
    } catch (err) {
      const error = err;
      BStackLogger.error(error);
    }
    try {
      if (process.argv.includes("--performanceData")) {
        await PerformanceTester.uploadEventsData();
      }
    } catch (er) {
      BStackLogger.debug(`Error in sending events data ${util5.format(er)}`);
    }
  }
  static async executeLogsUpload(funnelUser, funnelKey) {
    try {
      const index = process.argv.indexOf("--uploadLogs");
      const clientBuildUuid = process.argv[index + 1];
      const user = funnelUser || process.env.BROWSERSTACK_USERNAME;
      const key = funnelKey || process.env.BROWSERSTACK_ACCESS_KEY;
      if (!clientBuildUuid || !user || !key) {
        BStackLogger.debug("Skipping logs upload in cleanup: missing uuid or credentials");
        return;
      }
      BStackLogger.debug(`Uploading SDK logs from cleanup for ${clientBuildUuid}`);
      await uploadLogs(user, key, clientBuildUuid);
    } catch (e) {
      BStackLogger.error("Error uploading SDK logs in cleanup: " + getErrorString(e));
    }
  }
  static async executeObservabilityCleanup(funnelData) {
    if (!process.env[BROWSERSTACK_TESTHUB_JWT]) {
      return;
    }
    BStackLogger.debug("Executing Test Reporting and Analytics cleanup");
    try {
      await finalizeOrphanedRuns();
      const result = await stopBuildUpstream();
      if (process.env[BROWSERSTACK_OBSERVABILITY] && process.env[BROWSERSTACK_TESTHUB_UUID]) {
        BStackLogger.info(`
Visit https://automation.browserstack.com/builds/${process.env[BROWSERSTACK_TESTHUB_UUID]} to view build report, insights, and many more debugging information all at one place!
`);
      }
      const status = result && result.status || "failed";
      const message = result && result.message;
      this.updateO11yStopData(funnelData, status, status === "failed" ? message : void 0);
    } catch (e) {
      BStackLogger.error("Error in stopping Test Reporting and Analytics build: " + e);
      this.updateO11yStopData(funnelData, "failed", e);
    }
  }
  static updateO11yStopData(funnelData, status, error = void 0) {
    const toData = funnelData?.event_properties?.productUsage?.testObservability;
    if (!toData) {
      return;
    }
    let existingStopData = toData.events.buildEvents.finished;
    existingStopData = existingStopData || {};
    existingStopData = {
      ...existingStopData,
      status,
      error: getErrorString(error),
      stoppedFrom: "exitHook"
    };
    toData.events.buildEvents.finished = existingStopData;
  }
  static async sendFunnelData(funnelData) {
    try {
      await fireFunnelRequest(funnelData);
      BStackLogger.debug("Funnel data sent successfully from cleanup");
    } catch (e) {
      BStackLogger.error("Error in sending funnel data: " + e);
    }
  }
  static getFunnelDataFromFile(filePath) {
    if (!filePath) {
      return null;
    }
    const content = fs12.readFileSync(filePath, "utf8");
    const data = JSON.parse(content);
    this.removeFunnelDataFile(filePath);
    return data;
  }
  static removeFunnelDataFile(filePath) {
    if (!filePath) {
      return;
    }
    fs12.rmSync(filePath, { force: true });
  }
};
void BStackCleanup.startCleanup();
export {
  BStackCleanup as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3V0aWwudHMiLCAiLi4vc3JjL2xvZ1BhdGNoZXIudHMiLCAiLi4vc3JjL2luc3RydW1lbnRhdGlvbi9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS10ZXN0ZXIudHMiLCAiLi4vc3JjL2JzdGFja0xvZ2dlci50cyIsICIuLi9wYWNrYWdlLmpzb24iLCAiLi4vc3JjL2NvbnN0YW50cy50cyIsICIuLi9zcmMvY2xpL2FwaVV0aWxzLnRzIiwgIi4uL3NyYy9jbGkvY2xpVXRpbHMudHMiLCAiLi4vc3JjL2ZldGNoV3JhcHBlci50cyIsICIuLi9zcmMvaW5zdHJ1bWVudGF0aW9uL3BlcmZvcm1hbmNlL2NvbnN0YW50cy50cyIsICIuLi9zcmMvY2xpL2NsaUxvZ2dlci50cyIsICIuLi9zcmMvY2xpL2ZyYW1ld29ya3MvY29uc3RhbnRzL3Rlc3RGcmFtZXdvcmtDb25zdGFudHMudHMiLCAiLi4vc3JjL3Rlc3RIdWIvdXRpbHMudHMiLCAiLi4vc3JjL3Rlc3RvcmNoZXN0cmF0aW9uL3Rlc3RvcmNoZXJzdHJhdGlvbnV0aWxzLnRzIiwgIi4uL3NyYy9jcmFzaC1yZXBvcnRlci50cyIsICIuLi9zcmMvY29uZmlnQ2FwdHVyZS50cyIsICIuLi9zcmMvdGVzdE9wcy9mZWF0dXJlU3RhdHMudHMiLCAiLi4vc3JjL3Rlc3RPcHMvZmVhdHVyZVVzYWdlLnRzIiwgIi4uL3NyYy90ZXN0T3BzL3Rlc3RPcHNDb25maWcudHMiLCAiLi4vc3JjL3Rlc3RPcHMvdXNhZ2VTdGF0cy50cyIsICIuLi9zcmMvc2NyaXB0cy9hY2Nlc3NpYmlsaXR5LXNjcmlwdHMudHMiLCAiLi4vc3JjL3Rlc3RPcHMvb3BlblJ1bnNKb3VybmFsLnRzIiwgIi4uL3NyYy9jbGVhbnVwLnRzIiwgIi4uL3NyYy9pbnN0cnVtZW50YXRpb24vZnVubmVsSW5zdHJ1bWVudGF0aW9uLnRzIiwgIi4uL3NyYy9kYXRhLXN0b3JlLnRzIl0sCiAgInNvdXJjZVJvb3QiOiAiL2hvbWUvcnVubmVyL3dvcmsvd2Rpby1icm93c2Vyc3RhY2stc2VydmljZS93ZGlvLWJyb3dzZXJzdGFjay1zZXJ2aWNlL3BhY2thZ2VzL2Jyb3dzZXJzdGFjay1zZXJ2aWNlIiwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGhvc3RuYW1lLCBwbGF0Zm9ybSwgdHlwZSwgdmVyc2lvbiwgYXJjaCwgdG1wZGlyIH0gZnJvbSAnbm9kZTpvcydcbmltcG9ydCBjcnlwdG8gZnJvbSAnbm9kZTpjcnlwdG8nXG5pbXBvcnQgZnMgZnJvbSAnbm9kZTpmcydcbmltcG9ydCB6bGliIGZyb20gJ25vZGU6emxpYidcbmltcG9ydCB7IGZvcm1hdCwgcHJvbWlzaWZ5IH0gZnJvbSAnbm9kZTp1dGlsJ1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHV0aWwgZnJvbSAnbm9kZTp1dGlsJ1xuXG5pbXBvcnQgdHlwZSB7IENhcGFiaWxpdGllcywgRnJhbWV3b3JrcywgT3B0aW9ucyB9IGZyb20gJ0B3ZGlvL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBCZWZvcmVDb21tYW5kQXJncywgQWZ0ZXJDb21tYW5kQXJncyB9IGZyb20gJ0B3ZGlvL3JlcG9ydGVyJ1xuXG5pbXBvcnQgdHlwZSB7IEdpdFJlcG9JbmZvIH0gZnJvbSAnZ2l0LXJlcG8taW5mbydcbmltcG9ydCBnaXRSZXBvSW5mbyBmcm9tICdnaXQtcmVwby1pbmZvJ1xuaW1wb3J0IGdpdGNvbmZpZyBmcm9tICdnaXRjb25maWdsb2NhbCdcbmltcG9ydCB0eXBlIHsgQ29sb3JOYW1lIH0gZnJvbSAnY2hhbGsnXG5pbXBvcnQgeyBwZXJmb3JtYW5jZSB9IGZyb20gJ25vZGU6cGVyZl9ob29rcydcbmltcG9ydCBsb2dQYXRjaGVyIGZyb20gJy4vbG9nUGF0Y2hlci5qcydcbmltcG9ydCBQZXJmb3JtYW5jZVRlc3RlciBmcm9tICcuL2luc3RydW1lbnRhdGlvbi9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS10ZXN0ZXIuanMnXG5pbXBvcnQgKiBhcyBQRVJGT1JNQU5DRV9TREtfRVZFTlRTIGZyb20gJy4vaW5zdHJ1bWVudGF0aW9uL3BlcmZvcm1hbmNlL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IGxvZ0J1aWxkRXJyb3IsIGhhbmRsZUVycm9yRm9yT2JzZXJ2YWJpbGl0eSwgaGFuZGxlRXJyb3JGb3JBY2Nlc3NpYmlsaXR5LCBnZXRQcm9kdWN0TWFwRm9yQnVpbGRTdGFydENhbGwgfSBmcm9tICcuL3Rlc3RIdWIvdXRpbHMuanMnXG5pbXBvcnQgdHlwZSBCcm93c2VyU3RhY2tDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBPcmNoZXN0cmF0aW9uVXRpbHMgfSBmcm9tICcuL3Rlc3RvcmNoZXN0cmF0aW9uL3Rlc3RvcmNoZXJzdHJhdGlvbnV0aWxzLmpzJ1xuaW1wb3J0IHR5cGUgeyBFcnJvcnMgfSBmcm9tICcuL3Rlc3RIdWIvdXRpbHMuanMnXG5pbXBvcnQgdHlwZSB7IFVzZXJDb25maWcsIFVwbG9hZFR5cGUsIEJyb3dzZXJzdGFja0NvbmZpZywgQnJvd3NlcnN0YWNrT3B0aW9ucywgTGF1bmNoUmVzcG9uc2UgfSBmcm9tICcuL3R5cGVzLmpzJ1xuaW1wb3J0IHR5cGUgeyBJVGVzdENhc2VIb29rUGFyYW1ldGVyIH0gZnJvbSAnLi9jdWN1bWJlci10eXBlcy5qcydcbmltcG9ydCB7XG4gICAgQlJPV1NFUl9ERVNDUklQVElPTixcbiAgICBVUExPQURfTE9HU19FTkRQT0lOVCxcbiAgICBjb25zb2xlSG9sZGVyLFxuICAgIFRFU1RPUFNfQlVJTERfQ09NUExFVEVEX0VOVixcbiAgICBCUk9XU0VSU1RBQ0tfVEVTVEhVQl9KV1QsXG4gICAgQlJPV1NFUlNUQUNLX09CU0VSVkFCSUxJVFksXG4gICAgQlJPV1NFUlNUQUNLX0FDQ0VTU0lCSUxJVFksXG4gICAgQlJPV1NFUlNUQUNLX0xUUyxcbiAgICBCUk9XU0VSU1RBQ0tfTFRTX1NFU1NJT05fSUQsXG4gICAgVEVTVE9QU19TQ1JFRU5TSE9UX0VOVixcbiAgICBCUk9XU0VSU1RBQ0tfVEVTVEhVQl9VVUlELFxuICAgIEJST1dTRVJTVEFDS19LSUxMX1NJR05BTCxcbiAgICBQRVJGX01FQVNVUkVNRU5UX0VOVixcbiAgICBSRVJVTl9FTlYsXG4gICAgQlJPV1NFUlNUQUNLX1RFU1RfUExBTl9JRCxcbiAgICBNQVhfR0lUX01FVEFfREFUQV9TSVpFX0lOX0JZVEVTLFxuICAgIEdJVF9NRVRBX0RBVEFfVFJVTkNBVEVELFxuICAgIEFQUF9BTExZX0lTU1VFU19TVU1NQVJZX0VORFBPSU5ULFxuICAgIEFQUF9BTExZX0lTU1VFU19FTkRQT0lOVCxcbiAgICBDTElfREVCVUdfTE9HU19GSUxFLFxuICAgIFdESU9fTkFNSU5HX1BSRUZJWCxcbiAgICBTVE9QX0JVSUxEX01BWF9BVFRFTVBUUyxcbiAgICBTVE9QX0JVSUxEX0FUVEVNUFRfVElNRU9VVF9NUyxcbiAgICBTVE9QX0JVSUxEX1RPVEFMX0JVREdFVF9NUyxcbiAgICBTVE9QX0JVSUxEX0JBQ0tPRkZfQkFTRV9NU1xufSBmcm9tICcuL2NvbnN0YW50cy5qcydcbmltcG9ydCBDcmFzaFJlcG9ydGVyIGZyb20gJy4vY3Jhc2gtcmVwb3J0ZXIuanMnXG5pbXBvcnQgeyBCU3RhY2tMb2dnZXIgfSBmcm9tICcuL2JzdGFja0xvZ2dlci5qcydcbmltcG9ydCB7IGNvbGxlY3RDb25maWdGaWxlc0ZvclVwbG9hZCwgZGVkdXBlRW50cnlOYW1lLCBmaW5kUGFja2FnZUpzb25Gb3JVcGxvYWQsIGlzQXV0b0NhcHR1cmVMb2dzRGlzYWJsZWQsIHJlZGFjdFNlbnNpdGl2ZUNvbnRlbnQsIHJlbGF0aXZlRGlyVG9Dd2QgfSBmcm9tICcuL2NvbmZpZ0NhcHR1cmUuanMnXG5pbXBvcnQgVXNhZ2VTdGF0cyBmcm9tICcuL3Rlc3RPcHMvdXNhZ2VTdGF0cy5qcydcbmltcG9ydCBUZXN0T3BzQ29uZmlnIGZyb20gJy4vdGVzdE9wcy90ZXN0T3BzQ29uZmlnLmpzJ1xuaW1wb3J0IHR5cGUgeyBTdGFydEJpblNlc3Npb25SZXNwb25zZSB9IGZyb20gJy4vZ3JwYy9pbmRleC5qcydcbmltcG9ydCBBUElVdGlscyBmcm9tICcuL2NsaS9hcGlVdGlscy5qcydcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ3RhcidcblxuaW1wb3J0IEFjY2Vzc2liaWxpdHlTY3JpcHRzIGZyb20gJy4vc2NyaXB0cy9hY2Nlc3NpYmlsaXR5LXNjcmlwdHMuanMnXG5cbmltcG9ydCB7IF9mZXRjaCBhcyBmZXRjaCB9IGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJ1xuXG5jb25zdCBwR2l0Y29uZmlnID0gcHJvbWlzaWZ5KGdpdGNvbmZpZylcblxuZXhwb3J0IHR5cGUgR2l0TWV0YURhdGEgPSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNoYTogc3RyaW5nO1xuICAgIHNob3J0X3NoYTogc3RyaW5nO1xuICAgIGJyYW5jaDogc3RyaW5nO1xuICAgIHRhZzogc3RyaW5nIHwgbnVsbDtcbiAgICBjb21taXR0ZXI6IHN0cmluZztcbiAgICBjb21taXR0ZXJfZGF0ZTogc3RyaW5nO1xuICAgIGF1dGhvcjogc3RyaW5nO1xuICAgIGF1dGhvcl9kYXRlOiBzdHJpbmc7XG4gICAgY29tbWl0X21lc3NhZ2U6IHN0cmluZztcbiAgICByb290OiBzdHJpbmc7XG4gICAgY29tbW9uX2dpdF9kaXI6IHN0cmluZztcbiAgICB3b3JrdHJlZV9naXRfZGlyOiBzdHJpbmc7XG4gICAgbGFzdF90YWc6IHN0cmluZyB8IG51bGw7XG4gICAgY29tbWl0c19zaW5jZV9sYXN0X3RhZzogbnVtYmVyO1xuICAgIHJlbW90ZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB1cmw6IHN0cmluZyB9Pjtcbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVRVUVTVF9DT05GSUcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnWC1CU1RBQ0stT0JTJzogJ3RydWUnXG4gICAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IENPTE9SUzogUmVjb3JkPHN0cmluZywgQ29sb3JOYW1lPiA9IHtcbiAgICBlcnJvcjogJ3JlZCcsXG4gICAgd2FybjogJ3llbGxvdycsXG4gICAgaW5mbzogJ2N5YW5CcmlnaHQnLFxuICAgIGRlYnVnOiAnZ3JlZW4nLFxuICAgIHRyYWNlOiAnY3lhbicsXG4gICAgcHJvZ3Jlc3M6ICdtYWdlbnRhJ1xufVxuXG4vKipcbiAqIGdldCBicm93c2VyIGRlc2NyaXB0aW9uIGZvciBCcm93c2Vyc3RhY2sgc2VydmljZVxuICogQHBhcmFtIGNhcCBicm93c2VyIGNhcGFibGl0aWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyRGVzY3JpcHRpb24oY2FwOiBXZWJkcml2ZXJJTy5DYXBhYmlsaXRpZXMpIHtcbiAgICBjYXAgPSBjYXAgfHwge31cbiAgICBpZiAoY2FwWydic3RhY2s6b3B0aW9ucyddKSB7XG4gICAgICAgIGNhcCA9IHsgLi4uY2FwLCAuLi5jYXBbJ2JzdGFjazpvcHRpb25zJ10gfSBhcyBXZWJkcml2ZXJJTy5DYXBhYmlsaXRpZXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGVzZSBrZXlzIGRlc2NyaWJlIHRoZSBicm93c2VyIHRoZSB0ZXN0IHdhcyBydW4gb25cbiAgICAgKi9cbiAgICByZXR1cm4gQlJPV1NFUl9ERVNDUklQVElPTlxuICAgICAgICAubWFwKChrKSA9PiAoY2FwKVtrIGFzIGtleW9mIHR5cGVvZiBjYXBdKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJylcbn1cblxuLyoqXG4gKiBnZXQgY29ycmVjdCBicm93c2VyIGNhcGFiaWxpdGllcyBvYmplY3QgaW4gYm90aCBtdWx0aXJlbW90ZSBhbmQgbm9ybWFsIHNldHVwc1xuICogQHBhcmFtIGJyb3dzZXIgYnJvd3NlciBvYmplY3RcbiAqIEBwYXJhbSBjYXBzIGJyb3dzZXIgY2FwYmlsaXRpZXMgb2JqZWN0LiBJbiBjYXNlIG9mIG11bHRpcmVtb3RlLCB0aGUgb2JqZWN0IGl0c2VsZiBzaG91bGQgaGF2ZSBhIHByb3BlcnR5IG5hbWVkICdjYXBhYmlsaXRpZXMnXG4gKiBAcGFyYW0gYnJvd3Nlck5hbWUgYnJvd3NlciBuYW1lIGluIGNhc2Ugb2YgbXVsdGlyZW1vdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJDYXBhYmlsaXRpZXMoYnJvd3NlcjogV2ViZHJpdmVySU8uQnJvd3NlciB8IFdlYmRyaXZlcklPLk11bHRpUmVtb3RlQnJvd3NlciwgY2Fwcz86IENhcGFiaWxpdGllcy5SZXNvbHZlZFRlc3RydW5uZXJDYXBhYmlsaXRpZXMsIGJyb3dzZXJOYW1lPzogc3RyaW5nKSB7XG4gICAgaWYgKCFicm93c2VyLmlzTXVsdGlyZW1vdGUpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uYnJvd3Nlci5jYXBhYmlsaXRpZXMsIC4uLmNhcHMgfSBhcyBXZWJkcml2ZXJJTy5DYXBhYmlsaXRpZXNcbiAgICB9XG5cbiAgICBjb25zdCBtdWx0aUNhcHMgPSBjYXBzIGFzIENhcGFiaWxpdGllcy5SZXF1ZXN0ZWRNdWx0aXJlbW90ZUNhcGFiaWxpdGllc1xuICAgIGNvbnN0IGdsb2JhbENhcCA9IGJyb3dzZXJOYW1lICYmIGJyb3dzZXIuZ2V0SW5zdGFuY2UoYnJvd3Nlck5hbWUpID8gYnJvd3Nlci5nZXRJbnN0YW5jZShicm93c2VyTmFtZSkuY2FwYWJpbGl0aWVzIDoge31cbiAgICBjb25zdCBjYXAgPSBicm93c2VyTmFtZSAmJiBtdWx0aUNhcHNbYnJvd3Nlck5hbWVdID8gbXVsdGlDYXBzW2Jyb3dzZXJOYW1lXS5jYXBhYmlsaXRpZXMgOiB7fVxuICAgIHJldHVybiB7IC4uLmdsb2JhbENhcCwgLi4uY2FwIH0gYXMgV2ViZHJpdmVySU8uQ2FwYWJpbGl0aWVzXG59XG5cbi8qKlxuICogY2hlY2sgZm9yIGJyb3dzZXJzdGFjayBXM0MgY2FwYWJpbGl0aWVzLiBEb2VzIG5vdCBzdXBwb3J0IGxlZ2FjeSBjYXBhYmlsaXRpZXNcbiAqIEBwYXJhbSBjYXAgYnJvd3NlciBjYXBhYmlsaXRpZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlcnN0YWNrQ2FwYWJpbGl0eShjYXA/OiBXZWJkcml2ZXJJTy5DYXBhYmlsaXRpZXMpIHtcbiAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgY2FwICYmXG4gICAgICAgICAgICBjYXBbJ2JzdGFjazpvcHRpb25zJ10gJiZcbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZSBpZiB0aGUgb25seSBjYXAgaW4gYnN0YWNrOm9wdGlvbnMgaXMgd2Rpb1NlcnZpY2UsXG4gICAgICAgICAgICAvLyBhcyB0aGF0IGlzIGFkZGVkIGJ5IHRoZSBzZXJ2aWNlIGFuZCBub3QgcHJlc2VudCBpbiB1c2VyIHBhc3NlZCBjYXBzXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNhcFsnYnN0YWNrOm9wdGlvbnMnXSkubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICAgICAgY2FwWydic3RhY2s6b3B0aW9ucyddLndkaW9TZXJ2aWNlXG4gICAgICAgICAgICApXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50U3VpdGVOYW1lKGZ1bGxUaXRsZTogc3RyaW5nLCB0ZXN0U3VpdGVUaXRsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBmdWxsVGl0bGVXb3JkcyA9IGZ1bGxUaXRsZS5zcGxpdCgnICcpXG4gICAgY29uc3QgdGVzdFN1aXRlVGl0bGVXb3JkcyA9IHRlc3RTdWl0ZVRpdGxlLnNwbGl0KCcgJylcbiAgICBjb25zdCBzaG9ydGVzdExlbmd0aCA9IE1hdGgubWluKGZ1bGxUaXRsZVdvcmRzLmxlbmd0aCwgdGVzdFN1aXRlVGl0bGVXb3Jkcy5sZW5ndGgpXG4gICAgbGV0IGMgPSAwXG4gICAgbGV0IHBhcmVudFN1aXRlTmFtZSA9ICcnXG4gICAgd2hpbGUgKGMgPCBzaG9ydGVzdExlbmd0aCAmJiBmdWxsVGl0bGVXb3Jkc1tjXSA9PT0gdGVzdFN1aXRlVGl0bGVXb3Jkc1tjXSkge1xuICAgICAgICBwYXJlbnRTdWl0ZU5hbWUgKz0gZnVsbFRpdGxlV29yZHNbYysrXSArICcgJ1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50U3VpdGVOYW1lLnRyaW0oKVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzRXJyb3IoZXJyb3I6IEVycm9yLCBmbjogRnVuY3Rpb24sIGFyZ3M6IHVua25vd25bXSkge1xuICAgIEJTdGFja0xvZ2dlci5lcnJvcihgRXJyb3IgaW4gZXhlY3V0aW5nICR7Zm4ubmFtZX0gd2l0aCBhcmdzICR7YXJnc306ICR7ZXJyb3J9YClcbiAgICBsZXQgYXJnc1N0cmluZzogc3RyaW5nXG4gICAgdHJ5IHtcbiAgICAgICAgYXJnc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpXG4gICAgfSBjYXRjaCB7XG4gICAgICAgIGFyZ3NTdHJpbmcgPSB1dGlsLmluc3BlY3QoYXJncywgeyBkZXB0aDogMiB9KVxuICAgIH1cbiAgICBDcmFzaFJlcG9ydGVyLnVwbG9hZENyYXNoUmVwb3J0KGBFcnJvciBpbiBleGVjdXRpbmcgJHtmbi5uYW1lfSB3aXRoIGFyZ3MgJHthcmdzU3RyaW5nfSA6ICR7ZXJyb3J9YCwgZXJyb3IgJiYgZXJyb3Iuc3RhY2sgfHwgJ3Vua25vd24gZXJyb3InKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbzExeUVycm9ySGFuZGxlcihmbjogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3M6IHVua25vd25bXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGZ1bmN0aW9uVG9IYW5kbGUgPSBmblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52W1BFUkZfTUVBU1VSRU1FTlRfRU5WXSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25Ub0hhbmRsZSA9IHBlcmZvcm1hbmNlLnRpbWVyaWZ5KGZ1bmN0aW9uVG9IYW5kbGUgYXMgYW55KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZnVuY3Rpb25Ub0hhbmRsZSguLi5hcmdzKVxuICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmNhdGNoKGVycm9yID0+IHByb2Nlc3NFcnJvcihlcnJvciwgZm4sIGFyZ3MpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcHJvY2Vzc0Vycm9yKGVycm9yIGFzIEVycm9yLCBmbiwgYXJncylcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9ySGFuZGxlcihmbjogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3M6IHVua25vd25bXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25Ub0hhbmRsZSA9IGZuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmdW5jdGlvblRvSGFuZGxlKC4uLmFyZ3MpXG4gICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuY2F0Y2goZXJyb3IgPT4gQlN0YWNrTG9nZ2VyLmVycm9yKGBFcnJvciBpbiBleGVjdXRpbmcgJHtmbi5uYW1lfSB3aXRoIGFyZ3MgJHthcmdzfTogJHtlcnJvcn1gKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcihgRXJyb3IgaW4gZXhlY3V0aW5nICR7Zm4ubmFtZX0gd2l0aCBhcmdzICR7YXJnc306ICR7ZXJyb3J9YClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5vZGVSZXF1ZXN0KHJlcXVlc3RUeXBlOiBzdHJpbmcsIGFwaUVuZHBvaW50OiBzdHJpbmcsIG9wdGlvbnM6IFJlcXVlc3RJbml0LCBhcGlVcmw6IHN0cmluZywgdGltZW91dDogbnVtYmVyID0gMTIwMDAwKSB7XG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gY29udHJvbGxlci5hYm9ydCgpLCB0aW1lb3V0KVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS8ke2FwaUVuZHBvaW50fWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdFR5cGUsXG4gICAgICAgICAgICBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIENsZWFyIHRoZSB0aW1lb3V0IGFzIHRoZSByZXF1ZXN0IGNvbXBsZXRlZCBzdWNjZXNzZnVsbHlcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcblxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgRXJyb3IgaW4gZmlyaW5nIHJlcXVlc3QgJHthcGlVcmx9LyR7YXBpRW5kcG9pbnR9OiAke2Zvcm1hdChlcnJvcil9YClcbiAgICAgICAgY29uc3QgaXNMb2dVcGxvYWQgPSBhcGlFbmRwb2ludCA9PT0gVVBMT0FEX0xPR1NfRU5EUE9JTlRcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2VKc29uID0gZXJyb3IucmVzcG9uc2UuYm9keSA/IEpTT04ucGFyc2UoZXJyb3IucmVzcG9uc2UuYm9keS50b1N0cmluZygpKSA6IG51bGxcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZUpzb24gPyBlcnJvck1lc3NhZ2VKc29uLm1lc3NhZ2UgOiBudWxsXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGAke2Vycm9yTWVzc2FnZX0gLSAke2Vycm9yLnN0YWNrfWBcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2dVcGxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmVycm9yKG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNMb2dVcGxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNMb2dVcGxvYWQpIHtcbiAgICAgICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYEZhaWxlZCB0byBmaXJlIGFwaSByZXF1ZXN0IGR1ZSB0byAke2Vycm9yfSAtICR7ZXJyb3Iuc3RhY2t9YClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgRmFpbGVkIHRvIGZpcmUgYXBpIHJlcXVlc3QgZHVlIHRvICR7ZXJyb3J9IC0gJHtlcnJvci5zdGFja31gKVxuICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gaHR0cHM6Ly90dWdheWlsaWsubWVkaXVtLmNvbS9lcnJvci1oYW5kbGluZy12aWEtdHJ5LWNhdGNoLXByb3h5LWluLWphdmFzY3JpcHQtNTQxMTZkYmY3ODNmXG4vKlxuICAgIEEgY2xhc3Mgd3JhcHBlciBmb3IgZXJyb3IgaGFuZGxpbmcuIFRoZSB3cmFwcGVyIHdyYXBzIGFsbCB0aGUgbWV0aG9kcyBvZiB0aGUgY2xhc3Mgd2l0aCBhIGVycm9yIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgSWYgYW55IGV4Y2VwdGlvbiBvY2N1cnMgaW4gYW55IG9mIHRoZSBjbGFzcyBtZXRob2QsIHRoYXQgd2lsbCBnZXQgY2F1Z2h0IGluIHRoZSB3cmFwcGVyIHdoaWNoIGxvZ3MgYW5kIHJlcG9ydHMgdGhlIGVycm9yLlxuICovXG50eXBlIENsYXNzVHlwZSA9IHsgbmV3KC4uLmFyZ3M6IHVua25vd25bXSk6IHVua25vd247IH0gLy8gQSBnZW5lcmljIHR5cGUgZm9yIGEgY2xhc3NcbmV4cG9ydCBmdW5jdGlvbiBvMTF5Q2xhc3NFcnJvckhhbmRsZXI8VCBleHRlbmRzIENsYXNzVHlwZT4oZXJyb3JDbGFzczogVCk6IFQge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IGVycm9yQ2xhc3MucHJvdG90eXBlXG5cbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG90eXBlKS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBlcnJvckNsYXNzXG4gICAgfVxuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG90eXBlKS5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHByb3RvdHlwZVttZXRob2ROYW1lXVxuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ2Z1bmN0aW9uJyAmJiBtZXRob2ROYW1lICE9PSAnY29uc3RydWN0b3InICYmIG1ldGhvZE5hbWUgIT09ICdjb21tYW5kV3JhcHBlcicpIHtcbiAgICAgICAgICAgIC8vIEluIG9yZGVyIHRvIHByZXNlcnZlIHRoaXMgY29udGV4dCwgbmVlZCB0byBkZWZpbmUgbGlrZSB0aGlzXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKC4uLmFyZ3M6IHVua25vd25bXSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gKHByb2Nlc3MuZW52W1BFUkZfTUVBU1VSRU1FTlRfRU5WXSA/IHBlcmZvcm1hbmNlLnRpbWVyaWZ5KG1ldGhvZCkgOiBtZXRob2QpLmNhbGwodGhpcywgLi4uYXJncylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5jYXRjaChlcnJvciA9PiBwcm9jZXNzRXJyb3IoZXJyb3IsIG1ldGhvZCwgYXJncykpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG5cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRXJyb3IoZXJyIGFzIEVycm9yLCBtZXRob2QsIGFyZ3MpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBlcnJvckNsYXNzXG59XG5cbmV4cG9ydCBjb25zdCBwcm9jZXNzVGVzdE9ic2VydmFiaWxpdHlSZXNwb25zZSA9IChyZXNwb25zZTogTGF1bmNoUmVzcG9uc2UpID0+IHtcbiAgICBpZiAoIXJlc3BvbnNlLm9ic2VydmFiaWxpdHkpIHtcbiAgICAgICAgaGFuZGxlRXJyb3JGb3JPYnNlcnZhYmlsaXR5KG51bGwpXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIXJlc3BvbnNlLm9ic2VydmFiaWxpdHkuc3VjY2Vzcykge1xuICAgICAgICBoYW5kbGVFcnJvckZvck9ic2VydmFiaWxpdHkocmVzcG9uc2Uub2JzZXJ2YWJpbGl0eSBhcyBFcnJvcnMpXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBwcm9jZXNzLmVudltCUk9XU0VSU1RBQ0tfT0JTRVJWQUJJTElUWV0gPSAndHJ1ZSdcbiAgICBpZiAocmVzcG9uc2Uub2JzZXJ2YWJpbGl0eS5vcHRpb25zLmFsbG93X3NjcmVlbnNob3RzKSB7XG4gICAgICAgIHByb2Nlc3MuZW52W1RFU1RPUFNfU0NSRUVOU0hPVF9FTlZdID0gcmVzcG9uc2Uub2JzZXJ2YWJpbGl0eS5vcHRpb25zLmFsbG93X3NjcmVlbnNob3RzLnRvU3RyaW5nKClcbiAgICB9XG59XG5cbmludGVyZmFjZSBEYXRhRWxlbWVudCB7XG4gICAgW2tleTogc3RyaW5nXTogdW5rbm93blxufVxuXG5leHBvcnQgY29uc3QganNvbmlmeUFjY2Vzc2liaWxpdHlBcnJheSA9IChcbiAgICBkYXRhQXJyYXk6IERhdGFFbGVtZW50W10sXG4gICAga2V5TmFtZToga2V5b2YgRGF0YUVsZW1lbnQsXG4gICAgdmFsdWVOYW1lOiBrZXlvZiBEYXRhRWxlbWVudFxuKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPT4ge1xuICAgIGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fVxuICAgIGRhdGFBcnJheS5mb3JFYWNoKChlbGVtZW50OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICAgICAgICByZXN1bHRbZWxlbWVudFtrZXlOYW1lXSBhcyBzdHJpbmddID0gZWxlbWVudFt2YWx1ZU5hbWVdXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCBwcm9jZXNzQWNjZXNzaWJpbGl0eVJlc3BvbnNlID0gKHJlc3BvbnNlOiBMYXVuY2hSZXNwb25zZSB8IFN0YXJ0QmluU2Vzc2lvblJlc3BvbnNlLCBvcHRpb25zOiBCcm93c2Vyc3RhY2tDb25maWcgJiBPcHRpb25zLlRlc3RydW5uZXIpID0+IHtcbiAgICBpZiAoIXJlc3BvbnNlLmFjY2Vzc2liaWxpdHkpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaGFuZGxlRXJyb3JGb3JBY2Nlc3NpYmlsaXR5KG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghcmVzcG9uc2UuYWNjZXNzaWJpbGl0eS5zdWNjZXNzKSB7XG4gICAgICAgIGhhbmRsZUVycm9yRm9yQWNjZXNzaWJpbGl0eShyZXNwb25zZS5hY2Nlc3NpYmlsaXR5IGFzIEVycm9ycylcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLmFjY2Vzc2liaWxpdHkub3B0aW9ucykge1xuICAgICAgICBjb25zdCB7IGFjY2Vzc2liaWxpdHlUb2tlbiwgcG9sbGluZ1RpbWVvdXQsIHNjYW5uZXJWZXJzaW9uIH0gPSBqc29uaWZ5QWNjZXNzaWJpbGl0eUFycmF5KHJlc3BvbnNlLmFjY2Vzc2liaWxpdHkub3B0aW9ucy5jYXBhYmlsaXRpZXMgYXMgQXJyYXk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+LCAnbmFtZScsICd2YWx1ZScpXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGpzb25pZnlBY2Nlc3NpYmlsaXR5QXJyYXkocmVzcG9uc2UuYWNjZXNzaWJpbGl0eS5vcHRpb25zLmNhcGFiaWxpdGllcyBhcyBBcnJheTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4sICduYW1lJywgJ3ZhbHVlJylcbiAgICAgICAgY29uc3Qgc2NyaXB0c0pzb24gPSB7XG4gICAgICAgICAgICAnc2NyaXB0cyc6IGpzb25pZnlBY2Nlc3NpYmlsaXR5QXJyYXkocmVzcG9uc2UuYWNjZXNzaWJpbGl0eS5vcHRpb25zLnNjcmlwdHMgYXMgQXJyYXk8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+LCAnbmFtZScsICdjb21tYW5kJyksXG4gICAgICAgICAgICAnY29tbWFuZHMnOiByZXNwb25zZS5hY2Nlc3NpYmlsaXR5Lm9wdGlvbnMuY29tbWFuZHNUb1dyYXA/LmNvbW1hbmRzID8/IFtdLFxuICAgICAgICAgICAgJ25vbkJTdGFja0luZnJhQTExeUNocm9tZU9wdGlvbnMnOiByZXN1bHRbJ2dvb2c6Y2hyb21lT3B0aW9ucyddXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjYW5uZXJWZXJzaW9uKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5CU1RBQ0tfQTExWV9TQ0FOTkVSX1ZFUlNJT04gPSBzY2FubmVyVmVyc2lvbiBhcyBzdHJpbmdcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgQWNjZXNzaWJpbGl0eSBzY2FubmVyVmVyc2lvbiAke3NjYW5uZXJWZXJzaW9ufWApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjY2Vzc2liaWxpdHlUb2tlbikge1xuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuQlNUQUNLX0ExMVlfSldUID0gYWNjZXNzaWJpbGl0eVRva2VuIGFzIHN0cmluZ1xuICAgICAgICAgICAgcHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX0FDQ0VTU0lCSUxJVFldID0gJ3RydWUnXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvbGxpbmdUaW1lb3V0KSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5CU1RBQ0tfQTExWV9QT0xMSU5HX1RJTUVPVVQgPSBwb2xsaW5nVGltZW91dCBhcyBzdHJpbmdcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NyaXB0c0pzb24pIHtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgZml4IHR5cGVcbiAgICAgICAgICAgIEFjY2Vzc2liaWxpdHlTY3JpcHRzLnVwZGF0ZShzY3JpcHRzSnNvbilcbiAgICAgICAgICAgIEFjY2Vzc2liaWxpdHlTY3JpcHRzLnN0b3JlKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NMYXVuY2hCdWlsZFJlc3BvbnNlID0gKHJlc3BvbnNlOiBMYXVuY2hSZXNwb25zZSwgb3B0aW9uczogQnJvd3NlcnN0YWNrQ29uZmlnICYgT3B0aW9ucy5UZXN0cnVubmVyKSA9PiB7XG4gICAgaWYgKG9wdGlvbnMudGVzdE9ic2VydmFiaWxpdHkpIHtcbiAgICAgICAgcHJvY2Vzc1Rlc3RPYnNlcnZhYmlsaXR5UmVzcG9uc2UocmVzcG9uc2UpXG4gICAgfVxuICAgIHByb2Nlc3NBY2Nlc3NpYmlsaXR5UmVzcG9uc2UocmVzcG9uc2UsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBsYXVuY2hUZXN0U2Vzc2lvbiA9IFBlcmZvcm1hbmNlVGVzdGVyLm1lYXN1cmVXcmFwcGVyKFBFUkZPUk1BTkNFX1NES19FVkVOVFMuVEVTVEhVQl9FVkVOVFMuU1RBUlQsIG8xMXlFcnJvckhhbmRsZXIoYXN5bmMgZnVuY3Rpb24gbGF1bmNoVGVzdFNlc3Npb24ob3B0aW9uczogQnJvd3NlcnN0YWNrQ29uZmlnICYgT3B0aW9ucy5UZXN0cnVubmVyLCBjb25maWc6IE9wdGlvbnMuVGVzdHJ1bm5lciwgYnNDb25maWc6IFVzZXJDb25maWcsIGJTdGFja0NvbmZpZzogQnJvd3NlclN0YWNrQ29uZmlnLCBhY2Nlc3NpYmlsaXR5QXV0b21hdGlvbj86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsYXVuY2hCdWlsZFVzYWdlID0gVXNhZ2VTdGF0cy5nZXRJbnN0YW5jZSgpLmxhdW5jaEJ1aWxkVXNhZ2VcbiAgICBsYXVuY2hCdWlsZFVzYWdlLnRyaWdnZXJlZCgpXG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBmb3JtYXQ6ICdqc29uJyxcbiAgICAgICAgcHJvamVjdF9uYW1lOiBnZXRPYnNlcnZhYmlsaXR5UHJvamVjdChvcHRpb25zLCBic0NvbmZpZy5wcm9qZWN0TmFtZSksXG4gICAgICAgIG5hbWU6IGdldE9ic2VydmFiaWxpdHlCdWlsZChvcHRpb25zLCBic0NvbmZpZy5idWlsZE5hbWUpLFxuICAgICAgICBidWlsZF9pZGVudGlmaWVyOiBic0NvbmZpZy5idWlsZElkZW50aWZpZXIsXG4gICAgICAgIHN0YXJ0ZWRfYXQ6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLFxuICAgICAgICB0YWdzOiBnZXRPYnNlcnZhYmlsaXR5QnVpbGRUYWdzKG9wdGlvbnMsIGJzQ29uZmlnLmJ1aWxkVGFnKSxcbiAgICAgICAgaG9zdF9pbmZvOiB7XG4gICAgICAgICAgICBob3N0bmFtZTogaG9zdG5hbWUoKSxcbiAgICAgICAgICAgIHBsYXRmb3JtOiBwbGF0Zm9ybSgpLFxuICAgICAgICAgICAgdHlwZTogdHlwZSgpLFxuICAgICAgICAgICAgdmVyc2lvbjogdmVyc2lvbigpLFxuICAgICAgICAgICAgYXJjaDogYXJjaCgpXG4gICAgICAgIH0sXG4gICAgICAgIGNpX2luZm86IGdldENpSW5mbygpLFxuICAgICAgICBidWlsZF9ydW5faWRlbnRpZmllcjogcHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX0JVSUxEX1JVTl9JREVOVElGSUVSLFxuICAgICAgICBmYWlsZWRfdGVzdHNfcmVydW46IHByb2Nlc3MuZW52W1JFUlVOX0VOVl0gfHwgZmFsc2UsXG4gICAgICAgIHZlcnNpb25fY29udHJvbDogYXdhaXQgZ2V0R2l0TWV0YURhdGEoKSxcbiAgICAgICAgYWNjZXNzaWJpbGl0eToge1xuICAgICAgICAgICAgc2V0dGluZ3M6IG9wdGlvbnMuYWNjZXNzaWJpbGl0eU9wdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAgYnJvd3NlcnN0YWNrQXV0b21hdGlvbjogc2hvdWxkQWRkU2VydmljZVZlcnNpb24oY29uZmlnLCBvcHRpb25zLnRlc3RPYnNlcnZhYmlsaXR5KSxcbiAgICAgICAgZnJhbWV3b3JrX2RldGFpbHM6IHtcbiAgICAgICAgICAgIGZyYW1ld29ya05hbWU6IFdESU9fTkFNSU5HX1BSRUZJWCArIGNvbmZpZy5mcmFtZXdvcmssXG4gICAgICAgICAgICBmcmFtZXdvcmtWZXJzaW9uOiBic0NvbmZpZy5ic3RhY2tTZXJ2aWNlVmVyc2lvbixcbiAgICAgICAgICAgIHNka1ZlcnNpb246IGJzQ29uZmlnLmJzdGFja1NlcnZpY2VWZXJzaW9uLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6ICdFQ01BU2NyaXB0JyxcbiAgICAgICAgICAgIHRlc3RGcmFtZXdvcms6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnV2ViZHJpdmVySU8nLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IGJzQ29uZmlnLmJzdGFja1NlcnZpY2VWZXJzaW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb2R1Y3RfbWFwOiBnZXRQcm9kdWN0TWFwRm9yQnVpbGRTdGFydENhbGwoYlN0YWNrQ29uZmlnLCBhY2Nlc3NpYmlsaXR5QXV0b21hdGlvbiksXG4gICAgICAgIGNvbmZpZzoge30sXG4gICAgICAgIHRlc3Rfb3JjaGVzdHJhdGlvbjogT3JjaGVzdHJhdGlvblV0aWxzLmdldEluc3RhbmNlKGNvbmZpZyk/LmdldEJ1aWxkU3RhcnREYXRhKCkgfHwge30sXG4gICAgICAgIHRlc3RfbWFuYWdlbWVudDoge1xuICAgICAgICAgICAgdGVzdF9wbGFuX2lkOiBnZXRUZXN0UGxhbklkKG9wdGlvbnMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWNjZXNzaWJpbGl0eUF1dG9tYXRpb24gJiYgKGlzVHVyYm9TY2FsZShvcHRpb25zKSB8fCBkYXRhLmJyb3dzZXJzdGFja0F1dG9tYXRpb24gPT09IGZhbHNlKSl7XG4gICAgICAgIGRhdGEuYWNjZXNzaWJpbGl0eS5zZXR0aW5ncyA/Pz0ge31cbiAgICAgICAgZGF0YS5hY2Nlc3NpYmlsaXR5LnNldHRpbmdzLmluY2x1ZGVFbmNvZGVkRXh0ZW5zaW9uID0gdHJ1ZVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhDcmFzaFJlcG9ydGVyLnVzZXJDb25maWdGb3JSZXBvcnRpbmcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgQ3Jhc2hSZXBvcnRlci51c2VyQ29uZmlnRm9yUmVwb3J0aW5nID0gcHJvY2Vzcy5lbnYuVVNFUl9DT05GSUdfRk9SX1JFUE9SVElORyAhPT0gdW5kZWZpbmVkID8gSlNPTi5wYXJzZShwcm9jZXNzLmVudi5VU0VSX0NPTkZJR19GT1JfUkVQT1JUSU5HKSA6IHt9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gQlN0YWNrTG9nZ2VyLmVycm9yKGBbQ3Jhc2hfUmVwb3J0X1VwbG9hZF0gRmFpbGVkIHRvIHBhcnNlIHVzZXIgY29uZmlnIHdoaWxlIHNlbmRpbmcgYnVpbGQgc3RhcnQgZXZlbnQgZHVlIHRvICR7ZXJyb3J9YClcbiAgICB9XG4gICAgZGF0YS5jb25maWcgPSBDcmFzaFJlcG9ydGVyLnVzZXJDb25maWdGb3JSZXBvcnRpbmdcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke0FQSVV0aWxzLkRBVEFfRU5EUE9JTlR9L2FwaS92Mi9idWlsZHNgXG4gICAgICAgIGNvbnN0IGVuY29kZWRBdXRoID0gQnVmZmVyLmZyb20oYCR7Z2V0T2JzZXJ2YWJpbGl0eVVzZXIob3B0aW9ucywgY29uZmlnKX06JHtnZXRPYnNlcnZhYmlsaXR5S2V5KG9wdGlvbnMsIGNvbmZpZyl9YCwgJ3V0ZjgnKS50b1N0cmluZygnYmFzZTY0JylcbiAgICAgICAgY29uc3QgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAgICAgICAgIC4uLkRFRkFVTFRfUkVRVUVTVF9DT05GSUcuaGVhZGVycyxcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke2VuY29kZWRBdXRofWAsXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGpzb25SZXNwb25zZTogTGF1bmNoUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgZGVsZXRlIGRhdGE/LmFjY2Vzc2liaWxpdHk/LnNldHRpbmdzPy5pbmNsdWRlRW5jb2RlZEV4dGVuc2lvblxuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFtTdGFydF9CdWlsZF0gU3VjY2VzcyByZXNwb25zZTogJHtKU09OLnN0cmluZ2lmeShqc29uUmVzcG9uc2UpfWApXG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgVGVzdCBQbGFuIElkIHNlbnQgaW4gcmVxdWVzdDogJHtnZXRUZXN0UGxhbklkKG9wdGlvbnMpfWApXG4gICAgICAgIHByb2Nlc3MuZW52W1RFU1RPUFNfQlVJTERfQ09NUExFVEVEX0VOVl0gPSAndHJ1ZSdcbiAgICAgICAgaWYgKGpzb25SZXNwb25zZS5qd3QpIHtcbiAgICAgICAgICAgIHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19URVNUSFVCX0pXVF0gPSBqc29uUmVzcG9uc2Uuand0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGpzb25SZXNwb25zZS5idWlsZF9oYXNoZWRfaWQpIHtcbiAgICAgICAgICAgIHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19URVNUSFVCX1VVSURdID0ganNvblJlc3BvbnNlLmJ1aWxkX2hhc2hlZF9pZFxuICAgICAgICAgICAgVGVzdE9wc0NvbmZpZy5nZXRJbnN0YW5jZSgpLmJ1aWxkSGFzaGVkSWQgPSBqc29uUmVzcG9uc2UuYnVpbGRfaGFzaGVkX2lkXG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuaW5mbyhgVGVzdGh1YiBzdGFydGVkIHdpdGggaWQ6ICR7VGVzdE9wc0NvbmZpZy5nZXRJbnN0YW5jZSgpPy5idWlsZEhhc2hlZElkfWApXG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc0xhdW5jaEJ1aWxkUmVzcG9uc2UoanNvblJlc3BvbnNlLCBvcHRpb25zKVxuICAgICAgICBsYXVuY2hCdWlsZFVzYWdlLnN1Y2Nlc3MoKVxuICAgICAgICByZXR1cm4ganNvblJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBUZXN0SHViIGJ1aWxkIHN0YXJ0IGZhaWxlZDogJHtmb3JtYXQoZXJyb3IpfWApXG4gICAgICAgIGlmICghKGVycm9yIGFzIEVycm9yICYgeyBzdWNjZXNzOiBib29sZWFuIH0pLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxhdW5jaEJ1aWxkVXNhZ2UuZmFpbGVkKGVycm9yKVxuICAgICAgICAgICAgbG9nQnVpbGRFcnJvcihlcnJvciBhcyBFcnJvcnMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgfVxufSkpXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgY29uc3QgdmFsaWRhdGVDYXBzV2l0aEFwcEExMXkgPSAocGxhdGZvcm1NZXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnk7IH0pID0+IHtcbiAgICAvKiBDaGVjayBpZiB0aGUgY3VycmVudCBkcml2ZXIgcGxhdGZvcm0gaXMgZWxpZ2libGUgZm9yIEFwcEFjY2Vzc2liaWxpdHkgc2NhbiAqL1xuICAgIGlmIChcbiAgICAgICAgKHBsYXRmb3JtTWV0YT8ucGxhdGZvcm1fbmFtZSAmJiBTdHJpbmcocGxhdGZvcm1NZXRhPy5wbGF0Zm9ybV9uYW1lKS50b0xvd2VyQ2FzZSgpID09PSAnYW5kcm9pZCcpICYmXG4gICAgICAgIChwbGF0Zm9ybU1ldGE/LnBsYXRmb3JtX3ZlcnNpb24gJiYgcGFyc2VJbnQocGxhdGZvcm1NZXRhPy5wbGF0Zm9ybV92ZXJzaW9uPy50b1N0cmluZygpKSA8IDExKVxuICAgICkge1xuICAgICAgICBCU3RhY2tMb2dnZXIud2FybignQXBwIEFjY2Vzc2liaWxpdHkgQXV0b21hdGlvbiB0ZXN0cyBhcmUgc3VwcG9ydGVkIG9uIE9TIHZlcnNpb24gMTEgYW5kIGFib3ZlIGZvciBBbmRyb2lkIGRldmljZXMuJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5leHBvcnQgY29uc3QgdmFsaWRhdGVDYXBzV2l0aEExMXkgPSAoZGV2aWNlTmFtZT86IGFueSwgcGxhdGZvcm1NZXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnk7IH0sIGNocm9tZU9wdGlvbnM/OiBhbnkpID0+IHtcbiAgICAvKiBDaGVjayBpZiB0aGUgY3VycmVudCBkcml2ZXIgcGxhdGZvcm0gaXMgZWxpZ2libGUgZm9yIEFjY2Vzc2liaWxpdHkgc2NhbiAqL1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChkZXZpY2VOYW1lKSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIud2FybignQWNjZXNzaWJpbGl0eSBBdXRvbWF0aW9uIHdpbGwgcnVuIG9ubHkgb24gRGVza3RvcCBicm93c2Vycy4nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxhdGZvcm1NZXRhPy5icm93c2VyX25hbWU/LnRvTG93ZXJDYXNlKCkgIT09ICdjaHJvbWUnKSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIud2FybignQWNjZXNzaWJpbGl0eSBBdXRvbWF0aW9uIHdpbGwgcnVuIG9ubHkgb24gQ2hyb21lIGJyb3dzZXJzLicpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBicm93c2VyVmVyc2lvbiA9IHBsYXRmb3JtTWV0YT8uYnJvd3Nlcl92ZXJzaW9uXG4gICAgICAgIGlmICggIWlzVW5kZWZpbmVkKGJyb3dzZXJWZXJzaW9uKSAmJiAhKGJyb3dzZXJWZXJzaW9uID09PSAnbGF0ZXN0JyB8fCBwYXJzZUZsb2F0KGJyb3dzZXJWZXJzaW9uICsgJycpID4gOTQpKSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIud2FybignQWNjZXNzaWJpbGl0eSBBdXRvbWF0aW9uIHdpbGwgcnVuIG9ubHkgb24gQ2hyb21lIGJyb3dzZXIgdmVyc2lvbiBncmVhdGVyIHRoYW4gOTQuJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNocm9tZU9wdGlvbnM/LmFyZ3M/LmluY2x1ZGVzKCctLWhlYWRsZXNzJykpIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci53YXJuKCdBY2Nlc3NpYmlsaXR5IEF1dG9tYXRpb24gd2lsbCBub3QgcnVuIG9uIGxlZ2FjeSBoZWFkbGVzcyBtb2RlLiBTd2l0Y2ggdG8gbmV3IGhlYWRsZXNzIG1vZGUgb3IgYXZvaWQgdXNpbmcgaGVhZGxlc3MgbW9kZS4nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYEV4Y2VwdGlvbiBpbiBjaGVja2luZyBjYXBhYmlsaXRpZXMgY29tcGF0aWJpbGl0eSB3aXRoIEFjY2Vzc2liaWxpdHkuIEVycm9yOiAke2Vycm9yfWApXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVDYXBzV2l0aE5vbkJzdGFja0ExMXkgPSAoYnJvd3Nlck5hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQsIGJyb3dzZXJWZXJzaW9uPzpzdHJpbmcgfCB1bmRlZmluZWQgKSAgPT4ge1xuXG4gICAgaWYgKGJyb3dzZXJOYW1lPy50b0xvd2VyQ2FzZSgpICE9PSAnY2hyb21lJykge1xuICAgICAgICBCU3RhY2tMb2dnZXIud2FybignQWNjZXNzaWJpbGl0eSBBdXRvbWF0aW9uIHdpbGwgcnVuIG9ubHkgb24gQ2hyb21lIGJyb3dzZXJzLicpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGJyb3dzZXJWZXJzaW9uKSAmJiAhKGJyb3dzZXJWZXJzaW9uID09PSAnbGF0ZXN0JyB8fCBwYXJzZUZsb2F0KGJyb3dzZXJWZXJzaW9uICsgJycpID4gMTAwKSkge1xuICAgICAgICBCU3RhY2tMb2dnZXIud2FybignQWNjZXNzaWJpbGl0eSBBdXRvbWF0aW9uIHdpbGwgcnVuIG9ubHkgb24gQ2hyb21lIGJyb3dzZXIgdmVyc2lvbiBncmVhdGVyIHRoYW4gMTAwLicpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuXG59XG5cbmV4cG9ydCBjb25zdCBzaG91bGRTY2FuVGVzdEZvckFjY2Vzc2liaWxpdHkgPSAoc3VpdGVUaXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkLCB0ZXN0VGl0bGU6IHN0cmluZywgYWNjZXNzaWJpbGl0eU9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSwgd29ybGQ/OiB7IFtrZXk6IHN0cmluZ106IHVua25vd247IH0sIGlzQ3VjdW1iZXI/OiBib29sZWFuICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVUYWdzID0gQXJyYXkuaXNBcnJheShhY2Nlc3NpYmlsaXR5T3B0aW9ucz8uaW5jbHVkZVRhZ3NJblRlc3RpbmdTY29wZSkgPyBhY2Nlc3NpYmlsaXR5T3B0aW9ucz8uaW5jbHVkZVRhZ3NJblRlc3RpbmdTY29wZSA6IFtdXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVUYWdzID0gQXJyYXkuaXNBcnJheShhY2Nlc3NpYmlsaXR5T3B0aW9ucz8uZXhjbHVkZVRhZ3NJblRlc3RpbmdTY29wZSkgPyBhY2Nlc3NpYmlsaXR5T3B0aW9ucz8uZXhjbHVkZVRhZ3NJblRlc3RpbmdTY29wZSA6IFtdXG5cbiAgICAgICAgaWYgKGlzQ3VjdW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhZ3NMaXN0OiBzdHJpbmdbXSA9IFtdXG4gICAgICAgICAgICA7KHdvcmxkPy5waWNrbGUgYXMgeyB0YWdzOiB7IG5hbWU6IHN0cmluZyB9W10gfSk/LnRhZ3MubWFwKCh0YWc6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSA9PiB0YWdzTGlzdC5wdXNoKHRhZy5uYW1lKSlcbiAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVkID0gZXhjbHVkZVRhZ3M/LnNvbWUoKGV4Y2x1ZGUpID0+IHRhZ3NMaXN0LmluY2x1ZGVzKGV4Y2x1ZGUpKVxuICAgICAgICAgICAgY29uc3QgaW5jbHVkZWQgPSBpbmNsdWRlVGFncz8ubGVuZ3RoID09PSAwIHx8IGluY2x1ZGVUYWdzPy5zb21lKChpbmNsdWRlKSA9PiB0YWdzTGlzdC5pbmNsdWRlcyhpbmNsdWRlKSlcblxuICAgICAgICAgICAgcmV0dXJuICFleGNsdWRlZCAmJiBpbmNsdWRlZFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZnVsbFRlc3ROYW1lID0gc3VpdGVUaXRsZSArICcgJyArIHRlc3RUaXRsZVxuICAgICAgICBjb25zdCBleGNsdWRlZCA9IGV4Y2x1ZGVUYWdzPy5zb21lKChleGNsdWRlKSA9PiBmdWxsVGVzdE5hbWUuaW5jbHVkZXMoZXhjbHVkZSkpXG4gICAgICAgIGNvbnN0IGluY2x1ZGVkID0gaW5jbHVkZVRhZ3M/Lmxlbmd0aCA9PT0gMCB8fCBpbmNsdWRlVGFncz8uc29tZSgoaW5jbHVkZSkgPT4gZnVsbFRlc3ROYW1lLmluY2x1ZGVzKGluY2x1ZGUpKVxuXG4gICAgICAgIHJldHVybiAhZXhjbHVkZWQgJiYgaW5jbHVkZWRcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYEVycm9yIHdoaWxlIHZhbGlkYXRpbmcgdGVzdCBjYXNlIGZvciBhY2Nlc3NpYmlsaXR5IGJlZm9yZSBzY2FubmluZy4gRXJyb3IgOiAke2Vycm9yfWApXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgaXNBY2Nlc3NpYmlsaXR5QXV0b21hdGlvblNlc3Npb24gPSAoYWNjZXNzaWJpbGl0eUZsYWc/OiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhhc0ExMXlKd3RUb2tlbiA9IHR5cGVvZiBwcm9jZXNzLmVudi5CU1RBQ0tfQTExWV9KV1QgPT09ICdzdHJpbmcnICYmIHByb2Nlc3MuZW52LkJTVEFDS19BMTFZX0pXVC5sZW5ndGggPiAwICYmIHByb2Nlc3MuZW52LkJTVEFDS19BMTFZX0pXVCAhPT0gJ251bGwnICYmIHByb2Nlc3MuZW52LkJTVEFDS19BMTFZX0pXVCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgcmV0dXJuIGFjY2Vzc2liaWxpdHlGbGFnICYmIGhhc0ExMXlKd3RUb2tlblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgRXhjZXB0aW9uIGluIHZlcmlmeWluZyB0aGUgQWNjZXNzaWJpbGl0eSBzZXNzaW9uIHdpdGggZXJyb3IgOiAke2Vycm9yfWApXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgQVBQX0FVVE9NQVRFX0NBUF9LRVlTID0gWydhcHBpdW06YXBwJywgJ2FwcGl1bTpidW5kbGVJZCcsICdhcHBpdW06YXBwUGFja2FnZScsICdhcHBpdW06YXBwQWN0aXZpdHknXSBhcyBjb25zdFxuXG4vLyBBbiBBcHAgQXV0b21hdGUgc2Vzc2lvbiBpcyBpZGVudGlmaWVkIGJ5IGFuIGFwcCBjYXBhYmlsaXR5IG9uIHRoZSBkcml2ZXIgY2Fwc1xuLy8gKGFwcGl1bTphcHAgLyBhcHBpdW06YnVuZGxlSWQgLyBhcHBpdW06YXBwUGFja2FnZSAvIGFwcGl1bTphcHBBY3Rpdml0eSAvIGFwcGl1bTpvcHRpb25zLmFwcCkuXG4vLyBTaGFyZWQgYnkgY29uZmlnLXRpbWUgZGV0ZWN0aW9uIGFuZCB0aGUgQ0xJIEF1dG9tYXRlL1BlcmN5IG1vZHVsZXMgc28gQXBwLUF1dG9tYXRlXG4vLyBlbmRwb2ludCByb3V0aW5nIHN0YXlzIGNvbnNpc3RlbnQgYWNyb3NzIGV2ZXJ5IHBsYWNlIHRoYXQgcmVzb2x2ZXMgaXQgZnJvbSBjYXBhYmlsaXRpZXMuXG5leHBvcnQgZnVuY3Rpb24gaGFzQXBwQ2FwKGNhcD86IFdlYmRyaXZlcklPLkNhcGFiaWxpdGllcyk6IGJvb2xlYW4ge1xuICAgIGlmICghY2FwIHx8IHR5cGVvZiBjYXAgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCByZWNvcmQgPSBjYXAgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICBpZiAoQVBQX0FVVE9NQVRFX0NBUF9LRVlTLnNvbWUoa2V5ID0+ICFpc1VuZGVmaW5lZChyZWNvcmRba2V5XSkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGNvbnN0IGFwcGl1bU9wdGlvbnMgPSByZWNvcmRbJ2FwcGl1bTpvcHRpb25zJ10gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWRcbiAgICByZXR1cm4gISEoYXBwaXVtT3B0aW9ucyAmJiAhaXNVbmRlZmluZWQoYXBwaXVtT3B0aW9ucy5hcHApKVxufVxuXG5leHBvcnQgY29uc3QgaXNBcHBBY2Nlc3NpYmlsaXR5QXV0b21hdGlvblNlc3Npb24gPSAoYWNjZXNzaWJpbGl0eUZsYWc/OiBib29sZWFuIHwgc3RyaW5nLCBpc0FwcEF1dG9tYXRlPzogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc2liaWxpdHlBdXRvbWF0aW9uID0gaXNBY2Nlc3NpYmlsaXR5QXV0b21hdGlvblNlc3Npb24oYWNjZXNzaWJpbGl0eUZsYWcpXG4gICAgcmV0dXJuIGFjY2Vzc2liaWxpdHlBdXRvbWF0aW9uICYmIGlzQXBwQXV0b21hdGVcbn1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdFN0cmluZyA9ICh0ZW1wbGF0ZTogKHN0cmluZyB8IG51bGwpLCAuLi52YWx1ZXM6IChzdHJpbmcgfCBudWxsKVtdKTogc3RyaW5nID0+IHtcbiAgICBsZXQgaSA9IDBcbiAgICBpZiAodGVtcGxhdGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC8lcy9nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2krK11cbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6ICcnXG4gICAgfSlcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCBjb25zdCBfZ2V0UGFyYW1zRm9yQXBwQWNjZXNzaWJpbGl0eSA9ICggY29tbWFuZE5hbWU/OiBzdHJpbmcsIHRlc3ROYW1lPzogc3RyaW5nLCBob29rUnVuVXVpZD86IHN0cmluZyB8IG51bGwsIGlzR2xvYmFsSG9vaz86IGJvb2xlYW4gKTogeyB0aFRlc3RSdW5VdWlkOiBhbnksIHRoSG9va1J1blV1aWQ6IGFueSwgdGhCdWlsZFV1aWQ6IGFueSwgdGhKd3RUb2tlbjogYW55LCBhdXRoSGVhZGVyOiBhbnksIHNjYW5UaW1lc3RhbXA6IG51bWJlciwgbWV0aG9kOiBzdHJpbmcgfCB1bmRlZmluZWQsIHRlc3ROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgIH0gPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8vIEEgc2NhbiBmcm9tIGEgV0RJTyBjb25maWctbGV2ZWwgaG9vayBiZWxvbmdzIHRvIG5vIHRlc3QuIFRFU1RfQU5BTFlUSUNTX0lEIGluIHRoYXRcbiAgICAgICAgLy8gd2luZG93IGhvbGRzIGEgdXVpZCB0aGUgZnJhbWV3b3JrIG1pbnRlZCBhdCBpbnN0YW5jZSBjcmVhdGlvbiBcdTIwMTQgYSB0ZXN0IHRoYXQgaGFzIG5vdFxuICAgICAgICAvLyBzdGFydGVkIFx1MjAxNCBzbyBzZW5kaW5nIGl0IHdvdWxkIGF0dHJpYnV0ZSB0aGUgc2NhbiB0byBhIHRlc3QgaXQgZGlkIG5vdCBjb21lIGZyb20uXG4gICAgICAgICd0aFRlc3RSdW5VdWlkJzogaXNHbG9iYWxIb29rID8gdW5kZWZpbmVkIDogcHJvY2Vzcy5lbnYuVEVTVF9BTkFMWVRJQ1NfSUQsXG4gICAgICAgIC8vIFByZXNlbnQgb25seSB3aGVuIHRoZSBzY2FuIGZpcmVzIGluc2lkZSBhIGhvb2sgKGRyb3BwZWQgYnkgSlNPTi5zdHJpbmdpZnkgd2hlbiB1bmRlZmluZWQsXG4gICAgICAgIC8vIHNvIGluLXRlc3Qgc2NhbnMgYXJlIHVuY2hhbmdlZCkuIFNlbGVuaXVtSHViIGFwcEFsbHlIYW5kbGVyIHJlbGF5cyB0aGlzIGFzIGBob29rX3J1bl91dWlkYC5cbiAgICAgICAgJ3RoSG9va1J1blV1aWQnOiBob29rUnVuVXVpZCB8fCB1bmRlZmluZWQsXG4gICAgICAgICd0aEJ1aWxkVXVpZCc6IHByb2Nlc3MuZW52LkJST1dTRVJTVEFDS19URVNUSFVCX1VVSUQsXG4gICAgICAgICd0aEp3dFRva2VuJzogcHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX1RFU1RIVUJfSldULFxuICAgICAgICAnYXV0aEhlYWRlcic6IHByb2Nlc3MuZW52LkJTVEFDS19BMTFZX0pXVCxcbiAgICAgICAgJ3NjYW5UaW1lc3RhbXAnOiBEYXRlLm5vdygpLFxuICAgICAgICAnbWV0aG9kJzogY29tbWFuZE5hbWUsXG4gICAgICAgICd0ZXN0TmFtZSc6IHRlc3ROYW1lXG4gICAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSAgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuZXhwb3J0IGNvbnN0IHBlcmZvcm1BMTF5U2NhbiA9IGFzeW5jIChpc0FwcEF1dG9tYXRlOiBib29sZWFuLCBicm93c2VyOiBXZWJkcml2ZXJJTy5Ccm93c2VyIHwgV2ViZHJpdmVySU8uTXVsdGlSZW1vdGVCcm93c2VyLCBpc0Jyb3dzZXJTdGFja1Nlc3Npb24/OiBib29sZWFuLCBpc0FjY2Vzc2liaWxpdHk/OiBib29sZWFuIHwgc3RyaW5nLCAgY29tbWFuZE5hbWU/OiBzdHJpbmcsIHRlc3ROYW1lPzogc3RyaW5nLCBob29rUnVuVXVpZD86IHN0cmluZyB8IG51bGwsIGlzR2xvYmFsSG9vaz86IGJvb2xlYW4sKSA6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnk7IH0gfCB1bmRlZmluZWQ+ID0+IHtcblxuICAgIGlmICghaXNBY2Nlc3NpYmlsaXR5QXV0b21hdGlvblNlc3Npb24oaXNBY2Nlc3NpYmlsaXR5KSkge1xuICAgICAgICBCU3RhY2tMb2dnZXIud2FybignTm90IGFuIEFjY2Vzc2liaWxpdHkgQXV0b21hdGlvbiBzZXNzaW9uLCBjYW5ub3QgcGVyZm9ybSBBY2Nlc3NpYmlsaXR5IHNjYW4uJylcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGlzQXBwQWNjZXNzaWJpbGl0eUF1dG9tYXRpb25TZXNzaW9uKGlzQWNjZXNzaWJpbGl0eSwgaXNBcHBBdXRvbWF0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHM6IHVua25vd24gPSBhd2FpdCAoYnJvd3NlciBhcyBXZWJkcml2ZXJJTy5Ccm93c2VyKS5leGVjdXRlKGZvcm1hdFN0cmluZyhBY2Nlc3NpYmlsaXR5U2NyaXB0cy5wZXJmb3JtU2NhbiwgSlNPTi5zdHJpbmdpZnkoX2dldFBhcmFtc0ZvckFwcEFjY2Vzc2liaWxpdHkoY29tbWFuZE5hbWUsIHRlc3ROYW1lLCBob29rUnVuVXVpZCwgaXNHbG9iYWxIb29rKSkpIGFzIHN0cmluZywge30pXG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcodXRpbC5mb3JtYXQocmVzdWx0cyBhcyBzdHJpbmcpKVxuICAgICAgICAgICAgcmV0dXJuICggcmVzdWx0cyBhcyB7IFtrZXk6IHN0cmluZ106IGFueTsgfSB8IHVuZGVmaW5lZCApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFjY2Vzc2liaWxpdHlTY3JpcHRzLnBlcmZvcm1TY2FuKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZXhlY3V0ZUFjY2Vzc2liaWxpdHlTY3JpcHQoYnJvd3NlciwgQWNjZXNzaWJpbGl0eVNjcmlwdHMucGVyZm9ybVNjYW4sIHsgbWV0aG9kOiBjb21tYW5kTmFtZSB8fCAnJyB9KVxuICAgICAgICAgICAgcmV0dXJuICggcmVzdWx0cyBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd247IH0gfCB1bmRlZmluZWQgKVxuICAgICAgICB9XG4gICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcignQWNjZXNzaWJpbGl0eVNjcmlwdHMucGVyZm9ybVNjYW4gaXMgbnVsbCcpXG4gICAgICAgIHJldHVyblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBCU3RhY2tMb2dnZXIuZXJyb3IoJ0FjY2Vzc2liaWxpdHkgU2NhbiBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIDogJyArIGVycilcbiAgICAgICAgcmV0dXJuXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QTExeVJlc3VsdHMgPSBQZXJmb3JtYW5jZVRlc3Rlci5tZWFzdXJlV3JhcHBlcihQRVJGT1JNQU5DRV9TREtfRVZFTlRTLkExMVlfRVZFTlRTLkdFVF9SRVNVTFRTLCBhc3luYyAoaXNBcHBBdXRvbWF0ZTogYm9vbGVhbiwgYnJvd3NlcjogV2ViZHJpdmVySU8uQnJvd3NlciwgaXNCcm93c2VyU3RhY2tTZXNzaW9uPzogYm9vbGVhbiwgaXNBY2Nlc3NpYmlsaXR5PzogYm9vbGVhbiB8IHN0cmluZykgOiBQcm9taXNlPEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55OyB9Pj4gPT4ge1xuXG4gICAgaWYgKCFpc0FjY2Vzc2liaWxpdHlBdXRvbWF0aW9uU2Vzc2lvbihpc0FjY2Vzc2liaWxpdHkpKSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci53YXJuKCdOb3QgYW4gQWNjZXNzaWJpbGl0eSBBdXRvbWF0aW9uIHNlc3Npb24sIGNhbm5vdCByZXRyaWV2ZSBBY2Nlc3NpYmlsaXR5IHJlc3VsdHMuJylcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKCdQZXJmb3JtaW5nIHNjYW4gYmVmb3JlIGdldHRpbmcgcmVzdWx0cycpXG4gICAgICAgIGF3YWl0IHBlcmZvcm1BMTF5U2Nhbihpc0FwcEF1dG9tYXRlLCBicm93c2VyLCBpc0Jyb3dzZXJTdGFja1Nlc3Npb24sIGlzQWNjZXNzaWJpbGl0eSlcbiAgICAgICAgaWYgKEFjY2Vzc2liaWxpdHlTY3JpcHRzLmdldFJlc3VsdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHM6IEFycmF5PHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IGF3YWl0IGV4ZWN1dGVBY2Nlc3NpYmlsaXR5U2NyaXB0KGJyb3dzZXIsIEFjY2Vzc2liaWxpdHlTY3JpcHRzLmdldFJlc3VsdHMpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1xuICAgICAgICB9XG4gICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcignQWNjZXNzaWJpbGl0eVNjcmlwdHMuZ2V0UmVzdWx0cyBpcyBudWxsJylcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBCU3RhY2tMb2dnZXIuZXJyb3IoJ05vIGFjY2Vzc2liaWxpdHkgcmVzdWx0cyB3ZXJlIGZvdW5kLicpXG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgZ2V0QTExeVJlc3VsdHMgRmFpbGVkLiBFcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgZ2V0QXBwQTExeVJlc3VsdHMgPSBQZXJmb3JtYW5jZVRlc3Rlci5tZWFzdXJlV3JhcHBlcihQRVJGT1JNQU5DRV9TREtfRVZFTlRTLkExMVlfRVZFTlRTLkdFVF9SRVNVTFRTLCBhc3luYyAoaXNBcHBBdXRvbWF0ZTogYm9vbGVhbiwgYnJvd3NlcjogV2ViZHJpdmVySU8uQnJvd3NlciwgIHRlc3ROYW1lOiBzdHJpbmcsIGlzQnJvd3NlclN0YWNrU2Vzc2lvbj86IGJvb2xlYW4sIGlzQWNjZXNzaWJpbGl0eT86IGJvb2xlYW4gfCBzdHJpbmcsIHNlc3Npb25JZD86IHN0cmluZyB8IG51bGwpIDogUHJvbWlzZTxBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueTsgfT4+ID0+IHtcbiAgICBpZiAoIWlzQnJvd3NlclN0YWNrU2Vzc2lvbikge1xuICAgICAgICByZXR1cm4gW10gLy8gc2luY2Ugd2UgYXJlIHJ1bm5pbmcgb25seSBvbiBBdXRvbWF0ZSBhcyBvZiBub3dcbiAgICB9XG5cbiAgICBpZiAoIWlzQXBwQWNjZXNzaWJpbGl0eUF1dG9tYXRpb25TZXNzaW9uKGlzQWNjZXNzaWJpbGl0eSwgaXNBcHBBdXRvbWF0ZSkpIHtcbiAgICAgICAgQlN0YWNrTG9nZ2VyLndhcm4oJ05vdCBhbiBBY2Nlc3NpYmlsaXR5IEF1dG9tYXRpb24gc2Vzc2lvbiwgY2Fubm90IHJldHJpZXZlIEFjY2Vzc2liaWxpdHkgcmVzdWx0cyBzdW1tYXJ5LicpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFwaVVybCA9IGAke0FQSVV0aWxzLkFQUF9BTExZX0VORFBPSU5UfS8ke0FQUF9BTExZX0lTU1VFU19FTkRQT0lOVH1gXG4gICAgICAgIGNvbnN0IGFwaVJlc3BvbmUgPSBhd2FpdCBnZXRBcHBBMTF5UmVzdWx0UmVzcG9uc2UoYXBpVXJsLCBpc0FwcEF1dG9tYXRlLCBicm93c2VyLCB0ZXN0TmFtZSwgaXNCcm93c2VyU3RhY2tTZXNzaW9uLCBpc0FjY2Vzc2liaWxpdHksIHNlc3Npb25JZClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXBpUmVzcG9uZT8uZGF0YT8uZGF0YT8uaXNzdWVzXG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgUG9sbGluZyBSZXN1bHQ6ICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0KX1gKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkgIHtcbiAgICAgICAgQlN0YWNrTG9nZ2VyLmVycm9yKCdObyBhY2Nlc3NpYmlsaXR5IHN1bW1hcnkgd2FzIGZvdW5kLicpXG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgZ2V0QXBwQTExeVJlc3VsdHMgRmFpbGVkLiBFcnJvcjogJHtlcnJvcn1gKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgZ2V0QXBwQTExeVJlc3VsdHNTdW1tYXJ5ID0gUGVyZm9ybWFuY2VUZXN0ZXIubWVhc3VyZVdyYXBwZXIoUEVSRk9STUFOQ0VfU0RLX0VWRU5UUy5BMTFZX0VWRU5UUy5HRVRfUkVTVUxUU19TVU1NQVJZLCBhc3luYyAoaXNBcHBBdXRvbWF0ZTogYm9vbGVhbiwgYnJvd3NlcjogV2ViZHJpdmVySU8uQnJvd3NlciwgdGVzdE5hbWU6IHN0cmluZywgaXNCcm93c2VyU3RhY2tTZXNzaW9uPzogYm9vbGVhbiwgaXNBY2Nlc3NpYmlsaXR5PzogYm9vbGVhbiB8IHN0cmluZywgc2Vzc2lvbklkPzogc3RyaW5nIHwgbnVsbCkgOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55OyB9PiA9PiB7XG4gICAgaWYgKCFpc0Jyb3dzZXJTdGFja1Nlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHt9IC8vIHNpbmNlIHdlIGFyZSBydW5uaW5nIG9ubHkgb24gQXV0b21hdGUgYXMgb2Ygbm93XG4gICAgfVxuXG4gICAgaWYgKCFpc0FwcEFjY2Vzc2liaWxpdHlBdXRvbWF0aW9uU2Vzc2lvbihpc0FjY2Vzc2liaWxpdHksIGlzQXBwQXV0b21hdGUpKSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci53YXJuKCdOb3QgYW4gQWNjZXNzaWJpbGl0eSBBdXRvbWF0aW9uIHNlc3Npb24sIGNhbm5vdCByZXRyaWV2ZSBBY2Nlc3NpYmlsaXR5IHJlc3VsdHMgc3VtbWFyeS4nKVxuICAgICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBgJHtBUElVdGlscy5BUFBfQUxMWV9FTkRQT0lOVH0vJHtBUFBfQUxMWV9JU1NVRVNfU1VNTUFSWV9FTkRQT0lOVH1gXG4gICAgICAgIGNvbnN0IGFwaVJlc3BvbmUgPSBhd2FpdCBnZXRBcHBBMTF5UmVzdWx0UmVzcG9uc2UoYXBpVXJsLCBpc0FwcEF1dG9tYXRlLCBicm93c2VyLCB0ZXN0TmFtZSwgaXNCcm93c2VyU3RhY2tTZXNzaW9uLCBpc0FjY2Vzc2liaWxpdHksIHNlc3Npb25JZClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXBpUmVzcG9uZT8uZGF0YT8uZGF0YT8uc3VtbWFyeVxuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFBvbGxpbmcgUmVzdWx0OiAke0pTT04uc3RyaW5naWZ5KHJlc3VsdCl9YClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0gY2F0Y2gge1xuICAgICAgICBCU3RhY2tMb2dnZXIuZXJyb3IoJ05vIGFjY2Vzc2liaWxpdHkgc3VtbWFyeSB3YXMgZm91bmQuJylcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfVxufSlcblxuY29uc3QgZ2V0QXBwQTExeVJlc3VsdFJlc3BvbnNlID0gYXN5bmMgKGFwaVVybDogc3RyaW5nLCBpc0FwcEF1dG9tYXRlOiBib29sZWFuLCBicm93c2VyOiBXZWJkcml2ZXJJTy5Ccm93c2VyLCB0ZXN0TmFtZTogc3RyaW5nLCBpc0Jyb3dzZXJTdGFja1Nlc3Npb24/OiBib29sZWFuLCBpc0FjY2Vzc2liaWxpdHk/OiBib29sZWFuIHwgc3RyaW5nLCBzZXNzaW9uSWQ/OiBzdHJpbmcgfCBudWxsKSA6IFByb21pc2U8UG9sbGluZ1Jlc3VsdD4gPT4ge1xuICAgIEJTdGFja0xvZ2dlci5kZWJ1ZygnUGVyZm9ybWluZyBzY2FuIGJlZm9yZSBnZXR0aW5nIHJlc3VsdHMgc3VtbWFyeScpXG4gICAgYXdhaXQgcGVyZm9ybUExMXlTY2FuKGlzQXBwQXV0b21hdGUsIGJyb3dzZXIsIGlzQnJvd3NlclN0YWNrU2Vzc2lvbiwgaXNBY2Nlc3NpYmlsaXR5LCB1bmRlZmluZWQsIHRlc3ROYW1lKVxuICAgIGNvbnN0IHVwcGVyVGltZUxpbWl0ID0gcHJvY2Vzcy5lbnYuQlNUQUNLX0ExMVlfUE9MTElOR19USU1FT1VUID8gRGF0ZS5ub3coKSArIHBhcnNlSW50KHByb2Nlc3MuZW52LkJTVEFDS19BMTFZX1BPTExJTkdfVElNRU9VVCkgKiAxMDAwIDogRGF0ZS5ub3coKSArIDMwMDAwXG4gICAgY29uc3QgcGFyYW1zID0geyB0ZXN0X3J1bl91dWlkOiBwcm9jZXNzLmVudi5URVNUX0FOQUxZVElDU19JRCwgc2Vzc2lvbl9pZDogc2Vzc2lvbklkLCB0aW1lc3RhbXA6IERhdGUubm93KCkgfSAvLyBRdWVyeSBwYXJhbXMgdG8gcGFzc1xuICAgIGNvbnN0IGhlYWRlciA9IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52LkJTVEFDS19BMTFZX0pXVH1gIH1cbiAgICBjb25zdCBhcGlSZXNwb25lID0gYXdhaXQgcG9sbEFwaShhcGlVcmwsIHBhcmFtcywgaGVhZGVyLCB1cHBlclRpbWVMaW1pdClcbiAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFBvbGxpbmcgUmVzdWx0OiAke0pTT04uc3RyaW5naWZ5KGFwaVJlc3BvbmUpfWApXG4gICAgcmV0dXJuIGFwaVJlc3BvbmVcbn1cblxuZXhwb3J0IGNvbnN0IGdldEExMXlSZXN1bHRzU3VtbWFyeSA9IFBlcmZvcm1hbmNlVGVzdGVyLm1lYXN1cmVXcmFwcGVyKFBFUkZPUk1BTkNFX1NES19FVkVOVFMuQTExWV9FVkVOVFMuR0VUX1JFU1VMVFNfU1VNTUFSWSwgYXN5bmMgKGlzQXBwQXV0b21hdGU6IGJvb2xlYW4sIGJyb3dzZXI6IFdlYmRyaXZlcklPLkJyb3dzZXIsIGlzQnJvd3NlclN0YWNrU2Vzc2lvbj86IGJvb2xlYW4sIGlzQWNjZXNzaWJpbGl0eT86IGJvb2xlYW4gfCBzdHJpbmcpIDogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueTsgfT4gPT4ge1xuXG4gICAgaWYgKCFpc0FjY2Vzc2liaWxpdHlBdXRvbWF0aW9uU2Vzc2lvbihpc0FjY2Vzc2liaWxpdHkpKSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci53YXJuKCdOb3QgYW4gQWNjZXNzaWJpbGl0eSBBdXRvbWF0aW9uIHNlc3Npb24sIGNhbm5vdCByZXRyaWV2ZSBBY2Nlc3NpYmlsaXR5IHJlc3VsdHMgc3VtbWFyeS4nKVxuICAgICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoJ1BlcmZvcm1pbmcgc2NhbiBiZWZvcmUgZ2V0dGluZyByZXN1bHRzIHN1bW1hcnknKVxuICAgICAgICBhd2FpdCBwZXJmb3JtQTExeVNjYW4oaXNBcHBBdXRvbWF0ZSwgYnJvd3NlciwgaXNCcm93c2VyU3RhY2tTZXNzaW9uLCBpc0FjY2Vzc2liaWxpdHkpXG4gICAgICAgIGlmIChBY2Nlc3NpYmlsaXR5U2NyaXB0cy5nZXRSZXN1bHRzU3VtbWFyeSkge1xuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeVJlc3VsdHM6IHsgW2tleTogc3RyaW5nXTogdW5rbm93bjsgfSA9IGF3YWl0IGV4ZWN1dGVBY2Nlc3NpYmlsaXR5U2NyaXB0KGJyb3dzZXIsIEFjY2Vzc2liaWxpdHlTY3JpcHRzLmdldFJlc3VsdHNTdW1tYXJ5KVxuICAgICAgICAgICAgcmV0dXJuIHN1bW1hcnlSZXN1bHRzXG4gICAgICAgIH1cbiAgICAgICAgQlN0YWNrTG9nZ2VyLmVycm9yKCdBY2Nlc3NpYmlsaXR5U2NyaXB0cy5nZXRSZXN1bHRzU3VtbWFyeSBpcyBudWxsJylcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcignTm8gYWNjZXNzaWJpbGl0eSBzdW1tYXJ5IHdhcyBmb3VuZC4nKVxuICAgICAgICByZXR1cm4ge31cbiAgICB9XG59KVxuXG4vKipcbiAqIFJlbmRlciBhbiBlcnJvciB0b2dldGhlciB3aXRoIGl0cyBgY2F1c2VgIGNoYWluLlxuICpcbiAqIE5vZGUncyBuYXRpdmUgZmV0Y2ggcmVwb3J0cyBldmVyeSB0cmFuc3BvcnQgZmFpbHVyZSBhcyB0aGUgc2FtZSBvcGFxdWVcbiAqIGBUeXBlRXJyb3I6IGZldGNoIGZhaWxlZGA7IHRoZSBhY3Rpb25hYmxlIGRldGFpbCAoRU5PVEZPVU5ELCBFQ09OTlJFU0VULCBhIHByb3h5XG4gKiByZWZ1c2FsKSBvbmx5IGxpdmVzIG9uIGBlcnJvci5jYXVzZWAsIHdoaWNoIHBsYWluIGludGVycG9sYXRpb24gZHJvcHMuIFdpdGhvdXQgdGhpc1xuICogYSBmYWlsZWQgYnVpbGQtc3RvcCBpcyBpbmRpc3Rpbmd1aXNoYWJsZSBmcm9tIGFueSBvdGhlciBuZXR3b3JrIGZhdWx0IGluIHRoZSBsb2dzLlxuICovXG5leHBvcnQgY29uc3QgZGVzY3JpYmVFcnJvcldpdGhDYXVzZSA9IChlcnJvcjogdW5rbm93biwgZGVwdGggPSAzKTogc3RyaW5nID0+IHtcbiAgICBpZiAoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKGVycm9yKVxuICAgIH1cbiAgICBjb25zdCBkZXNjcmliZWQgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gYCR7ZXJyb3IubmFtZX06ICR7ZXJyb3IubWVzc2FnZX1gIDogU3RyaW5nKGVycm9yKVxuICAgIGNvbnN0IGNhdXNlID0gKGVycm9yIGFzIHsgY2F1c2U/OiB1bmtub3duIH0pLmNhdXNlXG4gICAgaWYgKGNhdXNlID09PSBudWxsIHx8IGNhdXNlID09PSB1bmRlZmluZWQgfHwgZGVwdGggPD0gMSkge1xuICAgICAgICByZXR1cm4gZGVzY3JpYmVkXG4gICAgfVxuICAgIHJldHVybiBgJHtkZXNjcmliZWR9IDwtIGNhdXNlZCBieSAke2Rlc2NyaWJlRXJyb3JXaXRoQ2F1c2UoY2F1c2UsIGRlcHRoIC0gMSl9YFxufVxuXG5leHBvcnQgY29uc3Qgc3RvcEJ1aWxkVXBzdHJlYW0gPSBQZXJmb3JtYW5jZVRlc3Rlci5tZWFzdXJlV3JhcHBlcihQRVJGT1JNQU5DRV9TREtfRVZFTlRTLlRFU1RIVUJfRVZFTlRTLlNUT1AsIG8xMXlFcnJvckhhbmRsZXIoYXN5bmMgZnVuY3Rpb24gc3RvcEJ1aWxkVXBzdHJlYW0oKSB7XG4gICAgY29uc3Qgc3RvcEJ1aWxkVXNhZ2UgPSBVc2FnZVN0YXRzLmdldEluc3RhbmNlKCkuc3RvcEJ1aWxkVXNhZ2VcbiAgICBzdG9wQnVpbGRVc2FnZS50cmlnZ2VyZWQoKVxuICAgIGlmICghcHJvY2Vzcy5lbnZbVEVTVE9QU19CVUlMRF9DT01QTEVURURfRU5WXSkge1xuICAgICAgICBzdG9wQnVpbGRVc2FnZS5mYWlsZWQoJ0J1aWxkIGlzIG5vdCBjb21wbGV0ZWQgeWV0JylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdCdWlsZCBpcyBub3QgY29tcGxldGVkIHlldCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX1RFU1RIVUJfSldUXSkge1xuICAgICAgICBzdG9wQnVpbGRVc2FnZS5mYWlsZWQoJ1Rva2VuL2J1aWxkSUQgaXMgdW5kZWZpbmVkLCBidWlsZCBjcmVhdGlvbiBtaWdodCBoYXZlIGZhaWxlZCcpXG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZygnW1NUT1BfQlVJTERdIE1pc3NpbmcgQXV0aGVudGljYXRpb24gVG9rZW4vIEJ1aWxkIElEJylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUb2tlbi9idWlsZElEIGlzIHVuZGVmaW5lZCwgYnVpbGQgY3JlYXRpb24gbWlnaHQgaGF2ZSBmYWlsZWQnXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgICAgICdzdG9wX3RpbWUnOiAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKVxuICAgIH1cbiAgICAvLyBTdGFtcCB0aGUga2lsbCByZWFzb24gb250byB0aGUgYnVpbGQgcmVjb3JkIHNvIHRlcm1pbmF0ZWQgcnVucyBhcmVcbiAgICAvLyBpZGVudGlmaWFibGUgc2VydmVyLXNpZGUsIG5vdCBvbmx5IHZpYSB0aGUgYW5hbHl0aWNzIGZ1bm5lbC5cbiAgICBjb25zdCBraWxsU2lnbmFsID0gcHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX0tJTExfU0lHTkFMXVxuICAgIGlmIChraWxsU2lnbmFsKSB7XG4gICAgICAgIGRhdGEuZmluaXNoZWRfbWV0YWRhdGEgPSBbeyByZWFzb246ICd1c2VyX2tpbGxlZCcsIHNpZ25hbDoga2lsbFNpZ25hbCB9XVxuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IGAke0FQSVV0aWxzLkRBVEFfRU5EUE9JTlR9L2FwaS92MS9idWlsZHMvJHtwcm9jZXNzLmVudltCUk9XU0VSU1RBQ0tfVEVTVEhVQl9VVUlEXX0vc3RvcGBcbiAgICAvLyBTREstNzA2MTogdGhlIGJ1aWxkLXN0b3AgUFVUIGlzIHRoZSBzaWduYWwgdGhhdCBjbG9zZXMgdGhlIFRSQSBidWlsZC4gQSBzaW5nbGVcbiAgICAvLyBiZXN0LWVmZm9ydCByZXF1ZXN0IG1lYW5zIGEgdHJhbnNpZW50IGZhaWx1cmUvdGltZW91dCBsZWF2ZXMgdGhlIGJ1aWxkIHJ1bm5pbmdcbiAgICAvLyB1bnRpbCB0aGUgfjYwLW1pbiBzZXJ2ZXItc2lkZSBpbmFjdGl2aXR5IHRpbWVvdXQuIFJldHJ5IHdpdGggYmFja29mZiBhbmQgdHJlYXQgYVxuICAgIC8vIG5vbi0yeHggcmVzcG9uc2UgYXMgYSBmYWlsdXJlIHNvIHRoZSBidWlsZCByZWxpYWJseSByZWFjaGVzIGEgdGVybWluYWwgc3RhdGUuXG4gICAgLy8gU0RLLTcyMjk6IGEgY29ycG9yYXRlIEROUy9wcm94eSBibGlwIHJvdXRpbmVseSBvdXRsYXN0cyBhIHN1Yi1zZWNvbmQgcmV0cnkgd2luZG93LFxuICAgIC8vIGFuZCB0aGUgcmVxdWVzdCBoYWQgbm8gdGltZW91dCBhdCBhbGwsIHNvIGEgaHVuZyBjb25uZWN0aW9uIGNvdWxkIHN0YWxsIHNodXRkb3duXG4gICAgLy8gaW5kZWZpbml0ZWx5LiBFYWNoIGF0dGVtcHQgaXMgbm93IGluZGl2aWR1YWxseSBib3VuZGVkLCBhbmQgdGhlIHJldHJ5IGxvb3AgYXMgYVxuICAgIC8vIHdob2xlIGlzIGNhcHBlZCBieSBhIHdhbGwtY2xvY2sgZGVhZGxpbmUgKHRoaXMgcnVucyBkdXJpbmcgc2h1dGRvd24pLlxuICAgIGNvbnN0IGRlYWRsaW5lID0gRGF0ZS5ub3coKSArIFNUT1BfQlVJTERfVE9UQUxfQlVER0VUX01TXG4gICAgbGV0IGxhc3RFcnJvcjogdW5rbm93blxuICAgIGxldCBhdHRlbXB0cyA9IDBcbiAgICBmb3IgKGxldCBhdHRlbXB0ID0gMTsgYXR0ZW1wdCA8PSBTVE9QX0JVSUxEX01BWF9BVFRFTVBUUzsgYXR0ZW1wdCsrKSB7XG4gICAgICAgIGNvbnN0IGJ1ZGdldExlZnQgPSBkZWFkbGluZSAtIERhdGUubm93KClcbiAgICAgICAgaWYgKGJ1ZGdldExlZnQgPD0gMCkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBhdHRlbXB0cyA9IGF0dGVtcHRcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgTWF0aC5taW4oU1RPUF9CVUlMRF9BVFRFTVBUX1RJTUVPVVRfTVMsIGJ1ZGdldExlZnQpKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uREVGQVVMVF9SRVFVRVNUX0NPTkZJRy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtwcm9jZXNzLmVudltCUk9XU0VSU1RBQ0tfVEVTVEhVQl9KV1RdfWBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgICAgIHNpZ25hbDogY29udHJvbGxlci5zaWduYWxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgW1NUT1BfQlVJTERdIFN1Y2Nlc3MgcmVzcG9uc2U6ICR7YXdhaXQgcmVzcG9uc2UudGV4dCgpfWApXG4gICAgICAgICAgICBzdG9wQnVpbGRVc2FnZS5zdWNjZXNzKClcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICAgICAgICAgIC8vIEFuIGFib3J0ZWQgYXR0ZW1wdCBzdXJmYWNlcyBhcyBhIGdlbmVyaWMgQWJvcnRFcnJvcjsgbmFtZSB0aGUgcmVhbCByZWFzb24gc29cbiAgICAgICAgICAgIC8vIGEgc2xvdyBlbmRwb2ludCBpcyBub3QgbWlzdGFrZW4gZm9yIGFuIG91dHJpZ2h0IHRyYW5zcG9ydCBmYWlsdXJlLlxuICAgICAgICAgICAgbGFzdEVycm9yID0gY29udHJvbGxlci5zaWduYWwuYWJvcnRlZFxuICAgICAgICAgICAgICAgID8gbmV3IEVycm9yKGBidWlsZCBzdG9wIHJlcXVlc3QgdGltZWQgb3V0IGFmdGVyICR7TWF0aC5taW4oU1RPUF9CVUlMRF9BVFRFTVBUX1RJTUVPVVRfTVMsIGJ1ZGdldExlZnQpfW1zYClcbiAgICAgICAgICAgICAgICA6IGVycm9yXG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFtTVE9QX0JVSUxEXSBBdHRlbXB0ICR7YXR0ZW1wdH0vJHtTVE9QX0JVSUxEX01BWF9BVFRFTVBUU30gZmFpbGVkLiBFcnJvcjogJHtkZXNjcmliZUVycm9yV2l0aENhdXNlKGxhc3RFcnJvcil9YClcbiAgICAgICAgICAgIGNvbnN0IGJhY2tvZmYgPSBTVE9QX0JVSUxEX0JBQ0tPRkZfQkFTRV9NUyAqIE1hdGgucG93KDIsIGF0dGVtcHQgLSAxKVxuICAgICAgICAgICAgaWYgKGF0dGVtcHQgPj0gU1RPUF9CVUlMRF9NQVhfQVRURU1QVFMgfHwgRGF0ZS5ub3coKSArIGJhY2tvZmYgPj0gZGVhZGxpbmUpIHtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgYmFja29mZikpXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3BCdWlsZFVzYWdlLmZhaWxlZChsYXN0RXJyb3IpXG4gICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBbU1RPUF9CVUlMRF0gRmFpbGVkIGFmdGVyICR7YXR0ZW1wdHN9IGF0dGVtcHQocykuIEVycm9yOiAke2Rlc2NyaWJlRXJyb3JXaXRoQ2F1c2UobGFzdEVycm9yKX1gKVxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgbWVzc2FnZTogKGxhc3RFcnJvciBhcyBFcnJvcik/Lm1lc3NhZ2UgPz8gJ3N0b3AgYnVpbGQgZmFpbGVkJ1xuICAgIH1cbn0pKVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2lJbmZvICgpIHtcbiAgICBjb25zdCBlbnYgPSBwcm9jZXNzLmVudlxuICAgIC8vIEplbmtpbnNcbiAgICBpZiAoKHR5cGVvZiBlbnYuSkVOS0lOU19VUkwgPT09ICdzdHJpbmcnICYmIGVudi5KRU5LSU5TX1VSTC5sZW5ndGggPiAwKSB8fCAodHlwZW9mIGVudi5KRU5LSU5TX0hPTUUgPT09ICdzdHJpbmcnICYmIGVudi5KRU5LSU5TX0hPTUUubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdKZW5raW5zJyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogZW52LkJVSUxEX1VSTCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuSk9CX05BTUUsXG4gICAgICAgICAgICBidWlsZF9udW1iZXI6IGVudi5CVUlMRF9OVU1CRVJcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDaXJjbGVDSVxuICAgIGlmIChpc1RydWUoZW52LkNJKSAmJiBpc1RydWUoZW52LkNJUkNMRUNJKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ0NpcmNsZUNJJyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogZW52LkNJUkNMRV9CVUlMRF9VUkwsXG4gICAgICAgICAgICBqb2JfbmFtZTogZW52LkNJUkNMRV9KT0IsXG4gICAgICAgICAgICBidWlsZF9udW1iZXI6IGVudi5DSVJDTEVfQlVJTERfTlVNXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVHJhdmlzIENJXG4gICAgaWYgKGlzVHJ1ZShlbnYuQ0kpICYmIGlzVHJ1ZShlbnYuVFJBVklTKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ1RyYXZpcyBDSScsXG4gICAgICAgICAgICBidWlsZF91cmw6IGVudi5UUkFWSVNfQlVJTERfV0VCX1VSTCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuVFJBVklTX0pPQl9OQU1FLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuVFJBVklTX0JVSUxEX05VTUJFUlxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENvZGVzaGlwXG4gICAgaWYgKGlzVHJ1ZShlbnYuQ0kpICYmIGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnQ29kZXNoaXAnLFxuICAgICAgICAgICAgYnVpbGRfdXJsOiBudWxsLFxuICAgICAgICAgICAgam9iX25hbWU6IG51bGwsXG4gICAgICAgICAgICBidWlsZF9udW1iZXI6IG51bGxcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBCaXRidWNrZXRcbiAgICBpZiAoZW52LkJJVEJVQ0tFVF9CUkFOQ0ggJiYgZW52LkJJVEJVQ0tFVF9DT01NSVQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdCaXRidWNrZXQnLFxuICAgICAgICAgICAgYnVpbGRfdXJsOiBlbnYuQklUQlVDS0VUX0dJVF9IVFRQX09SSUdJTixcbiAgICAgICAgICAgIGpvYl9uYW1lOiBudWxsLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuQklUQlVDS0VUX0JVSUxEX05VTUJFUlxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIERyb25lXG4gICAgaWYgKGlzVHJ1ZShlbnYuQ0kpICYmIGlzVHJ1ZShlbnYuRFJPTkUpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnRHJvbmUnLFxuICAgICAgICAgICAgYnVpbGRfdXJsOiBlbnYuRFJPTkVfQlVJTERfTElOSyxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBudWxsLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuRFJPTkVfQlVJTERfTlVNQkVSXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gU2VtYXBob3JlXG4gICAgaWYgKGlzVHJ1ZShlbnYuQ0kpICYmIGlzVHJ1ZShlbnYuU0VNQVBIT1JFKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ1NlbWFwaG9yZScsXG4gICAgICAgICAgICBidWlsZF91cmw6IGVudi5TRU1BUEhPUkVfT1JHQU5JWkFUSU9OX1VSTCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuU0VNQVBIT1JFX0pPQl9OQU1FLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuU0VNQVBIT1JFX0pPQl9JRFxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEdpdExhYlxuICAgIGlmIChpc1RydWUoZW52LkNJKSAmJiBpc1RydWUoZW52LkdJVExBQl9DSSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdHaXRMYWInLFxuICAgICAgICAgICAgYnVpbGRfdXJsOiBlbnYuQ0lfSk9CX1VSTCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuQ0lfSk9CX05BTUUsXG4gICAgICAgICAgICBidWlsZF9udW1iZXI6IGVudi5DSV9KT0JfSURcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBCdWlsZGtpdGVcbiAgICBpZiAoaXNUcnVlKGVudi5DSSkgJiYgaXNUcnVlKGVudi5CVUlMREtJVEUpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnQnVpbGRraXRlJyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogZW52LkJVSUxES0lURV9CVUlMRF9VUkwsXG4gICAgICAgICAgICBqb2JfbmFtZTogZW52LkJVSUxES0lURV9MQUJFTCB8fCBlbnYuQlVJTERLSVRFX1BJUEVMSU5FX05BTUUsXG4gICAgICAgICAgICBidWlsZF9udW1iZXI6IGVudi5CVUlMREtJVEVfQlVJTERfTlVNQkVSXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVmlzdWFsIFN0dWRpbyBUZWFtIFNlcnZpY2VzXG4gICAgaWYgKGlzVHJ1ZShlbnYuVEZfQlVJTEQpICYmIGVudi5URl9CVUlMRF9CVUlMRE5VTUJFUikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ1Zpc3VhbCBTdHVkaW8gVGVhbSBTZXJ2aWNlcycsXG4gICAgICAgICAgICBidWlsZF91cmw6IGAke2Vudi5TWVNURU1fVEVBTUZPVU5EQVRJT05TRVJWRVJVUkl9JHtlbnYuU1lTVEVNX1RFQU1QUk9KRUNUSUR9YCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuU1lTVEVNX0RFRklOSVRJT05JRCxcbiAgICAgICAgICAgIGJ1aWxkX251bWJlcjogZW52LkJVSUxEX0JVSUxESURcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBcHB2ZXlvclxuICAgIGlmIChpc1RydWUoZW52LkFQUFZFWU9SKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ0FwcHZleW9yJyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogYCR7ZW52LkFQUFZFWU9SX1VSTH0vcHJvamVjdC8ke2Vudi5BUFBWRVlPUl9BQ0NPVU5UX05BTUV9LyR7ZW52LkFQUFZFWU9SX1BST0pFQ1RfU0xVR30vYnVpbGRzLyR7ZW52LkFQUFZFWU9SX0JVSUxEX0lEfWAsXG4gICAgICAgICAgICBqb2JfbmFtZTogZW52LkFQUFZFWU9SX0pPQl9OQU1FLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuQVBQVkVZT1JfQlVJTERfTlVNQkVSXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQXp1cmUgQ0lcbiAgICBpZiAoZW52LkFaVVJFX0hUVFBfVVNFUl9BR0VOVCAmJiBlbnYuVEZfQlVJTEQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdBenVyZSBDSScsXG4gICAgICAgICAgICBidWlsZF91cmw6IGAke2Vudi5TWVNURU1fVEVBTUZPVU5EQVRJT05TRVJWRVJVUkl9JHtlbnYuU1lTVEVNX1RFQU1QUk9KRUNUSUR9YCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuQlVJTERfQlVJTERJRCxcbiAgICAgICAgICAgIGJ1aWxkX251bWJlcjogZW52LkJVSUxEX0JVSUxESURcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBV1MgQ29kZUJ1aWxkXG4gICAgaWYgKGVudi5DT0RFQlVJTERfQlVJTERfSUQgfHwgZW52LkNPREVCVUlMRF9SRVNPTFZFRF9TT1VSQ0VfVkVSU0lPTiB8fCBlbnYuQ09ERUJVSUxEX1NPVVJDRV9WRVJTSU9OKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnQVdTIENvZGVCdWlsZCcsXG4gICAgICAgICAgICBidWlsZF91cmw6IGVudi5DT0RFQlVJTERfUFVCTElDX0JVSUxEX1VSTCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuQ09ERUJVSUxEX0JVSUxEX0lELFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuQ09ERUJVSUxEX0JVSUxEX0lEXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQmFtYm9vXG4gICAgaWYgKGVudi5iYW1ib29fYnVpbGROdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdCYW1ib28nLFxuICAgICAgICAgICAgYnVpbGRfdXJsOiBlbnYuYmFtYm9vX2J1aWxkUmVzdWx0c1VybCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuYmFtYm9vX3Nob3J0Sm9iTmFtZSxcbiAgICAgICAgICAgIGJ1aWxkX251bWJlcjogZW52LmJhbWJvb19idWlsZE51bWJlclxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFdlcmNrZXJcbiAgICBpZiAoZW52LldFUkNLRVIgfHwgZW52LldFUkNLRVJfTUFJTl9QSVBFTElORV9TVEFSVEVEKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnV2VyY2tlcicsXG4gICAgICAgICAgICBidWlsZF91cmw6IGVudi5XRVJDS0VSX0JVSUxEX1VSTCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuV0VSQ0tFUl9NQUlOX1BJUEVMSU5FX1NUQVJURUQgPyAnTWFpbiBQaXBlbGluZScgOiBudWxsLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuV0VSQ0tFUl9HSVRfQ09NTUlUXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gR29vZ2xlIENsb3VkXG4gICAgaWYgKGVudi5HQ1BfUFJPSkVDVCB8fCBlbnYuR0NMT1VEX1BST0pFQ1QgfHwgZW52LkdPT0dMRV9DTE9VRF9QUk9KRUNUKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnR29vZ2xlIENsb3VkJyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogbnVsbCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuUFJPSkVDVF9JRCxcbiAgICAgICAgICAgIGJ1aWxkX251bWJlcjogZW52LkJVSUxEX0lELFxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNoaXBwYWJsZVxuICAgIGlmIChlbnYuU0hJUFBBQkxFKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnU2hpcHBhYmxlJyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogZW52LlNISVBQQUJMRV9CVUlMRF9VUkwsXG4gICAgICAgICAgICBqb2JfbmFtZTogZW52LlNISVBQQUJMRV9KT0JfSUQgPyBgSm9iICMke2Vudi5TSElQUEFCTEVfSk9CX0lEfWAgOiBudWxsLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuU0hJUFBBQkxFX0JVSUxEX05VTUJFUlxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIE5ldGxpZnlcbiAgICBpZiAoaXNUcnVlKGVudi5ORVRMSUZZKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ05ldGxpZnknLFxuICAgICAgICAgICAgYnVpbGRfdXJsOiBlbnYuREVQTE9ZX1VSTCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuU0lURV9OQU1FLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuQlVJTERfSURcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBHaXRodWIgQWN0aW9uc1xuICAgIGlmIChpc1RydWUoZW52LkdJVEhVQl9BQ1RJT05TKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ0dpdEh1YiBBY3Rpb25zJyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogYCR7ZW52LkdJVEhVQl9TRVJWRVJfVVJMfS8ke2Vudi5HSVRIVUJfUkVQT1NJVE9SWX0vYWN0aW9ucy9ydW5zLyR7ZW52LkdJVEhVQl9SVU5fSUR9YCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuR0lUSFVCX1dPUktGTE9XLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuR0lUSFVCX1JVTl9JRCxcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBWZXJjZWxcbiAgICBpZiAoaXNUcnVlKGVudi5DSSkgJiYgZW52LlZFUkNFTCA9PT0gJzEnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnVmVyY2VsJyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogYGh0dHA6Ly8ke2Vudi5WRVJDRUxfVVJMfWAsXG4gICAgICAgICAgICBqb2JfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGJ1aWxkX251bWJlcjogbnVsbCxcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUZWFtY2l0eVxuICAgIGlmIChlbnYuVEVBTUNJVFlfVkVSU0lPTikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ1RlYW1jaXR5JyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogbnVsbCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBudWxsLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuQlVJTERfTlVNQkVSLFxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENvbmNvdXJzZVxuICAgIGlmIChlbnYuQ09OQ09VUlNFIHx8IGVudi5DT05DT1VSU0VfVVJMIHx8IGVudi5DT05DT1VSU0VfVVNFUk5BTUUgfHwgZW52LkNPTkNPVVJTRV9URUFNKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnQ29uY291cnNlJyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogbnVsbCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuQlVJTERfSk9CX05BTUUgfHwgbnVsbCxcbiAgICAgICAgICAgIGJ1aWxkX251bWJlcjogZW52LkJVSUxEX0lEIHx8IG51bGwsXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gR29DRFxuICAgIGlmIChlbnYuR09fSk9CX05BTUUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdHb0NEJyxcbiAgICAgICAgICAgIGJ1aWxkX3VybDogbnVsbCxcbiAgICAgICAgICAgIGpvYl9uYW1lOiBlbnYuR09fSk9CX05BTUUsXG4gICAgICAgICAgICBidWlsZF9udW1iZXI6IGVudi5HT19QSVBFTElORV9DT1VOVEVSLFxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENvZGVGcmVzaFxuICAgIGlmIChlbnYuQ0ZfQlVJTERfSUQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdDb2RlRnJlc2gnLFxuICAgICAgICAgICAgYnVpbGRfdXJsOiBlbnYuQ0ZfQlVJTERfVVJMLFxuICAgICAgICAgICAgam9iX25hbWU6IGVudi5DRl9QSVBFTElORV9OQU1FLFxuICAgICAgICAgICAgYnVpbGRfbnVtYmVyOiBlbnYuQ0ZfQlVJTERfSUQsXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgbm8gbWF0Y2hlcywgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2l0TWV0YURhdGEgKCkge1xuICAgIGNvbnN0IGluZm86IEdpdFJlcG9JbmZvID0gZ2l0UmVwb0luZm8oKVxuICAgIGlmICghaW5mby5jb21tb25HaXREaXIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgcmVtb3RlIH0gPSBhd2FpdCBwR2l0Y29uZmlnKGluZm8uY29tbW9uR2l0RGlyKVxuICAgIGNvbnN0IHJlbW90ZXMgPSByZW1vdGUgPyBPYmplY3Qua2V5cyhyZW1vdGUpLm1hcChyZW1vdGVOYW1lID0+ICAoeyBuYW1lOiByZW1vdGVOYW1lLCB1cmw6IHJlbW90ZVtyZW1vdGVOYW1lXS51cmwgfSkpIDogW11cblxuICAgIGxldCBnaXRNZXRhRGF0YSA6IEdpdE1ldGFEYXRhID0ge1xuICAgICAgICBuYW1lOiAnZ2l0JyxcbiAgICAgICAgc2hhOiBpbmZvLnNoYSxcbiAgICAgICAgc2hvcnRfc2hhOiBpbmZvLmFiYnJldmlhdGVkU2hhLFxuICAgICAgICBicmFuY2g6IGluZm8uYnJhbmNoLFxuICAgICAgICB0YWc6IGluZm8udGFnLFxuICAgICAgICBjb21taXR0ZXI6IGluZm8uY29tbWl0dGVyLFxuICAgICAgICBjb21taXR0ZXJfZGF0ZTogaW5mby5jb21taXR0ZXJEYXRlLFxuICAgICAgICBhdXRob3I6IGluZm8uYXV0aG9yLFxuICAgICAgICBhdXRob3JfZGF0ZTogaW5mby5hdXRob3JEYXRlLFxuICAgICAgICBjb21taXRfbWVzc2FnZTogaW5mby5jb21taXRNZXNzYWdlLFxuICAgICAgICByb290OiBpbmZvLnJvb3QsXG4gICAgICAgIGNvbW1vbl9naXRfZGlyOiBpbmZvLmNvbW1vbkdpdERpcixcbiAgICAgICAgd29ya3RyZWVfZ2l0X2RpcjogaW5mby53b3JrdHJlZUdpdERpcixcbiAgICAgICAgbGFzdF90YWc6IGluZm8ubGFzdFRhZyxcbiAgICAgICAgY29tbWl0c19zaW5jZV9sYXN0X3RhZzogaW5mby5jb21taXRzU2luY2VMYXN0VGFnLFxuICAgICAgICByZW1vdGVzOiByZW1vdGVzXG4gICAgfVxuXG4gICAgZ2l0TWV0YURhdGEgPSBjaGVja0FuZFRydW5jYXRlVkNTSW5mbyhnaXRNZXRhRGF0YSlcblxuICAgIHJldHVybiBnaXRNZXRhRGF0YVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlSWRlbnRpZmllcih0ZXN0OiBGcmFtZXdvcmtzLlRlc3QsIGZyYW1ld29yaz86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKGZyYW1ld29yayA9PT0gJ2phc21pbmUnKSB7XG4gICAgICAgIHJldHVybiB0ZXN0LmZ1bGxOYW1lXG4gICAgfVxuXG4gICAgbGV0IHBhcmVudFRpdGxlID0gdGVzdC5wYXJlbnRcbiAgICAvLyBTb21ldGltZXMgcGFyZW50IHdpbGwgYmUgYW4gb2JqZWN0IGluc3RlYWQgb2YgYSBzdHJpbmdcbiAgICBpZiAodHlwZW9mIHBhcmVudFRpdGxlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXJlbnRUaXRsZSA9IChwYXJlbnRUaXRsZSBhcyB7IHRpdGxlOiBzdHJpbmcgfSkudGl0bGVcbiAgICB9XG4gICAgcmV0dXJuIGAke3BhcmVudFRpdGxlfSAtICR7dGVzdC50aXRsZX1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxdWVJZGVudGlmaWVyRm9yQ3VjdW1iZXIod29ybGQ6IElUZXN0Q2FzZUhvb2tQYXJhbWV0ZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB3b3JsZC5waWNrbGUudXJpICsgJ18nICsgd29ybGQucGlja2xlLmFzdE5vZGVJZHMuam9pbignLCcpXG59XG5cbi8vIExvYWQgVGVzdGluZyBTZXJ2aWNlIChMVFMpIGdhdGluZyBoZWxwZXJzIFx1MjAxNCBtaXJyb3Igb2YgYnN0YWNrX3V0aWxzL2hlbHBlci5weVxuLy8gaXNfbG9hZF90ZXN0aW5nX3Nlc3Npb24oKSAvIGdldF9sdHNfc2Vzc2lvbl9pZCgpIGluIGJyb3dzZXJzdGFjay1weXRob24tc2RrXG4vLyAoYnJhbmNoIExUUy10cmEtcHl0aG9uLXN1cHBvcnQpLiBMVFMgcG9kLWl0ZXJhdGlvbnMgZXhwb3J0XG4vLyBCUk9XU0VSU1RBQ0tfTFRTX1NFU1NJT05fSUQgYmVmb3JlIGludm9raW5nIHRoZSB0ZXN0IHJ1bm5lcjsgcHJlc2VuY2Ugb2Zcbi8vIHRoYXQgZW52IHZhciBpcyB0aGUgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aCBmb3IgXCJ0aGlzIHJ1biBpcyBhbiBMVFMgcG9kXG4vLyBpdGVyYXRpb25cIi4gT3B0aW9uYWwgQlJPV1NFUlNUQUNLX0xUUz10cnVlfDEgbGV0cyB0aGUgcnVubmVyIG9wdC1pbiB3aXRob3V0XG4vLyBzdXBwbHlpbmcgYSBzZXNzaW9uIGlkICh1c2VmdWwgZm9yIGxvY2FsIHJlcHJvKS5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRUZXN0aW5nU2Vzc2lvbigpOiBib29sZWFuIHtcbiAgICBpZiAocHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX0xUU19TRVNTSU9OX0lEXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBjb25zdCBmbGFnID0gcHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX0xUU11cbiAgICByZXR1cm4gZmxhZyA9PT0gJ3RydWUnIHx8IGZsYWcgPT09ICcxJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0THRzU2Vzc2lvbklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19MVFNfU0VTU0lPTl9JRF0gfHwgJydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsb3VkUHJvdmlkZXIoYnJvd3NlcjogV2ViZHJpdmVySU8uQnJvd3NlciB8IFdlYmRyaXZlcklPLk11bHRpUmVtb3RlQnJvd3Nlcik6IHN0cmluZyB7XG4gICAgLy8gTk9URTogZG8gTk9UIGJyYW5jaCBvbiBpc0xvYWRUZXN0aW5nU2Vzc2lvbigpIGhlcmUuIGdldENsb3VkUHJvdmlkZXIgaXNcbiAgICAvLyBzaGFyZWQgd2l0aCBBdXRvbWF0ZS1zaWRlIGd1YXJkcyAoYXV0b21hdGVNb2R1bGUgb25CZWZvcmUvb25BZnRlclRlc3QsXG4gICAgLy8gd2ViZHJpdmVySU9Nb2R1bGUgS0VZX0lTX0JST1dTRVJTVEFDS19IVUIsIGFjY2Vzc2liaWxpdHktaGFuZGxlcixcbiAgICAvLyBzZXJ2aWNlLnRzKSBcdTIwMTQgZmxpcHBpbmcgaXQgdG8gJ2Jyb3dzZXJzdGFjaycgdW5kZXIgTFRTIHdvdWxkIG1ha2VcbiAgICAvLyBpc0Jyb3dzZXJzdGFja1Nlc3Npb24oKSByZXR1cm4gdHJ1ZSBmb3IgbG9jYWwtU2VsZW5pdW0gcG9kIHNlc3Npb25zLFxuICAgIC8vIGNhdXNpbmcgbWFya1Nlc3Npb25OYW1lIC8gbWFya1Nlc3Npb25TdGF0dXMgdG8gUFVUIGFnYWluc3QgQXV0b21hdGVcbiAgICAvLyBSRVNUIEFQSXMgd2l0aCBzZXNzaW9uIGlkcyB0aGF0IGRvbid0IGV4aXN0IHRoZXJlLiBUZXN0SHViLXJlcG9ydGluZ1xuICAgIC8vIGNhbGxlcnMgdGhhdCBuZWVkICdicm93c2Vyc3RhY2snIHVuZGVyIExUUyBkZXJpdmUgaXQgbG9jYWxseSB3aXRoXG4gICAgLy8gYGlzTG9hZFRlc3RpbmdTZXNzaW9uKCkgPyAnYnJvd3NlcnN0YWNrJyA6IGdldENsb3VkUHJvdmlkZXIoYnJvd3NlcilgXG4gICAgLy8gKHNlZSByZXBvcnRlci50cywgaW5zaWdodHMtaGFuZGxlci50cykuXG4gICAgaWYgKGJyb3dzZXIgJiYgJ2luc3RhbmNlcycgaW4gYnJvd3Nlcikge1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIGluc3RhbmNlc1xuICAgICAgICBmb3IgKGNvbnN0IGluc3RhbmNlTmFtZSBvZiBicm93c2VyLmluc3RhbmNlcykge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSAoYnJvd3NlciBhcyBhbnkpW2luc3RhbmNlTmFtZV0gYXMgV2ViZHJpdmVySU8uQnJvd3NlclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLm9wdGlvbnMgJiYgaW5zdGFuY2Uub3B0aW9ucy5ob3N0bmFtZSAmJiBpbnN0YW5jZS5vcHRpb25zLmhvc3RuYW1lLmluY2x1ZGVzKCdicm93c2Vyc3RhY2snKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYnJvd3NlcnN0YWNrJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChicm93c2VyLm9wdGlvbnMgJiYgYnJvd3Nlci5vcHRpb25zLmhvc3RuYW1lICYmIGJyb3dzZXIub3B0aW9ucy5ob3N0bmFtZS5pbmNsdWRlcygnYnJvd3NlcnN0YWNrJykpIHsgLy8gU2luZ2xlIGJyb3dzZXIgaW5zdGFuY2VcbiAgICAgICAgcmV0dXJuICdicm93c2Vyc3RhY2snXG4gICAgfVxuICAgIHJldHVybiAndW5rbm93bl9ncmlkJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2Vyc3RhY2tTZXNzaW9uKGJyb3dzZXI/OiBXZWJkcml2ZXJJTy5Ccm93c2VyIHwgV2ViZHJpdmVySU8uTXVsdGlSZW1vdGVCcm93c2VyKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIgJiYgZ2V0Q2xvdWRQcm92aWRlcihicm93c2VyKS50b0xvd2VyQ2FzZSgpID09PSAnYnJvd3NlcnN0YWNrJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NlbmFyaW9FeGFtcGxlcyh3b3JsZDogSVRlc3RDYXNlSG9va1BhcmFtZXRlcikge1xuICAgIGNvbnN0IHNjZW5hcmlvID0gd29ybGQucGlja2xlXG5cbiAgICAvLyBubyBleGFtcGxlcyBwcmVzZW50XG4gICAgaWYgKChzY2VuYXJpby5hc3ROb2RlSWRzICYmIHNjZW5hcmlvLmFzdE5vZGVJZHMubGVuZ3RoIDw9IDEpIHx8IHNjZW5hcmlvLmFzdE5vZGVJZHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwaWNrbGVJZDogc3RyaW5nID0gc2NlbmFyaW8uYXN0Tm9kZUlkc1swXVxuICAgIGNvbnN0IGV4YW1wbGVzSWQ6IHN0cmluZyA9IHNjZW5hcmlvLmFzdE5vZGVJZHNbMV1cbiAgICBjb25zdCBnaGVya2luRG9jdW1lbnRDaGlsZHJlbiA9IHdvcmxkLmdoZXJraW5Eb2N1bWVudC5mZWF0dXJlPy5jaGlsZHJlblxuXG4gICAgbGV0IGV4YW1wbGVzOiBzdHJpbmdbXSA9IFtdXG5cbiAgICBnaGVya2luRG9jdW1lbnRDaGlsZHJlbj8uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5ydWxlKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgaWYgcnVsZSBpcyBwcmVzZW50XG4gICAgICAgICAgICBjaGlsZC5ydWxlLmNoaWxkcmVuLmZvckVhY2goY2hpbGRMZXZlbDIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZExldmVsMi5zY2VuYXJpbyAmJiBjaGlsZExldmVsMi5zY2VuYXJpby5pZCA9PT0gcGlja2xlSWQgJiYgY2hpbGRMZXZlbDIuc2NlbmFyaW8uZXhhbXBsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFzc2VkRXhhbXBsZXMgPSBjaGlsZExldmVsMi5zY2VuYXJpby5leGFtcGxlcy5mbGF0TWFwKCh2YWwpID0+ICh2YWwudGFibGVCb2R5KSkuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZXhhbXBsZXNJZCk/LmNlbGxzLm1hcCgodmFsKSA9PiAodmFsLnZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZEV4YW1wbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGFtcGxlcyA9IHBhc3NlZEV4YW1wbGVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLnNjZW5hcmlvICYmIGNoaWxkLnNjZW5hcmlvLmlkID09PSBwaWNrbGVJZCAmJiBjaGlsZC5zY2VuYXJpby5leGFtcGxlcykge1xuICAgICAgICAgICAgLy8gaGFuZGxlIGlmIHNjZW5hcmlvIG91dHNpZGUgcnVsZVxuICAgICAgICAgICAgY29uc3QgcGFzc2VkRXhhbXBsZXMgPSBjaGlsZC5zY2VuYXJpby5leGFtcGxlcy5mbGF0TWFwKCh2YWwpID0+ICh2YWwudGFibGVCb2R5KSkuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZXhhbXBsZXNJZCk/LmNlbGxzLm1hcCgodmFsKSA9PiAodmFsLnZhbHVlKSlcbiAgICAgICAgICAgIGlmIChwYXNzZWRFeGFtcGxlcykge1xuICAgICAgICAgICAgICAgIGV4YW1wbGVzID0gcGFzc2VkRXhhbXBsZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoZXhhbXBsZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBleGFtcGxlc1xuICAgIH1cbiAgICByZXR1cm5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFuc2lDb2xvcnMobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yOTQ5NzY4MFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICAgcmV0dXJuIG1lc3NhZ2UucmVwbGFjZSgvW1xcdTAwMWJcXHUwMDliXVtbKCkjOz9dKig/OlswLTldezEsNH0oPzo7WzAtOV17MCw0fSkqKT9bMC05QS1PUlpjZi1ucXJ5PT48XS9nLCAnJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ1RhZyhldmVudFR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gJ1Rlc3RSdW5TdGFydGVkJyB8fCBldmVudFR5cGUgPT09ICdUZXN0UnVuRmluaXNoZWQnKSB7XG4gICAgICAgIHJldHVybiAnVGVzdF9VcGxvYWQnXG4gICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdIb29rUnVuU3RhcnRlZCcgfHwgZXZlbnRUeXBlID09PSAnSG9va1J1bkZpbmlzaGVkJykge1xuICAgICAgICByZXR1cm4gJ0hvb2tfVXBsb2FkJ1xuICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnU2NyZWVuc2hvdENyZWF0ZWQnKSB7XG4gICAgICAgIHJldHVybiAnU2NyZWVuc2hvdF9VcGxvYWQnXG4gICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdMb2dDcmVhdGVkJykge1xuICAgICAgICByZXR1cm4gJ0xvZ19VcGxvYWQnXG4gICAgfVxuICAgIHJldHVybiAndW5kZWZpbmVkJ1xufVxuXG4vLyBnZXQgaGllcmFyY2h5IGZvciBhIHBhcnRpY3VsYXIgdGVzdCAoY2FsbGVkIGJ5IHJlcG9ydGVyIGZvciBza2lwcGVkIHRlc3RzKVxuZXhwb3J0IGZ1bmN0aW9uIGdldEhpZXJhcmNoeShmdWxsVGl0bGU/OiBzdHJpbmcpIHtcbiAgICBpZiAoIWZ1bGxUaXRsZSkge1xuICAgICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgcmV0dXJuIGZ1bGxUaXRsZS5zcGxpdCgnLicpLnNsaWNlKDAsIC0xKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG9va1R5cGUgKGhvb2tOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChob29rTmFtZS5zdGFydHNXaXRoKCdcImJlZm9yZSBlYWNoXCInKSkge1xuICAgICAgICByZXR1cm4gJ0JFRk9SRV9FQUNIJ1xuICAgIH0gZWxzZSBpZiAoaG9va05hbWUuc3RhcnRzV2l0aCgnXCJiZWZvcmUgYWxsXCInKSkge1xuICAgICAgICByZXR1cm4gJ0JFRk9SRV9BTEwnXG4gICAgfSBlbHNlIGlmIChob29rTmFtZS5zdGFydHNXaXRoKCdcImFmdGVyIGVhY2hcIicpKSB7XG4gICAgICAgIHJldHVybiAnQUZURVJfRUFDSCdcbiAgICB9IGVsc2UgaWYgKGhvb2tOYW1lLnN0YXJ0c1dpdGgoJ1wiYWZ0ZXIgYWxsXCInKSkge1xuICAgICAgICByZXR1cm4gJ0FGVEVSX0FMTCdcbiAgICB9XG4gICAgcmV0dXJuICd1bmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTY3JlZW5zaG90Q29tbWFuZCAoYXJnczogQmVmb3JlQ29tbWFuZEFyZ3MgfCBBZnRlckNvbW1hbmRBcmdzKSB7XG4gICAgcmV0dXJuIGFyZ3MuZW5kcG9pbnQgJiYgYXJncy5lbmRwb2ludC5pbmNsdWRlcygnL3NjcmVlbnNob3QnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCU3RhY2tTZXNzaW9uKGNvbmZpZzogT3B0aW9ucy5UZXN0cnVubmVyKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcudXNlciA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGNvbmZpZy5rZXkgPT09ICdzdHJpbmcnICYmIGNvbmZpZy5rZXkubGVuZ3RoID09PSAyMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQnJvd3NlcnN0YWNrSW5mcmEoY29uZmlnOiBCcm93c2Vyc3RhY2tDb25maWcgJiBPcHRpb25zLlRlc3RydW5uZXIsIGNhcHM/OiBDYXBhYmlsaXRpZXMuQnJvd3NlclN0YWNrQ2FwYWJpbGl0aWVzKTogYm9vbGVhbiB7XG4gICAgLy8gdGhpcyBpcyBhIHV0aWxpdHkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGJhc2ljIHNlc3Npb24gb3IgbXVsdGkgcmVtb3RlIHNlc3Npb24gaXMgcnVubmluZyBvbiBCcm93c2Vyc3RhY2ssIG1haW5seSBieSBjaGVja2luZyB0aGUgaG9zdG5hbWUgcGFyYW1ldGVyIGluIHRoZSBnaXZlbiBjb25maWdcbiAgICAvLyBJbiBjYXNlIGhvc3RuYW1lIGlzIG5vdCBwcmVzZW50IGFueXdoZXJlIGluIHRoZSBjb25maWcsIGl0IHJldHVybnMgdHJ1ZSBieSBkZWZhdWx0IGFzIGhvc3RuYW1lIGlzIG5vdCBhIG1hbmRhdG9yeSBwYXJhbWV0ZXIgaW4gdGhlIGNvbmZpZ1xuXG4gICAgY29uc3QgaXNCcm93c2Vyc3RhY2sgPSAoc3RyOiBzdHJpbmcgKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiBzdHIgPT09ICdicm93c2Vyc3RhY2suY29tJyB8fCBzdHIuZW5kc1dpdGgoJy5icm93c2Vyc3RhY2suY29tJylcbiAgICB9XG5cbiAgICBpZiAoKGNvbmZpZy5ob3N0bmFtZSkgJiYgIWlzQnJvd3NlcnN0YWNrKGNvbmZpZy5ob3N0bmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGNhcHMgJiYgdHlwZW9mIGNhcHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNhcHMpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhcGFiaWxpdHkgb2YgY2Fwcykge1xuICAgICAgICAgICAgICAgIGlmICgoKGNhcGFiaWxpdHkgYXMgT3B0aW9ucy5UZXN0cnVubmVyKS5ob3N0bmFtZSkgJiYgIWlzQnJvd3NlcnN0YWNrKChjYXBhYmlsaXR5IGFzIE9wdGlvbnMuVGVzdHJ1bm5lcikuaG9zdG5hbWUgYXMgc3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjYXBzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FwYWJpbGl0eSA9IGNhcHNba2V5IGFzIGtleW9mIENhcGFiaWxpdGllcy5Ccm93c2VyU3RhY2tDYXBhYmlsaXRpZXNdXG4gICAgICAgICAgICAgICAgaWYgKCgoY2FwYWJpbGl0eSBhcyBPcHRpb25zLlRlc3RydW5uZXIpLmhvc3RuYW1lKSAmJiAhaXNCcm93c2Vyc3RhY2soKGNhcGFiaWxpdHkgYXMgT3B0aW9ucy5UZXN0cnVubmVyKS5ob3N0bmFtZSBhcyBzdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNCU3RhY2tTZXNzaW9uKGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJTdGFja1VzZXJBbmRLZXkoY29uZmlnOiBPcHRpb25zLlRlc3RydW5uZXIsIG9wdGlvbnM6IE9wdGlvbnMuVGVzdHJ1bm5lcikge1xuXG4gICAgLy8gRmFsbGJhY2sgMTogRW52IHZhcmlhYmxlc1xuICAgIC8vIEZhbGxiYWNrIDI6IFNlcnZpY2UgdmFyaWFibGVzIGluIHdkaW8uY29uZi5qcyAodGhhdCBhcmUgcmVjZWl2ZWQgaW5zaWRlIG9wdGlvbnMgb2JqZWN0KVxuICAgIGNvbnN0IGVudk9yU2VydmljZVZhcmlhYmxlcyA9IHtcbiAgICAgICAgdXNlcjogZ2V0QnJvd3NlclN0YWNrVXNlcihvcHRpb25zKSxcbiAgICAgICAga2V5OiBnZXRCcm93c2VyU3RhY2tLZXkob3B0aW9ucylcbiAgICB9XG4gICAgaWYgKGVudk9yU2VydmljZVZhcmlhYmxlcy51c2VyICYmIGVudk9yU2VydmljZVZhcmlhYmxlcy5rZXkpIHtcbiAgICAgICAgcmV0dXJuIGVudk9yU2VydmljZVZhcmlhYmxlc1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIDM6IFNlcnZpY2UgdmFyaWFibGVzIGluIHRlc3RPYnNlcnZhYmlsaXR5T3B0aW9ucyBvYmplY3RcbiAgICAvLyBGYWxsYmFjayA0OiBTZXJ2aWNlIHZhcmlhYmxlcyBpbiB0aGUgdG9wIGxldmVsIGNvbmZpZyBvYmplY3RcbiAgICBjb25zdCBvMTF5VmFyaWFibGVzID0ge1xuICAgICAgICB1c2VyOiBnZXRPYnNlcnZhYmlsaXR5VXNlcihvcHRpb25zLCBjb25maWcpLFxuICAgICAgICBrZXk6IGdldE9ic2VydmFiaWxpdHlLZXkob3B0aW9ucywgY29uZmlnKVxuICAgIH1cbiAgICByZXR1cm4gbzExeVZhcmlhYmxlc1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRBZGRTZXJ2aWNlVmVyc2lvbihjb25maWc6IE9wdGlvbnMuVGVzdHJ1bm5lciwgdGVzdE9ic2VydmFiaWxpdHk/OiBib29sZWFuLCBjYXBzPzogQ2FwYWJpbGl0aWVzLkJyb3dzZXJTdGFja0NhcGFiaWxpdGllcyk6IGJvb2xlYW4ge1xuICAgIGlmICgoY29uZmlnLnNlcnZpY2VzICYmIGNvbmZpZy5zZXJ2aWNlcy50b1N0cmluZygpLmluY2x1ZGVzKCdjaHJvbWVkcml2ZXInKSAmJiB0ZXN0T2JzZXJ2YWJpbGl0eSAhPT0gZmFsc2UpIHx8ICFpc0Jyb3dzZXJzdGFja0luZnJhKGNvbmZpZywgY2FwcykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBiYXRjaEFuZFBvc3RFdmVudHMgKGV2ZW50VXJsOiBzdHJpbmcsIGtpbmQ6IHN0cmluZywgZGF0YTogVXBsb2FkVHlwZVtdKSB7XG4gICAgaWYgKCFwcm9jZXNzLmVudltURVNUT1BTX0JVSUxEX0NPTVBMRVRFRF9FTlZdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQnVpbGQgbm90IGNvbXBsZXRlZCB5ZXQnKVxuICAgIH1cblxuICAgIGNvbnN0IGp3dFRva2VuID0gcHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX1RFU1RIVUJfSldUXVxuICAgIGlmICghand0VG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGF1dGhlbnRpY2F0aW9uIFRva2VuJylcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBgJHtBUElVdGlscy5EQVRBX0VORFBPSU5UfS8ke2V2ZW50VXJsfWBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC4uLkRFRkFVTFRfUkVRVUVTVF9DT05GSUcuaGVhZGVycyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtqd3RUb2tlbn1gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gcmVhZCBhcyB0ZXh0IGZpcnN0OiBlcnJvciByZXNwb25zZXMgKDQwMS81eHgpIGFuZCBlbXB0eSBib2RpZXMgYXJlIG5vdCBKU09OLCBhbmQgYSBibGluZFxuICAgICAgICAvLyByZXNwb25zZS5qc29uKCkgc3VyZmFjZWQgdGhlbSBhcyBhIG1pc2xlYWRpbmcgXCJVbmV4cGVjdGVkIGVuZCBvZiBKU09OIGlucHV0XCJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VCb2R5ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fSR7cmVzcG9uc2VCb2R5ID8gYCBcdTIwMTQgJHtyZXNwb25zZUJvZHkuc2xpY2UoMCwgMzAwKX1gIDogJyAoZW1wdHkgYm9keSknfWApXG4gICAgICAgIH1cbiAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBbJHtraW5kfV0gU3VjY2VzcyByZXNwb25zZTogJHtyZXNwb25zZUJvZHl9YClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFske2tpbmR9XSBFWENFUFRJT04gSU4gJHtraW5kfSBSRVFVRVNUIFRPIFRFU1QgUkVQT1JUSU5HIEFORCBBTkFMWVRJQ1MgOiAke2Vycm9yfWApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhjZXB0aW9uIGluIHJlcXVlc3QgJyArIGVycm9yKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9ic2VydmFiaWxpdHlVc2VyKG9wdGlvbnM6IEJyb3dzZXJzdGFja0NvbmZpZyAmIE9wdGlvbnMuVGVzdHJ1bm5lciwgY29uZmlnOiBPcHRpb25zLlRlc3RydW5uZXIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX1VTRVJOQU1FKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5CUk9XU0VSU1RBQ0tfVVNFUk5BTUVcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudGVzdE9ic2VydmFiaWxpdHlPcHRpb25zICYmIG9wdGlvbnMudGVzdE9ic2VydmFiaWxpdHlPcHRpb25zLnVzZXIpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMudGVzdE9ic2VydmFiaWxpdHlPcHRpb25zLnVzZXJcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZy51c2VyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYnNlcnZhYmlsaXR5S2V5KG9wdGlvbnM6IEJyb3dzZXJzdGFja0NvbmZpZyAmIE9wdGlvbnMuVGVzdHJ1bm5lciwgY29uZmlnOiBPcHRpb25zLlRlc3RydW5uZXIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX0FDQ0VTU19LRVkpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LkJST1dTRVJTVEFDS19BQ0NFU1NfS0VZXG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRlc3RPYnNlcnZhYmlsaXR5T3B0aW9ucyAmJiBvcHRpb25zLnRlc3RPYnNlcnZhYmlsaXR5T3B0aW9ucy5rZXkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMudGVzdE9ic2VydmFiaWxpdHlPcHRpb25zLmtleVxuICAgIH1cbiAgICByZXR1cm4gY29uZmlnLmtleVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JzZXJ2YWJpbGl0eVByb2plY3Qob3B0aW9uczogQnJvd3NlcnN0YWNrQ29uZmlnICYgT3B0aW9ucy5UZXN0cnVubmVyLCBic3RhY2tQcm9qZWN0TmFtZT86IHN0cmluZykge1xuICAgIGlmIChwcm9jZXNzLmVudi5URVNUX09CU0VSVkFCSUxJVFlfUFJPSkVDVF9OQU1FKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5URVNUX09CU0VSVkFCSUxJVFlfUFJPSkVDVF9OQU1FXG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRlc3RPYnNlcnZhYmlsaXR5T3B0aW9ucyAmJiBvcHRpb25zLnRlc3RPYnNlcnZhYmlsaXR5T3B0aW9ucy5wcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy50ZXN0T2JzZXJ2YWJpbGl0eU9wdGlvbnMucHJvamVjdE5hbWVcbiAgICB9XG4gICAgcmV0dXJuIGJzdGFja1Byb2plY3ROYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYnNlcnZhYmlsaXR5QnVpbGQob3B0aW9uczogQnJvd3NlcnN0YWNrQ29uZmlnICYgT3B0aW9ucy5UZXN0cnVubmVyLCBic3RhY2tCdWlsZE5hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuVEVTVF9PQlNFUlZBQklMSVRZX0JVSUxEX05BTUUpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LlRFU1RfT0JTRVJWQUJJTElUWV9CVUlMRF9OQU1FXG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRlc3RPYnNlcnZhYmlsaXR5T3B0aW9ucyAmJiBvcHRpb25zLnRlc3RPYnNlcnZhYmlsaXR5T3B0aW9ucy5idWlsZE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMudGVzdE9ic2VydmFiaWxpdHlPcHRpb25zLmJ1aWxkTmFtZVxuICAgIH1cbiAgICByZXR1cm4gYnN0YWNrQnVpbGROYW1lIHx8IHBhdGguYmFzZW5hbWUocGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCkpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JzZXJ2YWJpbGl0eUJ1aWxkVGFncyhvcHRpb25zOiBCcm93c2Vyc3RhY2tDb25maWcgJiBPcHRpb25zLlRlc3RydW5uZXIsIGJzdGFja0J1aWxkVGFnPzogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGlmIChwcm9jZXNzLmVudi5URVNUX09CU0VSVkFCSUxJVFlfQlVJTERfVEFHKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5URVNUX09CU0VSVkFCSUxJVFlfQlVJTERfVEFHLnNwbGl0KCcsJylcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudGVzdE9ic2VydmFiaWxpdHlPcHRpb25zICYmIG9wdGlvbnMudGVzdE9ic2VydmFiaWxpdHlPcHRpb25zLmJ1aWxkVGFnKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnRlc3RPYnNlcnZhYmlsaXR5T3B0aW9ucy5idWlsZFRhZ1xuICAgIH1cbiAgICBpZiAoYnN0YWNrQnVpbGRUYWcpIHtcbiAgICAgICAgcmV0dXJuIFtic3RhY2tCdWlsZFRhZ11cbiAgICB9XG4gICAgcmV0dXJuIFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXN0UGxhbklkKG9wdGlvbnM6IEJyb3dzZXJzdGFja0NvbmZpZyAmIE9wdGlvbnMuVGVzdHJ1bm5lcik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19URVNUX1BMQU5fSURdKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudltCUk9XU0VSU1RBQ0tfVEVTVF9QTEFOX0lEXVxuICAgIH1cbiAgICBjb25zdCBDTElfQVJHID0gJy0tYnJvd3NlcnN0YWNrLnRlc3RNYW5hZ2VtZW50T3B0aW9ucy50ZXN0UGxhbklkJ1xuICAgIGNvbnN0IGFyZ0luZGV4ID0gcHJvY2Vzcy5hcmd2LmluZGV4T2YoQ0xJX0FSRylcbiAgICBpZiAoYXJnSW5kZXggIT09IC0xICYmIHByb2Nlc3MuYXJndlthcmdJbmRleCArIDFdKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmFyZ3ZbYXJnSW5kZXggKyAxXVxuICAgIH1cbiAgICBjb25zdCBhcmdXaXRoRXF1YWxzID0gcHJvY2Vzcy5hcmd2LmZpbmQoKGFyZykgPT4gYXJnLnN0YXJ0c1dpdGgoYCR7Q0xJX0FSR309YCkpXG4gICAgaWYgKGFyZ1dpdGhFcXVhbHMpIHtcbiAgICAgICAgcmV0dXJuIGFyZ1dpdGhFcXVhbHMuc3BsaXQoJz0nKVsxXVxuICAgIH1cbiAgICBjb25zdCB0ZXN0UGxhbklkID0gb3B0aW9ucy50ZXN0TWFuYWdlbWVudE9wdGlvbnM/LnRlc3RQbGFuSWRcbiAgICBpZiAodHlwZW9mIHRlc3RQbGFuSWQgPT09ICdzdHJpbmcnICYmIHRlc3RQbGFuSWQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRlc3RQbGFuSWQudHJpbSgpXG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJTdGFja1VzZXIoY29uZmlnOiBPcHRpb25zLlRlc3RydW5uZXIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX1VTRVJOQU1FKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5CUk9XU0VSU1RBQ0tfVVNFUk5BTUUgYXMgc3RyaW5nXG4gICAgfVxuICAgIHJldHVybiBjb25maWcudXNlciBhcyBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJTdGFja0tleShjb25maWc6IE9wdGlvbnMuVGVzdHJ1bm5lcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5CUk9XU0VSU1RBQ0tfQUNDRVNTX0tFWSkge1xuICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX0FDQ0VTU19LRVlcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZy5rZXlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlOiB1bmtub3duKSB7XG4gICAgbGV0IHJlcyA9ICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJlcyA9IHJlcyB8fCB2YWx1ZSA9PT0gJydcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUcnVlKHZhbHVlPzogdW5rbm93bikge1xuICAgIHJldHVybiAodmFsdWUgKyAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZhbHNlKHZhbHVlPzogdW5rbm93bikge1xuICAgIHJldHVybiAodmFsdWUgKyAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJ1xufVxuXG4vKipcbiAqIHNraXBBcHBPdmVycmlkZSB2YWxpZGF0aW9uIGNob2tlcG9pbnQgXHUyMDE0IHBvcnRlZCBmcm9tIHRoZSBOb2RlIFNESydzXG4gKiB2YWxpZGF0ZVNraXBBcHBPdmVycmlkZSAoaGVscGVyLmpzKSAvIEphdmEgQnJvd3NlclN0YWNrSmF2YUFnZW50LnByb2Nlc3NBcHBPcHRpb25zLlxuICogQ2FsbGVkIE9OQ0UgZnJvbSB0aGUgbGF1bmNoZXIgKG1haW4gcHJvY2VzcywgcHJlLXNlc3Npb24pLiBFbWl0cyB0aGUgZml4ZWQgd2FybmluZyxcbiAqIGhhbmRsZXMgdGhlIHRocmVlIGVkZ2UgY2FzZXMsIGFuZCBjbGVhcnMgdGhlIGFwcCBvbiBjb25mbGljdCBzbyBpdCBpcyBuZWl0aGVyIHVwbG9hZGVkXG4gKiBub3IgaW5qZWN0ZWQuIFRoZXJlIGlzIE5PIFRpZXItMiBicmFuY2g6IGV2ZXJ5IFdlYmRyaXZlcklPIHRlc3QgZnJhbWV3b3JrXG4gKiAobW9jaGEvamFzbWluZS9jdWN1bWJlcikgc3VwcG9ydHMgQXBwIEF1dG9tYXRlLlxuICpcbiAqIFRoZSBzdGFuZGFyZCB3YXJuaW5nIGFuZCB0aGUgZWRnZS0yIGVycm9yIGFyZSB2ZXJiYXRpbSB3aXRoIHRoZSBvdGhlciBCcm93c2VyU3RhY2sgU0RLc1xuICogKEJyb3dzZXJTdGFja0phdmFBZ2VudCNwcm9jZXNzQXBwT3B0aW9ucykuIFRoZSBlZGdlLTEgY29uZmxpY3Qgd2FybmluZyBpcyBJTlRFTlRJT05BTExZIGFkYXB0ZWQgZm9yXG4gKiBXZWJkcml2ZXJJTyBcdTIwMTQgaXQgc2F5cyBcImJyb3dzZXJzdGFjayBzZXJ2aWNlIG9wdGlvbnNcIiAod2hlcmUgV0RJTyByZWFkcyBgYXBwYCksIG5vdCBcImJyb3dzZXJzdGFjay55bWxcIiBcdTIwMTRcbiAqIHNvIHBsZWFzZSBkbyBOT1QgXCJmaXhcIiBpdCBiYWNrIHRvIHRoZSB5bWwgd29yZGluZyB0byBtYXRjaCB0aGUgb3RoZXIgU0RLcy5cbiAqIEdyYWNlZnVsOiBuZXZlciB0aHJvd3MgZXhjZXB0IHRoZSBkZWxpYmVyYXRlIGVkZ2UtMiBjb25maWcgZXJyb3IgKGV4cGxpY2l0IGZhbHNlICsgbm8gYXBwKSxcbiAqIHdoaWNoIGZpcmVzIHByZS1zZXNzaW9uIHNvIHRoZSBydW4gYWJvcnRzIGNsZWFubHkuXG4gKlxuICogTXV0YXRlcyBgb3B0aW9ucy5hcHBgIChlZGdlLTEpLiAzLXN0YXRlIHZpYSBpc1RydWUvaXNGYWxzZSBcdTIwMTQgbmV2ZXIgYCFvcHRpb25zLnNraXBBcHBPdmVycmlkZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNraXBBcHBPdmVycmlkZShvcHRpb25zPzogQnJvd3NlcnN0YWNrQ29uZmlnICYgQnJvd3NlcnN0YWNrT3B0aW9ucykge1xuICAgIGlmIChpc1VuZGVmaW5lZChvcHRpb25zKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBza2lwQXBwT3ZlcnJpZGUgPSAob3B0aW9ucyBhcyBCcm93c2Vyc3RhY2tDb25maWcpLnNraXBBcHBPdmVycmlkZVxuICAgIGNvbnN0IGFscmVhZHlXYXJuZWQgPSBpc1RydWUocHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX1NLSVBfQVBQX09WRVJSSURFX1dBUk5FRClcblxuICAgIC8vIFN0YW5kYXJkIHdhcm5pbmcgXHUyMDE0IGZpcmVzIHdoZW5ldmVyIHNraXBBcHBPdmVycmlkZSBpcyB0cnVlLCBiZWZvcmUgYW55IGVkZ2UgcmV0dXJuLlxuICAgIGlmIChpc1RydWUoc2tpcEFwcE92ZXJyaWRlKSAmJiAhYWxyZWFkeVdhcm5lZCkge1xuICAgICAgICBCU3RhY2tMb2dnZXIud2FybignW0Jyb3dzZXJTdGFja10gXFwnc2tpcEFwcE92ZXJyaWRlOiB0cnVlXFwnIGlzIHNldC4gVGhlIFNESyB3aWxsIHRyZWF0IHRoaXMgc2Vzc2lvbiBhcyBBcHAgQXV0b21hdGUgYW5kIHdpbGwgTk9UIG1hbmFnZSBhcHAgdXBsb2FkIG9yIGluamVjdCBhcHAgY2FwYWJpbGl0aWVzLiBJZiB5b3UgaW50ZW5kZWQgdG8gcnVuIGFuIEF1dG9tYXRlIChicm93c2VyL3dlYnNpdGUpIHNlc3Npb24sIHJlbW92ZSBcXCdza2lwQXBwT3ZlcnJpZGVcXCcgXHUyMDE0IGxlYXZpbmcgaXQgc2V0IHdpbGwgY2F1c2UgQXV0b21hdGUgc2Vzc2lvbnMgdG8gYmVoYXZlIGluY29ycmVjdGx5LicpXG4gICAgICAgIHByb2Nlc3MuZW52LkJST1dTRVJTVEFDS19TS0lQX0FQUF9PVkVSUklERV9XQVJORUQgPSAndHJ1ZSdcbiAgICB9XG5cbiAgICAvLyBFZGdlIDE6IGFwcCBzcGVjaWZpZWQgKyBza2lwQXBwT3ZlcnJpZGU6dHJ1ZSBcdTIxOTIgd2FybiwgY2xlYXIgdGhlIGFwcCBzbyBpdCBpcyBub3RcbiAgICAvLyB1cGxvYWRlZC9pbmplY3RlZCwgcHJvY2VlZCBBcHAgQXV0b21hdGUuXG4gICAgaWYgKGlzVHJ1ZShza2lwQXBwT3ZlcnJpZGUpICYmICFpc1VuZGVmaW5lZCgob3B0aW9ucyBhcyBCcm93c2Vyc3RhY2tDb25maWcpLmFwcCkpIHtcbiAgICAgICAgQlN0YWNrTG9nZ2VyLndhcm4oJ0NvbmZsaWN0IGRldGVjdGVkLiBza2lwQXBwT3ZlcnJpZGU6IHRydWUgaXMgYWN0aXZlOyBpZ25vcmluZyB0aGUgYXBwIHByb3ZpZGVkIGluIHRoZSBicm93c2Vyc3RhY2sgc2VydmljZSBvcHRpb25zLicpXG4gICAgICAgIDsob3B0aW9ucyBhcyBCcm93c2Vyc3RhY2tDb25maWcpLmFwcCA9IHVuZGVmaW5lZFxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBFZGdlIDI6IGFwcCBub3Qgc3BlY2lmaWVkICsgc2tpcEFwcE92ZXJyaWRlIGV4cGxpY2l0bHkgZmFsc2UgXHUyMTkyIHByZS1zZXNzaW9uIGNvbmZpZyBlcnJvci5cbiAgICBpZiAoaXNGYWxzZShza2lwQXBwT3ZlcnJpZGUpICYmIGlzVW5kZWZpbmVkKChvcHRpb25zIGFzIEJyb3dzZXJzdGFja0NvbmZpZykuYXBwKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcCBjYXBhYmlsaXR5IGlzIG1pc3NpbmcuIFdoZW4gc2tpcEFwcE92ZXJyaWRlIGlzIHNldCB0byBcXCdmYWxzZVxcJywgYSB2YWxpZCBhcHAgY2FwYWJpbGl0eSAoaGFzaC9zaGFyZWFibGUgaWQvcGF0aC9jdXN0b21faWQpIG11c3QgYmUgcHJvdmlkZWQuJylcbiAgICB9XG5cbiAgICAvLyBFZGdlIDMgKGFuZCBkZWZhdWx0KTogdW5zZXQgKyBubyBhcHAgXHUyMTkyIHVuY2hhbmdlZCBiZWhhdmlvciAobm8tb3ApLlxufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJhbWV3b3JrU3VwcG9ydHNIb29rKGhvb2s6IHN0cmluZywgZnJhbWV3b3JrPzogc3RyaW5nKSB7XG4gICAgaWYgKGZyYW1ld29yayA9PT0gJ21vY2hhJyAmJiAoaG9vayA9PT0gJ2JlZm9yZScgfHwgaG9vayA9PT0gJ2FmdGVyJyB8fCBob29rID09PSAnYmVmb3JlRWFjaCcgfHwgaG9vayA9PT0gJ2FmdGVyRWFjaCcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaWYgKGZyYW1ld29yayA9PT0gJ2N1Y3VtYmVyJykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgcGF0Y2hDb25zb2xlTG9ncyA9IG8xMXlFcnJvckhhbmRsZXIoKCkgPT4ge1xuICAgIGNvbnN0IEJTVGVzdE9wc1BhdGNoZXIgPSBuZXcgbG9nUGF0Y2hlcih7fSlcblxuICAgIE9iamVjdC5rZXlzKGNvbnNvbGVIb2xkZXIpLmZvckVhY2goKG1ldGhvZDoga2V5b2YgdHlwZW9mIGNvbnNvbGUpID0+IHtcbiAgICAgICAgaWYgKCEobWV0aG9kIGluIGNvbnNvbGUpIHx8IG1ldGhvZCA9PT0gJ0NvbnNvbGUnIHx8IHR5cGVvZiBjb25zb2xlW21ldGhvZF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgU2tpcHBpbmcgbWV0aG9kOiAke21ldGhvZH0sIGV4aXN0czogJHttZXRob2QgaW4gY29uc29sZX0sIHR5cGU6ICR7dHlwZW9mIGNvbnNvbGVbbWV0aG9kXX1gKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3JpZ01ldGhvZDogRnVuY3Rpb24gPSBjb25zb2xlW21ldGhvZF0uYmluZChjb25zb2xlKVxuXG4gICAgICAgIGNvbnNvbGVbbWV0aG9kXSA9ICguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhCU1Rlc3RPcHNQYXRjaGVyKS5pbmNsdWRlcyhtZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdNZXRob2QoLi4uYXJncylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcmlnTWV0aG9kKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAoQlNUZXN0T3BzUGF0Y2hlciBhcyBhbnkpW21ldGhvZF0oLi4uYXJncylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgRXJyb3Igd2hpbGUgcGF0Y2hpbmcgY29uc29sZSBsb2dzIDogJHtlcnJvcn1gKVxuICAgICAgICAgICAgICAgIG9yaWdNZXRob2QoLi4uYXJncylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFpbHVyZU9iamVjdChlcnJvcjogc3RyaW5nfEVycm9yKSB7XG4gICAgY29uc3Qgc3RhY2sgPSAoZXJyb3IgYXMgRXJyb3IpLnN0YWNrXG4gICAgY29uc3QgbWVzc2FnZSA9IHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6IGVycm9yLm1lc3NhZ2VcbiAgICBjb25zdCBiYWNrdHJhY2UgPSBzdGFjayA/IHJlbW92ZUFuc2lDb2xvcnMoc3RhY2sudG9TdHJpbmcoKSkgOiAnJ1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmFpbHVyZTogW3sgYmFja3RyYWNlOiBbYmFja3RyYWNlXSB9XSxcbiAgICAgICAgZmFpbHVyZV9yZWFzb246IHJlbW92ZUFuc2lDb2xvcnMobWVzc2FnZS50b1N0cmluZygpKSxcbiAgICAgICAgZmFpbHVyZV90eXBlOiBtZXNzYWdlID8gKG1lc3NhZ2UudG9TdHJpbmcoKS5tYXRjaCgvQXNzZXJ0aW9uRXJyb3IvKSA/ICdBc3NlcnRpb25FcnJvcicgOiAnVW5oYW5kbGVkRXJyb3InKSA6IG51bGxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzbGVlcCA9IChtcyA9IDEwMCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZExvZ3NPcHRpb25zIHtcbiAgICAvKiBvcHQtb3V0LCBtaXJyb3JpbmcgdGhlIE5vZGUgU0RLJ3MgYGRpc2FibGVBdXRvQ2FwdHVyZUxvZ3NgICovXG4gICAgZGlzYWJsZUF1dG9DYXB0dXJlTG9ncz86IGJvb2xlYW5cbiAgICAvKiBwYXJzZWQgd2RpbyBjb25maWcsIHVzZWQgdG8gbG9jYXRlIHRoZSB1c2VyJ3MgY29uZmlnIGZpbGUgKi9cbiAgICBjb25maWc/OiBPcHRpb25zLlRlc3RydW5uZXJcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZExvZ3ModXNlcjogc3RyaW5nIHwgdW5kZWZpbmVkLCBrZXk6IHN0cmluZyB8IHVuZGVmaW5lZCwgY2xpZW50QnVpbGRVdWlkOiBzdHJpbmcsIG9wdGlvbnM6IFVwbG9hZExvZ3NPcHRpb25zID0ge30pIHtcbiAgICAvLyBNYW51YWwgaW5zdHJ1bWVudGF0aW9uOiB0YWcgZXZlcnkgcmV0dXJuIHBhdGggb24gdGhlIFNES19VUExPQURfTE9HUyBldmVudCBzb1xuICAgIC8vIHRoZSBtZXRyaWMgaWRlbnRpZmllcyB0aGUgc3BlY2lmaWMgcmVhc29uIGxvZ3Mgd2VyZSBub3QgdXBsb2FkZWQgKG5vIGNyZWRzLFxuICAgIC8vIHBlci1maWxlIGNvcHkgZmFpbHVyZSwgdXBsb2FkIG5vLXJlc3BvbnNlLCBleGNlcHRpb24pLiBtZWFzdXJlV3JhcHBlciB3b3VsZFxuICAgIC8vIG90aGVyd2lzZSBtYXJrIGFsbCBub24tdGhyb3dpbmcgcGF0aHMgYXMgc3VjY2Vzcy5cbiAgICBjb25zdCBldmVudE5hbWUgPSBQRVJGT1JNQU5DRV9TREtfRVZFTlRTLkVWRU5UUy5TREtfVVBMT0FEX0xPR1NcbiAgICBsZXQgc3VjY2VzcyA9IHRydWVcbiAgICBsZXQgZmFpbHVyZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgLy8gU3RhZ2luZyBkaXIgZm9yIHRoZSBhcmNoaXZlLiBDcmVhdGVkIHBlciBydW46IHRoZSBwcmV2aW91cyBmaXhlZCBgdG1wZGlyKCkvbG9ncy50YXJgXG4gICAgLy8gbmFtZXMgbWVhbnQgdHdvIGNvbmN1cnJlbnQgd2RpbyBydW5zIG9uIG9uZSBDSSBob3N0IGNsb2JiZXJlZCBhbmQgdW5saW5rZWQgZWFjaFxuICAgIC8vIG90aGVyJ3MgYXJjaGl2ZXMsIGFuZCBhIHNvdXJjZSBmaWxlIHRoYXQgYWxyZWFkeSBsaXZlZCBpbiB0bXBkaXIgd2FzIGNvcGllZCBvbnRvXG4gICAgLy8gaXRzZWxmIGFuZCB0aGVuIGRlbGV0ZWQgYnkgY2xlYW51cC5cbiAgICBsZXQgc3RhZ2luZ0Rpcjogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgUGVyZm9ybWFuY2VUZXN0ZXIuc3RhcnQoZXZlbnROYW1lKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gaXNBdXRvQ2FwdHVyZUxvZ3NEaXNhYmxlZCAobm90IG9wdGlvbnMuZGlzYWJsZUF1dG9DYXB0dXJlTG9ncykgc28gdGhlIGRldGFjaGVkXG4gICAgICAgIC8vIGNsZWFudXAgcHJvY2VzcyBcdTIwMTQgd2hpY2ggY2FsbHMgdGhpcyB3aXRoIG5vIG9wdGlvbnMgXHUyMDE0IHN0aWxsIGhvbm91cnMgdGhlIG9wdC1vdXRcbiAgICAgICAgLy8gdmlhIHRoZSBlbnYgdmFyIHRoZSBsYXVuY2hlciBwdWJsaXNoZXMuXG4gICAgICAgIGlmIChpc0F1dG9DYXB0dXJlTG9nc0Rpc2FibGVkKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2VcbiAgICAgICAgICAgIGZhaWx1cmUgPSAnc2tpcHBlZDogZGlzYWJsZUF1dG9DYXB0dXJlTG9ncz10cnVlJ1xuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKCdTa2lwcGluZyBsb2cgdXBsb2FkLCBhdXRvLWNhcHR1cmUgaXMgZGlzYWJsZWQnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVzZXIgfHwgIWtleSkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlXG4gICAgICAgICAgICBmYWlsdXJlID0gJ3NraXBwZWQ6IG1pc3NpbmdfY3JlZGVudGlhbHMnXG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoJ1VwbG9hZGluZyBsb2dzIGZhaWxlZCBkdWUgdG8gbm8gY3JlZGVudGlhbHMnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBzdGFnaW5nRGlyID0gZnMubWtkdGVtcFN5bmMocGF0aC5qb2luKHRtcGRpcigpLCAnYnN0YWNrLXdkaW8tbG9ncy0nKSlcbiAgICAgICAgY29uc3QgdG1wRGlyID0gc3RhZ2luZ0RpclxuICAgICAgICBjb25zdCB0YXJQYXRoID0gcGF0aC5qb2luKHRtcERpciwgJ2xvZ3MudGFyJylcbiAgICAgICAgY29uc3QgdGFyR3pQYXRoID0gcGF0aC5qb2luKHRtcERpciwgJ2xvZ3MudGFyLmd6JylcblxuICAgICAgICAvLyBBcmNoaXZlIGVudHJpZXMgYXJlIGtleWVkIGJ5IGJhc2VuYW1lLCBzbyB0d28gc291cmNlcyBzaGFyaW5nIG9uZSBiYXNlbmFtZSB3b3VsZFxuICAgICAgICAvLyBzaWxlbnRseSBvdmVyd3JpdGUgZWFjaCBvdGhlciBcdTIwMTQgcmVhY2hhYmxlIG5vdyB0aGF0IHVzZXItc3VwcGxpZWQgY29uZmlnIHBhdGhzXG4gICAgICAgIC8vIChlLmcuIGNvbmZpZ3Mvd2Rpby5jb25mLnRzICsgc2hhcmVkL3dkaW8uY29uZi50cykgam9pbiB0aGUgYXJjaGl2ZS5cbiAgICAgICAgLy8gU2FtZSBoZWxwZXIgY29sbGVjdENvbmZpZ0ZpbGVzRm9yVXBsb2FkIHVzZXMsIHNvIHRoZSB0d28gY2Fubm90IGRpc2FncmVlLlxuICAgICAgICBjb25zdCB0YWtlbk5hbWVzID0gbmV3IFNldDxzdHJpbmc+KFsnbG9ncy50YXInLCAnbG9ncy50YXIuZ3onXSlcbiAgICAgICAgY29uc3QgY29waWVkRmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdXG4gICAgICAgIGNvbnN0IGFyY2hpdmVBZGRGYWlsdXJlczogc3RyaW5nW10gPSBbXVxuICAgICAgICBjb25zdCB1bmlxdWVOYW1lID0gKGZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4gZGVkdXBlRW50cnlOYW1lKGZpbGVQYXRoLCB0YWtlbk5hbWVzKVxuXG4gICAgICAgIC8vIFNESy03MjUwOiB0aGUgdXNlcidzIHdkaW8gY29uZmlnIChhbmQgdGhlIGxvY2FsIGZpbGVzIGl0IGltcG9ydHMpLCBjcmVkZW50aWFsLXNjcnViYmVkLlxuICAgICAgICAvLyBTb2Z0LWZhaWx1cmUgYnkgZGVzaWduIFx1MjAxNCBhIGNvbmZpZyB3ZSBjYW5ub3QgcmVhZCBvciBsb2NhdGUgbXVzdCBuZXZlciBzdG9wIHRoZVxuICAgICAgICAvLyBsb2cgdXBsb2FkOyB0aGUgcmVhc29uIGlzIHJlY29yZGVkIG9uIHRoZSBldmVudCBpbnN0ZWFkLlxuICAgICAgICBjb25zdCB7IGZpbGVzOiBjb25maWdGaWxlcywgZmFpbHVyZXM6IGNvbmZpZ0ZhaWx1cmVzLCBzdHJhdGVneSB9ID0gY29sbGVjdENvbmZpZ0ZpbGVzRm9yVXBsb2FkKG9wdGlvbnMuY29uZmlnKVxuXG4gICAgICAgIC8vIHBhY2thZ2UuanNvbiBnaXZlcyB0cmlhZ2UgdGhlIGZyYW1ld29yay9zZXJ2aWNlIHZlcnNpb25zLCB3aGljaCB0aGUgYXJjaGl2ZSBjYXJyaWVkXG4gICAgICAgIC8vIGJlZm9yZSB0aGlzIGNoYW5nZS4gSXQgZ29lcyB0aHJvdWdoIHRoZSBzYW1lIHJlZGFjdGlvbiBhcyB0aGUgY29uZmlncyByYXRoZXIgdGhhblxuICAgICAgICAvLyBiZWluZyBjb3BpZWQgdmVyYmF0aW06IGBzY3JpcHRzYCByb3V0aW5lbHkgZW1iZWQgdG9rZW5zIChgLS10b2tlbj1naHBfLi4uYCksIGFuZCB0aGVcbiAgICAgICAgLy8gd2Fsay11cCBjYW4gc2VsZWN0IGEgbW9ub3JlcG8tcm9vdCBtYW5pZmVzdCBicm9hZGVyIHRoYW4gdGhlIHRlc3QgcHJvamVjdC4gT3JkaW5hcnlcbiAgICAgICAgLy8gZGVwZW5kZW5jeS92ZXJzaW9uIGxpbmVzIGFyZSB1bmFmZmVjdGVkIGJ5IHRoZSBzY3J1Yi5cbiAgICAgICAgLy8gc25hcHNob3QgYmVmb3JlIHBhY2thZ2UuanNvbiBqb2lucyB0aGUgbGlzdCwgc28gY291bnRzIGFuZCBuYW1lcyBzdGF5IGhvbmVzdFxuICAgICAgICBjb25zdCBjYXB0dXJlZENvbmZpZ05hbWVzID0gY29uZmlnRmlsZXMubWFwKGYgPT4gZi5uYW1lKVxuXG4gICAgICAgIGNvbnN0IHBhY2thZ2VKc29uUGF0aCA9IGZpbmRQYWNrYWdlSnNvbkZvclVwbG9hZCgpXG4gICAgICAgIGlmIChwYWNrYWdlSnNvblBhdGgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uZmlnRmlsZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHBhdGguYmFzZW5hbWUocGFja2FnZUpzb25QYXRoKSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlUGF0aDogcGFja2FnZUpzb25QYXRoLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZWRhY3RTZW5zaXRpdmVDb250ZW50KGZzLnJlYWRGaWxlU3luYyhwYWNrYWdlSnNvblBhdGgsICd1dGY4JykpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKHBrZ0Vycikge1xuICAgICAgICAgICAgICAgIGNvbmZpZ0ZhaWx1cmVzLnB1c2goYHBhY2thZ2UuanNvbjogJHsocGtnRXJyIGFzIEVycm9yKT8ubWVzc2FnZSB8fCBTdHJpbmcocGtnRXJyKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY29uZmlnRmlsZSBvZiBjb25maWdGaWxlcykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeU5hbWUgPSB1bmlxdWVOYW1lKGNvbmZpZ0ZpbGUubmFtZSlcbiAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGguam9pbih0bXBEaXIsIGVudHJ5TmFtZSksIGNvbmZpZ0ZpbGUuY29udGVudClcbiAgICAgICAgICAgICAgICBjb3BpZWRGaWxlTmFtZXMucHVzaChlbnRyeU5hbWUpXG4gICAgICAgICAgICB9IGNhdGNoICh3cml0ZUVycikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9ICh3cml0ZUVyciBhcyBFcnJvcik/Lm1lc3NhZ2UgfHwgU3RyaW5nKHdyaXRlRXJyKVxuICAgICAgICAgICAgICAgIGNvbmZpZ0ZhaWx1cmVzLnB1c2goYCR7Y29uZmlnRmlsZS5uYW1lfTogJHttc2d9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBMb2dnZWQgc2VwYXJhdGVseSBmcm9tIHBhY2thZ2UuanNvbjogYGNvbmZpZ0ZpbGVzYCBoYXMgdGhlIG1hbmlmZXN0IGFwcGVuZGVkIHRvIGl0LFxuICAgICAgICAvLyBhbmQgYHN0cmF0ZWd5YCBpcyB1bmRlZmluZWQgb24gZXZlcnkgZmFpbHVyZSBwYXRoLCBzbyBhIGNvbWJpbmVkIGxpbmUgcmVhZHNcbiAgICAgICAgLy8gXCJBdXRvLWNhcHR1cmVkIDEgY29uZmlnIGZpbGUocykgdmlhIHVuZGVmaW5lZDogcGFja2FnZS5qc29uXCIgXHUyMDE0IGkuZS4gaXQgY2xhaW1zIGFcbiAgICAgICAgLy8gY2FwdHVyZSBzdWNjZWVkZWQgaW4gZXhhY3RseSB0aGUgY2FzZSB3aGVyZSBub25lIGRpZC5cbiAgICAgICAgaWYgKGNhcHR1cmVkQ29uZmlnTmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBBdXRvLWNhcHR1cmVkICR7Y2FwdHVyZWRDb25maWdOYW1lcy5sZW5ndGh9IGNvbmZpZyBmaWxlKHMpIHZpYSAke3N0cmF0ZWd5fTogJHtjYXB0dXJlZENvbmZpZ05hbWVzLmpvaW4oJywgJyl9YClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgTm8gd2RpbyBjb25maWcgY2FwdHVyZWQke3N0cmF0ZWd5ID8gYCAoc3RyYXRlZ3kgJHtzdHJhdGVneX0pYCA6ICcnfWApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhY2thZ2VKc29uUGF0aCkge1xuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBBdXRvLWNhcHR1cmVkIHBhY2thZ2UuanNvbiBmcm9tICR7cmVsYXRpdmVEaXJUb0N3ZChwYXRoLmRpcm5hbWUocGFja2FnZUpzb25QYXRoKSl9YClcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnRmFpbHVyZXMubGVuZ3RoID4gMCAmJiBmYWlsdXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFdhcm5pbmcgb25seSBcdTIwMTQgYHN1Y2Nlc3NgIHN0YXlzIHRydWUgc28gYSBtaXNzaW5nIGNvbmZpZyBuZXZlciByZWFkcyBhcyBhXG4gICAgICAgICAgICAvLyBmYWlsZWQgbG9nIHVwbG9hZCAoc2FtZSBjb250cmFjdCBhcyB0aGUgTm9kZSBTREsncyBgcmVkYWN0aW9uX2ZhaWxlZGApLlxuICAgICAgICAgICAgZmFpbHVyZSA9IGBjb25maWdfY2FwdHVyZTogJHtjb25maWdGYWlsdXJlcy5qb2luKCc7ICcpfWAuc3Vic3RyaW5nKDAsIDMwMClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBzZXJ2aWNlIGxvZyBpcyBzbmFwc2hvdHRlZCBMQVNULCBkZWxpYmVyYXRlbHkuIEV2ZXJ5dGhpbmcgYWJvdmUgLS0gdGhlIHJlc29sdXRpb25cbiAgICAgICAgLy8gc3RyYXRlZ3ksIHdoYXQgd2FzIGNhcHR1cmVkLCBhbmQgYW55IGNhcHR1cmUgZmFpbHVyZXMgLS0gaXMgd3JpdHRlbiB0byB0aGF0IGxvZ1xuICAgICAgICAvLyBmaXJzdCwgc28gaXQgaXMgaW5zaWRlIHRoZSBjb3B5IHRoYXQgc2hpcHMuIENvcHlpbmcgZWFybGllciBpcyB3aHkgdGhvc2UgbGluZXMgdXNlZFxuICAgICAgICAvLyB0byBleGlzdCBvbmx5IGluIHRoZSBkZXZlbG9wZXIncyBsb2NhbCBmaWxlIGFuZCBuZXZlciBpbiB0aGUgZG93bmxvYWRlZCBidW5kbGUuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIE9yZGVyaW5nIGFsb25lIGlzIG5vdCBlbm91Z2g6IEJTdGFja0xvZ2dlciB3cml0ZXMgdGhyb3VnaCBhbiBhc3luYyBXcml0ZVN0cmVhbSwgc29cbiAgICAgICAgLy8gdGhvc2UgbGluZXMgYXJlIHN0aWxsIGJ1ZmZlcmVkIGF0IHRoaXMgcG9pbnQuIEZsdXNoIGJlZm9yZSBjb3B5aW5nIG9yIHRoZSBzaGlwcGVkXG4gICAgICAgIC8vIGNvcHkgaXMgc2lsZW50bHkgbWlzc2luZyBpdHMgdGFpbCAodmVyaWZpZWQgYWdhaW5zdCBhIGRvd25sb2FkZWQgYnVuZGxlKS5cbiAgICAgICAgYXdhaXQgQlN0YWNrTG9nZ2VyLmZsdXNoTG9nRmlsZSgpXG5cbiAgICAgICAgY29uc3QgZmlsZXNUb0FyY2hpdmUgPSBbXG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIubG9nRmlsZVBhdGgsXG4gICAgICAgICAgICBDTElfREVCVUdfTE9HU19GSUxFLFxuICAgICAgICBdLmZpbHRlcigoZik6IGYgaXMgc3RyaW5nID0+IEJvb2xlYW4oZikgJiYgZnMuZXhpc3RzU3luYyhmIGFzIHN0cmluZykpXG5cbiAgICAgICAgZm9yIChjb25zdCBmIG9mIGZpbGVzVG9BcmNoaXZlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5TmFtZSA9IHVuaXF1ZU5hbWUoZilcbiAgICAgICAgICAgICAgICBmcy5jb3B5RmlsZVN5bmMoZiwgcGF0aC5qb2luKHRtcERpciwgZW50cnlOYW1lKSlcbiAgICAgICAgICAgICAgICBjb3BpZWRGaWxlTmFtZXMucHVzaChlbnRyeU5hbWUpXG4gICAgICAgICAgICB9IGNhdGNoIChjb3B5RXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXNnID0gKGNvcHlFcnIgYXMgRXJyb3IpPy5tZXNzYWdlIHx8IFN0cmluZyhjb3B5RXJyKVxuICAgICAgICAgICAgICAgIGFyY2hpdmVBZGRGYWlsdXJlcy5wdXNoKGAke3BhdGguYmFzZW5hbWUoZil9OiAke21zZ31gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyY2hpdmVBZGRGYWlsdXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2VcbiAgICAgICAgICAgIGZhaWx1cmUgPSBgYXJjaGl2ZV9hZGRfZmFpbGVkIFske2FyY2hpdmVBZGRGYWlsdXJlcy5sZW5ndGh9XTogJHthcmNoaXZlQWRkRmFpbHVyZXMuam9pbignOyAnKX1gLnN1YnN0cmluZygwLCAzMDApXG4gICAgICAgIH1cblxuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYEF1dG8tY2FwdHVyZSBhcmNoaXZlIGVudHJpZXM6ICR7Y29waWVkRmlsZU5hbWVzLmpvaW4oJywgJyl9YClcblxuICAgICAgICBhd2FpdCBjcmVhdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZTogdGFyUGF0aCxcbiAgICAgICAgICAgICAgICBjd2Q6IHRtcERpcixcbiAgICAgICAgICAgICAgICBwb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBub0RpclJlY3Vyc2U6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3BpZWRGaWxlTmFtZXNcbiAgICAgICAgKVxuXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGFyUGF0aClcbiAgICAgICAgICAgIGNvbnN0IGRlc3QgPSBmcy5jcmVhdGVXcml0ZVN0cmVhbSh0YXJHelBhdGgpXG4gICAgICAgICAgICBjb25zdCBnemlwID0gemxpYi5jcmVhdGVHemlwKHsgbGV2ZWw6IDEgfSlcblxuICAgICAgICAgICAgc291cmNlLnBpcGUoZ3ppcCkucGlwZShkZXN0KVxuICAgICAgICAgICAgZGVzdC5vbignZmluaXNoJywgcmVzb2x2ZSlcbiAgICAgICAgICAgIGRlc3Qub24oJ2Vycm9yJywgcmVqZWN0KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgLy8gb3BlbkFzQmxvYiAoTm9kZSA+PTIwKSByZXR1cm5zIGEgQmxvYiBiYWNrZWQgYnkgYSBmaWxlIGRlc2NyaXB0b3IgXHUyMDE0IHVuZGljaVxuICAgICAgICAvLyBzdHJlYW1zIGZyb20gZGlzayBkdXJpbmcgdGhlIHVwbG9hZCBpbnN0ZWFkIG9mIG1hdGVyaWFsaXNpbmcgdGhlIGZ1bGwgYXJjaGl2ZVxuICAgICAgICAvLyBpbiBWOCBoZWFwICh3aGljaCByZWFkRmlsZVN5bmMgKyBuZXcgQmxvYihbQnVmZmVyXSkgd291bGQgZG8gdHdpY2UpLlxuICAgICAgICAvLyBOb2RlIDE4LjIwIChzdGlsbCBzdXBwb3J0ZWQgcGVyIGBlbmdpbmVzYCkgbGFja3MgZnMub3BlbkFzQmxvYiwgc28gZmFsbCBiYWNrXG4gICAgICAgIC8vIHRvIHJlYWRpbmcgdGhlIChzbWFsbCkgbG9nIGFyY2hpdmUgaW50byBhIEJsb2IgdGhlcmUuXG4gICAgICAgIGNvbnN0IGZpbGUgPSB0eXBlb2YgZnMub3BlbkFzQmxvYiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyBhd2FpdCBmcy5vcGVuQXNCbG9iKHRhckd6UGF0aCwgeyB0eXBlOiAnYXBwbGljYXRpb24veC1nemlwJyB9KVxuICAgICAgICAgICAgOiBuZXcgQmxvYihbZnMucmVhZEZpbGVTeW5jKHRhckd6UGF0aCldLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi94LWd6aXAnIH0pXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIGZpbGUsICdsb2dzLnRhci5neicpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY2xpZW50QnVpbGRVdWlkJywgY2xpZW50QnVpbGRVdWlkKVxuXG4gICAgICAgIGNvbnN0IGF1dGggPSBCdWZmZXIuZnJvbShgJHt1c2VyfToke2tleX1gKS50b1N0cmluZygnYmFzZTY0JylcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEgYXMgQm9keUluaXQsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmFzaWMgJHthdXRofWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbm9kZVJlcXVlc3QoXG4gICAgICAgICAgICAnUE9TVCcsIFVQTE9BRF9MT0dTX0VORFBPSU5ULCByZXF1ZXN0T3B0aW9ucywgQVBJVXRpbHMuVVBMT0FEX0xPR1NfQUREUkVTU1xuICAgICAgICApXG5cbiAgICAgICAgLy8gU3RhZ2luZyBkaXIgKGFyY2hpdmUgKyBldmVyeSBjb3BpZWQvcmVkYWN0ZWQgZW50cnkpIGlzIHJlbW92ZWQgaW4gYGZpbmFsbHlgLlxuXG4gICAgICAgIC8vIERlbGV0ZSB0aGUgU0RLIENMSSBsb2cgZmlsZSBhZnRlciB1cGxvYWRcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoQ0xJX0RFQlVHX0xPR1NfRklMRSkpIHtcbiAgICAgICAgICAgIGZzLnVubGlua1N5bmMoQ0xJX0RFQlVHX0xPR1NfRklMRSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vIG5vZGVSZXF1ZXN0IHN3YWxsb3dzIGVycm9ycyBmb3IgdGhlIGxvZy11cGxvYWQgcGF0aCBhbmQgcmV0dXJucyB1bmRlZmluZWQ7XG4gICAgICAgICAgICAvLyByZWNvcmQgdGhlIHNpbGVudCB1cGxvYWQgZmFpbHVyZSBvbiB0aGUgbWV0cmljLlxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlXG4gICAgICAgICAgICBmYWlsdXJlID0gJ3VwbG9hZF9ub19yZXNwb25zZSdcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgJiYgcmVzcG9uc2Uuc3RhdHVzICE9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIC8vIFNlcnZlci1zaWRlIHJlamVjdGlvbiAoZS5nLiBcIkZpbGUgbm90IGF0dGFjaGVkXCIpIFx1MjAxNCByZXNwb25zZSBpcyB0cnV0aHlcbiAgICAgICAgICAgIC8vIGJ1dCB0aGUgdXBsb2FkIGRpZG4ndCBhY3R1YWxseSBsYW5kLlxuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlXG4gICAgICAgICAgICBmYWlsdXJlID0gYHVwbG9hZF9zdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfSR7cmVzcG9uc2UubWVzc2FnZSA/ICcgLSAnICsgU3RyaW5nKHJlc3BvbnNlLm1lc3NhZ2UpLnNsaWNlKDAsIDIwMCkgOiAnJ31gXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzdWNjZXNzID0gZmFsc2VcbiAgICAgICAgZmFpbHVyZSA9IGB1cGxvYWRMb2dzIGV4Y2VwdGlvbjogJHtnZXRFcnJvclN0cmluZyhlcnJvcil9YFxuICAgICAgICBCU3RhY2tMb2dnZXIuZXJyb3IoYEVycm9yIHdoaWxlIHVwbG9hZGluZyBsb2dzOiAke2dldEVycm9yU3RyaW5nKGVycm9yKX1gKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChzdGFnaW5nRGlyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZzLnJtU3luYyhzdGFnaW5nRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSwgZm9yY2U6IHRydWUgfSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGNsZWFudXBFcnIpIHtcbiAgICAgICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYEZhaWxlZCB0byBjbGVhbiB1cCBsb2cgc3RhZ2luZyBkaXIgJHtzdGFnaW5nRGlyfTogJHtnZXRFcnJvclN0cmluZyhjbGVhbnVwRXJyKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFBlcmZvcm1hbmNlVGVzdGVyLmVuZChldmVudE5hbWUsIHN1Y2Nlc3MsIGZhaWx1cmUpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAob2JqZWN0OiB1bmtub3duKSA9PiB7XG4gICAgcmV0dXJuIG9iamVjdCAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmplY3QpXG59XG5cbmV4cG9ydCBjb25zdCBPYmplY3RzQXJlRXF1YWwgPSAob2JqZWN0MTogb2JqZWN0LCBvYmplY3QyOiBvYmplY3QpID0+IHtcbiAgICBjb25zdCBvYmplY3RLZXlzMSA9IE9iamVjdC5rZXlzKG9iamVjdDEpXG4gICAgY29uc3Qgb2JqZWN0S2V5czIgPSBPYmplY3Qua2V5cyhvYmplY3QyKVxuICAgIGlmIChvYmplY3RLZXlzMS5sZW5ndGggIT09IG9iamVjdEtleXMyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2Ygb2JqZWN0S2V5czEpIHtcbiAgICAgICAgY29uc3QgdmFsdWUxID0gb2JqZWN0MVtrZXkgYXMga2V5b2YgdHlwZW9mIG9iamVjdDFdXG4gICAgICAgIGNvbnN0IHZhbHVlMiA9IG9iamVjdDJba2V5IGFzIGtleW9mIHR5cGVvZiBvYmplY3QxXVxuICAgICAgICBjb25zdCBpc0JvdGhBcmVPYmplY3RzID0gaXNPYmplY3QodmFsdWUxKSAmJiBpc09iamVjdCh2YWx1ZTIpXG4gICAgICAgIGlmICgoaXNCb3RoQXJlT2JqZWN0cyAmJiAhT2JqZWN0c0FyZUVxdWFsKHZhbHVlMSwgdmFsdWUyKSkgfHwgKCFpc0JvdGhBcmVPYmplY3RzICYmIHZhbHVlMSAhPT0gdmFsdWUyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBsYXRmb3JtVmVyc2lvbiA9IG8xMXlFcnJvckhhbmRsZXIoZnVuY3Rpb24gZ2V0UGxhdGZvcm1WZXJzaW9uKGNhcHM6IFdlYmRyaXZlcklPLkNhcGFiaWxpdGllcywgdXNlckNhcHM6IFdlYmRyaXZlcklPLkNhcGFiaWxpdGllcykge1xuICAgIGlmICghY2FwcyAmJiAhdXNlckNhcHMpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbnN0IGJzdGFja09wdGlvbnMgPSAodXNlckNhcHMpPy5bJ2JzdGFjazpvcHRpb25zJ11cbiAgICBjb25zdCBrZXlzID0gWydwbGF0Zm9ybVZlcnNpb24nLCAncGxhdGZvcm1fdmVyc2lvbicsICdvc1ZlcnNpb24nLCAnb3NfdmVyc2lvbiddXG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGlmIChjYXBzPy5ba2V5IGFzIGtleW9mIFdlYmRyaXZlcklPLkNhcGFiaWxpdGllc10pIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgR290ICR7a2V5fSBmcm9tIGRyaXZlciBjYXBzYClcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcoY2Fwcz8uW2tleSBhcyBrZXlvZiBXZWJkcml2ZXJJTy5DYXBhYmlsaXRpZXNdKVxuICAgICAgICB9IGVsc2UgaWYgKGJzdGFja09wdGlvbnMgJiYgYnN0YWNrT3B0aW9ucz8uW2tleSBhcyBrZXlvZiBDYXBhYmlsaXRpZXMuQnJvd3NlclN0YWNrQ2FwYWJpbGl0aWVzXSkge1xuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBHb3QgJHtrZXl9IGZyb20gdXNlciBic3RhY2sgb3B0aW9uc2ApXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKGJzdGFja09wdGlvbnM/LltrZXkgYXMga2V5b2YgQ2FwYWJpbGl0aWVzLkJyb3dzZXJTdGFja0NhcGFiaWxpdGllc10pXG4gICAgICAgIH0gZWxzZSBpZiAodXNlckNhcHNba2V5IGFzIGtleW9mIFdlYmRyaXZlcklPLkNhcGFiaWxpdGllc10pIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgR290ICR7a2V5fSBmcm9tIHVzZXIgY2Fwc2ApXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHVzZXJDYXBzW2tleSBhcyBrZXlvZiBXZWJkcml2ZXJJTy5DYXBhYmlsaXRpZXNdKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbn0pXG5cbi8qKlxuICogUmVzb2x2ZSBhIHN0YWJsZSwgaHVtYW4tcmVhZGFibGUgZGV2aWNlIGlkZW50aWZpZXIgZm9yIHRoZVxuICogYGRldmljZWAgZmllbGQgb24gdGVzdF9ydW4gaW50ZWdyYXRpb25zIHBheWxvYWRzLlxuICpcbiAqIFRlc3RIdWIgZGVkdXBlcyB0ZXN0X3J1bnMgYnkgYSBoYXNoIHRoYXQgaW5jbHVkZXMgYGRldmljZWAuIEZvclxuICogQXBwLUF1dG9tYXRlIGZsb3dzIHRoYXQgcGFzcyBhIHJlZ2V4IGRldmljZSByZXF1ZXN0IChlLmcuIGAuKlBpeGVsLipgKVxuICogYWNyb3NzIG11bHRpcGxlIHBsYXRmb3JtcywgdGhlIFNESyBwcmV2aW91c2x5IHNlbnQgdGhlIGlucHV0IHJlZ2V4XG4gKiBzdHJpbmcsIGNhdXNpbmcgdHdvIHBhcmFsbGVsIHNlc3Npb25zIG9uIHBoeXNpY2FsbHkgZGlmZmVyZW50IGRldmljZXNcbiAqIHRvIGNvbGxpZGUgb24gdGhlIGhhc2ggYW5kIG1lcmdlLiBUaGlzIGhlbHBlciBwcmVmZXJzIHRoZSBBcHBpdW1cbiAqIHNlcnZlci1yZXNvbHZlZCBmaWVsZHMgKGBkZXZpY2VNb2RlbGAgLyBgYXBwaXVtOmRldmljZU1vZGVsYCkgYmVmb3JlXG4gKiBmYWxsaW5nIGJhY2sgdG8gdGhlIHJlcXVlc3RlZCBjYXBhYmlsaXRpZXMuXG4gKlxuICogTXVsdGlyZW1vdGU6IGBkcml2ZXJDYXBzYCBmb3IgYSBgTXVsdGlSZW1vdGVCcm93c2VyYCBpcyBhIG1hcCBvZlxuICogYHtpbnN0YW5jZU5hbWU6IFdlYmRyaXZlcklPLkNhcGFiaWxpdGllcywgXHUyMDI2fWAgcmF0aGVyIHRoYW4gZmxhdCBjYXBzO1xuICogdGhlIGhlbHBlciBkZXRlY3RzIHRoYXQgc2hhcGUgYW5kIHdhbGtzIGVhY2ggaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIGRyaXZlckNhcHMgLSBsaXZlIGRyaXZlciBjYXBhYmlsaXRpZXMgKGBicm93c2VyLmNhcGFiaWxpdGllc2ApXG4gKiAgICAgICAgICAgICAgICAgICAgIHdoZXJlIEFwcGl1bSBzZXJ2ZXItcmVzb2x2ZWQgZmllbGRzIGFyZSBwb3B1bGF0ZWRcbiAqIEBwYXJhbSByZXF1ZXN0ZWRDYXBzIC0gdXNlci1yZXF1ZXN0ZWQgY2FwYWJpbGl0aWVzIChydW5uZXIgY2FwcyAvIHltbClcbiAqICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCBhcyBhIGZhbGxiYWNrXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRSZXNvbHZlZERldmljZU5hbWUgPSBvMTF5RXJyb3JIYW5kbGVyKGZ1bmN0aW9uIGdldFJlc29sdmVkRGV2aWNlTmFtZShcbiAgICBkcml2ZXJDYXBzPzogV2ViZHJpdmVySU8uQ2FwYWJpbGl0aWVzIHwgUmVjb3JkPHN0cmluZywgeyBjYXBhYmlsaXRpZXM/OiBXZWJkcml2ZXJJTy5DYXBhYmlsaXRpZXMgfT4sXG4gICAgcmVxdWVzdGVkQ2Fwcz86IFdlYmRyaXZlcklPLkNhcGFiaWxpdGllcyB8IFJlY29yZDxzdHJpbmcsIHsgY2FwYWJpbGl0aWVzPzogV2ViZHJpdmVySU8uQ2FwYWJpbGl0aWVzIH0+LFxuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBmbGF0dGVuTXVsdGlyZW1vdGUgPSAoXG4gICAgICAgIGNhcHM6IFdlYmRyaXZlcklPLkNhcGFiaWxpdGllcyB8IFJlY29yZDxzdHJpbmcsIHsgY2FwYWJpbGl0aWVzPzogV2ViZHJpdmVySU8uQ2FwYWJpbGl0aWVzIH0+IHwgdW5kZWZpbmVkLFxuICAgICk6IFdlYmRyaXZlcklPLkNhcGFiaWxpdGllc1tdID0+IHtcbiAgICAgICAgaWYgKCFjYXBzKSB7cmV0dXJuIFtdfVxuICAgICAgICBjb25zdCBvYmogPSBjYXBzIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgIGlmIChvYmouZGV2aWNlTW9kZWwgfHwgb2JqWydhcHBpdW06ZGV2aWNlTW9kZWwnXSB8fCBvYmouZGV2aWNlTmFtZSB8fCBvYmpbJ2JzdGFjazpvcHRpb25zJ10pIHtcbiAgICAgICAgICAgIC8vIGxvb2tzIGxpa2UgZmxhdCBjYXBzXG4gICAgICAgICAgICByZXR1cm4gW2NhcHMgYXMgV2ViZHJpdmVySU8uQ2FwYWJpbGl0aWVzXVxuICAgICAgICB9XG4gICAgICAgIC8vIGxvb2tzIGxpa2UgYSBtdWx0aXJlbW90ZSBtYXA6IHtpbnN0YW5jZU5hbWU6IHtjYXBhYmlsaXRpZXM6IHsuLi59fX1cbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAgICAgLmZpbHRlcigodik6IHYgaXMgeyBjYXBhYmlsaXRpZXM/OiBXZWJkcml2ZXJJTy5DYXBhYmlsaXRpZXMgfSA9PlxuICAgICAgICAgICAgICAgIHYgIT09IG51bGwgJiYgdHlwZW9mIHYgPT09ICdvYmplY3QnICYmICdjYXBhYmlsaXRpZXMnIGluICh2IGFzIG9iamVjdCkpXG4gICAgICAgICAgICAubWFwKHYgPT4gdi5jYXBhYmlsaXRpZXMgYXMgV2ViZHJpdmVySU8uQ2FwYWJpbGl0aWVzKVxuICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZXM6IFdlYmRyaXZlcklPLkNhcGFiaWxpdGllc1tdID0gW1xuICAgICAgICAuLi5mbGF0dGVuTXVsdGlyZW1vdGUoZHJpdmVyQ2FwcyksXG4gICAgICAgIC4uLmZsYXR0ZW5NdWx0aXJlbW90ZShyZXF1ZXN0ZWRDYXBzKSxcbiAgICBdXG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aCkge3JldHVybiB1bmRlZmluZWR9XG5cbiAgICBjb25zdCBwaWNrU3RyaW5nID0gKG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCB1bmRlZmluZWQsIGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgICAgICAgY29uc3QgdiA9IG9iaj8uW2tleV1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnc3RyaW5nJyAmJiB2Lmxlbmd0aCA+IDAgPyB2IDogdW5kZWZpbmVkXG4gICAgfVxuICAgIC8vIFByZWNlZGVuY2U6IHByZWZlciBBcHBpdW0gc2VydmVyLXJlc29sdmVkIGRldmljZU1vZGVsOyBmYWxsIGJhY2sgdGhyb3VnaFxuICAgIC8vIHJlcXVlc3RlZCBjYXAgdmFyaWFudHMuIGBic3RhY2s6b3B0aW9ucy5kZXZpY2VOYW1lYCBpcyB0aGUgdXNlcidzIHJlZ2V4XG4gICAgLy8gZm9yIEFwcC1BdXRvbWF0ZSBydW5zLCBrZXB0IGFzIGEgZmFsbGJhY2sgZm9yIHRoZSBub24tcmVzb2x2ZWQgY2FzZS5cbiAgICBjb25zdCBwYXRoczogQXJyYXk8KGM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gW1xuICAgICAgICBjID0+IHBpY2tTdHJpbmcoYywgJ2RldmljZU1vZGVsJyksXG4gICAgICAgIGMgPT4gcGlja1N0cmluZyhjLCAnYXBwaXVtOmRldmljZU1vZGVsJyksXG4gICAgICAgIGMgPT4gcGlja1N0cmluZyhjWydic3RhY2s6b3B0aW9ucyddIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkLCAnZGV2aWNlTmFtZScpLFxuICAgICAgICBjID0+IHBpY2tTdHJpbmcoYywgJ2FwcGl1bTpkZXZpY2VOYW1lJyksXG4gICAgICAgIGMgPT4gcGlja1N0cmluZyhjLCAnZGV2aWNlTmFtZScpLFxuICAgIF1cbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgcGF0aHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBzcmMgb2Ygc291cmNlcykge1xuICAgICAgICAgICAgY29uc3QgdiA9IHBhdGgoc3JjIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pXG4gICAgICAgICAgICBpZiAodikge3JldHVybiB2fVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRCYXNpY0F1dGhIZWFkZXIgPSAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGVuY29kZWRBdXRoID0gQnVmZmVyLmZyb20oYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9YCwgJ3V0ZjgnKS50b1N0cmluZygnYmFzZTY0JylcbiAgICByZXR1cm4gYEJhc2ljICR7ZW5jb2RlZEF1dGh9YFxufVxuXG5leHBvcnQgY29uc3QgaXNPYmplY3RFbXB0eSA9IChvYmplY3ROYW1lOiB1bmtub3duKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgb2JqZWN0TmFtZSAmJlxuICAgICAgICBPYmplY3Qua2V5cyhvYmplY3ROYW1lKS5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgb2JqZWN0TmFtZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0XG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RXJyb3JTdHJpbmcgPSAoZXJyOiB1bmtub3duKSA9PiB7XG4gICAgaWYgKCFlcnIpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVyciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuICBlcnIgLy8gd29ya3MsIGBlYCBuYXJyb3dlZCB0byBzdHJpbmdcbiAgICB9IGVsc2UgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnIubWVzc2FnZSAvLyB3b3JrcywgYGVgIG5hcnJvd2VkIHRvIEVycm9yXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGVTdHJpbmcoZmllbGQ6IHN0cmluZywgdHJ1bmNhdGVTaXplSW5CeXRlczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBidWZmZXJTaXplSW5CeXRlcyA9IEJ1ZmZlci5mcm9tKEdJVF9NRVRBX0RBVEFfVFJVTkNBVEVEKS5sZW5ndGhcblxuICAgICAgICBjb25zdCBmaWVsZEJ1ZmZlck9iaiA9IEJ1ZmZlci5mcm9tKGZpZWxkKVxuICAgICAgICBjb25zdCBsZW5PZkZpZWxkQnVmZmVyT2JqID0gZmllbGRCdWZmZXJPYmoubGVuZ3RoXG4gICAgICAgIGNvbnN0IGZpbmFsTGVuID0gTWF0aC5jZWlsKGxlbk9mRmllbGRCdWZmZXJPYmogLSB0cnVuY2F0ZVNpemVJbkJ5dGVzIC0gYnVmZmVyU2l6ZUluQnl0ZXMpXG4gICAgICAgIGlmIChmaW5hbExlbiA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRydW5jYXRlZFN0cmluZyA9IGZpZWxkQnVmZmVyT2JqLnN1YmFycmF5KDAsIGZpbmFsTGVuKS50b1N0cmluZygpICsgR0lUX01FVEFfREFUQV9UUlVOQ0FURURcbiAgICAgICAgICAgIHJldHVybiB0cnVuY2F0ZWRTdHJpbmdcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgRXJyb3Igd2hpbGUgdHJ1bmNhdGluZyBmaWVsZCwgbm90aGluZyB3YXMgdHJ1bmNhdGVkIGhlcmU6ICR7ZXJyb3J9YClcbiAgICB9XG4gICAgcmV0dXJuIGZpZWxkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplT2ZKc29uT2JqZWN0SW5CeXRlcyhqc29uRGF0YTogR2l0TWV0YURhdGEpOiBudW1iZXIge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSlcblxuICAgICAgICByZXR1cm4gYnVmZmVyLmxlbmd0aFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgY2FsY3VsYXRpbmcgc2l6ZSBvZiBKU09OIG9iamVjdDogJHtlcnJvcn1gKVxuICAgIH1cblxuICAgIHJldHVybiAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBbmRUcnVuY2F0ZVZDU0luZm8oZ2l0TWV0YURhdGE6IEdpdE1ldGFEYXRhKTogR2l0TWV0YURhdGEge1xuICAgIGNvbnN0IGdpdE1ldGFEYXRhU2l6ZUluQnl0ZXMgPSBnZXRTaXplT2ZKc29uT2JqZWN0SW5CeXRlcyhnaXRNZXRhRGF0YSlcblxuICAgIGlmIChnaXRNZXRhRGF0YVNpemVJbkJ5dGVzICYmIGdpdE1ldGFEYXRhU2l6ZUluQnl0ZXMgPiBNQVhfR0lUX01FVEFfREFUQV9TSVpFX0lOX0JZVEVTKSB7XG4gICAgICAgIGNvbnN0IHRydW5jYXRlU2l6ZSA9IGdpdE1ldGFEYXRhU2l6ZUluQnl0ZXMgLSBNQVhfR0lUX01FVEFfREFUQV9TSVpFX0lOX0JZVEVTXG4gICAgICAgIGNvbnN0IHRydW5jYXRlZENvbW1pdE1lc3NhZ2UgPSB0cnVuY2F0ZVN0cmluZyhnaXRNZXRhRGF0YS5jb21taXRfbWVzc2FnZSwgdHJ1bmNhdGVTaXplKVxuICAgICAgICBnaXRNZXRhRGF0YS5jb21taXRfbWVzc2FnZSA9IHRydW5jYXRlZENvbW1pdE1lc3NhZ2VcbiAgICAgICAgQlN0YWNrTG9nZ2VyLmluZm8oYFRoZSBjb21taXQgaGFzIGJlZW4gdHJ1bmNhdGVkLiBTaXplIG9mIGNvbW1pdCBhZnRlciB0cnVuY2F0aW9uIGlzICR7IGdldFNpemVPZkpzb25PYmplY3RJbkJ5dGVzKGdpdE1ldGFEYXRhKSAvIDEwMjQgfSBLQmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGdpdE1ldGFEYXRhXG59XG5cbmV4cG9ydCBjb25zdCBoYXNCcm93c2VyTmFtZSA9IChjYXA6IENhcGFiaWxpdGllcy5XZWJkcml2ZXJJT0NvbmZpZyk6IGJvb2xlYW4gPT4ge1xuICAgIGlmICghY2FwIHx8ICFjYXAuY2FwYWJpbGl0aWVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBicm93c2VyU3RhY2tDYXBhYmlsaXRpZXMgPSBjYXAuY2FwYWJpbGl0aWVzIGFzIENhcGFiaWxpdGllcy5Ccm93c2VyU3RhY2tDYXBhYmlsaXRpZXNcbiAgICByZXR1cm4gYnJvd3NlclN0YWNrQ2FwYWJpbGl0aWVzLmJyb3dzZXJOYW1lICE9PSB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRDYXBzRm9ySGVhbGluZyA9IChjYXBzOiBXZWJkcml2ZXJJTy5DYXBhYmlsaXRpZXMpOiBib29sZWFuID0+IHtcblxuICAgIC8vIEdldCBhbGwgY2FwYWJpbGl0eSB2YWx1ZXNcbiAgICBjb25zdCBjYXBWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGNhcHMpXG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IGNhcGFiaWxpdGllcyBhbmQgaWYgYXQgbGVhc3Qgb25lIGhhcyBhIGJyb3dzZXIgbmFtZVxuICAgIHJldHVybiBjYXBWYWx1ZXMubGVuZ3RoID4gMCAmJiBjYXBWYWx1ZXMuc29tZShoYXNCcm93c2VyTmFtZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHVyYm9TY2FsZShvcHRpb25zOiAoQnJvd3NlcnN0YWNrQ29uZmlnICYgQnJvd3NlcnN0YWNrT3B0aW9ucykgfCB1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQm9vbGVhbihvcHRpb25zPy50dXJib1NjYWxlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JzZXJ2YWJpbGl0eVByb2R1Y3Qob3B0aW9uczogKEJyb3dzZXJzdGFja0NvbmZpZyAmIEJyb3dzZXJzdGFja09wdGlvbnMpIHwgdW5kZWZpbmVkLCBpc0FwcEF1dG9tYXRlOiBib29sZWFuIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXNBcHBBdXRvbWF0ZVxuICAgICAgICA/ICdhcHAtYXV0b21hdGUnXG4gICAgICAgIDogKGlzVHVyYm9TY2FsZShvcHRpb25zKSA/ICd0dXJib3NjYWxlJyA6ICdhdXRvbWF0ZScpXG59XG5cbnR5cGUgUG9sbGluZ1Jlc3VsdCA9IHtcbiAgICBkYXRhOiBhbnk7XG4gICAgaGVhZGVyczogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICBtZXNzYWdlPzogc3RyaW5nOyAvLyBPcHRpb25hbCBtZXNzYWdlIGZvciB0aW1lb3V0IGNhc2VzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb2xsQXBpKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55PixcbiAgICBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgIHVwcGVyTGltaXQ6IG51bWJlcixcbiAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG4pOiBQcm9taXNlPFBvbGxpbmdSZXN1bHQ+IHtcbiAgICBwYXJhbXMudGltZXN0YW1wID0gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMClcbiAgICBCU3RhY2tMb2dnZXIuZGVidWcoYGN1cnJlbnQgdGltZXN0YW1wICR7cGFyYW1zLnRpbWVzdGFtcH1gKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlR2V0UmVxdWVzdCh1cmwsIHBhcmFtcywgaGVhZGVycylcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgICAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1BvbGxpbmcgc3VjY2VlZGVkLicsXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dFBvbGxUaW1lID0gcGFyc2VJbnQoZXJyb3IucmVzcG9uc2UuaGVhZGVycy5nZXQoJ25leHRfcG9sbF90aW1lJyksIDEwKSAqIDEwMDBcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgdGltZUluTWlsbGlzICR7bmV4dFBvbGxUaW1lfWApXG5cbiAgICAgICAgICAgIGlmIChpc05hTihuZXh0UG9sbFRpbWUpKSB7XG4gICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLndhcm4oJ0ludmFsaWQgb3IgbWlzc2luZyBgbmV4dFBvbGxUaW1lYCBoZWFkZXIuIFN0b3BwaW5nIHBvbGxpbmcuJylcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogZXJyb3IucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgbmV4dFBvbGxUaW1lIGhlYWRlciB2YWx1ZS4gUG9sbGluZyBzdG9wcGVkLicsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkVGltZSA9IG5leHRQb2xsVGltZSAtIERhdGUubm93KClcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgICBgZWxhcHNlZFRpbWUgJHtlbGFwc2VkVGltZX0gdGltZUluTWlsbGlzICR7bmV4dFBvbGxUaW1lfSB1cHBlckxpbWl0ICR7dXBwZXJMaW1pdH1gXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChuZXh0UG9sbFRpbWUgPiB1cHBlckxpbWl0KSB7XG4gICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLndhcm4oJ1BvbGxpbmcgc3RvcHBlZCBkdWUgdG8gdXBwZXIgdGltZSBsaW1pdC4nKVxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBlcnJvci5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUG9sbGluZyBzdG9wcGVkIGR1ZSB0byB1cHBlciB0aW1lIGxpbWl0LicsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFBvbGxpbmcgYWdhaW4gaW4gJHtlbGFwc2VkVGltZX1tcyB3aXRoIHBhcmFtczpgLCBwYXJhbXMpXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBlbGFwc2VkVGltZSkpXG4gICAgICAgICAgICByZXR1cm4gcG9sbEFwaSh1cmwsIHBhcmFtcywgaGVhZGVycywgdXBwZXJMaW1pdCwgc3RhcnRUaW1lKVxuICAgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRFcnJvciA9IEpTT04ucGFyc2UoZXJyb3IucmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHBhcnNlZEVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgRXJyb3IgcGFyc2luZyBwb2xsQXBpIHJlcXVlc3QgYm9keSAke2Vycm9yLnJlc3BvbnNlLmJvZHl9YClcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSAnVW5rbm93biBlcnJvcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZXJyb3IoYFVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQ6ICR7ZXJyb3J9YClcbiAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgbWVzc2FnZTogJ1VuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuJyB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1ha2VHZXRSZXF1ZXN0KHVybDogc3RyaW5nLCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIGFueT4sIGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHVybE9iai5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcGFyYW1zW2tleV0pKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmxPYmoudG9TdHJpbmcoKSwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzLFxuICAgIH0pXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKCdSZXF1ZXN0IGZhaWxlZCcpXG4gICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVBY2Nlc3NpYmlsaXR5U2NyaXB0PFJldHVyblR5cGU+KFxuICAgIGJyb3dzZXI6IGFueSxcbiAgICBmbkJvZHk6IHN0cmluZyxcbiAgICBhcmc/OiB1bmtub3duXG4pOiBQcm9taXNlPFJldHVyblR5cGU+IHtcbiAgICByZXR1cm4gYnJvd3Nlci5leGVjdXRlKFxuICAgICAgICBgcmV0dXJuIChmdW5jdGlvbiAoLi4uYnN0YWNrU2RrQXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYnN0YWNrU2RrQXJnc1swXTtcbiAgICAgICAgICAgICAgICBic3RhY2tTZGtBcmdzLnB1c2gocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgJHtmbkJvZHkucmVwbGFjZSgvYXJndW1lbnRzL2csICdic3RhY2tTZGtBcmdzJyl9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoJHthcmcgPyBKU09OLnN0cmluZ2lmeShhcmcpIDogJyd9KWBcbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUhhc2hDb2RlRnJvbUZpZWxkcyhmaWVsZHM6IEFycmF5PHN0cmluZyB8IG9iamVjdD4pIHtcbiAgICBjb25zdCBzZXJpYWxpemUgPSAodmFsdWU6IHt9KSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIE9iamVjdC5rZXlzKHZhbHVlKS5zb3J0KCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBzZXJpYWxpemVkID0gZmllbGRzLm1hcChzZXJpYWxpemUpLmpvaW4oJ3wnKVxuICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKHNlcmlhbGl6ZWQpLmRpZ2VzdCgnaGV4Jylcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb29sZWFuVmFsdWVGcm9tU3RyaW5nKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gWyd0cnVlJ10uaW5jbHVkZXModmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCkpXG59XG5cbi8qKlxuICogU0RLLTM3Mzc6IENvZXJjZSBzdHJpbmdpZmllZCBib29sZWFucyAoJ3RydWUnLydmYWxzZScsIGFueSBjYXNlKSBpbiBhIGZsYXRcbiAqIG9wdGlvbnMgb2JqZWN0IHRvIHJlYWwgYm9vbGVhbnMsIGxlYXZpbmcgZXZlcnkgb3RoZXIgdmFsdWUgdW50b3VjaGVkLiBCb29sZWFuLVxuICogdHlwZWQgYWNjZXNzaWJpbGl0eSBvcHRpb25zIChlLmcuIGF1dG9TY2FubmluZykgYXJlIGNvbW1vbmx5IHN1cHBsaWVkIGFzXG4gKiBzdHJpbmdzIGZyb20gSlMgY29uZmlnIC8gZW52OyB3aXRob3V0IGNvZXJjaW9uIHRoZXkgZmFpbCBXM0MgY2FwcyB2YWxpZGF0aW9uXG4gKiBhbmQgYXJlIHNpbGVudGx5IGRyb3BwZWQuIE9ubHkgdGhlIGV4YWN0IHN0cmluZ3MgJ3RydWUnLydmYWxzZScgYXJlIGNvbnZlcnRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvZXJjZVN0cmluZ0Jvb2xlYW5zPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ob2JqOiBUKTogVCB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmpcbiAgICB9XG4gICAgY29uc3Qgb3V0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXNlZCA9IHZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICBpZiAobm9ybWFsaXNlZCA9PT0gJ3RydWUnIHx8IG5vcm1hbGlzZWQgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICBvdXRba2V5XSA9IG5vcm1hbGlzZWQgPT09ICd0cnVlJ1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb3V0W2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gb3V0IGFzIFRcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBrZXkgaXMgc2FmZSB0byB1c2UgZm9yIG9iamVjdCBwcm9wZXJ0eSBhc3NpZ25tZW50IHRvIHByZXZlbnQgcHJvdG90eXBlIHBvbGx1dGlvblxuICogQHBhcmFtIGtleSAtIFRoZSBrZXkgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGtleSBpcyBzYWZlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNTYWZlS2V5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGFuZ2Vyb3VzS2V5cyA9IFsnX19wcm90b19fJywgJ2NvbnN0cnVjdG9yJywgJ3Byb3RvdHlwZSddXG4gICAgcmV0dXJuICFkYW5nZXJvdXNLZXlzLmluY2x1ZGVzKGtleSlcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBib29sZWFuIHZhbHVlIGZyb20gbWl4ZWQgdHlwZXMgKGJvb2xlYW4gb3Igc3RyaW5nKVxuICogT25seSBhY2NlcHRzIHRydWUgYm9vbGVhbiBvciBzdHJpbmcgXCJ0cnVlXCIgKGNhc2UgaW5zZW5zaXRpdmUpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRW5hYmxlZFZhbHVlKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nIHwgdW5kZWZpbmVkKTogYm9vbGVhbiB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRydWVcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGdldEJvb2xlYW5WYWx1ZUZyb21TdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldDogUmVjb3JkPHN0cmluZywgYW55PiwgLi4uc291cmNlczogYW55W10pOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7cmV0dXJuIHRhcmdldH1cbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICAgIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAvLyBTa2lwIGRhbmdlcm91cyBrZXlzIHRoYXQgY291bGQgbGVhZCB0byBwcm90b3R5cGUgcG9sbHV0aW9uXG4gICAgICAgICAgICBpZiAoIWlzU2FmZUtleShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc291cmNlVmFsdWUgPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRba2V5XVxuXG4gICAgICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRWYWx1ZSB8fCAhaXNPYmplY3QodGFyZ2V0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0ge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2VWYWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2VWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNocm9tZU9wdGlvbnMoYmFzZTogQ2FwYWJpbGl0aWVzLkNocm9tZU9wdGlvbnMsIG92ZXJyaWRlOiBQYXJ0aWFsPENhcGFiaWxpdGllcy5DaHJvbWVPcHRpb25zPik6IENhcGFiaWxpdGllcy5DaHJvbWVPcHRpb25zIHtcbiAgICBjb25zdCBtZXJnZWQ6IENhcGFiaWxpdGllcy5DaHJvbWVPcHRpb25zID0geyAuLi5iYXNlIH1cblxuICAgIGlmIChvdmVycmlkZS5hcmdzKSB7XG4gICAgICAgIG1lcmdlZC5hcmdzID0gWy4uLihiYXNlLmFyZ3MgfHwgW10pLCAuLi5vdmVycmlkZS5hcmdzXVxuICAgIH1cblxuICAgIGlmIChvdmVycmlkZS5leHRlbnNpb25zKSB7XG4gICAgICAgIG1lcmdlZC5leHRlbnNpb25zID0gWy4uLihiYXNlLmV4dGVuc2lvbnMgfHwgW10pLCAuLi5vdmVycmlkZS5leHRlbnNpb25zXVxuICAgIH1cblxuICAgIGlmIChvdmVycmlkZS5wcmVmcykge1xuICAgICAgICBtZXJnZWQucHJlZnMgPSBtZXJnZURlZXAoeyAuLi4oYmFzZS5wcmVmcyB8fCB7fSkgfSwgb3ZlcnJpZGUucHJlZnMpXG4gICAgfVxuICAgIHJldHVybiBtZXJnZWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yRW1wdHkoc3RyaW5nOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXN0cmluZyB8fCBzdHJpbmcudHJpbSgpID09PSAnJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIYXNoKGVudGl0eTogYW55KSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oZW50aXR5ICYmIHR5cGVvZihlbnRpdHkpID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShlbnRpdHkpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmVzdGVkS2V5VmFsdWUoaGFzaDogYW55LCBrZXlzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgcmV0dXJuIGtleXMucmVkdWNlKChoYXNoLCBrZXkpID0+IChpc0hhc2goaGFzaCkgPyBoYXNoW2tleV0gOiB1bmRlZmluZWQpLCBoYXNoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRGlyKGRpcjogc3RyaW5nKSB7XG4gICAgY29uc3QgbGlzdCA9IGZzLnJlYWRkaXJTeW5jKGRpcilcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBwYXRoLmpvaW4oZGlyLCBsaXN0W2ldKVxuICAgICAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoZmlsZW5hbWUpXG5cbiAgICAgICAgaWYgKGZpbGVuYW1lID09PSAnLicgfHwgZmlsZW5hbWUgPT09ICcuLicpIHtcbiAgICAgICAgICAgIC8vIHBhc3MgdGhlc2UgZmlsZXNcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIC8vIHJtZGlyIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgICByZW1vdmVEaXIoZmlsZW5hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBybSBmaWxlbmFtZVxuICAgICAgICAgICAgZnMudW5saW5rU3luYyhmaWxlbmFtZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBmcy5ybWRpclN5bmMoZGlyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlyKGRpcjogc3RyaW5nKSB7XG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoZGlyKSl7XG4gICAgICAgIHJlbW92ZURpcihkaXIpXG4gICAgfVxuICAgIGZzLm1rZGlyU3luYyhkaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dyaXRhYmxlKGRpclBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRyeSB7XG4gICAgICAgIGZzLmFjY2Vzc1N5bmMoZGlyUGF0aCwgZnMuY29uc3RhbnRzLldfT0spXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFJlYWRXcml0ZUFjY2VzcyhkaXJQYXRoOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBmcy5jaG1vZFN5bmMoZGlyUGF0aCwgMG82NjYpXG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgRGlyZWN0b3J5ICR7ZGlyUGF0aH0gaXMgbm93IHJlYWQvd3JpdGUgYWNjZXNzaWJsZS5gKVxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcihgRmFpbGVkIHRvIHNldCBkaXJlY3RvcnkgYWNjZXNzOiAke2Vyci5zdGFja31gKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vY2hhVGVzdEhpZXJhcmNoeSh0ZXN0OiBGcmFtZXdvcmtzLlRlc3QpIHtcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nW10gPSBbXVxuICAgIGlmICh0ZXN0LmN0eCAmJiB0ZXN0LmN0eC50ZXN0KSB7XG4gICAgICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0aGUgcGFyZW50IG9iamVjdCwgdXRpbGl6ZSBpdCBlbHNlIGdldCBmcm9tIGNvbnRleHRcbiAgICAgICAgbGV0IHBhcmVudCA9IHR5cGVvZiB0ZXN0LnBhcmVudCA9PT0gJ29iamVjdCcgPyB0ZXN0LnBhcmVudCA6IHRlc3QuY3R4LnRlc3QucGFyZW50XG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnRpdGxlICE9PSAnJykge1xuICAgICAgICAgICAgdmFsdWUucHVzaChwYXJlbnQudGl0bGUpXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRlc3QuZGVzY3JpcHRpb24gJiYgdGVzdC5mdWxsTmFtZSkge1xuICAgICAgICAvLyBmb3IgSmFzbWluZVxuICAgICAgICB2YWx1ZS5wdXNoKHRlc3QuZGVzY3JpcHRpb24pXG4gICAgICAgIC8vIFN0cmlwIHRoZSB0cmFpbGluZyBcIiA8ZGVzY3JpcHRpb24+XCIgc3VmZml4IHdpdGhvdXQgYnVpbGRpbmcgYSByZWdleCBmcm9tXG4gICAgICAgIC8vIGEgdmFyaWFibGUgKGF2b2lkcyBSZURvUyBhbmQgcmVnZXgtbWV0YWNoYXJhY3RlciBtaXNtYXRjaGVzIGluIGRlc2NyaXB0aW9ucykuXG4gICAgICAgIGNvbnN0IGRlc2NTdWZmaXggPSBgICR7dGVzdC5kZXNjcmlwdGlvbn1gXG4gICAgICAgIHZhbHVlLnB1c2godGVzdC5mdWxsTmFtZS5lbmRzV2l0aChkZXNjU3VmZml4KSA/IHRlc3QuZnVsbE5hbWUuc2xpY2UoMCwgLWRlc2NTdWZmaXgubGVuZ3RoKSA6IHRlc3QuZnVsbE5hbWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5yZXZlcnNlKClcbn1cblxuLyoqXG4gKiBUcnVlIG9ubHkgZm9yIHRoZSBodWItaW50ZXJwcmV0ZWQgYGJyb3dzZXJzdGFja19leGVjdXRvcjoge1x1MjAyNn1gIG1hZ2ljIHN0cmluZy5cbiAqIEFuY2hvcmVkIHRvIHRoZSBzdGFydCAobGVhZGluZyB3aGl0ZXNwYWNlIHRvbGVyYXRlZCkgYW5kIGNhc2Utc2Vuc2l0aXZlLCBtYXRjaGluZ1xuICogaG93IHRoZSBodWIgcmVhZHMgdGhlIHBheWxvYWQgXHUyMDE0IGEgcGxhaW4gc2NyaXB0IG1lcmVseSBtZW50aW9uaW5nIHRoZSB0b2tlbiBtdXN0IG5vdFxuICogYmUgcmVyb3V0ZWQgb2ZmIGl0cyBub3JtYWwgdHJhbnNwb3J0LlxuICovXG5leHBvcnQgY29uc3QgaXNCcm93c2Vyc3RhY2tFeGVjdXRvclNjcmlwdCA9IChzY3JpcHQ6IHVua25vd24pOiBzY3JpcHQgaXMgc3RyaW5nID0+XG4gICAgdHlwZW9mIHNjcmlwdCA9PT0gJ3N0cmluZycgJiYgc2NyaXB0LnRyaW1TdGFydCgpLnN0YXJ0c1dpdGgoJ2Jyb3dzZXJzdGFja19leGVjdXRvcjonKVxuXG5leHBvcnQgY29uc3QgcGVyZm9ybU8xMXlTeW5jID0gYXN5bmMgKGJyb3dzZXI6IFdlYmRyaXZlcklPLkJyb3dzZXIpID0+IHtcbiAgICBpZiAoaXNCcm93c2Vyc3RhY2tTZXNzaW9uKGJyb3dzZXIpKSB7XG4gICAgICAgIGF3YWl0IGJyb3dzZXIuZXhlY3V0ZShgYnJvd3NlcnN0YWNrX2V4ZWN1dG9yOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2Fubm90YXRlJyxcbiAgICAgICAgICAgIGFyZ3VtZW50czoge1xuICAgICAgICAgICAgICAgIGRhdGE6IGBPYnNlcnZhYmlsaXR5U3luYzoke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICBsZXZlbDogJ2RlYnVnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KX1gKVxuICAgIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGNhcGFiaWxpdGllcyByZXByZXNlbnQgYSBtdWx0aXJlbW90ZSBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0gY2FwYWJpbGl0aWVzIC0gVGhlIGNhcGFiaWxpdGllcyB0byBjaGVja1xuICogQHJldHVybnMgdHJ1ZSBpZiBjYXBhYmlsaXRpZXMgcmVwcmVzZW50IGFueSBtdWx0aXJlbW90ZSBjb25maWd1cmF0aW9uIChyZWd1bGFyIG9yIHBhcmFsbGVsKVxuICpcbiAqIEBleGFtcGxlXG4gKiBSZWd1bGFyIG11bHRpcmVtb3RlIChvYmplY3QpOlxuICogeyBicm93c2VyQTogeyBjYXBhYmlsaXRpZXM6IHsuLi59IH0sIGJyb3dzZXJCOiB7IGNhcGFiaWxpdGllczogey4uLn0gfSB9XG4gKlxuICogUGFyYWxsZWwgbXVsdGlyZW1vdGUgKGFycmF5IHdpdGggbmVzdGVkIHN0cnVjdHVyZSk6XG4gKiBbeyBicm93c2VyQTogeyBjYXBhYmlsaXRpZXM6IHsuLi59IH0sIGJyb3dzZXJCOiB7IGNhcGFiaWxpdGllczogey4uLn0gfSB9XVxuICpcbiAqIFJlZ3VsYXIgY2FwYWJpbGl0aWVzIChhcnJheSk6XG4gKiBbeyBicm93c2VyTmFtZTogJ2Nocm9tZScsIC4uLiB9XVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNNdWx0aVJlbW90ZUNhcHMoY2FwYWJpbGl0aWVzOiBDYXBhYmlsaXRpZXMuVGVzdHJ1bm5lckNhcGFiaWxpdGllcyk6IGJvb2xlYW4ge1xuICAgIC8vIFJlZ3VsYXIgbXVsdGlyZW1vdGUgaXMgYW4gb2JqZWN0IChub3QgYXJyYXkpXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNhcGFiaWxpdGllcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBFbXB0eSBhcnJheSBpcyBub3QgbXVsdGlyZW1vdGVcbiAgICBpZiAoY2FwYWJpbGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBQYXJhbGxlbCBtdWx0aXJlbW90ZSBpcyBhbiBhcnJheSB3aXRoIG5lc3RlZCBjYXBhYmlsaXRpZXMgc3RydWN0dXJlXG4gICAgcmV0dXJuIGNhcGFiaWxpdGllcy5ldmVyeShjYXAgPT5cbiAgICAgICAgT2JqZWN0LnZhbHVlcyhjYXApLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhjYXApLmV2ZXJ5KGMgPT4gYyAhPT0gbnVsbCAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgKGMgYXMgeyBjYXBhYmlsaXRpZXM6IFdlYmRyaXZlcklPLkNhcGFiaWxpdGllcyB9KS5jYXBhYmlsaXRpZXMpXG4gICAgKVxufVxuIiwgImltcG9ydCBUcmFuc3BvcnQgZnJvbSAnd2luc3Rvbi10cmFuc3BvcnQnXG5cbmNvbnN0IExPR19MRVZFTFMgPSB7XG4gICAgSU5GTzogJ0lORk8nLCBFUlJPUjogJ0VSUk9SJywgREVCVUc6ICdERUJVRycsIFRSQUNFOiAnVFJBQ0UnLCBXQVJOOiAnV0FSTicsXG59XG5cbmNsYXNzIGxvZ1BhdGNoZXIgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICAgIGxvZ1RvVGVzdE9wcyA9IChsZXZlbCA9IExPR19MRVZFTFMuSU5GTywgbWVzc2FnZSA9IFsnJ10gYXMgdW5rbm93bltdKSA9PiB7XG4gICAgICAgIChwcm9jZXNzLmVtaXQgYXMgRnVuY3Rpb24pKGBiczphZGRMb2c6JHtwcm9jZXNzLnBpZH1gLCB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIGxldmVsOiBsZXZlbC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgbWVzc2FnZTogYFwiJHttZXNzYWdlLmpvaW4oJywgJyl9XCJgLFxuICAgICAgICAgICAga2luZDogJ1RFU1RfTE9HJyxcbiAgICAgICAgICAgIGh0dHBfcmVzcG9uc2U6IHt9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyogUGF0Y2hpbmcgdGhpcyB3b3VsZCBzaG93IHVzZXIgYW4gZXh0ZW5kZWQgdHJhY2Ugb24gdGhlaXIgY2xpICovXG4gICAgdHJhY2UgPSAoLi4ubWVzc2FnZTogdW5rbm93bltdKSA9PiB7XG4gICAgICAgIHRoaXMubG9nVG9UZXN0T3BzKExPR19MRVZFTFMuVFJBQ0UsIG1lc3NhZ2UpXG4gICAgfVxuXG4gICAgZGVidWcgPSAoLi4ubWVzc2FnZTogdW5rbm93bltdKSA9PiB7XG4gICAgICAgIHRoaXMubG9nVG9UZXN0T3BzKExPR19MRVZFTFMuREVCVUcsIG1lc3NhZ2UpXG4gICAgfVxuXG4gICAgaW5mbyA9ICguLi5tZXNzYWdlOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgdGhpcy5sb2dUb1Rlc3RPcHMoTE9HX0xFVkVMUy5JTkZPLCBtZXNzYWdlKVxuICAgIH1cblxuICAgIHdhcm4gPSAoLi4ubWVzc2FnZTogdW5rbm93bltdKSA9PiB7XG4gICAgICAgIHRoaXMubG9nVG9UZXN0T3BzKExPR19MRVZFTFMuV0FSTiwgbWVzc2FnZSlcbiAgICB9XG5cbiAgICBlcnJvciA9ICguLi5tZXNzYWdlOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgdGhpcy5sb2dUb1Rlc3RPcHMoTE9HX0xFVkVMUy5FUlJPUiwgbWVzc2FnZSlcbiAgICB9XG5cbiAgICBsb2cgPSAoLi4ubWVzc2FnZTogdW5rbm93bltdKSA9PiB7XG4gICAgICAgIHRoaXMubG9nVG9UZXN0T3BzKExPR19MRVZFTFMuSU5GTywgbWVzc2FnZSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBsb2dQYXRjaGVyXG4iLCAiaW1wb3J0IHsgY3JlYXRlT2JqZWN0Q3N2V3JpdGVyIH0gZnJvbSAnY3N2LXdyaXRlcidcbmltcG9ydCBmcyBmcm9tICdub2RlOmZzJ1xuaW1wb3J0IGZzUHJvbWlzZSBmcm9tICdub2RlOmZzL3Byb21pc2VzJ1xuaW1wb3J0IHR5cGUgeyBFbnRyeVR5cGUgfSBmcm9tICdub2RlOnBlcmZfaG9va3MnXG5pbXBvcnQgeyBwZXJmb3JtYW5jZSwgUGVyZm9ybWFuY2VPYnNlcnZlciB9IGZyb20gJ25vZGU6cGVyZl9ob29rcydcbmltcG9ydCB1dGlsIGZyb20gJ25vZGU6dXRpbCdcbmltcG9ydCB3b3JrZXIgZnJvbSAnbm9kZTp3b3JrZXJfdGhyZWFkcydcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB7IGFyY2gsIGhvc3RuYW1lLCBwbGF0Zm9ybSwgdHlwZSwgdmVyc2lvbiB9IGZyb20gJ25vZGU6b3MnXG5cbmltcG9ydCB7IEJTdGFja0xvZ2dlciB9IGZyb20gJy4uLy4uL2JzdGFja0xvZ2dlci5qcydcbmltcG9ydCB7IFBFUkZfTUVBU1VSRU1FTlRfRU5WIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzLmpzJ1xuaW1wb3J0IEFQSVV0aWxzIGZyb20gJy4uLy4uL2NsaS9hcGlVdGlscy5qcydcbmltcG9ydCB7IENMSVV0aWxzIH0gZnJvbSAnLi4vLi4vY2xpL2NsaVV0aWxzLmpzJ1xuaW1wb3J0IHsgRVZFTlRTIH0gZnJvbSAnLi9jb25zdGFudHMuanMnXG5pbXBvcnQgZmV0Y2hXcmFwIGZyb20gJy4uLy4uL2ZldGNoV3JhcHBlci5qcydcbmltcG9ydCB0eXBlIHsgQ3N2V3JpdGVyIH0gZnJvbSAnY3N2LXdyaXRlci9zcmMvbGliL2Nzdi13cml0ZXIuanMnXG5pbXBvcnQgdHlwZSB7IE9iamVjdE1hcCB9IGZyb20gJ2Nzdi13cml0ZXIvc3JjL2xpYi9sYW5nL29iamVjdC5qcydcbmltcG9ydCB0eXBlIHsgQnJvd3NlciB9IGZyb20gJ3dlYmRyaXZlcmlvJ1xuXG4vLyBUZWxlbWV0cnkgbXVzdCBuZXZlciB0aHJvdyBpbnRvIGJ1c2luZXNzIGxvZ2ljLiBOb2RlIDE4J3MgcGVyZl9ob29rcyByZWplY3RzXG4vLyBuZWdhdGl2ZSB0aW1lc3RhbXBzIChlLmcuIHBlcmZvcm1hbmNlLm5vdygpIHVuZGVyIGZha2VkIHRpbWVycywgb3IgYW55IG90aGVyXG4vLyBlZGdlKSB3aXRoIEVSUl9QRVJGT1JNQU5DRV9JTlZBTElEX1RJTUVTVEFNUDsgTm9kZSAyMCsgdG9sZXJhdGVzIHRoZW0uIFdyYXBwaW5nXG4vLyBtYXJrL21lYXN1cmUga2VlcHMgYW4gaW5zdHJ1bWVudGF0aW9uIGZhaWx1cmUgZnJvbSBicmVha2luZyBhIGNhbGxlcidzIGhvb2tcbi8vIChlLmcuIGEgc2VydmljZSBiZWZvcmUoKSksIGFuZCBpcyBhIG5vLW9wIG9uIHRoZSBoYXBweSBwYXRoLlxuZnVuY3Rpb24gc2FmZU1hcmsobWFya05hbWU6IHN0cmluZykge1xuICAgIHRyeSB7IHBlcmZvcm1hbmNlLm1hcmsobWFya05hbWUpIH0gY2F0Y2ggeyAvKiBpbnN0cnVtZW50YXRpb24gbXVzdCBub3QgdGhyb3cgKi8gfVxufVxuZnVuY3Rpb24gc2FmZU1lYXN1cmUobWVhc3VyZU5hbWU6IHN0cmluZywgc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcpIHtcbiAgICB0cnkgeyBwZXJmb3JtYW5jZS5tZWFzdXJlKG1lYXN1cmVOYW1lLCBzdGFydCwgZW5kKSB9IGNhdGNoIHsgLyogaW5zdHJ1bWVudGF0aW9uIG11c3Qgbm90IHRocm93ICovIH1cbn1cblxudHlwZSBQZXJmb3JtYW5jZURldGFpbHMgPSB7XG4gICAgc3VjY2Vzcz86IHRydWUsXG4gICAgZmFpbHVyZT86IHN0cmluZyxcbiAgICB0ZXN0TmFtZT86IHN0cmluZyxcbiAgICB3b3JrZXI/OiBzdHJpbmcgfCBudW1iZXIsXG4gICAgY2xpZW50V29ya2VySWQ/OiBzdHJpbmcsXG4gICAgY29tbWFuZD86IHN0cmluZyxcbiAgICBob29rVHlwZT86IHN0cmluZyxcbiAgICBwbGF0Zm9ybT86IHN0cmluZyB8IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJmb3JtYW5jZVRlc3RlciB7XG4gICAgc3RhdGljIF9vYnNlcnZlcjogUGVyZm9ybWFuY2VPYnNlcnZlclxuICAgIHN0YXRpYyBfY3N2V3JpdGVyOiBDc3ZXcml0ZXI8T2JqZWN0TWFwPHt9Pj5cbiAgICBwcml2YXRlIHN0YXRpYyBfZXZlbnRzOiBQZXJmb3JtYW5jZUVudHJ5W10gPSBbXVxuICAgIHByaXZhdGUgc3RhdGljIF9tZWFzdXJlZEV2ZW50czogQXJyYXk8UGVyZm9ybWFuY2VFbnRyeSB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+PiA9IFtdXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2hhc1N0b3BwZWRHZW5lcmF0aW9uID0gZmFsc2VcbiAgICBwcml2YXRlIHN0YXRpYyBfc3RvcEdlbmVyYXRlQ2FsbENvdW50ID0gMFxuICAgIHN0YXRpYyBzdGFydGVkID0gZmFsc2VcbiAgICBzdGF0aWMgZGV0YWlsczogeyBba2V5OiBzdHJpbmddOiBQZXJmb3JtYW5jZURldGFpbHMgfSA9IHt9XG4gICAgc3RhdGljIGV2ZW50c01hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9XG4gICAgc3RhdGljIGJyb3dzZXI/OiBCcm93c2VyXG4gICAgc3RhdGljIHNjZW5hcmlvVGhhdFJhbjogc3RyaW5nW11cbiAgICBzdGF0aWMganNvblJlcG9ydERpck5hbWUgPSAncGVyZm9ybWFuY2UtcmVwb3J0J1xuICAgIHN0YXRpYyBqc29uUmVwb3J0RGlyUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbG9ncycsIHRoaXMuanNvblJlcG9ydERpck5hbWUpXG4gICAgc3RhdGljIGpzb25SZXBvcnRGaWxlTmFtZSA9IGAke3RoaXMuanNvblJlcG9ydERpclBhdGh9L3BlcmZvcm1hbmNlLXJlcG9ydC0ke1BlcmZvcm1hbmNlVGVzdGVyLmdldFByb2Nlc3NJZCgpfS5qc29uYFxuXG4gICAgc3RhdGljIHN0YXJ0TW9uaXRvcmluZyhjc3ZOYW1lOiBzdHJpbmcgPSAncGVyZm9ybWFuY2UtcmVwb3J0LmNzdicpIHtcblxuICAgICAgICAvLyBDcmVhdGUgcGVyZm9ybWFuY2UtcmVwb3J0IGRpciBpZiBub3QgZXhpc3RzIGFscmVhZHlcbiAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHRoaXMuanNvblJlcG9ydERpclBhdGgpKSB7XG4gICAgICAgICAgICBmcy5ta2RpclN5bmModGhpcy5qc29uUmVwb3J0RGlyUGF0aCwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKGxpc3QgPT4ge1xuICAgICAgICAgICAgbGlzdC5nZXRFbnRyaWVzKClcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuZW50cnlUeXBlID09PSAnbWVhc3VyZScpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmluYWxFbnRyeTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSBlbnRyeS50b0pTT04oKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpbmFsRW50cnkuc3RhcnRUaW1lID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgcGVyZm9ybWFuY2UudGltZU9yaWdpbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFN0YXJ0VGltZSA9IGZpbmFsRW50cnkuc3RhcnRUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxFbnRyeS5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS50aW1lT3JpZ2luICsgZmluYWxFbnRyeS5zdGFydFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFRpbWVzdGFtcCBjb252ZXJzaW9uIGZvciAke2VudHJ5Lm5hbWV9OiAke29yaWdpbmFsU3RhcnRUaW1lfSAtPiAke2ZpbmFsRW50cnkuc3RhcnRUaW1lfSAodGltZU9yaWdpbjogJHtwZXJmb3JtYW5jZS50aW1lT3JpZ2lufSlgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYEVycm9yIGNvbnZlcnRpbmcgc3RhcnRUaW1lIHRvIGVwb2NoOiAke3V0aWwuZm9ybWF0KGUpfWApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxzW2VudHJ5Lm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbEVudHJ5ID0gT2JqZWN0LmFzc2lnbihmaW5hbEVudHJ5LCB0aGlzLmRldGFpbHNbZW50cnkubmFtZV0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGV0YWlsc1tlbnRyeS5uYW1lXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZWFzdXJlZEV2ZW50cy5wdXNoKGZpbmFsRW50cnkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52W1BFUkZfTUVBU1VSRU1FTlRfRU5WXSkge1xuICAgICAgICAgICAgICAgIGxpc3QuZ2V0RW50cmllcygpLmZvckVhY2goKGVudHJ5KSA9PiB0aGlzLl9ldmVudHMucHVzaChlbnRyeSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGVudHJ5VHlwZXM6IEVudHJ5VHlwZVtdID0gWydtZWFzdXJlJ11cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52W1BFUkZfTUVBU1VSRU1FTlRfRU5WXSkge1xuICAgICAgICAgICAgZW50cnlUeXBlcy5wdXNoKCdmdW5jdGlvbicpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh7IGJ1ZmZlcmVkOiB0cnVlLCBlbnRyeVR5cGVzOiBlbnRyeVR5cGVzIH0pXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWVcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52W1BFUkZfTUVBU1VSRU1FTlRfRU5WXSkge1xuICAgICAgICAgICAgdGhpcy5fY3N2V3JpdGVyID0gY3JlYXRlT2JqZWN0Q3N2V3JpdGVyKHtcbiAgICAgICAgICAgICAgICBwYXRoOiBjc3ZOYW1lLFxuICAgICAgICAgICAgICAgIGhlYWRlcjogW1xuICAgICAgICAgICAgICAgICAgICB7IGlkOiAnbmFtZScsIHRpdGxlOiAnRnVuY3Rpb24gTmFtZScgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBpZDogJ3RpbWUnLCB0aXRsZTogJ0V4ZWN1dGlvbiBUaW1lIChtcyknIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNhbGN1bGF0ZVRpbWVzKG1ldGhvZHM6IHN0cmluZ1tdKSA6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHRpbWVzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge31cbiAgICAgICAgdGhpcy5fZXZlbnRzLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmICghdGltZXNbZW50cnkubmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aW1lc1tlbnRyeS5uYW1lXSA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbWVzW2VudHJ5Lm5hbWVdICs9IGVudHJ5LmR1cmF0aW9uXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHRpbWVUYWtlbiA9IG1ldGhvZHMucmVkdWNlKChhLCBjKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGltZXNbY10gKyAoYSB8fCAwKVxuICAgICAgICB9LCAwKVxuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFRpbWUgZm9yICR7bWV0aG9kc30gaXMgJHt0aW1lVGFrZW59YClcbiAgICAgICAgcmV0dXJuIHRpbWVUYWtlblxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBzdG9wQW5kR2VuZXJhdGUoZmlsZW5hbWU6IHN0cmluZyA9ICdwZXJmb3JtYW5jZS1vd24uaHRtbCcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBldmVudHNKc29uID0gSlNPTi5zdHJpbmdpZnkodGhpcy5fbWVhc3VyZWRFdmVudHMpXG4gICAgICAgICAgICAvLyByZW1vdmUgZW5jbG9zaW5nIGFycmF5IGFuZCBhZGQgYSB0cmFpbGluZyBjb21tYSBzbyB0aGF0IHdlXG4gICAgICAgICAgICAvLyBkb250IG5lZWQgdG8gYm90aCByZWFkIGFuZCB0aGVuIHdyaXRlIHRoZSBmaWxlLCB3ZSBjYW4gdXNlIGFwcGVuZCBpbnN0ZWFkXG4gICAgICAgICAgICBjb25zdCBmaW5hbEpTT05TdHIgPSBldmVudHNKc29uLnNsaWNlKDEsIC0xKSArICcsJ1xuICAgICAgICAgICAgYXdhaXQgZnNQcm9taXNlLmFwcGVuZEZpbGUodGhpcy5qc29uUmVwb3J0RmlsZU5hbWUsIGZpbmFsSlNPTlN0cilcbiAgICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgRmFpbGVkIHRvIHdyaXRlIGV2ZW50cyBvZiB0aGUgd29ya2VyIHRvICR7dGhpcy5qc29uUmVwb3J0RmlsZU5hbWV9OiAke3V0aWwuZm9ybWF0KGVyKX1gKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuXG4gICAgICAgIGlmICghcHJvY2Vzcy5lbnZbUEVSRl9NRUFTVVJFTUVOVF9FTlZdKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlXG5cbiAgICAgICAgLy8gR2VuZXJhdGUgQ1NWIGFuZCBIVE1MIHJlcG9ydHMgdXNpbmcgZGlyZWN0bHkgY29sbGVjdGVkIGV2ZW50c1xuICAgICAgICB0aGlzLmdlbmVyYXRlQ1NWKHRoaXMuX2V2ZW50cylcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZW5lcmF0ZVJlcG9ydCh0aGlzLl9ldmVudHMpXG4gICAgICAgIGNvbnN0IGRpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBmaWxlbmFtZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGZzUHJvbWlzZS53cml0ZUZpbGUoZGlyLCBjb250ZW50KVxuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmluZm8oYFBlcmZvcm1hbmNlIHJlcG9ydCBpcyBhdCAke3BhdGh9YClcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZXJyb3IoYEVycm9yIGluIHdyaXRpbmcgaHRtbCAke3V0aWwuZm9ybWF0KGVycil9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZVJlcG9ydChlbnRyaWVzOiBQZXJmb3JtYW5jZUVudHJ5W10pIHtcbiAgICAgICAgbGV0IGh0bWwgPSAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PHRpdGxlPlBlcmZvcm1hbmNlIFJlcG9ydDwvdGl0bGU+PC9oZWFkPjxib2R5PidcbiAgICAgICAgaHRtbCArPSAnPGgxPlBlcmZvcm1hbmNlIFJlcG9ydDwvaDE+J1xuICAgICAgICBodG1sICs9ICc8dGFibGU+PHRoZWFkPjx0cj48dGg+RnVuY3Rpb24gTmFtZTwvdGg+PHRoPkR1cmF0aW9uIChtcyk8L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+J1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBodG1sICs9IGA8dHI+PHRkPiR7ZW50cnkubmFtZX08L3RkPjx0ZD4ke2VudHJ5LmR1cmF0aW9ufTwvdGQ+PC90cj5gXG4gICAgICAgIH0pXG4gICAgICAgIGh0bWwgKz0gJzwvdGJvZHk+PC90YWJsZT48L2JvZHk+PC9odG1sPidcbiAgICAgICAgcmV0dXJuIGh0bWxcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVDU1YoZW50cmllczogUGVyZm9ybWFuY2VFbnRyeVtdKSB7XG4gICAgICAgIGNvbnN0IHRpbWVzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge31cbiAgICAgICAgZW50cmllcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRpbWVzW2VudHJ5Lm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGltZXNbZW50cnkubmFtZV0gPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW1lc1tlbnRyeS5uYW1lXSArPSBlbnRyeS5kdXJhdGlvblxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGVudHJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgdGltZTogZW50cnkuZHVyYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGF0ID0gT2JqZWN0LmVudHJpZXModGltZXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICB0aW1lOiB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLl9jc3ZXcml0ZXIud3JpdGVSZWNvcmRzKGRhdClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IEJTdGFja0xvZ2dlci5pbmZvKCdQZXJmb3JtYW5jZSBDU1YgcmVwb3J0IGdlbmVyYXRlZCBzdWNjZXNzZnVsbHknKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgTWVhc3VyZShsYWJlbDogc3RyaW5nLCBkZXRhaWxzOiBQZXJmb3JtYW5jZURldGFpbHMgPSB7fSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGFyZ2V0OiBvYmplY3QsXG4gICAgICAgICAgICBrZXk6IHN0cmluZyB8IHN5bWJvbCxcbiAgICAgICAgICAgIGRlc2NyaXB0b3I6IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPEZ1bmN0aW9uPikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxNZXRob2Q6IEZ1bmN0aW9ufHVuZGVmaW5lZCA9IGRlc2NyaXB0b3IudmFsdWVcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKC4uLmFyZ3M6IG9iamVjdFtdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQZXJmb3JtYW5jZVRlc3Rlci5tZWFzdXJlLmFwcGx5KHNlbGYsIFtsYWJlbCwgb3JpZ2luYWxNZXRob2QgYXMgRnVuY3Rpb24sIHsgbWV0aG9kTmFtZToga2V5LnRvU3RyaW5nKCksIC4uLmRldGFpbHMgfSwgYXJncywgdGhpc10pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG1lYXN1cmVXcmFwcGVyKG5hbWU6IHN0cmluZywgZm46IEZ1bmN0aW9uLCBkZXRhaWxzOiBQZXJmb3JtYW5jZURldGFpbHMgPSB7fSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIGRldGFpbHMud29ya2VyID0gUGVyZm9ybWFuY2VUZXN0ZXIuZ2V0UHJvY2Vzc0lkKClcbiAgICAgICAgZGV0YWlscy50ZXN0TmFtZSA9IFBlcmZvcm1hbmNlVGVzdGVyLnNjZW5hcmlvVGhhdFJhbiAmJiBQZXJmb3JtYW5jZVRlc3Rlci5zY2VuYXJpb1RoYXRSYW5bUGVyZm9ybWFuY2VUZXN0ZXIuc2NlbmFyaW9UaGF0UmFuLmxlbmd0aCAtIDFdXG4gICAgICAgIGRldGFpbHMucGxhdGZvcm0gPSBQZXJmb3JtYW5jZVRlc3Rlci5icm93c2VyPy5zZXNzaW9uSWRcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3M6IChvYmplY3R8Ym9vbGVhbnx1bmRlZmluZWR8bnVsbHxzdHJpbmcpW10pIHtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYubWVhc3VyZShuYW1lLCBmbiwgZGV0YWlscywgYXJncylcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICEocHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX1NES19JTlNUUlVNRU5UQVRJT04gPT09ICdmYWxzZScpXG4gICAgfVxuXG4gICAgc3RhdGljIG1lYXN1cmUobGFiZWw6IHN0cmluZywgZm46IEZ1bmN0aW9uLCBkZXRhaWxzID0ge30sIGFyZ3M/OiAob2JqZWN0fGJvb2xlYW58dW5kZWZpbmVkfG51bGx8c3RyaW5nKVtdLCB0aGlzQXJnOiBvYmplY3R8bnVsbCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQgfHwgIXRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgdW5pcXVlIG1hcmsgbmFtZXMgZm9yIHRoaXMgc3BlY2lmaWMgY2FsbCB0byBhdm9pZCB0aW1pbmcgY29uZmxpY3RzXG4gICAgICAgIGNvbnN0IHVuaXF1ZUlkID0gYCR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyl9YFxuICAgICAgICBjb25zdCBzdGFydE1hcmsgPSBgJHtsYWJlbH0tc3RhcnQtJHt1bmlxdWVJZH1gXG4gICAgICAgIGNvbnN0IGVuZE1hcmsgPSBgJHtsYWJlbH0tZW5kLSR7dW5pcXVlSWR9YFxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgc3RhcnQgbWFyayB3aXRoIHVuaXF1ZSBJRFxuICAgICAgICBzYWZlTWFyayhzdGFydE1hcmspXG5cbiAgICAgICAgLy8gU3RvcmUgZGV0YWlscyB3aXRoIG1lYXN1cmVtZW50IGNvbnRleHRcbiAgICAgICAgY29uc3QgZGV0YWlsc1dpdGhDb250ZXh0ID0ge1xuICAgICAgICAgICAgLi4uZGV0YWlscyxcbiAgICAgICAgICAgIG1lYXN1cmVtZW50SWQ6IHVuaXF1ZUlkXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsID0gZm4uYXBwbHkodGhpc0FyZywgYXJncylcblxuICAgICAgICAgICAgaWYgKHJldHVyblZhbCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSBzcGVjaWZpYyBtYXJrcyBmb3IgdGhpcyBjYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FmZU1hcmsoZW5kTWFyaylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWZlTWVhc3VyZShsYWJlbCwgc3RhcnRNYXJrLCBlbmRNYXJrKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzW2xhYmVsXSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRXb3JrZXJJZDogUGVyZm9ybWFuY2VUZXN0ZXIuZ2V0Q2xpZW50V29ya2VySWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyOiBQZXJmb3JtYW5jZVRlc3Rlci5nZXRQcm9jZXNzSWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06IFBlcmZvcm1hbmNlVGVzdGVyLmJyb3dzZXI/LnNlc3Npb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdE5hbWU6IFBlcmZvcm1hbmNlVGVzdGVyLnNjZW5hcmlvVGhhdFJhbj8ucG9wKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBkZXRhaWxzV2l0aENvbnRleHQpLCB0aGlzLmRldGFpbHNbbGFiZWxdIHx8IHt9KSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhZmVNYXJrKGVuZE1hcmspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FmZU1lYXN1cmUobGFiZWwsIHN0YXJ0TWFyaywgZW5kTWFyaylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlsc1tsYWJlbF0gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU6IHV0aWwuZm9ybWF0KGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50V29ya2VySWQ6IFBlcmZvcm1hbmNlVGVzdGVyLmdldENsaWVudFdvcmtlcklkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlcjogUGVyZm9ybWFuY2VUZXN0ZXIuZ2V0UHJvY2Vzc0lkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXRmb3JtOiBQZXJmb3JtYW5jZVRlc3Rlci5icm93c2VyPy5zZXNzaW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3ROYW1lOiBQZXJmb3JtYW5jZVRlc3Rlci5zY2VuYXJpb1RoYXRSYW4/LnBvcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGV0YWlsc1dpdGhDb250ZXh0KSwgdGhpcy5kZXRhaWxzW2xhYmVsXSB8fCB7fSkpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3luY2hyb25vdXMgZXhlY3V0aW9uXG4gICAgICAgICAgICBzYWZlTWFyayhlbmRNYXJrKVxuICAgICAgICAgICAgc2FmZU1lYXN1cmUobGFiZWwsIHN0YXJ0TWFyaywgZW5kTWFyaylcblxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzW2xhYmVsXSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogdW5kZWZpbmVkXG4gICAgICAgICAgICB9LCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIGNsaWVudFdvcmtlcklkOiBQZXJmb3JtYW5jZVRlc3Rlci5nZXRDbGllbnRXb3JrZXJJZCgpLFxuICAgICAgICAgICAgICAgIHdvcmtlcjogUGVyZm9ybWFuY2VUZXN0ZXIuZ2V0UHJvY2Vzc0lkKCksXG4gICAgICAgICAgICAgICAgcGxhdGZvcm06IFBlcmZvcm1hbmNlVGVzdGVyLmJyb3dzZXI/LnNlc3Npb25JZCxcbiAgICAgICAgICAgICAgICB0ZXN0TmFtZTogUGVyZm9ybWFuY2VUZXN0ZXIuc2NlbmFyaW9UaGF0UmFuPy5wb3AoKVxuICAgICAgICAgICAgfSwgZGV0YWlsc1dpdGhDb250ZXh0KSwgdGhpcy5kZXRhaWxzW2xhYmVsXSB8fCB7fSkpXG5cbiAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWxcbiAgICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgICAgIHNhZmVNYXJrKGVuZE1hcmspXG4gICAgICAgICAgICBzYWZlTWVhc3VyZShsYWJlbCwgc3RhcnRNYXJrLCBlbmRNYXJrKVxuXG4gICAgICAgICAgICB0aGlzLmRldGFpbHNbbGFiZWxdID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmFpbHVyZTogdXRpbC5mb3JtYXQoZXIpXG4gICAgICAgICAgICB9LCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIGNsaWVudFdvcmtlcklkOiBQZXJmb3JtYW5jZVRlc3Rlci5nZXRDbGllbnRXb3JrZXJJZCgpLFxuICAgICAgICAgICAgICAgIHdvcmtlcjogUGVyZm9ybWFuY2VUZXN0ZXIuZ2V0UHJvY2Vzc0lkKCksXG4gICAgICAgICAgICAgICAgcGxhdGZvcm06IFBlcmZvcm1hbmNlVGVzdGVyLmJyb3dzZXI/LnNlc3Npb25JZCxcbiAgICAgICAgICAgICAgICB0ZXN0TmFtZTogUGVyZm9ybWFuY2VUZXN0ZXIuc2NlbmFyaW9UaGF0UmFuPy5wb3AoKVxuICAgICAgICAgICAgfSwgZGV0YWlsc1dpdGhDb250ZXh0KSwgdGhpcy5kZXRhaWxzW2xhYmVsXSB8fCB7fSkpXG5cbiAgICAgICAgICAgIHRocm93IGVyXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc3RhcnQoZXZlbnQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmaW5hbEV2ZW50ID0gZXZlbnQgKyAnLXN0YXJ0J1xuICAgICAgICBpZiAodGhpcy5ldmVudHNNYXBbZmluYWxFdmVudF0pIHtyZXR1cm59XG4gICAgICAgIHNhZmVNYXJrKGZpbmFsRXZlbnQpXG4gICAgICAgIHRoaXMuZXZlbnRzTWFwW2ZpbmFsRXZlbnRdID0gMVxuICAgIH1cblxuICAgIHN0YXRpYyBlbmQoZXZlbnQ6IHN0cmluZywgc3VjY2VzcyA9IHRydWUsIGZhaWx1cmU/OiBzdHJpbmcgfCB1bmtub3duLCBkZXRhaWxzID0ge30pIHtcbiAgICAgICAgc2FmZU1hcmsoZXZlbnQgKyAnLWVuZCcpXG4gICAgICAgIHNhZmVNZWFzdXJlKGV2ZW50LCBldmVudCArICctc3RhcnQnLCBldmVudCArICctZW5kJylcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHN0YXJ0LW1hcmsgZ3VhcmQgc28gYSBzdWJzZXF1ZW50IHN0YXJ0KGV2ZW50KSBmb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gZXZlbnQgYWN0dWFsbHkgbWFya3MgYSBuZXcgc3RhcnQuIFdpdGhvdXQgdGhpcywgc3RhcnQoKSBzaG9ydC1jaXJjdWl0c1xuICAgICAgICAvLyBhbmQgdGhlIG5leHQgZW5kKCkgbWVhc3VyZXMgZnJvbSB0aGUgb3JpZ2luYWwgc3RhcnQgbWFyayBcdTIwMTQgaW5mbGF0ZWRcbiAgICAgICAgLy8gZHVyYXRpb25zIGluIHRlbGVtZXRyeSBvbiBldmVyeSBjYWxsIGFmdGVyIHRoZSBmaXJzdC5cbiAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzTWFwW2V2ZW50ICsgJy1zdGFydCddXG4gICAgICAgIHRoaXMuZGV0YWlsc1tldmVudF0gPSBPYmplY3QuYXNzaWduKHsgc3VjY2VzcywgZmFpbHVyZTogdXRpbC5mb3JtYXQoZmFpbHVyZSkgfSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGNsaWVudFdvcmtlcklkOiBQZXJmb3JtYW5jZVRlc3Rlci5nZXRDbGllbnRXb3JrZXJJZCgpLFxuICAgICAgICAgICAgd29ya2VyOiBQZXJmb3JtYW5jZVRlc3Rlci5nZXRQcm9jZXNzSWQoKSxcbiAgICAgICAgICAgIHBsYXRmb3JtOiBQZXJmb3JtYW5jZVRlc3Rlci5icm93c2VyPy5zZXNzaW9uSWQsXG4gICAgICAgICAgICB0ZXN0TmFtZTogUGVyZm9ybWFuY2VUZXN0ZXIuc2NlbmFyaW9UaGF0UmFuICYmIFBlcmZvcm1hbmNlVGVzdGVyLnNjZW5hcmlvVGhhdFJhbltQZXJmb3JtYW5jZVRlc3Rlci5zY2VuYXJpb1RoYXRSYW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgfSwgZGV0YWlscyksIHRoaXMuZGV0YWlsc1tldmVudF0gfHwge30pKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjbGllbnQgd29ya2VyIElEIGluIGZvcm1hdCBcInRocmVhZElkLXByb2Nlc3NJZFwiLlxuICAgICAqIFRoaXMgbWV0aG9kIHByb3ZpZGVzIGEgY29uc2lzdGVudCBpZGVudGlmaWVyIGFjcm9zcyB0aGUgU0RLIGZvciB0cmFja2luZ1xuICAgICAqIHdvcmtlci1zcGVjaWZpYyBldmVudHMgYW5kIHBlcmZvcm1hbmNlIG1ldHJpY3MuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBXb3JrZXIgSUQgc3RyaW5nIGluIGZvcm1hdCBcInRocmVhZElkLXByb2Nlc3NJZFwiXG4gICAgICovXG4gICAgc3RhdGljIGdldENsaWVudFdvcmtlcklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBDTElVdGlscy5nZXRDbGllbnRXb3JrZXJJZCgpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFByb2Nlc3NJZCgpIHtcbiAgICAgICAgcmV0dXJuIGAke3Byb2Nlc3MucGlkfS0ke3dvcmtlci50aHJlYWRJZH1gXG4gICAgfVxuXG4gICAgc3RhdGljIHNsZWVwID0gKG1zID0gMTAwKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG5cbiAgICBzdGF0aWMgYXN5bmMgdXBsb2FkRXZlbnRzRGF0YSgpIHtcbiAgICAgICAgLy8gVHJhY2sgb3ZlcmFsbCBrZXkgbWV0cmljcyBvcGVyYXRpb25cbiAgICAgICAgdGhpcy5zdGFydChFVkVOVFMuU0RLX1NFTkRfS0VZX01FVFJJQ1MpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdvcmtlcklkID0gYCR7cHJvY2Vzcy5waWR9YFxuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBbUGVyZm9ybWFuY2UgVXBsb2FkXSBTdGFydGluZyB1cGxvYWQgZm9yIHdvcmtlciAke3dvcmtlcklkfWApXG5cbiAgICAgICAgICAgIC8vIFRyYWNrIHByZXBhcmF0aW9uIHBoYXNlIChjb2xsZWN0aW9uIGFuZCBkZWR1cGxpY2F0aW9uKVxuICAgICAgICAgICAgdGhpcy5zdGFydChFVkVOVFMuU0RLX0tFWV9NRVRSSUNTX1BSRVBBUkFUSU9OKVxuXG4gICAgICAgICAgICAvLyBDb2xsZWN0IGFsbCBtZWFzdXJlcyBmcm9tIHBlcmZvcm1hbmNlIHJlcG9ydCBmaWxlcyBhbmQgaW4tbWVtb3J5IGV2ZW50c1xuICAgICAgICAgICAgbGV0IG1lYXN1cmVzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdID0gW11cbiAgICAgICAgICAgIGlmIChhd2FpdCBmc1Byb21pc2UuYWNjZXNzKHRoaXMuanNvblJlcG9ydERpclBhdGgpLnRoZW4oKCkgPT4gdHJ1ZSkuY2F0Y2goKCkgPT4gZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZXMgPSAoYXdhaXQgZnNQcm9taXNlLnJlYWRkaXIodGhpcy5qc29uUmVwb3J0RGlyUGF0aCkpLm1hcChmaWxlID0+IHBhdGgucmVzb2x2ZSh0aGlzLmpzb25SZXBvcnREaXJQYXRoLCBmaWxlKSlcbiAgICAgICAgICAgICAgICBtZWFzdXJlcyA9IChhd2FpdCBQcm9taXNlLmFsbChmaWxlcy5tYXAoKGZpbGUpID0+IGZzUHJvbWlzZS5yZWFkRmlsZShmaWxlLCAndXRmLTgnKSkpKS5tYXAoZWwgPT4gYFske2VsLnNsaWNlKDAsIC0xKX1dYCkubWFwKGVsID0+IEpTT04ucGFyc2UoZWwpKS5mbGF0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgW1BlcmZvcm1hbmNlIFVwbG9hZF0gVG90YWwgZXZlbnRzIGZyb20gZmlsZXM6ICR7bWVhc3VyZXMubGVuZ3RofWApXG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9tZWFzdXJlZEV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBbUGVyZm9ybWFuY2UgVXBsb2FkXSBBZGRpbmcgJHt0aGlzLl9tZWFzdXJlZEV2ZW50cy5sZW5ndGh9IGluLW1lbW9yeSBldmVudHNgKVxuICAgICAgICAgICAgICAgIG1lYXN1cmVzID0gbWVhc3VyZXMuY29uY2F0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZWFzdXJlZEV2ZW50cy5tYXAoZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IFBlcmZvcm1hbmNlRW50cnkgdG8gcGxhaW4gb2JqZWN0IGlmIGl0IGhhcyB0b0pTT05cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGUgYXMgUGVyZm9ybWFuY2VFbnRyeSkudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlIGFzIFBlcmZvcm1hbmNlRW50cnkpLnRvSlNPTigpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVuc3VyZUVwb2NoVGltZXMgPSAoYXJyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgICAgIGNvbnN0IGN1dG9mZiA9IDFlMTIgLy8gfnllYXIgMjAwMSwgbXMgZXBvY2hcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lT3JpZ2luID0gKFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwZXJmb3JtYW5jZS50aW1lT3JpZ2luID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgPyBwZXJmb3JtYW5jZS50aW1lT3JpZ2luXG4gICAgICAgICAgICAgICAgICAgIDogKG5vdyAtIHByb2Nlc3MudXB0aW1lKCkgKiAxMDAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeS5zdGFydFRpbWUgPT09ICdudW1iZXInICYmIGVudHJ5LnN0YXJ0VGltZSA8IGN1dG9mZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkuc3RhcnRUaW1lID0gdGltZU9yaWdpbiArIGVudHJ5LnN0YXJ0VGltZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZWFzdXJlcyA9IGVuc3VyZUVwb2NoVGltZXMobWVhc3VyZXMpXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgLy8geXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU1NTUyBaXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zOiBJbnRsLkRhdGVUaW1lRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0aW1lWm9uZTogJ1VUQycsXG4gICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgIHNlY29uZDogJzItZGlnaXQnLFxuICAgICAgICAgICAgICAgIGZyYWN0aW9uYWxTZWNvbmREaWdpdHM6IDMsIC8vIFRvIGluY2x1ZGUgbWljcm9zZWNvbmRzXG4gICAgICAgICAgICAgICAgaG91cjEyOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRm9ybWF0IHRoZSBkYXRlIGFuZCByZXBsYWNlIHRoZSBkZWZhdWx0IHNlcGFyYXRvciBmb3IgdGltZSB6b25lXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAuZm9ybWF0VG9QYXJ0cyhkYXRlKVxuICAgICAgICAgICAgICAgIC5tYXAoKHsgdHlwZSwgdmFsdWUgfSkgPT4gdHlwZSA9PT0gJ3RpbWVab25lTmFtZScgPyAnWicgOiB2YWx1ZSlcbiAgICAgICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnLCcsICdUJylcblxuICAgICAgICAgICAgdGhpcy5lbmQoRVZFTlRTLlNES19LRVlfTUVUUklDU19QUkVQQVJBVElPTiwgdHJ1ZSlcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnRfdHlwZTogJ3Nka19ldmVudHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdGh1Yl91dWlkOiBwcm9jZXNzLmVudi5QRVJGX1RFU1RIVUJfVVVJRCB8fCBwcm9jZXNzLmVudi5TREtfUlVOX0lELFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkX2RheTogZm9ybWF0dGVkRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRfbmFtZTogJ1NES0ZlYXR1cmVQZXJmb3JtYW5jZScsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfZGF0YTogcHJvY2Vzcy5lbnYuUEVSRl9VU0VSX05BTUUsXG4gICAgICAgICAgICAgICAgICAgIGhvc3RfaW5mbzogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWU6IGhvc3RuYW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybTogcGxhdGZvcm0oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyY2g6IGFyY2goKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRfanNvbjogeyBtZWFzdXJlczogbWVhc3VyZXMsIHNka1J1bklkOiBwcm9jZXNzLmVudi5TREtfUlVOX0lEIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFdyYXAoYCR7QVBJVXRpbHMuRURTX1VSTH0vc2VuZF9zZGtfZXZlbnRzYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgW1BlcmZvcm1hbmNlIFVwbG9hZF0gU3VjY2Vzc2Z1bGx5IHVwbG9hZGVkIHRvIEVEUzogJHt1dGlsLmZvcm1hdChhd2FpdCByZXN1bHQudGV4dCgpKX1gKVxuXG4gICAgICAgICAgICB0aGlzLmVuZChFVkVOVFMuU0RLX1NFTkRfS0VZX01FVFJJQ1MsIHRydWUpXG4gICAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFtQZXJmb3JtYW5jZSBVcGxvYWRdIEZhaWxlZCB0byB1cGxvYWQgZXZlbnRzOiAke3V0aWwuZm9ybWF0KGVyKX1gKVxuICAgICAgICAgICAgdGhpcy5lbmQoRVZFTlRTLlNES19LRVlfTUVUUklDU19QUkVQQVJBVElPTiwgZmFsc2UsIGVyKVxuICAgICAgICAgICAgdGhpcy5lbmQoRVZFTlRTLlNES19TRU5EX0tFWV9NRVRSSUNTLCBmYWxzZSwgZXIpXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGF3YWl0IGZzUHJvbWlzZS5hY2Nlc3ModGhpcy5qc29uUmVwb3J0RGlyUGF0aCkudGhlbigoKSA9PiB0cnVlLCAoKSA9PiBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGZzUHJvbWlzZS5yZWFkZGlyKHRoaXMuanNvblJlcG9ydERpclBhdGgpXG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZnNQcm9taXNlLnVubGluayhwYXRoLmpvaW4odGhpcy5qc29uUmVwb3J0RGlyUGF0aCwgZmlsZSkpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBbUGVyZm9ybWFuY2UgVXBsb2FkXSBDbGVhbmVkIHVwICR7ZmlsZXMubGVuZ3RofSB0ZW1wb3JhcnkgcmVwb3J0IGZpbGVzYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgW1BlcmZvcm1hbmNlIFVwbG9hZF0gRmFpbGVkIHRvIGRlbGV0ZSB0ZW1wb3JhcnkgZmlsZXM6ICR7dXRpbC5mb3JtYXQoZXIpfWApXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCAiaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXG5cbmltcG9ydCBsb2dnZXIgZnJvbSAnQHdkaW8vbG9nZ2VyJ1xuXG5pbXBvcnQgeyBMT0dTX0ZJTEUgfSBmcm9tICcuL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4vdXRpbC5qcydcblxuY29uc3QgbG9nID0gbG9nZ2VyKCdAd2Rpby9icm93c2Vyc3RhY2stc2VydmljZScpXG5cbmV4cG9ydCBjbGFzcyBCU3RhY2tMb2dnZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgbG9nRmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgTE9HU19GSUxFKVxuICAgIHB1YmxpYyBzdGF0aWMgbG9nRm9sZGVyUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbG9ncycpXG4gICAgcHJpdmF0ZSBzdGF0aWMgbG9nRmlsZVN0cmVhbTogZnMuV3JpdGVTdHJlYW0gfCBudWxsXG5cbiAgICBwcml2YXRlIHN0YXRpYyByZWRhY3RDcmVkZW50aWFscyhsb2dNZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbG9nTWVzc2FnZVxuICAgICAgICAgICAgLnJlcGxhY2UoLyhbXCInXT8oPzp1c2VybmFtZXx1c2VyTmFtZXxhY2Nlc3NrZXl8YWNjZXNzS2V5fHVzZXJ8a2V5KVtcIiddP1xccypbOj1dXFxzKltcIiddPykoW15cIidcXHMsfV0rKS9naSwgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oWz8mXSg/OnVzZXJuYW1lfHVzZXJOYW1lfGFjY2Vzc19rZXl8YWNjZXNza2V5fGFjY2Vzc0tleXx1c2VyfGtleSk9KShbXiYjXFxzXSspL2dpLCAnJDEnKVxuICAgIH1cblxuICAgIHN0YXRpYyBsb2dUb0ZpbGUobG9nTWVzc2FnZTogc3RyaW5nLCBsb2dMZXZlbDogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZWRhY3RlZE1lc3NhZ2UgPSB0aGlzLnJlZGFjdENyZWRlbnRpYWxzKGxvZ01lc3NhZ2UpXG4gICAgICAgICAgICBpZiAoIXRoaXMubG9nRmlsZVN0cmVhbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlTG9nc0ZvbGRlcigpXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dGaWxlU3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0odGhpcy5sb2dGaWxlUGF0aCwgeyBmbGFnczogJ2EnIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5sb2dGaWxlU3RyZWFtICYmIHRoaXMubG9nRmlsZVN0cmVhbS53cml0YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nRmlsZVN0cmVhbS53cml0ZSh0aGlzLmZvcm1hdExvZyhyZWRhY3RlZE1lc3NhZ2UsIGxvZ0xldmVsKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhgRmFpbGVkIHRvIGxvZyB0byBmaWxlLiBFcnJvciAke2Vycm9yfWApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmb3JtYXRMb2cobG9nTWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBgJHtjaGFsay5ncmF5KG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSl9ICR7Y2hhbGtbQ09MT1JTW2xldmVsXV0obGV2ZWwudG9VcHBlckNhc2UoKSl9ICR7Y2hhbGsud2hpdGVCcmlnaHQoJ0B3ZGlvL2Jyb3dzZXJzdGFjay1zZXJ2aWNlJyl9ICR7bG9nTWVzc2FnZX1cXG5gXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCByZWRhY3RlZE1lc3NhZ2UgPSB0aGlzLnJlZGFjdENyZWRlbnRpYWxzKG1lc3NhZ2UpXG4gICAgICAgIHRoaXMubG9nVG9GaWxlKHJlZGFjdGVkTWVzc2FnZSwgJ2luZm8nKVxuICAgICAgICBsb2cuaW5mbyhyZWRhY3RlZE1lc3NhZ2UpXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBlcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcmVkYWN0ZWRNZXNzYWdlID0gdGhpcy5yZWRhY3RDcmVkZW50aWFscyhtZXNzYWdlKVxuICAgICAgICB0aGlzLmxvZ1RvRmlsZShyZWRhY3RlZE1lc3NhZ2UsICdlcnJvcicpXG4gICAgICAgIGxvZy5lcnJvcihyZWRhY3RlZE1lc3NhZ2UpXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZWJ1ZyhtZXNzYWdlOiBzdHJpbmcsIHBhcmFtPzogdW5rbm93bikge1xuICAgICAgICBjb25zdCByZWRhY3RlZE1lc3NhZ2UgPSB0aGlzLnJlZGFjdENyZWRlbnRpYWxzKG1lc3NhZ2UpXG4gICAgICAgIHRoaXMubG9nVG9GaWxlKHJlZGFjdGVkTWVzc2FnZSwgJ2RlYnVnJylcbiAgICAgICAgaWYgKHBhcmFtKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcocmVkYWN0ZWRNZXNzYWdlLCBwYXJhbSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhyZWRhY3RlZE1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHdhcm4obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJlZGFjdGVkTWVzc2FnZSA9IHRoaXMucmVkYWN0Q3JlZGVudGlhbHMobWVzc2FnZSlcbiAgICAgICAgdGhpcy5sb2dUb0ZpbGUocmVkYWN0ZWRNZXNzYWdlLCAnd2FybicpXG4gICAgICAgIGxvZy53YXJuKHJlZGFjdGVkTWVzc2FnZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRyYWNlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCByZWRhY3RlZE1lc3NhZ2UgPSB0aGlzLnJlZGFjdENyZWRlbnRpYWxzKG1lc3NhZ2UpXG4gICAgICAgIHRoaXMubG9nVG9GaWxlKHJlZGFjdGVkTWVzc2FnZSwgJ3RyYWNlJylcbiAgICAgICAgbG9nLnRyYWNlKHJlZGFjdGVkTWVzc2FnZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmFpbiB3aGF0ZXZlciBpcyBzdGlsbCBzaXR0aW5nIGluIHRoZSBsb2cgc3RyZWFtJ3MgYnVmZmVyIG9udG8gZGlzay5cbiAgICAgKlxuICAgICAqIGBsb2dUb0ZpbGVgIHdyaXRlcyB0byBhbiBhc3luYyBgZnMuV3JpdGVTdHJlYW1gLCBzbyBhIGxpbmUgbG9nZ2VkIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGVcbiAgICAgKiBhcmNoaXZlIGlzIGJ1aWx0IGlzIHZlcnkgbGlrZWx5IE5PVCBpbiB0aGUgZmlsZSB5ZXQgXHUyMDE0IHRoZSBzdHJlYW0ncyBgb3BlbmAgaXMgYXN5bmMgdG9vLFxuICAgICAqIHNvIGVhcmx5IG9uIHRoZSBmaWxlIG1heSBub3QgZXhpc3QgYXQgYWxsLiBBbnl0aGluZyB0aGF0IHNuYXBzaG90cyB0aGUgbG9nICh0aGUgZGVidWctbG9nXG4gICAgICogdXBsb2FkKSBtdXN0IGZsdXNoIGZpcnN0IG9yIGl0IHNoaXBzIGEgdHJ1bmNhdGVkIGNvcHkuXG4gICAgICpcbiAgICAgKiBBIHplcm8tbGVuZ3RoIHdyaXRlJ3MgY2FsbGJhY2sgZmlyZXMgb25seSBhZnRlciBldmVyeSBjaHVuayBxdWV1ZWQgYWhlYWQgb2YgaXQgaGFzIGJlZW5cbiAgICAgKiBoYW5kZWQgdG8gdGhlIGZzIGxheWVyLCB3aGljaCBkcmFpbnMgdGhlIGJ1ZmZlciB3aXRob3V0IGVuZGluZyB0aGUgc3RyZWFtIFx1MjAxNCB1bmxpa2VcbiAgICAgKiBgY2xlYXJMb2dnZXIoKWAsIGxvZ2dpbmcgY29udGludWVzIHRvIHdvcmsgYWZ0ZXJ3YXJkcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGZsdXNoTG9nRmlsZSh0aW1lb3V0TXMgPSAyMDAwKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMubG9nRmlsZVN0cmVhbVxuICAgICAgICBpZiAoIXN0cmVhbSB8fCAhc3RyZWFtLndyaXRhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBOZXZlciBsZXQgYSBzdHVjayBzdHJlYW0gaG9sZCB1cCB0aGUgdXBsb2FkOyBhIHRydW5jYXRlZCBsb2cgYmVhdHMgbm8gbG9nIGF0IGFsbC5cbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0TXMpXG4gICAgICAgICAgICB0aW1lci51bnJlZj8uKClcbiAgICAgICAgICAgIHN0cmVhbS53cml0ZSgnJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjbGVhckxvZ2dlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubG9nRmlsZVN0cmVhbSkge1xuICAgICAgICAgICAgdGhpcy5sb2dGaWxlU3RyZWFtLmVuZCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2dGaWxlU3RyZWFtID0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJMb2dGaWxlKCkge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyh0aGlzLmxvZ0ZpbGVQYXRoKSkge1xuICAgICAgICAgICAgZnMudHJ1bmNhdGVTeW5jKHRoaXMubG9nRmlsZVBhdGgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGVuc3VyZUxvZ3NGb2xkZXIoKSB7XG4gICAgICAgIGlmICghZnMuZXhpc3RzU3luYyh0aGlzLmxvZ0ZvbGRlclBhdGgpKXtcbiAgICAgICAgICAgIGZzLm1rZGlyU3luYyh0aGlzLmxvZ0ZvbGRlclBhdGgpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJAd2Rpby9icm93c2Vyc3RhY2stc2VydmljZVwiLFxuICBcInZlcnNpb25cIjogXCI5LjM2LjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldlYmRyaXZlcklPIHNlcnZpY2UgZm9yIGJldHRlciBCcm93c2Vyc3RhY2sgaW50ZWdyYXRpb25cIixcbiAgXCJhdXRob3JcIjogXCJCcm93c2VyU3RhY2sgPHN1cHBvcnRAYnJvd3NlcnN0YWNrLmNvbT5cIixcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9icm93c2Vyc3RhY2svd2Rpby1icm93c2Vyc3RhY2stc2VydmljZVwiLFxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI+PTE4LjIwLjBcIlxuICB9LFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9icm93c2Vyc3RhY2svd2Rpby1icm93c2Vyc3RhY2stc2VydmljZS5naXRcIixcbiAgICBcImRpcmVjdG9yeVwiOiBcInBhY2thZ2VzL2Jyb3dzZXJzdGFjay1zZXJ2aWNlXCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJ3ZWJkcml2ZXJpb1wiLFxuICAgIFwid2Rpb1wiLFxuICAgIFwiYnJvd3NlcnN0YWNrXCIsXG4gICAgXCJ3ZGlvLXNlcnZpY2VcIlxuICBdLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Jyb3dzZXJzdGFjay93ZGlvLWJyb3dzZXJzdGFjay1zZXJ2aWNlL2lzc3Vlc1wiXG4gIH0sXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInR5cGVzXCI6IFwiLi9idWlsZC9pbmRleC5kLnRzXCIsXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuXCI6IHtcbiAgICAgIFwidHlwZXNcIjogXCIuL2J1aWxkL2luZGV4LmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9idWlsZC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vY2xlYW51cFwiOiB7XG4gICAgICBcInR5cGVzXCI6IFwiLi9idWlsZC9jbGVhbnVwLmQudHNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9idWlsZC9jbGVhbnVwLmpzXCIsXG4gICAgICBcInNvdXJjZVwiOiBcIi4vc3JjL2NsZWFudXAudHNcIlxuICAgIH1cbiAgfSxcbiAgXCJ0eXBlU2NyaXB0VmVyc2lvblwiOiBcIjMuOC4zXCIsXG4gIFwiZmlsZXNcIjogW1xuICAgIFwiYnVpbGRcIixcbiAgICBcInNyYy9wcm90by8qKi8qLnByb3RvXCIsXG4gICAgXCJicm93c2Vyc3RhY2stc2VydmljZS5kLnRzXCIsXG4gICAgXCJSRUFETUUubWRcIixcbiAgICBcIkxJQ0VOU0VcIlxuICBdLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiY2xlYW5cIjogXCJyaW1yYWYgLi9idWlsZCBzcmMvZ3JwYy9nZW5lcmF0ZWRcIixcbiAgICBcImdlbmVyYXRlXCI6IFwiYnVmIGdlbmVyYXRlXCIsXG4gICAgXCJidWlsZFwiOiBcInJpbXJhZiAuL2J1aWxkIHNyYy9ncnBjL2dlbmVyYXRlZCAmJiBidWYgZ2VuZXJhdGUgJiYgbm9kZSAuL3NjcmlwdHMvYnVpbGQubWpzICYmIHRzYyAtcCB0c2NvbmZpZy5wcm9kLmpzb25cIixcbiAgICBcImJ1aWxkOndhdGNoXCI6IFwibm9kZSAuL3NjcmlwdHMvYnVpbGQubWpzIC0td2F0Y2hcIixcbiAgICBcInRlc3RcIjogXCJ2aXRlc3QgLS1ydW5cIixcbiAgICBcInRlc3Q6d2F0Y2hcIjogXCJ2aXRlc3RcIixcbiAgICBcInByZXBhY2tcIjogXCJucG0gcnVuIGJ1aWxkXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJyb3dzZXJzdGFjay9haS1zZGstbm9kZVwiOiBcIjEuNS4xN1wiLFxuICAgIFwiQGJ1ZmJ1aWxkL3Byb3RvYnVmXCI6IFwiXjIuNS4yXCIsXG4gICAgXCJAZ3JwYy9ncnBjLWpzXCI6IFwifjEuMTMuNVwiLFxuICAgIFwiQHBlcmN5L2FwcGl1bS1hcHBcIjogXCJeMi4wLjlcIixcbiAgICBcIkBwZXJjeS9zZWxlbml1bS13ZWJkcml2ZXJcIjogXCJeMi4yLjJcIixcbiAgICBcIkB0eXBlcy9naXRjb25maWdsb2NhbFwiOiBcIl4yLjAuMVwiLFxuICAgIFwiYnJvd3NlcnN0YWNrLWxvY2FsXCI6IFwiXjEuNS4xXCIsXG4gICAgXCJjaGFsa1wiOiBcIl41LjMuMFwiLFxuICAgIFwiY3N2LXdyaXRlclwiOiBcIl4xLjYuMFwiLFxuICAgIFwiZ2l0LXJlcG8taW5mb1wiOiBcIl4yLjEuMVwiLFxuICAgIFwiZ2l0Y29uZmlnbG9jYWxcIjogXCJeMi4xLjBcIixcbiAgICBcImdsb2JcIjogXCJeMTEuMC4wXCIsXG4gICAgXCJ0YXJcIjogXCJeNy41LjExXCIsXG4gICAgXCJ1bmRpY2lcIjogXCJeNi4yNC4wXCIsXG4gICAgXCJ1dWlkXCI6IFwiXjExLjEuMFwiLFxuICAgIFwid2luc3Rvbi10cmFuc3BvcnRcIjogXCJeNC41LjBcIixcbiAgICBcInlhdXpsXCI6IFwiXjMuNC4wXCIsXG4gICAgXCJAd2Rpby9sb2dnZXJcIjogXCJeOS4wLjBcIixcbiAgICBcIkB3ZGlvL3JlcG9ydGVyXCI6IFwiXjkuMC4wXCIsXG4gICAgXCJAd2Rpby90eXBlc1wiOiBcIl45LjAuMFwiLFxuICAgIFwid2ViZHJpdmVyaW9cIjogXCJeOS4wLjBcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHdkaW8vY2xpXCI6IFwiXjUuMC4wIHx8IF42LjAuMCB8fCBeNy4wLjAgfHwgXjguMC4wIHx8IF45LjAuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBidWZidWlsZC9idWZcIjogXCJeMS41NS4xXCIsXG4gICAgXCJAY2hhbmdlc2V0cy9jbGlcIjogXCJeMi4yNy45XCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xLjBcIixcbiAgICBcIkB0eXBlcy90YXJcIjogXCJeNy4wLjg3XCIsXG4gICAgXCJAdHlwZXMveWF1emxcIjogXCJeMi4xMC4zXCIsXG4gICAgXCJAd2Rpby9nbG9iYWxzXCI6IFwiXjkuMC4wXCIsXG4gICAgXCJAd2Rpby9sb2dnZXJcIjogXCJeOS4wLjBcIixcbiAgICBcIkB3ZGlvL3JlcG9ydGVyXCI6IFwiXjkuMC4wXCIsXG4gICAgXCJAd2Rpby90eXBlc1wiOiBcIl45LjAuMFwiLFxuICAgIFwiZXNidWlsZFwiOiBcIl4wLjI3LjJcIixcbiAgICBcInJpbXJhZlwiOiBcIl42LjAuMVwiLFxuICAgIFwidHMtcHJvdG9cIjogXCJeMi43LjVcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS44LjNcIixcbiAgICBcInZpdGVzdFwiOiBcIl4zLjIuNFwiLFxuICAgIFwid2ViZHJpdmVyaW9cIjogXCJeOS4wLjBcIlxuICB9LFxuICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgfVxufVxuIiwgImltcG9ydCB0eXBlIHsgQnJvd3NlcnN0YWNrQ29uZmlnIH0gZnJvbSAnLi90eXBlcy5qcydcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJyB3aXRoIHsgdHlwZTogJ2pzb24nIH1cblxuY29uc3QgYnN0YWNrU2VydmljZVZlcnNpb24gPSBwa2cudmVyc2lvblxuXG5leHBvcnQgY29uc3QgQlJPV1NFUl9ERVNDUklQVElPTiA9IFtcbiAgICAnZGV2aWNlJyxcbiAgICAnb3MnLFxuICAgICdvc1ZlcnNpb24nLFxuICAgICdvc192ZXJzaW9uJyxcbiAgICAnYnJvd3Nlck5hbWUnLFxuICAgICdicm93c2VyJyxcbiAgICAnYnJvd3NlclZlcnNpb24nLFxuICAgICdicm93c2VyX3ZlcnNpb24nXG5dIGFzIGNvbnN0XG5cbmV4cG9ydCBjb25zdCBWQUxJRF9BUFBfRVhURU5TSU9OID0gW1xuICAgICcuYXBrJyxcbiAgICAnLmFhYicsXG4gICAgJy5pcGEnXG5dXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX09QVElPTlM6IFBhcnRpYWw8QnJvd3NlcnN0YWNrQ29uZmlnPiA9IHtcbiAgICBzZXRTZXNzaW9uTmFtZTogdHJ1ZSxcbiAgICBzZXRTZXNzaW9uU3RhdHVzOiB0cnVlLFxuICAgIHRlc3RPYnNlcnZhYmlsaXR5OiB0cnVlXG59XG5cbmV4cG9ydCBjb25zdCBjb25zb2xlSG9sZGVyOiB0eXBlb2YgY29uc29sZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnNvbGUpXG5cbmV4cG9ydCBjb25zdCBEQVRBX0VORFBPSU5UID0gJ2h0dHBzOi8vY29sbGVjdG9yLW9ic2VydmFiaWxpdHkuYnJvd3NlcnN0YWNrLmNvbSdcbmV4cG9ydCBjb25zdCBBUFBfQUxMWV9FTkRQT0lOVCA9ICdodHRwczovL2FwcC1hY2Nlc3NpYmlsaXR5LmJyb3dzZXJzdGFjay5jb20vYXV0b21hdGUnXG5leHBvcnQgY29uc3QgQVBQX0FMTFlfSVNTVUVTX0VORFBPSU5UID0gJ2FwaS92MS9pc3N1ZXMnXG5leHBvcnQgY29uc3QgQVBQX0FMTFlfSVNTVUVTX1NVTU1BUllfRU5EUE9JTlQgPSAnYXBpL3YxL2lzc3Vlcy1zdW1tYXJ5J1xuZXhwb3J0IGNvbnN0IERBVEFfRVZFTlRfRU5EUE9JTlQgPSAnYXBpL3YxL2V2ZW50J1xuZXhwb3J0IGNvbnN0IERBVEFfQkFUQ0hfRU5EUE9JTlQgPSAnYXBpL3YxL2JhdGNoJ1xuZXhwb3J0IGNvbnN0IERBVEFfU0NSRUVOU0hPVF9FTkRQT0lOVCA9ICdhcGkvdjEvc2NyZWVuc2hvdHMnXG5leHBvcnQgY29uc3QgREFUQV9CQVRDSF9TSVpFID0gMTAwMFxuZXhwb3J0IGNvbnN0IERBVEFfQkFUQ0hfSU5URVJWQUwgPSAyMDAwXG5leHBvcnQgY29uc3QgQkFUQ0hfRVZFTlRfVFlQRVMgPSBbJ0xvZ0NyZWF0ZWQnLCAnVGVzdFJ1blN0YXJ0ZWQnLCAnVGVzdFJ1bkZpbmlzaGVkJywgJ0hvb2tSdW5GaW5pc2hlZCcsICdIb29rUnVuU3RhcnRlZCcsICdTY3JlZW5zaG90Q3JlYXRlZCddXG5leHBvcnQgY29uc3QgREVGQVVMVF9XQUlUX1RJTUVPVVRfRk9SX1BFTkRJTkdfVVBMT0FEUyA9IDUwMDAgLy8gNXNcbmV4cG9ydCBjb25zdCBERUZBVUxUX1dBSVRfSU5URVJWQUxfRk9SX1BFTkRJTkdfVVBMT0FEUyA9IDEwMCAvLyAxMDBtc1xuZXhwb3J0IGNvbnN0IEJTVEFDS19TRVJWSUNFX1ZFUlNJT04gPSBic3RhY2tTZXJ2aWNlVmVyc2lvblxuXG5leHBvcnQgY29uc3QgTk9UX0FMTE9XRURfS0VZU19JTl9DQVBTID0gWydpbmNsdWRlVGFnc0luVGVzdGluZ1Njb3BlJywgJ2V4Y2x1ZGVUYWdzSW5UZXN0aW5nU2NvcGUnLCAndGVzdE1hbmFnZW1lbnRPcHRpb25zJywgJ3NraXBBcHBPdmVycmlkZSddXG5leHBvcnQgY29uc3QgQlJPV1NFUlNUQUNLX1RFU1RfUExBTl9JRCA9ICdCUk9XU0VSU1RBQ0tfVEVTVF9QTEFOX0lEJ1xuXG5leHBvcnQgY29uc3QgTE9HU19GSUxFID0gJ2xvZ3MvYnN0YWNrLXdkaW8tc2VydmljZS5sb2cnXG5leHBvcnQgY29uc3QgQ0xJX0RFQlVHX0xPR1NfRklMRSA9ICdsb2cvc2RrLWNsaS1kZWJ1Zy5sb2cnXG5leHBvcnQgY29uc3QgVVBMT0FEX0xPR1NfQUREUkVTUyA9ICdodHRwczovL3VwbG9hZC1vYnNlcnZhYmlsaXR5LmJyb3dzZXJzdGFjay5jb20nXG5leHBvcnQgY29uc3QgVVBMT0FEX0xPR1NfRU5EUE9JTlQgPSAnY2xpZW50LWxvZ3MvdXBsb2FkJ1xuXG5leHBvcnQgY29uc3QgUEVSQ1lfTE9HU19GSUxFID0gJ2xvZ3MvcGVyY3kubG9nJ1xuXG4vKipcbiAqIEF1dG8tY2FwdHVyZSBvZiB0aGUgdXNlcidzIHdkaW8gY29uZmlnIGZpbGUgKFNESy03MjUwKS5cbiAqL1xuXG4vKlxuICogU2hvd24gb25jZSBwZXIgcnVuIHdoZW4gYXV0by1jYXB0dXJlIGlzIGFjdGl2ZS4gVGhlIE5vZGUgU0RLIGRvZXMgdGhlIHNhbWVcbiAqIChCcm93c2VyU3RhY2tTZXR1cC5qcyAtPiBBVVRPTE9HQ0FQVFVSRV9OT1RJRklDQVRJT04pOyB3aXRob3V0IGl0IGEgd2RpbyBjdXN0b21lciBnZXRzIG5vXG4gKiBydW50aW1lIGRpc2Nsb3N1cmUgdGhhdCB0aGVpciBjb25maWcgZmlsZSBpcyBjb2xsZWN0ZWQsIG9ubHkgYSBjaGFuZ2VzZXQgZW50cnkgYW5kIGEgSlNEb2NcbiAqIGNvbW1lbnQuIFNpbmNlIHRoZSByZWRhY3Rpb24gaXMga2V5LW5hbWUgZHJpdmVuIGFuZCBiZXN0LWVmZm9ydCwgdGhlIG5vdGljZSBpcyBwYXJ0IG9mIHRoZVxuICogY29udHJvbCByYXRoZXIgdGhhbiBkZWNvcmF0aW9uLlxuICovXG5leHBvcnQgY29uc3QgQVVUT0xPR0NBUFRVUkVfTk9USUZJQ0FUSU9OID0gJ1lvdXIgd2RpbyBjb25maWcgZmlsZSwgdGhlIGxvY2FsIGNvbmZpZyBmaWxlcyBpdCBpbXBvcnRzIGFuZCBwYWNrYWdlLmpzb24gYXJlIGNhcHR1cmVkIHdpdGggdGhlIGRlYnVnIGxvZ3MgYXQgdGhlIGVuZCBvZiB0aGUgcnVuLCB3aXRoIHZhbHVlcyB1bmRlciBrbm93biBjcmVkZW50aWFsIGtleXMgcmVtb3ZlZC4gVG8gZGlzYWJsZSwgc2V0IGRpc2FibGVBdXRvQ2FwdHVyZUxvZ3M6IHRydWUgaW4gdGhlIGJyb3dzZXJzdGFjayBzZXJ2aWNlIG9wdGlvbnMuJ1xuXG4vKiBBYnNvbHV0ZSBwYXRoIG9mIHRoZSByZXNvbHZlZCB3ZGlvIGNvbmZpZywgcHVibGlzaGVkIG9uY2Ugc28gdGhlIHVwbG9hZCBwYXRoIG5ldmVyIHJlLWRlcml2ZXMgaXQgKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSU1RBQ0tfV0RJT19DT05GSUdfRklMRV9QQVRIID0gJ0JST1dTRVJTVEFDS19XRElPX0NPTkZJR19GSUxFX1BBVEgnXG5leHBvcnQgY29uc3QgQlJPV1NFUlNUQUNLX0RJU0FCTEVfQVVUT19DQVBUVVJFX0xPR1MgPSAnQlJPV1NFUlNUQUNLX0RJU0FCTEVfQVVUT19DQVBUVVJFX0xPR1MnXG4vKiBXaGljaCBsYWRkZXIgcnVuZyByZXNvbHZlZCB0aGUgY29uZmlnLCBrZXB0IHNvIHRoZSB1cGxvYWQgcGF0aCByZXBvcnRzIHRoZSBUUlVFIHJ1bmdcbiAgIGluc3RlYWQgb2YgcmUtcmVhZGluZyBpdHMgb3duIGVudiB2YXIgYW5kIGFsd2F5cyBzYXlpbmcgJ2Vudl9vdmVycmlkZScgKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSU1RBQ0tfV0RJT19DT05GSUdfU1RSQVRFR1kgPSAnQlJPV1NFUlNUQUNLX1dESU9fQ09ORklHX1NUUkFURUdZJ1xuXG4vKiBNaXJyb3JzIGNyZWF0ZS13ZGlvJ3MgU1VQUE9SVEVEX0NPTkZJR19GSUxFX0VYVEVOU0lPTiAoaWRlbnRpY2FsIGluIHdkaW8gdjggYW5kIHY5KSAqL1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9XRElPX0NPTkZJR19FWFRFTlNJT05TID0gWycuanMnLCAnLnRzJywgJy5tanMnLCAnLm10cycsICcuY2pzJywgJy5jdHMnXVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0RJT19DT05GSUdfQkFTRU5BTUUgPSAnd2Rpby5jb25mJ1xuLyogYHdkaW8gPGNtZD5gIHZlcmJzIHRoYXQgbXVzdCBuZXZlciBiZSBtaXN0YWtlbiBmb3IgdGhlIGNvbmZpZyBwb3NpdGlvbmFsICovXG5leHBvcnQgY29uc3QgV0RJT19DTElfU1VCQ09NTUFORFMgPSBbJ3J1bicsICdpbnN0YWxsJywgJ3JlcGwnLCAnY29uZmlnJ11cblxuLyogQ29uZmlncyBhcmUga2lsb2J5dGVzOyB0aGUgY2FwIG9ubHkgZXhpc3RzIHNvIGEgbWlzbGFiZWxsZWQgcGF0aCBjYW5ub3QgYmxvYXQgdGhlIGFyY2hpdmUgKi9cbmV4cG9ydCBjb25zdCBNQVhfQ0FQVFVSRURfQ09ORklHX0ZJTEVfQllURVMgPSAxMDI0ICogMTAyNFxuZXhwb3J0IGNvbnN0IE1BWF9DQVBUVVJFRF9DT05GSUdfRklMRVMgPSA2XG4vKiBIb3cgZmFyIHRvIGZvbGxvdyByZWxhdGl2ZSBpbXBvcnRzIG91dCBvZiB0aGUgZW50cnkgY29uZmlnICgxID0gZGlyZWN0IGltcG9ydHMgb25seSkgKi9cbmV4cG9ydCBjb25zdCBDQVBUVVJFX0NPTkZJR19JTVBPUlRfREVQVEggPSAxXG4vKiBIb3cgZmFyIHRvIHdhbGsgdXAgZnJvbSB0aGUgY29uZmlnIGRpciBsb29raW5nIGZvciB0aGUgcHJvamVjdCdzIHBhY2thZ2UuanNvbiAqL1xuZXhwb3J0IGNvbnN0IE1BWF9QQUNLQUdFX0pTT05fV0FMS19VUCA9IDVcblxuLyoqXG4gKiBLZXlzIHdob3NlIGxpbmUgaXMgc2NydWJiZWQgYmVmb3JlIGEgY29uZmlnIGZpbGUgZW50ZXJzIHRoZSBhcmNoaXZlLlxuICogYHVzZXJgIC8gYGtleWAgYXJlIFdESU8ncyBvd24gdG9wLWxldmVsIGNyZWRlbnRpYWwgb3B0aW9ucywgaGVuY2UgdGhlIGJhcmUgZW50cmllcy5cbiAqL1xuLyoqXG4gKiBXb3JkIGZhbWlsaWVzIHRoYXQgbWFrZSBhbiBpZGVudGlmaWVyIHNlbnNpdGl2ZSB3aGVuIHRoZXkgYXBwZWFyIGFzIGl0cyBTVUZGSVggXHUyMDE0XG4gKiBgY2xpZW50U2VjcmV0YCwgYHJlZnJlc2hUb2tlbmAsIGBwcml2YXRlS2V5YCwgYGNsaWVudF9zZWNyZXRgLiBTcGxpdCBieSBjYXNlIHNvIHRoZVxuICogY2FtZWxDYXNlIGZvcm0gcmVxdWlyZXMgYSBjYXBpdGFsIChkaXN0aW5ndWlzaGluZyBgcHJpdmF0ZUtleWAgZnJvbSBgaG90a2V5YCkgYW5kIHRoZVxuICogc25ha2VfY2FzZSBmb3JtIHJlcXVpcmVzIGFuIGV4cGxpY2l0IGBfYCAoZGlzdGluZ3Vpc2hpbmcgYGNsaWVudF9zZWNyZXRgIGZyb20gYGtleXdvcmRgKS5cbiAqL1xuZXhwb3J0IGNvbnN0IENPTVBPVU5EX1NFQ1JFVF9TVUZGSVhFU19DQU1FTCA9ICdLZXl8VG9rZW58U2VjcmV0fFBhc3N3b3JkfFBhc3N3ZHxDcmVkZW50aWFsJ1xuZXhwb3J0IGNvbnN0IENPTVBPVU5EX1NFQ1JFVF9TVUZGSVhFU19TTkFLRSA9ICdrZXl8dG9rZW58c2VjcmV0fHBhc3N3b3JkfHBhc3N3ZHxjcmVkZW50aWFsJ1xuXG4vKipcbiAqIFNlY3JldHMgdGhhdCBzcGFuIGxpbmVzIG9yIGhpZGUgaW5zaWRlIGEgdmFsdWUsIHdoaWNoIGEgbGluZS9rZXktYW5jaG9yZWQgc2NydWIgY2Fubm90XG4gKiByZWFjaC4gQXBwbGllZCBhcyB3aG9sZS1ibG9jayBwYXNzZXMgYmVmb3JlIHRoZSBsaW5lIHBhc3Nlcy5cbiAqL1xuLyogYW4gaW5saW5lIFBFTTogdGhlIGtleSBieXRlcyBzaXQgb24gbGluZXMgdGhhdCBjYXJyeSBubyBrZXkgbmFtZSBhdCBhbGwgKi9cbi8qXG4gKiBUaGUgYm9keSBpcyBURU1QRVJFRCBzbyBpdCBjYW5ub3QgY3Jvc3MgYSBzZWNvbmQgYC0tLS0tQkVHSU5gOiB3aXRoIGEgcGxhaW4gYFtcXHNcXFNdKj9gLFxuICogYW4gVU5URVJNSU5BVEVEIGJsb2NrIGVhcmxpZXIgaW4gdGhlIGZpbGUgbWF0Y2hlcyB0aHJvdWdoIHRvIGEgbGF0ZXIsIHVucmVsYXRlZCBibG9jaydzXG4gKiBFTkQgbWFya2VyIGFuZCBldmVyeXRoaW5nIGluIGJldHdlZW4gaXMgcmVwbGFjZWQgXHUyMDE0IHNpbGVudGx5IGRlc3Ryb3lpbmcgdW5yZWxhdGVkIGNvbmZpZy5cbiAqIEJvdW5kZWQgYXMgd2VsbCwgc28gdGhlIHNjYW4gc3RheXMgbGluZWFyLlxuICovXG5leHBvcnQgY29uc3QgUEVNX0JMT0NLX1JFR0VYID0gLygtLS0tLUJFR0lOIFteLVxcclxcbl0rLS0tLS0pKD86KD8hLS0tLS1CRUdJTilbXFxzXFxTXSl7MCw2NTUzNn0/KC0tLS0tRU5EIFteLVxcclxcbl0rLS0tLS0pL2dcbi8qXG4gKiBBIFBFTSBvcGVuZWQgYnV0IG5ldmVyIGNsb3NlZC4gVGhlIGJsb2NrIHJlZ2V4IGFib3ZlIG5lZWRzIHRoZSBFTkQgbWFya2VyLCBzbyB3aXRob3V0IGl0XG4gKiB0aGUga2V5IGJ5dGVzIHN1cnZpdmUgZXZlcnkgcGFzcy4gTWF0Y2hlZCBhcyBCRUdJTiArIHRoZSBydW4gb2YgYmFzZTY0LW9ubHkgbGluZXMgdGhhdFxuICogZm9sbG93cy4gQSBydW4gbXVzdCBiZSBhdCBsZWFzdCAyMCBjaGFyYWN0ZXJzIGFuZCBlbmQgYXQgYSBub24tYmFzZTY0IGNoYXJhY3RlcjogbGV0dGVyc1xuICogYXJlIHZhbGlkIGJhc2U2NCwgc28gYSBzaG9ydGVyL3VuYm91bmRlZCBydWxlIG1hdGNoZXMgcGFydCBvZiBhbiBvcmRpbmFyeSBsaW5lIHN1Y2ggYXNcbiAqIGBuZXh0T3B0aW9uOiAxYCBhbmQgZWF0cyBpdC4gU3RvcHMgYXQgdGhlIGZpcnN0IGxpbmUgdGhhdCBkb2VzIG5vdCBxdWFsaWZ5LCBzbyBhIG1hbGZvcm1lZFxuICogYmxvY2sgY2Fubm90IHN3YWxsb3cgdGhlIHJlc3Qgb2YgdGhlIGZpbGUuIFRoZSB1cHBlciBib3VuZCBpcyBnZW5lcm91cyAoOCBLQikgYmVjYXVzZSBhXG4gKiBrZXkgd3JpdHRlbiB1bndyYXBwZWQgb24gT05FIGxpbmUgd291bGQgb3RoZXJ3aXNlIGV4Y2VlZCBpdCBhbmQgZmFpbCBPUEVOLCBsZWF2aW5nIHRoZSBib2R5XG4gKiBpbiB0aGUgYnVuZGxlLlxuICovXG5leHBvcnQgY29uc3QgUEVNX1VOVEVSTUlOQVRFRF9SRUdFWCA9IC8oLS0tLS1CRUdJTiBbXi1cXHJcXG5dKy0tLS0tKSg/Olxccj9cXG5bQS1aYS16MC05Ky89XXsyMCw4MTkyfSg/PVteQS1aYS16MC05Ky89XXwkKSkrL2dcbi8qXG4gKiBVc2VyaW5mbyBpbiBBTlkgdXJsIHZhbHVlLCBub3QganVzdCB0aGUgYHByb3h5VXJsYCBrZXkuIFRoZSBwYXNzd29yZCBoYWxmIGlzIG9wdGlvbmFsIHNvXG4gKiBzaW5nbGUtdG9rZW4gZm9ybXMgKGBodHRwczovL2docF94eHhAZ2l0aHViLmNvbWAsIGNvbW1vbiBpbiBDSSBnaXQvbnBtIHJlbW90ZXMpIGFyZSBjYXVnaHRcbiAqIHRvby4gUXVhbnRpZmllcnMgYXJlIEJPVU5ERUQ6IHRoZSB1bmJvdW5kZWQgZm9ybSB3YXMgbWVhc3VyYWJseSBxdWFkcmF0aWMgKDEwMCBLQiBvZlxuICogd29yZCBjaGFyYWN0ZXJzIHRvb2sgNi4xIHMsIDR4IHBlciBkb3VibGluZykgYmVjYXVzZSBib3RoIGhhbHZlcyBzY2FuIGZvcndhcmQgZm9yIGFuIGBAYFxuICogdGhhdCBuZXZlciBhcnJpdmVzLiBSZWFsIHVzZXJpbmZvIGlzIHNob3J0LCBzbyB0aGUgYm91bmRzIGNoYW5nZSBubyByZWFsLXdvcmxkIG1hdGNoLlxuICovXG5leHBvcnQgY29uc3QgVVJMX1VTRVJJTkZPX1JFR0VYID0gLyhbYS16QS1aXVthLXpBLVowLTkrLi1dezAsNjR9OlxcL1xcLylbXlxccy9AOl17MSwyNTZ9KD86OlteXFxzL0BdezAsMjU2fSk/QC9nXG5cbmV4cG9ydCBjb25zdCBSRURBQ1RFRF9LRVlTID0gW1xuICAgICd1c2VyJywgJ2tleScsXG4gICAgJ3VzZXJOYW1lJywgJ2FjY2Vzc0tleScsXG4gICAgJ2Jyb3dzZXJzdGFjay51c2VyJywgJ2Jyb3dzZXJzdGFjay5rZXknLFxuICAgICdicm93c2Vyc3RhY2sudXNlck5hbWUnLCAnYnJvd3NlcnN0YWNrLmFjY2Vzc0tleScsXG4gICAgJ3Bhc3N3b3JkJywgJ3Byb3h5UGFzc3dvcmQnLCAncHJveHlVc2VyJywgJ3Byb3h5UGFzcycsXG4gICAgJ2xvY2FsUHJveHlVc2VyJywgJ2xvY2FsUHJveHlQYXNzJywgJ3Byb3h5VXJsJyxcbiAgICAnYXV0aFRva2VuJywgJ2FwaUtleScsICdhY2Nlc3NUb2tlbicsICdzZWNyZXQnLCAndG9rZW4nLFxuICAgICdjdXN0b21WYXJpYWJsZXMnLCAndXNlcl9kYXRhJywgJ2h0dHBQcm94eScsICdodHRwc1Byb3h5J1xuXVxuXG5leHBvcnQgY29uc3QgUEVSQ1lfRE9NX0NIQU5HSU5HX0NPTU1BTkRTX0VORFBPSU5UUyA9IFtcbiAgICAnL3Nlc3Npb24vOnNlc3Npb25JZC91cmwnLFxuICAgICcvc2Vzc2lvbi86c2Vzc2lvbklkL2ZvcndhcmQnLFxuICAgICcvc2Vzc2lvbi86c2Vzc2lvbklkL2JhY2snLFxuICAgICcvc2Vzc2lvbi86c2Vzc2lvbklkL3JlZnJlc2gnLFxuICAgICcvc2Vzc2lvbi86c2Vzc2lvbklkL3NjcmVlbnNob3QnLFxuICAgICcvc2Vzc2lvbi86c2Vzc2lvbklkL2FjdGlvbnMnLFxuICAgICcvc2Vzc2lvbi86c2Vzc2lvbklkL2FwcGl1bS9kZXZpY2Uvc2hha2UnXG5dXG5cbmV4cG9ydCBjb25zdCBDQVBUVVJFX01PREVTID0gWydjbGljaycsICdhdXRvJywgJ3NjcmVlbnNob3QnLCAnbWFudWFsJywgJ3Rlc3RjYXNlJ11cbmV4cG9ydCBjb25zdCBMT0dfS0lORF9VU0FHRV9NQVAgPSB7XG4gICAgJ1RFU1RfTE9HJzogJ2xvZycsXG4gICAgJ1RFU1RfU0NSRUVOU0hPVCc6ICdzY3JlZW5zaG90JyxcbiAgICAnVEVTVF9TVEVQJzogJ3N0ZXAnLFxuICAgICdIVFRQJzogJ2h0dHAnXG59XG5cbmV4cG9ydCBjb25zdCBGVU5ORUxfSU5TVFJVTUVOVEFUSU9OX1VSTCA9ICdodHRwczovL2FwaS5icm93c2Vyc3RhY2suY29tL3Nkay92MS9ldmVudCdcblxuZXhwb3J0IGNvbnN0IEVEU19VUkwgPSAnaHR0cHM6Ly9lZHMuYnJvd3NlcnN0YWNrLmNvbSdcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9CUk9XU0VSU19GT1JfQUkgPSBbJ2Nocm9tZScsICdtaWNyb3NvZnRlZGdlJywgJ2ZpcmVmb3gnXVxuXG5leHBvcnQgY29uc3QgVENHX1VSTCA9ICdodHRwczovL3RjZy5icm93c2Vyc3RhY2suY29tJ1xuXG5leHBvcnQgY29uc3QgVENHX0lORk8gPSB7XG4gICAgdGNnUmVnaW9uOiAndXNlJyxcbiAgICB0Y2dVcmw6IFRDR19VUkwsXG59XG5cbi8vIFNtYXJ0IFNlbGVjdGlvbiBNb2RlIENvbnN0YW50c1xuZXhwb3J0IGNvbnN0IFNNQVJUX1NFTEVDVElPTl9NT0RFX1JFTEVWQU5UX0ZJUlNUID0gJ3JlbGV2YW50Rmlyc3QnXG5leHBvcnQgY29uc3QgU01BUlRfU0VMRUNUSU9OX01PREVfUkVMRVZBTlRfT05MWSA9ICdyZWxldmFudE9ubHknXG5cbi8vIEVudiB2YXJpYWJsZXMgLSBEZWZpbmUgYWxsIHRoZSBlbnYgdmFyaWFibGUgY29uc3RhbnRzIG92ZXIgaGVyZVxuXG4vLyBUbyBzdG9yZSB0aGUgSldUIHRva2VuIHJldHVybmVkIHRoZSBzZXNzaW9uIGxhdW5jaFxuZXhwb3J0IGNvbnN0IEJST1dTRVJTVEFDS19URVNUSFVCX0pXVCA9ICdCUk9XU0VSU1RBQ0tfVEVTVEhVQl9KV1QnXG5cbi8vIFRvIHN0b3JlIHRjZyBhdXRoIHJlc3VsdCBmb3Igc2VsZkhlYWxpbmcgZmVhdHVyZTpcbmV4cG9ydCBjb25zdCBCU1RBQ0tfVENHX0FVVEhfUkVTVUxUID0gJ0JTVEFDS19UQ0dfQVVUSF9SRVNVTFQnXG5cbi8vIFRvIHN0b3JlIHRoZSBzZXR0aW5nIG9mIHdoZXRoZXIgdG8gc2VuZCBzY3JlZW5zaG90cyBvciBub3RcbmV4cG9ydCBjb25zdCBURVNUT1BTX1NDUkVFTlNIT1RfRU5WID0gJ0JTX1RFU1RPUFNfQUxMT1dfU0NSRUVOU0hPVFMnXG5cbi8vIFRvIHN0b3JlIGJ1aWxkIGhhc2hlZCBpZFxuZXhwb3J0IGNvbnN0IEJST1dTRVJTVEFDS19URVNUSFVCX1VVSUQgPSAnQlJPV1NFUlNUQUNLX1RFU1RIVUJfVVVJRCdcbi8vIEludGVycnVwdCBzaWduYWwsIHByb3BhZ2F0ZWQgdmlhIGVudiBzbyB0aGUgZGV0YWNoZWQgY2xlYW51cCBjaGlsZCBhbmQgZ1JQQ1xuLy8gc3RvcCBwYXRoIGNhbiBzdGFtcCB0aGUga2lsbCByZWFzb24gb250byB0aGUgYnVpbGQgc3RvcC5cbmV4cG9ydCBjb25zdCBCUk9XU0VSU1RBQ0tfS0lMTF9TSUdOQUwgPSAnQlJPV1NFUlNUQUNLX1NES19LSUxMX1NJR05BTCdcblxuLy8gVG8gc3RvcmUgdGVzdCBydW4gdXVpZFxuZXhwb3J0IGNvbnN0IFRFU1RfQU5BTFlUSUNTX0lEID0gJ1RFU1RfQU5BTFlUSUNTX0lEJ1xuXG4vLyBXaGV0aGVyIHRvIGNvbGxlY3QgcGVyZm9ybWFuY2UgaW5zdHJ1bWVudGF0aW9uIG9yIG5vdFxuZXhwb3J0IGNvbnN0IFBFUkZfTUVBU1VSRU1FTlRfRU5WID0gJ0JST1dTRVJTVEFDS19PMTFZX1BFUkZfTUVBU1VSRU1FTlQnXG5cbi8vIFdoZXRoZXIgdGhlIGN1cnJlbnQgcnVuIGlzIHJlcnVuIG9yIG5vdFxuZXhwb3J0IGNvbnN0IFJFUlVOX1RFU1RTX0VOViA9ICdCUk9XU0VSU1RBQ0tfUkVSVU5fVEVTVFMnXG5cbi8vIFRoZSB0ZXN0cyB0aGF0IG5lZWRzIHRvIGJlIHJlcnVuXG5leHBvcnQgY29uc3QgUkVSVU5fRU5WID0gJ0JST1dTRVJTVEFDS19SRVJVTidcblxuLy8gVG8gc3RvcmUgd2hldGhlciB0aGUgYnVpbGQgbGF1bmNoIGhhcyBjb21wbGV0ZWQgb3Igbm90XG5leHBvcnQgY29uc3QgVEVTVE9QU19CVUlMRF9DT01QTEVURURfRU5WID0gJ0JTX1RFU1RPUFNfQlVJTERfQ09NUExFVEVEJ1xuXG4vLyBXaGV0aGVyIHBlcmN5IGhhcyBzdGFydGVkIHN1Y2Nlc3NmdWxseSBvciBub3RcbmV4cG9ydCBjb25zdCBCUk9XU0VSU1RBQ0tfUEVSQ1kgPSAnQlJPV1NFUlNUQUNLX1BFUkNZJ1xuXG4vLyBXaGV0aGVyIHNlc3Npb24gaXMgYSBhY2Nlc3NpYmlsaXR5IHNlc3Npb25cbmV4cG9ydCBjb25zdCBCUk9XU0VSU1RBQ0tfQUNDRVNTSUJJTElUWSA9ICdCUk9XU0VSU1RBQ0tfQUNDRVNTSUJJTElUWSdcblxuLy8gV2hldGhlciBzZXNzaW9uIGlzIGEgdGVzdCByZXBvcnRpbmcgc2Vzc2lvblxuZXhwb3J0IGNvbnN0IEJST1dTRVJTVEFDS19PQlNFUlZBQklMSVRZID0gJ0JST1dTRVJTVEFDS19PQlNFUlZBQklMSVRZJ1xuXG4vLyBMb2FkIFRlc3RpbmcgU2VydmljZSAoTFRTKSBlbnYgdmFyczogdGhlIHBvZC1pdGVyYXRpb24gc2Vzc2lvbiBpZCAoaXRzXG4vLyBwcmVzZW5jZSBpcyB0aGUgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aCBmb3IgXCJ0aGlzIHJ1biBpcyBhbiBMVFMgcG9kXG4vLyBpdGVyYXRpb25cIikgYW5kIGFuIG9wdGlvbmFsIG9wdC1pbiBmbGFnIGZvciBsb2NhbCByZXBybyAvIENJIHJ1bnMgdGhhdFxuLy8gZG9uJ3QgaGF2ZSBhIHJlYWwgc2Vzc2lvbiBpZC5cbmV4cG9ydCBjb25zdCBCUk9XU0VSU1RBQ0tfTFRTX1NFU1NJT05fSUQgPSAnQlJPV1NFUlNUQUNLX0xUU19TRVNTSU9OX0lEJ1xuZXhwb3J0IGNvbnN0IEJST1dTRVJTVEFDS19MVFMgPSAnQlJPV1NFUlNUQUNLX0xUUydcblxuLy8gTmV3IFRlc3QgUmVwb3J0aW5nIGFuZCBBbmFseXRpY3MgZW52aXJvbm1lbnQgdmFyaWFibGVzXG5leHBvcnQgY29uc3QgQlJPV1NFUlNUQUNLX1RFU1RfUkVQT1JUSU5HID0gJ0JST1dTRVJTVEFDS19URVNUX1JFUE9SVElORydcbmV4cG9ydCBjb25zdCBCUk9XU0VSU1RBQ0tfVEVTVF9SRVBPUlRJTkdfREVCVUcgPSAnQlJPV1NFUlNUQUNLX1RFU1RfUkVQT1JUSU5HX0RFQlVHJ1xuZXhwb3J0IGNvbnN0IFRFU1RfUkVQT1JUSU5HX0JVSUxEX1RBRyA9ICdURVNUX1JFUE9SVElOR19CVUlMRF9UQUcnXG5leHBvcnQgY29uc3QgVEVTVF9SRVBPUlRJTkdfUFJPSkVDVF9OQU1FID0gJ1RFU1RfUkVQT1JUSU5HX1BST0pFQ1RfTkFNRSdcbmV4cG9ydCBjb25zdCBURVNUX1JFUE9SVElOR19CVUlMRF9OQU1FID0gJ1RFU1RfUkVQT1JUSU5HX0JVSUxEX05BTUUnXG5cbi8vIE1heGltdW0gc2l6ZSBvZiBWQ1MgaW5mbyB3aGljaCBpcyBhbGxvd2VkXG5leHBvcnQgY29uc3QgTUFYX0dJVF9NRVRBX0RBVEFfU0laRV9JTl9CWVRFUyA9IDY0ICogMTAyNFxuXG4vKiBUaGUgdmFsdWUgdG8gYmUgYXBwZW5kZWQgYXQgdGhlIGVuZCBpZiBnaXQgbWV0YWRhdGEgaXMgbGFyZ2VyIHRoYW4gTUFYX0dJVF9NRVRBX0RBVEFfU0laRV9JTl9CWVRFU1xuKi9cbmV4cG9ydCBjb25zdCBHSVRfTUVUQV9EQVRBX1RSVU5DQVRFRCA9ICcuLi5bVFJVTkNBVEVEXSdcblxuLy8gQ0xJIHJlbGF0ZWQgY29uc3RhbnRzXG5leHBvcnQgY29uc3QgQ0xJX1NUT1BfVElNRU9VVCA9IDUwMDAgLy8gNSBzZWNvbmRzXG5leHBvcnQgY29uc3QgQklOQVJZX0JVU1lfRVJST1JfQ09ERVMgPSBbJ0VUWFRCU1knLCAnRUJVU1knXVxuZXhwb3J0IGNvbnN0IE1BWF9TUEFXTl9SRVRSSUVTID0gM1xuZXhwb3J0IGNvbnN0IFNQQVdOX1JFVFJZX0RFTEFZX01TID0gMTAwMFxuZXhwb3J0IGNvbnN0IFdESU9fTkFNSU5HX1BSRUZJWCA9ICdXZWJkcml2ZXJJTy0nXG5leHBvcnQgY29uc3QgUEVSRl9NRVRSSUNTX1dBSVRfVElNRSA9IDIwMDBcblxuLy8gQnVpbGQtc3RvcCBkZWxpdmVyeSBidWRnZXQuIFRoZSBzdG9wIFBVVCBpcyB0aGUgb25seSBzaWduYWwgdGhhdCBjbG9zZXMgYSBUUkEgYnVpbGQsXG4vLyBzbyBhIHRyYW5zaWVudCB0cmFuc3BvcnQgZmFpbHVyZSBpcyB3b3J0aCByZXRyeWluZyBwYXN0IGEgc2hvcnQgbmV0d29yayBibGlwIFx1MjAxNCBidXQgdGhlXG4vLyB3aG9sZSB0aGluZyBydW5zIGR1cmluZyBzaHV0ZG93biwgc28gdGhlIHRvdGFsIGNvc3QgaXMgY2FwcGVkIGJ5IGEgd2FsbC1jbG9jayBkZWFkbGluZVxuLy8gcmF0aGVyIHRoYW4gYnkgYXR0ZW1wdCBjb3VudCBhbG9uZS5cbmV4cG9ydCBjb25zdCBTVE9QX0JVSUxEX01BWF9BVFRFTVBUUyA9IDRcbmV4cG9ydCBjb25zdCBTVE9QX0JVSUxEX0FUVEVNUFRfVElNRU9VVF9NUyA9IDEwMDAwXG5leHBvcnQgY29uc3QgU1RPUF9CVUlMRF9UT1RBTF9CVURHRVRfTVMgPSAzMDAwMFxuZXhwb3J0IGNvbnN0IFNUT1BfQlVJTERfQkFDS09GRl9CQVNFX01TID0gMTAwMFxuXG4vLyBBUEkgRW5kcG9pbnQgY29uc3RhbnRzXG5leHBvcnQgY29uc3QgVVBEQVRFRF9DTElfRU5EUE9JTlQgPSAnc2RrL3YxL3VwZGF0ZV9jbGknXG5cbi8qKlxuICogTW9kdWxlIEhvb2sgRXZlbnRzIC0gUGVyZm9ybWFuY2UgZXZlbnQgbmFtZXMgZm9yIG1vZHVsZSBsaWZlY3ljbGUgdHJhY2tpbmdcbiAqIFVzZWQgYnkgbW9kdWxlLWhvb2stdHJhY2tlci50cyB0byBpbnN0cnVtZW50IG1vZHVsZSBpbml0aWFsaXphdGlvbiBhbmQgY2xlYW51cFxuICovXG5leHBvcnQgY29uc3QgTU9EVUxFX0hPT0tfRVZFTlRTID0ge1xuICAgIC8vIEluc3RydW1lbnRhdGlvbiBtb2R1bGVcbiAgICBJTlNUUlVNRU5UQVRJT05fT05fU1RBUlQ6ICdNT0RVTEVfSU5TVFJVTUVOVEFUSU9OX09OX1NUQVJUJyxcbiAgICBJTlNUUlVNRU5UQVRJT05fT05fU1RPUDogJ01PRFVMRV9JTlNUUlVNRU5UQVRJT05fT05fU1RPUCcsXG5cbiAgICAvLyBUZXN0SHViIG1vZHVsZVxuICAgIFRFU1RIVUJfT05fU1RBUlQ6ICdNT0RVTEVfVEVTVEhVQl9PTl9TVEFSVCcsXG4gICAgVEVTVEhVQl9PTl9TVE9QOiAnTU9EVUxFX1RFU1RIVUJfT05fU1RPUCcsXG5cbiAgICAvLyBPYnNlcnZhYmlsaXR5IG1vZHVsZVxuICAgIE9CU0VSVkFCSUxJVFlfT05fU1RBUlQ6ICdNT0RVTEVfT0JTRVJWQUJJTElUWV9PTl9TVEFSVCcsXG4gICAgT0JTRVJWQUJJTElUWV9PTl9TVE9QOiAnTU9EVUxFX09CU0VSVkFCSUxJVFlfT05fU1RPUCcsXG5cbiAgICAvLyBQZXJjeSBtb2R1bGVcbiAgICBQRVJDWV9PTl9TVEFSVDogJ01PRFVMRV9QRVJDWV9PTl9TVEFSVCcsXG4gICAgUEVSQ1lfT05fU1RPUDogJ01PRFVMRV9QRVJDWV9PTl9TVE9QJyxcblxuICAgIC8vIEFjY2Vzc2liaWxpdHkgbW9kdWxlXG4gICAgQUNDRVNTSUJJTElUWV9PTl9TVEFSVDogJ01PRFVMRV9BQ0NFU1NJQklMSVRZX09OX1NUQVJUJyxcbiAgICBBQ0NFU1NJQklMSVRZX09OX1NUT1A6ICdNT0RVTEVfQUNDRVNTSUJJTElUWV9PTl9TVE9QJyxcbiAgICBBQ0NFU1NJQklMSVRZX09OX0RSSVZFUl9JTklUOiAnTU9EVUxFX0FDQ0VTU0lCSUxJVFlfT05fRFJJVkVSX0lOSVQnLFxuXG4gICAgLy8gQUkgbW9kdWxlXG4gICAgQUlfT05fU1RBUlQ6ICdNT0RVTEVfQUlfT05fU1RBUlQnLFxuICAgIEFJX09OX1NUT1A6ICdNT0RVTEVfQUlfT05fU1RPUCcsXG4gICAgQUlfQkVGT1JFX1NFU1NJT046ICdNT0RVTEVfQUlfQkVGT1JFX1NFU1NJT04nLFxuICAgIEFJX09OX0RSSVZFUl9JTklUOiAnTU9EVUxFX0FJX09OX0RSSVZFUl9JTklUJyxcblxuICAgIC8vIExvY2FsIHRlc3RpbmcgbW9kdWxlXG4gICAgTE9DQUxfT05fU1RBUlQ6ICdNT0RVTEVfTE9DQUxfT05fU1RBUlQnLFxuICAgIExPQ0FMX09OX1NUT1A6ICdNT0RVTEVfTE9DQUxfT05fU1RPUCcsXG4gICAgTE9DQUxfSU5JVF9TRVNTSU9OOiAnTU9EVUxFX0xPQ0FMX0lOSVRfU0VTU0lPTicsXG4gICAgTE9DQUxfT05fRFJJVkVSX0lOSVQ6ICdNT0RVTEVfTE9DQUxfT05fRFJJVkVSX0lOSVQnLFxuXG4gICAgLy8gQXBwIEF1dG9tYXRlIG1vZHVsZVxuICAgIEFQUEFVVE9NQVRFX09OX1NUQVJUOiAnTU9EVUxFX0FQUEFVVE9NQVRFX09OX1NUQVJUJyxcbiAgICBBUFBBVVRPTUFURV9PTl9EUklWRVJfSU5JVDogJ01PRFVMRV9BUFBBVVRPTUFURV9PTl9EUklWRVJfSU5JVCcsXG59IGFzIGNvbnN0XG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJVXRpbHMge1xuICAgIHN0YXRpYyBGVU5ORUxfSU5TVFJVTUVOVEFUSU9OX1VSTCA9ICdodHRwczovL2FwaS5icm93c2Vyc3RhY2suY29tL3Nkay92MS9ldmVudCdcbiAgICBzdGF0aWMgQlJPV1NFUlNUQUNLX0FVVE9NQVRFX0FQSV9VUkwgPSAnaHR0cHM6Ly9hcGkuYnJvd3NlcnN0YWNrLmNvbSdcbiAgICBzdGF0aWMgQlJPV1NFUlNUQUNLX0FBX0FQSV9VUkwgPSAnaHR0cHM6Ly9hcGkuYnJvd3NlcnN0YWNrLmNvbSdcbiAgICBzdGF0aWMgQlJPV1NFUlNUQUNLX1BFUkNZX0FQSV9VUkwgPSAnaHR0cHM6Ly9hcGkuYnJvd3NlcnN0YWNrLmNvbSdcbiAgICBzdGF0aWMgQlJPV1NFUlNUQUNLX0FVVE9NQVRFX0FQSV9DTE9VRF9VUkwgPSAnaHR0cHM6Ly9hcGktY2xvdWQuYnJvd3NlcnN0YWNrLmNvbSdcbiAgICBzdGF0aWMgQlJPV1NFUlNUQUNLX0FBX0FQSV9DTE9VRF9VUkwgPSAnaHR0cHM6Ly9hcGktY2xvdWQuYnJvd3NlcnN0YWNrLmNvbSdcbiAgICBzdGF0aWMgQVBQX0FMTFlfRU5EUE9JTlQgPSAnaHR0cHM6Ly9hcHAtYWNjZXNzaWJpbGl0eS5icm93c2Vyc3RhY2suY29tL2F1dG9tYXRlJ1xuICAgIHN0YXRpYyBEQVRBX0VORFBPSU5UID0gJ2h0dHBzOi8vY29sbGVjdG9yLW9ic2VydmFiaWxpdHkuYnJvd3NlcnN0YWNrLmNvbSdcbiAgICBzdGF0aWMgVVBMT0FEX0xPR1NfQUREUkVTUyA9ICdodHRwczovL3VwbG9hZC1vYnNlcnZhYmlsaXR5LmJyb3dzZXJzdGFjay5jb20nXG4gICAgc3RhdGljIEVEU19VUkwgPSAnaHR0cHM6Ly9lZHMuYnJvd3NlcnN0YWNrLmNvbSdcblxuICAgIHN0YXRpYyB1cGRhdGVVUkxTRm9yR1JSKGFwaXM6IEdSUlVybHMpIHtcbiAgICAgICAgdGhpcy5GVU5ORUxfSU5TVFJVTUVOVEFUSU9OX1VSTCA9IGAke2FwaXMuYXV0b21hdGUuYXBpfS9zZGsvdjEvZXZlbnRgXG4gICAgICAgIHRoaXMuQlJPV1NFUlNUQUNLX0FVVE9NQVRFX0FQSV9VUkwgPSBhcGlzLmF1dG9tYXRlLmFwaVxuICAgICAgICB0aGlzLkJST1dTRVJTVEFDS19BQV9BUElfVVJMID0gYXBpcy5hcHBBdXRvbWF0ZS5hcGlcbiAgICAgICAgdGhpcy5CUk9XU0VSU1RBQ0tfUEVSQ1lfQVBJX1VSTCA9IGFwaXMucGVyY3kuYXBpXG4gICAgICAgIHRoaXMuQlJPV1NFUlNUQUNLX0FVVE9NQVRFX0FQSV9DTE9VRF9VUkwgPSBhcGlzLmF1dG9tYXRlLnVwbG9hZFxuICAgICAgICB0aGlzLkJST1dTRVJTVEFDS19BQV9BUElfQ0xPVURfVVJMID0gYXBpcy5hcHBBdXRvbWF0ZS51cGxvYWRcbiAgICAgICAgdGhpcy5BUFBfQUxMWV9FTkRQT0lOVCA9IGAke2FwaXMuYXBwQWNjZXNzaWJpbGl0eS5hcGl9L2F1dG9tYXRlYFxuICAgICAgICB0aGlzLkRBVEFfRU5EUE9JTlQgPSBhcGlzLm9ic2VydmFiaWxpdHkuYXBpXG4gICAgICAgIHRoaXMuVVBMT0FEX0xPR1NfQUREUkVTUyA9IGFwaXMub2JzZXJ2YWJpbGl0eS51cGxvYWRcbiAgICAgICAgdGhpcy5FRFNfVVJMID0gYXBpcy5lZHNJbnN0cnVtZW50YXRpb24uYXBpXG4gICAgfVxufVxuIiwgImltcG9ydCBmcyBmcm9tICdub2RlOmZzJ1xuaW1wb3J0IGZzcCBmcm9tICdub2RlOmZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgcGxhdGZvcm0sIGFyY2gsIGhvbWVkaXIgfSBmcm9tICdub2RlOm9zJ1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHV0aWwsIHsgcHJvbWlzaWZ5IH0gZnJvbSAnbm9kZTp1dGlsJ1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gJ25vZGU6Y2hpbGRfcHJvY2VzcydcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSAnbm9kZTpzdHJlYW0nXG5pbXBvcnQgdHlwZSB7IFppcEZpbGUsIE9wdGlvbnMgYXMgeWF1emxPcHRpb25zIH0gZnJvbSAneWF1emwnXG5pbXBvcnQgeWF1emwgZnJvbSAneWF1emwnXG5pbXBvcnQgeyB0aHJlYWRJZCB9IGZyb20gJ25vZGU6d29ya2VyX3RocmVhZHMnXG5cbmltcG9ydCB7IF9mZXRjaCBhcyBmZXRjaCB9IGZyb20gJy4uL2ZldGNoV3JhcHBlci5qcydcblxuaW1wb3J0IHtcbiAgICBpc051bGxPckVtcHR5LFxuICAgIG5lc3RlZEtleVZhbHVlLFxuICAgIGNyZWF0ZURpcixcbiAgICBpc1dyaXRhYmxlLFxuICAgIHNldFJlYWRXcml0ZUFjY2VzcyxcbiAgICBpc1RydWUsXG4gICAgZ2V0QnJvd3NlclN0YWNrVXNlcixcbiAgICBnZXRCcm93c2VyU3RhY2tLZXksXG4gICAgaXNGYWxzZSxcbiAgICBpc1R1cmJvU2NhbGUsXG4gICAgc2hvdWxkQWRkU2VydmljZVZlcnNpb24sXG59IGZyb20gJy4uL3V0aWwuanMnXG5pbXBvcnQgUGVyZm9ybWFuY2VUZXN0ZXIgZnJvbSAnLi4vaW5zdHJ1bWVudGF0aW9uL3BlcmZvcm1hbmNlL3BlcmZvcm1hbmNlLXRlc3Rlci5qcydcbmltcG9ydCB7IEVWRU5UUyBhcyBQZXJmb3JtYW5jZUV2ZW50cyB9IGZyb20gJy4uL2luc3RydW1lbnRhdGlvbi9wZXJmb3JtYW5jZS9jb25zdGFudHMuanMnXG5pbXBvcnQgeyBCU3RhY2tMb2dnZXIgYXMgbG9nZ2VyIH0gZnJvbSAnLi9jbGlMb2dnZXIuanMnXG5pbXBvcnQgeyBVUERBVEVEX0NMSV9FTkRQT0lOVCwgQlNUQUNLX1NFUlZJQ0VfVkVSU0lPTiwgQklOQVJZX0JVU1lfRVJST1JfQ09ERVMgfSBmcm9tICcuLi9jb25zdGFudHMuanMnXG5pbXBvcnQgdHlwZSB7IE9wdGlvbnMsIENhcGFiaWxpdGllcyB9IGZyb20gJ0B3ZGlvL3R5cGVzJ1xuaW1wb3J0IHR5cGUge1xuICAgIEJyb3dzZXJzdGFja0NvbmZpZyxcbiAgICBCcm93c2Vyc3RhY2tPcHRpb25zLFxuICAgIFRlc3RNYW5hZ2VtZW50T3B0aW9ucyxcbiAgICBUZXN0T2JzZXJ2YWJpbGl0eU9wdGlvbnMsXG59IGZyb20gJy4uL3R5cGVzLmpzJ1xuaW1wb3J0IHsgVGVzdEZyYW1ld29ya0NvbnN0YW50cyB9IGZyb20gJy4vZnJhbWV3b3Jrcy9jb25zdGFudHMvdGVzdEZyYW1ld29ya0NvbnN0YW50cy5qcydcbmltcG9ydCBBUElVdGlscyBmcm9tICcuL2FwaVV0aWxzLmpzJ1xuXG5jb25zdCBDTElfTE9DS19USU1FT1VUX01TID0gNSAqIDYwICogMTAwMFxuY29uc3QgQ0xJX0xPQ0tfUE9MTF9NUyA9IDEwMDBcbmNvbnN0IENMSV9ET1dOTE9BRF9USU1FT1VUX01TID0gNSAqIDYwICogMTAwMFxuY29uc3QgQ0xJX0RPV05MT0FEX1RNUF9QUkVGSVggPSAnZG93bmxvYWRlZF9maWxlXydcbmNvbnN0IENMSV9ET1dOTE9BRF9UTVBfU1VGRklYID0gJy56aXAnXG5cbmV4cG9ydCBjbGFzcyBDTElVdGlscyB7XG4gICAgc3RhdGljIGF1dG9tYXRpb25GcmFtZXdvcmtEZXRhaWwgPSB7fVxuICAgIHN0YXRpYyB0ZXN0RnJhbWV3b3JrRGV0YWlsID0ge31cbiAgICBzdGF0aWMgQ0xJU3VwcG9ydGVkRnJhbWV3b3JrcyA9IFsnbW9jaGEnXVxuXG4gICAgc3RhdGljIGlzRGV2ZWxvcG1lbnRFbnYoKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5CUk9XU0VSU1RBQ0tfQ0xJX0VOViA9PT0gJ2RldmVsb3BtZW50J1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDTElQYXJhbXNGb3JEZXZFbnYoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX0NMSV9FTlYgfHwgJycsXG4gICAgICAgICAgICBsaXN0ZW46IGB1bml4Oi90bXAvc2RrLXBsYXRmb3JtLSR7cHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX0NMSV9FTlZ9LnNvY2tgLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgY29uZmlnIG9iamVjdCBmb3IgYmluYXJ5IHNlc3Npb24gcmVxdWVzdFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICogQHRocm93cyB7RXJyb3J9XG4gICAgICovXG4gICAgc3RhdGljIGdldEJpbkNvbmZpZyhcbiAgICAgICAgY29uZmlnOiBPcHRpb25zLlRlc3RydW5uZXIsXG4gICAgICAgIGNhcGFiaWxpdGllczpcbiAgICAgICAgICAgIHwgQ2FwYWJpbGl0aWVzLlJlcXVlc3RlZFN0YW5kYWxvbmVDYXBhYmlsaXRpZXNcbiAgICAgICAgICAgIHwgQ2FwYWJpbGl0aWVzLlJlcXVlc3RlZFN0YW5kYWxvbmVDYXBhYmlsaXRpZXNbXSxcbiAgICAgICAgb3B0aW9uczogQnJvd3NlcnN0YWNrQ29uZmlnICYgQnJvd3NlcnN0YWNrT3B0aW9ucyxcbiAgICAgICAgYnVpbGRUYWc/OiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVkT3B0czogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7IC4uLm9wdGlvbnMgfVxuICAgICAgICBpZiAobW9kaWZpZWRPcHRzLm9wdHMpIHtcbiAgICAgICAgICAgIG1vZGlmaWVkT3B0cy5icm93c2VyU3RhY2tMb2NhbE9wdGlvbnMgPSBtb2RpZmllZE9wdHMub3B0c1xuICAgICAgICAgICAgZGVsZXRlIG1vZGlmaWVkT3B0cy5vcHRzXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIG1vZGlmaWVkT3B0cy50ZXN0TWFuYWdlbWVudE9wdGlvbnNcblxuICAgICAgICBtb2RpZmllZE9wdHMudGVzdENvbnRleHRPcHRpb25zID0ge1xuICAgICAgICAgICAgc2tpcFNlc3Npb25OYW1lOiBpc0ZhbHNlKG1vZGlmaWVkT3B0cy5zZXRTZXNzaW9uTmFtZSksXG4gICAgICAgICAgICBza2lwU2Vzc2lvblN0YXR1czogaXNGYWxzZShtb2RpZmllZE9wdHMuc2V0U2Vzc2lvblN0YXR1cyksXG4gICAgICAgICAgICBzZXNzaW9uTmFtZU9taXRUZXN0VGl0bGU6IG1vZGlmaWVkT3B0cy5zZXNzaW9uTmFtZU9taXRUZXN0VGl0bGUgfHwgZmFsc2UsXG4gICAgICAgICAgICBzZXNzaW9uTmFtZVByZXBlbmRUb3BMZXZlbFN1aXRlVGl0bGU6XG4gICAgICAgICAgICAgICAgbW9kaWZpZWRPcHRzLnNlc3Npb25OYW1lUHJlcGVuZFRvcExldmVsU3VpdGVUaXRsZSB8fCBmYWxzZSxcbiAgICAgICAgICAgIHNlc3Npb25OYW1lRm9ybWF0OiBtb2RpZmllZE9wdHMuc2Vzc2lvbk5hbWVGb3JtYXQgfHwgJycsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21tb25Cc3RhY2tPcHRpb25zID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjYXBhYmlsaXRpZXMgJiZcbiAgICAgICAgICAgICAgICAhQXJyYXkuaXNBcnJheShjYXBhYmlsaXRpZXMpICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGNhcGFiaWxpdGllcyA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgICAnYnN0YWNrOm9wdGlvbnMnIGluIChjYXBhYmlsaXRpZXMgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBDYXN0IGFmdGVyIGd1YXJkIHRvIHNhdGlzZnkgVHlwZVNjcmlwdFxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcGFiaWxpdGllcyBhcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydic3RhY2s6b3B0aW9ucyddPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClbJ2JzdGFjazpvcHRpb25zJ10gfHwge31cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgfSkoKVxuXG4gICAgICAgIGNvbnN0IGlzTm9uQnN0YWNrQTExeSA9XG4gICAgICAgICAgICBpc1R1cmJvU2NhbGUob3B0aW9ucykgfHxcbiAgICAgICAgICAgICFzaG91bGRBZGRTZXJ2aWNlVmVyc2lvbihcbiAgICAgICAgICAgICAgICBjb25maWcgYXMgT3B0aW9ucy5UZXN0cnVubmVyLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMudGVzdE9ic2VydmFiaWxpdHksXG4gICAgICAgICAgICApXG4gICAgICAgIGNvbnN0IG9ic2VydmFiaWxpdHlPcHRpb25zOiBUZXN0T2JzZXJ2YWJpbGl0eU9wdGlvbnMgPVxuICAgICAgICAgICAgb3B0aW9ucy50ZXN0T2JzZXJ2YWJpbGl0eU9wdGlvbnMgfHwge31cbiAgICAgICAgY29uc3QgdGVzdE1hbmFnZW1lbnRPcHRpb25zOiBUZXN0TWFuYWdlbWVudE9wdGlvbnMgPVxuICAgICAgICAgICAgb3B0aW9ucy50ZXN0TWFuYWdlbWVudE9wdGlvbnMgfHwge31cbiAgICAgICAgY29uc3QgdGVzdFBsYW5JZCA9IHR5cGVvZiB0ZXN0TWFuYWdlbWVudE9wdGlvbnMudGVzdFBsYW5JZCA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gdGVzdE1hbmFnZW1lbnRPcHRpb25zLnRlc3RQbGFuSWQudHJpbSgpXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIGNvbnN0IGJpbmNvbmZpZzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgICAgICAgICB1c2VyTmFtZTogb2JzZXJ2YWJpbGl0eU9wdGlvbnMudXNlciB8fCBjb25maWcudXNlcixcbiAgICAgICAgICAgIGFjY2Vzc0tleTogb2JzZXJ2YWJpbGl0eU9wdGlvbnMua2V5IHx8IGNvbmZpZy5rZXksXG4gICAgICAgICAgICBwbGF0Zm9ybXM6IFtdLFxuICAgICAgICAgICAgaXNOb25Cc3RhY2tBMTF5V0RJTzogaXNOb25Cc3RhY2tBMTF5LFxuICAgICAgICAgICAgLi4ubW9kaWZpZWRPcHRzLFxuICAgICAgICAgICAgLi4uY29tbW9uQnN0YWNrT3B0aW9ucyxcbiAgICAgICAgfVxuXG4gICAgICAgIGJpbmNvbmZpZy5idWlsZE5hbWUgPSBvYnNlcnZhYmlsaXR5T3B0aW9ucy5idWlsZE5hbWUgfHwgYmluY29uZmlnLmJ1aWxkTmFtZVxuICAgICAgICBiaW5jb25maWcucHJvamVjdE5hbWUgPSBvYnNlcnZhYmlsaXR5T3B0aW9ucy5wcm9qZWN0TmFtZSB8fCBiaW5jb25maWcucHJvamVjdE5hbWVcbiAgICAgICAgYmluY29uZmlnLmJ1aWxkVGFnID0gdGhpcy5nZXRPYnNlcnZhYmlsaXR5QnVpbGRUYWdzKG9ic2VydmFiaWxpdHlPcHRpb25zLCBidWlsZFRhZykgfHwgW11cbiAgICAgICAgaWYgKHRlc3RQbGFuSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYmluY29uZmlnLnRlc3RNYW5hZ2VtZW50T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZXN0UGxhbklkLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2FwcyA9IEFycmF5LmlzQXJyYXkoY2FwYWJpbGl0aWVzKSA/IGNhcGFiaWxpdGllcyA6IFtjYXBhYmlsaXRpZXNdXG4gICAgICAgIGZvciAoY29uc3QgY2FwIG9mIGNhcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYXRmb3JtOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG4gICAgICAgICAgICBjb25zdCBjYXBhYmlsaXR5ID0gY2FwIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNhcGFiaWxpdHkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiBrZXkgIT09ICdic3RhY2s6b3B0aW9ucycpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybVtrZXldID0gY2FwYWJpbGl0eVtrZXldXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGNhcGFiaWxpdHlbJ2JzdGFjazpvcHRpb25zJ10pIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhcbiAgICAgICAgICAgICAgICAgICAgY2FwYWJpbGl0eVsnYnN0YWNrOm9wdGlvbnMnXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgICAgICAgICAgICApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybVtrZXldID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FwYWJpbGl0eVsnYnN0YWNrOm9wdGlvbnMnXSBhcyBSZWNvcmQ8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVua25vd25cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgKVtrZXldXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChiaW5jb25maWcucGxhdGZvcm1zIGFzIEFycmF5PHVua25vd24+KS5wdXNoKHBsYXRmb3JtKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShiaW5jb25maWcpXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNka1ZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiBCU1RBQ0tfU0VSVklDRV9WRVJTSU9OXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNka0xhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gJ0VDTUFTY3JpcHQnXG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIHNldHVwQ2xpUGF0aChcbiAgICAgICAgY29uZmlnOiBPcHRpb25zLlRlc3RydW5uZXIsXG4gICAgKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnQ29uZmlndXJpbmcgQ2xpIHBhdGguJylcbiAgICAgICAgY29uc3QgZGV2ZWxvcG1lbnRCaW5hcnlQYXRoID0gcHJvY2Vzcy5lbnYuU0RLX0NMSV9CSU5fUEFUSCB8fCBudWxsXG4gICAgICAgIGlmICghaXNOdWxsT3JFbXB0eShkZXZlbG9wbWVudEJpbmFyeVBhdGgpKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoYERldmVsb3BtZW50IENsaSBQYXRoOiAke2RldmVsb3BtZW50QmluYXJ5UGF0aH1gKVxuICAgICAgICAgICAgcmV0dXJuIGRldmVsb3BtZW50QmluYXJ5UGF0aFxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNsaURpciA9IHRoaXMuZ2V0Q2xpRGlyKClcbiAgICAgICAgICAgIGlmIChpc051bGxPckVtcHR5KGNsaURpcikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHdyaXRhYmxlIGRpcmVjdG9yeSBhdmFpbGFibGUgZm9yIHRoZSBDTEknKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdDbGlQYXRoID0gdGhpcy5nZXRFeGlzdGluZ0NsaVBhdGgoY2xpRGlyKVxuICAgICAgICAgICAgY29uc3QgZmluYWxCaW5hcnlQYXRoID0gYXdhaXQgdGhpcy5jaGVja0FuZFVwZGF0ZUNsaShcbiAgICAgICAgICAgICAgICBleGlzdGluZ0NsaVBhdGgsXG4gICAgICAgICAgICAgICAgY2xpRGlyLFxuICAgICAgICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgUmVzb2x2ZWQgYmluYXJ5IHBhdGg6ICR7ZmluYWxCaW5hcnlQYXRofWApXG4gICAgICAgICAgICByZXR1cm4gZmluYWxCaW5hcnlQYXRoXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgICAgIGBFcnJvciBpbiBzZXR0aW5nIHVwIGNsaSBwYXRoIGRpcmVjdG9yeSwgRXhjZXB0aW9uOiAke3V0aWwuZm9ybWF0KGVycil9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBjaGVja0FuZFVwZGF0ZUNsaShcbiAgICAgICAgZXhpc3RpbmdDbGlQYXRoOiBzdHJpbmcsXG4gICAgICAgIGNsaURpcjogc3RyaW5nLFxuICAgICAgICBjb25maWc6IE9wdGlvbnMuVGVzdHJ1bm5lcixcbiAgICApOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAgICAgLy8gU2tpcCBDTEkgdXBkYXRlIGluIHdvcmtlciBwcm9jZXNzZXMgLSBvbmx5IGxhdW5jaGVyIHNob3VsZCB1cGRhdGVcbiAgICAgICAgLy8gV29ya2VycyBhcmUgaWRlbnRpZmllZCBieSBoYXZpbmcgQlJPV1NFUlNUQUNLX1RFU1RIVUJfSldUIHNldCAoYnVpbGQgYWxyZWFkeSBzdGFydGVkKVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX1RFU1RIVUJfSldUKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAgICAgYFdvcmtlciBwcm9jZXNzIGRldGVjdGVkLCBza2lwcGluZyBDTEkgdXBkYXRlLiBVc2luZyBleGlzdGluZzogJHtleGlzdGluZ0NsaVBhdGh9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0NsaVBhdGggJiYgZnMuZXhpc3RzU3luYyhleGlzdGluZ0NsaVBhdGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nQ2xpUGF0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXG4gICAgICAgICAgICAgICAgJ1dvcmtlciBwcm9jZXNzIGhhcyBubyBleGlzdGluZyBDTEkgYmluYXJ5LCBhdHRlbXB0aW5nIGRvd25sb2FkIGFzIGZhbGxiYWNrLicsXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBQZXJmb3JtYW5jZVRlc3Rlci5zdGFydChQZXJmb3JtYW5jZUV2ZW50cy5TREtfQ0xJX0NIRUNLX1VQREFURSlcbiAgICAgICAgbG9nZ2VyLmluZm8oYEN1cnJlbnQgQ0xJIFBhdGggRm91bmQ6ICR7ZXhpc3RpbmdDbGlQYXRofWApXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgICAgICAgc2RrX3ZlcnNpb246IENMSVV0aWxzLmdldFNka1ZlcnNpb24oKSxcbiAgICAgICAgICAgIG9zOiBwbGF0Zm9ybSgpLFxuICAgICAgICAgICAgb3NfYXJjaDogYXJjaCgpLFxuICAgICAgICAgICAgY2xpX3ZlcnNpb246ICcwJyxcbiAgICAgICAgICAgIHNka19sYW5ndWFnZTogdGhpcy5nZXRTZGtMYW5ndWFnZSgpLFxuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOdWxsT3JFbXB0eShleGlzdGluZ0NsaVBhdGgpKSB7XG4gICAgICAgICAgICAvLyBJZiBiaW5hcnkgaXMgYnVzeSAoYmVpbmcgZXhlY3V0ZWQgYnkgYW5vdGhlciBwcm9jZXNzKSwgc2tpcCB2ZXJzaW9uIGNoZWNrXG4gICAgICAgICAgICAvLyBhbmQgQVBJIGNhbGwgZW50aXJlbHkgXHUyMDE0IHVzZSBleGlzdGluZyBiaW5hcnkgYXMtaXNcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQmluYXJ5QnVzeShleGlzdGluZ0NsaVBhdGgpKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYEV4aXN0aW5nIGJpbmFyeSBpcyBjdXJyZW50bHkgaW4gdXNlLCBza2lwcGluZyB1cGRhdGU6ICR7ZXhpc3RpbmdDbGlQYXRofWApXG4gICAgICAgICAgICAgICAgUGVyZm9ybWFuY2VUZXN0ZXIuZW5kKFBlcmZvcm1hbmNlRXZlbnRzLlNES19DTElfQ0hFQ0tfVVBEQVRFKVxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0NsaVBhdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHZlcnNpb24gPSBhd2FpdCB0aGlzLnJ1blNoZWxsQ29tbWFuZChcbiAgICAgICAgICAgICAgICBgJHtleGlzdGluZ0NsaVBhdGh9IHZlcnNpb25gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygndGV4dCBmaWxlIGJ1c3knKSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKGBCaW5hcnkgYnVzeSBkdXJpbmcgdmVyc2lvbiBjaGVjaywgc2tpcHBpbmcgdXBkYXRlOiAke2V4aXN0aW5nQ2xpUGF0aH1gKVxuICAgICAgICAgICAgICAgIFBlcmZvcm1hbmNlVGVzdGVyLmVuZChQZXJmb3JtYW5jZUV2ZW50cy5TREtfQ0xJX0NIRUNLX1VQREFURSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdDbGlQYXRoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyeVBhcmFtcy5jbGlfdmVyc2lvbiA9IHZlcnNpb25cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdFRvVXBkYXRlQ0xJKHF1ZXJ5UGFyYW1zLCBjb25maWcpXG4gICAgICAgIGlmIChuZXN0ZWRLZXlWYWx1ZShyZXNwb25zZSwgWyd1cGRhdGVkX2NsaV92ZXJzaW9uJ10pKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAgICAgYE5lZWQgdG8gdXBkYXRlIGJpbmFyeSwgY3VycmVudCBiaW5hcnkgdmVyc2lvbjogJHtxdWVyeVBhcmFtcy5jbGlfdmVyc2lvbn1gLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBjb25zdCBicm93c2VyU3RhY2tCaW5hcnlVcmwgPVxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LkJST1dTRVJTVEFDS19CSU5BUllfVVJMIHx8IG51bGxcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JFbXB0eShicm93c2VyU3RhY2tCaW5hcnlVcmwpKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgICAgICAgICBgVXNpbmcgQlJPV1NFUlNUQUNLX0JJTkFSWV9VUkw6ICR7YnJvd3NlclN0YWNrQmluYXJ5VXJsfWAsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnVybCA9IGJyb3dzZXJTdGFja0JpbmFyeVVybFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmaW5hbEJpbmFyeVBhdGggPSBhd2FpdCB0aGlzLmRvd25sb2FkTGF0ZXN0QmluYXJ5KFxuICAgICAgICAgICAgICAgIG5lc3RlZEtleVZhbHVlKHJlc3BvbnNlLCBbJ3VybCddKSxcbiAgICAgICAgICAgICAgICBjbGlEaXIsXG4gICAgICAgICAgICAgICAgbmVzdGVkS2V5VmFsdWUocmVzcG9uc2UsIFsndXBkYXRlZF9jbGlfdmVyc2lvbiddKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIFBlcmZvcm1hbmNlVGVzdGVyLmVuZChQZXJmb3JtYW5jZUV2ZW50cy5TREtfQ0xJX0NIRUNLX1VQREFURSlcbiAgICAgICAgICAgIHJldHVybiBmaW5hbEJpbmFyeVBhdGhcbiAgICAgICAgfVxuICAgICAgICBQZXJmb3JtYW5jZVRlc3Rlci5lbmQoUGVyZm9ybWFuY2VFdmVudHMuU0RLX0NMSV9DSEVDS19VUERBVEUpXG4gICAgICAgIHJldHVybiBleGlzdGluZ0NsaVBhdGhcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q2xpRGlyKCkge1xuICAgICAgICBjb25zdCB3cml0YWJsZURpciA9IHRoaXMuZ2V0V3JpdGFibGVEaXIoKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGlzTnVsbE9yRW1wdHkod3JpdGFibGVEaXIpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB3cml0YWJsZSBkaXJlY3RvcnkgYXZhaWxhYmxlIGZvciB0aGUgQ0xJJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsaURpclBhdGggPSBwYXRoLmpvaW4od3JpdGFibGVEaXIhLCAnY2xpJylcbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhjbGlEaXJQYXRoKSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZURpcihjbGlEaXJQYXRoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsaURpclBhdGhcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoXG4gICAgICAgICAgICAgICAgYEVycm9yIGluIGdldHRpbmcgd3JpdGFibGUgZGlyZWN0b3J5LCB3cml0YWJsZURpcj0ke3V0aWwuZm9ybWF0KGVycil9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFdyaXRhYmxlRGlyKCkge1xuICAgICAgICBjb25zdCB3cml0YWJsZURpck9wdGlvbnMgPSBbXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5CUk9XU0VSU1RBQ0tfRklMRVNfRElSLFxuICAgICAgICAgICAgcGF0aC5qb2luKGhvbWVkaXIoKSwgJy5icm93c2Vyc3RhY2snKSxcbiAgICAgICAgICAgIHBhdGguam9pbigndG1wJywgJy5icm93c2Vyc3RhY2snKSxcbiAgICAgICAgXVxuXG4gICAgICAgIGZvciAoY29uc3QgcGF0aCBvZiB3cml0YWJsZURpck9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChpc051bGxPckVtcHR5KHBhdGgpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aCEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgRmlsZSAke3BhdGh9IGFscmVhZHkgZXhpc3RgKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzV3JpdGFibGUocGF0aCEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYEdpdmluZyB3cml0ZSBwZXJtaXNzaW9uIHRvICR7cGF0aH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHNldFJlYWRXcml0ZUFjY2VzcyhwYXRoISlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNUcnVlKHN1Y2Nlc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBVbmFibGUgdG8gcHJvdmlkZSB3cml0ZSBwZXJtaXNzaW9uIHRvICR7cGF0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgRmlsZSBkb2VzIG5vdCBleGlzdDogJHtwYXRofWApXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURpcihwYXRoISlcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBHaXZpbmcgd3JpdGUgcGVybWlzc2lvbiB0byAke3BhdGh9YClcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHNldFJlYWRXcml0ZUFjY2VzcyhwYXRoISlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RydWUoc3VjY2VzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBVbmFibGUgdG8gcHJvdmlkZSB3cml0ZSBwZXJtaXNzaW9uIHRvICR7cGF0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBVbmFibGUgdG8gZ2V0IHdyaXRhYmxlIGRpcmVjdG9yeSwgZXhjZXB0aW9uICR7dXRpbC5mb3JtYXQoZXJyKX1gLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRFeGlzdGluZ0NsaVBhdGgoY2xpRGlyOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBwYXRoIGV4aXN0cyBhbmQgaXMgYSBkaXJlY3RvcnlcbiAgICAgICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhjbGlEaXIpIHx8ICFmcy5zdGF0U3luYyhjbGlEaXIpLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTGlzdCBhbGwgZmlsZXMgaW4gdGhlIGRpcmVjdG9yeSB0aGF0IHN0YXJ0IHdpdGggXCJiaW5hcnktXCJcbiAgICAgICAgICAgIGNvbnN0IGFsbEJpbmFyaWVzID0gZnNcbiAgICAgICAgICAgICAgICAucmVhZGRpclN5bmMoY2xpRGlyKVxuICAgICAgICAgICAgICAgIC5tYXAoKGZpbGU6IHN0cmluZykgPT4gcGF0aC5qb2luKGNsaURpciwgZmlsZSkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKGZpbGVQYXRoOiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpLnN0YXJ0c1dpdGgoJ2JpbmFyeS0nKSxcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChhbGxCaW5hcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBsYXRlc3QgYmluYXJ5IGJ5IGNvbXBhcmluZyB0aGUgbGFzdCBtb2RpZmllZCB0aW1lXG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ZXN0QmluYXJ5ID0gYWxsQmluYXJpZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoZmlsZVBhdGg6IHN0cmluZykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXRpbWU6IGZzLnN0YXRTeW5jKGZpbGVQYXRoKS5tdGltZSxcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0OiB7IGZpbGVQYXRoOiBzdHJpbmc7IG10aW1lOiBEYXRlIH0gfCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHsgZmlsZVBhdGg6IHN0cmluZzsgbXRpbWU6IERhdGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGF0ZXN0IHx8ICFsYXRlc3QubXRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5tdGltZSA+IGxhdGVzdC5tdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXRlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhdGVzdEJpbmFyeSA/IGxhdGVzdEJpbmFyeS5maWxlUGF0aCA6ICcnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAnJyAvLyBObyBiaW5hcnkgcHJlc2VudFxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRXJyb3Igd2hpbGUgcmVhZGluZyBDTEkgcGF0aDogJHt1dGlsLmZvcm1hdChlcnIpfWApXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBpc0JpbmFyeUJ1c3koYmluYXJ5UGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChpc051bGxPckVtcHR5KGJpbmFyeVBhdGgpKSB7cmV0dXJuIGZhbHNlfVxuICAgICAgICBpZiAocGxhdGZvcm0oKSA9PT0gJ2RhcndpbicpIHtyZXR1cm4gZmFsc2V9XG4gICAgICAgIGlmICghZnMuZXhpc3RzU3luYyhiaW5hcnlQYXRoKSkge3JldHVybiBmYWxzZX1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZmQgPSBmcy5vcGVuU3luYyhiaW5hcnlQYXRoLCAncisnKVxuICAgICAgICAgICAgZnMuY2xvc2VTeW5jKGZkKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICAgICBpZiAoQklOQVJZX0JVU1lfRVJST1JfQ09ERVMuaW5jbHVkZXMoZXJyLmNvZGUpKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBCaW5hcnkgaXMgYnVzeTogJHtiaW5hcnlQYXRofWApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgRXJyb3IgY2hlY2tpbmcgaWYgYmluYXJ5IGlzIGJ1c3k6ICR7ZXJyLm1lc3NhZ2V9YClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJlcXVlc3RUb1VwZGF0ZUNMSSA9IGFzeW5jIChcbiAgICAgICAgcXVlcnlQYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgICAgIGNvbmZpZzogT3B0aW9ucy5UZXN0cnVubmVyLFxuICAgICkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5UGFyYW1zKVxuICAgICAgICBjb25zdCByZXF1ZXN0SW5pdDogUmVxdWVzdEluaXQgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke0J1ZmZlci5mcm9tKGAke2dldEJyb3dzZXJTdGFja1VzZXIoY29uZmlnKX06JHtnZXRCcm93c2VyU3RhY2tLZXkoY29uZmlnKX1gKS50b1N0cmluZygnYmFzZTY0Jyl9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGAke0FQSVV0aWxzLkJST1dTRVJTVEFDS19BVVRPTUFURV9BUElfVVJMfS8ke1VQREFURURfQ0xJX0VORFBPSU5UfT8ke3BhcmFtcy50b1N0cmluZygpfWAsXG4gICAgICAgICAgICByZXF1ZXN0SW5pdCxcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGByZXNwb25zZSAke0pTT04uc3RyaW5naWZ5KGpzb25SZXNwb25zZSl9YClcbiAgICAgICAgcmV0dXJuIGpzb25SZXNwb25zZVxuICAgIH1cblxuICAgIHN0YXRpYyBydW5TaGVsbENvbW1hbmQoXG4gICAgICAgIGNtZENvbW1hbmQ6IHN0cmluZyxcbiAgICAgICAgd29ya2luZ0RpciA9ICcnLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvY2VzcyA9IGV4ZWMoXG4gICAgICAgICAgICAgICAgY21kQ29tbWFuZCxcbiAgICAgICAgICAgICAgICB7IGN3ZDogd29ya2luZ0RpciwgdGltZW91dDogNTAwMCB9LFxuICAgICAgICAgICAgICAgIChlcnJvcjogRXJyb3IsIHN0ZG91dDogc3RyaW5nLCBzdGRlcnI6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoc3RkZXJyLnRyaW0oKSB8fCAnU0hFTExfRVhFQ1VURV9FUlJPUicpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHN0ZG91dC50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvLyBFbnN1cmUgdGhlIHByb2Nlc3MgaXMga2lsbGVkIGlmIGl0IGV4Y2VlZHMgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIHByb2Nlc3Mub24oJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoJ1NIRUxMX0VYRUNVVEVfRVJST1InKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIGVuY29kZWQgaW4gYSBiaW5hcnkgZG93bmxvYWQgVVJMLCBlLmcuXG4gICAgICogYC4uLi9iaW5hcnktbWFjb3MtYXJtNjQtMS40OC4wLnppcGAgLT4gYDEuNDguMGAuIE51bGwgd2hlbiB0aGUgVVJMIGRvZXNcbiAgICAgKiBub3QgY2Fycnkgb25lIChjdXN0b20gQlJPV1NFUlNUQUNLX0JJTkFSWV9VUkwpLlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRWZXJzaW9uRnJvbUJpbmFyeVVybChiaW5Eb3dubG9hZFVybDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiAvLShcXGQrXFwuXFxkK1xcLlxcZCspXFwuemlwKD86XFw/fCQpLy5leGVjKGJpbkRvd25sb2FkVXJsIHx8ICcnKT8uWzFdID8/IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBiaW5hcnkgb24gZGlzayBpcyBhbHJlYWR5IHRoZSB2ZXJzaW9uIHdlIHdlcmUgYXNrZWQgdG8gZmV0Y2guXG4gICAgICogQSBwZWVyIHdvcmtlciB3aW5uaW5nIHRoZSBkb3dubG9hZCByYWNlIGxlYXZlcyB0aGUgKnRhcmdldCogdmVyc2lvbiBoZXJlO1xuICAgICAqIGEgbWVyZWx5LXByZS1leGlzdGluZyBiaW5hcnkgaXMgc3RhbGUuIE9ubHkgdGhlIGZvcm1lciBtYXkgc2hvcnQtY2lyY3VpdFxuICAgICAqIHRoZSBkb3dubG9hZCBcdTIwMTQgc2VlIGBkb3dubG9hZExhdGVzdEJpbmFyeWAuXG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGlzQmluYXJ5QXRWZXJzaW9uKFxuICAgICAgICBiaW5hcnlQYXRoOiBzdHJpbmcsXG4gICAgICAgIGV4cGVjdGVkVmVyc2lvbjogc3RyaW5nIHwgbnVsbCxcbiAgICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgaWYgKCFleHBlY3RlZFZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhY3R1YWwgPSBhd2FpdCBDTElVdGlscy5ydW5TaGVsbENvbW1hbmQoYCR7YmluYXJ5UGF0aH0gdmVyc2lvbmApXG4gICAgICAgICAgICByZXR1cm4gYWN0dWFsLnRyaW0oKSA9PT0gZXhwZWN0ZWRWZXJzaW9uXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZG93bmxvYWRMYXRlc3RCaW5hcnkgPSBhc3luYyAoXG4gICAgICAgIGJpbkRvd25sb2FkVXJsOiBzdHJpbmcsXG4gICAgICAgIGNsaURpcjogc3RyaW5nLFxuICAgICAgICBleHBlY3RlZFZlcnNpb24/OiBzdHJpbmcgfCBudWxsLFxuICAgICk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuICAgICAgICBjb25zdCBsb2NrUGF0aCA9IHBhdGguam9pbihjbGlEaXIsICdkb3dubG9hZC5sb2NrJylcbiAgICAgICAgLy8gUHJlZmVyIHRoZSB2ZXJzaW9uIHRoZSBzZXJ2ZXIgcmVwb3J0ZWQ7IHRoZSBVUkwgaXMgb25seSBhIGZhbGxiYWNrIGFuZFxuICAgICAgICAvLyBjYXJyaWVzIG5vIHZlcnNpb24gd2hlbiBCUk9XU0VSU1RBQ0tfQklOQVJZX1VSTCBvdmVycmlkZXMgaXQuXG4gICAgICAgIGNvbnN0IHRhcmdldFZlcnNpb24gPVxuICAgICAgICAgICAgZXhwZWN0ZWRWZXJzaW9uIHx8IENMSVV0aWxzLmdldFZlcnNpb25Gcm9tQmluYXJ5VXJsKGJpbkRvd25sb2FkVXJsKVxuXG4gICAgICAgIGNvbnN0IHNsZWVwID0gKG1zOiBudW1iZXIpID0+IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIG1zKSlcblxuICAgICAgICBjb25zdCBwYXJzZUxvY2tGaWxlID0gKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGxvY2tQYXRoLCAndXRmOCcpLnRyaW0oKVxuICAgICAgICAgICAgICAgIGNvbnN0IFtwaWRMaW5lLCB0aW1lc3RhbXBMaW5lXSA9IGNvbnRlbnQuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAgICAgY29uc3QgcGlkID0gTnVtYmVyLnBhcnNlSW50KHBpZExpbmUsIDEwKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IE51bWJlci5wYXJzZUludCh0aW1lc3RhbXBMaW5lLCAxMClcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShwaWQpIHx8ICFOdW1iZXIuaXNGaW5pdGUodGltZXN0YW1wKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4geyBwaWQsIHRpbWVzdGFtcCB9XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNQcm9jZXNzUnVubmluZyA9IChwaWQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmtpbGwocGlkLCAwKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjcXVpcmVMb2NrID0gYXN5bmMgKFxuICAgICAgICAgICAgdGltZW91dE1zID0gQ0xJX0xPQ0tfVElNRU9VVF9NUyxcbiAgICAgICAgICAgIHBvbGxNcyA9IENMSV9MT0NLX1BPTExfTVMsXG4gICAgICAgICk6IFByb21pc2U8KCgpID0+IHZvaWQpIHwgeyBhbHJlYWR5RXhpc3RzOiBzdHJpbmcgfT4gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uIC0tIGludGVudGlvbmFsIHBvbGwgbG9vcDsgZXhpdHMgdmlhIHJldHVybi90aHJvdyBiZWxvd1xuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmZCA9IGZzLm9wZW5TeW5jKGxvY2tQYXRoLCAnd3gnKVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmZCwgYCR7cHJvY2Vzcy5waWR9XFxuJHtEYXRlLm5vdygpfVxcbmApXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50ZW50aW9uYWxseSBpZ25vcmUgd3JpdGUgZXJyb3JzOyB0aGUgb3BlbiBmZCBzdGlsbCBob2xkc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGV4Y2x1c2l2ZSBsb2NrIGFuZCB3aWxsIGJlIGNsb3NlZCBpbiBjbGVhbnVwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnMuY2xvc2VTeW5jKGZkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIGNsZWFudXAgZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZzLnVubGlua1N5bmMobG9ja1BhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgY2xlYW51cCBlcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBlIGFzIHsgY29kZT86IHN0cmluZyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSAnRUVYSVNUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9ja01ldGEgPSBwYXJzZUxvY2tGaWxlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NrTWV0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2tBZ2UgPSBEYXRlLm5vdygpIC0gbG9ja01ldGEudGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcnVubmluZyA9IGlzUHJvY2Vzc1J1bm5pbmcobG9ja01ldGEucGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcnVubmluZyB8fCBsb2NrQWdlID4gdGltZW91dE1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFN0YWxlIENMSSBkb3dubG9hZCBsb2NrIGRldGVjdGVkIChwaWQ9JHtsb2NrTWV0YS5waWR9LCBhZ2U9JHtsb2NrQWdlfW1zKS4gUmVtb3ZpbmcgbG9jay5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcy51bmxpbmtTeW5jKGxvY2tQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBjbGVhbnVwIGVycm9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRhcmdldCBiaW5hcnkgYXBwZWFyZWQgd2hpbGUgd2FpdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdCaW5hcnkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENMSVV0aWxzLmdldEV4aXN0aW5nQ2xpUGF0aChjbGlEaXIpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdCaW5hcnkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcy5leGlzdHNTeW5jKGV4aXN0aW5nQmluYXJ5KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZzLnN0YXRTeW5jKGV4aXN0aW5nQmluYXJ5KS5zaXplID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhd2FpdCBDTElVdGlscy5pc0JpbmFyeUF0VmVyc2lvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdCaW5hcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYEJpbmFyeSB2JHt0YXJnZXRWZXJzaW9ufSBhcHBlYXJlZCB3aGlsZSB3YWl0aW5nIGZvciBsb2NrOiAke2V4aXN0aW5nQmluYXJ5fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGFscmVhZHlFeGlzdHM6IGV4aXN0aW5nQmluYXJ5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0TXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBUaW1lb3V0IHdhaXRpbmcgZm9yIGxvY2s6ICR7bG9ja1BhdGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChwb2xsTXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGVhbnVwVGVtcG9yYXJ5RG93bmxvYWRzID0gKG1heEFnZU1zID0gQ0xJX0xPQ0tfVElNRU9VVF9NUykgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICAgICAgLy8gTWF0Y2ggYm90aCBkb3dubG9hZCB6aXBzIChkb3dubG9hZGVkX2ZpbGVfKi56aXApIGFuZCBvcnBoYW4gZXh0cmFjdFxuICAgICAgICAgICAgICAgIC8vIHRlbXAgZmlsZXMgKDxuYW1lPi50bXAuPHBpZD4pIGxlZnQgYnkgY3Jhc2hlZCBwZWVyIHdvcmtlcnMuXG4gICAgICAgICAgICAgICAgY29uc3QgdG1wRXh0cmFjdFJlID0gL1xcLnRtcFxcLlxcZCskL1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZnMucmVhZGRpclN5bmMoY2xpRGlyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0Rvd25sb2FkWmlwID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnN0YXJ0c1dpdGgoQ0xJX0RPV05MT0FEX1RNUF9QUkVGSVgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5lbmRzV2l0aChDTElfRE9XTkxPQURfVE1QX1NVRkZJWClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNFeHRyYWN0VG1wID0gdG1wRXh0cmFjdFJlLnRlc3QoZW50cnkpXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNEb3dubG9hZFppcCAmJiAhaXNFeHRyYWN0VG1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKGNsaURpciwgZW50cnkpXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGF0czogZnMuU3RhdHNcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzID0gZnMuc3RhdFN5bmMoZmlsZVBhdGgpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm93IC0gc3RhdHMubXRpbWVNcyA8IG1heEFnZU1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcy51bmxpbmtTeW5jKGZpbGVQYXRoKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRmFpbGVkIHRvIGRlbGV0ZSB0ZW1wIENMSSBmaWxlICR7ZmlsZVBhdGh9OiAke3V0aWwuZm9ybWF0KGVycil9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgICAgICAgYEZhaWxlZCB0byBzY2FuIHRlbXAgQ0xJIGZpbGVzIGluICR7Y2xpRGlyfTogJHt1dGlsLmZvcm1hdChlcnIpfWAsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgUGVyZm9ybWFuY2VUZXN0ZXIuc3RhcnQoUGVyZm9ybWFuY2VFdmVudHMuU0RLX0NMSV9ET1dOTE9BRClcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBEb3dubG9hZGluZyBTREsgYmluYXJ5IGZyb206ICR7YmluRG93bmxvYWRVcmx9YClcblxuICAgICAgICBsZXQgZG93bmxvYWRFbmRlZCA9IGZhbHNlXG4gICAgICAgIGNvbnN0IGVuZERvd25sb2FkID0gKHN1Y2Nlc3MgPSB0cnVlLCBlcnJNc2c/OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmIChkb3dubG9hZEVuZGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb3dubG9hZEVuZGVkID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBQZXJmb3JtYW5jZVRlc3Rlci5lbmQoUGVyZm9ybWFuY2VFdmVudHMuU0RLX0NMSV9ET1dOTE9BRClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFBlcmZvcm1hbmNlVGVzdGVyLmVuZChcbiAgICAgICAgICAgICAgICBQZXJmb3JtYW5jZUV2ZW50cy5TREtfQ0xJX0RPV05MT0FELFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGVyck1zZyxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWxlYXNlTG9jazogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBsb2NrUmVzdWx0ID0gYXdhaXQgYWNxdWlyZUxvY2soKVxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBiaW5hcnkgYWxyZWFkeSBleGlzdHMgKGFub3RoZXIgcHJvY2VzcyBkb3dubG9hZGVkIGl0KVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2NrUmVzdWx0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZW5kRG93bmxvYWQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBsb2NrUmVzdWx0LmFscmVhZHlFeGlzdHNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVsZWFzZUxvY2sgPSBsb2NrUmVzdWx0XG5cbiAgICAgICAgICAgIC8vIFJlLWNoZWNrIGFmdGVyIGFjcXVpcmluZyBsb2NrLiBPbmx5IGEgYmluYXJ5IGFscmVhZHkgYXQgdGhlIHRhcmdldFxuICAgICAgICAgICAgLy8gdmVyc2lvbiBtZWFucyBhIHBlZXIgd29uIHRoZSByYWNlOyBhbnkgb3RoZXIgYmluYXJ5IGhlcmUgaXMgdGhlXG4gICAgICAgICAgICAvLyBzdGFsZSBvbmUgd2Ugd2VyZSBzZW50IHRvIHJlcGxhY2UsIHNvIGl0IG11c3Qgbm90IHNob3J0LWNpcmN1aXRcbiAgICAgICAgICAgIC8vIHRoZSBkb3dubG9hZC5cbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nQmluYXJ5ID0gQ0xJVXRpbHMuZ2V0RXhpc3RpbmdDbGlQYXRoKGNsaURpcilcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBleGlzdGluZ0JpbmFyeSAmJlxuICAgICAgICAgICAgICAgIGZzLmV4aXN0c1N5bmMoZXhpc3RpbmdCaW5hcnkpICYmXG4gICAgICAgICAgICAgICAgZnMuc3RhdFN5bmMoZXhpc3RpbmdCaW5hcnkpLnNpemUgPiAwICYmXG4gICAgICAgICAgICAgICAgKGF3YWl0IENMSVV0aWxzLmlzQmluYXJ5QXRWZXJzaW9uKGV4aXN0aW5nQmluYXJ5LCB0YXJnZXRWZXJzaW9uKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgICAgICAgYEJpbmFyeSBhbHJlYWR5IGF0IHYke3RhcmdldFZlcnNpb259IGFmdGVyIGFjcXVpcmluZyBsb2NrOiAke2V4aXN0aW5nQmluYXJ5fWAsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGVuZERvd25sb2FkKClcbiAgICAgICAgICAgICAgICByZWxlYXNlTG9jaygpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nQmluYXJ5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsZWFudXBUZW1wb3JhcnlEb3dubG9hZHMoKVxuXG4gICAgICAgICAgICBjb25zdCB6aXBGaWxlUGF0aCA9IHBhdGguam9pbihcbiAgICAgICAgICAgICAgICBjbGlEaXIsXG4gICAgICAgICAgICAgICAgYCR7Q0xJX0RPV05MT0FEX1RNUF9QUkVGSVh9JHtwcm9jZXNzLnBpZH1fJHtEYXRlLm5vdygpfSR7Q0xJX0RPV05MT0FEX1RNUF9TVUZGSVh9YCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGRvd25sb2FkZWRGaWxlU3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oemlwRmlsZVBhdGgpXG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCBudWxsPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0OiBjcmVhdGVXcml0ZVN0cmVhbSBvcGVuc1xuICAgICAgICAgICAgICAgIC8vIGFzeW5jaHJvbm91c2x5LCBzbyBhbiBlcnJvciBjYW4gbGFuZCBiZWZvcmUgcHJvY2Vzc0Rvd25sb2FkXG4gICAgICAgICAgICAgICAgLy8gZ2V0cyBmYXIgZW5vdWdoIHRvIGF0dGFjaCBpdHMgb3duIGhhbmRsZXIgXHUyMDE0IHdpdGggbm8gbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGJlY29tZXMgYW4gdW5jYXVnaHQgZXhjZXB0aW9uIGluIHRoZSB1c2VyJ3MgdGVzdCBwcm9jZXNzLlxuICAgICAgICAgICAgICAgIGRvd25sb2FkZWRGaWxlU3RyZWFtLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnI6IEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBHb3QgRXJyb3Igd2hpbGUgZG93bmxvYWRpbmcgY2xpIGJpbmFyeSBmaWxlOiAke2Vycn1gLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGVuZERvd25sb2FkKGZhbHNlLCB1dGlsLmZvcm1hdChlcnIpKVxuICAgICAgICAgICAgICAgICAgICByZWxlYXNlTG9jaz8uKClcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvY2Vzc0Rvd25sb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIENMSV9ET1dOTE9BRF9USU1FT1VUX01TLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZTogUmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmluRG93bmxvYWRVcmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5ib2R5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlc3BvbnNlIGJvZHkgcmVjZWl2ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZVN0cmVhbSA9IFJlYWRhYmxlLmZyb20oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVTdHJlYW0ucGlwZShkb3dubG9hZGVkRmlsZVN0cmVhbSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHVwIHRoZSBkb3dubG9hZEZpbGVTdHJlYW0gaGFuZGxlciBiZWZvcmUgcGlwZWxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIENMSVV0aWxzLmRvd25sb2FkRmlsZVN0cmVhbShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZGVkRmlsZVN0cmVhbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6aXBGaWxlUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlEaXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3VsdDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERvd25sb2FkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZUxvY2s/LigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycj86IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERvd25sb2FkKGZhbHNlLCB1dGlsLmZvcm1hdChlcnIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxlYXNlTG9jaz8uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgR290IEVycm9yIGluIGNsaSBiaW5hcnkgZG93bmxvYWRpbmcgcmVxdWVzdCAke3V0aWwuZm9ybWF0KGVycil9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZERvd25sb2FkKGZhbHNlLCB1dGlsLmZvcm1hdChlcnIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZUxvY2s/LigpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyIGFzIEVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQSByZWplY3Rpb24gYmVmb3JlIHRoZSBzdHJlYW0gaGFuZGxlcnMgYXJlIHdpcmVkIChlLmcuIGZldGNoXG4gICAgICAgICAgICAgICAgLy8gaXRzZWxmIGZhaWxpbmcpIHdvdWxkIG90aGVyd2lzZSBsZWF2ZSB0aGlzIHByb21pc2UgcGVuZGluZ1xuICAgICAgICAgICAgICAgIC8vIGZvcmV2ZXIgYW5kIGhhbmcgdGhlIGxhdW5jaGVyLlxuICAgICAgICAgICAgICAgIHByb2Nlc3NEb3dubG9hZCgpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgaXMgcGlwZWQgaW50byB0aGUgc3RyZWFtIG9uIHRoaXMgcGF0aCwgc28gY2xvc2UgaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZXhwbGljaXRseSBcdTIwMTQgb3RoZXJ3aXNlIHRoZSBmZCBhbmQgdGhlIHRlbXAgemlwIGJvdGggbGVhay5cbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRlZEZpbGVTdHJlYW0uZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgIGVuZERvd25sb2FkKGZhbHNlLCB1dGlsLmZvcm1hdChlcnIpKVxuICAgICAgICAgICAgICAgICAgICByZWxlYXNlTG9jaz8uKClcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWxlYXNlTG9jaz8uKClcbiAgICAgICAgICAgIGVuZERvd25sb2FkKGZhbHNlLCB1dGlsLmZvcm1hdChlcnIpKVxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgICAgIGBGYWlsZWQgdG8gZG93bmxvYWQgYmluYXJ5LCBFeGNlcHRpb246ICR7dXRpbC5mb3JtYXQoZXJyKX1gLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBkb3dubG9hZEZpbGVTdHJlYW0oXG4gICAgICAgIGRvd25sb2FkZWRGaWxlU3RyZWFtOiBmcy5Xcml0ZVN0cmVhbSxcbiAgICAgICAgemlwRmlsZVBhdGg6IHN0cmluZyxcbiAgICAgICAgY2xpRGlyOiBzdHJpbmcsXG4gICAgICAgIHJlc29sdmU6IChwYXRoOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgICAgIHJlamVjdDogKHJlYXNvbj86IEVycm9yKSA9PiB2b2lkLFxuICAgICkge1xuICAgICAgICBkb3dubG9hZGVkRmlsZVN0cmVhbS5vbignY2xvc2UnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB5YXV6bE9wZW5Qcm9taXNlID0gcHJvbWlzaWZ5KHlhdXpsLm9wZW4pIGFzIChcbiAgICAgICAgICAgICAgICBwYXRoOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogeWF1emxPcHRpb25zLFxuICAgICAgICAgICAgKSA9PiBQcm9taXNlPFppcEZpbGU+XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHppcGZpbGUgPSBhd2FpdCB5YXV6bE9wZW5Qcm9taXNlKHppcEZpbGVQYXRoLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhenlFbnRyaWVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbGV0IHJlc29sdmVkQmluYXJ5UGF0aDogc3RyaW5nIHwgbnVsbCA9IG51bGxcblxuICAgICAgICAgICAgICAgIHppcGZpbGUucmVhZEVudHJ5KClcbiAgICAgICAgICAgICAgICB6aXBmaWxlLm9uKCdlbnRyeScsIGFzeW5jIChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoL1xcLyQvLnRlc3QoZW50cnkuZmlsZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB6aXBmaWxlLnJlYWRFbnRyeSgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFppcC1zbGlwIGd1YXJkOiByZWplY3QgZW50cmllcyB3aG9zZSByZXNvbHZlZCBwYXRoIGVzY2FwZXMgY2xpRGlyXG4gICAgICAgICAgICAgICAgICAgIC8vIChCUk9XU0VSU1RBQ0tfQklOQVJZX1VSTCBsZXRzIHVzZXJzIHN1cHBseSBhcmJpdHJhcnkgemlwcykuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbmRpZGF0ZVBhdGggPSBwYXRoLmpvaW4oY2xpRGlyLCBlbnRyeS5maWxlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRDYW5kaWRhdGUgPSBwYXRoLnJlc29sdmUoY2FuZGlkYXRlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWREaXIgPSBwYXRoLnJlc29sdmUoY2xpRGlyKSArIHBhdGguc2VwXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWRDYW5kaWRhdGUuc3RhcnRzV2l0aChyZXNvbHZlZERpcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHppcGZpbGUuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgWmlwLXNsaXAgZGV0ZWN0ZWQ6IGVudHJ5IFwiJHtlbnRyeS5maWxlTmFtZX1cIiByZXNvbHZlcyBvdXRzaWRlICR7Y2xpRGlyfWApKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0JpbmFyeUVudHJ5ID0gcGF0aC5iYXNlbmFtZShlbnRyeS5maWxlTmFtZSkuc3RhcnRzV2l0aCgnYmluYXJ5LScpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0JpbmFyeUVudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3RTdHJlYW0gPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShjYW5kaWRhdGVQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0U3RyZWFtLm9uKCdlcnJvcicsICh3cml0ZUVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHppcGZpbGUuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh3cml0ZUVyciBhcyBFcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVuUmVhZFN0cmVhbVByb21pc2UgPSBwcm9taXNpZnkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgemlwZmlsZS5vcGVuUmVhZFN0cmVhbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICkuYmluZCh6aXBmaWxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkU3RyZWFtID0gYXdhaXQgb3BlblJlYWRTdHJlYW1Qcm9taXNlKGVudHJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRTdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0U3RyZWFtLmVuZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdFN0cmVhbS5vbignY2xvc2UnLCAoKSA9PiB6aXBmaWxlLnJlYWRFbnRyeSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFN0cmVhbS5waXBlKGRpcmVjdFN0cmVhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKHppcEVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHppcGZpbGUuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh6aXBFcnIgYXMgRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJpbmFyeSBlbnRyeTogZXh0cmFjdCB0byBQSUQtc2NvcGVkIHRlbXAgZmlsZSwgY2htb2QsIGF0b21pYyByZW5hbWUgaW5saW5lLlxuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50cyBFVFhUQlNZL0VCVVNZOiB0aGUgZmlsZSBiZWluZyBleGVjdXRlZCBpcyBuZXZlciB0aGUgZmlsZSBiZWluZyB3cml0dGVuLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaW5hbFBhdGggPSBjYW5kaWRhdGVQYXRoXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBQYXRoID0gcGF0aC5qb2luKGNsaURpciwgYCR7ZW50cnkuZmlsZU5hbWV9LnRtcC4ke3Byb2Nlc3MucGlkfWApXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JpdGVTdHJlYW0gPSBmcy5jcmVhdGVXcml0ZVN0cmVhbSh0ZW1wUGF0aClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgd3JpdGVTdHJlYW1FcnJvcmVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVTdHJlYW0ub24oJ2Vycm9yJywgKHdyaXRlRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZVN0cmVhbUVycm9yZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBmc3AudW5saW5rKHRlbXBQYXRoKS5jYXRjaCgoKSA9PiB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHppcGZpbGUuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHdyaXRlRXJyIGFzIEVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vICdjbG9zZScgZmlyZXMgYWZ0ZXIgdGhlIGZkIGlzIGNsb3NlZDsgc2FmZSBmb3IgZnNwLnJlbmFtZSBvbiBXaW5kb3dzICh3aGVyZSAnZmluaXNoJyBtYXkgZmlyZSBiZWZvcmUgZmQgcmVsZWFzZSkuXG4gICAgICAgICAgICAgICAgICAgIC8vIGF1dG9DbG9zZT10cnVlIGFsc28gbWFrZXMgJ2Nsb3NlJyBmaXJlIGFmdGVyICdlcnJvcicgXHUyMDE0IGJhaWwgb3V0IGlmIHRoZSBlcnJvciBwYXRoIGFscmVhZHkgcmVqZWN0ZWQuXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlU3RyZWFtLm9uKCdjbG9zZScsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3cml0ZVN0cmVhbUVycm9yZWQpIHsgcmV0dXJuIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZnNwLmNobW9kKHRlbXBQYXRoLCAnMDc1NScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZnNwLnJlbmFtZSh0ZW1wUGF0aCwgZmluYWxQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAocmVuYW1lRXJyOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmFycm93IGZhbGxiYWNrIHRvIGNyb3NzLWRldmljZSAoRVhERVYpIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbmFtZUVyci5jb2RlICE9PSAnRVhERVYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZW5hbWVFcnJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgQXRvbWljIHJlbmFtZSBmYWlsZWQgKGNyb3NzLWRldmljZSksIGZhbGxpbmcgYmFjayB0byBjb3B5OiAke3JlbmFtZUVyci5tZXNzYWdlfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGZzcC5jb3B5RmlsZSh0ZW1wUGF0aCwgZmluYWxQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBmc3AudW5saW5rKHRlbXBQYXRoKS5jYXRjaCgoKSA9PiB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZEJpbmFyeVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRCaW5hcnlQYXRoID0gZmluYWxQYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHppcGZpbGUucmVhZEVudHJ5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGZzcC51bmxpbmsodGVtcFBhdGgpLmNhdGNoKCgpID0+IHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHppcGZpbGUuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIgYXMgRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlblJlYWRTdHJlYW1Qcm9taXNlID0gcHJvbWlzaWZ5KFxuICAgICAgICAgICAgICAgICAgICAgICAgemlwZmlsZS5vcGVuUmVhZFN0cmVhbSxcbiAgICAgICAgICAgICAgICAgICAgKS5iaW5kKHppcGZpbGUpXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkU3RyZWFtID0gYXdhaXQgb3BlblJlYWRTdHJlYW1Qcm9taXNlKGVudHJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlU3RyZWFtLmVuZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZFN0cmVhbS5waXBlKHdyaXRlU3RyZWFtKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICh6aXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZzcC51bmxpbmsodGVtcFBhdGgpLmNhdGNoKCgpID0+IHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgemlwZmlsZS5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoemlwRXJyIGFzIEVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHppcGZpbGUub24oJ2Vycm9yJywgKHppcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoemlwRXJyIGFzIEVycm9yKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB6aXBmaWxlLm9uY2UoJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZnNwLnVubGluayh6aXBGaWxlUGF0aCkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYEZhaWxlZCB0byBkZWxldGUgemlwIGZpbGU6ICR7emlwRmlsZVBhdGh9YClcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc29sdmVkQmluYXJ5UGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgemlwZmlsZS5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdObyBiaW5hcnktKiBlbnRyeSBmb3VuZCBpbiB6aXA7IGNhbm5vdCBjb21wbGV0ZSBDTEkgYmluYXJ5IGV4dHJhY3Rpb24nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHppcGZpbGUuY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkQmluYXJ5UGF0aClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVyciBhcyBFcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VGVzdEZyYW1ld29ya0RldGFpbCgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52LkJST1dTRVJTVEFDS19URVNUX0ZSQU1FV09SS19ERVRBSUwpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHByb2Nlc3MuZW52LkJST1dTRVJTVEFDS19URVNUX0ZSQU1FV09SS19ERVRBSUwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdEZyYW1ld29ya0RldGFpbFxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBdXRvbWF0aW9uRnJhbWV3b3JrRGV0YWlsKCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX0FVVE9NQVRJT05fRlJBTUVXT1JLX0RFVEFJTCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX0FVVE9NQVRJT05fRlJBTUVXT1JLX0RFVEFJTCxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uRnJhbWV3b3JrRGV0YWlsXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEZyYW1ld29ya0RldGFpbChcbiAgICAgICAgdGVzdEZyYW1ld29yazogc3RyaW5nLFxuICAgICAgICBhdXRvbWF0aW9uRnJhbWV3b3JrOiBzdHJpbmcsXG4gICAgKSB7XG4gICAgICAgIGlmICghdGVzdEZyYW1ld29yayB8fCAhYXV0b21hdGlvbkZyYW1ld29yaykge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgICAgIGBUZXN0IG9yIEF1dG9tYXRpb24gZnJhbWV3b3JrIG5vdCBwcm92aWRlZCB0ZXN0RnJhbWV3b3JrPSR7dGVzdEZyYW1ld29ya30sIGF1dG9tYXRpb25GcmFtZXdvcms9JHthdXRvbWF0aW9uRnJhbWV3b3JrfWAsXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRlc3RGcmFtZXdvcmtEZXRhaWwgPSB7XG4gICAgICAgICAgICBuYW1lOiB0ZXN0RnJhbWV3b3JrLFxuICAgICAgICAgICAgdmVyc2lvbjogeyBbdGVzdEZyYW1ld29ya106IENMSVV0aWxzLmdldFNka1ZlcnNpb24oKSB9LFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uRnJhbWV3b3JrRGV0YWlsID0ge1xuICAgICAgICAgICAgbmFtZTogYXV0b21hdGlvbkZyYW1ld29yayxcbiAgICAgICAgICAgIHZlcnNpb246IHsgW2F1dG9tYXRpb25GcmFtZXdvcmtdOiBDTElVdGlscy5nZXRTZGtWZXJzaW9uKCkgfSxcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2Nlc3MuZW52LkJST1dTRVJTVEFDS19BVVRPTUFUSU9OX0ZSQU1FV09SS19ERVRBSUwgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbkZyYW1ld29ya0RldGFpbCxcbiAgICAgICAgKVxuICAgICAgICBwcm9jZXNzLmVudi5CUk9XU0VSU1RBQ0tfVEVTVF9GUkFNRVdPUktfREVUQUlMID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICB0aGlzLnRlc3RGcmFtZXdvcmtEZXRhaWwsXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgaW5zdGFuY2UgbmFtZSB1c2luZyB0aHJlYWQgaWQgYW5kIHByb2Nlc3NJZFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGdldEN1cnJlbnRJbnN0YW5jZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHtwcm9jZXNzLnBpZH06JHt0aHJlYWRJZH1gXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgY2xpZW50IHdvcmtlciBpZGVudGlmaWVyIGNvbWJpbmluZyB0aHJlYWQgSUQgYW5kIHByb2Nlc3MgSUQuXG4gICAgICogVGhpcyBpZGVudGlmaWVyIGlzIHVzZWQgdG8gdHJhY2sgd29ya2VyLXNwZWNpZmljIGV2ZW50cyBhbmQgcGVyZm9ybWFuY2UgbWV0cmljc1xuICAgICAqIGFjcm9zcyBkaXN0cmlidXRlZCB0ZXN0IGV4ZWN1dGlvbi4gRm9ybWF0IG1hdGNoZXMgdGhlIFB5dGhvbiBTREsgaW1wbGVtZW50YXRpb25cbiAgICAgKiBmb3IgY29uc2lzdGVuY3kgYWNyb3NzIFNES3MuXG4gICAgICpcbiAgICAgKiBGb3JtYXQ6IFwidGhyZWFkSWQtcHJvY2Vzc0lkXCJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0IC0gT3B0aW9uYWwgZXhlY3V0aW9uIGNvbnRleHQgd2l0aCB0aHJlYWRJZCBhbmQgcHJvY2Vzc0lkXG4gICAgICogQHJldHVybnMgV29ya2VyIElEIHN0cmluZyBpbiBmb3JtYXQgXCJ0aHJlYWRJZC1wcm9jZXNzSWRcIlxuICAgICAqIEBleGFtcGxlXG4gICAgICogY29uc3Qgd29ya2VySWQgPSBDTElVdGlscy5nZXRDbGllbnRXb3JrZXJJZCgpIC8vIFJldHVybnMgXCIxLTEyMzQ1XCJcbiAgICAgKiBjb25zdCB3b3JrZXJJZCA9IENMSVV0aWxzLmdldENsaWVudFdvcmtlcklkKHsgdGhyZWFkSWQ6IDEyMywgcHJvY2Vzc0lkOiA0NTYgfSkgLy8gUmV0dXJucyBcIjEyMy00NTZcIlxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDbGllbnRXb3JrZXJJZChjb250ZXh0PzogeyB0aHJlYWRJZD86IHN0cmluZyB8IG51bWJlcjsgcHJvY2Vzc0lkPzogc3RyaW5nIHwgbnVtYmVyIH0pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB3b3JrZXJUaHJlYWRJZCA9IGNvbnRleHQ/LnRocmVhZElkPy50b1N0cmluZygpIHx8IHRocmVhZElkLnRvU3RyaW5nKClcbiAgICAgICAgY29uc3Qgd29ya2VyUHJvY2Vzc0lkID0gY29udGV4dD8ucHJvY2Vzc0lkPy50b1N0cmluZygpIHx8IHByb2Nlc3MucGlkLnRvU3RyaW5nKClcbiAgICAgICAgcmV0dXJuIGAke3dvcmtlclRocmVhZElkfS0ke3dvcmtlclByb2Nlc3NJZH1gXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Rlc3RGcmFtZXdvcmtTdGF0ZSB8IEF1dG9tYXRpb25GcmFtZXdvcmtTdGF0ZX0gZnJhbWV3b3JrU3RhdGVcbiAgICAgKiBAcGFyYW0ge0hvb2tTdGF0ZX0gaG9va1N0YXRlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SG9va1JlZ2lzdHJ5S2V5KGZyYW1ld29ya1N0YXRlOiBTdGF0ZSwgaG9va1N0YXRlOiBTdGF0ZSkge1xuICAgICAgICByZXR1cm4gYCR7ZnJhbWV3b3JrU3RhdGV9OiR7aG9va1N0YXRlfWBcbiAgICB9XG5cbiAgICBzdGF0aWMgbWF0Y2hIb29rUmVnZXgoaG9va1N0YXRlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IG5ldyBSZWdFeHAoVGVzdEZyYW1ld29ya0NvbnN0YW50cy5IT09LX1JFR0VYKVxuXG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoaG9va1N0YXRlKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRPYnNlcnZhYmlsaXR5QnVpbGRUYWdzKFxuICAgICAgICBvYnNlcnZhYmlsaXR5T3B0aW9uczogVGVzdE9ic2VydmFiaWxpdHlPcHRpb25zLFxuICAgICAgICBic3RhY2tCdWlsZFRhZz86IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52LlRFU1RfT0JTRVJWQUJJTElUWV9CVUlMRF9UQUcpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5URVNUX09CU0VSVkFCSUxJVFlfQlVJTERfVEFHLnNwbGl0KCcsJylcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JzZXJ2YWJpbGl0eU9wdGlvbnMuYnVpbGRUYWcpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmlsaXR5T3B0aW9ucy5idWlsZFRhZ1xuICAgICAgICB9XG4gICAgICAgIGlmIChic3RhY2tCdWlsZFRhZykge1xuICAgICAgICAgICAgcmV0dXJuIFtic3RhY2tCdWlsZFRhZ11cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBzdGF0aWMgY2hlY2tDTElTdXBwb3J0ZWRGcmFtZXdvcmtzKGZyYW1ld29yazogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChmcmFtZXdvcmsgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuQ0xJU3VwcG9ydGVkRnJhbWV3b3Jrcy5pbmNsdWRlcyhmcmFtZXdvcmspXG4gICAgfVxufVxuIiwgImltcG9ydCB7IGZldGNoIGFzIHVuZGljaUZldGNoLCB0eXBlIFJlcXVlc3RJbml0IGFzIFVuZGljaVJlcXVlc3RJbml0LCBQcm94eUFnZW50IH0gZnJvbSAndW5kaWNpJ1xuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBwdWJsaWMgcmVzcG9uc2U6IFJlc3BvbnNlXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpXG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV3JhcChpbnB1dDogUmVxdWVzdEluZm8gfCBVUkwsIGluaXQ/OiBSZXF1ZXN0SW5pdCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IF9mZXRjaChpbnB1dCwgaW5pdClcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICB0aHJvdyBuZXcgUmVzcG9uc2VFcnJvcihgRXJyb3IgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIgJHtyZXMuc3RhdHVzfTogICR7YXdhaXQgcmVzLnRleHQoKX1gLCByZXMpXG4gICAgfVxuICAgIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9mZXRjaChpbnB1dDogUmVxdWVzdEluZm8gfCBVUkwsIGluaXQ/OiBSZXF1ZXN0SW5pdCkge1xuICAgIGNvbnN0IHByb3h5VXJsID0gcHJvY2Vzcy5lbnYuSFRUUF9QUk9YWSB8fCBwcm9jZXNzLmVudi5IVFRQU19QUk9YWVxuICAgIGlmIChwcm94eVVybCkge1xuICAgICAgICBjb25zdCBub1Byb3h5ID0gcHJvY2Vzcy5lbnYuTk9fUFJPWFkgJiYgcHJvY2Vzcy5lbnYuTk9fUFJPWFkudHJpbSgpXG4gICAgICAgICAgICA/IHByb2Nlc3MuZW52Lk5PX1BST1hZLnRyaW0oKS5zcGxpdCgvW1xccyw7XSsvKVxuICAgICAgICAgICAgOiBbXVxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQpXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG4gICAgICAgIGlmICghbm9Qcm94eS5zb21lKChzdHIpID0+IHVybC5ob3N0bmFtZS5lbmRzV2l0aChzdHIpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGljaUZldGNoKFxuICAgICAgICAgICAgICAgIHJlcXVlc3QudXJsLFxuICAgICAgICAgICAgICAgIHsgLi4uKGluaXQgYXMgVW5kaWNpUmVxdWVzdEluaXQpLCBkaXNwYXRjaGVyOiBuZXcgUHJveHlBZ2VudChwcm94eVVybCkgfSxcbiAgICAgICAgICAgICkgYXMgdW5rbm93biBhcyBQcm9taXNlPFJlc3BvbnNlPlxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmZXRjaChpbnB1dCwgaW5pdClcbn1cbiIsICJleHBvcnQgY29uc3QgRVZFTlRTID0ge1xuICAgIFNES19TRVRVUDogJ3NkazpzZXR1cCcsXG4gICAgU0RLX0NMRUFOVVA6ICdzZGs6Y2xlYW51cCcsXG4gICAgU0RLX1BSRV9URVNUOiAnc2RrOnByZS10ZXN0JyxcbiAgICBTREtfVEVTVDogJ3Nkazp0ZXN0JyxcbiAgICBTREtfUE9TVF9URVNUOiAnc2RrOnBvc3QtdGVzdCcsXG4gICAgU0RLX0hPT0s6ICdzZGs6aG9vaycsXG4gICAgU0RLX0RSSVZFUjogJ3Nkazpkcml2ZXInLFxuICAgIFNES19BMTFZOiAnc2RrOmExMXknLFxuICAgIFNES19PMTFZOiAnc2RrOm8xMXknLFxuICAgIFNES19BVVRPX0NBUFRVUkU6ICdzZGs6YXV0by1jYXB0dXJlJyxcbiAgICBTREtfUFJPWFlfU0VUVVA6ICdzZGs6cHJveHktc2V0dXAnLFxuICAgIFNES19URVNUSFVCOiAnc2RrOnRlc3RodWInLFxuICAgIFNES19BVVRPTUFURTogJ3NkazphdXRvbWF0ZScsXG4gICAgU0RLX0FQUF9BVVRPTUFURTogJ3NkazphcHAtYXV0b21hdGUnLFxuICAgIFNES19UVVJCT1NDQUxFOiAnc2RrOnR1cmJvc2NhbGUnLFxuICAgIFNES19QRVJDWTogJ3NkazpwZXJjeScsXG4gICAgU0RLX1BSRV9JTklUSUFMSVpFOiAnc2RrOmRyaXZlcjpwcmUtaW5pdGlhbGl6YXRpb24nLFxuICAgIFNES19QT1NUX0lOSVRJQUxJWkU6ICdzZGs6ZHJpdmVyOnBvc3QtaW5pdGlhbGl6YXRpb24nLFxuICAgIFNES19DTElfQ0hFQ0tfVVBEQVRFOiAnc2RrOmNsaTpjaGVjay11cGRhdGUnLFxuICAgIFNES19DTElfRE9XTkxPQUQ6ICdzZGs6Y2xpOmRvd25sb2FkJyxcbiAgICBTREtfQ0xJX09OX0JPT1RTVFJBUDogJ3NkazpjbGk6b24tYm9vdHN0cmFwJyxcbiAgICBTREtfQ0xJX09OX0NPTk5FQ1Q6ICdzZGs6Y2xpOm9uLWNvbm5lY3QnLFxuICAgIFNES19DTElfU1RBUlQ6ICdzZGs6Y2xpOnN0YXJ0JyxcbiAgICBTREtfQ0xJX09OX1NUT1A6ICdzZGs6Y2xpOm9uLXN0b3AnLFxuICAgIFNES19DT05ORUNUX0JJTl9TRVNTSU9OOiAnc2RrOmNvbm5lY3RCaW5TZXNzaW9uJyxcbiAgICBTREtfU1RBUlRfQklOX1NFU1NJT046ICdzZGs6c3RhcnRCaW5TZXNzaW9uJyxcbiAgICAvLyBOZXcgZXZlbnRzIGZyb20gUHl0aG9uIFNES1xuICAgIFNES19EUklWRVJfSU5JVDogJ3Nkazpkcml2ZXJJbml0JyxcbiAgICBTREtfRklORF9ORUFSRVNUX0hVQjogJ3NkazpmaW5kTmVhcmVzdEh1YicsXG4gICAgU0RLX0FVVE9NQVRJT05fRlJBTUVXT1JLX0lOSVQ6ICdzZGs6YXV0b21hdGlvbkZyYW1ld29ya0luaXQnLFxuICAgIFNES19BVVRPTUFUSU9OX0ZSQU1FV09SS19TVEFSVDogJ3NkazphdXRvbWF0aW9uRnJhbWV3b3JrU3RhcnQnLFxuICAgIFNES19BVVRPTUFUSU9OX0ZSQU1FV09SS19TVE9QOiAnc2RrOmF1dG9tYXRpb25GcmFtZXdvcmtTdG9wJyxcbiAgICBTREtfQUNDRVNTSUJJTElUWV9DT05GSUc6ICdzZGs6YWNjZXNzaWJpbGl0eUNvbmZpZycsXG4gICAgU0RLX09CU0VSVkFCSUxJVFlfQ09ORklHOiAnc2RrOm9ic2VydmFiaWxpdHlDb25maWcnLFxuICAgIFNES19BSV9TRUxGX0hFQUxfU1RFUDogJ3NkazphaVNlbGZIZWFsU3RlcCcsXG4gICAgU0RLX0FJX1NFTEZfSEVBTF9HRVRfUkVTVUxUOiAnc2RrOmFpU2VsZkhlYWxHZXRSZXN1bHQnLFxuICAgIFNES19URVNUX0ZSQU1FV09SS19FVkVOVDogJ3Nkazp0ZXN0RnJhbWV3b3JrRXZlbnQnLFxuICAgIFNES19URVNUX1NFU1NJT05fRVZFTlQ6ICdzZGs6dGVzdFNlc3Npb25FdmVudCcsXG4gICAgU0RLX0NMSV9MT0dfQ1JFQVRFRF9FVkVOVDogJ3NkazpjbGk6bG9nQ3JlYXRlZEV2ZW50JyxcbiAgICBTREtfQ0xJX0VOUVVFVUVfVEVTVF9FVkVOVDogJ3NkazpjbGk6ZW5xdWV1ZVRlc3RFdmVudCcsXG4gICAgU0RLX09OX1NUT1A6ICdzZGs6b25TdG9wJyxcbiAgICBTREtfU0VORF9MT0dTOiAnc2RrOnNlbmRsb2dzJyxcbiAgICAvLyBGdW5uZWwgRXZlbnRzXG4gICAgU0RLX0ZVTk5FTF9URVNUX0FUVEVNUFRFRDogJ3NkazpmdW5uZWw6dGVzdC1hdHRlbXB0ZWQnLFxuICAgIFNES19GVU5ORUxfVEVTVF9TVUNDRVNTRlVMOiAnc2RrOmZ1bm5lbDp0ZXN0LXN1Y2Nlc3NmdWwnLFxuICAgIC8vIExvZyBVcGxvYWQgRXZlbnRzXG4gICAgU0RLX1VQTE9BRF9MT0dTOiAnc2RrOnVwbG9hZC1sb2dzJyxcbiAgICAvLyBLZXkgTWV0cmljcyBFdmVudHNcbiAgICBTREtfU0VORF9LRVlfTUVUUklDUzogJ3NkazpzZW5kLWtleS1tZXRyaWNzJyxcbiAgICBTREtfS0VZX01FVFJJQ1NfUFJFUEFSQVRJT046ICdzZGs6a2V5LW1ldHJpY3M6cHJlcGFyYXRpb24nLFxuICAgIFNES19LRVlfTUVUUklDU19VUExPQUQ6ICdzZGs6a2V5LW1ldHJpY3M6dXBsb2FkJyxcbiAgICAvLyBDTEkgQmluYXJ5IEV2ZW50c1xuICAgIFNES19DTElfRE9XTkxPQURfQklOQVJZOiAnc2RrOmNsaTpkb3dubG9hZC1iaW5hcnknLFxuICAgIFNES19DTElfQklOQVJZX1ZFUklGSUNBVElPTjogJ3NkazpjbGk6YmluYXJ5LXZlcmlmaWNhdGlvbicsXG4gICAgLy8gQ2xlYW51cCAmIFNodXRkb3duIEV2ZW50cyAodHJhY2tpbmcgZ2FwIGJldHdlZW4gZHJpdmVyOnF1aXQgYW5kIGZ1bm5lbDp0ZXN0LXN1Y2Nlc3NmdWwpXG4gICAgU0RLX0xJU1RFTkVSX1dPUktFUl9FTkQ6ICdzZGs6bGlzdGVuZXI6d29ya2VyLWVuZCcsXG4gICAgU0RLX1BFUkNZX1RFQVJET1dOOiAnc2RrOnBlcmN5OnRlYXJkb3duJyxcbiAgICBTREtfV09SS0VSX1NBVkVfREFUQTogJ3Nkazp3b3JrZXI6c2F2ZS1kYXRhJyxcbiAgICBTREtfUEVSRk9STUFOQ0VfUkVQT1JUX0dFTjogJ3NkazpwZXJmb3JtYW5jZTpyZXBvcnQtZ2VuZXJhdGlvbicsXG4gICAgU0RLX1BFUkZPUk1BTkNFX0pTT05fV1JJVEU6ICdzZGs6cGVyZm9ybWFuY2U6anNvbi13cml0ZScsXG4gICAgU0RLX1BFUkZPUk1BTkNFX0hUTUxfR0VOOiAnc2RrOnBlcmZvcm1hbmNlOmh0bWwtZ2VuZXJhdGlvbicsXG4gICAgLy8gRGV2aWNlIEFsbG9jYXRpb24gRXZlbnQgKHRyYWNraW5nIGdhcCBiZXR3ZWVuIGJlZm9yZVNlc3Npb24gYW5kIGJlZm9yZSBob29rcylcbiAgICBTREtfREVWSUNFX0FMTE9DQVRJT046ICdzZGs6ZGV2aWNlLWFsbG9jYXRpb24nXG59XG5cbmV4cG9ydCBjb25zdCBURVNUSFVCX0VWRU5UUyA9IHtcbiAgICBTVEFSVDogYCR7RVZFTlRTLlNES19URVNUSFVCfTpzdGFydGAsXG4gICAgU1RPUDogYCR7RVZFTlRTLlNES19URVNUSFVCfTpzdG9wYFxufVxuXG5leHBvcnQgY29uc3QgQVVUT01BVEVfRVZFTlRTID0ge1xuICAgIEtFRVBfQUxJVkU6IGAke0VWRU5UUy5TREtfQVVUT01BVEV9OmtlZXAtYWxpdmVgLFxuICAgIEhVQl9NQU5BR0VNRU5UOiBgJHtFVkVOVFMuU0RLX0FVVE9NQVRFfTpodWItbWFuYWdlbWVudGAsXG4gICAgTE9DQUxfU1RBUlQ6IGAke0VWRU5UUy5TREtfQVVUT01BVEV9OmxvY2FsLXN0YXJ0YCxcbiAgICBMT0NBTF9TVE9QOiBgJHtFVkVOVFMuU0RLX0FVVE9NQVRFfTpsb2NhbC1zdG9wYCxcbiAgICBEUklWRVJfTUFOQUdFOiBgJHtFVkVOVFMuU0RLX0FVVE9NQVRFfTpkcml2ZXItbWFuYWdlYCxcbiAgICBTRVNTSU9OX05BTUU6IGAke0VWRU5UUy5TREtfQVVUT01BVEV9OnNlc3Npb24tbmFtZWAsXG4gICAgU0VTU0lPTl9TVEFUVVM6IGAke0VWRU5UUy5TREtfQVVUT01BVEV9OnNlc3Npb24tc3RhdHVzYCxcbiAgICBTRVNTSU9OX0FOTk9UQVRJT046IGAke0VWRU5UUy5TREtfQVVUT01BVEV9OnNlc3Npb24tYW5ub3RhdGlvbmAsXG4gICAgSURMRV9USU1FT1VUOiBgJHtFVkVOVFMuU0RLX0FVVE9NQVRFfTppZGxlLXRpbWVvdXRgLFxuICAgIEdFTkVSQVRFX0NJX0FSVElGQUNUOiBgJHtFVkVOVFMuU0RLX0FVVE9NQVRFfTpjaS1hcnRpZmFjdHNgLFxuICAgIFBSSU5UX0JVSUxETElOSzogYCR7RVZFTlRTLlNES19BVVRPTUFURX06cHJpbnQtYnVpbGRsaW5rYFxufVxuXG5leHBvcnQgY29uc3QgQTExWV9FVkVOVFMgPSB7XG4gICAgUEVSRk9STV9TQ0FOOiBgJHtFVkVOVFMuU0RLX0ExMVl9OmRyaXZlci1wZXJmb3Jtc2NhbmAsXG4gICAgU0FWRV9SRVNVTFRTOiBgJHtFVkVOVFMuU0RLX0ExMVl9OnNhdmUtcmVzdWx0c2AsXG4gICAgR0VUX1JFU1VMVFM6IGAke0VWRU5UUy5TREtfQTExWX06Z2V0LWFjY2Vzc2liaWxpdHktcmVzdWx0c2AsXG4gICAgR0VUX1JFU1VMVFNfU1VNTUFSWTogYCR7RVZFTlRTLlNES19BMTFZfTpnZXQtYWNjZXNzaWJpbGl0eS1yZXN1bHRzLXN1bW1hcnlgXG59XG5cbmV4cG9ydCBjb25zdCBQRVJDWV9FVkVOVFMgPSB7XG4gICAgRE9XTkxPQUQ6IGAke0VWRU5UUy5TREtfUEVSQ1l9OmRvd25sb2FkYCxcbiAgICBTQ1JFRU5TSE9UOiBgJHtFVkVOVFMuU0RLX1BFUkNZfTpzY3JlZW5zaG90YCxcbiAgICBTVEFSVDogYCR7RVZFTlRTLlNES19QRVJDWX06c3RhcnRgLFxuICAgIFNUT1A6IGAke0VWRU5UUy5TREtfUEVSQ1l9OnN0b3BgLFxuICAgIEFVVE9fQ0FQVFVSRTogYCR7RVZFTlRTLlNES19QRVJDWX06YXV0by1jYXB0dXJlYCxcbiAgICBTTkFQU0hPVDogYCR7RVZFTlRTLlNES19QRVJDWX06c25hcHNob3RgLFxuICAgIFNDUkVFTlNIT1RfQVBQOiBgJHtFVkVOVFMuU0RLX1BFUkNZfTpzY3JlZW5zaG90LWFwcGBcbn1cblxuZXhwb3J0IGNvbnN0IE8xMVlfRVZFTlRTID0ge1xuICAgIFNZTkM6IGAke0VWRU5UUy5TREtfTzExWX06c3luY2AsXG4gICAgVEFLRV9TQ1JFRU5TSE9UOiBgJHtFVkVOVFMuU0RLX08xMVl9OmRyaXZlci10YWtlU2NyZWVuU2hvdGAsXG4gICAgUFJJTlRfQlVJTERMSU5LOiBgJHtFVkVOVFMuU0RLX08xMVl9OnByaW50LWJ1aWxkbGlua2Bcbn1cblxuZXhwb3J0IGNvbnN0IEhPT0tfRVZFTlRTID0ge1xuICAgIEJFRk9SRV9FQUNIOiBgJHtFVkVOVFMuU0RLX0hPT0t9OmJlZm9yZS1lYWNoYCxcbiAgICBBRlRFUl9FQUNIOiBgJHtFVkVOVFMuU0RLX0hPT0t9OmFmdGVyLWVhY2hgLFxuICAgIEFGVEVSX0FMTDogYCR7RVZFTlRTLlNES19IT09LfTphZnRlci1hbGxgLFxuICAgIEJFRk9SRV9BTEw6IGAke0VWRU5UUy5TREtfSE9PS306YmVmb3JlLWFsbGAsXG4gICAgQkVGT1JFOiBgJHtFVkVOVFMuU0RLX0hPT0t9OmJlZm9yZWAsXG4gICAgQUZURVI6IGAke0VWRU5UUy5TREtfSE9PS306YWZ0ZXJgXG59XG5cbmV4cG9ydCBjb25zdCBUVVJCT1NDQUxFX0VWRU5UUyA9IHtcbiAgICBIVUJfTUFOQUdFTUVOVDogYCR7RVZFTlRTLlNES19UVVJCT1NDQUxFfTpodWItbWFuYWdlbWVudGAsXG4gICAgUFJJTlRfQlVJTERMSU5LOiBgJHtFVkVOVFMuU0RLX1RVUkJPU0NBTEV9OnByaW50LWJ1aWxkbGlua2Bcbn1cblxuZXhwb3J0IGNvbnN0IEFQUF9BVVRPTUFURV9FVkVOVFMgPSB7XG4gICAgQVBQX1VQTE9BRDogYCR7RVZFTlRTLlNES19BUFBfQVVUT01BVEV9OmFwcC11cGxvYWRgXG59XG5cbmV4cG9ydCBjb25zdCBEUklWRVJfRVZFTlQgPSB7XG4gICAgUVVJVDogYCR7RVZFTlRTLlNES19EUklWRVJ9OnF1aXRgLFxuICAgIEdFVDogYCR7RVZFTlRTLlNES19EUklWRVJ9OmdldGAsXG4gICAgUFJFX0VYRUNVVEU6IGAke0VWRU5UUy5TREtfRFJJVkVSfTpwcmUtZXhlY3V0ZWAsXG4gICAgUE9TVF9FWEVDVVRFOiBgJHtFVkVOVFMuU0RLX0RSSVZFUn06cG9zdC1leGVjdXRlYCxcbiAgICBJTklUOiBFVkVOVFMuU0RLX0RSSVZFUl9JTklULFxuICAgIFBSRV9JTklUSUFMSVpFOiBFVkVOVFMuU0RLX1BSRV9JTklUSUFMSVpFLFxuICAgIFBPU1RfSU5JVElBTElaRTogRVZFTlRTLlNES19QT1NUX0lOSVRJQUxJWkVcbn1cblxuLyoqXG4gKiBGcmFtZXdvcmsgbGlmZWN5Y2xlIGV2ZW50cyBmb3IgYXV0b21hdGlvbiBmcmFtZXdvcmsgdHJhY2tpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IEZSQU1FV09SS19FVkVOVFMgPSB7XG4gICAgSU5JVDogRVZFTlRTLlNES19BVVRPTUFUSU9OX0ZSQU1FV09SS19JTklULFxuICAgIFNUQVJUOiBFVkVOVFMuU0RLX0FVVE9NQVRJT05fRlJBTUVXT1JLX1NUQVJULFxuICAgIFNUT1A6IEVWRU5UUy5TREtfQVVUT01BVElPTl9GUkFNRVdPUktfU1RPUFxufVxuXG4vKipcbiAqIE1vZHVsZSBjb25maWd1cmF0aW9uIGV2ZW50c1xuICovXG5leHBvcnQgY29uc3QgQ09ORklHX0VWRU5UUyA9IHtcbiAgICBBQ0NFU1NJQklMSVRZOiBFVkVOVFMuU0RLX0FDQ0VTU0lCSUxJVFlfQ09ORklHLFxuICAgIE9CU0VSVkFCSUxJVFk6IEVWRU5UUy5TREtfT0JTRVJWQUJJTElUWV9DT05GSUdcbn1cblxuLyoqXG4gKiBBSSBzZWxmLWhlYWxpbmcgZXZlbnRzXG4gKi9cbmV4cG9ydCBjb25zdCBBSV9FVkVOVFMgPSB7XG4gICAgU0VMRl9IRUFMX1NURVA6IEVWRU5UUy5TREtfQUlfU0VMRl9IRUFMX1NURVAsXG4gICAgU0VMRl9IRUFMX0dFVF9SRVNVTFQ6IEVWRU5UUy5TREtfQUlfU0VMRl9IRUFMX0dFVF9SRVNVTFRcbn1cblxuLyoqXG4gKiBFdmVudCBkaXNwYXRjaGVyIGV2ZW50cyBmb3IgdGVzdCBmcmFtZXdvcmsgYW5kIHNlc3Npb24gdHJhY2tpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IERJU1BBVENIRVJfRVZFTlRTID0ge1xuICAgIFRFU1RfRlJBTUVXT1JLOiBFVkVOVFMuU0RLX1RFU1RfRlJBTUVXT1JLX0VWRU5ULFxuICAgIFRFU1RfU0VTU0lPTjogRVZFTlRTLlNES19URVNUX1NFU1NJT05fRVZFTlQsXG4gICAgTE9HX0NSRUFURUQ6IEVWRU5UUy5TREtfQ0xJX0xPR19DUkVBVEVEX0VWRU5ULFxuICAgIEVOUVVFVUVfVEVTVDogRVZFTlRTLlNES19DTElfRU5RVUVVRV9URVNUX0VWRU5UXG59XG5cbiIsICJpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgZnMgZnJvbSAnbm9kZTpmcydcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsaydcblxuaW1wb3J0IGxvZ2dlciBmcm9tICdAd2Rpby9sb2dnZXInXG5cbmltcG9ydCB7IExPR1NfRklMRSB9IGZyb20gJy4uL2NvbnN0YW50cy5qcydcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gJy4uL3V0aWwuanMnXG5cbmNvbnN0IGxvZyA9IGxvZ2dlcignQHdkaW8vYnJvd3NlcnN0YWNrLXNlcnZpY2UvY2xpJylcblxuZXhwb3J0IGNsYXNzIEJTdGFja0xvZ2dlciB7XG4gICAgcHVibGljIHN0YXRpYyBsb2dGaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBMT0dTX0ZJTEUpXG4gICAgcHVibGljIHN0YXRpYyBsb2dGb2xkZXJQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdsb2dzJylcbiAgICBwcml2YXRlIHN0YXRpYyBsb2dGaWxlU3RyZWFtOiBmcy5Xcml0ZVN0cmVhbSB8IG51bGxcblxuICAgIHN0YXRpYyBsb2dUb0ZpbGUobG9nTWVzc2FnZTogc3RyaW5nLCBsb2dMZXZlbDogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubG9nRmlsZVN0cmVhbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5zdXJlTG9nc0ZvbGRlcigpXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dGaWxlU3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0odGhpcy5sb2dGaWxlUGF0aCwgeyBmbGFnczogJ2EnIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5sb2dGaWxlU3RyZWFtICYmIHRoaXMubG9nRmlsZVN0cmVhbS53cml0YWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nRmlsZVN0cmVhbS53cml0ZSh0aGlzLmZvcm1hdExvZyhsb2dNZXNzYWdlLCBsb2dMZXZlbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoYEZhaWxlZCB0byBsb2cgdG8gZmlsZS4gRXJyb3IgJHtlcnJvcn1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZm9ybWF0TG9nKGxvZ01lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYCR7Y2hhbGsuZ3JheShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkpfSAke2NoYWxrW0NPTE9SU1tsZXZlbF1dKGxldmVsLnRvVXBwZXJDYXNlKCkpfSAke2NoYWxrLndoaXRlQnJpZ2h0KCdAd2Rpby9icm93c2Vyc3RhY2stc2VydmljZScpfSAke2xvZ01lc3NhZ2V9XFxuYFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2dUb0ZpbGUobWVzc2FnZSwgJ2luZm8nKVxuICAgICAgICBsb2cuaW5mbyhtZXNzYWdlKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9nVG9GaWxlKG1lc3NhZ2UsICdlcnJvcicpXG4gICAgICAgIGxvZy5lcnJvcihtZXNzYWdlKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVidWcobWVzc2FnZTogc3RyaW5nLCBwYXJhbT86IHVua25vd24pIHtcbiAgICAgICAgdGhpcy5sb2dUb0ZpbGUobWVzc2FnZSwgJ2RlYnVnJylcbiAgICAgICAgaWYgKHBhcmFtKSB7XG4gICAgICAgICAgICBsb2cuZGVidWcobWVzc2FnZSwgcGFyYW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2cuZGVidWcobWVzc2FnZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2dUb0ZpbGUobWVzc2FnZSwgJ3dhcm4nKVxuICAgICAgICBsb2cud2FybihtZXNzYWdlKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdHJhY2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9nVG9GaWxlKG1lc3NhZ2UsICd0cmFjZScpXG4gICAgICAgIGxvZy50cmFjZShtZXNzYWdlKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJMb2dnZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ0ZpbGVTdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMubG9nRmlsZVN0cmVhbS5lbmQoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nRmlsZVN0cmVhbSA9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyTG9nRmlsZSgpIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmModGhpcy5sb2dGaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIGZzLnRydW5jYXRlU3luYyh0aGlzLmxvZ0ZpbGVQYXRoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBlbnN1cmVMb2dzRm9sZGVyKCkge1xuICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmModGhpcy5sb2dGb2xkZXJQYXRoKSl7XG4gICAgICAgICAgICBmcy5ta2RpclN5bmModGhpcy5sb2dGb2xkZXJQYXRoKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwgImV4cG9ydCBjb25zdCBUZXN0RnJhbWV3b3JrQ29uc3RhbnRzID0ge1xuICAgIEtFWV9URVNUX1VVSUQ6ICd0ZXN0X3V1aWQnLFxuICAgIEtFWV9URVNUX0lEIDogJ3Rlc3RfaWQnLFxuICAgIEtFWV9URVNUX05BTUUgOiAndGVzdF9uYW1lJyxcbiAgICBLRVlfVEVTVF9GSUxFX1BBVEggOiAndGVzdF9maWxlX3BhdGgnLFxuICAgIEtFWV9URVNUX1RBR1MgOiAndGVzdF90YWdzJyxcbiAgICBLRVlfVEVTVF9SRVNVTFQgOiAndGVzdF9yZXN1bHQnLFxuICAgIEtFWV9URVNUX1JFU1VMVF9BVCA6ICd0ZXN0X3Jlc3VsdF9hdCcsXG4gICAgS0VZX1RFU1RfU1RBUlRFRF9BVCA6ICd0ZXN0X3N0YXJ0ZWRfYXQnLFxuICAgIEtFWV9URVNUX0VOREVEX0FUIDogJ3Rlc3RfZW5kZWRfYXQnLFxuICAgIEtFWV9URVNUX0xPQ0FUSU9OIDogJ3Rlc3RfbG9jYXRpb24nLFxuICAgIEtFWV9URVNUX1NDT1BFIDogJ3Rlc3Rfc2NvcGUnLFxuICAgIEtFWV9URVNUX1NDT1BFUyA6ICd0ZXN0X3Njb3BlcycsXG4gICAgS0VZX1RFU1RfRlJBTUVXT1JLX05BTUUgOiAndGVzdF9mcmFtZXdvcmtfbmFtZScsXG4gICAgS0VZX1RFU1RfRlJBTUVXT1JLX1ZFUlNJT04gOiAndGVzdF9mcmFtZXdvcmtfdmVyc2lvbicsXG4gICAgS0VZX1RFU1RfQ09ERSA6ICd0ZXN0X2NvZGUnLFxuICAgIEtFWV9URVNUX1JFUlVOX05BTUUgOiAndGVzdF9yZXJ1bl9uYW1lJyxcbiAgICBLRVlfUExBVEZPUk1fSU5ERVggOiAncGxhdGZvcm1faW5kZXgnLFxuICAgIEtFWV9URVNUX0ZBSUxVUkUgOiAndGVzdF9mYWlsdXJlJyxcbiAgICBLRVlfVEVTVF9GQUlMVVJFX1RZUEUgOiAndGVzdF9mYWlsdXJlX3R5cGUnLFxuICAgIEtFWV9URVNUX0ZBSUxVUkVfUkVBU09OIDogJ3Rlc3RfZmFpbHVyZV9yZWFzb24nLFxuICAgIEtFWV9URVNUX0xPR1MgOiAndGVzdF9sb2dzJyxcbiAgICBLRVlfVEVTVF9NRVRBIDogJ3Rlc3RfbWV0YScsXG4gICAgS0VZX0NVU1RPTV9UQUdTIDogJ2N1c3RvbV9tZXRhZGF0YScsXG4gICAgS0VZX1RFU1RfREVGRVJSRUQgOiAndGVzdF9kZWZlcnJlZCcsXG4gICAgS0VZX1NFU1NJT05fTkFNRSA6ICd0ZXN0X3Nlc3Npb25fbmFtZScsXG4gICAgS0VZX0FVVE9NQVRFX1NFU1NJT05fTkFNRSA6ICdhdXRvbWF0ZV9zZXNzaW9uX25hbWUnLFxuICAgIEtFWV9BVVRPTUFURV9TRVNTSU9OX1NUQVRVUzogJ2F1dG9tYXRlX3Nlc3Npb25fc3RhdHVzJyxcbiAgICBLRVlfQVVUT01BVEVfU0VTU0lPTl9SRUFTT046ICdhdXRvbWF0ZV9zZXNzaW9uX3JlYXNvbicsXG4gICAgS0VZX0VWRU5UX1NUQVJURURfQVQgOiAnZXZlbnRfc3RhcnRlZF9hdCcsXG4gICAgS0VZX0VWRU5UX0VOREVEX0FUIDogJ2V2ZW50X2VuZGVkX2F0JyxcbiAgICBLRVlfSE9PS19JRCA6ICdob29rX2lkJyxcbiAgICBLRVlfSE9PS19SRVNVTFQgOiAnaG9va19yZXN1bHQnLFxuICAgIEtFWV9IT09LX0xPR1MgOiAnaG9va19sb2dzJyxcbiAgICBLRVlfSE9PS19OQU1FIDogJ2hvb2tfbmFtZScsXG4gICAgS0VZX0hPT0tTX1NUQVJURUQ6ICd0ZXN0X2hvb2tzX3N0YXJ0ZWQnLFxuICAgIEtFWV9IT09LU19GSU5JU0hFRDogJ3Rlc3RfaG9va3NfZmluaXNoZWQnLFxuICAgIERFRkFVTFRfVEVTVF9SRVNVTFQgOiAncGVuZGluZycsXG4gICAgREVGQVVMVF9IT09LX1JFU1VMVCA6ICdwZW5kaW5nJyxcbiAgICBLSU5EX1NDUkVFTlNIT1QgOiAnVEVTVF9TQ1JFRU5TSE9UJyxcbiAgICBLSU5EX0xPRyA6ICdURVNUX0xPRycsXG4gICAgSE9PS19SRUdFWCA6ICdeKEJFRk9SRV98QUZURVJfKScsXG59XG4iLCAiXG5pbXBvcnQgeyBCUk9XU0VSU1RBQ0tfUEVSQ1ksIEJST1dTRVJTVEFDS19PQlNFUlZBQklMSVRZLCBCUk9XU0VSU1RBQ0tfQUNDRVNTSUJJTElUWSB9IGZyb20gJy4uL2NvbnN0YW50cy5qcydcbmltcG9ydCB0eXBlIEJyb3dzZXJTdGFja0NvbmZpZyBmcm9tICcuLi9jb25maWcuanMnXG5pbXBvcnQgeyBCU3RhY2tMb2dnZXIgfSBmcm9tICcuLi9ic3RhY2tMb2dnZXIuanMnXG5pbXBvcnQgeyBpc1RydWUsIGlzTG9hZFRlc3RpbmdTZXNzaW9uIH0gZnJvbSAnLi4vdXRpbC5qcydcblxuaW50ZXJmYWNlIEVycm9yVHlwZSB7XG4gICAga2V5OiBzdHJpbmdcbiAgICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvcnMge1xuICAgIGVycm9yczogRXJyb3JUeXBlW11cbn1cblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RNYXAgPSAoY29uZmlnOiBCcm93c2VyU3RhY2tDb25maWcpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9PiB7XG4gICAgLy8gTFRTIGdhdGluZzogdW5kZXIgTFRTLCBhdXRvbWF0ZSBpcyBmb3JjZWQgZmFsc2UgKExUUyBidWlsZHMgcm91dGUgdG9cbiAgICAvLyB0aGUgTFRTIGludGVybmFsIGh1Yjsga2VlcGluZyBhdXRvbWF0ZT10cnVlIHRhZ3MgVGVzdEh1YiBzb3VyY2UgYXNcbiAgICAvLyBUTyxBVVQsTFRTIGluc3RlYWQgb2YgVE8sTFRTIFx1MjAxNCBzZWUgcHktc2RrIGVhNTNkOTE0KS4gVGhlIGBsdHNgIGtleVxuICAgIC8vIGl0c2VsZiBpcyBvbmx5IGVtaXR0ZWQgdW5kZXIgTFRTIHNvIG5vbi1MVFMgcGF5bG9hZHMgc3RheSBieXRlLVxuICAgIC8vIGlkZW50aWNhbCB0byB0aGUgcHJlLUxUUy1QUiBzaGFwZSAoYXZvaWRzIHN1cnByaXNpbmcgYW55IGJhY2tlbmQgd2l0aFxuICAgIC8vIHN0cmljdCB1bmtub3duLWtleSB2YWxpZGF0aW9uKS5cbiAgICBjb25zdCBsdHMgPSBpc0xvYWRUZXN0aW5nU2Vzc2lvbigpXG4gICAgY29uc3QgZW50cmllczogW3N0cmluZywgYm9vbGVhbiB8IHVuZGVmaW5lZF1bXSA9IFtcbiAgICAgICAgWydvYnNlcnZhYmlsaXR5JywgY29uZmlnLnRlc3RPYnNlcnZhYmlsaXR5LmVuYWJsZWRdLFxuICAgICAgICBbJ2FjY2Vzc2liaWxpdHknLCAhIWNvbmZpZy5hY2Nlc3NpYmlsaXR5XSxcbiAgICAgICAgWydwZXJjeScsIGNvbmZpZy5wZXJjeV0sXG4gICAgICAgIFsnYXV0b21hdGUnLCBsdHMgPyBmYWxzZSA6IGNvbmZpZy5hdXRvbWF0ZV0sXG4gICAgICAgIFsnYXBwX2F1dG9tYXRlJywgY29uZmlnLmFwcEF1dG9tYXRlXSxcbiAgICBdXG4gICAgaWYgKGx0cykge1xuICAgICAgICBlbnRyaWVzLnB1c2goWydsdHMnLCB0cnVlXSlcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhlbnRyaWVzLmZpbHRlcigoWywgdl0pID0+IHYgIT09IG51bGwpKSBhcyB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfVxufVxuXG5leHBvcnQgY29uc3Qgc2hvdWxkUHJvY2Vzc0V2ZW50Rm9yVGVzdGh1YiA9IChldmVudFR5cGU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIC8vIExUUyBzaG9ydC1jaXJjdWl0OiB3aGVuIHJ1bm5pbmcgYXMgYW4gTFRTIGxvYWQgdGVzdCAoQlJPV1NFUlNUQUNLX0xUUz10cnVlXG4gICAgLy8gZm9yIGxvY2FsIHJlcHJvLCBvciBCUk9XU0VSU1RBQ0tfTFRTX1NFU1NJT05fSUQgc2V0IGJ5IHRoZSBwb2QpLCBUZXN0SHViXG4gICAgLy8gZXZlbnQgZW1pc3Npb24gbXVzdCBhbHdheXMgZmxvdyByZWdhcmRsZXNzIG9mIHRoZSBvYnNlcnZhYmlsaXR5IC9cbiAgICAvLyBhY2Nlc3NpYmlsaXR5IC8gcGVyY3kgZW52IGZsYWdzLiBQb2QgcnVucyBkbyBleHBvcnRcbiAgICAvLyBCUk9XU0VSU1RBQ0tfT0JTRVJWQUJJTElUWSwgYnV0IHRoZSBsb2NhbC1yZXBybyBmbGFnIHBhdGggZG9lc24ndFxuICAgIC8vIGd1YXJhbnRlZSBpdCBcdTIwMTQgd2l0aG91dCB0aGlzIHNob3J0LWNpcmN1aXQsIGdldFByb2R1Y3RNYXAgY29ycmVjdGx5XG4gICAgLy8gZW1pdHMgbHRzOiB0cnVlIHdoaWxlIGV2ZXJ5IG9uVGVzdFN0YXJ0IC8gb25UZXN0RW5kIC8gb25Ib29rU3RhcnRcbiAgICAvLyBzaWxlbnRseSBuby1vcHMuIE1pcnJvciBvZiB0aGUgdW5jb25kaXRpb25hbCBMVFMgZXZlbnQgZmxvdyBpbiBweS1zZGsnc1xuICAgIC8vIHNob3VsZF9zZW5kX2V2ZW50X2Zvcl90ZXN0aHViKCkgKFBSICM5OTMpLlxuICAgIGlmIChpc0xvYWRUZXN0aW5nU2Vzc2lvbigpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmIChpc1RydWUocHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX09CU0VSVkFCSUxJVFldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBpZiAoaXNUcnVlKHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19BQ0NFU1NJQklMSVRZXSkpIHtcbiAgICAgICAgcmV0dXJuICEoWydIb29rUnVuU3RhcnRlZCcsICdIb29rUnVuRmluaXNoZWQnLCAnTG9nQ3JlYXRlZCddLmluY2x1ZGVzKGV2ZW50VHlwZSkpXG4gICAgfVxuICAgIGlmIChpc1RydWUocHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX1BFUkNZXSkgJiYgZXZlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvLyBFdmFsdWF0ZSB3aXRoIGlzVHJ1ZSBzbyBhIHByb2R1Y3QgZmxhZyBleHBsaWNpdGx5IHNldCB0byB0aGUgc3RyaW5nICdmYWxzZSdcbiAgICAvLyAoZS5nLiBvYnNlcnZhYmlsaXR5IHR1cm5lZCBvZmYgYWZ0ZXIgYSBmYWlsZWQvYmxvY2tlZCBidWlsZC1zdGFydCkgcmVhZHMgYXNcbiAgICAvLyBvZmYuIFJhdyBCb29sZWFuKCdmYWxzZScpIGlzIHRydXRoeSwgd2hpY2gga2VwdCBldmVudHMgZmxvd2luZyBmb3IgYW5cbiAgICAvLyBvYnNlcnZhYmlsaXR5LW9ubHkgc2Vzc2lvbiBldmVuIGFmdGVyIHRoZSBmbGFnIHdhcyBkaXNhYmxlZC5cbiAgICByZXR1cm4gaXNUcnVlKHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19BQ0NFU1NJQklMSVRZXSkgfHwgaXNUcnVlKHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19PQlNFUlZBQklMSVRZXSkgfHwgaXNUcnVlKHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19QRVJDWV0pXG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVFcnJvckZvck9ic2VydmFiaWxpdHkgPSAoZXJyb3I6IEVycm9ycyB8IG51bGwpOiB2b2lkID0+IHtcbiAgICBwcm9jZXNzLmVudltCUk9XU0VSU1RBQ0tfT0JTRVJWQUJJTElUWV0gPSAnZmFsc2UnXG4gICAgbG9nQnVpbGRFcnJvcihlcnJvciwgJ1Rlc3QgUmVwb3J0aW5nIGFuZCBBbmFseXRpY3MnKVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlRXJyb3JGb3JBY2Nlc3NpYmlsaXR5ID0gKGVycm9yOiBFcnJvcnMgfCBudWxsKTogdm9pZCA9PiB7XG4gICAgcHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX0FDQ0VTU0lCSUxJVFldID0gJ2ZhbHNlJ1xuICAgIGxvZ0J1aWxkRXJyb3IoZXJyb3IsICdhY2Nlc3NpYmlsaXR5Jylcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ0J1aWxkRXJyb3IgPSAoZXJyb3I6IEVycm9ycyB8IG51bGwsIHByb2R1Y3Q6IHN0cmluZyA9ICcnKTogdm9pZCA9PiB7XG4gICAgaWYgKCFlcnJvciB8fCAhZXJyb3IuZXJyb3JzKSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcihgJHtwcm9kdWN0LnRvVXBwZXJDYXNlKCl9IEJ1aWxkIGNyZWF0aW9uIGZhaWxlZCAke2Vycm9yIX1gKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGVycm9ySnNvbiBvZiBlcnJvci5lcnJvcnMpIHtcbiAgICAgICAgY29uc3QgZXJyb3JUeXBlID0gZXJyb3JKc29uLmtleVxuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvckpzb24ubWVzc2FnZVxuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGVycm9yVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnRVJST1JfSU5WQUxJRF9DUkVERU5USUFMUyc6XG4gICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmVycm9yKGVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnRVJST1JfQUNDRVNTX0RFTklFRCc6XG4gICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmluZm8oZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdFUlJPUl9TREtfREVQUkVDQVRFRCc6XG4gICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmVycm9yKGVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBCU3RhY2tMb2dnZXIuZXJyb3IoZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdE1hcEZvckJ1aWxkU3RhcnRDYWxsID0gKGNvbmZpZzogQnJvd3NlclN0YWNrQ29uZmlnLCBhY2Nlc3NpYmlsaXR5QXV0b21hdGlvbj86IGJvb2xlYW4gfCBudWxsKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPT4ge1xuICAgIC8vIExUUyBnYXRpbmc6IHVuZGVyIExUUywgYXV0b21hdGUgaXMgZm9yY2VkIGZhbHNlIChMVFMgYnVpbGRzIHJvdXRlIHRvXG4gICAgLy8gdGhlIExUUyBpbnRlcm5hbCBodWI7IGtlZXBpbmcgYXV0b21hdGU9dHJ1ZSB0YWdzIFRlc3RIdWIgc291cmNlIGFzXG4gICAgLy8gVE8sQVVULExUUyBpbnN0ZWFkIG9mIFRPLExUUyBcdTIwMTQgc2VlIHB5LXNkayBlYTUzZDkxNCkuIFRoZSBgbHRzYCBrZXlcbiAgICAvLyBpdHNlbGYgaXMgb25seSBlbWl0dGVkIHVuZGVyIExUUyB0byBrZWVwIG5vbi1MVFMgcGF5bG9hZHMgYnl0ZS1cbiAgICAvLyBpZGVudGljYWwgdG8gdGhlIHByZS1MVFMtUFIgc2hhcGUuXG4gICAgY29uc3QgbHRzID0gaXNMb2FkVGVzdGluZ1Nlc3Npb24oKVxuICAgIGNvbnN0IGVudHJpZXM6IFtzdHJpbmcsIGJvb2xlYW4gfCB1bmRlZmluZWQgfCBudWxsXVtdID0gW1xuICAgICAgICBbJ29ic2VydmFiaWxpdHknLCBjb25maWcudGVzdE9ic2VydmFiaWxpdHkuZW5hYmxlZF0sXG4gICAgICAgIFsnYWNjZXNzaWJpbGl0eScsIGFjY2Vzc2liaWxpdHlBdXRvbWF0aW9uXSxcbiAgICAgICAgWydwZXJjeScsIGNvbmZpZy5wZXJjeV0sXG4gICAgICAgIFsnYXV0b21hdGUnLCBsdHMgPyBmYWxzZSA6IGNvbmZpZy5hdXRvbWF0ZV0sXG4gICAgICAgIFsnYXBwX2F1dG9tYXRlJywgY29uZmlnLmFwcEF1dG9tYXRlXSxcbiAgICBdXG4gICAgaWYgKGx0cykge1xuICAgICAgICBlbnRyaWVzLnB1c2goWydsdHMnLCB0cnVlXSlcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhlbnRyaWVzLmZpbHRlcigoWywgdl0pID0+IHYgIT09IG51bGwpKSBhcyB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfVxufVxuIiwgImltcG9ydCBmcyBmcm9tICdub2RlOmZzJ1xuXG5pbXBvcnQgdHlwZSB7IE9wdGlvbnMgfSBmcm9tICdAd2Rpby90eXBlcydcblxuaW1wb3J0IHsgQlN0YWNrTG9nZ2VyIH0gZnJvbSAnLi4vYnN0YWNrTG9nZ2VyLmpzJ1xuaW1wb3J0IHsgaXNWYWxpZEVuYWJsZWRWYWx1ZSB9IGZyb20gJy4uL3V0aWwuanMnXG5pbXBvcnQgeyBTTUFSVF9TRUxFQ1RJT05fTU9ERV9SRUxFVkFOVF9GSVJTVCwgU01BUlRfU0VMRUNUSU9OX01PREVfUkVMRVZBTlRfT05MWSB9IGZyb20gJy4uL2NvbnN0YW50cy5qcydcblxuY29uc3QgUlVOX1NNQVJUX1NFTEVDVElPTiA9ICdydW5TbWFydFNlbGVjdGlvbidcblxuY29uc3QgQUxMT1dFRF9PUkNIRVNUUkFUSU9OX0tFWVMgPSBbXG4gICAgUlVOX1NNQVJUX1NFTEVDVElPTlxuXVxuXG50eXBlIFNtYXJ0U2VsZWN0aW9uUmVwb0luZm8gPSB7XG4gICAgdXJsPzogc3RyaW5nXG4gICAgZmVhdHVyZUJyYW5jaD86IHN0cmluZ1xuICAgIGJhc2VCcmFuY2g/OiBzdHJpbmdcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgW2tleTogc3RyaW5nXTogdW5rbm93blxufVxuXG50eXBlIFNtYXJ0U2VsZWN0aW9uU291cmNlID0gc3RyaW5nW10gfCBTbWFydFNlbGVjdGlvblJlcG9JbmZvW10gfCBudWxsXG5cbnR5cGUgUnVuU21hcnRTZWxlY3Rpb25Db25maWcgPSB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW4gfCBzdHJpbmdcbiAgICBtb2RlPzogc3RyaW5nXG4gICAgc291cmNlPzogc3RyaW5nIHwgc3RyaW5nW10gfCBTbWFydFNlbGVjdGlvblJlcG9JbmZvW10gfCBudWxsXG59XG5cbmNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9PiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSlcbilcblxuY29uc3QgYXNTdHJpbmcgPSAodmFsdWU6IHVua25vd24pOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbi8qKlxuICogQ2xhc3MgdG8gaGFuZGxlIHRlc3Qgb3JkZXJpbmcgZnVuY3Rpb25hbGl0eVxuICovXG5jbGFzcyBUZXN0T3JkZXJpbmcge1xuICAgIHByaXZhdGUgZW5hYmxlZDogYm9vbGVhblxuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nIHwgbnVsbFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMubmFtZSA9IG51bGxcbiAgICB9XG5cbiAgICBlbmFibGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIGRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMubmFtZSA9IG51bGxcbiAgICB9XG5cbiAgICBnZXRFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVkXG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cbn1cblxuLyoqXG4gKiBVdGlsaXR5IGNsYXNzIGZvciB0ZXN0IG9yY2hlc3RyYXRpb25cbiAqL1xudHlwZSBPcmNoZXN0cmF0aW9uQ29uZmlnID0gT3B0aW9ucy5UZXN0cnVubmVyIHwgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cblxuZXhwb3J0IGNsYXNzIE9yY2hlc3RyYXRpb25VdGlscyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBPcmNoZXN0cmF0aW9uVXRpbHMgfCBudWxsID0gbnVsbFxuICAgIHByaXZhdGUgcnVuU21hcnRTZWxlY3Rpb246IGJvb2xlYW5cbiAgICBwcml2YXRlIHNtYXJ0U2VsZWN0aW9uTW9kZTogc3RyaW5nXG4gICAgcHJpdmF0ZSB0ZXN0T3JkZXJpbmc6IFRlc3RPcmRlcmluZ1xuICAgIHByaXZhdGUgc21hcnRTZWxlY3Rpb25Tb3VyY2U6IFNtYXJ0U2VsZWN0aW9uU291cmNlXG4gICAgcHJpdmF0ZSBwcm9qZWN0TmFtZT86IHN0cmluZ1xuICAgIHByaXZhdGUgYnVpbGROYW1lPzogc3RyaW5nXG4gICAgcHJpdmF0ZSBidWlsZElkZW50aWZpZXI/OiBzdHJpbmdcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IE9yY2hlc3RyYXRpb25Db25maWcpIHtcbiAgICAgICAgdGhpcy5ydW5TbWFydFNlbGVjdGlvbiA9IGZhbHNlXG4gICAgICAgIHRoaXMuc21hcnRTZWxlY3Rpb25Nb2RlID0gU01BUlRfU0VMRUNUSU9OX01PREVfUkVMRVZBTlRfRklSU1RcbiAgICAgICAgdGhpcy50ZXN0T3JkZXJpbmcgPSBuZXcgVGVzdE9yZGVyaW5nKClcbiAgICAgICAgdGhpcy5zbWFydFNlbGVjdGlvblNvdXJjZSA9IG51bGwgLy8gU3RvcmUgc291cmNlIHBhdGhzIGlmIHByb3ZpZGVkXG5cbiAgICAgICAgLy8gQ2hlY2sgYm90aCBwb3NzaWJsZSBjb25maWd1cmF0aW9uIHBhdGhzOiBkaXJlY3Qgb3IgbmVzdGVkIGluIHNlcnZpY2VzXG4gICAgICAgIGNvbnN0IGNvbmZpZ1JlY29yZCA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG4gICAgICAgIGxldCB0ZXN0T3JjaE9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gaXNQbGFpbk9iamVjdChjb25maWdSZWNvcmQudGVzdE9yY2hlc3RyYXRpb25PcHRpb25zKVxuICAgICAgICAgICAgPyBjb25maWdSZWNvcmQudGVzdE9yY2hlc3RyYXRpb25PcHRpb25zXG4gICAgICAgICAgICA6IHt9XG5cbiAgICAgICAgLy8gSWYgbm90IGZvdW5kIGF0IHRvcCBsZXZlbCwgY2hlY2sgaWYgaXQncyBpbiB0aGUgYnJvd3NlcnN0YWNrIHNlcnZpY2UgY29uZmlnXG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gQXJyYXkuaXNBcnJheShjb25maWdSZWNvcmQuc2VydmljZXMpID8gY29uZmlnUmVjb3JkLnNlcnZpY2VzIDogdW5kZWZpbmVkXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0ZXN0T3JjaE9wdGlvbnMpLmxlbmd0aCA9PT0gMCAmJiBBcnJheS5pc0FycmF5KHNlcnZpY2VzKSkge1xuICAgICAgICAgICAgLy8gTG9vayBmb3IgYnJvd3NlcnN0YWNrIHNlcnZpY2UgY29uZmlndXJhdGlvblxuICAgICAgICAgICAgZm9yIChjb25zdCBzZXJ2aWNlIG9mIHNlcnZpY2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHNlcnZpY2UpICYmXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VbMF0gPT09ICdicm93c2Vyc3RhY2snICYmXG4gICAgICAgICAgICAgICAgICAgIGlzUGxhaW5PYmplY3Qoc2VydmljZVsxXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgaXNQbGFpbk9iamVjdChzZXJ2aWNlWzFdLnRlc3RPcmNoZXN0cmF0aW9uT3B0aW9ucylcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdE9yY2hPcHRpb25zID0gc2VydmljZVsxXS50ZXN0T3JjaGVzdHJhdGlvbk9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKCdbY29uc3RydWN0b3JdIEZvdW5kIHRlc3RPcmNoZXN0cmF0aW9uT3B0aW9ucyBpbiBicm93c2Vyc3RhY2sgc2VydmljZSBjb25maWcnKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyeSB0byBnZXQgcnVuU21hcnRTZWxlY3Rpb24gb3B0aW9uc1xuICAgICAgICBjb25zdCBydW5TbWFydFNlbGVjdGlvbk9wdHM6IFJ1blNtYXJ0U2VsZWN0aW9uQ29uZmlnID0gaXNQbGFpbk9iamVjdCh0ZXN0T3JjaE9wdGlvbnNbUlVOX1NNQVJUX1NFTEVDVElPTl0pXG4gICAgICAgICAgICA/IHRlc3RPcmNoT3B0aW9uc1tSVU5fU01BUlRfU0VMRUNUSU9OXSBhcyBSdW5TbWFydFNlbGVjdGlvbkNvbmZpZ1xuICAgICAgICAgICAgOiB7fVxuXG4gICAgICAgIHRoaXMuX3NldFJ1blNtYXJ0U2VsZWN0aW9uKFxuICAgICAgICAgICAgcnVuU21hcnRTZWxlY3Rpb25PcHRzLmVuYWJsZWQgPz8gZmFsc2UsXG4gICAgICAgICAgICBydW5TbWFydFNlbGVjdGlvbk9wdHMubW9kZSB8fCBTTUFSVF9TRUxFQ1RJT05fTU9ERV9SRUxFVkFOVF9GSVJTVCxcbiAgICAgICAgICAgIHJ1blNtYXJ0U2VsZWN0aW9uT3B0cy5zb3VyY2UgPz8gbnVsbFxuICAgICAgICApXG4gICAgICAgIC8vIEV4dHJhY3QgYnVpbGQgZGV0YWlscyBmcm9tIGNhcGFiaWxpdGllc1xuICAgICAgICB0aGlzLl9leHRyYWN0QnVpbGREZXRhaWxzKGNvbmZpZylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGJ1aWxkIGRldGFpbHMgZnJvbSBjYXBhYmlsaXRpZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9leHRyYWN0QnVpbGREZXRhaWxzKGNvbmZpZzogT3JjaGVzdHJhdGlvbkNvbmZpZyk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnUmVjb3JkID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cbiAgICAgICAgICAgIGNvbnN0IGNhcGFiaWxpdGllcyA9IChjb25maWdSZWNvcmQgYXMgeyBjYXBhYmlsaXRpZXM/OiB1bmtub3duIH0pLmNhcGFiaWxpdGllc1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjYXBhYmlsaXRpZXMpKSB7XG4gICAgICAgICAgICAgICAgY2FwYWJpbGl0aWVzLmZvckVhY2goY2FwYWJpbGl0eSA9PiB0aGlzLl9wYXJzZUNhcGFiaWxpdHkoY2FwYWJpbGl0eSkpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoY2FwYWJpbGl0aWVzKSkge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBtdWx0aXJlbW90ZSBjYXBhYmlsaXRpZXNcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGNhcGFiaWxpdGllcykuZm9yRWFjaCgoY2FwcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChjYXBzKSAmJiAnY2FwYWJpbGl0aWVzJyBpbiBjYXBzICYmIGlzUGxhaW5PYmplY3QoY2Fwcy5jYXBhYmlsaXRpZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJzZUNhcGFiaWxpdHkoY2Fwcy5jYXBhYmlsaXRpZXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFtfZXh0cmFjdEJ1aWxkRGV0YWlsc10gRXh0cmFjdGVkIC0gcHJvamVjdE5hbWU6ICR7dGhpcy5wcm9qZWN0TmFtZX0sIGJ1aWxkTmFtZTogJHt0aGlzLmJ1aWxkTmFtZX0sIGJ1aWxkSWRlbnRpZmllcjogJHt0aGlzLmJ1aWxkSWRlbnRpZmllcn1gKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmVycm9yKGBbX2V4dHJhY3RCdWlsZERldGFpbHNdICR7ZXJyb3J9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlQ2FwYWJpbGl0eShjYXBhYmlsaXR5OiB1bmtub3duKTogdm9pZCB7XG4gICAgICAgIGlmICghaXNQbGFpbk9iamVjdChjYXBhYmlsaXR5KSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBic3RhY2tPcHRpb25zUmF3ID0gY2FwYWJpbGl0eVsnYnN0YWNrOm9wdGlvbnMnXVxuXG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KGJzdGFja09wdGlvbnNSYXcpKSB7XG4gICAgICAgICAgICBjb25zdCBidWlsZE5hbWUgPSBhc1N0cmluZyhic3RhY2tPcHRpb25zUmF3LmJ1aWxkTmFtZSlcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gYXNTdHJpbmcoYnN0YWNrT3B0aW9uc1Jhdy5wcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkSWRlbnRpZmllciA9IGFzU3RyaW5nKGJzdGFja09wdGlvbnNSYXcuYnVpbGRJZGVudGlmaWVyKVxuXG4gICAgICAgICAgICBpZiAoYnVpbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZE5hbWUgPSBidWlsZE5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJ1aWxkSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJZGVudGlmaWVyID0gYnVpbGRJZGVudGlmaWVyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsZWdhY3lCdWlsZElkZW50aWZpZXIgPSBhc1N0cmluZyhjYXBhYmlsaXR5Wydicm93c2Vyc3RhY2suYnVpbGRJZGVudGlmaWVyJ10pXG4gICAgICAgICAgICBjb25zdCBsZWdhY3lCdWlsZE5hbWUgPSBhc1N0cmluZyhjYXBhYmlsaXR5LmJ1aWxkKVxuXG4gICAgICAgICAgICBpZiAobGVnYWN5QnVpbGRJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZElkZW50aWZpZXIgPSBsZWdhY3lCdWlsZElkZW50aWZpZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZWdhY3lCdWlsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkTmFtZSA9IGxlZ2FjeUJ1aWxkTmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG9yIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiBPcmNoZXN0cmF0aW9uVXRpbHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoY29uZmlnPzogT3JjaGVzdHJhdGlvbkNvbmZpZyk6IE9yY2hlc3RyYXRpb25VdGlscyB8IG51bGwge1xuICAgICAgICBpZiAoIU9yY2hlc3RyYXRpb25VdGlscy5faW5zdGFuY2UgJiYgY29uZmlnKSB7XG4gICAgICAgICAgICBPcmNoZXN0cmF0aW9uVXRpbHMuX2luc3RhbmNlID0gbmV3IE9yY2hlc3RyYXRpb25VdGlscyhjb25maWcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9yY2hlc3RyYXRpb25VdGlscy5faW5zdGFuY2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgb3JjaGVzdHJhdGlvbiBkYXRhIGZyb20gY29uZmlnXG4gICAgICovXG4gICAgc3RhdGljIGdldE9yY2hlc3RyYXRpb25EYXRhKGNvbmZpZzogT3JjaGVzdHJhdGlvbkNvbmZpZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgICAgICAgY29uc3QgY29uZmlnUmVjb3JkID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cbiAgICAgICAgY29uc3Qgb3JjaGVzdHJhdGlvbkRhdGEgPSBpc1BsYWluT2JqZWN0KGNvbmZpZ1JlY29yZC50ZXN0T3JjaGVzdHJhdGlvbk9wdGlvbnMpXG4gICAgICAgICAgICA/IGNvbmZpZ1JlY29yZC50ZXN0T3JjaGVzdHJhdGlvbk9wdGlvbnNcbiAgICAgICAgICAgIDoge31cbiAgICAgICAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMob3JjaGVzdHJhdGlvbkRhdGEpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKEFMTE9XRURfT1JDSEVTVFJBVElPTl9LRVlTLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBydW4gc21hcnQgc2VsZWN0aW9uIHNldHRpbmdcbiAgICAgKi9cbiAgICBnZXRSdW5TbWFydFNlbGVjdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuU21hcnRTZWxlY3Rpb25cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc21hcnQgc2VsZWN0aW9uIG1vZGVcbiAgICAgKi9cbiAgICBnZXRTbWFydFNlbGVjdGlvbk1vZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc21hcnRTZWxlY3Rpb25Nb2RlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNtYXJ0IHNlbGVjdGlvbiBzb3VyY2VcbiAgICAgKi9cbiAgICBnZXRTbWFydFNlbGVjdGlvblNvdXJjZSgpOiBTbWFydFNlbGVjdGlvblNvdXJjZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNtYXJ0U2VsZWN0aW9uU291cmNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHByb2plY3QgbmFtZVxuICAgICAqL1xuICAgIGdldFByb2plY3ROYW1lKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGJ1aWxkIG5hbWVcbiAgICAgKi9cbiAgICBnZXRCdWlsZE5hbWUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGROYW1lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGJ1aWxkIGlkZW50aWZpZXJcbiAgICAgKi9cbiAgICBnZXRCdWlsZElkZW50aWZpZXIoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRJZGVudGlmaWVyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGJ1aWxkIGRldGFpbHNcbiAgICAgKi9cbiAgICBzZXRCdWlsZERldGFpbHMocHJvamVjdE5hbWU/OiBzdHJpbmcsIGJ1aWxkTmFtZT86IHN0cmluZywgYnVpbGRJZGVudGlmaWVyPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZVxuICAgICAgICB0aGlzLmJ1aWxkTmFtZSA9IGJ1aWxkTmFtZVxuICAgICAgICB0aGlzLmJ1aWxkSWRlbnRpZmllciA9IGJ1aWxkSWRlbnRpZmllclxuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFtzZXRCdWlsZERldGFpbHNdIFNldCAtIHByb2plY3ROYW1lOiAke3RoaXMucHJvamVjdE5hbWV9LCBidWlsZE5hbWU6ICR7dGhpcy5idWlsZE5hbWV9LCBidWlsZElkZW50aWZpZXI6ICR7dGhpcy5idWlsZElkZW50aWZpZXJ9YClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcnVuIHNtYXJ0IHNlbGVjdGlvblxuICAgICAqL1xuICAgIHByaXZhdGUgX3NldFJ1blNtYXJ0U2VsZWN0aW9uKGVuYWJsZWQ6IGJvb2xlYW4gfCBzdHJpbmcsIG1vZGU6IHN0cmluZywgc291cmNlOiBzdHJpbmdbXSB8IFNtYXJ0U2VsZWN0aW9uUmVwb0luZm9bXSB8IHN0cmluZyB8IG51bGwgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBQcm9wZXJseSB2YWxpZGF0ZSBlbmFibGVkIHZhbHVlIC0gb25seSBhY2NlcHQgdHJ1ZSBib29sZWFuIG9yIHN0cmluZyBcInRydWVcIlxuICAgICAgICAgICAgdGhpcy5ydW5TbWFydFNlbGVjdGlvbiA9IGlzVmFsaWRFbmFibGVkVmFsdWUoZW5hYmxlZClcbiAgICAgICAgICAgIHRoaXMuc21hcnRTZWxlY3Rpb25Nb2RlID0gbW9kZVxuICAgICAgICAgICAgdGhpcy5zbWFydFNlbGVjdGlvblNvdXJjZSA9IFtdXG5cbiAgICAgICAgICAgIC8vIExvZyB0aGUgY29uZmlndXJhdGlvbiBmb3IgZGVidWdnaW5nXG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFNldHRpbmcgcnVuU21hcnRTZWxlY3Rpb246IGVuYWJsZWQ9JHt0aGlzLnJ1blNtYXJ0U2VsZWN0aW9ufSwgbW9kZT0ke3RoaXMuc21hcnRTZWxlY3Rpb25Nb2RlfWApXG4gICAgICAgICAgICBpZiAodGhpcy5ydW5TbWFydFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIE1vZGUgdmFsaWRhdGlvbiAtIG9ubHkgd2hlbiBzbWFydCBzZWxlY3Rpb24gaXMgZW5hYmxlZFxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkTW9kZXMgPSBbU01BUlRfU0VMRUNUSU9OX01PREVfUkVMRVZBTlRfRklSU1QsIFNNQVJUX1NFTEVDVElPTl9NT0RFX1JFTEVWQU5UX09OTFldXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZE1vZGVzLmluY2x1ZGVzKHRoaXMuc21hcnRTZWxlY3Rpb25Nb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBCU3RhY2tMb2dnZXIud2FybihgSW52YWxpZCBzbWFydCBzZWxlY3Rpb24gbW9kZSAnJHt0aGlzLnNtYXJ0U2VsZWN0aW9uTW9kZX0nIHByb3ZpZGVkLiBEZWZhdWx0aW5nIHRvICcke1NNQVJUX1NFTEVDVElPTl9NT0RFX1JFTEVWQU5UX0ZJUlNUfScuYClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbWFydFNlbGVjdGlvbk1vZGUgPSBTTUFSVF9TRUxFQ1RJT05fTU9ERV9SRUxFVkFOVF9GSVJTVFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc21hcnRTZWxlY3Rpb25Tb3VyY2UgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZygnTm8gc291cmNlIHByb3ZpZGVkIGZvciBzbWFydCBzZWxlY3Rpb247IGRlZmF1bHRpbmcgdG8gbnVsbC4nKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc21hcnRTZWxlY3Rpb25Tb3VyY2UgPSBzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBTbWFydCBzZWxlY3Rpb24gc291cmNlIHNldCB0byBhcnJheTogJHtKU09OLnN0cmluZ2lmeShzb3VyY2UpfWApXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyAmJiBzb3VyY2UuZW5kc1dpdGgoJy5qc29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbWFydFNlbGVjdGlvblNvdXJjZSA9IHRoaXMuX2xvYWRTb3VyY2VGcm9tRmlsZShzb3VyY2UpIHx8IFtdXG4gICAgICAgICAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgU21hcnQgc2VsZWN0aW9uIHNvdXJjZSBsb2FkZWQgZnJvbSBmaWxlOiAke3NvdXJjZX1gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRUZXN0T3JkZXJpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZXJyb3IoYFtfc2V0UnVuU21hcnRTZWxlY3Rpb25dICR7ZX1gKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgSlNPTiBzb3VyY2UgY29uZmlndXJhdGlvbiBmaWxlIGFuZCBmb3JtYXQgaXQgZm9yIHNtYXJ0IHNlbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmaWxlUGF0aCAtIFBhdGggdG8gdGhlIEpTT04gY29uZmlndXJhdGlvbiBmaWxlXG4gICAgICogQHJldHVybnMgRm9ybWF0dGVkIGxpc3Qgb2YgcmVwb3NpdG9yeSBjb25maWd1cmF0aW9uc1xuICAgICAqL1xuICAgIHByaXZhdGUgX2xvYWRTb3VyY2VGcm9tRmlsZShmaWxlUGF0aDogc3RyaW5nKTogU21hcnRTZWxlY3Rpb25SZXBvSW5mb1tdIHtcbiAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmVycm9yKGBTb3VyY2UgZmlsZSAnJHtmaWxlUGF0aH0nIGRvZXMgbm90IGV4aXN0LmApXG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhOiB1bmtub3duID0gbnVsbFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZmlsZUNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGY4JylcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKVxuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmVycm9yKGBFcnJvciBwYXJzaW5nIEpTT04gZnJvbSBzb3VyY2UgZmlsZSAnJHtmaWxlUGF0aH0nOiAke21lc3NhZ2V9YClcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FjaGUgZmVhdHVyZSBicmFuY2ggbWFwcGluZ3MgZnJvbSBlbnYgdG8gYXZvaWQgcmVwZWF0ZWQgcGFyc2luZ1xuICAgICAgICBsZXQgZmVhdHVyZUJyYW5jaEVudk1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IG51bGwgPSBudWxsXG5cbiAgICAgICAgY29uc3QgbG9hZEZlYXR1cmVCcmFuY2hNYXBzID0gKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPT4ge1xuICAgICAgICAgICAgY29uc3QgZW52VmFyID0gcHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX09SQ0hFU1RSQVRJT05fU01BUlRfU0VMRUNUSU9OX0ZFQVRVUkVfQlJBTkNIRVMgfHwgJydcbiAgICAgICAgICAgIGxldCBlbnZNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGVudk1hcCA9IGVudlZhci5zdGFydHNXaXRoKCd7JykgJiYgZW52VmFyLmVuZHNXaXRoKCd9JylcbiAgICAgICAgICAgICAgICAgICAgPyBKU09OLnBhcnNlKGVudlZhcilcbiAgICAgICAgICAgICAgICAgICAgOiBlbnZWYXIuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uaW5jbHVkZXMoJzonKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGFjYzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiwgaXRlbTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gaXRlbS5zcGxpdCgnOicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nba2V5LnRyaW0oKV0gPSB2YWx1ZS50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcihgRXJyb3IgcGFyc2luZyBmZWF0dXJlIGJyYW5jaCBtYXBwaW5nczogJHtlcnJvcn1gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYEZlYXR1cmUgYnJhbmNoIG1hcHBpbmdzIGZyb20gZW52OiAke0pTT04uc3RyaW5naWZ5KGVudk1hcCl9YClcbiAgICAgICAgICAgIHJldHVybiBlbnZNYXBcbiAgICAgICAgfVxuXG4gICAgICAgIGZlYXR1cmVCcmFuY2hFbnZNYXAgPSBsb2FkRmVhdHVyZUJyYW5jaE1hcHMoKVxuXG4gICAgICAgIGNvbnN0IGdldEZlYXR1cmVCcmFuY2ggPSAobmFtZTogc3RyaW5nLCByZXBvSW5mbzogU21hcnRTZWxlY3Rpb25SZXBvSW5mbyk6IHN0cmluZyB8IG51bGwgPT4ge1xuICAgICAgICAgICAgLy8gMS4gQ2hlY2sgaW4gZW52aXJvbm1lbnQgdmFyaWFibGUgbWFwXG4gICAgICAgICAgICBpZiAoZmVhdHVyZUJyYW5jaEVudk1hcCAmJiBmZWF0dXJlQnJhbmNoRW52TWFwW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmVCcmFuY2hFbnZNYXBbbmFtZV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIDIuIENoZWNrIGluIHJlcG9faW5mb1xuICAgICAgICAgICAgaWYgKHJlcG9JbmZvLmZlYXR1cmVCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwb0luZm8uZmVhdHVyZUJyYW5jaFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgZGF0YSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YTogU21hcnRTZWxlY3Rpb25SZXBvSW5mb1tdID0gW11cbiAgICAgICAgICAgIGNvbnN0IG5hbWVQYXR0ZXJuID0gL15bQS1aMC05X10rJC9cblxuICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgcmVwb0luZm9dIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1BsYWluT2JqZWN0KHJlcG9JbmZvKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVkUmVwb0luZm8gPSByZXBvSW5mbyBhcyBTbWFydFNlbGVjdGlvblJlcG9JbmZvXG5cbiAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSB0aGF0IHVybCBpcyBhIHN0cmluZyBhbmQgaXMgcHJlc2VudFxuICAgICAgICAgICAgICAgIGlmICghdHlwZWRSZXBvSW5mby51cmwgfHwgdHlwZW9mIHR5cGVkUmVwb0luZm8udXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBCU3RhY2tMb2dnZXIud2FybihgUmVwb3NpdG9yeSBVUkwgaXMgbWlzc2luZyBvciBpbnZhbGlkIGZvciBzb3VyY2UgJyR7bmFtZX0nOiAke0pTT04uc3RyaW5naWZ5KHJlcG9JbmZvKX1gKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIHRoYXQgYmFzZUJyYW5jaCwgaWYgcHJvdmlkZWQsIGlzIGEgc3RyaW5nXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVkUmVwb0luZm8uYmFzZUJyYW5jaCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0eXBlZFJlcG9JbmZvLmJhc2VCcmFuY2ggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIEJTdGFja0xvZ2dlci53YXJuKGBCYXNlIGJyYW5jaCBtdXN0IGJlIGEgc3RyaW5nIGZvciBzb3VyY2UgJyR7bmFtZX0nOiAke0pTT04uc3RyaW5naWZ5KHJlcG9JbmZvKX1gKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIHRoYXQgZmVhdHVyZUJyYW5jaCwgaWYgcHJvdmlkZWQsIGlzIGEgc3RyaW5nXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVkUmVwb0luZm8uZmVhdHVyZUJyYW5jaCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB0eXBlZFJlcG9JbmZvLmZlYXR1cmVCcmFuY2ggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIEJTdGFja0xvZ2dlci53YXJuKGBGZWF0dXJlIGJyYW5jaCBtdXN0IGJlIGEgc3RyaW5nIGZvciBzb3VyY2UgJyR7bmFtZX0nOiAke0pTT04uc3RyaW5naWZ5KHJlcG9JbmZvKX1gKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIG5hbWVcbiAgICAgICAgICAgICAgICBpZiAoIW5hbWVQYXR0ZXJuLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLndhcm4oYEludmFsaWQgc291cmNlIGlkZW50aWZpZXIgZm9ybWF0IGZvciAnJHtuYW1lfSc6ICR7SlNPTi5zdHJpbmdpZnkocmVwb0luZm8pfWApXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgbGVuZ3RoXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gMzAgfHwgbmFtZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIEJTdGFja0xvZ2dlci53YXJuKGBTb3VyY2UgaWRlbnRpZmllciAnJHtuYW1lfScgbXVzdCBoYXZlIGEgbGVuZ3RoIGJldHdlZW4gMSBhbmQgMzAgY2hhcmFjdGVycy5gKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE9ubHkgY29uc2lkZXIgdXJsLCBiYXNlQnJhbmNoLCBhbmQgZmVhdHVyZUJyYW5jaCAtIGlnbm9yZSBhbGwgb3RoZXIga2V5c1xuICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVCcmFuY2ggPSBnZXRGZWF0dXJlQnJhbmNoKG5hbWUsIHR5cGVkUmVwb0luZm8pXG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFJlcG9JbmZvOiBTbWFydFNlbGVjdGlvblJlcG9JbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHR5cGVkUmVwb0luZm8udXJsLFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlQnJhbmNoOiBmZWF0dXJlQnJhbmNoID8/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE9ubHkgYWRkIGJhc2VCcmFuY2ggaWYgaXQncyBwcm92aWRlZFxuICAgICAgICAgICAgICAgIGlmICh0eXBlZFJlcG9JbmZvLmJhc2VCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRSZXBvSW5mby5iYXNlQnJhbmNoID0gdHlwZWRSZXBvSW5mby5iYXNlQnJhbmNoXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXJlZFJlcG9JbmZvLmZlYXR1cmVCcmFuY2ggfHwgZmlsdGVyZWRSZXBvSW5mby5mZWF0dXJlQnJhbmNoID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBCU3RhY2tMb2dnZXIud2FybihgRmVhdHVyZSBicmFuY2ggbm90IHNwZWNpZmllZCBmb3Igc291cmNlICcke25hbWV9JzogJHtKU09OLnN0cmluZ2lmeShyZXBvSW5mbyl9YClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyZWRSZXBvSW5mby5iYXNlQnJhbmNoICYmIGZpbHRlcmVkUmVwb0luZm8uYmFzZUJyYW5jaCA9PT0gZmlsdGVyZWRSZXBvSW5mby5mZWF0dXJlQnJhbmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIEJTdGFja0xvZ2dlci53YXJuKGBGZWF0dXJlIGJyYW5jaCBhbmQgYmFzZSBicmFuY2ggY2Fubm90IGJlIHRoZSBzYW1lIGZvciBzb3VyY2UgJyR7bmFtZX0nOiAke0pTT04uc3RyaW5naWZ5KHJlcG9JbmZvKX1gKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGEucHVzaChmaWx0ZXJlZFJlcG9JbmZvKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmZpbHRlcihpc1BsYWluT2JqZWN0KSBhcyBTbWFydFNlbGVjdGlvblJlcG9JbmZvW11cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0ZXN0IG9yZGVyaW5nIGJhc2VkIG9uIHByaW9yaXRpZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zZXRUZXN0T3JkZXJpbmcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJ1blNtYXJ0U2VsZWN0aW9uKSB7IC8vIEhpZ2hlc3QgcHJpb3JpdHlcbiAgICAgICAgICAgIHRoaXMudGVzdE9yZGVyaW5nLmVuYWJsZShSVU5fU01BUlRfU0VMRUNUSU9OKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50ZXN0T3JkZXJpbmcuZGlzYWJsZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0ZXN0IG9yZGVyaW5nIGlzIGVuYWJsZWRcbiAgICAgKi9cbiAgICB0ZXN0T3JkZXJpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0T3JkZXJpbmcuZ2V0RW5hYmxlZCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRlc3Qgb3JkZXJpbmcgbmFtZVxuICAgICAqL1xuICAgIGdldFRlc3RPcmRlcmluZ05hbWUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIGlmICh0aGlzLnRlc3RPcmRlcmluZy5nZXRFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlc3RPcmRlcmluZy5nZXROYW1lKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0ZXN0IG9yY2hlc3RyYXRpb24gbWV0YWRhdGFcbiAgICAgKi9cbiAgICBnZXRUZXN0T3JjaGVzdHJhdGlvbk1ldGFkYXRhKCk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICdydW5fc21hcnRfc2VsZWN0aW9uJzoge1xuICAgICAgICAgICAgICAgICdlbmFibGVkJzogdGhpcy5nZXRSdW5TbWFydFNlbGVjdGlvbigpLFxuICAgICAgICAgICAgICAgICdtb2RlJzogdGhpcy5nZXRTbWFydFNlbGVjdGlvbk1vZGUoKSxcbiAgICAgICAgICAgICAgICAnc291cmNlJzogdGhpcy5nZXRTbWFydFNlbGVjdGlvblNvdXJjZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYnVpbGQgc3RhcnQgZGF0YVxuICAgICAqL1xuICAgIGdldEJ1aWxkU3RhcnREYXRhKCk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJ1bl9zbWFydF9zZWxlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0aGlzLmdldFJ1blNtYXJ0U2VsZWN0aW9uKCksXG4gICAgICAgICAgICAgICAgbW9kZTogdGhpcy5nZXRTbWFydFNlbGVjdGlvbk1vZGUoKVxuICAgICAgICAgICAgICAgIC8vIE5vdCBzZW5kaW5nIFwic291cmNlXCIgdG8gVEggYnVpbGRzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yY2hlc3RyYXRpb25VdGlsc1xuIiwgImltcG9ydCB0eXBlIHsgQ2FwYWJpbGl0aWVzLCBPcHRpb25zIH0gZnJvbSAnQHdkaW8vdHlwZXMnXG5cbmltcG9ydCB7IEJTVEFDS19TRVJWSUNFX1ZFUlNJT04sIEJST1dTRVJTVEFDS19URVNUSFVCX1VVSUQsIFdESU9fTkFNSU5HX1BSRUZJWCB9IGZyb20gJy4vY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBCcm93c2Vyc3RhY2tDb25maWcsIENyZWRlbnRpYWxzRm9yQ3Jhc2hSZXBvcnRVcGxvYWQsIFVzZXJDb25maWdmb3JSZXBvcnRpbmcgfSBmcm9tICcuL3R5cGVzLmpzJ1xuaW1wb3J0IHsgREVGQVVMVF9SRVFVRVNUX0NPTkZJRywgZ2V0T2JzZXJ2YWJpbGl0eUtleSwgZ2V0T2JzZXJ2YWJpbGl0eVVzZXIgfSBmcm9tICcuL3V0aWwuanMnXG5pbXBvcnQgeyBCU3RhY2tMb2dnZXIgfSBmcm9tICcuL2JzdGFja0xvZ2dlci5qcydcbmltcG9ydCBBUElVdGlscyBmcm9tICcuL2NsaS9hcGlVdGlscy5qcydcblxuaW1wb3J0IHsgX2ZldGNoIGFzIGZldGNoIH0gZnJvbSAnLi9mZXRjaFdyYXBwZXIuanMnXG5cbnR5cGUgRGljdCA9IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyYXNoUmVwb3J0ZXIge1xuICAgIC8qIFVzZXIgdGVzdCBjb25maWcgZm9yIGJ1aWxkIHJ1biBtaW51cyBQSUkgKi9cbiAgICBwdWJsaWMgc3RhdGljIHVzZXJDb25maWdGb3JSZXBvcnRpbmc6IFVzZXJDb25maWdmb3JSZXBvcnRpbmcgPSB7fVxuICAgIC8qIFVzZXIgY3JlZGVudGlhbHMgdXNlZCBmb3IgcmVwb3J0aW5nIGNyYXNoZXMgaW4gYnJvd3NlcnN0YWNrIHNlcnZpY2UgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVkZW50aWFsc0ZvckNyYXNoUmVwb3J0VXBsb2FkOiBDcmVkZW50aWFsc0ZvckNyYXNoUmVwb3J0VXBsb2FkID0ge31cblxuICAgIHN0YXRpYyBzZXRDcmVkZW50aWFsc0ZvckNyYXNoUmVwb3J0VXBsb2FkKG9wdGlvbnM6IEJyb3dzZXJzdGFja0NvbmZpZyAmIE9wdGlvbnMuVGVzdHJ1bm5lciwgY29uZmlnOiBPcHRpb25zLlRlc3RydW5uZXIpIHtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFsc0ZvckNyYXNoUmVwb3J0VXBsb2FkID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IGdldE9ic2VydmFiaWxpdHlVc2VyKG9wdGlvbnMsIGNvbmZpZyksXG4gICAgICAgICAgICBwYXNzd29yZDogZ2V0T2JzZXJ2YWJpbGl0eUtleShvcHRpb25zLCBjb25maWcpXG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzcy5lbnYuQ1JFREVOVElBTFNfRk9SX0NSQVNIX1JFUE9SVElORyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuY3JlZGVudGlhbHNGb3JDcmFzaFJlcG9ydFVwbG9hZClcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Q29uZmlnRGV0YWlscyh1c2VyQ29uZmlnOiBPcHRpb25zLlRlc3RydW5uZXIsIGNhcGFiaWxpdGllczogQ2FwYWJpbGl0aWVzLlRlc3RydW5uZXJDYXBhYmlsaXRpZXMsIG9wdGlvbnM6IEJyb3dzZXJzdGFja0NvbmZpZyAmIE9wdGlvbnMuVGVzdHJ1bm5lcikge1xuICAgICAgICBjb25zdCBjb25maWdXaXRob3V0UElJID0gdGhpcy5maWx0ZXJQSUkodXNlckNvbmZpZylcbiAgICAgICAgY29uc3QgZmlsdGVyZWRDYXBhYmlsaXRpZXMgPSB0aGlzLmZpbHRlckNhcGFiaWxpdGllcyhjYXBhYmlsaXRpZXMpXG4gICAgICAgIHRoaXMudXNlckNvbmZpZ0ZvclJlcG9ydGluZyA9IHtcbiAgICAgICAgICAgIGZyYW1ld29yazogdXNlckNvbmZpZy5mcmFtZXdvcmssXG4gICAgICAgICAgICBzZXJ2aWNlczogY29uZmlnV2l0aG91dFBJSS5zZXJ2aWNlcyxcbiAgICAgICAgICAgIGNhcGFiaWxpdGllczogZmlsdGVyZWRDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICBlbnY6IHtcbiAgICAgICAgICAgICAgICAnQlJPV1NFUlNUQUNLX0JVSUxEJzogcHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX0JVSUxELFxuICAgICAgICAgICAgICAgICdCUk9XU0VSU1RBQ0tfQlVJTERfTkFNRSc6IHByb2Nlc3MuZW52LkJST1dTRVJTVEFDS19CVUlMRF9OQU1FLFxuICAgICAgICAgICAgICAgICdCVUlMRF9UQUcnOiBwcm9jZXNzLmVudi5CVUlMRF9UQUdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzLmVudi5VU0VSX0NPTkZJR19GT1JfUkVQT1JUSU5HID0gSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyQ29uZmlnRm9yUmVwb3J0aW5nKVxuICAgICAgICB0aGlzLnNldENyZWRlbnRpYWxzRm9yQ3Jhc2hSZXBvcnRVcGxvYWQob3B0aW9ucywgdXNlckNvbmZpZylcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgdXBsb2FkQ3Jhc2hSZXBvcnQoZXhjZXB0aW9uOiBzdHJpbmcsIHN0YWNrVHJhY2U6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNyZWRlbnRpYWxzRm9yQ3Jhc2hSZXBvcnRVcGxvYWQudXNlcm5hbWUgfHwgIXRoaXMuY3JlZGVudGlhbHNGb3JDcmFzaFJlcG9ydFVwbG9hZC5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGVudGlhbHNGb3JDcmFzaFJlcG9ydFVwbG9hZCA9IHByb2Nlc3MuZW52LkNSRURFTlRJQUxTX0ZPUl9DUkFTSF9SRVBPUlRJTkcgIT09IHVuZGVmaW5lZCA/IEpTT04ucGFyc2UocHJvY2Vzcy5lbnYuQ1JFREVOVElBTFNfRk9SX0NSQVNIX1JFUE9SVElORykgOiB0aGlzLmNyZWRlbnRpYWxzRm9yQ3Jhc2hSZXBvcnRVcGxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBCU3RhY2tMb2dnZXIuZXJyb3IoYFtDcmFzaF9SZXBvcnRfVXBsb2FkXSBGYWlsZWQgdG8gcGFyc2UgdXNlciBjcmVkZW50aWFscyB3aGlsZSByZXBvcnRpbmcgY3Jhc2ggZHVlIHRvICR7ZXJyb3J9YClcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY3JlZGVudGlhbHNGb3JDcmFzaFJlcG9ydFVwbG9hZC51c2VybmFtZSB8fCAhdGhpcy5jcmVkZW50aWFsc0ZvckNyYXNoUmVwb3J0VXBsb2FkLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gQlN0YWNrTG9nZ2VyLmVycm9yKCdbQ3Jhc2hfUmVwb3J0X1VwbG9hZF0gRmFpbGVkIHRvIHBhcnNlIHVzZXIgY3JlZGVudGlhbHMgd2hpbGUgcmVwb3J0aW5nIGNyYXNoJylcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy51c2VyQ29uZmlnRm9yUmVwb3J0aW5nKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJDb25maWdGb3JSZXBvcnRpbmcgPSBwcm9jZXNzLmVudi5VU0VSX0NPTkZJR19GT1JfUkVQT1JUSU5HICE9PSB1bmRlZmluZWQgPyBKU09OLnBhcnNlKHByb2Nlc3MuZW52LlVTRVJfQ09ORklHX0ZPUl9SRVBPUlRJTkcpIDoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcihgW0NyYXNoX1JlcG9ydF9VcGxvYWRdIEZhaWxlZCB0byBwYXJzZSB1c2VyIGNvbmZpZyB3aGlsZSByZXBvcnRpbmcgY3Jhc2ggZHVlIHRvICR7ZXJyb3J9YClcbiAgICAgICAgICAgIHRoaXMudXNlckNvbmZpZ0ZvclJlcG9ydGluZyA9IHt9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgaGFzaGVkX2lkOiBwcm9jZXNzLmVudltCUk9XU0VSU1RBQ0tfVEVTVEhVQl9VVUlEXSxcbiAgICAgICAgICAgIG9ic2VydmFiaWxpdHlfdmVyc2lvbjoge1xuICAgICAgICAgICAgICAgIGZyYW1ld29ya05hbWU6IFdESU9fTkFNSU5HX1BSRUZJWCArICh0aGlzLnVzZXJDb25maWdGb3JSZXBvcnRpbmcuZnJhbWV3b3JrIHx8ICdudWxsJyksXG4gICAgICAgICAgICAgICAgc2RrVmVyc2lvbjogQlNUQUNLX1NFUlZJQ0VfVkVSU0lPTlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4Y2VwdGlvbjoge1xuICAgICAgICAgICAgICAgIGVycm9yOiBleGNlcHRpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBzdGFja1RyYWNlOiBzdGFja1RyYWNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLnVzZXJDb25maWdGb3JSZXBvcnRpbmdcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmwgPSBgJHtBUElVdGlscy5EQVRBX0VORFBPSU5UfS9hcGkvdjEvYW5hbHl0aWNzYFxuXG4gICAgICAgIGNvbnN0IGVuY29kZWRBdXRoID0gQnVmZmVyLmZyb20oYCR7dGhpcy5jcmVkZW50aWFsc0ZvckNyYXNoUmVwb3J0VXBsb2FkLnVzZXJuYW1lfToke3RoaXMuY3JlZGVudGlhbHNGb3JDcmFzaFJlcG9ydFVwbG9hZC5wYXNzd29yZH1gLCAndXRmOCcpLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgICAgICBjb25zdCBoZWFkZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgICAgICAgLi4uREVGQVVMVF9SRVFVRVNUX0NPTkZJRy5oZWFkZXJzLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7ZW5jb2RlZEF1dGh9YCxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyc1xuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgbGV0IGJvZHkgPSBhd2FpdCByZXNwb25zZS50ZXh0KClcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UoYm9keSkpXG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNwb25zZSBpcyBub3QgSlNPTiwgdXNlIHRleHQgYXMtaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgW0NyYXNoX1JlcG9ydF9VcGxvYWRdIFN1Y2Nlc3MgcmVzcG9uc2U6ICR7Ym9keX1gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmVycm9yKGBbQ3Jhc2hfUmVwb3J0X1VwbG9hZF0gRmFpbGVkIGR1ZSB0byAke3Jlc3BvbnNlLmJvZHl9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyByZWN1cnNpdmVseVJlZGFjdEtleXNGcm9tT2JqZWN0KG9iajogRGljdCB8IEFycmF5PERpY3Q+LCBrZXlzOiBzdHJpbmdbXSkge1xuICAgICAgICBpZiAoIW9iaikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgb2JqLm1hcChlbGUgPT4gdGhpcy5yZWN1cnNpdmVseVJlZGFjdEtleXNGcm9tT2JqZWN0KGVsZSwga2V5cykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMuaW5jbHVkZXMocHJvcC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSAnW1JFREFDVEVEXSdcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmpbcHJvcF0gPT09ICdvYmplY3QnICYmIG9ialtwcm9wXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY3Vyc2l2ZWx5UmVkYWN0S2V5c0Zyb21PYmplY3Qob2JqW3Byb3BdIGFzIERpY3QgfCBBcnJheTxEaWN0Piwga2V5cylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmpbcHJvcF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKG9ialtwcm9wXSBhcyBzdHJpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PT0gJ29iamVjdCcgJiYgcGFyc2VkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWN1cnNpdmVseVJlZGFjdEtleXNGcm9tT2JqZWN0KHBhcnNlZCBhcyBEaWN0IHwgQXJyYXk8RGljdD4sIGtleXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCB2YWxpZCBKU09OLCBsZWF2ZSBhcy1pc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVBJSUtleXNGcm9tT2JqZWN0KG9iajogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pIHtcbiAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIFsndXNlcicsICd1c2VybmFtZScsICdrZXknLCAnYWNjZXNzS2V5J10uZm9yRWFjaChrZXkgPT4gZGVsZXRlIG9ialtrZXldKVxuICAgIH1cblxuICAgIHN0YXRpYyBmaWx0ZXJDYXBhYmlsaXRpZXMoY2FwYWJpbGl0aWVzOiBDYXBhYmlsaXRpZXMuVGVzdHJ1bm5lckNhcGFiaWxpdGllcykge1xuICAgICAgICBjb25zdCBjYXBzQ29weSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2FwYWJpbGl0aWVzKSlcbiAgICAgICAgdGhpcy5yZWN1cnNpdmVseVJlZGFjdEtleXNGcm9tT2JqZWN0KGNhcHNDb3B5LCBbJ2V4dGVuc2lvbnMnXSlcbiAgICAgICAgcmV0dXJuIGNhcHNDb3B5XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbHRlclBJSSh1c2VyQ29uZmlnOiBPcHRpb25zLlRlc3RydW5uZXIpIHtcbiAgICAgICAgY29uc3QgY29uZmlnV2l0aG91dFBJSSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodXNlckNvbmZpZykpXG4gICAgICAgIHRoaXMuZGVsZXRlUElJS2V5c0Zyb21PYmplY3QoY29uZmlnV2l0aG91dFBJSSlcbiAgICAgICAgY29uc3QgZmluYWxTZXJ2aWNlcyA9IFtdXG4gICAgICAgIGNvbnN0IGluaXRpYWxTZXJ2aWNlcyA9IGNvbmZpZ1dpdGhvdXRQSUkuc2VydmljZXNcbiAgICAgICAgZGVsZXRlIGNvbmZpZ1dpdGhvdXRQSUkuc2VydmljZXNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2VydmljZUFycmF5IG9mIGluaXRpYWxTZXJ2aWNlcykge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlcnZpY2VBcnJheSkgJiYgc2VydmljZUFycmF5Lmxlbmd0aCA+PSAyICYmIHNlcnZpY2VBcnJheVswXSA9PT0gJ2Jyb3dzZXJzdGFjaycpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gMTsgaWR4IDwgc2VydmljZUFycmF5Lmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUElJS2V5c0Zyb21PYmplY3Qoc2VydmljZUFycmF5W2lkeF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VydmljZUFycmF5W2lkeF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgYm90aCBuZXcgdGVzdFJlcG9ydGluZ09wdGlvbnMgYW5kIGxlZ2FjeSB0ZXN0T2JzZXJ2YWJpbGl0eU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVBJSUtleXNGcm9tT2JqZWN0KHNlcnZpY2VBcnJheVtpZHhdLnRlc3RSZXBvcnRpbmdPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUElJS2V5c0Zyb21PYmplY3Qoc2VydmljZUFycmF5W2lkeF0udGVzdE9ic2VydmFiaWxpdHlPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsU2VydmljZXMucHVzaChzZXJ2aWNlQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8qIFdyb25nIGNvbmZpZ3VyYXRpb24gbGlrZSBzdHJpbmdzIGluc3RlYWQgb2YganNvbiBvYmplY3RzIGNvdWxkIGJyZWFrIHRoaXMgbWV0aG9kLCBuZWVkcyBubyBhY3Rpb24gKi9cbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcihgRXJyb3IgaW4gcGFyc2luZyB1c2VyIGNvbmZpZyBQSUkgd2l0aCBlcnJvciAke2VyciA/ICgoZXJyIGFzIEVycm9yKS5zdGFjayB8fCBlcnIpIDogZXJyfWApXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnV2l0aG91dFBJSVxuICAgICAgICB9XG4gICAgICAgIGNvbmZpZ1dpdGhvdXRQSUkuc2VydmljZXMgPSBmaW5hbFNlcnZpY2VzXG4gICAgICAgIHJldHVybiBjb25maWdXaXRob3V0UElJXG4gICAgfVxufVxuIiwgImltcG9ydCBmcyBmcm9tICdub2RlOmZzJ1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuXG5pbXBvcnQgdHlwZSB7IE9wdGlvbnMgfSBmcm9tICdAd2Rpby90eXBlcydcblxuaW1wb3J0IHsgQlN0YWNrTG9nZ2VyIH0gZnJvbSAnLi9ic3RhY2tMb2dnZXIuanMnXG5pbXBvcnQge1xuICAgIEJST1dTRVJTVEFDS19ESVNBQkxFX0FVVE9fQ0FQVFVSRV9MT0dTLFxuICAgIENPTVBPVU5EX1NFQ1JFVF9TVUZGSVhFU19DQU1FTCxcbiAgICBDT01QT1VORF9TRUNSRVRfU1VGRklYRVNfU05BS0UsXG4gICAgUEVNX0JMT0NLX1JFR0VYLFxuICAgIFBFTV9VTlRFUk1JTkFURURfUkVHRVgsXG4gICAgVVJMX1VTRVJJTkZPX1JFR0VYLFxuICAgIEJST1dTRVJTVEFDS19XRElPX0NPTkZJR19GSUxFX1BBVEgsXG4gICAgQlJPV1NFUlNUQUNLX1dESU9fQ09ORklHX1NUUkFURUdZLFxuICAgIENBUFRVUkVfQ09ORklHX0lNUE9SVF9ERVBUSCxcbiAgICBERUZBVUxUX1dESU9fQ09ORklHX0JBU0VOQU1FLFxuICAgIE1BWF9DQVBUVVJFRF9DT05GSUdfRklMRVMsXG4gICAgTUFYX0NBUFRVUkVEX0NPTkZJR19GSUxFX0JZVEVTLFxuICAgIE1BWF9QQUNLQUdFX0pTT05fV0FMS19VUCxcbiAgICBSRURBQ1RFRF9LRVlTLFxuICAgIFNVUFBPUlRFRF9XRElPX0NPTkZJR19FWFRFTlNJT05TLFxuICAgIFdESU9fQ0xJX1NVQkNPTU1BTkRTXG59IGZyb20gJy4vY29uc3RhbnRzLmpzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcHR1cmVkRmlsZSB7XG4gICAgLyogYXJjaGl2ZSBlbnRyeSBuYW1lIChiYXNlbmFtZSwgZGUtZHVwbGljYXRlZCkgKi9cbiAgICBuYW1lOiBzdHJpbmdcbiAgICAvKiBhYnNvbHV0ZSBwYXRoIHRoZSBjb250ZW50IGNhbWUgZnJvbSAqL1xuICAgIHNvdXJjZVBhdGg6IHN0cmluZ1xuICAgIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1BhdGhSZXNvbHV0aW9uIHtcbiAgICBjb25maWdQYXRoPzogc3RyaW5nXG4gICAgLyogd2hpY2ggbGFkZGVyIHJ1bmcgYW5zd2VyZWQgXHUyMDE0IHJlY29yZGVkIG9uIHRoZSBTREtfVVBMT0FEX0xPR1MgZXZlbnQgKi9cbiAgICBzdHJhdGVneT86IHN0cmluZ1xuICAgIC8qIHdoeSBub3RoaW5nIHdhcyBmb3VuZCwgd2hlbiBjb25maWdQYXRoIGlzIHVuZGVmaW5lZCAqL1xuICAgIHJlYXNvbj86IHN0cmluZ1xufVxuXG5jb25zdCBpc1JlYWRhYmxlRmlsZSA9IChmaWxlUGF0aDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpICYmIGZzLnN0YXRTeW5jKGZpbGVQYXRoKS5pc0ZpbGUoKVxuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbi8qKlxuICogQWNjZXB0IGEgY29uZmlnIHBhdGggdGhlIHdheSBgQHdkaW8vY2xpYCBkb2VzOiB0aGUgdmFsdWUgYXMgc3BlbGxlZCwgZWxzZSB0aGUgc2FtZSBzdGVtXG4gKiBwcm9iZWQgYWNyb3NzIHRoZSBzdXBwb3J0ZWQgZXh0ZW5zaW9ucy5cbiAqXG4gKiBUaGUgcHJvYmUgaXMgbm90IGRlZmVuc2l2ZSBwYWRkaW5nIFx1MjAxNCBpdCBpcyByZXF1aXJlZC4gYGNvbW1hbmRzL3J1bi50c2AgaGFuZHMgYExhdW5jaGVyYCB0aGVcbiAqIHBhdGggdGhhdCBgY2FuQWNjZXNzQ29uZmlnUGF0aGAgZm91bmQsIGJ1dCBsZWF2ZXMgYGNvbmZpZy1wYXRoYCBzZXQgdG8gd2hhdCB0aGUgVVNFUiB0eXBlZCxcbiAqIGFuZCBhIFR5cGVTY3JpcHQgcHJvamVjdCBsZWdhbGx5IHNwZWxscyBhIGAudHNgIGNvbmZpZyB3aXRoIGAuanNgLiBWZXJpZmllZCBhZ2FpbnN0IGEgcmVhbFxuICogd2RpbyBydW46IGB3ZGlvIHJ1biAuL2NvbmZpZ3MvYS5jb25mLmpzYCB3aXRoIG9ubHkgYGNvbmZpZ3MvYS5jb25mLnRzYCBvbiBkaXNrIHN0YXJ0cyBmaW5lXG4gKiBhbmQgcmVwb3J0cyBgY29uZmlnLXBhdGg6ICcuL2NvbmZpZ3MvYS5jb25mLmpzJ2AsIGEgcGF0aCB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICovXG5jb25zdCByZXNvbHZlQ2FuZGlkYXRlID0gKHZhbHVlOiB1bmtub3duKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCAhdmFsdWUudHJpbSgpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZnVsbCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCB2YWx1ZS50cmltKCkpXG4gICAgICAgIGNvbnN0IGV4dCA9IHBhdGguZXh0bmFtZShmdWxsKVxuICAgICAgICBjb25zdCBzdGVtID0gU1VQUE9SVEVEX1dESU9fQ09ORklHX0VYVEVOU0lPTlMuaW5jbHVkZXMoZXh0KSA/IGZ1bGwuc2xpY2UoMCwgLWV4dC5sZW5ndGgpIDogZnVsbFxuICAgICAgICByZXR1cm4gW2Z1bGwsIC4uLlNVUFBPUlRFRF9XRElPX0NPTkZJR19FWFRFTlNJT05TLm1hcCgoZSkgPT4gYCR7c3RlbX0ke2V9YCldXG4gICAgICAgICAgICAuZmluZChpc1JlYWRhYmxlRmlsZSlcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbn1cblxuLyoqXG4gKiBjd2QtcmVsYXRpdmUgZm9ybSBvZiBhIEZJTEUgcGF0aCwgZm9yIGFueXRoaW5nIHRoYXQgZ2V0cyB1cGxvYWRlZC5cbiAqXG4gKiBUaGUgYmFzZW5hbWUgZmFsbGJhY2sgaXMgc2FmZSBoZXJlIG9ubHkgYmVjYXVzZSBgcGF0aC5yZWxhdGl2ZWAgaXMgbmV2ZXIgZW1wdHkgZm9yIGEgZmlsZSBcdTIwMTRcbiAqIGEgZmlsZSBpcyBuZXZlciBlcXVhbCB0byBjd2QuIERvIE5PVCBwYXNzIGEgZGlyZWN0b3J5OiBzZWUgYHJlbGF0aXZlRGlyVG9Dd2RgLlxuICovXG5leHBvcnQgY29uc3QgcmVsYXRpdmVUb0N3ZCA9IChmaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gcGF0aC5yZWxhdGl2ZShwcm9jZXNzLmN3ZCgpLCBmaWxlUGF0aCkgfHwgcGF0aC5iYXNlbmFtZShmaWxlUGF0aClcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpXG4gICAgfVxufVxuXG4vKipcbiAqIGN3ZC1yZWxhdGl2ZSBmb3JtIG9mIGEgRElSRUNUT1JZIHBhdGguXG4gKlxuICogYHBhdGgucmVsYXRpdmUoY3dkLCBjd2QpYCBpcyBgJydgLCB3aGljaCBpcyB0aGUgQ09NTU9OIGNhc2UgaGVyZSAoYSBtYW5pZmVzdCBhdCB0aGUgcHJvamVjdFxuICogcm9vdCksIHNvIGEgYmFzZW5hbWUgZmFsbGJhY2sgd291bGQgcmVwb3J0IHRoZSBmb2xkZXIgbmFtZSBcdTIwMTQgYW5kIGZvciBhIHByb2plY3QgY2hlY2tlZCBvdXRcbiAqIGRpcmVjdGx5IGluIGAkSE9NRWAgdGhhdCBmb2xkZXIgbmFtZSBpcyB0aGUgT1MgdXNlcm5hbWUsIHdoaWNoIGlzIHRoZSBleGFjdCBleHBvc3VyZSB0aGVcbiAqIHJlbGF0aXZlLXBhdGggaGFuZGxpbmcgZXhpc3RzIHRvIHByZXZlbnQuIEVtcHR5IG1lYW5zIFwiY3dkXCIsIHNvIHJlbmRlciBpdCBhcyBgLmAuXG4gKi9cbmV4cG9ydCBjb25zdCByZWxhdGl2ZURpclRvQ3dkID0gKGRpcjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gcGF0aC5yZWxhdGl2ZShwcm9jZXNzLmN3ZCgpLCBkaXIpIHx8ICcuJ1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gJy4nXG4gICAgfVxufVxuXG4vKipcbiAqIFJlc29sdmUgdGhlIGFic29sdXRlIHBhdGggb2YgdGhlIHVzZXIncyB3ZGlvIGNvbmZpZyBmaWxlLlxuICpcbiAqIFdESU8ga2VlcHMgdGhlIHJlYWwgcGF0aCBpbiBgQ29uZmlnUGFyc2VyYCdzIHByaXZhdGUgYCNjb25maWdGaWxlUGF0aGAsIHdoaWNoIG5vIHNlcnZpY2UgY2FuXG4gKiByZWFjaCwgc28gdGhpcyByZWNvbnN0cnVjdHMgaXQgZnJvbSB0aGUgdmFsdWVzIHRoZSBDTEkgZG9lcyBsZWF2ZSBvbiB0aGUgbWVyZ2VkIGNvbmZpZyBcdTIwMTRcbiAqIG1pcnJvcmluZyBob3cgYEB3ZGlvL2NsaWAgaXRzZWxmIHJlc29sdmVzIGl0LiBUaGUgQ0xJIG5ldmVyIHNlYXJjaGVzOiBpdCB0YWtlcyBvbmUgY2FuZGlkYXRlXG4gKiBhbmQgcHJvYmVzIG9uZSBzdGVtIGFjcm9zcyB0aGUgc3VwcG9ydGVkIGV4dGVuc2lvbnMsIHNvIG5laXRoZXIgZG9lcyB0aGlzLlxuICpcbiAqICAgMS4gQlJPV1NFUlNUQUNLX1dESU9fQ09ORklHX0ZJTEVfUEFUSCAgXHUyMDE0IGV4cGxpY2l0IG92ZXJyaWRlIC8gc3VwcG9ydCBlc2NhcGUgaGF0Y2hcbiAqICAgMi4gY29uZmlnWydjb25maWctcGF0aCddICAgICAgICAgICAgICAgXHUyMDE0IHlhcmdzJyBrZWJhYiBhbGlhcyBvZiB0aGUgYHJ1biA8Y29uZmlnUGF0aD5gXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25hbCAodjggYW5kIHY5IGFsaWtlKVxuICogICAzLiBjb25maWcuX1swXSAgICAgICAgICAgICAgICAgICAgICAgICBcdTIwMTQgdGhlIGJhcmUgYHdkaW8gPGNvbmZpZz5gIGZvcm0sIHdoaWNoIGBydW4udHNgXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRzZWxmIHJlc29sdmVzIGZyb20gYHBhcmFtcy5fWzBdYFxuICogICA0LiByb290RGlyICsgd2Rpby5jb25mLjxleHQ+ICAgICAgICAgICBcdTIwMTQgbm8tYXJnIGB3ZGlvYCwgYW5kIHByb2dyYW1tYXRpYyBgbmV3IExhdW5jaGVyKClgXG4gKiAgIDUuIGN3ZCArIHdkaW8uY29uZi48ZXh0PiAgICAgICAgICAgICAgIFx1MjAxNCB3aGVuIHRoZSB1c2VyIG92ZXJyaWRlcyBgcm9vdERpcmAgaW4gdGhlaXIgY29uZmlnXG4gKlxuICogYGNvbmZpZy5fYCBpcyByZWFkIHJhdGhlciB0aGFuIHJhdyBgcHJvY2Vzcy5hcmd2YDogaXQgaXMgdGhlIHNhbWUgcG9zaXRpb25hbCBBRlRFUiB5YXJncyBoYXNcbiAqIGFwcGxpZWQgd2RpbydzIG93biBvcHRpb24gZGVjbGFyYXRpb25zLiBTY2FubmluZyBhcmd2IG1lYW5zIHJlLWltcGxlbWVudGluZyB0aGF0IHdpdGggYVxuICogaGV1cmlzdGljIHRoYXQgY2Fubm90IGtub3cgd2hpY2ggZmxhZ3MgYXJlIGJvb2xlYW4gXHUyMDE0IGFuZCBgd2RpbyAtLXdhdGNoIC4vYS5jb25mLnRzYCBwdXRzIHRoZVxuICogcmVhbCBjb25maWcgaW4gYF9bMF1gIHdoaWxlIGFueSBcInNraXAgYSBmbGFnJ3MgdmFsdWVcIiBydWxlIHRocm93cyBpdCBhd2F5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVdkaW9Db25maWdQYXRoKGNvbmZpZz86IE9wdGlvbnMuVGVzdHJ1bm5lcik6IENvbmZpZ1BhdGhSZXNvbHV0aW9uIHtcbiAgICBjb25zdCByZWNvcmQgPSAoY29uZmlnIHx8IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25hbHMgPSBBcnJheS5pc0FycmF5KHJlY29yZC5fKSA/IHJlY29yZC5fIGFzIHVua25vd25bXSA6IFtdXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uYWwgPSBwb3NpdGlvbmFscy5maWx0ZXIoXG4gICAgICAgICAgICAoZW50cnkpOiBlbnRyeSBpcyBzdHJpbmcgPT4gdHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJyAmJiAhV0RJT19DTElfU1VCQ09NTUFORFMuaW5jbHVkZXMoZW50cnkpXG4gICAgICAgIClbMF1cbiAgICAgICAgY29uc3Qgcm9vdERpciA9IHR5cGVvZiByZWNvcmQucm9vdERpciA9PT0gJ3N0cmluZycgPyByZWNvcmQucm9vdERpciA6IHVuZGVmaW5lZFxuXG4gICAgICAgIGNvbnN0IHJ1bmdzOiBBcnJheTxbc3RyaW5nLCB1bmtub3duXT4gPSBbXG4gICAgICAgICAgICBbJ2Vudl9vdmVycmlkZScsIHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19XRElPX0NPTkZJR19GSUxFX1BBVEhdXSxcbiAgICAgICAgICAgIFsnY2xpX2NvbmZpZ19wYXRoJywgcmVjb3JkWydjb25maWctcGF0aCddXSxcbiAgICAgICAgICAgIFsnY29uZmlnX3Bvc2l0aW9uYWwnLCBwb3NpdGlvbmFsXSxcbiAgICAgICAgICAgIFsncm9vdF9kaXJfZGVmYXVsdCcsIHJvb3REaXIgJiYgcGF0aC5qb2luKHJvb3REaXIsIERFRkFVTFRfV0RJT19DT05GSUdfQkFTRU5BTUUpXSxcbiAgICAgICAgICAgIFsnY3dkX2RlZmF1bHQnLCBERUZBVUxUX1dESU9fQ09ORklHX0JBU0VOQU1FXVxuICAgICAgICBdXG5cbiAgICAgICAgZm9yIChjb25zdCBbc3RyYXRlZ3ksIHZhbHVlXSBvZiBydW5ncykge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnUGF0aCA9IHJlc29sdmVDYW5kaWRhdGUodmFsdWUpXG4gICAgICAgICAgICBpZiAoY29uZmlnUGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGNvbmZpZ1BhdGgsIHN0cmF0ZWd5IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHJlYXNvbjogJ2NvbmZpZ19ub3RfZm91bmQnIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHsgcmVhc29uOiAnY29uZmlnX3Jlc29sdmVfZXhjZXB0aW9uJyB9XG4gICAgfVxufVxuXG4vKipcbiAqIFJlc29sdmUgb25jZSwgYXMgZWFybHkgYXMgcG9zc2libGUsIGFuZCBwdWJsaXNoIHRoZSBhbnN3ZXIgb24gdGhlIGVudmlyb25tZW50IHNvIHRoZVxuICogdXBsb2FkIHBhdGggKGFuZCBhbnkgd29ya2VyKSByZWFkcyB0aGUgU0FNRSB2YWx1ZSBpbnN0ZWFkIG9mIHJlLWRlcml2aW5nIGl0IGZyb20gY3dkLlxuICpcbiAqIFJlLXJlc29sdmluZyBhdCBhcmNoaXZlIHRpbWUgaXMgcHJlY2lzZWx5IHRoZSBidWcgU0RLLTU5OTMgZml4ZWQgaW4gdGhlIE5vZGUgU0RLOiB0aGVcbiAqIGFyY2hpdmUgc3RlcCByZWFkIGBjd2QvYnJvd3NlcnN0YWNrLnltbGAgd2hpbGUgc3RhcnR1cCBoYWQgcmVzb2x2ZWQgYSBkaWZmZXJlbnQgcGF0aCxcbiAqIHNpbGVudGx5IGRyb3BwaW5nIHRoZSBjb25maWcgZm9yIGV2ZXJ5IG1vbm9yZXBvIC8gc3ViZGlyIENJIHJ1bi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRXZGlvQ29uZmlnUGF0aChjb25maWc/OiBPcHRpb25zLlRlc3RydW5uZXIpOiBDb25maWdQYXRoUmVzb2x1dGlvbiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxyZWFkeVJlc29sdmVkID0gcHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX1dESU9fQ09ORklHX0ZJTEVfUEFUSF1cbiAgICAgICAgaWYgKGFscmVhZHlSZXNvbHZlZCkge1xuICAgICAgICAgICAgLy8gUmVwb3J0IHRoZSBydW5nIHRoYXQgT1JJR0lOQUxMWSBhbnN3ZXJlZCwgbm90IHRoZSBlbnYgdmFyIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIGl0c2VsZiB3cm90ZSBcdTIwMTQgb3RoZXJ3aXNlIGV2ZXJ5IHJ1biByZXBvcnRzIGBlbnZfb3ZlcnJpZGVgIGFuZCB0aGUgbWV0cmljXG4gICAgICAgICAgICAvLyBjYW4gbmV2ZXIgdGVsbCB1cyBob3cgb2Z0ZW4gdGhlIGZhbGxiYWNrcyBhcmUgY2FycnlpbmcgY3VzdG9tZXJzLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb25maWdQYXRoOiBhbHJlYWR5UmVzb2x2ZWQsXG4gICAgICAgICAgICAgICAgc3RyYXRlZ3k6IHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19XRElPX0NPTkZJR19TVFJBVEVHWV0gfHwgJ2Vudl9vdmVycmlkZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc29sdXRpb24gPSByZXNvbHZlV2Rpb0NvbmZpZ1BhdGgoY29uZmlnKVxuICAgICAgICBpZiAocmVzb2x1dGlvbi5jb25maWdQYXRoKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudltCUk9XU0VSU1RBQ0tfV0RJT19DT05GSUdfRklMRV9QQVRIXSA9IHJlc29sdXRpb24uY29uZmlnUGF0aFxuICAgICAgICAgICAgaWYgKHJlc29sdXRpb24uc3RyYXRlZ3kpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudltCUk9XU0VSU1RBQ0tfV0RJT19DT05GSUdfU1RSQVRFR1ldID0gcmVzb2x1dGlvbi5zdHJhdGVneVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVsYXRpdmUgdG8gY3dkOiB0aGlzIGxvZyBmaWxlIGlzIGl0c2VsZiB1cGxvYWRlZCwgYW5kIGFuIGFic29sdXRlIHBhdGggbGVha3NcbiAgICAgICAgICAgIC8vIHRoZSBPUyB1c2VybmFtZSBhbmQgZGlyZWN0b3J5IGxheW91dCAoYC9Vc2Vycy9qYW5lLmRvZS8uLi5gKS4gYHBhdGgucmVsYXRpdmVgXG4gICAgICAgICAgICAvLyBzdGlsbCB5aWVsZHMgYC4uLy4uL3NoYXJlZC93ZGlvLmNvbmYudHNgIGZvciBhIGNvbmZpZyBvdXRzaWRlIGN3ZCwgc28gdGhlXG4gICAgICAgICAgICAvLyBtb25vcmVwby9zdWJkaXIgZGlhZ25vc3RpYyBcdTIwMTQgd2hpY2ggaXMgdGhlIHdob2xlIHBvaW50IG9mIGxvZ2dpbmcgaXQgXHUyMDE0IHN1cnZpdmVzLlxuICAgICAgICAgICAgLy8gUGF0aCBiZWZvcmUgc3RyYXRlZ3k6IEJTdGFja0xvZ2dlciBzY3J1YnMgYW55IGA8Li4uPmtleTpgL2A8Li4uPnVzZXI6YCBwcmVmaXhlZFxuICAgICAgICAgICAgLy8gdmFsdWUsIHNvIGEgc3RyYXRlZ3kgbmFtZSBlbmRpbmcgaW4gYGtleWAvYHVzZXJgIGhlcmUgd291bGQgcmVkYWN0IHRoZSBwYXRoLlxuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBSZXNvbHZlZCB3ZGlvIGNvbmZpZyBmaWxlICR7cmVsYXRpdmVUb0N3ZChyZXNvbHV0aW9uLmNvbmZpZ1BhdGgpfSBmb3IgYXV0by1jYXB0dXJlIChzdHJhdGVneSAke3Jlc29sdXRpb24uc3RyYXRlZ3l9KWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYENvdWxkIG5vdCByZXNvbHZlIHdkaW8gY29uZmlnIGZpbGUgZm9yIGF1dG8tY2FwdHVyZTogJHtyZXNvbHV0aW9uLnJlYXNvbn1gKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHV0aW9uXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKGBFcnJvciB3aGlsZSByZXNvbHZpbmcgd2RpbyBjb25maWcgZmlsZTogJHtlcnJvcn1gKVxuICAgICAgICByZXR1cm4geyByZWFzb246ICdjb25maWdfcmVzb2x2ZV9leGNlcHRpb24nIH1cbiAgICB9XG59XG5cbi8qKlxuICogT3B0LW91dCBmb3IgYXV0by1jYXB0dXJlZCBsb2dzLiBTZXJ2aWNlIG9wdGlvbiBmaXJzdCwgZW52IHZhciBhcyB0aGUgQ0kgZXNjYXBlIGhhdGNoXG4gKiAoY3VzdG9tZXJzIGNhbm5vdCBhbHdheXMgZWRpdCBhIGNvbW1pdHRlZCBjb25maWcpLiBOYW1lIG1hdGNoZXMgdGhlIE5vZGUgU0RLJ3NcbiAqIGBkaXNhYmxlQXV0b0NhcHR1cmVMb2dzYCBzbyB0aGUgZmxhZyBtZWFucyB0aGUgc2FtZSB0aGluZyBhY3Jvc3MgQnJvd3NlclN0YWNrIFNES3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0F1dG9DYXB0dXJlTG9nc0Rpc2FibGVkKG9wdGlvbnM/OiB7IGRpc2FibGVBdXRvQ2FwdHVyZUxvZ3M/OiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICBpZiAob3B0aW9ucz8uZGlzYWJsZUF1dG9DYXB0dXJlTG9ncyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19ESVNBQkxFX0FVVE9fQ0FQVFVSRV9MT0dTXSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnXG59XG5cbi8qKlxuICogTWlycm9yIHRoZSBzZXJ2aWNlIG9wdGlvbiBvbnRvIHRoZSBlbnZpcm9ubWVudCBzbyB0aGUgb3B0LW91dCBzdXJ2aXZlcyBpbnRvIHRoZVxuICogREVUQUNIRUQgY2xlYW51cCBwcm9jZXNzLCB3aGljaCBnZXRzIG5vIG9wdGlvbnMgb2JqZWN0LlxuICpcbiAqIFdpdGhvdXQgdGhpcyB0aGUgb3B0LW91dCBpcyB3b3JzZSB0aGFuIHVzZWxlc3M6IHNraXBwaW5nIHRoZSB1cGxvYWQgbGVhdmVzXG4gKiBgbG9nc1VwbG9hZGVkYCBmYWxzZSwgd2hpY2ggaXMgZXhhY3RseSB0aGUgY29uZGl0aW9uIHRoYXQgYXJtcyB0aGUgZXhpdC10aW1lXG4gKiBgLS11cGxvYWRMb2dzYCByZXNjdWUgXHUyMDE0IHNvIGV2ZXJ5IG9wdGVkLW91dCBydW4gaGFkIGl0cyBjb25maWcgcmVhZCBhbmQgUE9TVGVkIGJ5IHRoZVxuICogY2xlYW51cCBjaGlsZC4gUmV0dXJucyB3aGV0aGVyIGF1dG8tY2FwdHVyZSBpcyBkaXNhYmxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2hBdXRvQ2FwdHVyZURpc2FibGVkKG9wdGlvbnM/OiB7IGRpc2FibGVBdXRvQ2FwdHVyZUxvZ3M/OiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IGlzQXV0b0NhcHR1cmVMb2dzRGlzYWJsZWQob3B0aW9ucylcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX0RJU0FCTEVfQVVUT19DQVBUVVJFX0xPR1NdID0gJ3RydWUnXG4gICAgfVxuICAgIHJldHVybiBkaXNhYmxlZFxufVxuXG4vKipcbiAqIExpbmUtbGV2ZWwgY3JlZGVudGlhbCBzY3J1YiwgcG9ydGVkIGZyb20gdGhlIE5vZGUgU0RLJ3MgYHJlZGFjdFNlbnNpdGl2ZUNvbnRlbnRgLlxuICpcbiAqIEFueSBsaW5lIG1lbnRpb25pbmcgYSBzZW5zaXRpdmUga2V5IGNvbGxhcHNlcyB0byBgPGtleT46IFtSRURBQ1RFRF1gLiBXb3JkIGJvdW5kYXJpZXNcbiAqIGtlZXAgYGhvdGtleWAgLyBga2V5d29yZGAgZnJvbSB0cmlwcGluZyB0aGUgYmFyZSBga2V5YCBlbnRyeSB0aGF0IFdESU8ncyB0b3AtbGV2ZWxcbiAqIGNyZWRlbnRpYWwgb3B0aW9ucyBmb3JjZSB1cyB0byBjYXJyeS4gYC5gIGlzIGludGVudGlvbmFsbHkgTk9UIHBhcnQgb2YgdGhlIGJvdW5kYXJ5XG4gKiBjbGFzcyBzbyBgYnN0YWNrT3B0aW9ucy5hY2Nlc3NLZXkgPSAnLi4uJ2Agc3RpbGwgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZGFjdFNlbnNpdGl2ZUNvbnRlbnQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICB9XG5cbiAgICBjb25zdCBlc2NhcGVSZWdleCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZS5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpXG4gICAgLy8gbG9uZ2VzdCBmaXJzdDogYWx0ZXJuYXRpb24gcmV0dXJucyB0aGUgZmlyc3QgbWF0Y2gsIG5vdCB0aGUgbG9uZ2VzdCBvbmVcbiAgICBjb25zdCBrZXlzID0gWy4uLlJFREFDVEVEX0tFWVNdXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxuICAgICAgICAubWFwKGVzY2FwZVJlZ2V4KVxuICAgICAgICAuam9pbignfCcpXG4gICAgY29uc3QgcmVkYWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeLio/KD88IVtBLVphLXowLTlfJF0pKCR7a2V5c30pKD8hW0EtWmEtejAtOV8kXSkuKiRgLCAnZ21pJylcblxuICAgIC8vIENvbXBvdW5kIGlkZW50aWZpZXJzIGVuZGluZyBpbiBhIHNlbnNpdGl2ZSB3b3JkLCB3aGljaCB0aGUgd2hvbGUtd29yZCBwYXNzIGFib3ZlXG4gICAgLy8gY2Fubm90IHNlZTogaXRzIGxvb2tiZWhpbmQgcmVqZWN0cyB0aGUgcHJlY2VkaW5nIGxldHRlciBpbiBgY2xpZW50U2VjcmV0YCAvXG4gICAgLy8gYHJlZnJlc2hUb2tlbmAgLyBgcHJpdmF0ZUtleWAsIGFuZCB0aGUgcHJlY2VkaW5nIGBfYCBpbiBgY2xpZW50X3NlY3JldGAuXG4gICAgLy9cbiAgICAvLyBjYW1lbENhc2Ugc3RheXMgY2FzZS1TRU5TSVRJVkU6IHJlcXVpcmluZyBhIGNhcGl0YWxpc2VkIHN1ZmZpeCBpcyB3aGF0IHNlcGFyYXRlc1xuICAgIC8vIGBwcml2YXRlS2V5YCBmcm9tIGBob3RrZXlgLCBzbyB0aGlzIGNsb3NlcyB0aGUgbGVhayB3aXRob3V0IHRoZSBmYWxzZSBwb3NpdGl2ZXMgYVxuICAgIC8vIGJhcmUgL2tleXx0b2tlbnxzZWNyZXQvIHBhc3Mgd291bGQgcHJvZHVjZS4gVGhlIGNvcmUgZG9lcyBOT1QgcmVxdWlyZSBhIGxvd2VyY2FzZVxuICAgIC8vIGNoYXIgYmVmb3JlIHRoZSBzdWZmaXggXHUyMDE0IHRoYXQgZ3VhcmQgb25seSBldmVyIGR1cGxpY2F0ZWQgdGhlIGNhc2Utc2Vuc2l0aXZpdHksIHdoaWxlXG4gICAgLy8gcmVqZWN0aW5nIGFjcm9ueW0gcHJlZml4ZXMgKGBBUElUb2tlbmAsIGBKV1RTZWNyZXRgLCBgU1NIS2V5YCwgYEFXU1NlY3JldGApLlxuICAgIC8vIElkZW50aWZpZXIgc2NhbnMgYXJlIGJvdW5kZWQgYXQgNjQgY2hhcnMuIFJlYWwgY29uZmlnIGtleXMgYXJlIGZhciBzaG9ydGVyLCBzbyB0aGlzXG4gICAgLy8gY2hhbmdlcyBubyBtYXRjaDsgaXQgaXMgZGVmZW5jZS1pbi1kZXB0aCBhZ2FpbnN0IGJhY2t0cmFja2luZyBvbiBhIHBhdGhvbG9naWNhbCBsaW5lXG4gICAgLy8gKGEgbWluaWZpZWQvYmFzZTY0IHJ1biksIGtlZXBpbmcgZXZlcnkgc3RhcnQgcG9zaXRpb24gTygxKSBpbnN0ZWFkIG9mIE8obikuXG4gICAgY29uc3QgY29tcG91bmRDYW1lbFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgYF4uKj8oPzwhW0EtWmEtejAtOV8kXSkoW0EtWmEtejAtOV8kXXsxLDY0fSg/OiR7Q09NUE9VTkRfU0VDUkVUX1NVRkZJWEVTX0NBTUVMfSkpXFxcXHMqWzo9XS4qJGAsXG4gICAgICAgICdnbSdcbiAgICApXG4gICAgLy8gc25ha2VfY2FzZSBpcyBtYXRjaGVkIGNhc2UtSU5TRU5TSVRJVkVMWSwgd2hpY2ggaXMgc2FmZSBwcmVjaXNlbHkgYmVjYXVzZSBpdCByZXF1aXJlc1xuICAgIC8vIGFuIGV4cGxpY2l0IGBfYCBiZWZvcmUgdGhlIHN1ZmZpeC4gVGhhdCBjb3ZlcnMgU0NSRUFNSU5HX1NOQUtFX0NBU0UgXHUyMDE0IHRoZSBkb21pbmFudFxuICAgIC8vIGNvbnZlbnRpb24gZm9yIHNlY3JldHMgaW4gY29uZmlnL2VudiBmaWxlcyAoYEFXU19TRUNSRVRfQUNDRVNTX0tFWWAsIGBHSVRIVUJfVE9LRU5gKSBcdTIwMTRcbiAgICAvLyB3aGlsZSBga2V5d29yZGAgYW5kIGBteV9zZWNyZXRhcnlgIHN0aWxsIGZhbGwgb3V0LCBzaW5jZSBuZWl0aGVyIGhhcyBgXzxzdWZmaXg+YFxuICAgIC8vIGltbWVkaWF0ZWx5IGJlZm9yZSBhbiBhc3NpZ25tZW50LlxuICAgIGNvbnN0IGNvbXBvdW5kU25ha2VSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgIGBeLio/KD88IVtBLVphLXowLTlfJF0pKFtBLVphLXowLTlfJF17MCw2NH1fKD86JHtDT01QT1VORF9TRUNSRVRfU1VGRklYRVNfU05BS0V9KSlcXFxccypbOj1dLiokYCxcbiAgICAgICAgJ2dtaSdcbiAgICApXG5cbiAgICByZXR1cm4gdGV4dC50b1N0cmluZygpXG4gICAgICAgIC8vIEJsb2NrLWxldmVsIHBhc3NlcyBydW4gRklSU1Q6IHRoZXkgc3BhbiBsaW5lcywgYW5kIHRoZSBsaW5lLWFuY2hvcmVkIHBhc3NlcyBiZWxvd1xuICAgICAgICAvLyBjYW4gb25seSBldmVyIHNlZSB0aGUgb25lIGxpbmUgdGhhdCBjYXJyaWVzIHRoZSBrZXkgbmFtZS5cbiAgICAgICAgLnJlcGxhY2UoUEVNX0JMT0NLX1JFR0VYLCAnJDFbUkVEQUNURURdJDInKVxuICAgICAgICAucmVwbGFjZShQRU1fVU5URVJNSU5BVEVEX1JFR0VYLCAnJDFbUkVEQUNURURdJylcbiAgICAgICAgLnJlcGxhY2UoVVJMX1VTRVJJTkZPX1JFR0VYLCAnJDFbUkVEQUNURURdQCcpXG4gICAgICAgIC5yZXBsYWNlKHJlZGFjdFJlZ2V4LCAnJDE6IFtSRURBQ1RFRF0nKVxuICAgICAgICAucmVwbGFjZShjb21wb3VuZENhbWVsUmVnZXgsICckMTogW1JFREFDVEVEXScpXG4gICAgICAgIC5yZXBsYWNlKGNvbXBvdW5kU25ha2VSZWdleCwgJyQxOiBbUkVEQUNURURdJylcbn1cblxuY29uc3QgcmVhZENhcHBlZEZpbGUgPSAoZmlsZVBhdGg6IHN0cmluZyk6IHsgY29udGVudD86IHN0cmluZywgcmVhc29uPzogc3RyaW5nIH0gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBmcy5zdGF0U3luYyhmaWxlUGF0aCkuc2l6ZVxuICAgICAgICBpZiAoc2l6ZSA+IE1BWF9DQVBUVVJFRF9DT05GSUdfRklMRV9CWVRFUykge1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVhc29uOiBgJHtwYXRoLmJhc2VuYW1lKGZpbGVQYXRoKX06IHRvb19sYXJnZSAoJHtzaXplfSBieXRlcylgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBjb250ZW50OiBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGY4JykgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHJlYXNvbjogYCR7cGF0aC5iYXNlbmFtZShmaWxlUGF0aCl9OiAkeyhlcnJvciBhcyBFcnJvcik/Lm1lc3NhZ2UgfHwgU3RyaW5nKGVycm9yKX1gIH1cbiAgICB9XG59XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlbGF0aXZlIGltcG9ydCBzcGVjaWZpZXIgYWdhaW5zdCB0aGUgaW1wb3J0aW5nIGZpbGUuXG4gKlxuICogSGFuZGxlcyB0aGUgVHlwZVNjcmlwdC1FU00gY29udmVudGlvbiB3aGVyZSBgLi9zaGFyZWQuY29uZi5qc2Agb24gZGlzayBpcyBhY3R1YWxseVxuICogYC4vc2hhcmVkLmNvbmYudHNgLCBwbHVzIGV4dGVuc2lvbi1sZXNzIGFuZCBkaXJlY3RvcnkgKGAvaW5kZXguKmApIHNwZWNpZmllcnMuXG4gKi9cbi8qKlxuICogT25seSBmaWxlcyB0aGF0IGFyZSB0aGVtc2VsdmVzIGNvbmZpZ3MgYXJlIGZvbGxvd2VkLlxuICpcbiAqIEEgcmVsYXRpdmUgc3BlY2lmaWVyIHJlc29sdmVzIHRvIHdoYXRldmVyIHRoZSBjb25maWcgaGFwcGVucyB0byBpbXBvcnQsIHdoaWNoIGlzIGZyZXF1ZW50bHlcbiAqIG9yZGluYXJ5IGFwcGxpY2F0aW9uIHNvdXJjZSAoYC4vaGVscGVycy91dGlscy5qc2ApIHJhdGhlciB0aGFuIGNvbmZpZ3VyYXRpb24uIENhcHR1cmluZyB0aGVcbiAqIHNwbGl0LWNvbmZpZyBjYXNlIChgYmFzZS5jb25mLmpzYCwgYHdkaW8uc2hhcmVkLmNvbmYudHNgKSBpcyB0aGUgcG9pbnQ7IHNoaXBwaW5nIGFcbiAqIGN1c3RvbWVyJ3MgYXBwbGljYXRpb24gbW9kdWxlcyBpcyBub3QuXG4gKi9cbmNvbnN0IGlzQ29uZmlnRmlsZU5hbWUgPSAoZmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4gPT4gL1xcLmNvbmYoaWcpP1xcLlteLl0rJC9pLnRlc3QocGF0aC5iYXNlbmFtZShmaWxlUGF0aCkpXG5cbmNvbnN0IHJlc29sdmVSZWxhdGl2ZUltcG9ydCA9IChzcGVjaWZpZXI6IHN0cmluZywgZnJvbUZpbGU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgY29uc3QgYmFzZSA9IHBhdGgucmVzb2x2ZShwYXRoLmRpcm5hbWUoZnJvbUZpbGUpLCBzcGVjaWZpZXIpXG5cbiAgICBpZiAoaXNSZWFkYWJsZUZpbGUoYmFzZSkgJiYgU1VQUE9SVEVEX1dESU9fQ09ORklHX0VYVEVOU0lPTlMuaW5jbHVkZXMocGF0aC5leHRuYW1lKGJhc2UpKSkge1xuICAgICAgICByZXR1cm4gaXNDb25maWdGaWxlTmFtZShiYXNlKSA/IGJhc2UgOiB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBjb25zdCB3aXRob3V0RXh0ID0gU1VQUE9SVEVEX1dESU9fQ09ORklHX0VYVEVOU0lPTlMuaW5jbHVkZXMocGF0aC5leHRuYW1lKGJhc2UpKVxuICAgICAgICA/IGJhc2Uuc2xpY2UoMCwgLXBhdGguZXh0bmFtZShiYXNlKS5sZW5ndGgpXG4gICAgICAgIDogYmFzZVxuXG4gICAgZm9yIChjb25zdCBleHQgb2YgU1VQUE9SVEVEX1dESU9fQ09ORklHX0VYVEVOU0lPTlMpIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gYCR7d2l0aG91dEV4dH0ke2V4dH1gXG4gICAgICAgIGlmIChpc1JlYWRhYmxlRmlsZShjYW5kaWRhdGUpICYmIGlzQ29uZmlnRmlsZU5hbWUoY2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgZXh0IG9mIFNVUFBPUlRFRF9XRElPX0NPTkZJR19FWFRFTlNJT05TKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IHBhdGguam9pbihiYXNlLCBgaW5kZXgke2V4dH1gKVxuICAgICAgICBpZiAoaXNSZWFkYWJsZUZpbGUoY2FuZGlkYXRlKSAmJiBpc0NvbmZpZ0ZpbGVOYW1lKGNhbmRpZGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbi8qKlxuICogQ29sbGVjdCBsb2NhbCBmaWxlcyBhIGNvbmZpZyBwdWxscyBpbiAoYHdkaW8uc2hhcmVkLmNvbmYudHNgIHN0eWxlIHNwbGl0cyksIHNvIGFcbiAqIGNhcHR1cmVkIGNvbmZpZyBpcyBub3QganVzdCBhIHR3by1saW5lIGZpbGUgdGhhdCBzcHJlYWRzIGEgYmFzZSBjb25maWcgd2UgbmV2ZXIgc2VlLlxuICpcbiAqIE9ubHkgUkVMQVRJVkUgc3BlY2lmaWVycyBhcmUgZm9sbG93ZWQgXHUyMDE0IGJhcmUgc3BlY2lmaWVycyBhcmUgbnBtIHBhY2thZ2VzLCBuZXZlciB0aGVcbiAqIGN1c3RvbWVyJ3Mgb3duIGNvbmZpZy4gRGVwdGggYW5kIGNvdW50IGFyZSBjYXBwZWQgc28gdGhpcyBjYW4gbmV2ZXIgd2FsayBhIHNvdXJjZSB0cmVlLlxuICovXG5jb25zdCBjb2xsZWN0TG9jYWxJbXBvcnRzID0gKGVudHJ5UGF0aDogc3RyaW5nLCBlbnRyeUNvbnRlbnQ6IHN0cmluZywgYnVkZ2V0OiBudW1iZXIpOiBBcnJheTx7IGZpbGVQYXRoOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyB9PiA9PiB7XG4gICAgY29uc3QgZm91bmQ6IEFycmF5PHsgZmlsZVBhdGg6IHN0cmluZywgY29udGVudDogc3RyaW5nIH0+ID0gW11cbiAgICBjb25zdCBzZWVuID0gbmV3IFNldChbZW50cnlQYXRoXSlcbiAgICBsZXQgZnJvbnRpZXI6IEFycmF5PHsgZmlsZVBhdGg6IHN0cmluZywgY29udGVudDogc3RyaW5nIH0+ID0gW3sgZmlsZVBhdGg6IGVudHJ5UGF0aCwgY29udGVudDogZW50cnlDb250ZW50IH1dXG5cbiAgICBmb3IgKGxldCBkZXB0aCA9IDA7IGRlcHRoIDwgQ0FQVFVSRV9DT05GSUdfSU1QT1JUX0RFUFRIICYmIGZvdW5kLmxlbmd0aCA8IGJ1ZGdldDsgZGVwdGgrKykge1xuICAgICAgICBjb25zdCBuZXh0OiBBcnJheTx7IGZpbGVQYXRoOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyB9PiA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCB7IGZpbGVQYXRoLCBjb250ZW50IH0gb2YgZnJvbnRpZXIpIHtcbiAgICAgICAgICAgIC8vIGBmcm9tICcuL3gnYCwgYGltcG9ydCAnLi94J2AsIGBpbXBvcnQoJy4veCcpYCwgYHJlcXVpcmUoJy4veCcpYFxuICAgICAgICAgICAgY29uc3QgaW1wb3J0UmVnZXggPSAvKD86ZnJvbXxpbXBvcnR8cmVxdWlyZSlcXHMqXFwoP1xccypbJ1wiXShcXC5bXidcIl0qKVsnXCJdL2dcbiAgICAgICAgICAgIGxldCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbFxuXG4gICAgICAgICAgICB3aGlsZSAoKG1hdGNoID0gaW1wb3J0UmVnZXguZXhlYyhjb250ZW50KSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQubGVuZ3RoID49IGJ1ZGdldCkge1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmVSZWxhdGl2ZUltcG9ydChtYXRjaFsxXSwgZmlsZVBhdGgpXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZCB8fCBzZWVuLmhhcyhyZXNvbHZlZCkgfHwgcmVzb2x2ZWQuaW5jbHVkZXMoYCR7cGF0aC5zZXB9bm9kZV9tb2R1bGVzJHtwYXRoLnNlcH1gKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWVuLmFkZChyZXNvbHZlZClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgY29udGVudDogaW1wb3J0ZWRDb250ZW50IH0gPSByZWFkQ2FwcGVkRmlsZShyZXNvbHZlZClcbiAgICAgICAgICAgICAgICBpZiAoaW1wb3J0ZWRDb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm91bmQucHVzaCh7IGZpbGVQYXRoOiByZXNvbHZlZCwgY29udGVudDogaW1wb3J0ZWRDb250ZW50IH0pXG4gICAgICAgICAgICAgICAgbmV4dC5wdXNoKHsgZmlsZVBhdGg6IHJlc29sdmVkLCBjb250ZW50OiBpbXBvcnRlZENvbnRlbnQgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBmcm9udGllciA9IG5leHRcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmRcbn1cblxuLyoqXG4gKiBHaXZlIGV2ZXJ5IGFyY2hpdmUgZW50cnkgYSB1bmlxdWUgbmFtZS4gVHdvIGNvbmZpZ3MgY2FuIHNoYXJlIGEgYmFzZW5hbWVcbiAqIChgY29uZmlncy93ZGlvLmNvbmYudHNgICsgYHNoYXJlZC93ZGlvLmNvbmYudHNgKTsgd2l0aG91dCB0aGlzIHRoZSBzZWNvbmQgc2lsZW50bHlcbiAqIG92ZXJ3cml0ZXMgdGhlIGZpcnN0LCBzaW5jZSBhcmNoaXZlIGVudHJpZXMgYXJlIGtleWVkIGJ5IGJhc2VuYW1lLlxuICpcbiAqIFNoYXJlZCB3aXRoIGB1cGxvYWRMb2dzYCwgd2hpY2ggZGUtZHVwZXMgdGhlIGNvcGllZCBsb2cgZmlsZXMgYWdhaW5zdCB0aGVzZSBlbnRyaWVzIFx1MjAxNFxuICogb25lIGltcGxlbWVudGF0aW9uIHNvIHRoZSB0d28gY2FuIG5ldmVyIGRpc2FncmVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVkdXBlRW50cnlOYW1lKGZpbGVQYXRoOiBzdHJpbmcsIHRha2VuOiBTZXQ8c3RyaW5nPik6IHN0cmluZyB7XG4gICAgY29uc3QgYmFzZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpXG4gICAgaWYgKCF0YWtlbi5oYXMoYmFzZSkpIHtcbiAgICAgICAgdGFrZW4uYWRkKGJhc2UpXG4gICAgICAgIHJldHVybiBiYXNlXG4gICAgfVxuXG4gICAgY29uc3QgZXh0ID0gcGF0aC5leHRuYW1lKGJhc2UpXG4gICAgY29uc3Qgc3RlbSA9IGV4dCA/IGJhc2Uuc2xpY2UoMCwgLWV4dC5sZW5ndGgpIDogYmFzZVxuICAgIGxldCBpbmRleCA9IDFcbiAgICBsZXQgY2FuZGlkYXRlID0gYCR7c3RlbX0uJHtpbmRleH0ke2V4dH1gXG4gICAgd2hpbGUgKHRha2VuLmhhcyhjYW5kaWRhdGUpKSB7XG4gICAgICAgIGluZGV4KytcbiAgICAgICAgY2FuZGlkYXRlID0gYCR7c3RlbX0uJHtpbmRleH0ke2V4dH1gXG4gICAgfVxuICAgIHRha2VuLmFkZChjYW5kaWRhdGUpXG4gICAgcmV0dXJuIGNhbmRpZGF0ZVxufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSByZWRhY3RlZCBjb25maWcgZW50cmllcyBhZGRlZCB0byB0aGUgYXV0by1jYXB0dXJlZCBsb2cgYXJjaGl2ZS5cbiAqXG4gKiBCZXN0IGVmZm9ydCBieSBjb250cmFjdDogYW55IGZhaWx1cmUgcmV0dXJucyB3aGF0IHdhcyBnYXRoZXJlZCBzbyBmYXIgYW5kIGEgcmVhc29uXG4gKiBzdHJpbmcgZm9yIHRoZSBTREtfVVBMT0FEX0xPR1MgZXZlbnQuIEl0IG11c3QgbmV2ZXIgdGhyb3cgXHUyMDE0IGEgZGVidWcgYXJ0aWZhY3QgaXMgbmV2ZXJcbiAqIHdvcnRoIGZhaWxpbmcgYSBjdXN0b21lcidzIHRlc3QgcnVuIG92ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0Q29uZmlnRmlsZXNGb3JVcGxvYWQoY29uZmlnPzogT3B0aW9ucy5UZXN0cnVubmVyKTogeyBmaWxlczogQ2FwdHVyZWRGaWxlW10sIGZhaWx1cmVzOiBzdHJpbmdbXSwgc3RyYXRlZ3k/OiBzdHJpbmcgfSB7XG4gICAgY29uc3QgZmFpbHVyZXM6IHN0cmluZ1tdID0gW11cbiAgICBjb25zdCBmaWxlczogQ2FwdHVyZWRGaWxlW10gPSBbXVxuICAgIGNvbnN0IHRha2VuTmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzb2x1dGlvbiA9IGluaXRXZGlvQ29uZmlnUGF0aChjb25maWcpXG4gICAgICAgIGlmICghcmVzb2x1dGlvbi5jb25maWdQYXRoKSB7XG4gICAgICAgICAgICBmYWlsdXJlcy5wdXNoKHJlc29sdXRpb24ucmVhc29uIHx8ICdjb25maWdfbm90X2ZvdW5kJylcbiAgICAgICAgICAgIHJldHVybiB7IGZpbGVzLCBmYWlsdXJlcyB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGNvbnRlbnQsIHJlYXNvbiB9ID0gcmVhZENhcHBlZEZpbGUocmVzb2x1dGlvbi5jb25maWdQYXRoKVxuICAgICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmYWlsdXJlcy5wdXNoKHJlYXNvbiB8fCAnY29uZmlnX3JlYWRfZmFpbGVkJylcbiAgICAgICAgICAgIHJldHVybiB7IGZpbGVzLCBmYWlsdXJlcywgc3RyYXRlZ3k6IHJlc29sdXRpb24uc3RyYXRlZ3kgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmlsZXMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBkZWR1cGVFbnRyeU5hbWUocmVzb2x1dGlvbi5jb25maWdQYXRoLCB0YWtlbk5hbWVzKSxcbiAgICAgICAgICAgIHNvdXJjZVBhdGg6IHJlc29sdXRpb24uY29uZmlnUGF0aCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHJlZGFjdFNlbnNpdGl2ZUNvbnRlbnQoY29udGVudClcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByZW1haW5pbmcgPSBNQVhfQ0FQVFVSRURfQ09ORklHX0ZJTEVTIC0gZmlsZXMubGVuZ3RoXG4gICAgICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICAgICAgICAvLyBjb250ZW50IGNvbWVzIGJhY2sgZnJvbSB0aGUgZGlzY292ZXJ5IHBhc3MgXHUyMDE0IHJlLXJlYWRpbmcgaGVyZSB3b3VsZCBiZSBhIHNlY29uZFxuICAgICAgICAgICAgLy8gZGlzayByZWFkIHBlciBmaWxlIGFuZCBjb3VsZCBhcmNoaXZlIGRpZmZlcmVudCBieXRlcyB0aGFuIHdlcmUgc2Nhbm5lZC5cbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1wb3J0ZWQgb2YgY29sbGVjdExvY2FsSW1wb3J0cyhyZXNvbHV0aW9uLmNvbmZpZ1BhdGgsIGNvbnRlbnQsIHJlbWFpbmluZykpIHtcbiAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGVkdXBlRW50cnlOYW1lKGltcG9ydGVkLmZpbGVQYXRoLCB0YWtlbk5hbWVzKSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlUGF0aDogaW1wb3J0ZWQuZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlZGFjdFNlbnNpdGl2ZUNvbnRlbnQoaW1wb3J0ZWQuY29udGVudClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgZmlsZXMsIGZhaWx1cmVzLCBzdHJhdGVneTogcmVzb2x1dGlvbi5zdHJhdGVneSB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZmFpbHVyZXMucHVzaChgY29uZmlnX2NhcHR1cmVfZXhjZXB0aW9uOiAkeyhlcnJvciBhcyBFcnJvcik/Lm1lc3NhZ2UgfHwgU3RyaW5nKGVycm9yKX1gKVxuICAgICAgICByZXR1cm4geyBmaWxlcywgZmFpbHVyZXMgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBXYWxrIHVwIGZyb20gYHN0YXJ0RGlyYCBsb29raW5nIGZvciBgZmlsZU5hbWVgLCBzdG9wcGluZyBhdCB0aGUgZmlsZXN5c3RlbSByb290IG9yXG4gKiBhZnRlciBNQVhfUEFDS0FHRV9KU09OX1dBTEtfVVAgbGV2ZWxzLlxuICovXG5jb25zdCBmaW5kVXB3YXJkcyA9IChzdGFydERpcjogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgICBsZXQgY3VycmVudCA9IHN0YXJ0RGlyXG4gICAgZm9yIChsZXQgZGVwdGggPSAwOyBkZXB0aCA8PSBNQVhfUEFDS0FHRV9KU09OX1dBTEtfVVA7IGRlcHRoKyspIHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gcGF0aC5qb2luKGN1cnJlbnQsIGZpbGVOYW1lKVxuICAgICAgICBpZiAoaXNSZWFkYWJsZUZpbGUoY2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBhdGguZGlybmFtZShjdXJyZW50KVxuICAgICAgICBpZiAocGFyZW50ID09PSBjdXJyZW50KSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBwYXJlbnRcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIGBwYWNrYWdlLmpzb25gIGZvciB0aGUgcHJvamVjdCB0aGUgY29uZmlnIGJlbG9uZ3MgdG8gXHUyMDE0IGZyYW1ld29yayBhbmQgc2VydmljZSB2ZXJzaW9uc1xuICogYXJlIHRoZSBmaXJzdCB0aGluZyB0cmlhZ2UgbmVlZHMsIGFuZCB0aGUgYXJjaGl2ZSBjYXJyaWVkIG5laXRoZXIgYmVmb3JlLlxuICpcbiAqIFdhbGtzIFVQIGZyb20gdGhlIGNvbmZpZydzIGRpcmVjdG9yeSwgYmVjYXVzZSBgY29uZmlncy93ZGlvLmNvbmYudHNgIChhIHZlcnkgY29tbW9uXG4gKiBsYXlvdXQpIHB1dHMgdGhlIG1hbmlmZXN0IG9uZSBvciBtb3JlIGxldmVscyBhYm92ZSB0aGUgY29uZmlnLCBub3QgYmVzaWRlIGl0LlxuICogQXJjaGl2ZWQgdmVyYmF0aW06IGl0IGlzIGEgbWFuaWZlc3QsIG5vdCBhIHNlY3JldCBzdG9yZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYWNrYWdlSnNvbkZvclVwbG9hZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGNvbmZpZ1BhdGggPSBwcm9jZXNzLmVudltCUk9XU0VSU1RBQ0tfV0RJT19DT05GSUdfRklMRV9QQVRIXVxuICAgIGNvbnN0IHN0YXJ0RGlycyA9IFtjb25maWdQYXRoID8gcGF0aC5kaXJuYW1lKGNvbmZpZ1BhdGgpIDogdW5kZWZpbmVkLCBwcm9jZXNzLmN3ZCgpXVxuICAgICAgICAuZmlsdGVyKChkaXIpOiBkaXIgaXMgc3RyaW5nID0+IEJvb2xlYW4oZGlyKSlcblxuICAgIGZvciAoY29uc3QgZGlyIG9mIEFycmF5LmZyb20obmV3IFNldChzdGFydERpcnMpKSkge1xuICAgICAgICBjb25zdCBmb3VuZCA9IGZpbmRVcHdhcmRzKGRpciwgJ3BhY2thZ2UuanNvbicpXG4gICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZvdW5kXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxufVxuIiwgImltcG9ydCB7IEJTdGFja0xvZ2dlciB9IGZyb20gJy4uL2JzdGFja0xvZ2dlci5qcydcbmltcG9ydCB0eXBlIHsgRmVhdHVyZVN0YXRzT3ZlcnZpZXcgfSBmcm9tICcuLi90eXBlcy5qcydcbmltcG9ydCB7IGlzT2JqZWN0RW1wdHkgfSBmcm9tICcuLi91dGlsLmpzJ1xuXG5pbnRlcmZhY2UgRmVhdHVyZVN0YXRzTWFwIHtcbiAgICBbZ3JvdXBJZDogc3RyaW5nXTogRmVhdHVyZVN0YXRzO1xufVxuXG5pbnRlcmZhY2UgSlNPTkNvbnZlcnNpb25TZXR0aW5ncyB7XG4gICAgb21pdEdyb3Vwcz86IGJvb2xlYW5cbiAgICBvbmx5R3JvdXBzPzogYm9vbGVhblxuICAgIG5lc3RlZEdyb3Vwcz86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlIHtcbiAgICB0cmlnZ2VyZWRDb3VudDogbnVtYmVyXG4gICAgc2VudENvdW50OiBudW1iZXJcbiAgICBmYWlsZWRDb3VudDogbnVtYmVyXG4gICAgZ3JvdXBzOiBGZWF0dXJlW11cbn1cblxuY2xhc3MgRmVhdHVyZVN0YXRzIHtcbiAgICBwcml2YXRlIHRyaWdnZXJlZENvdW50OiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBzZW50Q291bnQ6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIGZhaWxlZENvdW50OiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBncm91cHM6IEZlYXR1cmVTdGF0c01hcCA9IHt9XG5cbiAgICBwdWJsaWMgbWFyayhzdGF0dXM6IHN0cmluZywgZ3JvdXBJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgJ3RyaWdnZXJlZCc6XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJlZChncm91cElkKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIGNhc2UgJ3NlbnQnOlxuICAgICAgICAgICAgdGhpcy5zZW50KGdyb3VwSWQpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdmYWlsZWQnOlxuICAgICAgICAgICAgdGhpcy5mYWlsZWQoZ3JvdXBJZClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoJ1JlcXVlc3QgdG8gbWFyayB1c2FnZSBmb3IgdW5rbm93biBzdGF0dXMgLSAnICsgc3RhdHVzKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0cmlnZ2VyZWQoZ3JvdXBJZD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJlZENvdW50ICs9IDFcbiAgICAgICAgaWYgKGdyb3VwSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR3JvdXAoZ3JvdXBJZCkudHJpZ2dlcmVkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZW50KGdyb3VwSWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZW50Q291bnQgKz0gMVxuICAgICAgICBpZiAoZ3JvdXBJZCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVHcm91cChncm91cElkKS5zZW50KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBmYWlsZWQoZ3JvdXBJZD86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmZhaWxlZENvdW50ICs9IDFcbiAgICAgICAgaWYgKGdyb3VwSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR3JvdXAoZ3JvdXBJZCkuZmFpbGVkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdWNjZXNzKGdyb3VwSWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZW50KGdyb3VwSWQpXG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IEZlYXR1cmVTdGF0cyB7XG4gICAgICAgIGlmICghdGhpcy5ncm91cHNbZ3JvdXBJZF0pIHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBzW2dyb3VwSWRdID0gbmV3IEZlYXR1cmVTdGF0cygpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBzW2dyb3VwSWRdXG4gICAgfVxuXG4gICAgcHVibGljIGdldFRyaWdnZXJlZENvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXJlZENvdW50XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNlbnRDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW50Q291bnRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmFpbGVkQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFpbGVkQ291bnRcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VXNhZ2VGb3JHcm91cChncm91cElkOiBzdHJpbmcpOiBGZWF0dXJlU3RhdHMge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cHNbZ3JvdXBJZF0gfHwgbmV3IEZlYXR1cmVTdGF0cygpXG4gICAgfVxuXG4gICAgcHVibGljIGdldE92ZXJ2aWV3KCk6IEZlYXR1cmVTdGF0c092ZXJ2aWV3IHtcbiAgICAgICAgcmV0dXJuIHsgdHJpZ2dlcmVkQ291bnQ6IHRoaXMudHJpZ2dlcmVkQ291bnQsIHNlbnRDb3VudDogdGhpcy5zZW50Q291bnQsIGZhaWxlZENvdW50OiB0aGlzLmZhaWxlZENvdW50IH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0R3JvdXBzKCk6IEZlYXR1cmVTdGF0c01hcCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3Vwc1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGQoZmVhdHVyZVN0YXRzOiBGZWF0dXJlU3RhdHMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyZWRDb3VudCArPSBmZWF0dXJlU3RhdHMuZ2V0VHJpZ2dlcmVkQ291bnQoKVxuICAgICAgICB0aGlzLnNlbnRDb3VudCArPSBmZWF0dXJlU3RhdHMuZ2V0U2VudENvdW50KClcbiAgICAgICAgdGhpcy5mYWlsZWRDb3VudCArPSBmZWF0dXJlU3RhdHMuZ2V0RmFpbGVkQ291bnQoKVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGZlYXR1cmVTdGF0cy5nZXRHcm91cHMoKSkuZm9yRWFjaCgoW2dyb3VwSWQsIGdyb3VwXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVHcm91cChncm91cElkKS5hZGQoZ3JvdXApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gb21pdEdyb3VwczogdHJ1ZS9mYWxzZSAtPiBJbmNsdWRlIGdyb3VwcyBvciBub3RcbiAgICAvLyBvbmx5R3JvdXBzOiB0cnVlL2ZhbHNlIC0+IGRhdGEgaW5jbHVkZXMgb25seSBncm91cHNcbiAgICAvLyBuZXN0ZWRHcm91cHM6IHRydWUvZmFsc2UgLT4gZ3JvdXBzIHdpbGwgYmUgbmVzdGVkIGluIGdyb3VwcyBpZiB0cnVlXG4gICAgcHVibGljIHRvSlNPTihjb25maWc6IEpTT05Db252ZXJzaW9uU2V0dGluZ3MgPSB7fSkge1xuICAgICAgICBjb25zdCBvdmVydmlld0RhdGE6IEZlYXR1cmVTdGF0c092ZXJ2aWV3fFJlY29yZDxzdHJpbmcsIG5ldmVyPiA9ICFjb25maWcub25seUdyb3VwcyA/IHtcbiAgICAgICAgICAgIHRyaWdnZXJlZENvdW50OiB0aGlzLnRyaWdnZXJlZENvdW50LFxuICAgICAgICAgICAgc2VudENvdW50OiB0aGlzLnNlbnRDb3VudCxcbiAgICAgICAgICAgIGZhaWxlZENvdW50OiB0aGlzLmZhaWxlZENvdW50XG4gICAgICAgIH0gOiB7fVxuXG4gICAgICAgIGNvbnN0IGdyb3Vwc0RhdGE6IFJlY29yZDxzdHJpbmcsIEZlYXR1cmVTdGF0c092ZXJ2aWV3PiA9IHt9XG4gICAgICAgIGlmICghY29uZmlnLm9taXRHcm91cHMpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZ3JvdXBzKS5mb3JFYWNoKChbZ3JvdXBJZCwgZ3JvdXBdKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzRGF0YVtncm91cElkXSA9IChncm91cC50b0pTT04oKSBhcyBGZWF0dXJlU3RhdHNPdmVydmlldykgLy8gQ3VycmVudGx5IE5lc3RlZCBncm91cHMgYXJlIG9ubHkgb3ZlcnZpZXdzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyb3VwID0gY29uZmlnLm5lc3RlZEdyb3VwcyA/IHsgZ3JvdXBzOiBncm91cHNEYXRhIH0gOiBncm91cHNEYXRhXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLm92ZXJ2aWV3RGF0YSxcbiAgICAgICAgICAgIC4uLmdyb3VwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21KU09OKGpzb246IEZlYXR1cmUpOiBGZWF0dXJlU3RhdHMge1xuICAgICAgICBjb25zdCBzdGF0cyA9IG5ldyBGZWF0dXJlU3RhdHMoKVxuXG4gICAgICAgIGlmICghanNvbiB8fCBpc09iamVjdEVtcHR5KGpzb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdHNcbiAgICAgICAgfVxuICAgICAgICBzdGF0cy50cmlnZ2VyZWRDb3VudCA9IGpzb24udHJpZ2dlcmVkQ291bnRcbiAgICAgICAgc3RhdHMuc2VudENvdW50ID0ganNvbi5zZW50Q291bnRcbiAgICAgICAgc3RhdHMuZmFpbGVkQ291bnQgPSBqc29uLmZhaWxlZENvdW50XG5cbiAgICAgICAgaWYgKCFqc29uLmdyb3Vwcykge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRzXG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoanNvbi5ncm91cHMpLmZvckVhY2goKFtncm91cElkLCBncm91cF0pID0+IHtcbiAgICAgICAgICAgIHN0YXRzLmdyb3Vwc1tncm91cElkXSA9IEZlYXR1cmVTdGF0cy5mcm9tSlNPTihncm91cClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHN0YXRzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlU3RhdHNcbiIsICJpbXBvcnQgeyBnZXRFcnJvclN0cmluZyB9IGZyb20gJy4uL3V0aWwuanMnXG5cbmNsYXNzIEZlYXR1cmVVc2FnZSB7XG4gICAgcHJpdmF0ZSBpc1RyaWdnZXJlZD86IGJvb2xlYW5cbiAgICBwcml2YXRlIHN0YXR1cz86IHN0cmluZ1xuICAgIHByaXZhdGUgZXJyb3I/OiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKGlzVHJpZ2dlcmVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNUcmlnZ2VyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pc1RyaWdnZXJlZCA9IGlzVHJpZ2dlcmVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VHJpZ2dlcmVkKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1RyaWdnZXJlZFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUcmlnZ2VyZWQodHJpZ2dlcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNUcmlnZ2VyZWQgPSB0cmlnZ2VyZWRcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U3RhdHVzKHN0YXR1czogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzXG4gICAgfVxuXG4gICAgcHVibGljIHNldEVycm9yKGVycm9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yXG4gICAgfVxuXG4gICAgcHVibGljIHRyaWdnZXJlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc1RyaWdnZXJlZCA9IHRydWVcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFpbGVkKGU6IHVua25vd24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAnZmFpbGVkJ1xuICAgICAgICB0aGlzLmVycm9yID0gZ2V0RXJyb3JTdHJpbmcoZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc3VjY2VzcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAnc3VjY2VzcydcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3RhdHVzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFcnJvcigpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvclxuICAgIH1cblxuICAgIHB1YmxpYyB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1RyaWdnZXJlZDogdGhpcy5pc1RyaWdnZXJlZCxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICBlcnJvcjogdGhpcy5lcnJvclxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlVXNhZ2VcbiIsICJjbGFzcyBUZXN0T3BzQ29uZmlnIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFRlc3RPcHNDb25maWdcbiAgICBwdWJsaWMgYnVpbGRTdG9wcGVkOiBib29sZWFuID0gZmFsc2VcbiAgICBwdWJsaWMgYnVpbGRIYXNoZWRJZD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKC4uLmFyZ3M6IHVua25vd25bXSkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHBhc3NpbmcgYXJncyB0byBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVGVzdE9wc0NvbmZpZyguLi5hcmdzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbiA9IHRydWUsXG4gICAgICAgIHB1YmxpYyBtYW51YWxseVNldDogYm9vbGVhbiA9IGZhbHNlLFxuICAgICl7XG4gICAgICAgIFRlc3RPcHNDb25maWcuX2luc3RhbmNlID0gdGhpc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdE9wc0NvbmZpZ1xuIiwgImltcG9ydCBGZWF0dXJlU3RhdHMsIHsgdHlwZSBGZWF0dXJlIH0gZnJvbSAnLi9mZWF0dXJlU3RhdHMuanMnXG5pbXBvcnQgRmVhdHVyZVVzYWdlIGZyb20gJy4vZmVhdHVyZVVzYWdlLmpzJ1xuaW1wb3J0IHsgQlN0YWNrTG9nZ2VyIH0gZnJvbSAnLi4vYnN0YWNrTG9nZ2VyLmpzJ1xuaW1wb3J0IFRlc3RPcHNDb25maWcgZnJvbSAnLi90ZXN0T3BzQ29uZmlnLmpzJ1xuaW1wb3J0IHR5cGUgeyBUT1VzYWdlU3RhdHMgfSBmcm9tICcuLi90eXBlcy5qcydcblxuZXhwb3J0IGludGVyZmFjZSBVc2FnZVN0YXQge1xuICAgIHRlc3RFdmVudHM6IHtcbiAgICAgICAgc3RhcnRlZDogRmVhdHVyZVxuICAgICAgICBmaW5pc2hlZDogRmVhdHVyZVxuICAgIH1cbiAgICBob29rRXZlbnRzOiB7XG4gICAgICAgIHN0YXJ0ZWQ6IEZlYXR1cmVcbiAgICAgICAgZmluaXNoZWQ6IEZlYXR1cmVcbiAgICB9XG4gICAgbG9nRXZlbnRzOiBGZWF0dXJlXG4gICAgY2J0U2Vzc2lvbkV2ZW50czogRmVhdHVyZVxuICAgIGNidFNlc3Npb25TdGF0czogRmVhdHVyZVxufVxuXG5jbGFzcyBVc2FnZVN0YXRzIHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBVc2FnZVN0YXRzXG4gICAgcHVibGljIHRlc3RTdGFydGVkU3RhdHM6IEZlYXR1cmVTdGF0c1xuICAgIHB1YmxpYyB0ZXN0RmluaXNoZWRTdGF0czogRmVhdHVyZVN0YXRzXG4gICAgcHVibGljIGhvb2tTdGFydGVkU3RhdHM6IEZlYXR1cmVTdGF0c1xuICAgIHB1YmxpYyBob29rRmluaXNoZWRTdGF0czogRmVhdHVyZVN0YXRzXG4gICAgcHVibGljIGNidFNlc3Npb25TdGF0czogRmVhdHVyZVN0YXRzXG4gICAgcHVibGljIGxvZ1N0YXRzOiBGZWF0dXJlU3RhdHNcbiAgICBwdWJsaWMgbGF1bmNoQnVpbGRVc2FnZTogRmVhdHVyZVVzYWdlXG4gICAgcHVibGljIHN0b3BCdWlsZFVzYWdlOiBGZWF0dXJlVXNhZ2VcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVXNhZ2VTdGF0cyB7XG4gICAgICAgIGlmICghVXNhZ2VTdGF0cy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgVXNhZ2VTdGF0cy5pbnN0YW5jZSA9IG5ldyBVc2FnZVN0YXRzKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVXNhZ2VTdGF0cy5pbnN0YW5jZVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRlc3RTdGFydGVkU3RhdHMgPSBuZXcgRmVhdHVyZVN0YXRzKClcbiAgICAgICAgdGhpcy50ZXN0RmluaXNoZWRTdGF0cyA9IG5ldyBGZWF0dXJlU3RhdHMoKVxuICAgICAgICB0aGlzLmhvb2tTdGFydGVkU3RhdHMgPSBuZXcgRmVhdHVyZVN0YXRzKClcbiAgICAgICAgdGhpcy5ob29rRmluaXNoZWRTdGF0cyA9IG5ldyBGZWF0dXJlU3RhdHMoKVxuICAgICAgICB0aGlzLmNidFNlc3Npb25TdGF0cyA9IG5ldyBGZWF0dXJlU3RhdHMoKVxuICAgICAgICB0aGlzLmxvZ1N0YXRzID0gbmV3IEZlYXR1cmVTdGF0cygpXG4gICAgICAgIHRoaXMubGF1bmNoQnVpbGRVc2FnZSA9IG5ldyBGZWF0dXJlVXNhZ2UoKVxuICAgICAgICB0aGlzLnN0b3BCdWlsZFVzYWdlID0gbmV3IEZlYXR1cmVVc2FnZSgpXG4gICAgfVxuXG4gICAgcHVibGljIGFkZCh1c2FnZVN0YXRzOiBVc2FnZVN0YXRzKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGVzdFN0YXJ0ZWRTdGF0cy5hZGQodXNhZ2VTdGF0cy50ZXN0U3RhcnRlZFN0YXRzKVxuICAgICAgICB0aGlzLnRlc3RGaW5pc2hlZFN0YXRzLmFkZCh1c2FnZVN0YXRzLnRlc3RGaW5pc2hlZFN0YXRzKVxuICAgICAgICB0aGlzLmhvb2tTdGFydGVkU3RhdHMuYWRkKHVzYWdlU3RhdHMuaG9va1N0YXJ0ZWRTdGF0cylcbiAgICAgICAgdGhpcy5ob29rRmluaXNoZWRTdGF0cy5hZGQodXNhZ2VTdGF0cy5ob29rRmluaXNoZWRTdGF0cylcbiAgICAgICAgdGhpcy5jYnRTZXNzaW9uU3RhdHMuYWRkKHVzYWdlU3RhdHMuY2J0U2Vzc2lvblN0YXRzKVxuICAgICAgICB0aGlzLmxvZ1N0YXRzLmFkZCh1c2FnZVN0YXRzLmxvZ1N0YXRzKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGb3JtYXR0ZWREYXRhKHdvcmtlcnNEYXRhOiB7IHVzYWdlU3RhdHM6IFVzYWdlU3RhdCB9W10pIHtcbiAgICAgICAgdGhpcy5hZGREYXRhRnJvbVdvcmtlcnMod29ya2Vyc0RhdGEpXG4gICAgICAgIGNvbnN0IHRlc3RPcHNDb25maWcgPSBUZXN0T3BzQ29uZmlnLmdldEluc3RhbmNlKClcbiAgICAgICAgY29uc3QgdXNhZ2U6IFRPVXNhZ2VTdGF0cyA9IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRlc3RPcHNDb25maWcuZW5hYmxlZCxcbiAgICAgICAgICAgIG1hbnVhbGx5U2V0OiB0ZXN0T3BzQ29uZmlnLm1hbnVhbGx5U2V0LFxuICAgICAgICAgICAgYnVpbGRIYXNoZWRJZDogdGVzdE9wc0NvbmZpZy5idWlsZEhhc2hlZElkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVzYWdlLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2FnZVxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVzYWdlLmV2ZW50cyA9IHRoaXMuZ2V0RXZlbnRzRGF0YSgpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZygnZXhjZXB0aW9uIGluIGdldEZvcm1hdHRlZERhdGE6ICcgKyBlKVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzYWdlXG4gICAgfVxuXG4gICAgcHVibGljIGFkZERhdGFGcm9tV29ya2Vycyh3b3JrZXJzRGF0YTogeyB1c2FnZVN0YXRzOiBVc2FnZVN0YXQgfVtdKSB7XG4gICAgICAgIHdvcmtlcnNEYXRhLm1hcCh3b3JrZXJEYXRhID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNhZ2VTdGF0c0ZvcldvcmtlciA9IFVzYWdlU3RhdHMuZnJvbUpTT04od29ya2VyRGF0YS51c2FnZVN0YXRzKVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKHVzYWdlU3RhdHNGb3JXb3JrZXIpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKCdFeGNlcHRpb24gaW4gYWRkaW5nIHdvcmtlckRhdGE6ICcgKyBlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFdmVudHNEYXRhKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidWlsZEV2ZW50czoge1xuICAgICAgICAgICAgICAgIHN0YXJ0ZWQ6IHRoaXMubGF1bmNoQnVpbGRVc2FnZS50b0pTT04oKSxcbiAgICAgICAgICAgICAgICBmaW5pc2hlZDogdGhpcy5zdG9wQnVpbGRVc2FnZS50b0pTT04oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlc3RFdmVudHM6IHtcbiAgICAgICAgICAgICAgICBzdGFydGVkOiB0aGlzLnRlc3RTdGFydGVkU3RhdHMudG9KU09OKCksXG4gICAgICAgICAgICAgICAgZmluaXNoZWQ6IHRoaXMudGVzdEZpbmlzaGVkU3RhdHMudG9KU09OKHsgb21pdEdyb3VwczogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAuLi50aGlzLnRlc3RGaW5pc2hlZFN0YXRzLnRvSlNPTih7IG9ubHlHcm91cHM6IHRydWUgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob29rRXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRlZDogdGhpcy5ob29rU3RhcnRlZFN0YXRzLnRvSlNPTigpLFxuICAgICAgICAgICAgICAgIGZpbmlzaGVkOiB0aGlzLmhvb2tGaW5pc2hlZFN0YXRzLnRvSlNPTih7IG9taXRHcm91cHM6IHRydWUgfSksXG4gICAgICAgICAgICAgICAgLi4udGhpcy5ob29rRmluaXNoZWRTdGF0cy50b0pTT04oeyBvbmx5R3JvdXBzOiB0cnVlIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9nRXZlbnRzOiB0aGlzLmxvZ1N0YXRzLnRvSlNPTigpLFxuICAgICAgICAgICAgY2J0U2Vzc2lvbkV2ZW50czogdGhpcy5jYnRTZXNzaW9uU3RhdHMudG9KU09OKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhVG9TYXZlKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0ZXN0RXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRlZDogdGhpcy50ZXN0U3RhcnRlZFN0YXRzLnRvSlNPTigpLFxuICAgICAgICAgICAgICAgIGZpbmlzaGVkOiB0aGlzLnRlc3RGaW5pc2hlZFN0YXRzLnRvSlNPTih7IG5lc3RlZEdyb3VwczogdHJ1ZSB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob29rRXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRlZDogdGhpcy5ob29rU3RhcnRlZFN0YXRzLnRvSlNPTigpLFxuICAgICAgICAgICAgICAgIGZpbmlzaGVkOiB0aGlzLmhvb2tGaW5pc2hlZFN0YXRzLnRvSlNPTih7IG5lc3RlZEdyb3VwczogdHJ1ZSB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2dFdmVudHM6IHRoaXMubG9nU3RhdHMudG9KU09OKHsgbmVzdGVkR3JvdXBzOiB0cnVlIH0pLFxuICAgICAgICAgICAgY2J0U2Vzc2lvbkV2ZW50czogdGhpcy5jYnRTZXNzaW9uU3RhdHMudG9KU09OKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUpTT04oZGF0YTogVXNhZ2VTdGF0KSB7XG4gICAgICAgIGNvbnN0IHVzYWdlU3RhdHMgPSBuZXcgVXNhZ2VTdGF0cygpXG4gICAgICAgIHVzYWdlU3RhdHMudGVzdFN0YXJ0ZWRTdGF0cyA9IEZlYXR1cmVTdGF0cy5mcm9tSlNPTihkYXRhLnRlc3RFdmVudHMuc3RhcnRlZClcbiAgICAgICAgdXNhZ2VTdGF0cy50ZXN0RmluaXNoZWRTdGF0cyA9IEZlYXR1cmVTdGF0cy5mcm9tSlNPTihkYXRhLnRlc3RFdmVudHMuZmluaXNoZWQpXG4gICAgICAgIHVzYWdlU3RhdHMuaG9va1N0YXJ0ZWRTdGF0cyA9IEZlYXR1cmVTdGF0cy5mcm9tSlNPTihkYXRhLmhvb2tFdmVudHMuc3RhcnRlZClcbiAgICAgICAgdXNhZ2VTdGF0cy5ob29rRmluaXNoZWRTdGF0cyA9IEZlYXR1cmVTdGF0cy5mcm9tSlNPTihkYXRhLmhvb2tFdmVudHMuZmluaXNoZWQpXG4gICAgICAgIHVzYWdlU3RhdHMubG9nU3RhdHMgPSBGZWF0dXJlU3RhdHMuZnJvbUpTT04oZGF0YS5sb2dFdmVudHMpXG4gICAgICAgIHVzYWdlU3RhdHMuY2J0U2Vzc2lvblN0YXRzID0gRmVhdHVyZVN0YXRzLmZyb21KU09OKGRhdGEuY2J0U2Vzc2lvblN0YXRzKVxuICAgICAgICByZXR1cm4gdXNhZ2VTdGF0c1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNhZ2VTdGF0c1xuIiwgImltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCBmcyBmcm9tICdub2RlOmZzJ1xuaW1wb3J0IG9zIGZyb20gJ25vZGU6b3MnXG5cbmludGVyZmFjZSBTY3JpcHRzIHtcbiAgICBzY2FuOiBzdHJpbmdcbiAgICBnZXRSZXN1bHRzOiBzdHJpbmdcbiAgICBnZXRSZXN1bHRzU3VtbWFyeTogc3RyaW5nXG4gICAgc2F2ZVJlc3VsdHM6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgQ29tbWFuZCB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgY2xhc3M6IHN0cmluZ1xufVxuXG5jbGFzcyBBY2Nlc3NpYmlsaXR5U2NyaXB0cyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEFjY2Vzc2liaWxpdHlTY3JpcHRzIHwgbnVsbCA9IG51bGxcblxuICAgIHB1YmxpYyBwZXJmb3JtU2Nhbjogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgICBwdWJsaWMgZ2V0UmVzdWx0czogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgICBwdWJsaWMgZ2V0UmVzdWx0c1N1bW1hcnk6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICAgcHVibGljIHNhdmVUZXN0UmVzdWx0czogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgICBwdWJsaWMgY29tbWFuZHNUb1dyYXA6IEFycmF5PENvbW1hbmQ+IHwgbnVsbCA9IG51bGxcbiAgICBwdWJsaWMgQ2hyb21lRXh0ZW5zaW9uOiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSA9IHt9XG5cbiAgICBwdWJsaWMgYnJvd3NlcnN0YWNrRm9sZGVyUGF0aCA9ICcnXG4gICAgcHVibGljIGNvbW1hbmRzUGF0aCA9ICcnXG5cbiAgICAvLyBkb24ndCBhbGxvdyB0byBjcmVhdGUgaW5zdGFuY2VzIGZyb20gaXQgb3RoZXIgdGhhbiB0aHJvdWdoIGBjaGVja0FuZEdldEluc3RhbmNlYFxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYnJvd3NlcnN0YWNrRm9sZGVyUGF0aCA9IHRoaXMuZ2V0V3JpdGFibGVEaXIoKVxuICAgICAgICB0aGlzLmNvbW1hbmRzUGF0aCA9IHBhdGguam9pbih0aGlzLmJyb3dzZXJzdGFja0ZvbGRlclBhdGgsICdjb21tYW5kcy5qc29uJylcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrQW5kR2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghQWNjZXNzaWJpbGl0eVNjcmlwdHMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEFjY2Vzc2liaWxpdHlTY3JpcHRzLmluc3RhbmNlID0gbmV3IEFjY2Vzc2liaWxpdHlTY3JpcHRzKClcbiAgICAgICAgICAgIEFjY2Vzc2liaWxpdHlTY3JpcHRzLmluc3RhbmNlLnJlYWRGcm9tRXhpc3RpbmdGaWxlKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQWNjZXNzaWJpbGl0eVNjcmlwdHMuaW5zdGFuY2VcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbiAgICBwdWJsaWMgZ2V0V3JpdGFibGVEaXIoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZFBhdGhzID0gW1xuICAgICAgICAgICAgcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJy5icm93c2Vyc3RhY2snKSxcbiAgICAgICAgICAgIHByb2Nlc3MuY3dkKCksXG4gICAgICAgICAgICBvcy50bXBkaXIoKVxuICAgICAgICBdXG4gICAgICAgIGZvciAoY29uc3Qgb3JkZXJlZFBhdGggb2Ygb3JkZXJlZFBhdGhzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChmcy5leGlzdHNTeW5jKG9yZGVyZWRQYXRoKSkge1xuICAgICAgICAgICAgICAgICAgICBmcy5hY2Nlc3NTeW5jKG9yZGVyZWRQYXRoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JkZXJlZFBhdGhcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmcy5ta2RpclN5bmMob3JkZXJlZFBhdGgsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZGVyZWRQYXRoXG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLyogbm8tZW1wdHkgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVhZEZyb21FeGlzdGluZ0ZpbGUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyh0aGlzLmNvbW1hbmRzUGF0aCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKHRoaXMuY29tbWFuZHNQYXRoLCAndXRmOCcpXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoSlNPTi5wYXJzZShkYXRhKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLyogRG8gbm90aGluZyAqL1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkYXRhOiB7IGNvbW1hbmRzOiBbXSwgc2NyaXB0czogU2NyaXB0cywgbm9uQlN0YWNrSW5mcmFBMTF5Q2hyb21lT3B0aW9uczoge30gfSkge1xuICAgICAgICBpZiAoZGF0YS5zY3JpcHRzKSB7XG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1TY2FuID0gZGF0YS5zY3JpcHRzLnNjYW5cbiAgICAgICAgICAgIHRoaXMuZ2V0UmVzdWx0cyA9IGRhdGEuc2NyaXB0cy5nZXRSZXN1bHRzXG4gICAgICAgICAgICB0aGlzLmdldFJlc3VsdHNTdW1tYXJ5ID0gZGF0YS5zY3JpcHRzLmdldFJlc3VsdHNTdW1tYXJ5XG4gICAgICAgICAgICB0aGlzLnNhdmVUZXN0UmVzdWx0cyA9IGRhdGEuc2NyaXB0cy5zYXZlUmVzdWx0c1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmNvbW1hbmRzICYmIGRhdGEuY29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzVG9XcmFwID0gZGF0YS5jb21tYW5kc1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLm5vbkJTdGFja0luZnJhQTExeUNocm9tZU9wdGlvbnMpe1xuICAgICAgICAgICAgdGhpcy5DaHJvbWVFeHRlbnNpb24gPSBkYXRhLm5vbkJTdGFja0luZnJhQTExeUNocm9tZU9wdGlvbnNcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0b3JlKCkge1xuICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmModGhpcy5icm93c2Vyc3RhY2tGb2xkZXJQYXRoKSl7XG4gICAgICAgICAgICBmcy5ta2RpclN5bmModGhpcy5icm93c2Vyc3RhY2tGb2xkZXJQYXRoKVxuICAgICAgICB9XG5cbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyh0aGlzLmNvbW1hbmRzUGF0aCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgY29tbWFuZHM6IHRoaXMuY29tbWFuZHNUb1dyYXAsXG4gICAgICAgICAgICBzY3JpcHRzOiB7XG4gICAgICAgICAgICAgICAgc2NhbjogdGhpcy5wZXJmb3JtU2NhbixcbiAgICAgICAgICAgICAgICBnZXRSZXN1bHRzOiB0aGlzLmdldFJlc3VsdHMsXG4gICAgICAgICAgICAgICAgZ2V0UmVzdWx0c1N1bW1hcnk6IHRoaXMuZ2V0UmVzdWx0c1N1bW1hcnksXG4gICAgICAgICAgICAgICAgc2F2ZVJlc3VsdHM6IHRoaXMuc2F2ZVRlc3RSZXN1bHRzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vbkJTdGFja0luZnJhQTExeUNocm9tZU9wdGlvbnM6IHRoaXMuQ2hyb21lRXh0ZW5zaW9uLFxuICAgICAgICB9KSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY2Vzc2liaWxpdHlTY3JpcHRzLmNoZWNrQW5kR2V0SW5zdGFuY2UoKVxuZXhwb3J0IHsgQ29tbWFuZCB9XG4iLCAiaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXG5cbmltcG9ydCB0eXBlIHsgVGVzdERhdGEsIFVwbG9hZFR5cGUgfSBmcm9tICcuLi90eXBlcy5qcydcbmltcG9ydCB7IGJhdGNoQW5kUG9zdEV2ZW50cyB9IGZyb20gJy4uL3V0aWwuanMnXG5pbXBvcnQgeyBEQVRBX0JBVENIX0VORFBPSU5UIH0gZnJvbSAnLi4vY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgQlN0YWNrTG9nZ2VyIH0gZnJvbSAnLi4vYnN0YWNrTG9nZ2VyLmpzJ1xuXG4vKipcbiAqIENyYXNoLXJlc2lsaWVudCBqb3VybmFsIG9mIHRlc3QgYW5kIGhvb2sgcnVucyB0aGF0IGhhdmUgc2VudCBUZXN0UnVuU3RhcnRlZCAvXG4gKiBIb29rUnVuU3RhcnRlZCBidXQgbm90IHlldCB0aGUgbWF0Y2hpbmcgZmluaXNoLiBFYWNoIG9wZW4gcnVuIGlzIHBlcnNpc3RlZCBhcyBhIHNtYWxsXG4gKiBmaWxlIHNvIHRoYXQgaWYgdGhlIHdvcmtlciAob3IgdGhlIHdob2xlIHdkaW8gcHJvY2VzcyB0cmVlKSBpcyBraWxsZWQgbWlkLXRlc3Qgb3JcbiAqIG1pZC1ob29rLCB0aGUgbGF1bmNoZXIncyBzaHV0ZG93biBwYXRoIG9yIHRoZSBkZXRhY2hlZCBleGl0IGNsZWFudXAgY2FuIHN0aWxsIHNlbmQgYVxuICogc3ludGhldGljIFRlc3RSdW5GaW5pc2hlZCAvIEhvb2tSdW5GaW5pc2hlZCBcdTIwMTQgb3RoZXJ3aXNlIHRoZSBlbnRpdHkgc3RheXMgXCJpbiBwcm9ncmVzc1wiXG4gKiBvbiB0aGUgVGVzdCBSZXBvcnRpbmcgJiBBbmFseXRpY3MgZGFzaGJvYXJkIHVudGlsIHRoZSBiYWNrZW5kIHdhdGNoZG9nIHRpbWVzIGl0IG91dCxcbiAqIGluZmxhdGluZyB0aGUgcmVwb3J0ZWQgYnVpbGQgZHVyYXRpb24gKFNESy03MTY3OiBhbiBvcnBoYW5lZCBBRlRFUl9FQUNIIGN1Y3VtYmVyIGhvb2tcbiAqIGFkZGVkIGl0cyAyaCBob29rIHRpbWVvdXQgdG8gdGhlIGJ1aWxkJ3MgZHVyYXRpb24gb24gdGhlIG5ldyBkYXNoYm9hcmQpLlxuICovXG5cbmNvbnN0IE9QRU5fUlVOU19ESVIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2xvZ3MnLCAnYnN0YWNrX29wZW5fcnVucycpXG5cbmV4cG9ydCBjb25zdCBPUlBIQU5fRkFJTFVSRV9SRUFTT04gPSAnVGVzdCBydW4gZGlkIG5vdCBjb21wbGV0ZTogdGhlIHByb2Nlc3Mgd2FzIGludGVycnVwdGVkIG9yIHRlcm1pbmF0ZWQgYmVmb3JlIHRoZSB0ZXN0IGZpbmlzaGVkIChmaW5hbGl6ZWQgYnkgQnJvd3NlclN0YWNrIFNESyBleGl0IGNsZWFudXApJ1xuXG5mdW5jdGlvbiBvcGVuUnVuRmlsZVBhdGgodXVpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihPUEVOX1JVTlNfRElSLCBgb3Blbi1ydW4tJHt1dWlkfS5qc29uYClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29yZE9wZW5SdW4odGVzdERhdGE6IFRlc3REYXRhKSB7XG4gICAgaWYgKCF0ZXN0RGF0YSB8fCAhdGVzdERhdGEudXVpZCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgZnMubWtkaXJTeW5jKE9QRU5fUlVOU19ESVIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMob3BlblJ1bkZpbGVQYXRoKHRlc3REYXRhLnV1aWQpLCBKU09OLnN0cmluZ2lmeSh0ZXN0RGF0YSkpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoJ29wZW5SdW5zSm91cm5hbDogZmFpbGVkIHRvIHJlY29yZCBvcGVuIHJ1bjogJyArIGUpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJPcGVuUnVuKHV1aWQ/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXV1aWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGZzLnJtU3luYyhvcGVuUnVuRmlsZVBhdGgodXVpZCksIHsgZm9yY2U6IHRydWUgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1Zygnb3BlblJ1bnNKb3VybmFsOiBmYWlsZWQgdG8gY2xlYXIgb3BlbiBydW46ICcgKyBlKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxlY3RPcnBoYW5lZFJ1bnMoKTogVGVzdERhdGFbXSB7XG4gICAgY29uc3Qgb3JwaGFuczogVGVzdERhdGFbXSA9IFtdXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKE9QRU5fUlVOU19ESVIpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JwaGFuc1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmcy5yZWFkZGlyU3luYyhPUEVOX1JVTlNfRElSKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvcnBoYW5zLnB1c2goSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKE9QRU5fUlVOU19ESVIsIGZpbGUpLCAndXRmOCcpKSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYG9wZW5SdW5zSm91cm5hbDogc2tpcHBpbmcgdW5yZWFkYWJsZSBqb3VybmFsIGZpbGUgJHtmaWxlfTogJHtlfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnMucm1TeW5jKE9QRU5fUlVOU19ESVIsIHsgcmVjdXJzaXZlOiB0cnVlLCBmb3JjZTogdHJ1ZSB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKCdvcGVuUnVuc0pvdXJuYWw6IGZhaWxlZCB0byBjb2xsZWN0IG9ycGhhbmVkIHJ1bnM6ICcgKyBlKVxuICAgIH1cbiAgICByZXR1cm4gb3JwaGFuc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluYWxpemVPcnBoYW5lZFJ1bnMoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBvcnBoYW5zID0gY29sbGVjdE9ycGhhbmVkUnVucygpXG4gICAgICAgIGlmICghb3JwaGFucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmluaXNoZWRBdCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICBjb25zdCBldmVudHM6IFVwbG9hZFR5cGVbXSA9IG9ycGhhbnMubWFwKChydW5EYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydGVkQXRNcyA9IHJ1bkRhdGEuc3RhcnRlZF9hdCA/IG5ldyBEYXRlKHJ1bkRhdGEuc3RhcnRlZF9hdCkuZ2V0VGltZSgpIDogTmFOXG4gICAgICAgICAgICBjb25zdCBmaW5pc2hlZFJ1biA9IHtcbiAgICAgICAgICAgICAgICAuLi5ydW5EYXRhLFxuICAgICAgICAgICAgICAgIGZpbmlzaGVkX2F0OiBmaW5pc2hlZEF0LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgZHVyYXRpb25faW5fbXM6IE51bWJlci5pc05hTihzdGFydGVkQXRNcykgPyB1bmRlZmluZWQgOiBNYXRoLm1heCgwLCBEYXRlLm5vdygpIC0gc3RhcnRlZEF0TXMpLFxuICAgICAgICAgICAgICAgIGZhaWx1cmU6IFt7IGJhY2t0cmFjZTogW09SUEhBTl9GQUlMVVJFX1JFQVNPTl0gfV0sXG4gICAgICAgICAgICAgICAgZmFpbHVyZV9yZWFzb246IE9SUEhBTl9GQUlMVVJFX1JFQVNPTixcbiAgICAgICAgICAgICAgICBmYWlsdXJlX3R5cGU6ICdVbmhhbmRsZWRFcnJvcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhvb2sgcGF5bG9hZHMgY2FycnkgdHlwZSAnaG9vaycgKHNhbWUgZGlzY3JpbWluYXRvciB0aGUgbGlzdGVuZXIgdXNlcyB0byBwaWNrXG4gICAgICAgICAgICAvLyB0aGUgaG9va19ydW4vdGVzdF9ydW4gZW52ZWxvcGUga2V5KSBcdTIwMTQgZmluYWxpemUgdGhlbSBhcyBIb29rUnVuRmluaXNoZWQgc28gdGhlXG4gICAgICAgICAgICAvLyBiYWNrZW5kIGNsb3NlcyB0aGUgaG9vayBpbnN0ZWFkIG9mIGRyb3BwaW5nIGFuIHVua25vd24gdGVzdF9ydW4gdXVpZC5cbiAgICAgICAgICAgIGlmIChydW5EYXRhLnR5cGUgPT09ICdob29rJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGV2ZW50X3R5cGU6ICdIb29rUnVuRmluaXNoZWQnLCBob29rX3J1bjogZmluaXNoZWRSdW4gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXZlbnRfdHlwZTogJ1Rlc3RSdW5GaW5pc2hlZCcsIHRlc3RfcnVuOiBmaW5pc2hlZFJ1biB9XG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IGJhdGNoQW5kUG9zdEV2ZW50cyhEQVRBX0JBVENIX0VORFBPSU5ULCAnT1JQSEFORURfVEVTVF9SVU5fRklOQUxJWkFUSU9OJywgZXZlbnRzKVxuICAgICAgICBCU3RhY2tMb2dnZXIuaW5mbyhgRmluYWxpemVkICR7ZXZlbnRzLmxlbmd0aH0gb3JwaGFuZWQgdGVzdC9ob29rIHJ1bihzKSBsZWZ0IGJlaGluZCBieSBhbiBpbnRlcnJ1cHRlZCBydW5gKVxuICAgICAgICByZXR1cm4gZXZlbnRzLmxlbmd0aFxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKCdvcGVuUnVuc0pvdXJuYWw6IGZhaWxlZCB0byBmaW5hbGl6ZSBvcnBoYW5lZCBydW5zOiAnICsgZSlcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgZ2V0RXJyb3JTdHJpbmcsIHN0b3BCdWlsZFVwc3RyZWFtLCB1cGxvYWRMb2dzIH0gZnJvbSAnLi91dGlsLmpzJ1xuaW1wb3J0IHsgZmluYWxpemVPcnBoYW5lZFJ1bnMgfSBmcm9tICcuL3Rlc3RPcHMvb3BlblJ1bnNKb3VybmFsLmpzJ1xuaW1wb3J0IHsgQlN0YWNrTG9nZ2VyIH0gZnJvbSAnLi9ic3RhY2tMb2dnZXIuanMnXG5pbXBvcnQgZnMgZnJvbSAnbm9kZTpmcydcbmltcG9ydCB1dGlsIGZyb20gJ25vZGU6dXRpbCdcbmltcG9ydCB7IGZpcmVGdW5uZWxSZXF1ZXN0IH0gZnJvbSAnLi9pbnN0cnVtZW50YXRpb24vZnVubmVsSW5zdHJ1bWVudGF0aW9uLmpzJ1xuaW1wb3J0IHsgQlJPV1NFUlNUQUNLX1RFU1RIVUJfVVVJRCwgQlJPV1NFUlNUQUNLX1RFU1RIVUJfSldULCBCUk9XU0VSU1RBQ0tfT0JTRVJWQUJJTElUWSB9IGZyb20gJy4vY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHR5cGUgeyBGdW5uZWxEYXRhIH0gZnJvbSAnLi90eXBlcy5qcydcbmltcG9ydCBQZXJmb3JtYW5jZVRlc3RlciBmcm9tICcuL2luc3RydW1lbnRhdGlvbi9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS10ZXN0ZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJTdGFja0NsZWFudXAge1xuICAgIHN0YXRpYyBhc3luYyBzdGFydENsZWFudXAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBHZXQgZnVubmVsIGRhdGEgb2JqZWN0IGZyb20gc2F2ZWQgZmlsZVxuICAgICAgICAgICAgY29uc3QgZnVubmVsRGF0YUNsZWFudXAgPSBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoJy0tZnVubmVsRGF0YScpXG4gICAgICAgICAgICBsZXQgZnVubmVsRGF0YTogRnVubmVsRGF0YSB8IG51bGwgPSBudWxsXG4gICAgICAgICAgICBpZiAoZnVubmVsRGF0YUNsZWFudXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2Nlc3MuYXJndi5pbmRleE9mKCctLWZ1bm5lbERhdGEnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcHJvY2Vzcy5hcmd2W2luZGV4ICsgMV1cbiAgICAgICAgICAgICAgICBmdW5uZWxEYXRhID0gQlN0YWNrQ2xlYW51cC5nZXRGdW5uZWxEYXRhRnJvbUZpbGUoZmlsZVBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTbmFwc2hvdCBiZWZvcmUgc2VuZEZ1bm5lbERhdGEgXHUyMDE0IGZpcmVGdW5uZWxSZXF1ZXN0IHJlZGFjdHMgdGhlXG4gICAgICAgICAgICAvLyBjcmVkZW50aWFscyBpbiBwbGFjZS5cbiAgICAgICAgICAgIGNvbnN0IGZ1bm5lbFVzZXIgPSBmdW5uZWxEYXRhPy51c2VyTmFtZVxuICAgICAgICAgICAgY29uc3QgZnVubmVsS2V5ID0gZnVubmVsRGF0YT8uYWNjZXNzS2V5XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoJy0tb2JzZXJ2YWJpbGl0eScpICYmIGZ1bm5lbERhdGEpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV4ZWN1dGVPYnNlcnZhYmlsaXR5Q2xlYW51cChmdW5uZWxEYXRhKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZnVubmVsRGF0YUNsZWFudXAgJiYgZnVubmVsRGF0YSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZEZ1bm5lbERhdGEoZnVubmVsRGF0YSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVzY3VlIHRoZSBTREstbG9nIHVwbG9hZCBmb3IgcnVucyB3aG9zZSBsYXVuY2hlciBuZXZlciByZWFjaGVkXG4gICAgICAgICAgICAvLyBvbkNvbXBsZXRlIChzaWduYWwgdGVybWluYXRpb24pIFx1MjAxNCBhZnRlciBldmVudHMsIGJlZm9yZSBleGl0LlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuYXJndi5pbmNsdWRlcygnLS11cGxvYWRMb2dzJykpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmV4ZWN1dGVMb2dzVXBsb2FkKGZ1bm5lbFVzZXIsIGZ1bm5lbEtleSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGVyciBhcyBzdHJpbmdcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcihlcnJvcilcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5hcmd2LmluY2x1ZGVzKCctLXBlcmZvcm1hbmNlRGF0YScpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgUGVyZm9ybWFuY2VUZXN0ZXIudXBsb2FkRXZlbnRzRGF0YSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYEVycm9yIGluIHNlbmRpbmcgZXZlbnRzIGRhdGEgJHt1dGlsLmZvcm1hdChlcil9YClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBleGVjdXRlTG9nc1VwbG9hZChmdW5uZWxVc2VyPzogc3RyaW5nLCBmdW5uZWxLZXk/OiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvY2Vzcy5hcmd2LmluZGV4T2YoJy0tdXBsb2FkTG9ncycpXG4gICAgICAgICAgICBjb25zdCBjbGllbnRCdWlsZFV1aWQgPSBwcm9jZXNzLmFyZ3ZbaW5kZXggKyAxXVxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGZ1bm5lbFVzZXIgfHwgcHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX1VTRVJOQU1FXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBmdW5uZWxLZXkgfHwgcHJvY2Vzcy5lbnYuQlJPV1NFUlNUQUNLX0FDQ0VTU19LRVlcbiAgICAgICAgICAgIGlmICghY2xpZW50QnVpbGRVdWlkIHx8ICF1c2VyIHx8ICFrZXkpIHtcbiAgICAgICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoJ1NraXBwaW5nIGxvZ3MgdXBsb2FkIGluIGNsZWFudXA6IG1pc3NpbmcgdXVpZCBvciBjcmVkZW50aWFscycpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoYFVwbG9hZGluZyBTREsgbG9ncyBmcm9tIGNsZWFudXAgZm9yICR7Y2xpZW50QnVpbGRVdWlkfWApXG4gICAgICAgICAgICBhd2FpdCB1cGxvYWRMb2dzKHVzZXIsIGtleSwgY2xpZW50QnVpbGRVdWlkKVxuICAgICAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBTREsgbG9ncyBpbiBjbGVhbnVwOiAnICsgZ2V0RXJyb3JTdHJpbmcoZSkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIGV4ZWN1dGVPYnNlcnZhYmlsaXR5Q2xlYW51cChmdW5uZWxEYXRhOiBGdW5uZWxEYXRhKSB7XG4gICAgICAgIGlmICghcHJvY2Vzcy5lbnZbQlJPV1NFUlNUQUNLX1RFU1RIVUJfSldUXSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKCdFeGVjdXRpbmcgVGVzdCBSZXBvcnRpbmcgYW5kIEFuYWx5dGljcyBjbGVhbnVwJylcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFNESy00NjcxOiBmaW5hbGl6ZSBhbnkgdGVzdCBydW5zIG9ycGhhbmVkIGJ5IHRoZSBpbnRlcnJ1cHRlZCBwcm9jZXNzXG4gICAgICAgICAgICAvLyBiZWZvcmUgdGhlIGJ1aWxkIGl0c2VsZiBpcyBzdG9wcGVkLlxuICAgICAgICAgICAgYXdhaXQgZmluYWxpemVPcnBoYW5lZFJ1bnMoKVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3RvcEJ1aWxkVXBzdHJlYW0oKVxuICAgICAgICAgICAgaWYgKChwcm9jZXNzLmVudltCUk9XU0VSU1RBQ0tfT0JTRVJWQUJJTElUWV0pICYmIHByb2Nlc3MuZW52W0JST1dTRVJTVEFDS19URVNUSFVCX1VVSURdKSB7XG4gICAgICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmluZm8oYFxcblZpc2l0IGh0dHBzOi8vYXV0b21hdGlvbi5icm93c2Vyc3RhY2suY29tL2J1aWxkcy8ke3Byb2Nlc3MuZW52W0JST1dTRVJTVEFDS19URVNUSFVCX1VVSURdfSB0byB2aWV3IGJ1aWxkIHJlcG9ydCwgaW5zaWdodHMsIGFuZCBtYW55IG1vcmUgZGVidWdnaW5nIGluZm9ybWF0aW9uIGFsbCBhdCBvbmUgcGxhY2UhXFxuYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1cykgfHwgJ2ZhaWxlZCdcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAocmVzdWx0ICYmIHJlc3VsdC5tZXNzYWdlKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVPMTF5U3RvcERhdGEoZnVubmVsRGF0YSwgc3RhdHVzLCBzdGF0dXMgPT09ICdmYWlsZWQnID8gbWVzc2FnZSA6IHVuZGVmaW5lZClcbiAgICAgICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgICAgICAgICAgQlN0YWNrTG9nZ2VyLmVycm9yKCdFcnJvciBpbiBzdG9wcGluZyBUZXN0IFJlcG9ydGluZyBhbmQgQW5hbHl0aWNzIGJ1aWxkOiAnICsgZSlcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTzExeVN0b3BEYXRhKGZ1bm5lbERhdGEsICdmYWlsZWQnLCBlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZU8xMXlTdG9wRGF0YShmdW5uZWxEYXRhOiBGdW5uZWxEYXRhLCBzdGF0dXM6IHN0cmluZywgZXJyb3I6IHVua25vd24gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdG9EYXRhID0gZnVubmVsRGF0YT8uZXZlbnRfcHJvcGVydGllcz8ucHJvZHVjdFVzYWdlPy50ZXN0T2JzZXJ2YWJpbGl0eVxuICAgICAgICAvLyBSZXR1cm4gaWYgbm8gVGVzdCBSZXBvcnRpbmcgYW5kIEFuYWx5dGljcyBkYXRhIGluIGZ1bm5lbCBkYXRhXG4gICAgICAgIGlmICghdG9EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgZXhpc3RpbmdTdG9wRGF0YSA9IHRvRGF0YS5ldmVudHMuYnVpbGRFdmVudHMuZmluaXNoZWRcbiAgICAgICAgZXhpc3RpbmdTdG9wRGF0YSA9IGV4aXN0aW5nU3RvcERhdGEgfHwge31cblxuICAgICAgICBleGlzdGluZ1N0b3BEYXRhID0ge1xuICAgICAgICAgICAgLi4uZXhpc3RpbmdTdG9wRGF0YSxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIGVycm9yOiBnZXRFcnJvclN0cmluZyhlcnJvciksXG4gICAgICAgICAgICBzdG9wcGVkRnJvbTogJ2V4aXRIb29rJ1xuICAgICAgICB9XG4gICAgICAgIHRvRGF0YS5ldmVudHMuYnVpbGRFdmVudHMuZmluaXNoZWQgPSBleGlzdGluZ1N0b3BEYXRhXG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIHNlbmRGdW5uZWxEYXRhKGZ1bm5lbERhdGE6IEZ1bm5lbERhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGZpcmVGdW5uZWxSZXF1ZXN0KGZ1bm5lbERhdGEpXG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoJ0Z1bm5lbCBkYXRhIHNlbnQgc3VjY2Vzc2Z1bGx5IGZyb20gY2xlYW51cCcpXG4gICAgICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICAgICAgICAgIEJTdGFja0xvZ2dlci5lcnJvcignRXJyb3IgaW4gc2VuZGluZyBmdW5uZWwgZGF0YTogJyArIGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RnVubmVsRGF0YUZyb21GaWxlKGZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFmaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGY4JylcblxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShjb250ZW50KVxuICAgICAgICB0aGlzLnJlbW92ZUZ1bm5lbERhdGFGaWxlKGZpbGVQYXRoKVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVGdW5uZWxEYXRhRmlsZShmaWxlUGF0aD86IHN0cmluZykge1xuICAgICAgICBpZiAoIWZpbGVQYXRoKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBmcy5ybVN5bmMoZmlsZVBhdGgsIHsgZm9yY2U6IHRydWUgfSlcbiAgICB9XG59XG5cbnZvaWQgQlN0YWNrQ2xlYW51cC5zdGFydENsZWFudXAoKVxuIiwgImltcG9ydCBvcyBmcm9tICdub2RlOm9zJ1xuaW1wb3J0IHV0aWwsIHsgZm9ybWF0IH0gZnJvbSAnbm9kZTp1dGlsJ1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXG5pbXBvcnQgVXNhZ2VTdGF0cywgeyB0eXBlIFVzYWdlU3RhdCB9IGZyb20gJy4uL3Rlc3RPcHMvdXNhZ2VTdGF0cy5qcydcbmltcG9ydCB7IEJTdGFja0xvZ2dlciB9IGZyb20gJy4uL2JzdGFja0xvZ2dlci5qcydcbmltcG9ydCB0eXBlIEJyb3dzZXJTdGFja0NvbmZpZyBmcm9tICcuLi9jb25maWcuanMnXG5pbXBvcnQgeyBCU1RBQ0tfU0VSVklDRV9WRVJTSU9OLCBXRElPX05BTUlOR19QUkVGSVggfSBmcm9tICcuLi9jb25zdGFudHMuanMnXG5pbXBvcnQgeyBnZXREYXRhRnJvbVdvcmtlcnMgfSBmcm9tICcuLi9kYXRhLXN0b3JlLmpzJ1xuaW1wb3J0IHsgZ2V0UHJvZHVjdE1hcCB9IGZyb20gJy4uL3Rlc3RIdWIvdXRpbHMuanMnXG5pbXBvcnQgZmV0Y2hXcmFwIGZyb20gJy4uL2ZldGNoV3JhcHBlci5qcydcbmltcG9ydCB0eXBlIHsgQnJvd3NlcnN0YWNrSGVhbGluZyB9IGZyb20gJ0Bicm93c2Vyc3RhY2svYWktc2RrLW5vZGUnXG5pbXBvcnQgdHlwZSB7IEZ1bm5lbERhdGEsIEV2ZW50UHJvcGVydGllcyB9IGZyb20gJy4uL3R5cGVzLmpzJ1xuaW1wb3J0IFRlc3RPcHNDb25maWcgZnJvbSAnLi4vdGVzdE9wcy90ZXN0T3BzQ29uZmlnLmpzJ1xuaW1wb3J0IEFQSVV0aWxzIGZyb20gJy4uL2NsaS9hcGlVdGlscy5qcydcbmltcG9ydCBQZXJmb3JtYW5jZVRlc3RlciBmcm9tICcuL3BlcmZvcm1hbmNlL3BlcmZvcm1hbmNlLXRlc3Rlci5qcydcbmltcG9ydCB7IEVWRU5UUyB9IGZyb20gJy4vcGVyZm9ybWFuY2UvY29uc3RhbnRzLmpzJ1xuXG5hc3luYyBmdW5jdGlvbiBmaXJlRnVubmVsVGVzdEV2ZW50KGV2ZW50VHlwZTogc3RyaW5nLCBjb25maWc6IEJyb3dzZXJTdGFja0NvbmZpZywgaXNDTElFbmFibGVkID0gZmFsc2UpIHtcbiAgICBpZiAoIWNvbmZpZy51c2VyTmFtZSB8fCAhY29uZmlnLmFjY2Vzc0tleSkge1xuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoJ3VzZXJuYW1lL2FjY2Vzc2tleSBub3QgcGFzc2VkJylcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGJ1aWxkRXZlbnREYXRhKGV2ZW50VHlwZSwgY29uZmlnLCBpc0NMSUVuYWJsZWQpXG4gICAgICAgIGF3YWl0IGZpcmVGdW5uZWxSZXF1ZXN0KGRhdGEpXG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZygnRnVubmVsIGV2ZW50IHN1Y2Nlc3MnKVxuICAgICAgICAvLyBPbmx5IHRoZSBmaW5pc2ggZXZlbnQgZGlzYXJtcyB0aGUgZXhpdC10aW1lIGNsZWFudXAgcmVzZW5kIFx1MjAxNCBtYXJraW5nIGl0XG4gICAgICAgIC8vIG9uIFNES1Rlc3RBdHRlbXB0ZWQgbGVmdCBraWxsZWQgcnVucyB3aXRoIG5vIFNES1Rlc3RTdWNjZXNzZnVsIGF0IGFsbC5cbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ1NES1Rlc3RTdWNjZXNzZnVsJykge1xuICAgICAgICAgICAgY29uZmlnLnNlbnRGdW5uZWxEYXRhKClcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZyhgRXhjZXB0aW9uIGluIHNlbmRpbmcgZnVubmVsIGRhdGE6ICR7Zm9ybWF0KGVycm9yKX1gKVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRTdGFydChjb25maWc6IEJyb3dzZXJTdGFja0NvbmZpZykge1xuXG4gICAgLy8gVHJhY2sgZnVubmVsIHRlc3QgYXR0ZW1wdGVkIGV2ZW50XG4gICAgUGVyZm9ybWFuY2VUZXN0ZXIuc3RhcnQoRVZFTlRTLlNES19GVU5ORUxfVEVTVF9BVFRFTVBURUQpXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZmlyZUZ1bm5lbFRlc3RFdmVudCgnU0RLVGVzdEF0dGVtcHRlZCcsIGNvbmZpZylcbiAgICAgICAgUGVyZm9ybWFuY2VUZXN0ZXIuZW5kKEVWRU5UUy5TREtfRlVOTkVMX1RFU1RfQVRURU1QVEVELCB0cnVlKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIFBlcmZvcm1hbmNlVGVzdGVyLmVuZChFVkVOVFMuU0RLX0ZVTk5FTF9URVNUX0FUVEVNUFRFRCwgZmFsc2UsIGVycm9yKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRGaW5pc2goY29uZmlnOiBCcm93c2VyU3RhY2tDb25maWcsIGlzQ0xJRW5hYmxlZCA9IGZhbHNlKSB7XG4gICAgLy8gVHJhY2sgZnVubmVsIHRlc3Qgc3VjY2Vzc2Z1bCBldmVudFxuICAgIFBlcmZvcm1hbmNlVGVzdGVyLnN0YXJ0KEVWRU5UUy5TREtfRlVOTkVMX1RFU1RfU1VDQ0VTU0ZVTClcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBmaXJlRnVubmVsVGVzdEV2ZW50KCdTREtUZXN0U3VjY2Vzc2Z1bCcsIGNvbmZpZywgaXNDTElFbmFibGVkKVxuICAgICAgICBQZXJmb3JtYW5jZVRlc3Rlci5lbmQoRVZFTlRTLlNES19GVU5ORUxfVEVTVF9TVUNDRVNTRlVMLCB0cnVlKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIFBlcmZvcm1hbmNlVGVzdGVyLmVuZChFVkVOVFMuU0RLX0ZVTk5FTF9URVNUX1NVQ0NFU1NGVUwsIGZhbHNlLCBlcnJvcilcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRnVubmVsRGF0YShldmVudFR5cGU6IHN0cmluZywgY29uZmlnOiBCcm93c2VyU3RhY2tDb25maWcsIGlzQ0xJRW5hYmxlZCA9IGZhbHNlKTogc3RyaW5nIHtcbiAgICBjb25zdCBkYXRhID0gYnVpbGRFdmVudERhdGEoZXZlbnRUeXBlLCBjb25maWcsIGlzQ0xJRW5hYmxlZClcblxuICAgIEJTdGFja0xvZ2dlci5lbnN1cmVMb2dzRm9sZGVyKClcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihCU3RhY2tMb2dnZXIubG9nRm9sZGVyUGF0aCwgJ2Z1bm5lbERhdGEuanNvbicpXG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgcmV0dXJuIGZpbGVQYXRoXG59XG5cbmZ1bmN0aW9uIHJlZGFjdENyZWRlbnRpYWxzRnJvbUZ1bm5lbERhdGEoZGF0YTogRnVubmVsRGF0YSkge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnVzZXJOYW1lKSB7XG4gICAgICAgICAgICBkYXRhLnVzZXJOYW1lID0gJ1tSRURBQ1RFRF0nXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuYWNjZXNzS2V5KSB7XG4gICAgICAgICAgICBkYXRhLmFjY2Vzc0tleSA9ICdbUkVEQUNURURdJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhXG59XG5cbi8vIENhbGxlZCBmcm9tIHR3byBkaWZmZXJlbnQgcHJvY2Vzc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpcmVGdW5uZWxSZXF1ZXN0KGRhdGE6IEZ1bm5lbERhdGEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHVzZXJOYW1lLCBhY2Nlc3NLZXkgfSA9IGRhdGFcbiAgICByZWRhY3RDcmVkZW50aWFsc0Zyb21GdW5uZWxEYXRhKGRhdGEpXG5cbiAgICBCU3RhY2tMb2dnZXIuZGVidWcoJ1NlbmRpbmcgU0RLIGV2ZW50IHdpdGggZGF0YSAnICsgdXRpbC5pbnNwZWN0KGRhdGEsIHsgZGVwdGg6IDYgfSkpXG5cbiAgICBjb25zdCBlbmNvZGVkQXV0aCA9IEJ1ZmZlci5mcm9tKGAke3VzZXJOYW1lfToke2FjY2Vzc0tleX1gLCAndXRmOCcpLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hXcmFwKEFQSVV0aWxzLkZVTk5FTF9JTlNUUlVNRU5UQVRJT05fVVJMLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7ZW5jb2RlZEF1dGh9YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9KVxuICAgIEJTdGFja0xvZ2dlci5kZWJ1ZygnRnVubmVsIEV2ZW50IFJlc3BvbnNlOiAnICsgSlNPTi5zdHJpbmdpZnkoYXdhaXQgcmVzcG9uc2UudGV4dCgpKSlcbn1cblxuZnVuY3Rpb24gZ2V0UHJvZHVjdExpc3QoY29uZmlnOiBCcm93c2VyU3RhY2tDb25maWcpIHtcbiAgICBjb25zdCBwcm9kdWN0czogc3RyaW5nW10gPSBbXVxuICAgIGlmIChjb25maWcudGVzdE9ic2VydmFiaWxpdHkuZW5hYmxlZCkge1xuICAgICAgICBwcm9kdWN0cy5wdXNoKCdvYnNlcnZhYmlsaXR5JylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmFjY2Vzc2liaWxpdHkpIHtcbiAgICAgICAgcHJvZHVjdHMucHVzaCgnYWNjZXNzaWJpbGl0eScpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5wZXJjeSkge1xuICAgICAgICBwcm9kdWN0cy5wdXNoKCdwZXJjeScpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5hdXRvbWF0ZSkge1xuICAgICAgICBwcm9kdWN0cy5wdXNoKCdhdXRvbWF0ZScpXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5hcHBBdXRvbWF0ZSkge1xuICAgICAgICBwcm9kdWN0cy5wdXNoKCdhcHAtYXV0b21hdGUnKVxuICAgIH1cbiAgICByZXR1cm4gcHJvZHVjdHNcbn1cblxuZnVuY3Rpb24gYnVpbGRFdmVudERhdGEoZXZlbnRUeXBlOiBzdHJpbmcsIGNvbmZpZzogQnJvd3NlclN0YWNrQ29uZmlnLCBpc0NMSUVuYWJsZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGV2ZW50UHJvcGVydGllczogRXZlbnRQcm9wZXJ0aWVzID0ge1xuICAgICAgICAvLyBGcmFtZXdvcmsgRGV0YWlsc1xuICAgICAgICBzZGtSdW5JZDogY29uZmlnPy5zZGtSdW5JRCxcbiAgICAgICAgdGVzdGh1Yl91dWlkOiBUZXN0T3BzQ29uZmlnLmdldEluc3RhbmNlKCkuYnVpbGRIYXNoZWRJZCxcbiAgICAgICAgbGFuZ3VhZ2VfZnJhbWV3b3JrOiBnZXRMYW5ndWFnZUZyYW1ld29yayhjb25maWcuZnJhbWV3b3JrKSxcbiAgICAgICAgcmVmZXJyZXI6IGdldFJlZmVycmVyKGNvbmZpZy5mcmFtZXdvcmspLFxuICAgICAgICBsYW5ndWFnZTogJ1dlYmRyaXZlcklPJyxcbiAgICAgICAgbGFuZ3VhZ2VWZXJzaW9uOiBwcm9jZXNzLnZlcnNpb24sXG5cbiAgICAgICAgLy8gQnVpbGQgRGV0YWlsc1xuICAgICAgICBidWlsZE5hbWU6IGNvbmZpZy5idWlsZE5hbWUgfHwgJ3VuZGVmaW5lZCcsXG4gICAgICAgIGJ1aWxkSWRlbnRpZmllcjogU3RyaW5nKGNvbmZpZy5idWlsZElkZW50aWZpZXIpLFxuXG4gICAgICAgIC8vIEhvc3QgZGV0YWlsc1xuICAgICAgICBvczogb3MudHlwZSgpIHx8ICd1bmtub3duJyxcbiAgICAgICAgaG9zdG5hbWU6IG9zLmhvc3RuYW1lKCkgfHwgJ3Vua25vd24nLFxuXG4gICAgICAgIC8vIFByb2R1Y3QgRGV0YWlsc1xuICAgICAgICBwcm9kdWN0TWFwOiBnZXRQcm9kdWN0TWFwKGNvbmZpZyksXG4gICAgICAgIHByb2R1Y3Q6IGdldFByb2R1Y3RMaXN0KGNvbmZpZyksXG5cbiAgICAgICAgLy8gZnJhbWV3b3JrIGRldGFpbHNcbiAgICAgICAgZnJhbWV3b3JrOiBjb25maWcuZnJhbWV3b3JrLFxuXG4gICAgICAgIC8vIENMSSBEZXRhaWxzXG4gICAgICAgIGlzQ0xJRW5hYmxlZDogaXNDTElFbmFibGVkXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gJ1NES1Rlc3RTdWNjZXNzZnVsJykge1xuICAgICAgICBjb25zdCB3b3JrZXJEYXRhID0gZ2V0RGF0YUZyb21Xb3JrZXJzKClcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBldmVudFByb3BlcnRpZXMucHJvZHVjdFVzYWdlID0gZ2V0UHJvZHVjdFVzYWdlKHdvcmtlckRhdGEpXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5CU1RBQ0tfQTExWV9QT0xMSU5HX1RJTUVPVVQpIHtcbiAgICAgICAgICAgIGV2ZW50UHJvcGVydGllcy5wb2xsaW5nVGltZW91dCA9IHByb2Nlc3MuZW52LkJTVEFDS19BMTFZX1BPTExJTkdfVElNRU9VVCBhcyBzdHJpbmdcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhbnkgd29ya2VyIGNhbGxlZCBicm93c2VyLnJlbG9hZFNlc3Npb24oKSwgbWFyayB0aGUgYnVpbGQgc28gdGhlXG4gICAgICAgIC8vIHNlc3Npb24tbGlua2luZyBkYXNoYm9hcmQgY2FuIGV4Y2x1ZGUgaXRzIChleHBlY3RlZCkgcmVsb2FkLW9ycGhhbmVkIHNlc3Npb25zLlxuICAgICAgICB0eXBlIFdvcmtlclJlY29yZCA9IHsgcmVsb2FkSGFwcGVuZWQ/OiBib29sZWFuOyB1c2FnZVN0YXRzPzogdW5rbm93biB9XG4gICAgICAgIGNvbnN0IHJlbG9hZEhhcHBlbmVkID0gd29ya2VyRGF0YS5zb21lKCh3b3JrZXIpID0+ICh3b3JrZXIgYXMgV29ya2VyUmVjb3JkKS5yZWxvYWRIYXBwZW5lZCA9PT0gdHJ1ZSlcbiAgICAgICAgaWYgKHJlbG9hZEhhcHBlbmVkKSB7XG4gICAgICAgICAgICBldmVudFByb3BlcnRpZXMuZmluaXNoZWRNZXRhZGF0YSA9IHsgcmVhc29uOiAnc2Vzc2lvbl9yZWxvYWRlZCcgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEEgc2lnbmFsLXRlcm1pbmF0ZWQgcnVuIG11c3QgYmUgcXVlcnktZGV0ZWN0YWJsZSBcdTIwMTQga2lsbCB3aW5zIG92ZXJcbiAgICAgICAgLy8gcmVsb2FkIGFzIHRoZSBmaW5pc2ggcmVhc29uLlxuICAgICAgICBpZiAoY29uZmlnLmtpbGxTaWduYWwpIHtcbiAgICAgICAgICAgIGV2ZW50UHJvcGVydGllcy5maW5pc2hlZE1ldGFkYXRhID0geyByZWFzb246ICd1c2VyX2tpbGxlZCcsIHNpZ25hbDogY29uZmlnLmtpbGxTaWduYWwgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlck5hbWU6IGNvbmZpZy51c2VyTmFtZSxcbiAgICAgICAgYWNjZXNzS2V5OiBjb25maWcuYWNjZXNzS2V5LFxuICAgICAgICBldmVudF90eXBlOiBldmVudFR5cGUsXG4gICAgICAgIGRldGVjdGVkRnJhbWV3b3JrOiBXRElPX05BTUlOR19QUkVGSVggKyBjb25maWcuZnJhbWV3b3JrLFxuICAgICAgICBldmVudF9wcm9wZXJ0aWVzOiBldmVudFByb3BlcnRpZXNcbiAgICB9IGFzIHVua25vd24gYXMgRnVubmVsRGF0YVxuXG59XG5cbmZ1bmN0aW9uIGdldFByb2R1Y3RVc2FnZSh3b3JrZXJzRGF0YTogeyB1c2FnZVN0YXRzOiBVc2FnZVN0YXQgfVtdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGVzdE9ic2VydmFiaWxpdHk6IFVzYWdlU3RhdHMuZ2V0SW5zdGFuY2UoKS5nZXRGb3JtYXR0ZWREYXRhKHdvcmtlcnNEYXRhKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VGcmFtZXdvcmsoZnJhbWV3b3JrPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuICdXZWJkcml2ZXJJT18nICsgZnJhbWV3b3JrXG59XG5cbmZ1bmN0aW9uIGdldFJlZmVycmVyKGZyYW1ld29yaz86IHN0cmluZykge1xuICAgIGNvbnN0IGZ1bGxOYW1lID0gZnJhbWV3b3JrID8gV0RJT19OQU1JTkdfUFJFRklYICsgZnJhbWV3b3JrIDogJ1dlYmRyaXZlcklPJ1xuICAgIHJldHVybiBgJHtmdWxsTmFtZX0vJHtCU1RBQ0tfU0VSVklDRV9WRVJTSU9OfWBcbn1cblxuY29uc3Qgc2VuZEV2ZW50ID0ge1xuICAgIHRjZ0Rvd246IChjb25maWc6IEJyb3dzZXJTdGFja0NvbmZpZykgPT4gZmlyZUZ1bm5lbFRlc3RFdmVudCgnU0RLVGVzdFRjZ0Rvd25SZXNwb25zZScsIGNvbmZpZyksXG4gICAgaW52YWxpZFRjZ0F1dGg6IChjb25maWc6IEJyb3dzZXJTdGFja0NvbmZpZykgPT4gZmlyZUZ1bm5lbFRlc3RFdmVudCgnU0RLVGVzdEludmFsaWRUY2dBdXRoUmVzcG9uc2VXaXRoVXNlckltcGFjdCcsIGNvbmZpZyksXG4gICAgdGNnQXV0aEZhaWx1cmU6IChjb25maWc6IEJyb3dzZXJTdGFja0NvbmZpZykgPT4gZmlyZUZ1bm5lbFRlc3RFdmVudCgnU0RLVGVzdFRjZ0F1dGhGYWlsdXJlJywgY29uZmlnKSxcbiAgICB0Y2d0SW5pdFN1Y2Nlc3NmdWw6IChjb25maWc6IEJyb3dzZXJTdGFja0NvbmZpZykgPT4gZmlyZUZ1bm5lbFRlc3RFdmVudCgnU0RLVGVzdFRjZ3RJbml0U3VjY2Vzc2Z1bCcsIGNvbmZpZyksXG4gICAgaW5pdEZhaWxlZDogKGNvbmZpZzogQnJvd3NlclN0YWNrQ29uZmlnKSA9PiBmaXJlRnVubmVsVGVzdEV2ZW50KCdTREtUZXN0SW5pdEZhaWxlZFJlc3BvbnNlJywgY29uZmlnKSxcbiAgICB0Y2dQcm94eUZhaWx1cmU6IChjb25maWc6IEJyb3dzZXJTdGFja0NvbmZpZykgPT4gZmlyZUZ1bm5lbFRlc3RFdmVudCgnU0RLVGVzdFRjZ1Byb3h5RmFpbHVyZScsIGNvbmZpZyksXG59XG5cbmZ1bmN0aW9uIGlzUHJveHlFcnJvcihhdXRoUmVzdWx0OiB7IHN0YXR1cz86IG51bWJlciB9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChhdXRoUmVzdWx0IGFzIEJyb3dzZXJzdGFja0hlYWxpbmcuSW5pdEVycm9yUmVzcG9uc2UpPy5zdGF0dXMgPT09IDUwMlxufVxuXG5mdW5jdGlvbiBoYW5kbGVQcm94eUVycm9yKGNvbmZpZzogQnJvd3NlclN0YWNrQ29uZmlnLCBpc1NlbGZIZWFsRW5hYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIHNlbmRFdmVudC50Y2dQcm94eUZhaWx1cmUoY29uZmlnKVxuICAgIGlmIChpc1NlbGZIZWFsRW5hYmxlZCkge1xuICAgICAgICBCU3RhY2tMb2dnZXIud2FybignUHJveHkgRXJyb3IuIERpc2FibGluZyBIZWFsaW5nIGZvciB0aGlzIHNlc3Npb24uJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVVwZ3JhZGVSZXF1aXJlZChpc1NlbGZIZWFsRW5hYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChpc1NlbGZIZWFsRW5hYmxlZCkge1xuICAgICAgICBCU3RhY2tMb2dnZXIud2FybignUGxlYXNlIHVwZ3JhZGUgQnJvd3NlcnN0YWNrIFNlcnZpY2UgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uIHRvIHVzZSB0aGUgc2VsZi1oZWFsaW5nIGZlYXR1cmUuJylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUF1dGhlbnRpY2F0aW9uRmFpbHVyZShzdGF0dXM6IG51bWJlciwgY29uZmlnOiBCcm93c2VyU3RhY2tDb25maWcsIGlzU2VsZkhlYWxFbmFibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgaWYgKGlzU2VsZkhlYWxFbmFibGVkKSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIud2FybignU29tZXRoaW5nIHdlbnQgd3JvbmcuIERpc2FibGluZyBoZWFsaW5nIGZvciB0aGlzIHNlc3Npb24uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJylcbiAgICAgICAgfVxuICAgICAgICBzZW5kRXZlbnQudGNnRG93bihjb25maWcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzU2VsZkhlYWxFbmFibGVkKSB7XG4gICAgICAgICAgICBCU3RhY2tMb2dnZXIud2FybignQXV0aGVudGljYXRpb24gRmFpbGVkLiBEaXNhYmxpbmcgSGVhbGluZyBmb3IgdGhpcyBzZXNzaW9uLicpXG4gICAgICAgIH1cbiAgICAgICAgc2VuZEV2ZW50LnRjZ0F1dGhGYWlsdXJlKGNvbmZpZylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUF1dGhlbnRpY2F0aW9uU3VjY2VzcyhcbiAgICBpc0hlYWxpbmdFbmFibGVkRm9yVXNlcjogYm9vbGVhbixcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb25maWc6IEJyb3dzZXJTdGFja0NvbmZpZyxcbiAgICBpc1NlbGZIZWFsRW5hYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZFxuKSB7XG4gICAgaWYgKCFpc0hlYWxpbmdFbmFibGVkRm9yVXNlciAmJiBpc1NlbGZIZWFsRW5hYmxlZCkge1xuICAgICAgICBCU3RhY2tMb2dnZXIud2FybignSGVhbGluZyBpcyBub3QgZW5hYmxlZCBmb3IgeW91ciBncm91cCwgcGxlYXNlIGNvbnRhY3QgdGhlIGFkbWluJylcbiAgICB9IGVsc2UgaWYgKHVzZXJJZCAmJiBpc0hlYWxpbmdFbmFibGVkRm9yVXNlcikge1xuICAgICAgICBzZW5kRXZlbnQudGNndEluaXRTdWNjZXNzZnVsKGNvbmZpZylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUluaXRpYWxpemF0aW9uRmFpbHVyZShzdGF0dXM6IG51bWJlciwgY29uZmlnOiBCcm93c2VyU3RhY2tDb25maWcsIGlzU2VsZkhlYWxFbmFibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHN0YXR1cyA+PSA0MDApIHtcbiAgICAgICAgc2VuZEV2ZW50LmluaXRGYWlsZWQoY29uZmlnKVxuICAgIH0gZWxzZSBpZiAoIXN0YXR1cyAmJiBpc1NlbGZIZWFsRW5hYmxlZCkge1xuICAgICAgICBzZW5kRXZlbnQuaW52YWxpZFRjZ0F1dGgoY29uZmlnKVxuICAgIH1cblxuICAgIGlmIChpc1NlbGZIZWFsRW5hYmxlZCkge1xuICAgICAgICBCU3RhY2tMb2dnZXIud2FybignQXV0aGVudGljYXRpb24gRmFpbGVkLiBIZWFsaW5nIHdpbGwgYmUgZGlzYWJsZWQgZm9yIHRoaXMgc2Vzc2lvbi4nKVxuICAgIH1cbn1cblxuaW50ZXJmYWNlIEF1dGhSZXN1bHQge1xuICAgIG1lc3NhZ2U6IHN0cmluZ1xuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhblxuICAgIHN0YXR1czogbnVtYmVyXG4gICAgdXNlcklkOiBzdHJpbmdcbiAgICBncm91cElkOiBzdHJpbmdcbiAgICBpc0hlYWxpbmdFbmFibGVkOiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVIZWFsaW5nSW5zdHJ1bWVudGF0aW9uKFxuICAgIGF1dGhSZXN1bHQ6IEF1dGhSZXN1bHQsXG4gICAgY29uZmlnOiBCcm93c2VyU3RhY2tDb25maWcsXG4gICAgaXNTZWxmSGVhbEVuYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQsXG4pIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoaXNQcm94eUVycm9yKGF1dGhSZXN1bHQpKSB7XG4gICAgICAgICAgICBoYW5kbGVQcm94eUVycm9yKGNvbmZpZywgaXNTZWxmSGVhbEVuYWJsZWQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSwgaXNBdXRoZW50aWNhdGVkLCBzdGF0dXMsIHVzZXJJZCwgZ3JvdXBJZCwgaXNIZWFsaW5nRW5hYmxlZDogaXNIZWFsaW5nRW5hYmxlZEZvclVzZXIgfSA9IGF1dGhSZXN1bHRcblxuICAgICAgICBpZiAobWVzc2FnZSA9PT0gJ1VwZ3JhZGUgcmVxdWlyZWQnKSB7XG4gICAgICAgICAgICBoYW5kbGVVcGdyYWRlUmVxdWlyZWQoaXNTZWxmSGVhbEVuYWJsZWQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVBdXRoZW50aWNhdGlvbkZhaWx1cmUoc3RhdHVzLCBjb25maWcsIGlzU2VsZkhlYWxFbmFibGVkKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBdXRoZW50aWNhdGVkICYmIHVzZXJJZCAmJiBncm91cElkKSB7XG4gICAgICAgICAgICBoYW5kbGVBdXRoZW50aWNhdGlvblN1Y2Nlc3MoaXNIZWFsaW5nRW5hYmxlZEZvclVzZXIsIHVzZXJJZCwgY29uZmlnLCBpc1NlbGZIZWFsRW5hYmxlZClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXR1cyA+PSA0MDAgfHwgIXN0YXR1cykge1xuICAgICAgICAgICAgaGFuZGxlSW5pdGlhbGl6YXRpb25GYWlsdXJlKHN0YXR1cywgY29uZmlnLCBpc1NlbGZIZWFsRW5hYmxlZClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgQlN0YWNrTG9nZ2VyLmRlYnVnKCdFcnJvciBpbiBoYW5kbGluZyBoZWFsaW5nIGluc3RydW1lbnRhdGlvbjogJyArIGVycilcbiAgICB9XG59XG4iLCAiaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXG5cbmltcG9ydCB7IEJTdGFja0xvZ2dlciB9IGZyb20gJy4vYnN0YWNrTG9nZ2VyLmpzJ1xuXG5jb25zdCB3b3JrZXJzRGF0YURpclBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2xvZ3MnLCAnd29ya2VyX2RhdGEnKVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21Xb3JrZXJzKCl7XG4gICAgY29uc3Qgd29ya2Vyc0RhdGE6IFJlY29yZDxzdHJpbmcsIG9iamVjdD5bXSA9IFtdXG5cbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMod29ya2Vyc0RhdGFEaXJQYXRoKSkge1xuICAgICAgICByZXR1cm4gd29ya2Vyc0RhdGFcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHdvcmtlcnNEYXRhRGlyUGF0aClcbiAgICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAgIEJTdGFja0xvZ2dlci5kZWJ1ZygnUmVhZGluZyB3b3JrZXIgZmlsZSAnICsgZmlsZSlcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4od29ya2Vyc0RhdGFEaXJQYXRoLCBmaWxlKVxuICAgICAgICBjb25zdCBmaWxlQ29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKVxuICAgICAgICBjb25zdCB3b3JrZXJEYXRhID0gSlNPTi5wYXJzZShmaWxlQ29udGVudClcbiAgICAgICAgd29ya2Vyc0RhdGEucHVzaCh3b3JrZXJEYXRhKVxuICAgIH0pXG5cbiAgICAvLyBSZW1vdmUgd29ya2VyIGRhdGEgYWZ0ZXIgYWxsIHJlYWRpbmdcbiAgICByZW1vdmVXb3JrZXJzRGF0YURpcigpXG5cbiAgICByZXR1cm4gd29ya2Vyc0RhdGFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVXb3JrZXJEYXRhKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4od29ya2Vyc0RhdGFEaXJQYXRoLCAnd29ya2VyLWRhdGEtJyArIHByb2Nlc3MucGlkICsgJy5qc29uJylcblxuICAgIHRyeSB7XG4gICAgICAgIGNyZWF0ZVdvcmtlcnNEYXRhRGlyKClcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBCU3RhY2tMb2dnZXIuZGVidWcoJ0V4Y2VwdGlvbiBpbiBzYXZpbmcgd29ya2VyIGRhdGE6ICcgKyBlKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlV29ya2Vyc0RhdGFEaXIoKTogYm9vbGVhbiB7XG4gICAgZnMucm1TeW5jKHdvcmtlcnNEYXRhRGlyUGF0aCwgeyByZWN1cnNpdmU6IHRydWUsIGZvcmNlOiB0cnVlIH0pXG4gICAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gY3JlYXRlV29ya2Vyc0RhdGFEaXIoKSB7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHdvcmtlcnNEYXRhRGlyUGF0aCkpIHtcbiAgICAgICAgZnMubWtkaXJTeW5jKHdvcmtlcnNEYXRhRGlyUGF0aCwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQSxTQUFTLFlBQUFBLFdBQVUsWUFBQUMsV0FBVSxRQUFBQyxPQUFNLFdBQUFDLFVBQVMsUUFBQUMsT0FBTSxjQUFjO0FBQ2hFLE9BQU8sWUFBWTtBQUNuQixPQUFPQyxTQUFRO0FBQ2YsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsUUFBUSxhQUFBQyxrQkFBaUI7QUFDbEMsT0FBT0MsV0FBVTtBQUNqQixPQUFPQyxXQUFVO0FBTWpCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZUFBZTtBQUV0QixTQUFTLGVBQUFDLG9CQUFtQjs7O0FDZjVCLE9BQU8sZUFBZTtBQUV0QixJQUFNLGFBQWE7QUFBQSxFQUNmLE1BQU07QUFBQSxFQUFRLE9BQU87QUFBQSxFQUFTLE9BQU87QUFBQSxFQUFTLE9BQU87QUFBQSxFQUFTLE1BQU07QUFDeEU7QUFFQSxJQUFNLGFBQU4sY0FBeUIsVUFBVTtB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InBsYXRmb3JtIiwgInR5cGUiLCAidmVyc2lvbiIsICJhcmNoIiwgImZzIiwgInByb21pc2lmeSIsICJwYXRoIiwgInV0aWwiLCAicGVyZm9ybWFuY2UiLCAiZnMiLCAidXRpbCIsICJwYXRoIiwgImFyY2giLCAicGxhdGZvcm0iLCAiZnMiLCAicGF0aCIsICJwYXRoIiwgImZzIiwgImNoYWxrIiwgImxvZ2dlciIsICJsb2ciLCAibG9nZ2VyIiwgIkJTdGFja0xvZ2dlciIsICJwYXRoIiwgImZzIiwgImNoYWxrIiwgInBsYXRmb3JtIiwgIkJTdGFja0xvZ2dlciIsICJmcyIsICJ2ZXJzaW9uIiwgInBhdGgiLCAicHJvY2VzcyIsICJvcGVuUmVhZFN0cmVhbVByb21pc2UiLCAicGF0aCIsICJmcyIsICJ1dGlsIiwgInR5cGUiLCAicGxhdGZvcm0iLCAiYXJjaCIsICJmcyIsICJmcyIsICJmcyIsICJwYXRoIiwgImZzIiwgInBhdGgiLCAiZnMiLCAicGF0aCIsICJncm91cCIsICJwYXRoIiwgImZzIiwgInByb21pc2lmeSIsICJ1dGlsIiwgInBlcmZvcm1hbmNlIiwgImxhdW5jaFRlc3RTZXNzaW9uIiwgImhvc3RuYW1lIiwgInBsYXRmb3JtIiwgInR5cGUiLCAidmVyc2lvbiIsICJhcmNoIiwgInV0aWwiLCAic3RvcEJ1aWxkVXBzdHJlYW0iLCAicGF0aCIsICJmcyIsICJwYXRoIiwgImdldFBsYXRmb3JtVmVyc2lvbiIsICJnZXRSZXNvbHZlZERldmljZU5hbWUiLCAicGF0aCIsICJoYXNoIiwgImZzIiwgInBhdGgiLCAicGF0aCIsICJmcyIsICJwYXRoIiwgImZzIiwgInBhdGgiLCAiZnMiLCAidXRpbCIsICJvcyIsICJ1dGlsIiwgImZvcm1hdCIsICJwYXRoIiwgImZzIiwgInBhdGgiLCAiZnMiLCAicGF0aCIsICJ1dGlsIiwgInV0aWwiLCAiZnMiXQp9Cg==
