import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-component',
  templateUrl: './image.component.html',
  styleUrls: ['image.component.css']
})

export class ImageComponent implements OnInit {
  value = 'martina';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://localhost:60710/users/0')
      .subscribe(response => {
        console.log(response);
      });
   }

  changeMe() {
    this.value = this.value + ' bla';
  }

  uploadImage(file: FileList) {
    const formData: FormData = new FormData();
    formData.append('file', file.item(0));
    console.log(file.item(0));
    this.http.post('http://localhost:60710/images', formData)
      .subscribe(response => console.log(response),
    error => console.log(error));
  }
}
