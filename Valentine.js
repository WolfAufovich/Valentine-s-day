var Dialog = document.getElementById('dialog');
var Cat = document.getElementById('cat');
var Button_Yes = document.getElementById('button_yes');
var Button_No = document.getElementById('button_no');
var Cup = document.getElementById('cup');
var Letter = document.getElementById('later');
var New_Message = document.getElementById('new_message');
var Block_Button = document.getElementById('block_button');
var Love_Letter = document.getElementById('love_letter');
var Gift_Area = document.getElementById('gift_area');
var Gift = document.getElementById('gift');
var Heart_Block = document.getElementById('heart_block');

var Letter_Space = document.getElementById('letter_space');
var Pop_up = document.getElementById('pop-up');
var Button_Close = document.getElementById('button_close');


setTimeout(()=>{
    Letter_Space.style.display = "flex";
    Pop_up.style.display = "flex";
    Letter_Space.style.animation = 'opacity_get_space 0.4s linear';
    Letter_Space.style.opacity = 0.9;
    Pop_up.style.animation = 'opacity_get 0.4s linear';
    Pop_up.style.opacity = 1;
    Button_Close.addEventListener("click", ()=>{
        new Audio('Audio/click.mp3').play();
        Letter_Space.style.display = "none";
        Pop_up.style.display = "none";
    })
},500)

var run_sound = new Audio('Audio/nose.mp3');
run_sound.volume = 0.7;
Cat.onclick = function(){
    run_sound.play();
    Dialog.style.animation = 'opacity_get 0.3s linear';
    setTimeout(()=>{
        Dialog.style.opacity = 1;
        setTimeout(()=>{
            Dialog.style.animation = 'opacity_out 0.3s linear';
            setTimeout(()=>{
                Dialog.style.opacity = 0;
            },200)
        },1000)
    },250)
};

var run_good_end_sound = new Audio('Audio/crowd_small_chil_ec049202_9klCwI6.mp3');
run_good_end_sound.volume = 0.7;

Button_Yes.onclick = function(){


    jQuery("document").ready(function($){
        var flakes = '',
        randomColor;
        for(var i = 0, len = 400; i < len; i++) {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        flakes += '<div class="ball" style="background: #'+randomColor;
        flakes += '; animation-duration: '+(Math.random() * 9 + 2)+'s; animation-delay: ';
        flakes += (Math.random() * 2 + 0)+'s;"></div>';
    }
    document.getElementById('confetti').innerHTML = flakes;
    });

    run_good_end_sound.play();
    Cat.src = "Image/cat-hyppy.gif";
    /*Cat.style.width = `${180}px`;*/
    Block_Button.style.display = 'none';

    document.getElementById('text').innerHTML = '<p>❤️You\'re my Valentine, princess!❤️<br>Love You so much!</p>';
    setTimeout(()=>{
        New_Message.style.display = "flex";
        New_Message.style.animation = 'up_down 0.6s linear';
        Letter.style.cursor = "pointer";
        Letter.addEventListener("click", Letter_onclick)
        function Letter_onclick() {
            document.getElementById('letter_space').style.display = "block";
            var letter_sound = new Audio('Audio/letter_sound.mp3');
            letter_sound.play();
            New_Message.style.display = "none";
            Love_Letter.style.display = "flex";
            Love_Letter.style.position = "fixed";
            document.getElementsByTagName('body')[0].style.cursor = "pointer";
            function close_love_letter(){
                Love_Letter.style.display = "none";
                document.removeEventListener("click", close_love_letter)
                Gift_Area.style.display = "flex";
                function open_gift(){
                    Gift.style.animation = 'opacity_get_gift 2s linear';
                    setTimeout(()=>{
                        Gift.style.width = `${300}px`;
                        Gift.src = "Image/gift_open.png";
                    },1000)
                    document.removeEventListener("click", open_gift)
                    setTimeout(()=>{
                        Gift.style.opacity = 0.5;
                        Heart_Block.style.animation = 'opacity_get_heart 2s linear';
                        Heart_Block.style.display = "block";
                        setTimeout(()=>{Heart_Block.style.opacity = 1;},2000)
                        function close_all(){
                            document.removeEventListener("click", close_all)
                            Heart_Block.style.display = "none";
                            document.getElementById('letter_space').style.display = "none";
                            Gift_Area.style.display = "none";
                            document.getElementsByTagName('body')[0].style.cursor = "default";
                            Letter.removeEventListener("click", Letter_onclick)
                        }
                        document.addEventListener("click", close_all) 
                    }, 2200)



                    
                  
                }
                document.addEventListener("click", open_gift)
            };
            setTimeout(()=>{
                document.addEventListener("click", close_love_letter)
            }, 1000)

        }
    },2000)
}


var run_good_sound = new Audio('Audio/Lost_Frequencies_-_Reality_53298748.mp3')
run_good_sound.volume = 0.5;
Button_Yes.onmouseover = function(){
    run_good_sound.play();
}
Button_Yes.onmouseleave = function(){
    run_good_sound.pause();
}

var run_bad_sound = new Audio('Audio/John_Williams_Duel_Of_The_Fates_к_фильму_Звездные_войны_Месть_ситхов.mp3')
function start_run_bad_sound(){
    run_bad_sound.play();
}
Button_No.addEventListener("mouseover", start_run_bad_sound);

function end_run_bad_sound(){
    run_bad_sound.pause();
}
Button_No.addEventListener("mouseleave", end_run_bad_sound);



    Button_No.addEventListener("click", () => {
        Button_No.removeEventListener("mouseover", start_run_bad_sound);
        Button_No.removeEventListener("mouseleave", end_run_bad_sound)
        run_bad_sound.pause();
        new Audio('Audio/error.mp3').play();
        const btn = document.getElementById("button_no");
 
        const btnRect = btn.getBoundingClientRect();

        const centerX = (window.innerWidth - btnRect.width) / 2;
        const centerY = (window.innerHeight - btnRect.height) / 2;

        btn.style.position = "fixed";
        btn.style.left = `${centerX}px`;
        btn.style.top = `${centerY}px`;
        function getMouseCoords(event, btnRect) {
        return {
            x: event.clientX - (btnRect.left + window.scrollX + btnRect.width / 2),
            y: event.clientY - (btnRect.top + window.scrollY + btnRect.height / 2),
        };
        }
        function calculateNewPosition(deltaX, deltaY, btnRect) {
            let newX = btnRect.left + deltaX + window.scrollX;
            let newY = btnRect.top + deltaY + window.scrollY;

            newX = Math.max(0, Math.min(newX, window.innerWidth - btnRect.width));
            newY = Math.max(0, Math.min(newY, window.innerHeight - btnRect.height));

            return { newX, newY };
        }

        btn.addEventListener("mousemove", (event) => {
            const btnRect = btn.getBoundingClientRect();
            const maxDistance = 150;
            const mousePos = getMouseCoords(event, btnRect);

            const deltaX = mousePos.x > 0 ? -maxDistance : maxDistance;
            const deltaY = mousePos.y > 0 ? -maxDistance : maxDistance;

            const { newX, newY } = calculateNewPosition(deltaX, deltaY, btnRect);

            btn.style.left = `${newX}px`;
            btn.style.top = `${newY}px`;
            });
  });

