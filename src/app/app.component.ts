import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
//  template:`
//  <div></div>
//  <h1>Hello this is inline template</h1>
//  `,
  styleUrl: './app.component.css'
  // styles:[
  //  `
  //  h1{
  //   color:red;
  //   }
  //   `,
  //   `
  //   div
  //   {
  //   width:100px;
  //   height:100px;
  //   background:blue;
  //   }`]
})
export class AppComponent {
  title = 'my-app';
  // name:string="abc";
  // sum:number=1+1;
  // url:string="https://www.istockphoto.com/en/search/2/image?mediatype=&phrase=flowers&utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fflowers%2F&utm_term=flowers";
  // sal:number=12000;
  // show():string {
  // return this.name + '-' + this.sal
  // };
  // name1:string="Ajit"
  //  btn:string="payment-btn";
  // mycls="box border"
  // isOk="true"
  text='';
  textSize=10;
  textCls='';

  setText(event:any){
    const val=event.target.value;
    this.text=val
  }
  // setSize(operation:any){
  //   if(operation===`inc`){
  //    this.textSize +=1;
  //   }
  //   else{
  //    this.textSize -=1;
  //   }
  // }
  setSize(event:any){
    const val=event.target.value;
    this.textSize=val;
  }
  setColor(event:any){
   const val=event.target.value
   this.textCls=val;
  }

}

