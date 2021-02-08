import { ThisReceiver } from '@angular/compiler';
import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
	selector: 'app-modal-window',
	templateUrl: './modalWindow.component.html',
	styleUrls: ['./modalWindow.component.css']
})



export class ModalWindowComponent{
	title = ''
	content = ''

	@Input() cards
	@Output() cancelAddCard = new EventEmitter<boolean>();

	inputTitleHandler(event){
		this.title = event.target.value
	}

	inputContentHandler(event){
		this.content = event.target.value
	}

	// Send false to app component for toggleModalWindow 
	cancelAddingCard(falseVal){
		this.cancelAddCard.emit(falseVal)
	}

	addCard(){
		this.cards.push({title: this.title, content: this.content})
	}

}