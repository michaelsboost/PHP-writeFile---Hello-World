$("[data-action=writefile]").click(function() {
  var char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var genHash = "";
  var i;
  
  for (i = 0; i < 8; i++) {
    var rnum = Math.floor(Math.random() * char.length);
    genHash += char.substring(rnum, rnum + 1);
  }
  
  var filename = genHash + ".txt";
  var outputstring = $("[data-action=writevalue]").val();
  
  $.ajax({
    type: "GET",
    url: 'save.php',
    data: {
      "filename": filename,
      "outputstring": outputstring,
    },
    cache: false,
    success: function(msg) {
      alert(msg);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("Some error occured");
    }
  });
});
