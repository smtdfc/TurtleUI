export class TurtleUIAccordion{
  constructor(element,configs={}){
    this.element = element
    this.configs = configs
  }
  
  open(){
    this.element.classList.add("active")
  }
  
  close(){
    this.element.classList.remove("active")
  }
  
  toggle(){
    this.element.classList.toggle("active")
  }
  
  static name = "accordion"
  static injector(element,action,data={}){
    let component= new TurtleUIAccordion(element)
    switch (action) {
      case 'open':
        component.open()
        break;
      case 'close':
        component.close()
        break;
      case 'toggle':
        
        component.toggle()
        break;
      
      default:
        break
    }
  }
}