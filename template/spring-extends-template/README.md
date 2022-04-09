# spring-extends-template

#### intruoduce
1. zhice teamson company development this module and all right reserved!
2. attention ! just suport the spring-ioc framework.


#### install 

npm instlal spring-extends-template

#### usage 

##### 1.set the configuration file 

###### file path: ${Project}/resource/TemplateBean.json
###### basic config:
```json
{
	"msg":"hello world"
}
```


#### 2. load email module at launch.
```js
const {SpringBoot} = require("spring-ioc")
const {TemplateBeanScaner} = require("spring-extends-template")

new SpringBoot({
	srcList:["./app"],
	moduleList:[TemplateBeanScaner]
}).run();
```

#### 3. call in the spring container!
```js
//@SpringBoot
class Application {

	//just copy the code of next line is done!
	//@Autowired
	TemplateBean;

	async main(){

		this.TemplateBean.say();

	}

}
```



