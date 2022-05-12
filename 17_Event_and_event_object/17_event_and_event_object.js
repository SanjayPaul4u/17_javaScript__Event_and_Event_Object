console.log("This tutorial is for understanding event and event object.");

let head = document.getElementById("headingId").addEventListener('click', function(element){
    console.log("You click on this heading...");
    // location.href = "https://www.codewithharry.com"
    document.getElementById("headingId").style.color ='red';
    document.getElementById("headingId").style.marginLeft ='10rem';
});
// console.log(head);


// let head2 = document.getElementById("headingId").addEventListener("click", e => {
//     console.log("You click on this Heading.........");
//     let variable = e.target;
//         variable = e.target.className;
//         variable = e.target.className;
//         variable = e.target.classList;
//         variable = Array.from(e.target.classList);
//         variable = e.target.id;

//         variable = e.offsetX;
//         variable = e.offsetY;
//         variable = e.clientX;
//         variable = e.clientY;

//     console.log(variable);//When you click then you see.
// })

