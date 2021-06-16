import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
<<<<<<< HEAD:src/app/header/header.component.ts

  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
  editingMission: boolean = false;
  
=======
  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
>>>>>>> 33aadfdcf874ba068ea4ab1cee55b9bd1e31c5cc:mission-planning-dashboard/src/app/header/header.component.ts
  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }

}
