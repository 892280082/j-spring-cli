const {SpringBoot} = require("spring-ioc")
const {SpringIocMvcScaner} = require("spring-ioc-mvc")

const app = new SpringBoot({
	rootPath:__dirname,
	srcList:["./app"],
	moduleList:[SpringIocMvcScaner]
});

module.exports = {app}