$('.btn').click(function(){
    let text = $(this).text()
    $('input').val($('input').val() + text)
})
$('#empty').click(function(){
    $('input').val('')
})
$('#delete').click(function(){
    let val = $('input').val()
    $('input').val(val.substring(0,val.length - 1))
})
$('#egual').click(function(){
    let value = $('input').val()
    $('input').val(eval(value))
})










 