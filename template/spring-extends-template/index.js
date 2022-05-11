const {SpringBoot} = require("spring-ioc")
const {TemplateBeanScaner} = require("./spring_extends")


new SpringBoot({
	rootPath:__dirname,
	srcList:["./demo"],
	moduleList:[TemplateBeanScaner("./spring_extends")]
}).start();

