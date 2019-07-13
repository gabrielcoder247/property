//---------JavaScript & JQuery Custom Code by Zubair Ashraf--------------
jQuery(document).ready(function($) {
    $("#goto-form").click(function(e) {
      $("#footer-mate").hide();
      $("#main-mate").hide();
      $("#close-form").show();
    });

    $("#close-form").click(function(e) {
        $("#footer-mate").show();
      $("#main-mate").show();
      $("#close-form").hide();
    });
});





//Page: Find-Appartment ----> sidebar popup

jQuery(document).ready(function($) {



    // report modal Popup + Alert Message
    $("#btn-report").click(function(event) {
          $("#report").modal('hide');
          $("#report-alert").show('slow');
          setTimeout(function() {$("#report-alert").hide('slow');}, 4000);
    });
    

    //  sidebar open + Close
    $("#close-sidebarX").click(function(event) {
          $('#sidebarX').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ $("#sidebarX").hide(); }, 700);
              $("body").css('overflow', 'auto');

    });

    $(".open-sidebarX").click(function(event) {
        if($("#sidebarX").css('display')=='none'){
            $('#sidebarX').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            $("#sidebarX").show();
            $("body").css('overflow', 'hidden');
        }
          event.preventDefault();
    });


    // 
    $(".btn-show-floor").click(function(event) {
          //var btn=this;
          $(this).hide();
          $(this).next('span').show();
          $(this).parents(".row").nextAll('span').show('fast');
    });
    $(".btn-hide-floor").click(function(event) {
          //var btn=this;
          $(this).hide();
          $(this).prev('span').show();
          $(this).parents(".row").nextAll('span').hide('fast');
    });

});


$(document).mouseup(function(e){

      if($("#sidebarX").css('display')=='block'){
        var container = $("#sidebarX-inner");
        console.log(container);

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $('#sidebarX').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ $("#sidebarX").hide(); }, 700);
              $("body").css('overflow', 'auto');
          }

      }
      e.preventDefault();
        
});








//Page: Find-Appartment ----> Pagination Click

jQuery(document).ready(function($) {


  $(".btn-verified-sources").click(function(event) {
      myFunc("#verified-sources");
  });
  $(".btn-Newest").click(function(event) {
      myFunc("#Newest");
  });
  $(".btn-Low-to-High").click(function(event) {
      myFunc("#Low-to-High");
  });
  $(".btn-high-to-low").click(function(event) {
      myFunc("#high-to-low");
  });
  $(".btn-bathRoom").click(function(event) {
      myFunc("#bathRoom");
  });
  $(".btn-bedrooms").click(function(event) {
      myFunc("#bedrooms");
  });
  $(".btn-square-feet").click(function(event) {
      myFunc("#square-feet");
  });
  $(".btn-year-built").click(function(event) {
      myFunc("#year-built");
      //alert("Done");
  });
  function myFunc(show){
    $("#verified-sources").hide();
    $("#Newest").hide();
    $("#Low-to-High").hide();
    $("#high-to-low").hide();
    $("#bedrooms").hide();
    $("#square-feet").hide();
    $("#year-built").hide();
    $("#bathRoom").hide();

    $(show).show();
  }
});








//---------JavaScript & JQuery Custom Code Find Appartment--------------
// jQuery(document).ready(function($) {
//     $("#view-summary").click(function(e) {
//       $("#view-summary").hide();
//       $("#hide-summary").show();
//       $("#summary").show();
//     });

//     $("#hide-summary").click(function(e) {
//         $("#view-summary").show();
//       $("#hide-summary").hide();
//       $("#summary").hide();
//     });
// });


//---------JavaScript & JQuery Custom Code Find Appartment more listing--------------
// jQuery(document).ready(function($) {
//     $("#more-listing").click(function(e) {
//       $("#more-listing").hide();
//       $("#hide-listing").show();
//       $("#shown-lisiting").show();
//     });

//     $("#hide-listing").click(function(e) {
//        $("#more-listing").show();
//       $("#hide-listing").hide();
//       $("#shown-lisiting").hide();
//     });
// });








//---------JavaScript & JQuery Custom Code custom message--------------
jQuery(document).ready(function($) {
    $("#customize").click(function(e) {
      $("#customize").hide();
      $("#custom-message").show();
    });

    
});



//Page: Select Movers & Application Status....> Reserve Form Popup..Code
jQuery(document).ready(function($) {
  $(".btn-reserve").click(function(event) {

    if($("#reserve-popup").css('display')=='none'){
            $('#reserve-popup').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            $("#reserve-popup").show();
            $("body").css('overflow', 'hidden');
    }
    return false;
  });
});

