import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';


export interface FaceAttibutes{
	gender:string,
	age:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  imgUrl:string='';
  faceAttributes: Array<FaceAttibutes>=[];
  constructor(private data:DataService){

  }

  getPersonAge(){
  	this.data.getPersonAge(this.imgUrl).subscribe(data=>{
  		// this.faceAttributes=data[0]['faceAttributes']
  		data.forEach((key)=>{
  			this.faceAttributes.push(key['faceAttributes'])
  		})
  	})
  }
}
