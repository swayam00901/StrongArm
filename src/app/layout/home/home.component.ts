import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private chartData: Array<any>;

  constructor() { }

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `SafetyIndex ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

  generatePieData() {
    var arPercentages = [];

        for (var i = 0; i < 5; i++) {
          arPercentages.push(Math.random() * 20 + 100);
        }
        this.chartData = [
          { name: 'IE', percent: arPercentages[0] },
          { name: 'Chrome', percent: arPercentages[1] },
          { name: 'Safari', percent: arPercentages[2] },
          { name: 'Firefox', percent: arPercentages[3] },
          { name: 'Others', percent: arPercentages[4] }
        ];



  }


}
