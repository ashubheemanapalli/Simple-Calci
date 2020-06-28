$(document).ready(function(){
  $("#0,#1,#2,#3,#4,#5,#6,#7,#8,#9,#mod,#sub,#add,#div,#mul").click(function(){
    let v=$(this).text();
    if(v=='x')
      v=$(this).val();
    let total=$("#output-value").text()+v;
    $("#output-value").text(total);
    $("#history-value").text(total);
  });
  $('#clear').click(function(){
    $('#output-value').text('');
    $('#history-value').text('');
  });
  $('#backspace').click(function(){
      let subString=$('#output-value').text().substring(0, $('#output-value').text().length - 1)
      $('#output-value').text(subString);
      $('#history-value').text(subString);
  });
  $('#equal').click(function(){
    let final=eval($('#output-value').text());
    $('#output-value').text(final);
    });
});
