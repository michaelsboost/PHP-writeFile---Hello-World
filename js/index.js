$("[data-action=writefile]").click(function(){
  $.ajax({
    type: "GET",
    url: 'save.php',
    data: "",
    success: function(msg) {
      alert(msg);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("Some error occured");
    }
  });
});
