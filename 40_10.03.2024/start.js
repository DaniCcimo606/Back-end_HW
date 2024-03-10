const fs = require('fs');
const { exec } = require('child_process');
const commandInit = 'npm init -y';
const commandSetup = 'npm run setup';

exec(commandInit, (error, stdout, stderr) => {
    if (error) {
        console.error(`Ошибка выполнения команды: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`Ошибка команды: ${stderr}`);
        return;
    }
    console.error(`Результат выполнения команды: ${stdout}`);
    fs.readFile('package.json', 'utf8', (err, data) => {
        if (err) {
            console.error(`Ошибка чтения файла: ${err}`);
            return;
        }

        const packageJson = JSON.parse(data);

        packageJson.scripts = {
            setup: 'npm i dotenv && npm i express && npm i @faker-js/faker --save-dev && npm i pug',
            main: 'node --watch main.js',
        };

        const updatePackageJson = JSON.stringify(packageJson);

        fs.writeFile('package.json', updatePackageJson, 'utf8', (err) => {
            if (err) {
                console.error(`Ошибка записи в файл: ${err}`);
                return;
            }
            console.log('Файл "package.json" успешно обновлён');
            exec(commandSetup, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Ошибка выполнения команды: ${error}`);
                    return;
                }
                if (stderr) {
                    console.error(`Ошибка команды: ${stderr}`);
                    return;
                }
                console.error(`Результат выполнения команды: ${stdout}`);
            });
        });
    });
});
