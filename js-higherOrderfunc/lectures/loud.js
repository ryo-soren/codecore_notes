function loud(LogFn, fn) {
    LogFn(`Calling ${fn.name}`);
    const val = fn()
    LogFn(`Called ${fn.name} Returned ${val}`);
    return val;
}

function hello() {
    return "Hello"
}

loud(console.log, hello)
