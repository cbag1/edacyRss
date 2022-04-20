import { Component, OnInit } from '@angular/core';
import * as xml2js from "xml2js";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-flux-rss',
  templateUrl: './flux-rss.component.html',
  styleUrls: ['./flux-rss.component.css']
})
export class FluxRssComponent {


  public xmlItems: any;
  constructor(private http: HttpClient) {

    this.loadXML();
  }
  //getting data function
  loadXML() {
    /*Read Data*/
    this.http.get('assets/en_continu.xml',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
      })
      .subscribe((data) => {
        this.parseXML(data)
          .then((data) => {
            this.xmlItems = data;
            this.xmlItems = this.xmlItems['rss']['channel']['0'];
            console.log(this.xmlItems.item['1'])
          });
      });
    /*Read Data*/
  }
  //store xml data into array variable
  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {

        // console.log(result)
      
        // var obj = result.Employee;
        // for (k in obj.emp) {
        //   var item = obj.emp[k];
        //   arr.push({
        //     id: item.id[0],
        //     name: item.name[0],
        //     email: item.email[0],

        //   });
        // }
        resolve(result);
      });
    });
  }

}
