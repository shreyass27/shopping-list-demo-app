import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(){
  	firebase.initializeApp({
  		apiKey: "AIzaSyDo0ER2MRgvLp_L85BnjV0B4QMHnA6dxMs",
   		 authDomain: "http-demo-e9ee9.firebaseapp.com"
  	})
  }

}