import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const Auth_Api = "http://localhost:8080/api/auth/";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(Auth_Api + 'signin', {
            username,
            password
        }, httpOptions);
    }

    register(username: string, email: string, password: string): Observable<any> {
        return this.http.post(Auth_Api + 'signup', {
            username,
            email,
            password
        }, httpOptions)
    }
}
