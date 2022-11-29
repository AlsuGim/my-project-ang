import { Component, OnInit } from '@angular/core';
import { VinilService } from '../services/vinil/vinil.service';
import { Vinil } from '../shared/models/Vinil';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  vinil: Vinil[] = [];
  constructor(private vinilService: VinilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerms'])
        this.vinil = this.vinilService.getAll().filter(vinil => vinil.name.toLowerCase().includes(params['searchTerms'].toLowerCase()));
      else
        this.vinil = this.vinilService.getAll();
    })

  }

}
