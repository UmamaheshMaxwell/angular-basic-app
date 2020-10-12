import { Component } from '@angular/core';


@Component({
  selector: '.app-root',
  // template: `
  //             Welcome {{firstName}} {{lastName}}
  //             <h1>Component using Inline HTML</h1>
  //             <p>Lorem ipsum dolor sit amet.</p>
              
  //           `
  // ,
  // styles: [
  //   `  h1 {
  //           color: #0000FF;
  //         }

  //     p {
  //       background-color:crimson;
  //       width:300px;
  //       height:100px;
  //       color:white;
  //       font-weight:bold;
  //     }
  //   `
  // ]
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My First web Angular App';
  message = "Angular is a great javascript framework";
  count = 1;
  firstName = "Umamaheswararao";
  lastName ='Mahesh'
  isAdmin = true;
  isDisabled= false;
  url="https://github.com/";
  target="_blank"
  counter = 0;
  textMessage="This data is for my textbox"
  skill: string = "Devloper"

  clickMe(){
    this.counter++;
  }

  getData(){
    console.log('On blur event')
    console.log(this.textMessage)
  }


}
