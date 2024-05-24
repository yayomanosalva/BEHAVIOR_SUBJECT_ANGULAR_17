import { Component, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnDestroy{
  data:any;
  dataService$!: Subscription;

  constructor(private dataService: DataService) {
    this.dataService$ = this.dataService.getData().subscribe({
      next: data => {
        this.data = data
        console.log('User Component >>> ',this.data)
      },
      error: err => {
        this.data = ''
        console.error('Error al recuperar data', err)
      }
    });
  }

  addData() {
    let newData = 'Hello from Users Component'
    this.dataService.setData(newData)
  }

  ngOnDestroy(): void {
    this.dataService$.unsubscribe()
  }
}
