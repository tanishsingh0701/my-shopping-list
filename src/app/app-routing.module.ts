import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";


const appRoutes:Routes=[
{path:'', redirectTo:'/recipes',pathMatch: 'full'},
// {path:'recipes',loadChildren: () => import('./recipes/recipes.module')
// .then(m => m.RecipesModule)
// }

{path: 'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},
// {path: 'shopping-list',loadChildren:'./shopping-list/shopping-list#ShoppingListModule'},
{path: 'auth',loadChildren:'./auth/auth.module#AuthModule'}

];

@NgModule(
    {
        imports:[RouterModule.forRoot(appRoutes)],
        exports:[RouterModule]

    })
export class AppRoutingModule
{

}