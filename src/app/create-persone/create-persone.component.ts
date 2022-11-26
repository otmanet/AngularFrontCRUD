import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persone } from "../persone";
import { PersoneService } from '../persone.service';

@Component({
  selector: 'app-create-persone',
  templateUrl: './create-persone.component.html',
  styleUrls: ['./create-persone.component.css']
})
export class CreatePersoneComponent implements OnInit {

  persone: Persone = new Persone();

  constructor(private personeService: PersoneService, private router: Router) { }

  ngOnInit(): void {
  }
  savePersone() {
    this.personeService.createPersone(this.persone).subscribe(data => {
      console.log(data);
      this.getToPersoneList()
    },
      error => console.log(error));
  }

  getToPersoneList(){
    this.router.navigate(['/persones'])
  }
  onSubmit() {
    console.log(this.persone)
    this.savePersone()
  }

}
