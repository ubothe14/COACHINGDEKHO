var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  static {
    __name(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
  static {
    __name(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance = class {
  static {
    __name(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver = class {
  static {
    __name(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
globalThis.performance = performance;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
  return BigInt(Date.now() * 1e6);
}, "bigint") });

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream = class {
  static {
    __name(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream = class {
  static {
    __name(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir3, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x2, y2, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env3) {
    return 1;
  }
  hasColors(count3, env3) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION = "22.14.0";

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process = class _Process2 extends EventEmitter {
  static {
    __name(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process2.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd3) {
    this.#cwd = cwd3;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION}`;
  }
  get versions() {
    return { node: NODE_VERSION };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw createNotImplementedError("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw createNotImplementedError("process.getActiveResourcesInfo");
  }
  exit() {
    throw createNotImplementedError("process.exit");
  }
  reallyExit() {
    throw createNotImplementedError("process.reallyExit");
  }
  kill() {
    throw createNotImplementedError("process.kill");
  }
  abort() {
    throw createNotImplementedError("process.abort");
  }
  dlopen() {
    throw createNotImplementedError("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw createNotImplementedError("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw createNotImplementedError("process.loadEnvFile");
  }
  disconnect() {
    throw createNotImplementedError("process.disconnect");
  }
  cpuUsage() {
    throw createNotImplementedError("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw createNotImplementedError("process.initgroups");
  }
  openStdin() {
    throw createNotImplementedError("process.openStdin");
  }
  assert() {
    throw createNotImplementedError("process.assert");
  }
  binding() {
    throw createNotImplementedError("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess = globalThis["process"];
var getBuiltinModule = globalProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule("node:process");
var isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
var unenvProcess = new Process({
  env: globalProcess.env,
  // `hrtime` is only available from workerd process v2
  hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess.nextTick
});
var { exit, features, platform } = workerdProcess;
var {
  // Always implemented by workerd
  env,
  // Only implemented in workerd v2
  hrtime: hrtime3,
  // Always implemented by workerd
  nextTick
} = unenvProcess;
var {
  _channel,
  _disconnect,
  _events,
  _eventsCount,
  _handleQueue,
  _maxListeners,
  _pendingMessage,
  _send,
  assert,
  disconnect,
  mainModule
} = unenvProcess;
var {
  // @ts-expect-error `_debugEnd` is missing typings
  _debugEnd,
  // @ts-expect-error `_debugProcess` is missing typings
  _debugProcess,
  // @ts-expect-error `_exiting` is missing typings
  _exiting,
  // @ts-expect-error `_fatalException` is missing typings
  _fatalException,
  // @ts-expect-error `_getActiveHandles` is missing typings
  _getActiveHandles,
  // @ts-expect-error `_getActiveRequests` is missing typings
  _getActiveRequests,
  // @ts-expect-error `_kill` is missing typings
  _kill,
  // @ts-expect-error `_linkedBinding` is missing typings
  _linkedBinding,
  // @ts-expect-error `_preload_modules` is missing typings
  _preload_modules,
  // @ts-expect-error `_rawDebug` is missing typings
  _rawDebug,
  // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
  _startProfilerIdleNotifier,
  // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
  _stopProfilerIdleNotifier,
  // @ts-expect-error `_tickCallback` is missing typings
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  availableMemory,
  // @ts-expect-error `binding` is missing typings
  binding,
  channel,
  chdir,
  config,
  connected,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  // @ts-expect-error `domain` is missing typings
  domain,
  emit,
  emitWarning,
  eventNames,
  execArgv,
  execPath,
  exitCode,
  finalization,
  getActiveResourcesInfo,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getMaxListeners,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  // @ts-expect-error `initgroups` is missing typings
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  memoryUsage,
  // @ts-expect-error `moduleLoadList` is missing typings
  moduleLoadList,
  off,
  on,
  once,
  // @ts-expect-error `openStdin` is missing typings
  openStdin,
  permission,
  pid,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  // @ts-expect-error `reallyExit` is missing typings
  reallyExit,
  ref,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  send,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setMaxListeners,
  setSourceMapsEnabled,
  setuid,
  setUncaughtExceptionCaptureCallback,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  throwDeprecation,
  title,
  traceDeprecation,
  umask,
  unref,
  uptime,
  version,
  versions
} = isWorkerdProcessV2 ? workerdProcess : unenvProcess;
var _process = {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  // @ts-expect-error old API
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
};
var process_default = _process;

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
globalThis.process = process_default;

// .wrangler/tmp/pages-XDxuQc/bundledWorker-0.5598742131082783.mjs
import { Writable } from "node:stream";
import { EventEmitter as EventEmitter2 } from "node:events";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
// @__NO_SIDE_EFFECTS__
function createNotImplementedError2(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError2, "createNotImplementedError");
__name2(createNotImplementedError2, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented2(name) {
  const fn = /* @__PURE__ */ __name2(() => {
    throw /* @__PURE__ */ createNotImplementedError2(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented2, "notImplemented");
__name2(notImplemented2, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass, "notImplementedClass");
__name2(notImplementedClass, "notImplementedClass");
var _timeOrigin2 = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow2 = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin2;
var nodeTiming2 = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry2 = class {
  static {
    __name(this, "PerformanceEntry");
  }
  static {
    __name2(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow2();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow2() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark3 = class PerformanceMark22 extends PerformanceEntry2 {
  static {
    __name(this, "PerformanceMark2");
  }
  static {
    __name2(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure2 = class extends PerformanceEntry2 {
  static {
    __name(this, "PerformanceMeasure");
  }
  static {
    __name2(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming2 = class extends PerformanceEntry2 {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  static {
    __name2(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList2 = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  static {
    __name2(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance2 = class {
  static {
    __name(this, "Performance");
  }
  static {
    __name2(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin2;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming2;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming2("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin2) {
      return _performanceNow2();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark3(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure2(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver2 = class {
  static {
    __name(this, "PerformanceObserver");
  }
  static {
    __name2(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw /* @__PURE__ */ createNotImplementedError2("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw /* @__PURE__ */ createNotImplementedError2("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance2();
globalThis.performance = performance2;
globalThis.Performance = Performance2;
globalThis.PerformanceEntry = PerformanceEntry2;
globalThis.PerformanceMark = PerformanceMark3;
globalThis.PerformanceMeasure = PerformanceMeasure2;
globalThis.PerformanceObserver = PerformanceObserver2;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList2;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming2;
var noop_default = Object.assign(() => {
}, { __unenv__: true });
var _console = globalThis.console;
var _ignoreErrors = true;
var _stderr = new Writable();
var _stdout = new Writable();
var log = _console?.log ?? noop_default;
var info = _console?.info ?? log;
var trace = _console?.trace ?? info;
var debug = _console?.debug ?? log;
var table = _console?.table ?? log;
var error = _console?.error ?? log;
var warn = _console?.warn ?? error;
var createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented2("console.createTask");
var clear = _console?.clear ?? noop_default;
var count = _console?.count ?? noop_default;
var countReset = _console?.countReset ?? noop_default;
var dir = _console?.dir ?? noop_default;
var dirxml = _console?.dirxml ?? noop_default;
var group = _console?.group ?? noop_default;
var groupEnd = _console?.groupEnd ?? noop_default;
var groupCollapsed = _console?.groupCollapsed ?? noop_default;
var profile = _console?.profile ?? noop_default;
var profileEnd = _console?.profileEnd ?? noop_default;
var time = _console?.time ?? noop_default;
var timeEnd = _console?.timeEnd ?? noop_default;
var timeLog = _console?.timeLog ?? noop_default;
var timeStamp = _console?.timeStamp ?? noop_default;
var Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
var _times = /* @__PURE__ */ new Map();
var _stdoutErrorHandler = noop_default;
var _stderrErrorHandler = noop_default;
var workerdConsole = globalThis["console"];
var {
  assert: assert2,
  clear: clear2,
  // @ts-expect-error undocumented public API
  context,
  count: count2,
  countReset: countReset2,
  // @ts-expect-error undocumented public API
  createTask: createTask2,
  debug: debug2,
  dir: dir2,
  dirxml: dirxml2,
  error: error2,
  group: group2,
  groupCollapsed: groupCollapsed2,
  groupEnd: groupEnd2,
  info: info2,
  log: log2,
  profile: profile2,
  profileEnd: profileEnd2,
  table: table2,
  time: time2,
  timeEnd: timeEnd2,
  timeLog: timeLog2,
  timeStamp: timeStamp2,
  trace: trace2,
  warn: warn2
} = workerdConsole;
Object.assign(workerdConsole, {
  Console,
  _ignoreErrors,
  _stderr,
  _stderrErrorHandler,
  _stdout,
  _stdoutErrorHandler,
  _times
});
var console_default = workerdConsole;
globalThis.console = console_default;
var hrtime4 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name2(/* @__PURE__ */ __name(function hrtime22(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime2"), "hrtime"), { bigint: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function bigint2() {
  return BigInt(Date.now() * 1e6);
}, "bigint"), "bigint") });
var ReadStream2 = class {
  static {
    __name(this, "ReadStream");
  }
  static {
    __name2(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};
var WriteStream2 = class {
  static {
    __name(this, "WriteStream");
  }
  static {
    __name2(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir3, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x2, y2, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env22) {
    return 1;
  }
  hasColors(count3, env22) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};
var NODE_VERSION2 = "22.14.0";
var Process2 = class _Process extends EventEmitter2 {
  static {
    __name(this, "_Process");
  }
  static {
    __name2(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter2.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream2(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream2(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream2(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd22) {
    this.#cwd = cwd22;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION2}`;
  }
  get versions() {
    return { node: NODE_VERSION2 };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw /* @__PURE__ */ createNotImplementedError2("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw /* @__PURE__ */ createNotImplementedError2("process.getActiveResourcesInfo");
  }
  exit() {
    throw /* @__PURE__ */ createNotImplementedError2("process.exit");
  }
  reallyExit() {
    throw /* @__PURE__ */ createNotImplementedError2("process.reallyExit");
  }
  kill() {
    throw /* @__PURE__ */ createNotImplementedError2("process.kill");
  }
  abort() {
    throw /* @__PURE__ */ createNotImplementedError2("process.abort");
  }
  dlopen() {
    throw /* @__PURE__ */ createNotImplementedError2("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw /* @__PURE__ */ createNotImplementedError2("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw /* @__PURE__ */ createNotImplementedError2("process.loadEnvFile");
  }
  disconnect() {
    throw /* @__PURE__ */ createNotImplementedError2("process.disconnect");
  }
  cpuUsage() {
    throw /* @__PURE__ */ createNotImplementedError2("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw /* @__PURE__ */ createNotImplementedError2("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw /* @__PURE__ */ createNotImplementedError2("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw /* @__PURE__ */ createNotImplementedError2("process.initgroups");
  }
  openStdin() {
    throw /* @__PURE__ */ createNotImplementedError2("process.openStdin");
  }
  assert() {
    throw /* @__PURE__ */ createNotImplementedError2("process.assert");
  }
  binding() {
    throw /* @__PURE__ */ createNotImplementedError2("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented2("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented2("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented2("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented2("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented2("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented2("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name2(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};
var globalProcess2 = globalThis["process"];
var getBuiltinModule2 = globalProcess2.getBuiltinModule;
var workerdProcess2 = getBuiltinModule2("node:process");
var isWorkerdProcessV22 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
var unenvProcess2 = new Process2({
  env: globalProcess2.env,
  // `hrtime` is only available from workerd process v2
  hrtime: isWorkerdProcessV22 ? workerdProcess2.hrtime : hrtime4,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess2.nextTick
});
var { exit: exit2, features: features2, platform: platform2 } = workerdProcess2;
var {
  // Always implemented by workerd
  env: env2,
  // Only implemented in workerd v2
  hrtime: hrtime32,
  // Always implemented by workerd
  nextTick: nextTick2
} = unenvProcess2;
var {
  _channel: _channel2,
  _disconnect: _disconnect2,
  _events: _events2,
  _eventsCount: _eventsCount2,
  _handleQueue: _handleQueue2,
  _maxListeners: _maxListeners2,
  _pendingMessage: _pendingMessage2,
  _send: _send2,
  assert: assert22,
  disconnect: disconnect2,
  mainModule: mainModule2
} = unenvProcess2;
var {
  // @ts-expect-error `_debugEnd` is missing typings
  _debugEnd: _debugEnd2,
  // @ts-expect-error `_debugProcess` is missing typings
  _debugProcess: _debugProcess2,
  // @ts-expect-error `_exiting` is missing typings
  _exiting: _exiting2,
  // @ts-expect-error `_fatalException` is missing typings
  _fatalException: _fatalException2,
  // @ts-expect-error `_getActiveHandles` is missing typings
  _getActiveHandles: _getActiveHandles2,
  // @ts-expect-error `_getActiveRequests` is missing typings
  _getActiveRequests: _getActiveRequests2,
  // @ts-expect-error `_kill` is missing typings
  _kill: _kill2,
  // @ts-expect-error `_linkedBinding` is missing typings
  _linkedBinding: _linkedBinding2,
  // @ts-expect-error `_preload_modules` is missing typings
  _preload_modules: _preload_modules2,
  // @ts-expect-error `_rawDebug` is missing typings
  _rawDebug: _rawDebug2,
  // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
  _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
  // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
  _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
  // @ts-expect-error `_tickCallback` is missing typings
  _tickCallback: _tickCallback2,
  abort: abort2,
  addListener: addListener2,
  allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
  arch: arch2,
  argv: argv2,
  argv0: argv02,
  availableMemory: availableMemory2,
  // @ts-expect-error `binding` is missing typings
  binding: binding2,
  channel: channel2,
  chdir: chdir2,
  config: config2,
  connected: connected2,
  constrainedMemory: constrainedMemory2,
  cpuUsage: cpuUsage2,
  cwd: cwd2,
  debugPort: debugPort2,
  dlopen: dlopen2,
  // @ts-expect-error `domain` is missing typings
  domain: domain2,
  emit: emit2,
  emitWarning: emitWarning2,
  eventNames: eventNames2,
  execArgv: execArgv2,
  execPath: execPath2,
  exitCode: exitCode2,
  finalization: finalization2,
  getActiveResourcesInfo: getActiveResourcesInfo2,
  getegid: getegid2,
  geteuid: geteuid2,
  getgid: getgid2,
  getgroups: getgroups2,
  getMaxListeners: getMaxListeners2,
  getuid: getuid2,
  hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
  // @ts-expect-error `initgroups` is missing typings
  initgroups: initgroups2,
  kill: kill2,
  listenerCount: listenerCount2,
  listeners: listeners2,
  loadEnvFile: loadEnvFile2,
  memoryUsage: memoryUsage2,
  // @ts-expect-error `moduleLoadList` is missing typings
  moduleLoadList: moduleLoadList2,
  off: off2,
  on: on2,
  once: once2,
  // @ts-expect-error `openStdin` is missing typings
  openStdin: openStdin2,
  permission: permission2,
  pid: pid2,
  ppid: ppid2,
  prependListener: prependListener2,
  prependOnceListener: prependOnceListener2,
  rawListeners: rawListeners2,
  // @ts-expect-error `reallyExit` is missing typings
  reallyExit: reallyExit2,
  ref: ref2,
  release: release2,
  removeAllListeners: removeAllListeners2,
  removeListener: removeListener2,
  report: report2,
  resourceUsage: resourceUsage2,
  send: send2,
  setegid: setegid2,
  seteuid: seteuid2,
  setgid: setgid2,
  setgroups: setgroups2,
  setMaxListeners: setMaxListeners2,
  setSourceMapsEnabled: setSourceMapsEnabled2,
  setuid: setuid2,
  setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
  sourceMapsEnabled: sourceMapsEnabled2,
  stderr: stderr2,
  stdin: stdin2,
  stdout: stdout2,
  throwDeprecation: throwDeprecation2,
  title: title2,
  traceDeprecation: traceDeprecation2,
  umask: umask2,
  unref: unref2,
  uptime: uptime2,
  version: version2,
  versions: versions2
} = isWorkerdProcessV22 ? workerdProcess2 : unenvProcess2;
var _process2 = {
  abort: abort2,
  addListener: addListener2,
  allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
  hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
  setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
  loadEnvFile: loadEnvFile2,
  sourceMapsEnabled: sourceMapsEnabled2,
  arch: arch2,
  argv: argv2,
  argv0: argv02,
  chdir: chdir2,
  config: config2,
  connected: connected2,
  constrainedMemory: constrainedMemory2,
  availableMemory: availableMemory2,
  cpuUsage: cpuUsage2,
  cwd: cwd2,
  debugPort: debugPort2,
  dlopen: dlopen2,
  disconnect: disconnect2,
  emit: emit2,
  emitWarning: emitWarning2,
  env: env2,
  eventNames: eventNames2,
  execArgv: execArgv2,
  execPath: execPath2,
  exit: exit2,
  finalization: finalization2,
  features: features2,
  getBuiltinModule: getBuiltinModule2,
  getActiveResourcesInfo: getActiveResourcesInfo2,
  getMaxListeners: getMaxListeners2,
  hrtime: hrtime32,
  kill: kill2,
  listeners: listeners2,
  listenerCount: listenerCount2,
  memoryUsage: memoryUsage2,
  nextTick: nextTick2,
  on: on2,
  off: off2,
  once: once2,
  pid: pid2,
  platform: platform2,
  ppid: ppid2,
  prependListener: prependListener2,
  prependOnceListener: prependOnceListener2,
  rawListeners: rawListeners2,
  release: release2,
  removeAllListeners: removeAllListeners2,
  removeListener: removeListener2,
  report: report2,
  resourceUsage: resourceUsage2,
  setMaxListeners: setMaxListeners2,
  setSourceMapsEnabled: setSourceMapsEnabled2,
  stderr: stderr2,
  stdin: stdin2,
  stdout: stdout2,
  title: title2,
  throwDeprecation: throwDeprecation2,
  traceDeprecation: traceDeprecation2,
  umask: umask2,
  uptime: uptime2,
  version: version2,
  versions: versions2,
  // @ts-expect-error old API
  domain: domain2,
  initgroups: initgroups2,
  moduleLoadList: moduleLoadList2,
  reallyExit: reallyExit2,
  openStdin: openStdin2,
  assert: assert22,
  binding: binding2,
  send: send2,
  exitCode: exitCode2,
  channel: channel2,
  getegid: getegid2,
  geteuid: geteuid2,
  getgid: getgid2,
  getgroups: getgroups2,
  getuid: getuid2,
  setegid: setegid2,
  seteuid: seteuid2,
  setgid: setgid2,
  setgroups: setgroups2,
  setuid: setuid2,
  permission: permission2,
  mainModule: mainModule2,
  _events: _events2,
  _eventsCount: _eventsCount2,
  _exiting: _exiting2,
  _maxListeners: _maxListeners2,
  _debugEnd: _debugEnd2,
  _debugProcess: _debugProcess2,
  _fatalException: _fatalException2,
  _getActiveHandles: _getActiveHandles2,
  _getActiveRequests: _getActiveRequests2,
  _kill: _kill2,
  _preload_modules: _preload_modules2,
  _rawDebug: _rawDebug2,
  _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
  _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
  _tickCallback: _tickCallback2,
  _disconnect: _disconnect2,
  _handleQueue: _handleQueue2,
  _pendingMessage: _pendingMessage2,
  _channel: _channel2,
  _send: _send2,
  _linkedBinding: _linkedBinding2
};
var process_default2 = _process2;
globalThis.process = process_default2;
var be = Object.defineProperty;
var $t = /* @__PURE__ */ __name2((t) => {
  throw TypeError(t);
}, "$t");
var ye = /* @__PURE__ */ __name2((t, e, s) => e in t ? be(t, e, { enumerable: true, configurable: true, writable: true, value: s }) : t[e] = s, "ye");
var p = /* @__PURE__ */ __name2((t, e, s) => ye(t, typeof e != "symbol" ? e + "" : e, s), "p");
var Nt = /* @__PURE__ */ __name2((t, e, s) => e.has(t) || $t("Cannot " + s), "Nt");
var n = /* @__PURE__ */ __name2((t, e, s) => (Nt(t, e, "read from private field"), s ? s.call(t) : e.get(t)), "n");
var x = /* @__PURE__ */ __name2((t, e, s) => e.has(t) ? $t("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), "x");
var u = /* @__PURE__ */ __name2((t, e, s, r) => (Nt(t, e, "write to private field"), r ? r.call(t, s) : e.set(t, s), s), "u");
var g = /* @__PURE__ */ __name2((t, e, s) => (Nt(t, e, "access private method"), s), "g");
var Lt = /* @__PURE__ */ __name2((t, e, s, r) => ({ set _(i) {
  u(t, e, i, s);
}, get _() {
  return n(t, e, r);
} }), "Lt");
var Ut = /* @__PURE__ */ __name2((t, e, s) => (r, i) => {
  let a = -1;
  return o(0);
  async function o(d) {
    if (d <= a) throw new Error("next() called multiple times");
    a = d;
    let c, l = false, h;
    if (t[d] ? (h = t[d][0][0], r.req.routeIndex = d) : h = d === t.length && i || void 0, h) try {
      c = await h(r, () => o(d + 1));
    } catch (f) {
      if (f instanceof Error && e) r.error = f, c = await e(f, r), l = true;
      else throw f;
    }
    else r.finalized === false && s && (c = await s(r));
    return c && (r.finalized === false || l) && (r.res = c), r;
  }
  __name(o, "o");
  __name2(o, "o");
}, "Ut");
var we = Symbol();
var Ee = /* @__PURE__ */ __name2(async (t, e = /* @__PURE__ */ Object.create(null)) => {
  const { all: s = false, dot: r = false } = e, a = (t instanceof re ? t.raw.headers : t.headers).get("Content-Type");
  return a != null && a.startsWith("multipart/form-data") || a != null && a.startsWith("application/x-www-form-urlencoded") ? Ce(t, { all: s, dot: r }) : {};
}, "Ee");
async function Ce(t, e) {
  const s = await t.formData();
  return s ? Ae(s, e) : {};
}
__name(Ce, "Ce");
__name2(Ce, "Ce");
function Ae(t, e) {
  const s = /* @__PURE__ */ Object.create(null);
  return t.forEach((r, i) => {
    e.all || i.endsWith("[]") ? je(s, i, r) : s[i] = r;
  }), e.dot && Object.entries(s).forEach(([r, i]) => {
    r.includes(".") && (Re(s, r, i), delete s[r]);
  }), s;
}
__name(Ae, "Ae");
__name2(Ae, "Ae");
var je = /* @__PURE__ */ __name2((t, e, s) => {
  t[e] !== void 0 ? Array.isArray(t[e]) ? t[e].push(s) : t[e] = [t[e], s] : e.endsWith("[]") ? t[e] = [s] : t[e] = s;
}, "je");
var Re = /* @__PURE__ */ __name2((t, e, s) => {
  let r = t;
  const i = e.split(".");
  i.forEach((a, o) => {
    o === i.length - 1 ? r[a] = s : ((!r[a] || typeof r[a] != "object" || Array.isArray(r[a]) || r[a] instanceof File) && (r[a] = /* @__PURE__ */ Object.create(null)), r = r[a]);
  });
}, "Re");
var Qt = /* @__PURE__ */ __name2((t) => {
  const e = t.split("/");
  return e[0] === "" && e.shift(), e;
}, "Qt");
var Se = /* @__PURE__ */ __name2((t) => {
  const { groups: e, path: s } = Te(t), r = Qt(s);
  return Pe(r, e);
}, "Se");
var Te = /* @__PURE__ */ __name2((t) => {
  const e = [];
  return t = t.replace(/\{[^}]+\}/g, (s, r) => {
    const i = `@${r}`;
    return e.push([i, s]), i;
  }), { groups: e, path: t };
}, "Te");
var Pe = /* @__PURE__ */ __name2((t, e) => {
  for (let s = e.length - 1; s >= 0; s--) {
    const [r] = e[s];
    for (let i = t.length - 1; i >= 0; i--) if (t[i].includes(r)) {
      t[i] = t[i].replace(r, e[s][1]);
      break;
    }
  }
  return t;
}, "Pe");
var jt = {};
var ke = /* @__PURE__ */ __name2((t, e) => {
  if (t === "*") return "*";
  const s = t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (s) {
    const r = `${t}#${e}`;
    return jt[r] || (s[2] ? jt[r] = e && e[0] !== ":" && e[0] !== "*" ? [r, s[1], new RegExp(`^${s[2]}(?=/${e})`)] : [t, s[1], new RegExp(`^${s[2]}$`)] : jt[r] = [t, s[1], true]), jt[r];
  }
  return null;
}, "ke");
var _t = /* @__PURE__ */ __name2((t, e) => {
  try {
    return e(t);
  } catch {
    return t.replace(/(?:%[0-9A-Fa-f]{2})+/g, (s) => {
      try {
        return e(s);
      } catch {
        return s;
      }
    });
  }
}, "_t");
var Oe = /* @__PURE__ */ __name2((t) => _t(t, decodeURI), "Oe");
var Zt = /* @__PURE__ */ __name2((t) => {
  const e = t.url, s = e.indexOf("/", e.indexOf(":") + 4);
  let r = s;
  for (; r < e.length; r++) {
    const i = e.charCodeAt(r);
    if (i === 37) {
      const a = e.indexOf("?", r), o = e.slice(s, a === -1 ? void 0 : a);
      return Oe(o.includes("%25") ? o.replace(/%25/g, "%2525") : o);
    } else if (i === 63) break;
  }
  return e.slice(s, r);
}, "Zt");
var Me = /* @__PURE__ */ __name2((t) => {
  const e = Zt(t);
  return e.length > 1 && e.at(-1) === "/" ? e.slice(0, -1) : e;
}, "Me");
var rt = /* @__PURE__ */ __name2((t, e, ...s) => (s.length && (e = rt(e, ...s)), `${(t == null ? void 0 : t[0]) === "/" ? "" : "/"}${t}${e === "/" ? "" : `${(t == null ? void 0 : t.at(-1)) === "/" ? "" : "/"}${(e == null ? void 0 : e[0]) === "/" ? e.slice(1) : e}`}`), "rt");
var te = /* @__PURE__ */ __name2((t) => {
  if (t.charCodeAt(t.length - 1) !== 63 || !t.includes(":")) return null;
  const e = t.split("/"), s = [];
  let r = "";
  return e.forEach((i) => {
    if (i !== "" && !/\:/.test(i)) r += "/" + i;
    else if (/\:/.test(i)) if (/\?/.test(i)) {
      s.length === 0 && r === "" ? s.push("/") : s.push(r);
      const a = i.replace("?", "");
      r += "/" + a, s.push(r);
    } else r += "/" + i;
  }), s.filter((i, a, o) => o.indexOf(i) === a);
}, "te");
var It = /* @__PURE__ */ __name2((t) => /[%+]/.test(t) ? (t.indexOf("+") !== -1 && (t = t.replace(/\+/g, " ")), t.indexOf("%") !== -1 ? _t(t, se) : t) : t, "It");
var ee = /* @__PURE__ */ __name2((t, e, s) => {
  let r;
  if (!s && e && !/[%+]/.test(e)) {
    let o = t.indexOf("?", 8);
    if (o === -1) return;
    for (t.startsWith(e, o + 1) || (o = t.indexOf(`&${e}`, o + 1)); o !== -1; ) {
      const d = t.charCodeAt(o + e.length + 1);
      if (d === 61) {
        const c = o + e.length + 2, l = t.indexOf("&", c);
        return It(t.slice(c, l === -1 ? void 0 : l));
      } else if (d == 38 || isNaN(d)) return "";
      o = t.indexOf(`&${e}`, o + 1);
    }
    if (r = /[%+]/.test(t), !r) return;
  }
  const i = {};
  r ?? (r = /[%+]/.test(t));
  let a = t.indexOf("?", 8);
  for (; a !== -1; ) {
    const o = t.indexOf("&", a + 1);
    let d = t.indexOf("=", a);
    d > o && o !== -1 && (d = -1);
    let c = t.slice(a + 1, d === -1 ? o === -1 ? void 0 : o : d);
    if (r && (c = It(c)), a = o, c === "") continue;
    let l;
    d === -1 ? l = "" : (l = t.slice(d + 1, o === -1 ? void 0 : o), r && (l = It(l))), s ? (i[c] && Array.isArray(i[c]) || (i[c] = []), i[c].push(l)) : i[c] ?? (i[c] = l);
  }
  return e ? i[e] : i;
}, "ee");
var Ne = ee;
var Ie = /* @__PURE__ */ __name2((t, e) => ee(t, e, true), "Ie");
var se = decodeURIComponent;
var Bt = /* @__PURE__ */ __name2((t) => _t(t, se), "Bt");
var nt;
var S;
var F;
var ie;
var ae;
var Ht;
var U;
var Vt;
var re = (Vt = class {
  static {
    __name(this, "Vt");
  }
  static {
    __name2(this, "Vt");
  }
  constructor(t, e = "/", s = [[]]) {
    x(this, F);
    p(this, "raw");
    x(this, nt);
    x(this, S);
    p(this, "routeIndex", 0);
    p(this, "path");
    p(this, "bodyCache", {});
    x(this, U, (t2) => {
      const { bodyCache: e2, raw: s2 } = this, r = e2[t2];
      if (r) return r;
      const i = Object.keys(e2)[0];
      return i ? e2[i].then((a) => (i === "json" && (a = JSON.stringify(a)), new Response(a)[t2]())) : e2[t2] = s2[t2]();
    });
    this.raw = t, this.path = e, u(this, S, s), u(this, nt, {});
  }
  param(t) {
    return t ? g(this, F, ie).call(this, t) : g(this, F, ae).call(this);
  }
  query(t) {
    return Ne(this.url, t);
  }
  queries(t) {
    return Ie(this.url, t);
  }
  header(t) {
    if (t) return this.raw.headers.get(t) ?? void 0;
    const e = {};
    return this.raw.headers.forEach((s, r) => {
      e[r] = s;
    }), e;
  }
  async parseBody(t) {
    var e;
    return (e = this.bodyCache).parsedBody ?? (e.parsedBody = await Ee(this, t));
  }
  json() {
    return n(this, U).call(this, "text").then((t) => JSON.parse(t));
  }
  text() {
    return n(this, U).call(this, "text");
  }
  arrayBuffer() {
    return n(this, U).call(this, "arrayBuffer");
  }
  blob() {
    return n(this, U).call(this, "blob");
  }
  formData() {
    return n(this, U).call(this, "formData");
  }
  addValidatedData(t, e) {
    n(this, nt)[t] = e;
  }
  valid(t) {
    return n(this, nt)[t];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get [we]() {
    return n(this, S);
  }
  get matchedRoutes() {
    return n(this, S)[0].map(([[, t]]) => t);
  }
  get routePath() {
    return n(this, S)[0].map(([[, t]]) => t)[this.routeIndex].path;
  }
}, nt = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakSet(), ie = /* @__PURE__ */ __name2(function(t) {
  const e = n(this, S)[0][this.routeIndex][1][t], s = g(this, F, Ht).call(this, e);
  return s && /\%/.test(s) ? Bt(s) : s;
}, "ie"), ae = /* @__PURE__ */ __name2(function() {
  const t = {}, e = Object.keys(n(this, S)[0][this.routeIndex][1]);
  for (const s of e) {
    const r = g(this, F, Ht).call(this, n(this, S)[0][this.routeIndex][1][s]);
    r !== void 0 && (t[s] = /\%/.test(r) ? Bt(r) : r);
  }
  return t;
}, "ae"), Ht = /* @__PURE__ */ __name2(function(t) {
  return n(this, S)[1] ? n(this, S)[1][t] : t;
}, "Ht"), U = /* @__PURE__ */ new WeakMap(), Vt);
var De = { Stringify: 1 };
var ne = /* @__PURE__ */ __name2(async (t, e, s, r, i) => {
  typeof t == "object" && !(t instanceof String) && (t instanceof Promise || (t = t.toString()), t instanceof Promise && (t = await t));
  const a = t.callbacks;
  return a != null && a.length ? (i ? i[0] += t : i = [t], Promise.all(a.map((d) => d({ phase: e, buffer: i, context: r }))).then((d) => Promise.all(d.filter(Boolean).map((c) => ne(c, e, false, r, i))).then(() => i[0]))) : Promise.resolve(t);
}, "ne");
var He = "text/plain; charset=UTF-8";
var Dt = /* @__PURE__ */ __name2((t, e) => ({ "Content-Type": t, ...e }), "Dt");
var gt;
var vt;
var I;
var ot;
var D;
var R;
var bt;
var lt;
var ct;
var K;
var yt;
var wt;
var B;
var it;
var Wt;
var _e = (Wt = class {
  static {
    __name(this, "Wt");
  }
  static {
    __name2(this, "Wt");
  }
  constructor(t, e) {
    x(this, B);
    x(this, gt);
    x(this, vt);
    p(this, "env", {});
    x(this, I);
    p(this, "finalized", false);
    p(this, "error");
    x(this, ot);
    x(this, D);
    x(this, R);
    x(this, bt);
    x(this, lt);
    x(this, ct);
    x(this, K);
    x(this, yt);
    x(this, wt);
    p(this, "render", (...t2) => (n(this, lt) ?? u(this, lt, (e2) => this.html(e2)), n(this, lt).call(this, ...t2)));
    p(this, "setLayout", (t2) => u(this, bt, t2));
    p(this, "getLayout", () => n(this, bt));
    p(this, "setRenderer", (t2) => {
      u(this, lt, t2);
    });
    p(this, "header", (t2, e2, s) => {
      this.finalized && u(this, R, new Response(n(this, R).body, n(this, R)));
      const r = n(this, R) ? n(this, R).headers : n(this, K) ?? u(this, K, new Headers());
      e2 === void 0 ? r.delete(t2) : s != null && s.append ? r.append(t2, e2) : r.set(t2, e2);
    });
    p(this, "status", (t2) => {
      u(this, ot, t2);
    });
    p(this, "set", (t2, e2) => {
      n(this, I) ?? u(this, I, /* @__PURE__ */ new Map()), n(this, I).set(t2, e2);
    });
    p(this, "get", (t2) => n(this, I) ? n(this, I).get(t2) : void 0);
    p(this, "newResponse", (...t2) => g(this, B, it).call(this, ...t2));
    p(this, "body", (t2, e2, s) => g(this, B, it).call(this, t2, e2, s));
    p(this, "text", (t2, e2, s) => !n(this, K) && !n(this, ot) && !e2 && !s && !this.finalized ? new Response(t2) : g(this, B, it).call(this, t2, e2, Dt(He, s)));
    p(this, "json", (t2, e2, s) => g(this, B, it).call(this, JSON.stringify(t2), e2, Dt("application/json", s)));
    p(this, "html", (t2, e2, s) => {
      const r = /* @__PURE__ */ __name2((i) => g(this, B, it).call(this, i, e2, Dt("text/html; charset=UTF-8", s)), "r");
      return typeof t2 == "object" ? ne(t2, De.Stringify, false, {}).then(r) : r(t2);
    });
    p(this, "redirect", (t2, e2) => {
      const s = String(t2);
      return this.header("Location", /[^\x00-\xFF]/.test(s) ? encodeURI(s) : s), this.newResponse(null, e2 ?? 302);
    });
    p(this, "notFound", () => (n(this, ct) ?? u(this, ct, () => new Response()), n(this, ct).call(this, this)));
    u(this, gt, t), e && (u(this, D, e.executionCtx), this.env = e.env, u(this, ct, e.notFoundHandler), u(this, wt, e.path), u(this, yt, e.matchResult));
  }
  get req() {
    return n(this, vt) ?? u(this, vt, new re(n(this, gt), n(this, wt), n(this, yt))), n(this, vt);
  }
  get event() {
    if (n(this, D) && "respondWith" in n(this, D)) return n(this, D);
    throw Error("This context has no FetchEvent");
  }
  get executionCtx() {
    if (n(this, D)) return n(this, D);
    throw Error("This context has no ExecutionContext");
  }
  get res() {
    return n(this, R) || u(this, R, new Response(null, { headers: n(this, K) ?? u(this, K, new Headers()) }));
  }
  set res(t) {
    if (n(this, R) && t) {
      t = new Response(t.body, t);
      for (const [e, s] of n(this, R).headers.entries()) if (e !== "content-type") if (e === "set-cookie") {
        const r = n(this, R).headers.getSetCookie();
        t.headers.delete("set-cookie");
        for (const i of r) t.headers.append("set-cookie", i);
      } else t.headers.set(e, s);
    }
    u(this, R, t), this.finalized = true;
  }
  get var() {
    return n(this, I) ? Object.fromEntries(n(this, I)) : {};
  }
}, gt = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakSet(), it = /* @__PURE__ */ __name2(function(t, e, s) {
  const r = n(this, R) ? new Headers(n(this, R).headers) : n(this, K) ?? new Headers();
  if (typeof e == "object" && "headers" in e) {
    const a = e.headers instanceof Headers ? e.headers : new Headers(e.headers);
    for (const [o, d] of a) o.toLowerCase() === "set-cookie" ? r.append(o, d) : r.set(o, d);
  }
  if (s) for (const [a, o] of Object.entries(s)) if (typeof o == "string") r.set(a, o);
  else {
    r.delete(a);
    for (const d of o) r.append(a, d);
  }
  const i = typeof e == "number" ? e : (e == null ? void 0 : e.status) ?? n(this, ot);
  return new Response(t, { status: i, headers: r });
}, "it"), Wt);
var y = "ALL";
var Fe = "all";
var $e = ["get", "post", "put", "delete", "options", "patch"];
var oe = "Can not add a route since the matcher is already built.";
var le = class extends Error {
  static {
    __name(this, "le");
  }
  static {
    __name2(this, "le");
  }
};
var Le = "__COMPOSED_HANDLER";
var Ue = /* @__PURE__ */ __name2((t) => t.text("404 Not Found", 404), "Ue");
var Gt = /* @__PURE__ */ __name2((t, e) => {
  if ("getResponse" in t) {
    const s = t.getResponse();
    return e.newResponse(s.body, s);
  }
  return console.error(t), e.text("Internal Server Error", 500);
}, "Gt");
var T;
var w;
var ce;
var P;
var W;
var Rt;
var St;
var dt;
var Be = (dt = class {
  static {
    __name(this, "dt");
  }
  static {
    __name2(this, "dt");
  }
  constructor(e = {}) {
    x(this, w);
    p(this, "get");
    p(this, "post");
    p(this, "put");
    p(this, "delete");
    p(this, "options");
    p(this, "patch");
    p(this, "all");
    p(this, "on");
    p(this, "use");
    p(this, "router");
    p(this, "getPath");
    p(this, "_basePath", "/");
    x(this, T, "/");
    p(this, "routes", []);
    x(this, P, Ue);
    p(this, "errorHandler", Gt);
    p(this, "onError", (e2) => (this.errorHandler = e2, this));
    p(this, "notFound", (e2) => (u(this, P, e2), this));
    p(this, "fetch", (e2, ...s) => g(this, w, St).call(this, e2, s[1], s[0], e2.method));
    p(this, "request", (e2, s, r2, i2) => e2 instanceof Request ? this.fetch(s ? new Request(e2, s) : e2, r2, i2) : (e2 = e2.toString(), this.fetch(new Request(/^https?:\/\//.test(e2) ? e2 : `http://localhost${rt("/", e2)}`, s), r2, i2)));
    p(this, "fire", () => {
      addEventListener("fetch", (e2) => {
        e2.respondWith(g(this, w, St).call(this, e2.request, e2, void 0, e2.request.method));
      });
    });
    [...$e, Fe].forEach((a) => {
      this[a] = (o, ...d) => (typeof o == "string" ? u(this, T, o) : g(this, w, W).call(this, a, n(this, T), o), d.forEach((c) => {
        g(this, w, W).call(this, a, n(this, T), c);
      }), this);
    }), this.on = (a, o, ...d) => {
      for (const c of [o].flat()) {
        u(this, T, c);
        for (const l of [a].flat()) d.map((h) => {
          g(this, w, W).call(this, l.toUpperCase(), n(this, T), h);
        });
      }
      return this;
    }, this.use = (a, ...o) => (typeof a == "string" ? u(this, T, a) : (u(this, T, "*"), o.unshift(a)), o.forEach((d) => {
      g(this, w, W).call(this, y, n(this, T), d);
    }), this);
    const { strict: r, ...i } = e;
    Object.assign(this, i), this.getPath = r ?? true ? e.getPath ?? Zt : Me;
  }
  route(e, s) {
    const r = this.basePath(e);
    return s.routes.map((i) => {
      var o;
      let a;
      s.errorHandler === Gt ? a = i.handler : (a = /* @__PURE__ */ __name2(async (d, c) => (await Ut([], s.errorHandler)(d, () => i.handler(d, c))).res, "a"), a[Le] = i.handler), g(o = r, w, W).call(o, i.method, i.path, a);
    }), this;
  }
  basePath(e) {
    const s = g(this, w, ce).call(this);
    return s._basePath = rt(this._basePath, e), s;
  }
  mount(e, s, r) {
    let i, a;
    r && (typeof r == "function" ? a = r : (a = r.optionHandler, r.replaceRequest === false ? i = /* @__PURE__ */ __name2((c) => c, "i") : i = r.replaceRequest));
    const o = a ? (c) => {
      const l = a(c);
      return Array.isArray(l) ? l : [l];
    } : (c) => {
      let l;
      try {
        l = c.executionCtx;
      } catch {
      }
      return [c.env, l];
    };
    i || (i = (() => {
      const c = rt(this._basePath, e), l = c === "/" ? 0 : c.length;
      return (h) => {
        const f = new URL(h.url);
        return f.pathname = f.pathname.slice(l) || "/", new Request(f, h);
      };
    })());
    const d = /* @__PURE__ */ __name2(async (c, l) => {
      const h = await s(i(c.req.raw), ...o(c));
      if (h) return h;
      await l();
    }, "d");
    return g(this, w, W).call(this, y, rt(e, "*"), d), this;
  }
}, T = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakSet(), ce = /* @__PURE__ */ __name2(function() {
  const e = new dt({ router: this.router, getPath: this.getPath });
  return e.errorHandler = this.errorHandler, u(e, P, n(this, P)), e.routes = this.routes, e;
}, "ce"), P = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ __name2(function(e, s, r) {
  e = e.toUpperCase(), s = rt(this._basePath, s);
  const i = { basePath: this._basePath, path: s, method: e, handler: r };
  this.router.add(e, s, [r, i]), this.routes.push(i);
}, "W"), Rt = /* @__PURE__ */ __name2(function(e, s) {
  if (e instanceof Error) return this.errorHandler(e, s);
  throw e;
}, "Rt"), St = /* @__PURE__ */ __name2(function(e, s, r, i) {
  if (i === "HEAD") return (async () => new Response(null, await g(this, w, St).call(this, e, s, r, "GET")))();
  const a = this.getPath(e, { env: r }), o = this.router.match(i, a), d = new _e(e, { path: a, matchResult: o, env: r, executionCtx: s, notFoundHandler: n(this, P) });
  if (o[0].length === 1) {
    let l;
    try {
      l = o[0][0][0][0](d, async () => {
        d.res = await n(this, P).call(this, d);
      });
    } catch (h) {
      return g(this, w, Rt).call(this, h, d);
    }
    return l instanceof Promise ? l.then((h) => h || (d.finalized ? d.res : n(this, P).call(this, d))).catch((h) => g(this, w, Rt).call(this, h, d)) : l ?? n(this, P).call(this, d);
  }
  const c = Ut(o[0], this.errorHandler, n(this, P));
  return (async () => {
    try {
      const l = await c(d);
      if (!l.finalized) throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
      return l.res;
    } catch (l) {
      return g(this, w, Rt).call(this, l, d);
    }
  })();
}, "St"), dt);
var de = [];
function Ge(t, e) {
  const s = this.buildAllMatchers(), r = /* @__PURE__ */ __name2(((i, a) => {
    const o = s[i] || s[y], d = o[2][a];
    if (d) return d;
    const c = a.match(o[0]);
    if (!c) return [[], de];
    const l = c.indexOf("", 1);
    return [o[1][l], c];
  }), "r");
  return this.match = r, r(t, e);
}
__name(Ge, "Ge");
__name2(Ge, "Ge");
var Pt = "[^/]+";
var xt = ".*";
var mt = "(?:|/.*)";
var at = Symbol();
var qe = new Set(".\\+*[^]$()");
function ze(t, e) {
  return t.length === 1 ? e.length === 1 ? t < e ? -1 : 1 : -1 : e.length === 1 || t === xt || t === mt ? 1 : e === xt || e === mt ? -1 : t === Pt ? 1 : e === Pt ? -1 : t.length === e.length ? t < e ? -1 : 1 : e.length - t.length;
}
__name(ze, "ze");
__name2(ze, "ze");
var Y;
var X;
var k;
var tt;
var Ve = (tt = class {
  static {
    __name(this, "tt");
  }
  static {
    __name2(this, "tt");
  }
  constructor() {
    x(this, Y);
    x(this, X);
    x(this, k, /* @__PURE__ */ Object.create(null));
  }
  insert(e, s, r, i, a) {
    if (e.length === 0) {
      if (n(this, Y) !== void 0) throw at;
      if (a) return;
      u(this, Y, s);
      return;
    }
    const [o, ...d] = e, c = o === "*" ? d.length === 0 ? ["", "", xt] : ["", "", Pt] : o === "/*" ? ["", "", mt] : o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let l;
    if (c) {
      const h = c[1];
      let f = c[2] || Pt;
      if (h && c[2] && (f === ".*" || (f = f.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:"), /\((?!\?:)/.test(f)))) throw at;
      if (l = n(this, k)[f], !l) {
        if (Object.keys(n(this, k)).some((m) => m !== xt && m !== mt)) throw at;
        if (a) return;
        l = n(this, k)[f] = new tt(), h !== "" && u(l, X, i.varIndex++);
      }
      !a && h !== "" && r.push([h, n(l, X)]);
    } else if (l = n(this, k)[o], !l) {
      if (Object.keys(n(this, k)).some((h) => h.length > 1 && h !== xt && h !== mt)) throw at;
      if (a) return;
      l = n(this, k)[o] = new tt();
    }
    l.insert(d, s, r, i, a);
  }
  buildRegExpStr() {
    const s = Object.keys(n(this, k)).sort(ze).map((r) => {
      const i = n(this, k)[r];
      return (typeof n(i, X) == "number" ? `(${r})@${n(i, X)}` : qe.has(r) ? `\\${r}` : r) + i.buildRegExpStr();
    });
    return typeof n(this, Y) == "number" && s.unshift(`#${n(this, Y)}`), s.length === 0 ? "" : s.length === 1 ? s[0] : "(?:" + s.join("|") + ")";
  }
}, Y = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), tt);
var kt;
var Et;
var Jt;
var We = (Jt = class {
  static {
    __name(this, "Jt");
  }
  static {
    __name2(this, "Jt");
  }
  constructor() {
    x(this, kt, { varIndex: 0 });
    x(this, Et, new Ve());
  }
  insert(t, e, s) {
    const r = [], i = [];
    for (let o = 0; ; ) {
      let d = false;
      if (t = t.replace(/\{[^}]+\}/g, (c) => {
        const l = `@\\${o}`;
        return i[o] = [l, c], o++, d = true, l;
      }), !d) break;
    }
    const a = t.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let o = i.length - 1; o >= 0; o--) {
      const [d] = i[o];
      for (let c = a.length - 1; c >= 0; c--) if (a[c].indexOf(d) !== -1) {
        a[c] = a[c].replace(d, i[o][1]);
        break;
      }
    }
    return n(this, Et).insert(a, e, r, n(this, kt), s), r;
  }
  buildRegExp() {
    let t = n(this, Et).buildRegExpStr();
    if (t === "") return [/^$/, [], []];
    let e = 0;
    const s = [], r = [];
    return t = t.replace(/#(\d+)|@(\d+)|\.\*\$/g, (i, a, o) => a !== void 0 ? (s[++e] = Number(a), "$()") : (o !== void 0 && (r[Number(o)] = ++e), "")), [new RegExp(`^${t}`), s, r];
  }
}, kt = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Jt);
var Je = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var Tt = /* @__PURE__ */ Object.create(null);
function he(t) {
  return Tt[t] ?? (Tt[t] = new RegExp(t === "*" ? "" : `^${t.replace(/\/\*$|([.\\+*[^\]$()])/g, (e, s) => s ? `\\${s}` : "(?:|/.*)")}$`));
}
__name(he, "he");
__name2(he, "he");
function Ke() {
  Tt = /* @__PURE__ */ Object.create(null);
}
__name(Ke, "Ke");
__name2(Ke, "Ke");
function Ye(t) {
  var l;
  const e = new We(), s = [];
  if (t.length === 0) return Je;
  const r = t.map((h) => [!/\*|\/:/.test(h[0]), ...h]).sort(([h, f], [m, b]) => h ? 1 : m ? -1 : f.length - b.length), i = /* @__PURE__ */ Object.create(null);
  for (let h = 0, f = -1, m = r.length; h < m; h++) {
    const [b, E, O] = r[h];
    b ? i[E] = [O.map(([C]) => [C, /* @__PURE__ */ Object.create(null)]), de] : f++;
    let v;
    try {
      v = e.insert(E, f, b);
    } catch (C) {
      throw C === at ? new le(E) : C;
    }
    b || (s[f] = O.map(([C, $]) => {
      const Ct = /* @__PURE__ */ Object.create(null);
      for ($ -= 1; $ >= 0; $--) {
        const [At, M] = v[$];
        Ct[At] = M;
      }
      return [C, Ct];
    }));
  }
  const [a, o, d] = e.buildRegExp();
  for (let h = 0, f = s.length; h < f; h++) for (let m = 0, b = s[h].length; m < b; m++) {
    const E = (l = s[h][m]) == null ? void 0 : l[1];
    if (!E) continue;
    const O = Object.keys(E);
    for (let v = 0, C = O.length; v < C; v++) E[O[v]] = d[E[O[v]]];
  }
  const c = [];
  for (const h in o) c[h] = s[o[h]];
  return [a, c, i];
}
__name(Ye, "Ye");
__name2(Ye, "Ye");
function st(t, e) {
  if (t) {
    for (const s of Object.keys(t).sort((r, i) => i.length - r.length)) if (he(s).test(e)) return [...t[s]];
  }
}
__name(st, "st");
__name2(st, "st");
var G;
var q;
var Ot;
var fe;
var Kt;
var Xe = (Kt = class {
  static {
    __name(this, "Kt");
  }
  static {
    __name2(this, "Kt");
  }
  constructor() {
    x(this, Ot);
    p(this, "name", "RegExpRouter");
    x(this, G);
    x(this, q);
    p(this, "match", Ge);
    u(this, G, { [y]: /* @__PURE__ */ Object.create(null) }), u(this, q, { [y]: /* @__PURE__ */ Object.create(null) });
  }
  add(t, e, s) {
    var d;
    const r = n(this, G), i = n(this, q);
    if (!r || !i) throw new Error(oe);
    r[t] || [r, i].forEach((c) => {
      c[t] = /* @__PURE__ */ Object.create(null), Object.keys(c[y]).forEach((l) => {
        c[t][l] = [...c[y][l]];
      });
    }), e === "/*" && (e = "*");
    const a = (e.match(/\/:/g) || []).length;
    if (/\*$/.test(e)) {
      const c = he(e);
      t === y ? Object.keys(r).forEach((l) => {
        var h;
        (h = r[l])[e] || (h[e] = st(r[l], e) || st(r[y], e) || []);
      }) : (d = r[t])[e] || (d[e] = st(r[t], e) || st(r[y], e) || []), Object.keys(r).forEach((l) => {
        (t === y || t === l) && Object.keys(r[l]).forEach((h) => {
          c.test(h) && r[l][h].push([s, a]);
        });
      }), Object.keys(i).forEach((l) => {
        (t === y || t === l) && Object.keys(i[l]).forEach((h) => c.test(h) && i[l][h].push([s, a]));
      });
      return;
    }
    const o = te(e) || [e];
    for (let c = 0, l = o.length; c < l; c++) {
      const h = o[c];
      Object.keys(i).forEach((f) => {
        var m;
        (t === y || t === f) && ((m = i[f])[h] || (m[h] = [...st(r[f], h) || st(r[y], h) || []]), i[f][h].push([s, a - l + c + 1]));
      });
    }
  }
  buildAllMatchers() {
    const t = /* @__PURE__ */ Object.create(null);
    return Object.keys(n(this, q)).concat(Object.keys(n(this, G))).forEach((e) => {
      t[e] || (t[e] = g(this, Ot, fe).call(this, e));
    }), u(this, G, u(this, q, void 0)), Ke(), t;
  }
}, G = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakSet(), fe = /* @__PURE__ */ __name2(function(t) {
  const e = [];
  let s = t === y;
  return [n(this, G), n(this, q)].forEach((r) => {
    const i = r[t] ? Object.keys(r[t]).map((a) => [a, r[t][a]]) : [];
    i.length !== 0 ? (s || (s = true), e.push(...i)) : t !== y && e.push(...Object.keys(r[y]).map((a) => [a, r[y][a]]));
  }), s ? Ye(e) : null;
}, "fe"), Kt);
var z;
var H;
var Yt;
var Qe = (Yt = class {
  static {
    __name(this, "Yt");
  }
  static {
    __name2(this, "Yt");
  }
  constructor(t) {
    p(this, "name", "SmartRouter");
    x(this, z, []);
    x(this, H, []);
    u(this, z, t.routers);
  }
  add(t, e, s) {
    if (!n(this, H)) throw new Error(oe);
    n(this, H).push([t, e, s]);
  }
  match(t, e) {
    if (!n(this, H)) throw new Error("Fatal error");
    const s = n(this, z), r = n(this, H), i = s.length;
    let a = 0, o;
    for (; a < i; a++) {
      const d = s[a];
      try {
        for (let c = 0, l = r.length; c < l; c++) d.add(...r[c]);
        o = d.match(t, e);
      } catch (c) {
        if (c instanceof le) continue;
        throw c;
      }
      this.match = d.match.bind(d), u(this, z, [d]), u(this, H, void 0);
      break;
    }
    if (a === i) throw new Error("Fatal error");
    return this.name = `SmartRouter + ${this.activeRouter.name}`, o;
  }
  get activeRouter() {
    if (n(this, H) || n(this, z).length !== 1) throw new Error("No active router has been determined yet.");
    return n(this, z)[0];
  }
}, z = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), Yt);
var pt = /* @__PURE__ */ Object.create(null);
var V;
var j;
var Q;
var ht;
var A;
var _;
var J;
var ft;
var Ze = (ft = class {
  static {
    __name(this, "ft");
  }
  static {
    __name2(this, "ft");
  }
  constructor(e, s, r) {
    x(this, _);
    x(this, V);
    x(this, j);
    x(this, Q);
    x(this, ht, 0);
    x(this, A, pt);
    if (u(this, j, r || /* @__PURE__ */ Object.create(null)), u(this, V, []), e && s) {
      const i = /* @__PURE__ */ Object.create(null);
      i[e] = { handler: s, possibleKeys: [], score: 0 }, u(this, V, [i]);
    }
    u(this, Q, []);
  }
  insert(e, s, r) {
    u(this, ht, ++Lt(this, ht)._);
    let i = this;
    const a = Se(s), o = [];
    for (let d = 0, c = a.length; d < c; d++) {
      const l = a[d], h = a[d + 1], f = ke(l, h), m = Array.isArray(f) ? f[0] : l;
      if (m in n(i, j)) {
        i = n(i, j)[m], f && o.push(f[1]);
        continue;
      }
      n(i, j)[m] = new ft(), f && (n(i, Q).push(f), o.push(f[1])), i = n(i, j)[m];
    }
    return n(i, V).push({ [e]: { handler: r, possibleKeys: o.filter((d, c, l) => l.indexOf(d) === c), score: n(this, ht) } }), i;
  }
  search(e, s) {
    var c;
    const r = [];
    u(this, A, pt);
    let a = [this];
    const o = Qt(s), d = [];
    for (let l = 0, h = o.length; l < h; l++) {
      const f = o[l], m = l === h - 1, b = [];
      for (let E = 0, O = a.length; E < O; E++) {
        const v = a[E], C = n(v, j)[f];
        C && (u(C, A, n(v, A)), m ? (n(C, j)["*"] && r.push(...g(this, _, J).call(this, n(C, j)["*"], e, n(v, A))), r.push(...g(this, _, J).call(this, C, e, n(v, A)))) : b.push(C));
        for (let $ = 0, Ct = n(v, Q).length; $ < Ct; $++) {
          const At = n(v, Q)[$], M = n(v, A) === pt ? {} : { ...n(v, A) };
          if (At === "*") {
            const L = n(v, j)["*"];
            L && (r.push(...g(this, _, J).call(this, L, e, n(v, A))), u(L, A, M), b.push(L));
            continue;
          }
          const [ge, Ft, ut] = At;
          if (!f && !(ut instanceof RegExp)) continue;
          const N = n(v, j)[ge], ve = o.slice(l).join("/");
          if (ut instanceof RegExp) {
            const L = ut.exec(ve);
            if (L) {
              if (M[Ft] = L[0], r.push(...g(this, _, J).call(this, N, e, n(v, A), M)), Object.keys(n(N, j)).length) {
                u(N, A, M);
                const Mt = ((c = L[0].match(/\//)) == null ? void 0 : c.length) ?? 0;
                (d[Mt] || (d[Mt] = [])).push(N);
              }
              continue;
            }
          }
          (ut === true || ut.test(f)) && (M[Ft] = f, m ? (r.push(...g(this, _, J).call(this, N, e, M, n(v, A))), n(N, j)["*"] && r.push(...g(this, _, J).call(this, n(N, j)["*"], e, M, n(v, A)))) : (u(N, A, M), b.push(N)));
        }
      }
      a = b.concat(d.shift() ?? []);
    }
    return r.length > 1 && r.sort((l, h) => l.score - h.score), [r.map(({ handler: l, params: h }) => [l, h])];
  }
}, V = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakSet(), J = /* @__PURE__ */ __name2(function(e, s, r, i) {
  const a = [];
  for (let o = 0, d = n(e, V).length; o < d; o++) {
    const c = n(e, V)[o], l = c[s] || c[y], h = {};
    if (l !== void 0 && (l.params = /* @__PURE__ */ Object.create(null), a.push(l), r !== pt || i && i !== pt)) for (let f = 0, m = l.possibleKeys.length; f < m; f++) {
      const b = l.possibleKeys[f], E = h[l.score];
      l.params[b] = i != null && i[b] && !E ? i[b] : r[b] ?? (i == null ? void 0 : i[b]), h[l.score] = true;
    }
  }
  return a;
}, "J"), ft);
var Z;
var Xt;
var ts = (Xt = class {
  static {
    __name(this, "Xt");
  }
  static {
    __name2(this, "Xt");
  }
  constructor() {
    p(this, "name", "TrieRouter");
    x(this, Z);
    u(this, Z, new Ze());
  }
  add(t, e, s) {
    const r = te(e);
    if (r) {
      for (let i = 0, a = r.length; i < a; i++) n(this, Z).insert(t, r[i], s);
      return;
    }
    n(this, Z).insert(t, e, s);
  }
  match(t, e) {
    return n(this, Z).search(t, e);
  }
}, Z = /* @__PURE__ */ new WeakMap(), Xt);
var ue = class extends Be {
  static {
    __name(this, "ue");
  }
  static {
    __name2(this, "ue");
  }
  constructor(t = {}) {
    super(t), this.router = t.router ?? new Qe({ routers: [new Xe(), new ts()] });
  }
};
var es = /* @__PURE__ */ __name2((t) => {
  const s = { ...{ origin: "*", allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"], allowHeaders: [], exposeHeaders: [] }, ...t }, r = /* @__PURE__ */ ((a) => typeof a == "string" ? a === "*" ? () => a : (o) => a === o ? o : null : typeof a == "function" ? a : (o) => a.includes(o) ? o : null)(s.origin), i = ((a) => typeof a == "function" ? a : Array.isArray(a) ? () => a : () => [])(s.allowMethods);
  return async function(o, d) {
    var h;
    function c(f, m) {
      o.res.headers.set(f, m);
    }
    __name(c, "c");
    __name2(c, "c");
    const l = await r(o.req.header("origin") || "", o);
    if (l && c("Access-Control-Allow-Origin", l), s.credentials && c("Access-Control-Allow-Credentials", "true"), (h = s.exposeHeaders) != null && h.length && c("Access-Control-Expose-Headers", s.exposeHeaders.join(",")), o.req.method === "OPTIONS") {
      s.origin !== "*" && c("Vary", "Origin"), s.maxAge != null && c("Access-Control-Max-Age", s.maxAge.toString());
      const f = await i(o.req.header("origin") || "", o);
      f.length && c("Access-Control-Allow-Methods", f.join(","));
      let m = s.allowHeaders;
      if (!(m != null && m.length)) {
        const b = o.req.header("Access-Control-Request-Headers");
        b && (m = b.split(/\s*,\s*/));
      }
      return m != null && m.length && (c("Access-Control-Allow-Headers", m.join(",")), o.res.headers.append("Vary", "Access-Control-Request-Headers")), o.res.headers.delete("Content-Length"), o.res.headers.delete("Content-Type"), new Response(null, { headers: o.res.headers, status: 204, statusText: "No Content" });
    }
    await d(), s.origin !== "*" && o.header("Vary", "Origin", { append: true });
  };
}, "es");
var ss = /^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i;
var qt = /* @__PURE__ */ __name2((t, e = is) => {
  const s = /\.([a-zA-Z0-9]+?)$/, r = t.match(s);
  if (!r) return;
  let i = e[r[1]];
  return i && i.startsWith("text") && (i += "; charset=utf-8"), i;
}, "qt");
var rs = { aac: "audio/aac", avi: "video/x-msvideo", avif: "image/avif", av1: "video/av1", bin: "application/octet-stream", bmp: "image/bmp", css: "text/css", csv: "text/csv", eot: "application/vnd.ms-fontobject", epub: "application/epub+zip", gif: "image/gif", gz: "application/gzip", htm: "text/html", html: "text/html", ico: "image/x-icon", ics: "text/calendar", jpeg: "image/jpeg", jpg: "image/jpeg", js: "text/javascript", json: "application/json", jsonld: "application/ld+json", map: "application/json", mid: "audio/x-midi", midi: "audio/x-midi", mjs: "text/javascript", mp3: "audio/mpeg", mp4: "video/mp4", mpeg: "video/mpeg", oga: "audio/ogg", ogv: "video/ogg", ogx: "application/ogg", opus: "audio/opus", otf: "font/otf", pdf: "application/pdf", png: "image/png", rtf: "application/rtf", svg: "image/svg+xml", tif: "image/tiff", tiff: "image/tiff", ts: "video/mp2t", ttf: "font/ttf", txt: "text/plain", wasm: "application/wasm", webm: "video/webm", weba: "audio/webm", webmanifest: "application/manifest+json", webp: "image/webp", woff: "font/woff", woff2: "font/woff2", xhtml: "application/xhtml+xml", xml: "application/xml", zip: "application/zip", "3gp": "video/3gpp", "3g2": "video/3gpp2", gltf: "model/gltf+json", glb: "model/gltf-binary" };
var is = rs;
var as = /* @__PURE__ */ __name2((...t) => {
  let e = t.filter((i) => i !== "").join("/");
  e = e.replace(new RegExp("(?<=\\/)\\/+", "g"), "");
  const s = e.split("/"), r = [];
  for (const i of s) i === ".." && r.length > 0 && r.at(-1) !== ".." ? r.pop() : i !== "." && r.push(i);
  return r.join("/") || ".";
}, "as");
var pe = { br: ".br", zstd: ".zst", gzip: ".gz" };
var ns = Object.keys(pe);
var os = "index.html";
var ls = /* @__PURE__ */ __name2((t) => {
  const e = t.root ?? "./", s = t.path, r = t.join ?? as;
  return async (i, a) => {
    var h, f, m, b;
    if (i.finalized) return a();
    let o;
    if (t.path) o = t.path;
    else try {
      if (o = decodeURIComponent(i.req.path), /(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(o)) throw new Error();
    } catch {
      return await ((h = t.onNotFound) == null ? void 0 : h.call(t, i.req.path, i)), a();
    }
    let d = r(e, !s && t.rewriteRequestPath ? t.rewriteRequestPath(o) : o);
    t.isDir && await t.isDir(d) && (d = r(d, os));
    const c = t.getContent;
    let l = await c(d, i);
    if (l instanceof Response) return i.newResponse(l.body, l);
    if (l) {
      const E = t.mimes && qt(d, t.mimes) || qt(d);
      if (i.header("Content-Type", E || "application/octet-stream"), t.precompressed && (!E || ss.test(E))) {
        const O = new Set((f = i.req.header("Accept-Encoding")) == null ? void 0 : f.split(",").map((v) => v.trim()));
        for (const v of ns) {
          if (!O.has(v)) continue;
          const C = await c(d + pe[v], i);
          if (C) {
            l = C, i.header("Content-Encoding", v), i.header("Vary", "Accept-Encoding", { append: true });
            break;
          }
        }
      }
      return await ((m = t.onFound) == null ? void 0 : m.call(t, d, i)), i.body(l);
    }
    await ((b = t.onNotFound) == null ? void 0 : b.call(t, d, i)), await a();
  };
}, "ls");
var cs = /* @__PURE__ */ __name2(async (t, e) => {
  let s;
  e && e.manifest ? typeof e.manifest == "string" ? s = JSON.parse(e.manifest) : s = e.manifest : typeof __STATIC_CONTENT_MANIFEST == "string" ? s = JSON.parse(__STATIC_CONTENT_MANIFEST) : s = __STATIC_CONTENT_MANIFEST;
  let r;
  e && e.namespace ? r = e.namespace : r = __STATIC_CONTENT;
  const i = s[t] || t;
  if (!i) return null;
  const a = await r.get(i, { type: "stream" });
  return a || null;
}, "cs");
var ds = /* @__PURE__ */ __name2((t) => async function(s, r) {
  return ls({ ...t, getContent: /* @__PURE__ */ __name2(async (a) => cs(a, { manifest: t.manifest, namespace: t.namespace ? t.namespace : s.env ? s.env.__STATIC_CONTENT : void 0 }), "getContent") })(s, r);
}, "ds");
var hs = /* @__PURE__ */ __name2((t) => ds(t), "hs");
var et = new ue();
et.use("/api/*", es());
et.use("/static/*", hs({ root: "./public" }));
var xe = [{ id: 1, name: "Career Launcher", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop", rating: 4.8, reviews: 2340, location: "Delhi NCR", exams: ["MBA", "GMAT", "NMAT"], priceRange: "\u20B950,000 - \u20B91,50,000", badge: "Top Rated", features: ["Live Classes", "Mock Tests", "Doubt Sessions"] }, { id: 2, name: "Allen Career Institute", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop", rating: 4.9, reviews: 5670, location: "Kota, Rajasthan", exams: ["JEE", "NEET"], priceRange: "\u20B91,00,000 - \u20B92,00,000", badge: "Best Seller", features: ["Classroom", "Study Material", "Test Series"] }, { id: 3, name: "Aakash Institute", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop", rating: 4.7, reviews: 3890, location: "Mumbai, Bangalore", exams: ["NEET", "JEE"], priceRange: "\u20B980,000 - \u20B91,80,000", badge: "Verified", features: ["Hybrid Mode", "Digital Content", "Mentorship"] }, { id: 4, name: "Vajiram & Ravi", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop", rating: 4.9, reviews: 1890, location: "Delhi", exams: ["UPSC", "State PSC"], priceRange: "\u20B960,000 - \u20B91,20,000", badge: "Top Rated", features: ["GS Foundation", "Current Affairs", "Answer Writing"] }, { id: 5, name: "TIME Institute", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop", rating: 4.6, reviews: 2100, location: "Bangalore, Chennai", exams: ["MBA", "GMAT", "CAT"], priceRange: "\u20B945,000 - \u20B91,00,000", badge: "Popular", features: ["Weekend Batches", "Online Portal", "Personalized Learning"] }, { id: 6, name: "Resonance", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop", rating: 4.8, reviews: 4200, location: "Kota, Multiple Cities", exams: ["JEE", "NEET", "Foundation"], priceRange: "\u20B990,000 - \u20B92,50,000", badge: "Best Seller", features: ["DLPD Program", "Scholarship Tests", "Performance Analysis"] }];
var fs = [{ name: "Priya Sharma", exam: "NEET 2024", rank: "AIR 342", institute: "Allen Career Institute", image: "https://i.pravatar.cc/150?img=1", review: "The teaching methodology and regular tests helped me improve my scores consistently. Highly recommended!", rating: 5 }, { name: "Rahul Verma", exam: "CAT 2024", percentile: "99.2%ile", institute: "Career Launcher", image: "https://i.pravatar.cc/150?img=3", review: "Amazing faculty and study material. The mock tests were exactly like the actual CAT exam.", rating: 5 }, { name: "Ananya Gupta", exam: "UPSC CSE 2024", rank: "Rank 89", institute: "Vajiram & Ravi", image: "https://i.pravatar.cc/150?img=5", review: "Best decision I made was joining this institute. The answer writing practice sessions were game-changers!", rating: 5 }];
et.get("/api/institutes", (t) => t.json(xe));
et.get("/api/institutes/:id", (t) => {
  const e = parseInt(t.req.param("id")), s = xe.find((r) => r.id === e);
  return s ? t.json(s) : t.json({ error: "Institute not found" }, 404);
});
et.get("/api/testimonials", (t) => t.json(fs));
et.get("/", (t) => t.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coaching Dekho - Find the Best Coaching Institutes for Competitive Exams</title>
        <meta name="description" content="Discover, compare and choose the best coaching institutes for MBA, NEET, JEE, UPSC, GMAT, and other competitive exams">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="/static/styles.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#1877F2',
                  secondary: '#E23744',
                  dark: '#1F2937',
                  light: '#F5F7FA'
                },
                fontFamily: {
                  sans: ['Inter', 'sans-serif'],
                  display: ['Poppins', 'sans-serif']
                }
              }
            }
          }
        <\/script>
    </head>
    <body class="font-sans text-dark bg-white">
        <!-- Navigation -->
        <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-8">
                        <a href="/" class="flex items-center space-x-2">
                            <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-white text-xl"></i>
                            </div>
                            <span class="text-2xl font-display font-bold">
                                <span class="text-primary">Coaching</span><span class="text-secondary">Dekho</span>
                            </span>
                        </a>
                        <div class="hidden md:flex space-x-6">
                            <a href="#exams" class="text-gray-700 hover:text-primary transition font-medium">Exams</a>
                            <a href="#institutes" class="text-gray-700 hover:text-primary transition font-medium">Institutes</a>
                            <a href="#reviews" class="text-gray-700 hover:text-primary transition font-medium">Reviews</a>
                            <a href="#about" class="text-gray-700 hover:text-primary transition font-medium">About</a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="hidden md:block text-gray-700 hover:text-primary transition font-medium">Sign In</button>
                        <button class="bg-secondary hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition shadow-md hover:shadow-lg">
                            List Your Institute
                        </button>
                        <button class="md:hidden text-gray-700">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 pt-16 pb-24">
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-12">
                    <div class="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md mb-6">
                        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span class="text-sm font-medium text-gray-700">10,000+ Students Enrolled This Month \u{1F525}</span>
                    </div>
                    <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-dark mb-6 leading-tight">
                        Find Your Perfect<br>
                        <span class="text-primary">Coaching</span> <span class="text-secondary">Partner</span>
                    </h1>
                    <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Discover, compare & choose from <span class="font-bold text-primary">1000+</span> verified coaching institutes for competitive exams
                    </p>
                    
                    <!-- Search Bar -->
                    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-3 flex flex-col md:flex-row gap-3">
                        <div class="flex-1 flex items-center px-4 py-3 bg-light rounded-xl">
                            <i class="fas fa-book-open text-primary mr-3"></i>
                            <select class="bg-transparent flex-1 outline-none text-dark font-medium">
                                <option>Select Exam</option>
                                <option>JEE (Main + Advanced)</option>
                                <option>NEET UG</option>
                                <option>MBA (CAT/XAT/GMAT)</option>
                                <option>UPSC CSE</option>
                                <option>CUET UG/PG</option>
                                <option>NMAT</option>
                            </select>
                        </div>
                        <div class="flex-1 flex items-center px-4 py-3 bg-light rounded-xl">
                            <i class="fas fa-map-marker-alt text-primary mr-3"></i>
                            <select class="bg-transparent flex-1 outline-none text-dark font-medium">
                                <option>Select City</option>
                                <option>Delhi NCR</option>
                                <option>Mumbai</option>
                                <option>Bangalore</option>
                                <option>Kota</option>
                                <option>Hyderabad</option>
                                <option>Chennai</option>
                                <option>Pune</option>
                            </select>
                        </div>
                        <button class="bg-secondary hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                            <i class="fas fa-search"></i>
                            <span>Search</span>
                        </button>
                    </div>

                    <!-- Trending Exams -->
                    <div class="mt-8 flex flex-wrap justify-center gap-3">
                        <span class="text-gray-600 font-medium">Trending:</span>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            JEE 2025
                        </a>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            NEET 2025
                        </a>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            UPSC CSE
                        </a>
                        <a href="#" class="px-4 py-2 bg-white hover:bg-primary hover:text-white rounded-full text-sm font-semibold text-gray-700 transition shadow-md">
                            CAT 2025
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Exam Categories Grid -->
        <section id="exams" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Popular <span class="text-primary">Exam</span> Categories
                    </h2>
                    <p class="text-lg text-gray-600">Choose your target exam and explore coaching options</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <!-- JEE -->
                    <div class="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-primary hover:to-blue-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-atom text-3xl text-primary group-hover:text-primary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">JEE</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Main + Advanced</p>
                        <div class="mt-4 text-xs font-semibold text-primary group-hover:text-white">250+ Institutes \u2192</div>
                    </div>

                    <!-- NEET -->
                    <div class="group bg-gradient-to-br from-red-50 to-red-100 hover:from-secondary hover:to-red-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-heartbeat text-3xl text-secondary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">NEET</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Medical Entrance</p>
                        <div class="mt-4 text-xs font-semibold text-secondary group-hover:text-white">180+ Institutes \u2192</div>
                    </div>

                    <!-- MBA -->
                    <div class="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-500 hover:to-purple-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-briefcase text-3xl text-purple-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">MBA</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">CAT, XAT, GMAT</p>
                        <div class="mt-4 text-xs font-semibold text-purple-600 group-hover:text-white">120+ Institutes \u2192</div>
                    </div>

                    <!-- UPSC -->
                    <div class="group bg-gradient-to-br from-green-50 to-green-100 hover:from-green-500 hover:to-green-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-landmark text-3xl text-green-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">UPSC</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Civil Services</p>
                        <div class="mt-4 text-xs font-semibold text-green-600 group-hover:text-white">90+ Institutes \u2192</div>
                    </div>

                    <!-- CUET -->
                    <div class="group bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-500 hover:to-yellow-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-university text-3xl text-yellow-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">CUET</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">UG & PG</p>
                        <div class="mt-4 text-xs font-semibold text-yellow-600 group-hover:text-white">75+ Institutes \u2192</div>
                    </div>

                    <!-- GMAT -->
                    <div class="group bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-500 hover:to-indigo-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-globe text-3xl text-indigo-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">GMAT</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">Global MBA</p>
                        <div class="mt-4 text-xs font-semibold text-indigo-600 group-hover:text-white">50+ Institutes \u2192</div>
                    </div>

                    <!-- NMAT -->
                    <div class="group bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-500 hover:to-pink-600 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-chart-line text-3xl text-pink-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">NMAT</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">NMIMS Entrance</p>
                        <div class="mt-4 text-xs font-semibold text-pink-600 group-hover:text-white">40+ Institutes \u2192</div>
                    </div>

                    <!-- More Exams -->
                    <div class="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-500 hover:to-gray-700 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <i class="fas fa-ellipsis-h text-3xl text-gray-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark group-hover:text-white mb-2">More</h3>
                        <p class="text-sm text-gray-600 group-hover:text-white/90">View All Exams</p>
                        <div class="mt-4 text-xs font-semibold text-gray-600 group-hover:text-white">Explore \u2192</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Coaching Institutes -->
        <section id="institutes" class="py-20 bg-light">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-end mb-12">
                    <div>
                        <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                            Top <span class="text-secondary">Coaching</span> Institutes
                        </h2>
                        <p class="text-lg text-gray-600">Handpicked & verified institutes with proven track records</p>
                    </div>
                    <button class="hidden md:block text-primary font-bold hover:text-secondary transition">
                        View All <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>

                <!-- Horizontal Scrolling Container -->
                <div class="overflow-x-auto pb-4 hide-scrollbar">
                    <div id="institutes-container" class="flex space-x-6 w-max">
                        <!-- Cards will be loaded here by JavaScript -->
                    </div>
                </div>

                <!-- View All Button for Mobile -->
                <div class="md:hidden text-center mt-8">
                    <button class="text-primary font-bold hover:text-secondary transition">
                        View All Institutes <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- Why Coaching Dekho -->
        <section id="about" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Why <span class="text-primary">Coaching</span><span class="text-secondary">Dekho</span>?
                    </h2>
                    <p class="text-lg text-gray-600">Your trusted partner in finding the perfect coaching institute</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Feature 1 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-shield-check text-3xl text-primary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">100% Verified</h3>
                        <p class="text-gray-600">All institutes are thoroughly verified and quality-checked by our team</p>
                    </div>

                    <!-- Feature 2 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-star text-3xl text-secondary"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">Real Reviews</h3>
                        <p class="text-gray-600">Authentic student reviews to help you make informed decisions</p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-balance-scale text-3xl text-green-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">Easy Comparison</h3>
                        <p class="text-gray-600">Compare fees, faculty, results & facilities side-by-side</p>
                    </div>

                    <!-- Feature 4 -->
                    <div class="text-center group">
                        <div class="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <i class="fas fa-headset text-3xl text-purple-600"></i>
                        </div>
                        <h3 class="font-display font-bold text-xl text-dark mb-3">Free Support</h3>
                        <p class="text-gray-600">Our counselors help you choose the right coaching for free</p>
                    </div>
                </div>

                <!-- Stats -->
                <div class="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">1000+</div>
                            <div class="text-white/80">Coaching Institutes</div>
                        </div>
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">50K+</div>
                            <div class="text-white/80">Students Enrolled</div>
                        </div>
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">15K+</div>
                            <div class="text-white/80">Verified Reviews</div>
                        </div>
                        <div>
                            <div class="text-5xl font-display font-bold mb-2">98%</div>
                            <div class="text-white/80">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Student Testimonials -->
        <section id="reviews" class="py-20 bg-light">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                        Success <span class="text-secondary">Stories</span>
                    </h2>
                    <p class="text-lg text-gray-600">Hear from students who achieved their dreams</p>
                </div>

                <div id="testimonials-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Testimonials will be loaded here by JavaScript -->
                </div>

                <div class="text-center mt-12">
                    <button class="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl">
                        Read More Success Stories <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-primary via-blue-600 to-secondary">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-rocket text-4xl text-white"></i>
                </div>
                <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Ready to Start Your Journey?
                </h2>
                <p class="text-xl text-white/90 mb-8">
                    Join thousands of students who found their perfect coaching institute through CoachingDekho
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl">
                        <i class="fas fa-search mr-2"></i>
                        Find Your Coaching
                    </button>
                    <button class="bg-secondary hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-xl border-2 border-white/20">
                        <i class="fas fa-building mr-2"></i>
                        List Your Institute
                    </button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-dark text-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <!-- Brand -->
                    <div>
                        <div class="flex items-center space-x-2 mb-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-white text-xl"></i>
                            </div>
                            <span class="text-2xl font-display font-bold">
                                <span class="text-primary">Coaching</span><span class="text-secondary">Dekho</span>
                            </span>
                        </div>
                        <p class="text-gray-400 mb-4">Your trusted partner in finding the perfect coaching institute for competitive exams.</p>
                        <div class="flex space-x-4">
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="font-display font-bold text-lg mb-4">Quick Links</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#" class="hover:text-primary transition">About Us</a></li>
                            <li><a href="#" class="hover:text-primary transition">How It Works</a></li>
                            <li><a href="#" class="hover:text-primary transition">Success Stories</a></li>
                            <li><a href="#" class="hover:text-primary transition">Blog</a></li>
                            <li><a href="#" class="hover:text-primary transition">Contact Us</a></li>
                        </ul>
                    </div>

                    <!-- Popular Exams -->
                    <div>
                        <h3 class="font-display font-bold text-lg mb-4">Popular Exams</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#" class="hover:text-primary transition">JEE Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">NEET Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">UPSC Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">MBA Coaching</a></li>
                            <li><a href="#" class="hover:text-primary transition">CUET Coaching</a></li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div>
                        <h3 class="font-display font-bold text-lg mb-4">Contact Us</h3>
                        <ul class="space-y-3 text-gray-400">
                            <li class="flex items-start space-x-3">
                                <i class="fas fa-envelope text-primary mt-1"></i>
                                <span>support@coachingdekho.com</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fas fa-phone text-primary mt-1"></i>
                                <span>+91 9876543210</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <i class="fas fa-map-marker-alt text-primary mt-1"></i>
                                <span>New Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm mb-4 md:mb-0">
                        \xA9 2026 CoachingDekho. All rights reserved.
                    </p>
                    <div class="flex space-x-6 text-sm text-gray-400">
                        <a href="#" class="hover:text-primary transition">Privacy Policy</a>
                        <a href="#" class="hover:text-primary transition">Terms of Service</a>
                        <a href="#" class="hover:text-primary transition">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>

        <script src="/static/app.js"><\/script>
    </body>
    </html>
  `));
var zt = new ue();
var us = Object.assign({ "/src/index.tsx": et });
var me = false;
for (const [, t] of Object.entries(us)) t && (zt.all("*", (e) => {
  let s;
  try {
    s = e.executionCtx;
  } catch {
  }
  return t.fetch(e.req.raw, e.env, s);
}), zt.notFound((e) => {
  let s;
  try {
    s = e.executionCtx;
  } catch {
  }
  return t.fetch(e.req.raw, e.env, s);
}), me = true);
if (!me) throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");
var drainBody = /* @__PURE__ */ __name2(async (request, env22, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env22);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env22, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env22);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = zt;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env22, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env22, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env22, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env22, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env22, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env22, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env22, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env22, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env22, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env22, ctx) => {
      this.env = env22;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-XDxuQc/9umryihmkmu.js
var define_ROUTES_default = { version: 1, include: ["/*"], exclude: ["/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env3, context2) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env3.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = middleware_loader_entry_default;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env3, context2);
      }
    }
    return env3.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env3, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env3);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env3, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env3);
  } catch (e) {
    const error3 = reduceError2(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-YsqQRw/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env3, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env3, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env3, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env3, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-YsqQRw/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env3, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env3, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env3, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env3, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env3, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env3, ctx) => {
      this.env = env3;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=9umryihmkmu.js.map
