import chalk  from 'chalk';
const validator=require('validator');
const res=validator.isEmail("alok@gmail.com");
console.log(res? chalk.green.inverse(res) : chalk.supportsColorStderr.inverse(res));
