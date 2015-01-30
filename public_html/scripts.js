$("document").ready(function(){
    $(".pac").css("color", "deepblue");
    
    $(".pac").css("font-style", "italic");
    
    $("p[class^='p']").css("border", "2px solid deeppink");
    
    $("p:contains('Hook')").css("background-color", "deeppink");
    
    $("p:contains('Verse 1')").css("background-color", "deeppink");
    
     $("p:contains('Kendrick')").css("background-color", "deeppink");
    
    $("p:contains('would')").css("background-color", "deeppink");
    
    $(".sch").css("color", "white");
    
     $(".sch").css("font-style", "italic");
    
    $(".big").css("color", "white");
    
     $(".big").css("font-style", "italic");
    
    $(".smalls").css("color", "deepskyblue");
    
    $(".smalls").css("padding", "260px 370px");
    
    $(".smalls").css("font-style", "italic");
    
    $("div:has(p)").css("text-decoration", "underline");
    
    $('body').css("background-size", "1770px 987px");
    
     $("#superHumans").accordion({header: "h3"});
     
     $("#superHumans").css("opacity", "0.5");
     
     $("#superHumans").css("padding", "0px 0px");
     
     $(".blessed").css("padding", "0px 410px");
     
     $("#supers").accordion({header: "h3"});
     
     $("#supers").css("opacity", "0.5");
     
     $("#supers").css("padding", "0px 0px");
     
     $('#boi').css("padding-bottom", '0px');
     
     $('#boi').css("height", '326px');
     
     $(".yay").css("color", "deepblue");
    
    $(".yay").css("font-style", "italic");
    
    $("p[class^='yay']").css("border", "2px solid deeppink");
    
    $('body').css("background-image", "url(http://cdn04.cdn.gorillavsbear.net/wp-content/uploads/2014/02/Q-OXYMORON-GIF.gif)");
    
     
     $("h2").bind("mouseover", mouseOverMe);
     $("h2").bind("mouseout", mouseOutMe);
     
});
 $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
  });
  $(function() {
    $( "#draggable" ).draggable();
  });
  function mouseOverMe(){
      $("h2").css("color", "deeppink");
  }
  function mouseOutMe(){
      $("h2").css("color", "deepskyblue");
  }