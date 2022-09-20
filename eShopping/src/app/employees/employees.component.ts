import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnChanges, OnDestroy {
  mySubscriber;
  constructor(private activatedRoute: ActivatedRoute) {
    console.log("hello Contructor");
  }
  
  ngOnInit(): void {
    console.log("Employee Init");


    //const customObservable = new Observable(observer => {
    //  let count = 100;
    //  setInterval(handler => {
    //    if (count % 7 == 0)
    //      observer.error("Employee There was an error " + count)
    //    if (count == 200)
    //      observer.complete();
    //    observer.next(count);
    //    count = count + 10;
    //  }, 1000);


    //})

    //this.mySubscriber = customObservable.subscribe({
    //  next: (data) => {
    //    console.log(data);
    //  },
    //  error: (err) => {
    //    console.log("msg from Employee error ")
    //    console.log(err)
    //    console.log("Encountered error in the Employee observer")
    //  },
    //  complete: () => {
    //    console.log("All done and dusted Employee")
    //  }
    //})

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Employee OnChange");
  }

  ngDoCheck() {
    console.log('Employee DoCheck');
  }

  ngOnDestroy(): void {
    this.mySubscriber.unsubscribe();
    console.log('Employee Destroy');
  }

  change() {
    console.log('Employee Changeeeee');
  }

}
