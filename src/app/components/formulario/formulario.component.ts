import { Component, Output, EventEmitter } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/models/tarefa';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() carregar = new EventEmitter() 

  tarefas: Tarefa[] = [];

  tarefa : Tarefa = {id: 0, titulo: '', data: new Date(''), status: 1 };

  constructor(private service: TarefaService) {}

  adicionar(form : NgForm) {
    this.tarefa.titulo = form.value.titulo;
    this.tarefa.data = form.value.data;
    this.service.adicionarTarefa(this.tarefa).subscribe(data => {
      console.log(data);
      this.tarefas.push(data);
      this.carregar.emit()
    });
    form.reset()
  }
}