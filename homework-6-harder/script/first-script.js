var k = 1024/503
$(window).resize(function(){
    $('#table').height($('#table').width() / k);
});
var r = 376/375
$(window).resize(function(){
    $('#table').height($('#table').width() / r);
});