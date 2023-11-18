export class TurtleUIModule {
	constructor(app) {
		this.app = app
	}

	init(app) {
		this.app.router = this
		return this
	}
	
	
	
}