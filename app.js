                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 $(document).ready(function(){
    todoPage.init();
  });
  var todoPage ={

    init:function(){
      todoPage.styling();
      todoPage.events();
    },
    styling:function(){
      todoPage.loadAll(data);
      todoPage.loadActive(data);
      todoPage.loadCompleted(data);

    },
    events:function(){
      todoPage.inputs();
      todoPage.checkBox();
      todoPage.views();
      todoPage.clearCompleted();
      todoPage.doubleClick();

    },
    checkBox:function(){
        $('.todos li').on('click','i',function(){
            var dataId = $(this).closest('div').data('id');
            data[dataId].status = "completed";
            $(this).replaceWith("<i class = 'fa fa-check-circle-o fa-2x'> </i>");

        });
      },
      views:function(){
        $('#all').on('click',function(){
          $('.todos').remove();
          $('.todo-divs').removeClass('display-none');
          $('.todo-divs').addClass('active-view');
          $('.active-divs').removeClass('active-view');
          $('.completed-divs').removeClass('active-view');
          $('.forms').remove('display-none');
          $('.forms').addClass('active-view');
          todoPage.styling();
          todoPage.checkBox();

        });
        $('#active').on('click',function(){
          console.log("yeah");
          $('.todos').remove();
          todoPage.styling();
          $('.todo-divs').addClass('display-none');
          $('.active-divs').removeClass('display-none');
          $('.active-divs').addClass('active-view');
          $('.completed-divs').addClass('display-none');
          todoPage.checkBox();
        });
        $('#completed').on('click',function(){
          $('.todos').remove();
          todoPage.styling();
          $('.todo-divs').addClass('display-none');
          $('.completed-divs').removeClass('display-none');
          $('.completed-divs').addClass('active-view');
          $('.active-divs').addClass('display-none');
          todoPage.checkBox();

        });
},
        clearCompleted:function(){
          $('#clear-completed').on('click',function(){
          var index = 0;
          _.each(data,function(item,indx){
              var status = item.status;
              if(status === "completed") index = indx;
          });
          $('.todos').remove();
          data.splice(index,1);
          todoPage.styling();
          todoPage.checkBox();
          todoPage.doubleClick();
        });
      },

        inputs:function(){
          $('form').bind('keypress','input',function(e){
          var code = e.keyCode || e.which;
          if(code == 13) {
            $('.todos').remove();
            e.preventDefault();
           newData = {icon:"fa fa-circle-thin fa-2x",
            content:$('input[name = "todo"]').val(),
            id : "0",
            status: "active"
          };
          data.push(newData);
          todoPage.styling();
          todoPage.checkBox();
          todoPage.doubleClick();
        }
          });
        },
          doubleClick:function(){
              $('.todos').bind('keypress','p',function(e){
                  var code = e.keyCode || e.which;
                  if(code ==13){
                    e.preventDefault();
                    $('.todos').remove();
                    var id = $(this).closest('div').data('id');
                    data[id].content = $(this).closest('div').text();
                    todoPage.styling();
                    todoPage.doubleClick();
                  }
                  console.log(data);
          });

},
    loadAll:function(arr){
        _.each(arr,function(item,indx){
          item.id = indx;
          if(item.status === "completed"){
            item.icon = "fa fa-check-circle-o fa-2x";
          }
          item.id = indx;
          $('.container-content ul').prepend(todoPage.loadTemplates('todoDivs',item));

        });
      },
    loadActive:function(arr){
      var activeTodos = 0;
      _.each(arr,function(item,indx){
        if(item.status === "active"){
          activeTodos++;
          item.id = indx;
          $('.container-content ul').prepend(todoPage.loadTemplates('activeDivs',item));
        }
        });
        $('#numLeft').html(activeTodos);
        console.log(activeTodos);
    },
    loadCompleted:function(arr){
      _.each(arr,function(item,indx){
        if(item.status === "completed"){
          item.icon = "fa fa-check-circle-o fa-2x";
          console.log(item.icon);
          item.id = indx;
          $('.container-content ul').prepend(todoPage.loadTemplates('completedDivs',item));
        }
        });
    },
    loadTemplates:function(name,itr){
      var tpl = _.template(templates[name]);
      return tpl(itr);
  },


  };
