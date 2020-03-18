'use strict'
//i want to find the button =>>$('button')
$('button').on('click',function(){
//hoon al console 3ashan ashoof mata ana 3melet click
    console.log('clicked');
    //hala2 hoon bedi a3mel toggle lal ul 
    //bedi awal eshi 2ala2i alul
    $('ul').toggleClass('on');
    //toggle class lama a3mel click it put the class on when hit it again put it off
    

   //$('ul').show();
      //ba2dar a3melo betare2a tanyeh
//o ba5ali be css display:none la2no show() works with display none



//fi kaman had ba2dar a3melo eza ana 3amleh display:none 
//had be3mel fade o ana ba7aded alsor3a eli bedi yaha be ms
//$('ul').fadeIn(800);

//hala2 eza bedi atala3 3a kol 3onsor be alul la7alo
//heek had alfuncton ra7 yen3amalo invoke kol ma a3mel click 3ala al li
//o alfunction wazefto eno yetba3 altext taba3 kol shi ben3amal 3aleeh click
$('ul').on('click','li',function(){
    console.log($(this).text());
})
});



//i want to do something when i click that button =>>on('click',)

//the thing i want to do i will put it in a function
