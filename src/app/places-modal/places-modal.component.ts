import { Component, OnInit, Input } from '@angular/core';
import { Places } from '../model/places.model';
import { ApiService } from '../../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-places-modal',
  templateUrl: './places-modal.component.html',
  styleUrls: ['./places-modal.component.css']
})
export class PlacesModalComponent implements OnInit {

  place: Places;
  @Input() places:any;

  constructor(
    private api: ApiService,
    public modalService: NgbModal
  ) { 
    this.place = this.places;
  }

  ngOnInit(): void {

  }

}
