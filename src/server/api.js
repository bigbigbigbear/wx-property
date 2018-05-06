/**
 * 接口列表
 * Created by Bear on 18/4/25.
 */

export default {
  login: '/user/login',                 //注册   openid:微信openid  ，nickname:昵称，avatar:头像，gender:性别，province:省份，city:城市，mobile:手机号码
  index: '/index',                      //首页信息

  parkList: '/park/list',               //园区列表 page,pageSize
  parkDetail: '/park/view',             //园区详情，params:park_id 
  parkScore: '/park/score',             //园区评分，params:user_id:用户ID，park_id:园区ID，surroundings:环境，service:服务，facilities:设施
  deviceList: '/area/list',             //设施列表
  deviceBook: '/booking/create',        //设施预约


  newsList: '/news/list',               //新闻列表 
  newsDetail: '/news/view',             //新闻详情，params:news_id 


  employeeList: '/employee/list',       //员工列表 params:park_id 
  employeeDetail: '/employee/view',     //员工详情，params:employee_id ,park_id, user_id
  employeeScore: '/employee/score',     //员工评分，params:employee_id ,user_id, score, content
  rentList: '/zu/list',                 //招租列表 
  rentDetail: '/zu/view',               //招租详情，params:zu_id 
}