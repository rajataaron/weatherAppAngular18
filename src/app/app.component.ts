import { Component } from '@angular/core';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  city: string = ''

  currentDate: any = '';
  currentTime: string = '';

  weatherData: any = null;
  iconUrl: string = '';

  constructor(private service: HttpService){

  }

  ngOnInit() {
    this.currentDate = new Date();
  }

  getWeather() {
    this.service.searchWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        const iconCode = data.weather[0].icon;
        this.iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      }
    })
  }

}
