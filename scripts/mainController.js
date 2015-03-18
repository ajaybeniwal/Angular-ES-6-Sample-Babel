class MainController{
	constructor(MainService){
		MainService.getuser().then(data=>{
			this.priceList=data.data.feed.entry;
		});
	}
}

MainController.$inject=['MainService']

export default MainController;