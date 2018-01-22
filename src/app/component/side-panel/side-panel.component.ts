import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickSidePanel(el) {
    el.sideNav('show');
  }
}
