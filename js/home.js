document.getElementById('btn-Addmoney').addEventListener('click',function(event)
{
    event.preventDefault();
    const ammount = document.getElementById('ammount').value;
    const PIN=document.getElementById('pinnumber').value;
    

    if(PIN==='1234')
    {
        const mainammount = document.getElementById('mainammount').innerText;
        const A = parseFloat(ammount);
        const MA = parseFloat(mainammount);

        const Total = MA + A;

        console.log(Total);
        console.log('Money Adding');
    }
    else
    {
        alert('Please Try Again!!')
    }

})