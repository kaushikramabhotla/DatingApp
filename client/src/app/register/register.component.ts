import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  constructor(private accountService : AccountService, private toast : ToastrService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: response =>{
        console.log(response);
        this.cancel();
      },
      error:error => this.toast.error(error.error)
      
    })
    console.log(this.model);
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

  
}
