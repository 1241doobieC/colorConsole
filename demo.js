import Console from './colorConsole.js';


const dev = new Console();

const testObj = {
    name : 'John',
    isHungry: false,
    age: 14,
    telephone: null
}
const testArray = [
    123,
    'String',
    {
        _id : 1,
        deviceName: 'Asuuus'
    },
    true,
    undefined
]
const testStr = 'You are my sunshine.';


dev.debug('Debug mode: ', testObj);
dev.error('Error mode: ', false);
dev.info('Info mode: ', testArray);
dev.warn('Warn mode: ', testStr);