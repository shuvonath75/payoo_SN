// show cashout form

document.getElementById('btn-showCO').addEventListener('click',function()
{
    document.getElementById('CO-form').classList.remove('hidden');
    document.getElementById('AM-form').classList.add('hidden');

})

// show Add-Money Form
document.getElementById('btn-showAM').addEventListener('click',function()
{
    document.getElementById('AM-form').classList.remove('hidden');
    document.getElementById('CO-form').classList.add('hidden');

})