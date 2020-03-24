import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  public user = {
    name: 'Izzat Nadiri',
    age: 26
  }

  constructor(
    public modalService: NgbModal
  ) { }

  ngOnInit(){
    console.log(this.user);
  }

}
