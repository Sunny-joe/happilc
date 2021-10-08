$(document).ready(function () {
  $(".side-bar").click(function () {
    $(".nav-con").show("slow");
  });
  $(".close").click(function () {
    $(".nav-con").hide("slow");
  });
  $('#form').on('submit', function(e){
      e.preventDefault()
      const productName = $('#productName').val()
      const imgUrl = $('#imgUrl').val()
      
      $.post('/api/v1/products', {productName, imgUrl},function(data,status,xhr){
          $('.result').append(`Posted`)
          $('#productName').val('')
          
      }).done(function(){
          alert(succsesful)
      }).fail(function(jqxhr,settings,ex){alert(`failed ${ex}`)})
      
  })
});
