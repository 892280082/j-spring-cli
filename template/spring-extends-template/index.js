const {SpringBoot} = require("spring-ioc")
const {TemplateBeanScaner} = require("./spring_extends")


new SpringBoot({srcList:["./demo"],moduleList:[TemplateBeanScaner("./spring_extends")]}).run();

