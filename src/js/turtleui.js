const Actions ={
	"toggle":function(args){
		document.querySelector(args.toggle).classList.toggle("active")
	}
}

window.addEventListener("click",function(e){
	
	let args = e.target.dataset
	if(args.toggle){
		Actions.toggle(args)
	}
})