import {Component, OnInit} from '@angular/core';
import {TimeService} from './shared/time/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private timeService: TimeService) {
  }

  ngOnInit(): void {
    this.title = this.timeService.getNow();
  }
}
