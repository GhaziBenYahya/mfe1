import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module'
import { OrderComponent } from './order.component';
// app.module.ts
import { RouterModule, Routes } from '@angular/router';
import { WorkflowComponent } from './workflow/workflow.component';
import { AddworkflowComponent } from './addworkflow/addworkflow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { ListworkflowComponent } from './listworkflow/listworkflow.component';
import { ManagesComponent } from './manages/manages.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    WorkflowComponent,
    OrderComponent,
    AddworkflowComponent,
    ListworkflowComponent,
    ManagesComponent,
    EditComponent,
    
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [ServiceService], // Ajoutez votre service aux fournisseurs
})
export class OrderModule { }
