//---------JavaScript & JQuery Custom Code by Zubair Ashraf--------------


$("#slider-range").slider({
  range: true, 
  min: 0,
  max: 3500,
  step: 10,
  values: [ 500, 2500 ],

  slide: function( event, ui ) {
    $( "#min-price").html(ui.values[ 0 ]);
    
    
    suffix = '';
    if (ui.values[ 1 ] == $( "#max-price").data('max') ){
       suffix = ' +';
    }
    $( "#max-price").html(ui.values[ 1 ] + suffix);         
  }
});


