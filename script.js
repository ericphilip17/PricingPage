
const toggleCol = document.querySelector(".toggle-col");
const toggleCells = document.querySelector(".hide-cells");
const cascadeRows = document.querySelectorAll(".tog");
var toggling = document.querySelector(".toggling");


function toggleRows(){
    Array.from(toggling).forEach(function(item){
        item.addEventListener('click', function(e){
            
            const changeIcon = e.target.firstElementChild;
            const togglingItem = e.target.parentElement.parentElement.lastElementChild;
            changeIcon.classList.toggle("rotateCaret");

            // console.log(changeIcon);

            console.log(togglingItem.innerHTML);

            const toggleList = e.target.parentElement.parentElement;

            console.log(toggleCells.parentElement.innerHTML)

        })
    })


}
toggleRows();

Array.from(cascadeRows).forEach(function(row){
    var arr = [];
    arr.push("row");
    

    for(var i=0; i>=arr.length; i++){
        // cascadeRows.style.display = 'none';
        console.log(arr.length);
    }
})