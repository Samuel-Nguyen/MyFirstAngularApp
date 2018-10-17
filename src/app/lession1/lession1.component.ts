import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lession1',
	templateUrl: './lession1.component.html',
	styleUrls: ['./lession1.component.css']
})
export class Lession1Component implements OnInit {

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		},2000);
	}

	ngOnInit() {
	}

	/* Declare Variable*/
	serverStatus :String = 'Offline';
	allowNewServer = false;
	serverCreationStatus = 'This is no server binding now!';
	serverPort :number = 0;
	serverHost :String = '';
	serverPass :String = '';
	isDisplay :boolean =  false;
	ngTemplate :String = '';
	ngTemplateCheck :boolean = false;

	/*Declare Getter Setter*/
	getServerStatus(){
		return this.serverStatus;
	}


	onGetData(){
		if(this.serverHost != '' && this.serverPass != ''){
			if(this.serverPort > 1000){
				console.log(this.serverHost + this.serverPass + this.serverPort);
				this. isDisplay = true;
				this.serverStatus = 'Online';
				this.serverCreationStatus = 'Server start with the port: ' + this.serverPort;
			}
		}else return;
	}

	onStopServer(){
		this.isDisplay =false;
		this.serverStatus = 'Offline'
		this.serverPort = 0;
		this.serverHost = '';
		this.serverPass = '';
		this.serverCreationStatus = 'This is no server binding now!';
	}
	getTemplate(){
		if(this.ngTemplate != ''){
			this.ngTemplateCheck = true;
		}else{
			this.ngTemplateCheck = false;
		}
	}
}
