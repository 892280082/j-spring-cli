#!/usr/bin/env node 
const {readLine,readNumber} = require('./src/userInput')
const {ExtendsModuleTemplateMove} = require("./src/ProjectMove");
const path =require('path');



const main = async ()=>{

	const projectName = await readLine("please enter a project/module name,using the camel name rule! ")

	const projectType = await readNumber("please enter the creation type: \n 1.spring-ioc native \n 2.spring-mvc for web \n 3.spring-ioc-module",1,3)

	const MvClass = [null,null,ExtendsModuleTemplateMove][projectType-1];

	if(!MvClass){
		console.log("It has not been developed yet");
		return;
	}

	const mvInstance = new MvClass(projectName)

	const cwdPath = process.cwd();

	//format directory name
	const desnaPath = path.join(cwdPath,mvInstance.getFormatDirName())

	await mvInstance.copyTo(desnaPath)

	await mvInstance.modify();

	console.log(`Building complish!  \n 1.cd ${mvInstance.getFormatDirName()} \n 2.npm install \n 3.node index.js`);
}


main();