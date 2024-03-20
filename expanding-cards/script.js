const panels=document.querySelectorAll(".panel")
panels.forEach((panel)=>{
    panel.addEventListener( "click", ()=>{
        removeActiveClasss()
        panel.classList.add("active")
    })

})
const removeActiveClasss=()=>{
    panels.forEach((el)=>{
        el.classList.remove("active")
    })
}