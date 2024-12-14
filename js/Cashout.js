document.getElementById('btn-cashout').addEventListener('click',function(event)
{
    event.preventDefault();
    const AM= document.getElementById('C-ammount').value;
    const pin=document.getElementById('C-pinnumber').value;

    // console.log(AM,pin);
    if(pin==='1234')
    {
        const MA=document.getElementById('mainammount').innerText;

        const MAN=parseFloat(MA);
        const AMN=parseFloat(AM);

        const newB= MAN-AMN ;

        document.getElementById('mainammount').innerText=newB;

    }
    else
    {
        alert('Wrong pin,Try again');
    }
})