import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'convertissor';
  dec: number = 4;
  bin: any = 0;

  ngOnInit(){

  }

  binaryToDecimal(conv: any){
    this.bin = conv;

    const array = [];
    let res = 0;

    for( let i=conv.length-1; i>=0; i--){
      if(conv[i] == '1'){
        res = res + Math.pow(2, conv.length-i-1);
      }
    }
    this.dec = res;
  }

  decimalToBinary(conv: number){
    const array = [];

    this.dec = conv;  

    while(conv>=1){
      array.unshift(conv%2);
      conv = Math.floor(conv/2);
    }
    this.bin = array.join('');
  }

  onSubmit(f: NgForm){
    console.log(f.value);

    if(f.value.baseConv == 'Binaire'){
      for(let i=0; i<f.value.conv.length; i++){
        //Teste si le nombre binaire est valide
      }
      this.binaryToDecimal(f.value.conv);
    }
    else {
      this.decimalToBinary(f.value.conv);
    }
  }
}
