import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private url: string = "https://trimestrial-fee.000webhostapp.com/wp-json/wp/v2/posts"
  private tokenUrl: string = "https://trimestrial-fee.000webhostapp.com/wp-json/jwt-auth/v1/token";
  
  constructor(private http: HttpClient) { }
  
  
  private errorHandle(error: HttpErrorResponse){
  if (error.error instanceof ErrorEvent){
    console.error('error Message:', error.message);
  } else{
    console.error(
      `Error status: ${error.status}` + `Body: ${error.error}`
    )
  }
  return throwError('check the code and server response from the end point')
  }

  getPost(){
    return this.http.get(this.url).pipe(
      map(this.dataExtract),
      catchError(this.errorHandle)
    )
  }

  private dataExtract(res: any){
    const body  = res;
    return body
  }

  postQuotes(title:any,content:any){
      let data = {
        title: title,
        content: content,
        status: 'publish'
      };
      console.log(data);
      
      const username = "admin"
      const password = "Greatness4sure"

      const tokens = this.http.post(this.tokenUrl,{username,password});
      const token =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RyaW1lc3RyaWFsLWZlZS4wMDB3ZWJob3N0YXBwLmNvbSIsImlhdCI6MTY4MTM5Nzg4MCwibmJmIjoxNjgxMzk3ODgwLCJleHAiOjE2ODIwMDI2ODAsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.AIJzv8__FW3yby92gNJ1SUiCdjOcEdA4JvdIQbIqUSA"
      console.log(token)

      let headers = new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': `Bearer ${token}`
      });
   
      
      return this.http.post(this.url, data,{headers: headers});
  }
}
