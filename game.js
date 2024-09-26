function zoomin(){
    var selecteding = document.querySelector('#img1');
    selecteding.style.scale = "1.1"
    selecteding.style.transition = "scale 0.5s";
    console.log(selecteding);

    var selecteding = document.querySelector('#img2');
    selecteding.style.scale = "1.1"
    selecteding.style.transition = "scale 0.5s";
    console.log(selecteding);

    var selecteding = document.querySelector('#img3');
    selecteding.style.scale = "1.1"
    selecteding.style.transition = "scale 0.5s";
    console.log(selecteding);
}
function initial(){
    var selecteding = document.querySelector('#img1')
    selecteding.style = "0.5";
    selecteding.style.transition = "scale 0.5s"

    var selecteding = document.querySelector('#img2')
    selecteding.style = "0.5";
    selecteding.style.transition = "scale 0.5s"

    var selecteding = document.querySelector('#img3')
    selecteding.style = "0.5";
    selecteding.style.transition = "scale 0.5s"
}