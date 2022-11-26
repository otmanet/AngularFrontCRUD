import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persone } from '../persone';
import { PersoneService } from '../persone.service';

@Component({
  selector: 'app-update-persone',
  templateUrl: './update-persone.component.html',
  styleUrls: ['./update-persone.component.css']
})
export class UpdatePersoneComponent implements OnInit {
  id: number
  persone: Persone = new Persone();
  constructor(private servicePersone: PersoneService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.servicePersone.getPersoneById(this.id).subscribe(data => {
      this.persone = data
    }, error => console.error(error)

    )
  }

  getToPersoneList() {
    this.router.navigate(['/persones'])
  }
  onSubmit() {
    this.servicePersone.updatePersone(this.id, this.persone).subscribe(data => {
      this.getToPersoneList();
    }, error => console.log(error))
  }
}
