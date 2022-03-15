// Import modules

import { printStore } from './storeFill.js'
import {expandInfo} from './expandInfo.js'

// Calling module printStore
printStore()


//Calling module expandInfo
let containerStore = document.getElementById("row.")
containerStore.addEventListener("click",function(event){
    let infoProductModal = new bootstrap.Modal(document.getElementById('infoProductModal'))
    expandInfo(event)
    if(event.target.classList.contains("btn")){
    infoProductModal.show()}
})