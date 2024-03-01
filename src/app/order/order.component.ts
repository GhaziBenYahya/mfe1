import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-order',

  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  constructor(private router: Router) {}

  nav() {
    this.router.navigate(['/mfe1/orderComponent/addworkflowComponent']).catch(() => {
      console.error("Erreur de navigation vers le premier chemin. Tentative avec le deuxième chemin.");
      this.router.navigate(['/orderComponent/addworkflowComponent']);
    });
  }

  nav1() {
    this.router.navigate(['/mfe1/orderComponent/workflowComponent']).catch(() => {
      console.error("Erreur de navigation vers le premier chemin. Tentative avec le deuxième chemin.");
      this.router.navigate(['/orderComponent/workflowComponent']);
    });
  }

  nav2() {
    this.router.navigate(['/mfe1/orderComponent/addworkflowComponent']).catch(() => {
      console.error("Erreur de navigation vers le premier chemin. Tentative avec le deuxième chemin.");
      this.router.navigate(['/orderComponent/addworkflowComponent']);
    });
  }

  nav3() {
    this.router.navigate(['/mfe1/orderComponent/listworkflowComponent']).catch(() => {
      console.error("Erreur de navigation vers le premier chemin. Tentative avec le deuxième chemin.");
      this.router.navigate(['/orderComponent/listworkflowComponent']);
    });
  }
  

}
