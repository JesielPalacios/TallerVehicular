import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  endPoint ='http://192.168.1.35:8080/reportes'
  constructor(private http:HttpClient) { }

  lista(data,token){
    return this.http.post(`${this.endPoint}/lista`,data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    }) ;
  }
  create(data,token){
    return this.http.post(`${this.endPoint}/create`, data,{ headers:{
      'Authorization': "Bearer " + token,
      }
    }) ;
  }
  delete(id,token){
    return this.http.delete(`${this.endPoint}/delete/${id}`,{ headers:{
      'Authorization': "Bearer " + token,
      }
    }) ;
  }
}
