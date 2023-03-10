let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) 
{
    item.addEventListener('click', (e) => 
    {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') 
        {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        
    }
        else if(buttonText=='Del')
        {
            //console.log(screenValue);
            //screenValue.substring(0,screenValue.length- 1);
           screenValue= screenValue.substring(0, screenValue.length - 1);
            //console.log(screenValue);
            screen.value=screenValue
        }
        else if (buttonText == 'C') 
        {
            screenValue = "";
            screen.value = "";
        }
        else if (buttonText == '=') 
        {
            screen.value = eval(screenValue);
            screenValue='';
        }
        else 
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })

}