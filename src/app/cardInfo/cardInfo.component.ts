import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'card-info',
	templateUrl: './cardInfo.component.html',
	styleUrls: ['./cardInfo.component.css']
})



export class CardInfoComponent{
	title=""
	content=""


	
	constructor(private route: ActivatedRoute) {
		this.route.queryParams.subscribe(params => {
			this.title = params['title'];
			this.content = params['content']
	});
	}	
	

	clearFields(){
		this.title =''
		this.content =''
	}

	changeTitle(event){
		this.title = event.target.value
	}

	changeContent(event){
		this.content = event.target.value
	}

	saveData(){

	}
}