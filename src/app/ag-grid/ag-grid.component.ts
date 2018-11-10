import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';
import { HttpservicesService } from '../httpservices.service';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  aggridData;
  d;
  @ViewChild('gridOptions') gridOptions: AgGridNg2;

  constructor(private titleService: Title, private httpservicesService: HttpservicesService) { }

  ngOnInit() {
    this.setTitle("AgGrid");
    this.rowData = this.httpservicesService.getdata()
    // this.rowData=this.httpservicesService.get('https://api.myjson.com/bins/15psn9');
  }
  setTitle(newtitle: string) {
    this.titleService.setTitle(newtitle);
  }
  columnDefs = [
    { headerName: 'UserId', field: 'userId', checkboxSelection: true },
    { headerName: 'Id', field: 'id' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Body', field: 'body' }
  ];

  rowData: any;
  // getSelectedRows() {
  //   const selectedNodes = this.gridOptions.api.getSelectedNodes();
  //   const selectedData = selectedNodes.map(node => node.data);
  //   const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }
}
