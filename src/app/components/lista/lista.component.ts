import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarefaService } from 'src/app/services/tarefa.service';
import { Tarefa } from 'src/app/models/tarefa';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() tarefas: Tarefa[] = [];


  constructor(private service: TarefaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.getTarefas().subscribe(data => {
      this.tarefas = data;
    })
  }  

  onClick() {
    this.service.getTarefas().subscribe(data => {
      this.tarefas = data;
    })
  }

  atualizar(tarefa: Tarefa, status: number) {
      tarefa.status = status;
      this.service.atualizarTarefa(tarefa).subscribe(data => {
      });
  }

  delete(tarefa: Tarefa) {
    if (tarefa && tarefa.id !== undefined) {
      const index = this.tarefas.indexOf(tarefa);
      if (index !== -1) {
        this.service.deletarTarefa(tarefa.id).subscribe(
          data => {
            this.tarefas.splice(index, 1);
          },
          error => {
            console.error("Erro ao deletar tarefa:", error);
          }
        );
      }
    } else {
      console.error("Tarefa ou ID indefinido.");
    }
  }

  formatarData = (data: Date) =>{
    const dataf = new Date(data);

      const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];

      const dia = dataf.getDate();
      const mes = meses[dataf.getMonth()];
      const ano = dataf.getFullYear();
      if (dia && mes && ano) {
        return `${dia} de ${mes} de ${ano}`;
      } else {
          return "xx de xxxx";
      }
    }
}