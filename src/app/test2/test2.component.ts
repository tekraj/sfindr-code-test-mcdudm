import { Component, OnInit } from '@angular/core';
import { IAPIResponse } from '../core/interfaces/api-response';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  loading = false;
  public userIsTypingTimeout:any;
  public searchKeyword: string;
  public apiData: IAPIResponse;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  searchData(){
    if(!this.searchKeyword || (this.searchKeyword && this.searchKeyword.trim()==='')){
      // this.apiData = null;
      // this.loading = false;
      return;
    }
    if(this.userIsTypingTimeout){
      clearTimeout(this.userIsTypingTimeout);
    }
    
    this.userIsTypingTimeout = setTimeout(async()=> {
      this.loading = true;
      try{
        this.apiData = await this.apiService.getMockAPIData().toPromise();
      }catch(e){
        console.log(e);
      }
      this.loading = false;
    },500);
  }
}