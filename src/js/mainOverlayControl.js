export class MainOverlayControl {
  static open() {
    TurtleUIData.mainOverlayCount++
    
    document.getElementById("turtleui-main-overlay").classList.add("active")
  }

  static close() {
    TurtleUIData.mainOverlayCount--
    if (TurtleUIData.mainOverlayCount <= 0) {
      document.getElementById("turtleui-main-overlay").classList.remove("active")
      TurtleUIData.mainOverlayCount = 0
    }
  }
}