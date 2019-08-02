import { ClassService } from '../class.service';
import { Class } from '../class';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {

  class: Class = new Class();
  submitted = false;
  id:number;

  constructor(private route: ActivatedRoute,private classService: ClassService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.classService.getClass(this.id)
      .subscribe(data => {
        console.log(data)
        this.class = data;
      }, error => console.log(error));
  }

  newClass(): void {
    this.submitted = false;
    this.class = new Class();
  }

  edit() {
    this.classService.updateClass(this.id, this.class)
      .subscribe(data => console.log(data), error => console.log(error));
    this.class = new Class();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.edit();    
  }

  gotoList() {
    this.router.navigate(['/classes']);
  }


}
