import * as components from "./components/index.js";

function parseString(input) {
  const regex = /^([a-zA-Z0-9]+):([a-zA-Z0-9]+):([^)]+)(?::(\d+))?$/;
  const match = input.match(regex);

  if (match) {
    const [_, component, action, id, index] = match;
    return {
      component,
      action,
      id,
      index: index ? parseInt(index, 10) : undefined
    };
  } else {
    return null;
  }
}



window.addEventListener("click",function(event){
  let target = event.target
  let dataset = target.dataset
  
  if(dataset.taction){
    let raw = dataset.taction
    let split_str = raw.split(":")
    
    let info ={
      component:split_str[0] ?? "",
      action:split_str[1] ?? "",
      id:split_str[2] ?? "",
      index:parseInt(split_str[3] ?? "0")
    }
    
    
    
    let element= document.querySelector(info.id)
    for (let component in components) {
      if(components[component].name == info.component){
        components[component].injector(element,info.action,info,target)
      }
    }
  }
})