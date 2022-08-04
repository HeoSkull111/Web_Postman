import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public flipped: boolean = false;

  public toggleFlip() {
    this.flipped = !this.flipped
  }

  constructor() { }

  ngOnInit(): void {
  }


  navigate(ref:string){
    console.log(ref)
    location.href = `/${ref}`;
  }
}
