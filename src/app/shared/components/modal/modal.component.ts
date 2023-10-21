import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
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

  public modalVariable!: string;
  public id!:number;
  public access = false;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private messageService: MessageService,
    private serviceRecipe:RecipeService,
    private route:ActivatedRoute) {

    this.modalVariable = this.data.isRecipe
    this.id = this.data.id
  }

  public deleteItem(id?:number){
    console.log(id);
    
  }



}
