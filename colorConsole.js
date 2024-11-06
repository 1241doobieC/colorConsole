export default class Console {
    constructor() {
        this.colors = {
            info: '\x1b[97m',   // White
            warn: '\x1b[93m',   // Bright yellow
            debug: '\x1b[95m',  // Purple
            error: '\x1b[91m'   // Bright red
        };
        this.reset = '\x1b[0m'; // Reset color
    }

    formatMessage(level, ...args) {
        const color = this.colors[level];
        
        const formattedArgs = args.map(arg => {
            if (typeof arg === 'object') {
                return JSON.stringify(arg, null, 2)
                    .split('\n')
                    .map(line => `${color}${line}${this.reset}`)
                    .join('\n');
            } else {
                return `${color}${arg}${this.reset}`;
            }
        });

        return `${formattedArgs.join(' ')}`;
    }

    info(...args) {
        console.log(this.formatMessage('info', ...args));
    }

    debug(...args) {
        console.log(this.formatMessage('debug', ...args));
    }

    warn(...args) {
        console.log(this.formatMessage('warn', ...args));
    }

    error(...args) {
        console.log(this.formatMessage('error', ...args));
    }
}
