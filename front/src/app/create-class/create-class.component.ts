import { ClassService } from '../class.service';
import { Class } from '../class';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {

  class: Class = new Class();
  submitted = false;

  constructor(private classService: ClassService,
    private router: Router) { }

  ngOnInit() {
  }

  newClass(): void {
    this.submitted = false;
    this.class = new Class();
  }

  save() {
    this.classService.createClass(this.class)
      .subscribe(data => console.log(data), error => console.log(error));
    this.class = new Class();
    this.gotoList();    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/classes']);
  }

}
