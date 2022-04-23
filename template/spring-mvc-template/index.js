const {SpringBoot} = require("spring-ioc")
const {SpringMvcScaner} = require("spring-ioc-mvc")


new SpringBoot({srcList:["./app"],moduleList:[SpringMvcScaner]}).run();