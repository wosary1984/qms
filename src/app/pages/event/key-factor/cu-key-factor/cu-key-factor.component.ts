import { Component, OnInit } from '@angular/core';
import { FactorDataService } from 'src/app/service/data/factor-data.service';

@Component({
  selector: 'app-cu-key-factor',
  templateUrl: './cu-key-factor.component.html',
  styleUrls: ['./cu-key-factor.component.scss']
})
export class CuKeyFactorComponent implements OnInit {

  message: any;
  factor: any;
  constructor(private factorDataService: FactorDataService) { }

  ngOnInit() {
    this.factorDataService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

}
