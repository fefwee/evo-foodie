import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, ToastModule],
  providers: [MessageService]
})
export class ModalComponent {


  @Output() changeSubmitModal = new EventEmitter();

  public submitText!: string;
  public id!: number;
  public access = false;
  public header!: string
  public content!: string

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      submitBtn: string
      idItem: number
      header: string
      content: string
    },
    private messageService: MessageService,
    private serviceRecipe: RecipeService,
    private route: ActivatedRoute) {

    const { header, content, idItem, submitBtn } = this.data
    this.submitText = submitBtn
    this.id = idItem
    this.header = header
    this.content = content
  }

  public deleteItem() {
    this.changeSubmitModal.emit(this.id)
  }



}
