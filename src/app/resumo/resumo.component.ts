import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  resumo;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { 
    this.http.get("http://www.devup.com.br/php/api-dashboard/api/resumo")
    .subscribe( dados => this.resumo = dados );
  }

}
