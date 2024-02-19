function Logger(logType, message) {
    const logs = {
        local: [
            'Emergency',
            'Alert',
            'Critical',
            'Error',
            'Warning',
            'Notice',
            'Informational',
            'Debug',
        ],
        development: [
            'Emergency',
            'Alert',
            'Critical',
            'Error',
            'Warning',
            'Notice',
        ],
        production: ['Emergency', 'Alert', 'Critical', 'Error'],
    };
    const currentEnv = process.env.NODE_ENV;
    if (!logs[currentEnv]) {
        console.error(`Неизвестный environment "${currentEnv}"`);
    }
    if (!logs[currentEnv].includes(logType)) {
        console.error(
            `Тип лога "${logType}" не зафиксирован в "${currentEnv}" environment`
        );
    }
    console.log(`${logType}: ${message}`);
}
module.exports = Logger;
