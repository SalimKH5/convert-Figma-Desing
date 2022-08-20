
function toggle_close(){
    if (document.getElementById('Menu').classList.contains('active'))
    {
        document.getElementById('Menu').classList.remove('active')
    }
}


function toggle_open(){
    
    document.getElementById('Menu').classList.add('active')
    
}