import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {
  apiKey:string;
  private url:string="https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,gender";
  constructor(private http:HttpClient) { 
  	this.apiKey='f173b18dd5594cd6ad27ce6ccdb92be9';
  }
  getPersonAge(imgUrl:string){
  	const headers=new HttpHeaders({
		'Content-Type':'application/json',
    	'Ocp-Apim-Subscription-Key': this.apiKey  		
  	})
  	// const body = new HttpParams().set('url', imgUrl)
  	return this.http.post(this.url,{url:imgUrl},{headers : headers});
  }
}
