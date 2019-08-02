import { Class } from '../class';
import { Component, OnInit, Input } from '@angular/core';
import { ClassService } from '../class.service';
import { ClassListComponent } from '../class-list/class-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  id: number;
  class: Class;

  constructor(private route: ActivatedRoute,private router: Router,
    private classService: ClassService) { }

  ngOnInit() {
    this.class = new Class();

    this.id = this.route.snapshot.params['id'];
    
    this.classService.getClass(this.id)
      .subscribe(data => {
        console.log(data)
        this.class = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['classes']);
  }

}
