function toggle(){
    var date = document.querySelector('input[type="date"]');
    //date.value = '2021-11-21';
    if (date.value === '2021-11-21') {
        var blur = document.getElementById('blur');
        blur.classList.toggle('active');
        var popup = document.getElementById('popup');
        popup.classList.toggle('active');
        document.getElementById('body').style['background'] = "transparent";
        document.getElementById('blur').style['filter'] = "none";
    }
}