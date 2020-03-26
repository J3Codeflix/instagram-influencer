import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CreateTemplateComponent } from '../create-template/create-template.component';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  }
  
  openModal(user) {
    const modalRef = this.modalService.open(CreateTemplateComponent);
    modalRef.componentInstance.user = user;
}
}
