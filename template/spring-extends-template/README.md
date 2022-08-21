# spring-extends-template

#### intruoduce
1. zhice teamson company development this module and all right reserved!
2. attention ! just suport the j-spring framework.


#### install 

npm instlal spring-extends-template

#### usage 

##### 1.set the configuration file 

###### file path: ${Project}/resource/app-dev.yaml
###### basic config:
```yaml
j-spring:
  log:
    state: on
    level: info
TemplateBean:
  msg: "Hello world. yq!"
```


#### 2. load email module at launch.
```js
const {SpringBoot} = require("j-spring")
const {TemplateBeanScaner} = require("./spring_extends")


new SpringBoot({
	rootPath:__dirname,
	srcList:["./demo"],
	moduleList:[TemplateBeanScaner("./spring_extends")]
}).start();

```

#### 3. call in the spring container!
```js
//@SpringBoot
class Application {

	//just copy the code of next line is done!
	//@Autowired
	templateBean;

	async main(){

		this.templateBean.say();

	}

}
```



