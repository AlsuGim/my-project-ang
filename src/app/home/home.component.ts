import { Component, OnInit } from '@angular/core';
import { VinilService } from '../services/vinil/vinil.service';
import { Vinil } from '../shared/models/Vinil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vinil: Vinil[] = [];
  constructor(private vinilService: VinilService) { }

  ngOnInit(): void {
    this.vinil = this.vinilService.getAll();
  }

}
