templates =
  {
     todoDivs: [
       '<div class="todos todo-divs" data-id= <%=id%>>'+
         '<li><i class="<%=icon%>"></i></li>'+
         '<li><p contenteditable="true"><%=content%></p></li>'+
         '</div>'
    ].join(""),
    activeDivs: [
      '<div class="todos active-divs" data-id= <%=id%>>'+
        '<li><i class="<%=icon%>"></i></li>'+
        '<li><p><%=content%></p></li>'+
        '</div>'
   ].join(""),
   completedDivs: [
     '<div class="todos completed-divs" data-id= <%=id%>>'+
       '<li><i class="<%=icon%>"></i></li>'+
       '<li><p><%=content%></p></li>'+
       '</div>'
  ].join(""),
  };
