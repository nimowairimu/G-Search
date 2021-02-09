import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent} from './user/user.component';
import { ReposComponent} from './repos/repos.component';


const routes: Routes = [
{"path":"user","component":UserComponent},
{"path":"repos","component":ReposComponent},
{"pathMatch":"full", "redirectTo":"user","path":""},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
