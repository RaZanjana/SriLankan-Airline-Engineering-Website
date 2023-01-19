import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})

export class ContentServices{

     //baseUrl: string = 'http://localhost:5268/'
    //baseUrl: string = 'http://localhost:8090/'
    baseUrl: string = 'http://192.168.3.81/server/'

    engineeringBaseUrl: string = 'http://localhost:5268/'
    message : any ;
    constructor(private http: HttpClient){}
    
    public getAllComponents(data : any): Observable<any>{
        return this.http.post(this.baseUrl + 'api/subcomponent/GetSubGetcomponent', data)
}

public getComponentDetail(data : any): Observable<any>{
    return this.http.post(this.baseUrl + 'api/subcomponent/SubGetcomponent', data)
}

public saveUserData(data : any): Observable<any>{
    return this.http.post(this.baseUrl + 'api/WebUser/SaveUserDetails', data)
}

setMessage(datas : any){
   this.message = datas;
}

getMessage(){
    return this.message;
}

}