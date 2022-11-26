import { Component, OnInit } from '@angular/core';
import { Persone } from "../persone";
import { Router } from '@angular/router';
import { PersoneService } from "../persone.service"
import { MatTableDataSource } from '@angular/material/table';

import { ExportExcel } from '../Export/export-excel';
import { ExportingTool } from '../Export/exporting-tool';
import { TokenStorageService } from '../Services/token-storage-service';

@Component({
  selector: 'app-persone-list',
  templateUrl: './persone-list.component.html',
  styleUrls: ['./persone-list.component.css']
})
export class PersoneListComponent implements OnInit {

  persones: any[] = [];
  searchText: string

  constructor(private personeService: PersoneService, private router: Router, private exportingPdfTool: ExportingTool, private exportExcel: ExportExcel, private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.getPersone();
    } else {
      this.router.navigate(['404']);
    }

  }
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [3, 6, 9, 12];
  onTableDataChange(event: any) {
    this.page = event;
    this.getPersone();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getPersone();
  }

  private getPersone() {
    this.personeService.getPersoneList().subscribe(data => {
      this.persones = data;
      console.log(this.persones);
    })

  }

  updatePesone(id: number) {
    this.router.navigate(['updatePersone', id]);
  }

  deletePersone(id: number) {
    this.personeService.deletePersone(id).subscribe(data => {
      console.log(data)
      this.getPersone()
    }, error => console.log(error));

  }
  PersonDetails(id: number) {
    this.router.navigate(['detailsPerone', id])
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log("filter", filterValue);

    // this.persones.filter = filterValue.trim().toLowerCase();
  }
  getJsonValue(v: any) {
    return JSON.parse(JSON.stringify(v))
  }
  exporter(ev: number) {
    var v = this.getJsonValue(this.persones);
    console.log("event", v);
    if (ev == 1) {
      this.exportExcel.ExportPersone(v, "Rapport Persone")
    } else {
      this.exportingPdfTool.exportPdf_Persone(v, "Rapport Persone")
    }
  }
}
