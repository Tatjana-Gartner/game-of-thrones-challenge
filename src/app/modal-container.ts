import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-container',
  template: ''
})
export class ModalContainerComponent implements OnDestroy {
  destroy = new Subject<any>();
  currentDialog: any;
  redirectUrl!: string | null;

  constructor(
    private modalService: NgbModal,
    route: ActivatedRoute,
    router: Router
  ) {
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}