$(document).mouseup(function(e){

      if($("#reserve-popup").css('display')=='block'){
        var container = $("#reserve-popup");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $('#reserve-popup').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ $("#reserve-popup").hide(); }, 700);
              $("body").css('overflow', 'auto');
          }

      }

        
});



//Page: index 2....> Search Box Code  Start


jQuery(document).ready(function($) {
        //$("#search-result").show();
        // $("#search-input").keyup(function(event) {
        //       alert(this.value);
        // });

        $("#search-input").focusin(function(event) {
             $("#search-result").show();
        });


$(document).mouseup(function(e){

      if($("#search-result").css('display')=='block'){
        var container = $("#search-result");
        var container2= $("#search-input");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
             if(!container2.is(e.target) && container2.has(e.target).length === 0){
                container.hide();
            }
          }

      }

        
});





        
});








//Page: Application Status....> Upload Form Popup..Code
jQuery(document).ready(function($) {
  $("#btn-upload-form").click(function(event) {
    if($("#upload-form").css('display')=='none'){
            $('#upload-form').removeClass('animated slideOutDown').addClass('animated slideInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            $("#upload-form").show();
            $("body").css('overflow', 'hidden');
    }
    return false;
      
  });

  $("#btn-back-upload-form").click(function(event) {
    $('#upload-form').removeClass('animated slideInUp').addClass('animated slideOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ 
            $("#upload-form").hide();
            $("body").css('overflow', 'auto');
           }, 700);      
  });
});

$(document).mouseup(function(e){

      if($("#upload-form").css('display')=='block'){
        var container = $("#upload-form");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $('#upload-form').removeClass('animated slideInUp').addClass('animated slideOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ 
            $("#upload-form").hide();
            $("body").css('overflow', 'auto');
           }, 700);
              
          }

      }
});



//Page: Rent Application....> Open Application Form Popup..Code
jQuery(document).ready(function($) {
  $(".btn-open-application").click(function(event) {

    if($("#open-application").css('display')=='none'){
            $('#open-application').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            $("#open-application").show();
            $("body").css('overflow', 'hidden');
    }
    return false;
  });
});
$("#btn-close-app").click(function(event) {
    $('#open-application').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ 
            $("#open-application").hide();
            $("body").css('overflow', 'auto');
          }, 700);          
    return false;          
});

$(document).mouseup(function(e){

      if($("#open-application").css('display')=='block'){
        var container = $("#open-application");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $('#open-application').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ $("#open-application").hide(); }, 700);
              $("body").css('overflow', 'auto');
          }
          return false;

      }
        
});


//Page: Rent Application....>View Profile Form Popup..Code
jQuery(document).ready(function($) {
    $("#btn-view-profile").click(function(event) {
        $('#open-application').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ $("#open-application").hide(); }, 700);
        setTimeout(function(){ $("#view-profile-modal").show(); }, 705);
        
        return false;
    });


    $("#btn-close-profile-modal").click(function(event) {
        $("#view-profile-modal").hide();
        $("body").css('overflow', 'auto');
    });

});
$(document).mouseup(function(e){

      if($("#view-profile-modal").css('display')=='block'){
        var container = $("#view-profile-modal");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $("#view-profile-modal").hide();
              $("body").css('overflow', 'auto');
          }
          return false;

      }
        
});


//Page: Moving Services....> Chat Form Popup..Code

jQuery(document).ready(function($) {
    $(".chat-icon").click(function(event) {
        $('#chat-popup2').removeClass('animated slideOutDown faster').addClass('animated slideInUp faster').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
              setTimeout(function(){ 
                $("#chat-popup2").show();
              }, 100); 
        return false;
    });
});

$(document).mouseup(function(e){

      if($("#chat-popup2").css('display')=='block'){
        var container = $("#chat-popup2");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $('#chat-popup2').removeClass('animated slideInUp faster').addClass('animated slideOutDown faster').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
              setTimeout(function(){ 
                $("#chat-popup2").hide();
              }, 700);  
          }
          return false;

      }
        
});
//Page: Moving Services....> Carousel..Code
jQuery(document).ready(function($) {
var active=$("#op1");
    $(active).addClass('active-option');
    $("body").on({
    click: function(event) {
        var anum=$(this).find('span').text();
        var num=parseInt(anum);        
        $('.carousel').carousel(num-1);
        active_func(num);
    },
    mouseenter: function() {
        $(this).css('background-color', '#e02c65');
        $(this).children('h4,p').css('color', 'white');
        $(this).find('.num-badge').removeClass('num-badge').addClass('num-badge-hover');
    },
    mouseleave: function() {
        $(this).css('background-color', 'white');
        $(this).children('h4,p').css('color', 'black');
        $(this).find('.num-badge-hover').removeClass('num-badge-hover').addClass('num-badge');
    }    
    }, ".my-option");



    $('#carouselExampleControls').on('slid.bs.carousel', function () {
      var currentIndex = $('div.active').index()+1;
      active_func(currentIndex);
      //alert(currentIndex);
           
    });
    function active_func(currentIndex){
      $(active).removeClass('active-option');
      if(currentIndex===1){
        active=$("#op1");
        $(active).addClass('active-option');
      }else if(currentIndex===2){
        active=$("#op2");
        $(active).addClass('active-option');
      }else if(currentIndex===3){
        active=$("#op3");
        $(active).addClass('active-option');
      }else if(currentIndex===4){
        active=$("#op4");
        $(active).addClass('active-option');
      }
    }
});


