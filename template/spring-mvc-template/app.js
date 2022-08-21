const {SpringBoot} = require("j-spring")
const {SpringIocMvcScaner} = require("j-spring-mvc")

const app = new SpringBoot({
	rootPath:__dirname,
	srcList:["./app"],
	moduleList:[SpringIocMvcScaner]
});

module.exports = {app}