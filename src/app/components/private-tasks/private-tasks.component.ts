import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.svg',
  styleUrls: ['./private-tasks.component.css']
})  
export class PrivateTasksComponent implements OnInit {
  
  constructor(
    private tasksService: TasksService,
     private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.tasksService.getPrivateTasks()
.subscribe(
  res=>{
    console.log("res");
    console.log(res);
    //this.tasks = res.tasks; 
  },
  er => {console.log("eeeeeeeeeeeeeeee");
  console.log(er);
    
    //  this.authService.logout();
      this.router.navigate(['/signin'])
   
  }  
)

  }

}
