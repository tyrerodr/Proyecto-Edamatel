import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ComputoComponent } from './computo/computo.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AdminComponent } from './admin/admin.component';
import { MarcasComponent } from './marcas/marcas.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { ScatterComponent } from './scatter/scatter.component';



import { FullComponent } from './layout/full/full.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'computo', component: ComputoComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'marcas', component: MarcasComponent},
      { path: 'cliente', component: ClienteComponent},
      { path: 'pie', component: PieComponent},
      { path: 'admin', component: AdminComponent},
      { path: 'scatter', component: ScatterComponent},
      { path: 'bar', component: BarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
