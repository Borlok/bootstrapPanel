import {Component, Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  constructor(private modalService: NgbModal) { }

  open({content}: { content: any }) {
    const modalRef =  this.modalService.open(content, { size: 'lg' });
  }
}
