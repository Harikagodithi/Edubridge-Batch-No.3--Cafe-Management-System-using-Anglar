import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {

  constructor() { }

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % 4; // 4 slides
    }, 4000); // 4 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
