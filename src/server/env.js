/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * protocol：协议
 *
 */

let baseUrl = '';
let protocol = location.protocol;

if (process.env.NODE_ENV === 'development') {
	baseUrl = 'http://'              //开发环境接口
}else if(process.env.NODE_ENV === 'production'){
	if(protocol === 'https:'){
		baseUrl = protocol + '//'          //生产环境https接口地址
	}else{
		baseUrl = protocol + '//'          //生产环境http接口地址
	}
}

export {
	baseUrl
}