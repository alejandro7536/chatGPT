import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

  header = new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer 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"
  })

  constructor(
    private http: HttpClient
  ) { }

  gptTest(prompt: string) {
    return this.http.post('https://api.openai.com/v1/completions', {"model": "text-davinci-003", "prompt": prompt, "temperature": 0, "max_tokens": 2048}, {headers: this.header});
  }
}
