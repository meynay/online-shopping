'use strict';

let tagsInput = document.getElementById('tags');
let tagsList = []
let tagsPlace = document.getElementById('tagsPlace');
tagsInput.addEventListener('keyup', function(event){
    if(event.key == "Enter"){
        let tag = event.target.value.replace(/\s+/g,' ');
        if(tag != "" && !tagsList.includes(tag)){
            tagsList.push(tag);
            let newtag = `<li class="tag">${tag}</li>`;
            tagsPlace.insertAdjacentHTML("afterbegin", newtag);
        }
        event.target.value="";
    }
})

let hiddenpart = document.querySelector(".colbase.hiddenfirst");
function visible(){
    hiddenpart.style.display = "flex";
}
function hidden(){
    hiddenpart.style.display = "none";
}

let box = document.getElementById('pay');
box.addEventListener('change', function(){
    if(this.checked){
        visible();
    }
    else{
        hidden();
    }
})

let v1 = document.getElementById('v1');
let v1properties = document.getElementById('selectthis');
function changeinner(val){
    let inner = `<label for="${val}">`;
    if (val == "color"){
        inner += `رنگ`;
    }
    else if (val == "width"){
        inner += `طول`;
    }
    else if (val == "height"){
        inner += `ارتفاع`;
    }
    else if (val == "rgb") {
        inner += `رنگ بندی RGB`;
    }
    inner += `</label><select id="${val}"><option val="">انتخاب ویژگی</option></select>`;
    console.log(inner);
    v1properties.innerHTML = inner;
}
v1.addEventListener('change', function(event){
    let val = event.target.value;
    changeinner(val)
})

let v2 = document.getElementById('v2');
let select = document.getElementById('select');
function addinner(val) {
    let inner = `<label for="${val}">`;
    if (val == "color"){
        inner += `رنگ`;
    }
    else if (val == "width"){
        inner += `طول`;
    }
    else if (val == "height"){
        inner += `ارتفاع`;
    }
    else if (val == "rgb") {
        inner += `رنگ بندی RGB`;
    }
    inner += `</label><select id="${val}"><option val="">انتخاب ویژگی</option></select>`;
    console.log(inner);
    select.insertAdjacentHTML("beforeend", inner);
}

v2.addEventListener('change', function(event){
    let val = event.target.value;
    addinner(val)
})