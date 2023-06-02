// const box = document.querySelector(".box")

// window.addEventListener("DOMContentLoaded", ()=>{
//     showBoxes()
// });

// function showBoxes(){
//     fetch("data.json")
//     .then((data)={
//     })
//     .then((item)=>{
//         let displayBox = item.map((item)={
//             return `<section class="box ${item.box}">
//             <section class="container">
//               <div class="img"><img src=${item.logo} width="100" height="100" alt=""></div>
              
//               <article class="content">
//                 <article class="header">
//                   <p>${item.company}</p>
//                   <button class="new">New!</button>
//                 </article>
                
//                 <div>
//                   <h3>${item.position}</h3>
//                   <p class="time">${item.posteAt}   •   ${item.contract}   •   ${item.location}</p>
//                 </div>
//               </article>
              
//             </section>
//             <aside ${item.languages}>
//               <a href="">Frontend</a>
//               <a href="">Junior</a>
//               <a href="">React</a>
//               <a href="">Sass</a>
//               <a href="">JavaScript</a>
//             </aside>
//           </section>`
//         })
//         displayBox = displayBox.join("")
//         console.log(displayBox);
//         box.innerHTML = displayBox
//     })
// }