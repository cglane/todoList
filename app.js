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
        $('.todo-divs li').on('click','i',function(){
            var dataId = $(this).closest('div').data('id');
            data[dataId].status = "completed";
            $(this).replaceWith("<i class = 'fa fa-check-circle-o fa-2x'> </i>");

        });
        $('#all').on('click',function(){
          console.log("yeah");
          $('.todo-divs').removeClass('display-none');
          $('.todo-divs').addClass('active-view');
          $('.active-divs').removeClass('active-view');
          $('.completed-divs').removeClass('active-view');

        });
        $('#active').on('click',function(){
          console.log("yeah");
          $('.todo-divs').addClass('display-none');
          $('.active-divs').removeClass('display-none');
          $('.active-divs').addClass('active-view');
          $('.completed-divs').addClass('display-none');

        });
        $('#completed').on('click',function(){
          $('.todo-divs').addClass('display-none');
          $('.completed-divs').removeClass('display-none');
          $('.completed-divs').addClass('active-view');
          $('.active-divs').addClass('display-none');
        });
        $('.todos').on('dblclick','p',function(){
          $(this).css({"background-color": "grey"});
            $(this).on('keyboard',function(){
              console.log(keyboard);
            });
        });
        $('#clear-completed').on('click',function(){
          _.each(data,function(item,indx){
            if(item.status === "completed"){
              todoPage.deleteCompleted(indx);
            }
          });
        });

},
    loadAll:function(arr){
        _.each(arr,function(item,indx){
          item.id = indx;
          if(item.status === "completed"){
            item.icon = "fa fa-check-circle-o fa-2x";
          }
          item.id = indx;
          $('.container-content').prepend(todoPage.loadTemplates('todoDivs',item));

        });
      },
    loadActive:function(arr){
      var activeTodos = 0;
      _.each(arr,function(item,indx){
        if(item.status === "active"){
          activeTodos++;
          item.id = indx;
          $('.container-content').prepend(todoPage.loadTemplates('activeDivs',item));
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
          $('.container-content').prepend(todoPage.loadTemplates('completedDivs',item));
        }
        });
    },
    loadTemplates:function(name,itr){
      var tpl = _.template(templates[name]);
      return tpl(itr);
  },
    deleteCompleted:function(idx){
      data.slice(idx);
      console.log(data);
      todoPage.loadAll(data);

    }

  };
