const {SpringBoot} = require("spring-ioc")
const {SpringIocMvcScaner} = require("spring-ioc-mvc")


new SpringBoot({srcList:["./app"],moduleList:[SpringIocMvcScaner]}).run();