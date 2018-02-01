import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  @ViewChild('sideNavButton') sideNavButton;

  constructor() { }

  ngOnInit() {

  }

  onClickSidePanel(btn) {

  }
}
