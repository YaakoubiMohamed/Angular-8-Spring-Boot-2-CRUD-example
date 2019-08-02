import { Component, OnInit } from '@angular/core';
import { ClassDetailComponent } from '../class-detail/class-detail.component';
import { Observable } from "rxjs";
import { ClassService } from "../class.service";
import { Class } from "../class";
import { Router } from '@angular/router';
@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  classes: Observable<Class[]>;

  constructor(private classService: ClassService,
    private router: Router) {}

  ngOnInit() {
    this.getClasses();
  }

  getClasses() {
    this.classes = this.classService.getClasssList();
    console.log(this.classes);
  }

  deleteClass(id: number) {
    this.classService.deleteClass(id)
      .subscribe(
        data => {
          console.log(data);
          this.getClasses();
        },
        error => console.log(error));
  }

  classDetails(id: number){
    this.router.navigate(['details', id]);
  }

  EditClass(id: number){
    this.router.navigate(['edit', id]);
  }

}
