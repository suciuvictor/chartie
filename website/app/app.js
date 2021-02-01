  function SubForm (){
    $.ajax({
      url:"https://api.apispreadsheets.com/data/7336/",
      type:"post",
      data:$("#myForm").serializeArray(),
      success: function(){
        alert("Form Data Submitted :)")
      },
      error: function(){
        alert("There was an error :(")
      }
    });
  }

  function SubFormdoi (){
    $.ajax({
      url:"https://api.apispreadsheets.com/data/7336/",
      type:"get",
      data:$("#myForm").serializeArray(),
      success: function(){
        alert("Form Data Submitted :)")
      },
      error: function(){
        alert("There was an error :(")
      }
    });
  }
