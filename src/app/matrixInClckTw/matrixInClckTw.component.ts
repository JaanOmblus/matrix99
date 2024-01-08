import { Component } from '@angular/core';

@Component({
  selector: 'matrix-inclcktw',
  templateUrl: './matrixInClckTw.component.html',
  styleUrls: ['./matrixInClckTw.component.css']
})
export class InClckTwComponent {
  currentValue=0
  gaugeType = "arch";
  gaugeValue = 58.3;
  gaugeLabel = "Kohustuste seis";   //pöördväärtus bilansi struktuuri mudelilt, selgitus lisada
  gaugeAppendText = "%";
  gaugeSize = 270;
  //gaugeType = "arch";
  gaugeCap = "round";
  gaugeThick = 27;
  gaugeForegroundColor = 'red';
  gaugeBackgroundColor = 'rgb(30, 20, 75, 0.96)';
  gaugeDuration = 3000;
  gaugeAnimate = true;
  gaugeAriaLabel = "bla";
 // gaugeMargin = 20;

  thresholdConfig = {
    '1': {color: 'green'},
    '41': {color: 'yellow'},
    '81': {color: 'red'}
};

storagesseGauge: any;

gaugeChange(event){
  this.gaugeValue=this.currentValue; 
  this.storagesseGauge = this.currentValue;
  localStorage.setItem("gauge", this.storagesseGauge); 
}

}


//https://mohammedfahimullah.medium.com/how-to-create-a-gauge-in-angular-5b1908139575

//https://www.npmjs.com/package/ngx-gauge

//https://www.npmjs.com/package/ngx-gauge