import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OrderComponent } from './order.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AddworkflowComponent } from './addworkflow/addworkflow.component';
import { ListworkflowComponent } from './listworkflow/listworkflow.component';
import { ManagesComponent } from './manages/manages.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [


  { path: '', redirectTo: 'orderComponent/workflowComponent', pathMatch: 'full' },
  
   // {path:'',component:OrderComponent},


    {
        path: 'orderComponent',
        component: OrderComponent,
        children:[
          {
            path: 'workflowComponent',
            component: WorkflowComponent
        
          },
          {
            path: 'addworkflowComponent',
            component: AddworkflowComponent
        
          },
          {
            path: 'listworkflowComponent',
            component: ListworkflowComponent
        
          },
          {
            path: 'managesComponent',
            component: ManagesComponent
        
          },
          {
            path: 'editComponent/:workflowId',
            component: EditComponent
        
          },
        ]
    
      },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule {}
