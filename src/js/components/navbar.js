export class TurtleUINavbar{
  constructor(element){
    this._element = element
  }
  
  static generate(element){
    return new TurtleUINavbar(element)
  }
  
  static actions ={
    toggle:{
      "navbar":function(target,data){
        let navbar = TurtleUINavbar.generate(target)
        navbar.toggleMenu()
      }
    }
  }
  
  
  openMenu(){
    this._element.classList.add("active")
  }
  
  
  closeMenu(){
    this._element.classList.remove("active")
  }
  
  toggleMenu(){
    this._element.classList.toggle("active")
  }
}