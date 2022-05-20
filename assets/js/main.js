const open_mobile = function(b){
    if (b.getAttribute('style') == 'transform: rotate(90deg);'){
        document.querySelector('.header-right').classList.remove('opened');
        b.style = '';
    }else{
        document.querySelector('.header-right').classList.add('opened');
        b.style = 'transform: rotate(90deg);';
    }
}

document.querySelector('.mobile_trigger').onclick = function(){
    open_mobile(this);
}