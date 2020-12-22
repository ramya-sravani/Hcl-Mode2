import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

 

@Component({
selector: 'app-hobbies',
template: `
<p>
hobbies works!
</p>
<h1>service Component</h1>

<ul *ngFor="let h of hobbies">
<li>{{h.id}},{{h.name}},{{h.hobbie}}</li>

</ul>

 


`,
styles: []
})
export class HobbiesComponent implements OnInit {
public hobbies=[];
constructor(private _es: DataService) { }

 

ngOnInit() {
this.hobbies=this._es.getHobbies();
}

 

}