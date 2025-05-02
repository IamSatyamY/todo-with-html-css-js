let lists = document.querySelector(".lists");
let clear_all_btn = document.querySelector("#clearAllBtn");
let input_box = document.querySelector("#inputBox");

input_box.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        addList();
    }
})

function addList(){
    
    let input_value = input_box.value;
    
    if(input_value.length > 0){
        lists.innerHTML += `<li>${input_value}</li>`;
        input_box.value = "";
        clear_all_btn.style.display = "inline";
        input_box.placeholder="Add Item";
        input_box.className="";
    }
    else{
        input_box.placeholder="Enter some value first";
        input_box.className="enter-somevalue";
    }

    if(lists.children.length>0){
        lists.style.backgroundColor="#18082c";
    }
}
document.querySelector("#addBtn").addEventListener("click",addList);

function clearLists(){
    lists.innerHTML="";
    lists.style.backgroundColor="transparent";
    clear_all_btn.style.display="none";
};

clear_all_btn.addEventListener("click",clearLists)