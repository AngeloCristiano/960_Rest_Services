import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link: string = ''

  constructor(private http: HttpClient){} //crea oggetto da solo

  mostra(){
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe( //richiesta al server
      res => {  //metodo eseguito in caso di successo
        this.link = res['message'] 
      },
      err =>{  //metodo eseguito in caso di errore
        console.log(err)
      }
    )
  }
}
