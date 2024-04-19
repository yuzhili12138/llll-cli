module.exports = [{
  type: 'list',
  message: '请选择要创建的模板',
  name: 'projectSelect',
  default: 0,
  choices: [
    {value: 0, name: 'vue3,naive-ui PC端模板'},
    {value: 1, name: 'vue3,naive-ui PC端后台模板'},
    {value: 2, name: 'vue3,vant 微信公众号模板'},
  ]
}];
