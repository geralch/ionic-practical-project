import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
@Injectable()
export class GeneralService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    //private heroesUrl = '../informes/apidashboard.php'; 
    //private url = "http://10.0.0.238:3000/"
    private url = "http://10.0.1.8:3000/"

    constructor(private http: Http, private storage: Storage) {
        if (!this.headers.hasOwnProperty("authorization")) {
            this.storage.get('token').then((val) => {
                this.headers.set("authorization", val)
            });
        }
    }

    getRequest(parametros: any, path: string = ""): Promise<any[]> {
        if (!this.headers.hasOwnProperty("authorization")) {
            this.storage.get('token').then((val) => {
                this.headers.set("authorization", val)
            });
        }

        return this.http.get(this.url + path, { headers: this.headers, body: JSON.stringify(parametros) })
            .toPromise()
            .then(response => {
                return response.json() as any[]
            })
            .catch(error => {
                this.handleError(error)
                console.log("aja")
                let problem = [] 
                return problem;

            });
    }
    postRequest(parametros: any, path: string = ""): Promise<any[]> {
        if (!this.headers.hasOwnProperty("authorization")) {
            this.storage.get('token').then((val) => {
                this.headers.set("authorization", val)
            });
        }
        return this.http.post(this.url + path, JSON.stringify(parametros), { headers: this.headers })
            .toPromise()
            .then(response => {
                return response.json() as any[]
            })
            .catch(error => {
                this.handleError(error)
                console.log("aja")
                let problem =  [] 
                return problem;

            });
    }
    putRequest(parametros: any, path: string = ""): Promise<any[]> {
        if (!this.headers.hasOwnProperty("authorization")) {
            this.storage.get('token').then((val) => {
                this.headers.set("authorization", val)
            });
        }


        return this.http.put(this.url + path, JSON.stringify(parametros), { headers: this.headers })
            .toPromise()
            .then(response => {
                return response.json() as any[]
            })
            .catch(error => {
                this.handleError(error)
                console.log("aja")
                let problem =[]
                return problem;
            });
    }
    private handleError(error: any) {
        console.error('An error occurred', error)
        console.log(error.status)
        if (error.status == 403) {
            console.log("El tocken ya no es valido, se envia de nuevo al login")
        }
        //return Promise.resolve([]); 

    }
}
