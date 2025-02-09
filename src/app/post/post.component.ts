  import {Component, OnInit, SimpleChanges} from '@angular/core';
  import {RouterLink} from '@angular/router';
  import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  imports: [
    RouterLink
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{

  data: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Component initialized');
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.data = response;
      });
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Input property changed:', changes);

  }

}
