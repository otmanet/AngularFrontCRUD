import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persone } from '../persone';
import { PersoneService } from '../persone.service';

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrls: ['./details-person.component.css']
})
export class DetailsPersonComponent implements OnInit {
  id: number
  persone: Persone = new Persone();
  constructor(private router: Router, private servicePersone: PersoneService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.servicePersone.getPesoneDetails(this.id).subscribe(data => {
      this.persone = data
    }, error => console.log(error)
    )
  }


}
