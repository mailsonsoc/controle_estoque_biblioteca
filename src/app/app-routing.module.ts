import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';  // Importando as rotas definidas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
