import { Component } from '@angular/core';
import { MatDialogRef,  } from '@angular/material/dialog';

@Component({
  selector: 'app-modalcontato',
  templateUrl: './modalcontato.component.html',
  styleUrls: ['./modalcontato.component.scss']
})
export class ModalcontatoComponent {
  constructor(public dialogRef: MatDialogRef<ModalcontatoComponent>
){

}
  cancel(): void{
    this.dialogRef.close();
  }

}
