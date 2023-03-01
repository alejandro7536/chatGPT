import { Component, OnInit } from '@angular/core';
import { Configuration, OpenAIApi } from "openai";
import { ChatgptService } from './services/chatgpt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gptapp';
  resGPT = '';
  prompt = '';
  enviando: boolean = false;

  constructor(
    private gpt: ChatgptService
  ){

  }

  configuration = new Configuration({
    apiKey: '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'
  });


  ngOnInit(): void {
    const openai = new OpenAIApi(this.configuration);
    const response = openai.listEngines();
    // console.log('res', response);


  }

  consultar(argument: string){
    this.enviando = true;
    this.resGPT = '';
    this.gpt.gptTest(argument).subscribe((res:any) => {
      console.log("res", res);
      this.resGPT = res.choices[0].text;
      this.enviando = false;
    })

  }

}
