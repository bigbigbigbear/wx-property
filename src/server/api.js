/**
 * 接口列表
 * Created by Bear on 18/4/25.
 */

export default {
  parkList: '/park/list',              //园区列表 page,pageSize
  parkDetail: '/park/view',            //园区详情，params:park_id 
  newsList: '/news/list',              //新闻列表 
  newsDetail: '/news/view',            //新闻详情，params:news_id 
  employeeList: '/employee/list',      //员工列表 params:park_id 
  employeeDetail: '/employee/view',     //员工详情，params:employee_id ,park_id, user_id
}