//Page: RoomMate List ----> Heart Code
jQuery(document).ready(function($) {
    $(".fa-heart").click(function(event) {
        if($(this).hasClass('fa-heart')){
          if($(this).hasClass('far')){
            $( this ).removeClass("far fa-heart").addClass("fas fa-heart");
          }else{
            $( this ).removeClass("fas fa-heart").addClass("far fa-heart");
          }
        }
        return;
    });

    $(".tick-icon").click(function(event) {
        var img1="assets/images/tick-icon.png";
        var img2="assets/images/tick-icon-2.png";

        ($(this).attr("src")===img1) ? $(this).attr("src",img2) : $(this).attr("src",img1);
    });



});

//Page: RoomMate List ----> List/Tab view Code
jQuery(document).ready(function($) {
    $("#btn-tab-view").click(function(event) {
        $("#list-view").hide();
        $("#tab-view").show();
        return;  
    });
    $("#btn-list-view").click(function(event) {
        $("#tab-view").hide();
        $("#list-view").show();
        return;
    });

});



//Page: RoomMate Listing....> Chat Form Popup..Code

jQuery(document).ready(function($) {
    $(".btn-chat-popup").click(function(event) {
        $('#chat-popup').removeClass('animated slideOutRight faster').addClass('animated slideInRight faster').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
              setTimeout(function(){ 
                $("#chat-popup").show();
                $("body").css('overflow', 'hidden');
              }, 100); 
        return false;
    });
});

$(document).mouseup(function(e){

      if($("#chat-popup").css('display')=='block'){
        var container = $("#chat-popup");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $('#chat-popup').removeClass('animated slideInRight faster').addClass('animated slideOutRight faster').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
              setTimeout(function(){ 
                $("#chat-popup").hide();
                $("body").css('overflow', 'auto'); 
              }, 700);  
          }
          return false;

      }
        
});








//Page: Properties Listing....> Add New Property Form Popup..Code
jQuery(document).ready(function($) {
  $("#btn-add-new-prop").click(function(event) {
    if($("#add-form-container").css('display')=='none'){
            $('#add-form-container').removeClass('animated slideOutDown').addClass('animated slideInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            $("#add-form-container").show();
            $("body").css('overflow', 'hidden');
    }
    return false;
      
  });

  $("#btn-back-add-form-container").click(function(event) {
    $('#add-form-container').removeClass('animated slideInUp').addClass('animated slideOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ 
            $("#add-form-container").hide();
            $("body").css('overflow', 'auto');
           }, 700);      
  });
});

$(document).mouseup(function(e){

      if($("#add-form-container").css('display')=='block'){
        var container = $("#add-form-container");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $('#add-form-container').removeClass('animated slideInUp').addClass('animated slideOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ 
            $("#add-form-container").hide();
            $("body").css('overflow', 'auto');
           }, 700);
              
          }

      }
});




//Page: Financials....> Withdraw cash Form Popup..Code
jQuery(document).ready(function($) {
  $("#btn-withdraw-form").click(function(event) {
    if($("#withdraw-form-container").css('display')=='none'){
            $('#withdraw-form-container').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            $("#withdraw-form-container").show();
            $("body").css('overflow', 'hidden');
    }
    return false;
  });
});

$(document).mouseup(function(e){

      if($("#withdraw-form-container").css('display')=='block'){
        var container = $("#withdraw-form-container");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $('#withdraw-form-container').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ $("#withdraw-form-container").hide(); }, 700);
              $("body").css('overflow', 'auto');
          }
          return false;

      }
        
});




