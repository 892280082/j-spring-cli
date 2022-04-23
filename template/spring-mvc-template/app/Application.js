
//@SpringBoot
class Application {

	//@Autowired
	springMvc;

	log;

	async main(){

		this.springMvc.start();

		this.log.info("Browser address: http://localhost:3000")
		this.log.info("Browser address: http://localhost:3000/test/say")
		this.log.info("Browser address: http://localhost:3000/test/name/world")
	}

}

//@Controller
//@Json
class IndexController {

	/**
		request url: http://localhost:3000
	*/
	//@Get(/)
	async index(request,response){
		return {msg:"welcome use spring-ioc-mvc"};
	}

}

//@Controller(test)
//@Json
class TestController {

	/**
		normal api: http://localhost:3000/test/say
	*/

	//@Get
	async say(request,response){
		return {msg:"Hello World"};
	}

	/**
		restful api: http://localhost:3000/test/name/world
	*/
	//@Get(/name/:content)
	//@Param(content=path)
	async name(content){
		return `Hello => ${content}`;
	}

}

 module.exports = { Application,TestController,IndexController }