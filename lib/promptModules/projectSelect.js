module.exports = [{
  type: 'list',
  message: '请选择要创建的模板',
  name: 'projectSelect',
  default: 0,
  choices: [
    {value: 0, name: 'vue3,naive-ui PC端模板(自用)'},
    {value: 1, name: 'vue3,vant 微信公众号模板(自用)'},
    {value: 2, name: '后台管理端：cool-admin [vue3,element-plus](https://show.cool-admin.com/)'},
    {value: 3, name: '后台管理端：jeecg-boot [vue3,antd](http://boot3.jeecg.com/)'},
    {value: 4, name: '后台管理端：vue3-element-admin [vue3,element](https://vue3.youlai.tech/)'},
    {value: 5, name: '后台管理端：naive-ui-admin [vue3,naive-ui](https://v1.naiveadmin.com/)'},
    {value: 6, name: '后台管理端：SoybeanAdmin [vue3,naive-ui](https://naive.soybeanjs.cn/home)'},
  ]
}];
