import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Api_Url = 'http://localhost:8080/api/test/';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getPublicContent(): Observable<any> {
        return this.http.get(Api_Url + 'all', { responseType: "text" });
    }
    getUserBoard(): Observable<any> {
        return this.http.get(Api_Url + 'user', { responseType: 'text' });
    }

    getModeratorBoard(): Observable<any> {
        return this.http.get(Api_Url + 'mod', { responseType: 'text' });
    }

    getAdminBoard(): Observable<any> {
        return this.http.get(Api_Url + 'admin', { responseType: 'text' });
    }
}

