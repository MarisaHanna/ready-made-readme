
const generateREADME = require('./license.js');
const fetch = require ('./fetch.js')
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require('util');

    const questions = [
       
      
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please decsribe installation requirements for you project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe the usage for this project',
        name: 'useage',
    },
    {
        type: 'list',
        message: 'Please choose a license',
        choices: [' Mozilla Public License 2.0', 'MIT License', 'Boost Software License 1.0'],
        name: 'license',
    
    },
    {
        type: 'input',
        message: 'Please list all contributors to this project',
        name: 'contributor',
    },
    {
        type: 'input',
        message: 'Please list or any test for your project',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    },
  ];


 function writeToFile(fileName, data) {
     fs.writeFile(fileName,data, err => {
         if (err){
             return console.log('Boo, somthing went wrong')
         }
         console.log('Yay! Success!')
     });
 }

 const writeFileAsync = util.promisify(writeToFile);

 async function init () {
     try{
         const data = await inquirer.prompt(questions);
         console.log(data, 'These are the answers')

         const getFetch = await fetch.fetchCall(data)

         const readme = generateREADME(data, getFetch);
        console.log(readme, 'please generate a readme now')

         await writeFileAsync('README.md', readme);
            console.log('Hooray! We did it!');
     }catch (error){
         console.log(error);

     }
 }

init ();
