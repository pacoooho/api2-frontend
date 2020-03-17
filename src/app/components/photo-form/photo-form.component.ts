import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PhotoService } from '../../services/photo.service'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoSelected: string | ArrayBuffer;
  file: File;
  typeForm: any;
  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.photoSelected}`);
  }
  // ngOnChanges() {
  //   console.log(`ngOnChanges - data is ${this.file}`);
  // }

  ngDoCheck(event: HtmlInputEvent) {
    console.log(event);
    console.log(`ngDoCheck - data is `, this.file);
  }
  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  // }
  onPhotoSelected(event: HtmlInputEvent): void {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      this.file = null; this.photoSelected = null;
      this.file = <File>event.target.files[0];
      console.log("file ", this.file);
      const ext: String = this.file.type.split("/")[0]
      if (ext === "image") { this.typeForm = "img" }
      else { this.typeForm = this.file.type }
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {

    this.photoService
      .createPhoto(title.value, description.value, this.file)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/photos'])
        },
        err => console.log(err)
      );
    return false;
  }

}
