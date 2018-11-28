import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { Service, Employee, State } from '../app/service';
import notify from 'devextreme/ui/notify';
if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [Service]
})
export class AppComponent {
  dataSource: Employee[];
  states: State[];
  constructor(service: Service) {
      this.dataSource = service.getEmployees();
      this.states = service.getStates();
  }
  AddNewRow()
  {
    notify("Bạn vừa thêm mới một dòng vào đó nhé.ahihi", "success", 5000);
  }
  AddData(obj: any)
  {
    notify("Thêm dữ liệu thành công,tên đại diện "+obj.data.FirstName+"", "success", 5000);
    console.log();
  }
  logEvent(obj:any)
  {
      
  }
}



