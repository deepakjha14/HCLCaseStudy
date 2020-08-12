import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainpanelFacadeService }from '../mainpaneldata/mainpanel.facade.service';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.scss']
})
export class MainpanelComponent implements OnInit {
  

  constructor(private readonly store: Store<any>,
              private facadeService: MainpanelFacadeService
              ) {
   }

  ngOnInit(): void {
  }

}