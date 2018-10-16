import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-my-server',
	templateUrl: './my-server.component.html',
	styleUrls: ['./my-server.component.css']
})
export class MyServerComponent implements OnInit {

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
	serverPort:number = 0;
	serverHost = '';
	serverPass = '';
	isDisplay =  false;

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
}
