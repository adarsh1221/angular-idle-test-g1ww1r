import { Component } from '@angular/core';
import { ActivityMonitorService } from './activity-monitor.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(activityMonitor: ActivityMonitorService) {
    activityMonitor.startWatching();
    
    // Start watching when user idle is starting.
    activityMonitor.onTimerStart().subscribe(count => console.log(count));
    
    // Start watch when time is up.
    activityMonitor.onTimeout().subscribe(() => console.log('Time is up!'));
  }
}