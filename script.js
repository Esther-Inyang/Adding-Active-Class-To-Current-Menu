
const menu = document.querySelector(".menu")
const menuLinks = document.querySelectorAll('.menu-link')
const linkContents = document.querySelector(".contents")
const titles = document.querySelectorAll('.title')


menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () =>{
        
        //For Active menuLink
        menu.querySelector(".active").classList.remove("active")
        menuLink.classList.add("active")
        
        //How to remove active if the Home is clicked??????



        //for the active TITLE that matches the active MENULINK
        titles.forEach((title)=>{
            //    console.log(title)
            if(menuLink.textContent === title.textContent){
                console.log(`${title.textContent} is a Match!`)

                //add and remove active
                const linkContent = document.querySelector("contents")

                //remove activeTitle if any
                linkContents.querySelector(".activeTitle").classList.remove("activeTitle")

                //add activeTitle
                title.classList.add("activeTitle")
            }

            
        })
    })

   
})
  