//Select Items (Cart Items)
jQuery(document).ready(function($) {

    var cartButtons = $('.cart-plus-minus').find('button');
              $(cartButtons).on('click', function(e){
                e.preventDefault();
                var $this  = $(this);
                var target = $this.parent().data('target');
                var target = $('#'+target);
                var current = parseFloat($(target).val());
                if ($this.hasClass('cart-plus-1'))
                  target.val(current + 1 );
                else {
                  (current < 1 ) ? null : target.val(current - 1);
                }
            });
});




//submit-Form
jQuery(document).ready(function($) {
  $("#btn-submit").click(function(e) {
     $("#submit-form").show();
     return false;
  });


});



//code for side Menus
jQuery(document).ready(function() {

    //SignUp Form Show
    $("#btn-sign-up").click(function(event) {

      if($("#login").css('display')!='none'){
        $('#login').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            setTimeout(function(){ $("#login").hide(); }, 700);
          return;
      }

      if($("#signup-email").css('display')=='none'){

        if($("#sign-up").css('display')=='none'){
          $('#sign-up').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          $("#sign-up").show();
        }else{
        $('#sign-up').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        setTimeout(function(){ $("#sign-up").hide(); }, 700);
      }

    }else{

        $('#signup-email').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        setTimeout(function(){ $("#signup-email").hide(); }, 700);

        $('#sign-up').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        
        setTimeout(function(){ $("#sign-up").show(); }, 700);

    }


    });



    //Login Form Show
      $("#btn-login").click(function(event) {


        if($("#signup-email").css('display')=='none' && $("#sign-up").css('display')=='none'){
          if($("#login").css('display')=='none'){
            $('#login').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            $("#login").show();

        
        //$('#sign-up').animate({right:'200px'});
          }else{
            $('#login').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            setTimeout(function(){ $("#login").hide(); }, 700);
        
          }
        }

    });


      //Login with Email Form Show
      $("#btn-login-email").click(function(event) {


        if($("#signup-email").css('display')=='none' && $("#sign-up").css('display')=='none'){
          if($("#login-email").css('display')=='none'){
            $('#login').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            setTimeout(function(){ $("#login").hide(); }, 700);

            $('#login-email').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            
            setTimeout(function(){ $("#login-email").show(); }, 700);

        
        //$('#sign-up').animate({right:'200px'});
          }else{
            $('#login-email').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            setTimeout(function(){ $("#login").hide(); }, 700);
        
          }
        }

    });
//Back button to Show Login Again
      $("#btn-back-login").click(function(event) {
        //alert("hi");
        $('#login-email').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            
            setTimeout(function(){ $("#login-email").hide(); }, 700);

        $('#login').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        
        setTimeout(function(){ $("#login").show(); }, 700);

    });


//New User Click

  $("#newUser1").click(function(e) {

    if($("#signup-email").css('display')=='none' && $("#sign-up").css('display')=='none'){
          if($("#login-email").css('display')=='none'){
            $('#login').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            setTimeout(function(){ $("#login").hide(); }, 700);

            $('#sign-up').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            
            setTimeout(function(){ $("#sign-up").show(); }, 700);

        
        //$('#sign-up').animate({right:'200px'});
          }
      }
        
  });
   $("#newUser2").click(function(e) {

    if($("#signup-email").css('display')=='none' && $("#sign-up").css('display')=='none'){
            $('#login-email').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            setTimeout(function(){ $("#login-email").hide(); }, 700);

            $('#sign-up').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
            
            setTimeout(function(){ $("#sign-up").show(); }, 700);

        
      }
        
  });





      //SignUp with Email Form Show
      $("#btn-signup-email").click(function(event) {

      if($("#signup-email").css('display')=='none'){
        $('#sign-up').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        setTimeout(function(){ $("#sign-up").hide(); }, 700);

        $('#signup-email').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        setTimeout(function(){ $("#signup-email").show(); }, 700);

        
        //$('#sign-up').animate({right:'200px'});
      }

    });
      //Back button to Show Signup Again
      $("#btn-back-signup").click(function(event) {
        //alert("hi");
        $('#signup-email').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        setTimeout(function(){ $("#signup-email").hide(); }, 700);

        $('#sign-up').removeClass('animated slideOutRight').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        
        setTimeout(function(){ $("#sign-up").show(); }, 700);

    });





    $(document).mouseup(function(e){

      if($("#sign-up").css('display')!='none'){
        var container = $("#sign-up");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $('#sign-up').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ $("#sign-up").hide(); }, 700);
          }

      }

      if($("#login").css('display')!='none'){
        var container = $("#login");

          // If the target of the click isn't the container
          if(!container.is(e.target) && container.has(e.target).length === 0){
              $('#login').removeClass('animated slideInRight').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
          setTimeout(function(){ $("#login").hide(); }, 700);
          }

      }

        
    });


    
  });




// owl
