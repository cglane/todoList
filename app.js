$(document).ready(function(){
  todoPage.init();
});
var todoPage ={
  init:function(){
    todoPage.styling();
    todoPage.events();
  },
  styling:function(){
    todoPage.loadAll();
  },
  events:function(){

  },
  loadAll:function(){
      _.each(data,function(item,indx){
        item.id = indx;
        $('.container-content').prepend(todoPage.loadTemplates('todoDivs',item));
        console.log(item.icon);
      });
  },
  loadTemplates:function(name,itr){
    var tpl = _.template(templates[name]);
    return tpl(itr);
},

};
