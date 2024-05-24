import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';
import { UsersComponent } from './components/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy{
  data: any;
  dataService$!: Subscription;

  constructor(private dataService: DataService) {
    this.dataService$ = this.dataService.getData().subscribe({
      next: (data) => {
        this.data = data;
        console.log('App Component >>> ', this.data);
      },
      error: (err) => {
        this.data = '';
        console.error('Error al recuperar data', err);
      },
    });
  }

  /** Funtion  */
  addData() {
    let newData = 'Hello from app Component'
    this.dataService.setData(newData)
  }

  ngOnDestroy(): void {
    this.dataService$.unsubscribe()
  }
}
