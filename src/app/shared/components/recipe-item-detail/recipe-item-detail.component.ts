import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeItem } from 'src/app/interfaces/recipe-interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-recipe-item-detail',
  templateUrl: './recipe-item-detail.component.html',
  styleUrls: ['./recipe-item-detail.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class RecipeItemDetailComponent implements OnInit {

  public selectRecipe = [
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'As for me, I cant say that food is just a fuel but its surely',
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    },
    {
      header: 'Lorem ipsum dolor sit amet',
      title: 'I suppose I have traditional meals such as breakfast, lunch and dinner'
    }
  ]

  public recipeObj!: any

  constructor(
    private route: ActivatedRoute,
    private service: RecipeService,
    private confirmationService: ConfirmationService, private messageService: MessageService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getRecipeId(Number(id)).subscribe({
      next: (recipe: RecipeItem) => {
        this.recipeObj = recipe
      }
    })
  }


  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },

    });
  }





}
