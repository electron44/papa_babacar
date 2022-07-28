const links_item = document.querySelectorAll('.links-item')
const links_active = document.getElementsByClassName('active')

links_item.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        links_item.forEach((item)=>{
            item.classList.remove('active')
        })
       element.classList.toggle('active')
    })
})