import { Component, OnInit,OnDestroy  } from '@angular/core';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy  {
  source = interval(3000);
  subscription:Subscription;
  currentWord: string = '';
  letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  isPalindrome:boolean = false;
  includesZero:boolean = false;
  isNumber:boolean = false;
  ngOnInit(){
    this.subscription = this.source.subscribe( i =>{
      this.createWord()
      console.log(this.currentWord);
    })
  }
  createWord() {
    this.currentWord = ''
    for (var i = 0; i < 5; i++) {
      this.currentWord += this.letters.charAt(Math.floor(Math.random() * this.letters.length));
    }
    this.isPalindrome = this.palindromeCheck(this.currentWord);
    this.includesZero = this.includesZeroCheck(this.currentWord);
    this.isNumber = this.isNumberCheck(this.currentWord);
  }
  
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
  palindromeCheck(string:string){
    return string.split('').reverse().join('') === string;
  }
  includesZeroCheck(string:string){
    return string.includes('0');
  }
  isNumberCheck(string:string){
    return /^\d+$/.test(string);
  }
}
