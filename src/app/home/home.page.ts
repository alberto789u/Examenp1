import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from '../examen.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  quote: any;
  constructor(private examenService :ExamenService, private router: Router) {}

  a(){
    this.router.navigateByUrl(`/formulario`);
  }
  ngOnInit(){
    this.examenService.getquote().subscribe((data) => {
      this.quote = data;
      console.log(data);
    })
  }
}
