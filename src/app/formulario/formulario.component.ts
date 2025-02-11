import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonInput, IonItem, IonList } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  imports: [IonInput, IonItem, IonList, FormsModule, CommonModule],
})
export class FormularioComponent  implements OnInit {
a1 =new FormControl('');
a2= new FormControl('');
a3= new FormControl('');
a4= new FormControl('');
a5= new FormControl('');
lol: {a1: any, a2: any,a3: any,a4: any,a5: any}[]=[];
  constructor() { }
  x(){
    if(this.a1.value &&
      this.a2.value&&
      this.a3.value&&  
      this.a4.value&&
     this.a5.value){
    const movie={
      a1:this.a1.value,
      a2:this.a2.value,
      a3:this.a3.value,   
      a4:this.a4.value,
      a5:this.a5.value,
    };
    this.lol.push(movie);
  }else alert('faltan datos');
}
  ngOnInit() {}

}
