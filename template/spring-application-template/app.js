const {SpringBoot} = require("spring-ioc")


const app = new SpringBoot({
	rootPath:__dirname,
	srcList:["./app"]
});

module.exports = {app}