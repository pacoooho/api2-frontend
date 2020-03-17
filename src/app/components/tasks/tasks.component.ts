import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
 
 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit  {
 
  readonly progress: Observable<number>;
  readonly progress2: Observable<number>;
private serveConect:number=0;
  // public value: number;
 
 

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private authService: AuthService
  ) {
    this.progress = this.emulateProgress();
   // this.progress2 = this.emulateProgress2();
  
  }
  downloadPDF (){

    
    this.tasksService.getTasks3()
    .subscribe(
      res => {
     console.log(res);
        //this.tasks = res.tasks; 
      },
      er => {
        console.log("eeeeeeeeeeeeeeee");
        // console.log(er.error.er.message);
 
      }
    )
  }
  emulateProgress2() {
    return new Observable<number>(observer => {
      let val = 0;
      const interval = setInterval(() => {
       
        this.tasksService.getTasks2()
        .subscribe(
          res => {
            val = res["number"];
            console.log("res");
            console.log(val);
            //this.tasks = res.tasks; 
          },
          er => {
            console.log("eeeeeeeeeeeeeeee");
            // console.log(er.error.er.message);
   val = 0;
          }
        )
  
        observer.next(val);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    });
  }
  emulateProgress() {
    return new Observable<number>(observer => {
      let val = 0;
      const interval = setInterval(() => {
        if (val < 100) {
          val++;
        } else {
          val = 0;
        }

        observer.next(val);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    });
  }
  ngOnInit() {
    this.tasksService.getTasks()
      .subscribe(
        res => {
          console.log("res");
          console.log(res);
          //this.tasks = res.tasks; 
        },
        er => {
          console.log("eeeeeeeeeeeeeeee");
          // console.log(er.error.er.message);

          this.authService.logout();
          this.router.navigate(['/signin'])

        }
      )

  }
  
  
   
}
