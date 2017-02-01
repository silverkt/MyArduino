import { Component }               from '@angular/core';
import { Injectable }              from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


 



@Component({
    selector: 'map',
    template: '',
})

 
export class MapComponent{    

    constructor(private http: Http){ }

    ngOnInit(){
        this.test();
    }

    test():void {
        this.http.get('http://127.0.0.1/app/test.json')
        .toPromise().then((response) => {
            console.log(response.json());
            });
    }

}