// event ham=ndler
document.getElementById('btn-login').addEventListener('click', function(event){
    // prevent default behavior
    event.preventDefault();
    console.log('log in')

    // get the PH num
    const PHN=document.getElementById('phonenumber').value;
    const PIN=document.getElementById('pinnumber').value;
    console.log(PHN,PIN);//PHN->Phone Number

    if(PHN==='01790437465' && PIN==='1234')
    {
        console.log('Welcome , i love you');
        window.location.href = '/home.html';
    }
    else{
        alert('Fuck you');
    }
})