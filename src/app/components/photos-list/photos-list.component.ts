import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PhotoService } from '../../services/photo.service'
import { Photo } from '../../interfaces/Photo'

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = [];
  types: any[] = [];
  constructor(
    private photoService: PhotoService,
    private router: Router
  ) { }
  // function imageFilter(req: Request, file: any, callback: any) {
  //   if (path.extname(file.originalname).toLowerCase().
  //   match(/\.(jpg|jpeg|png|bmp|gif|mp4|m4v|flv|ogv|webm)$/))
  //     callback(null, true)
  //   else
  //     callback(new Error('Only image files are allowed!'), false)
  // }

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(
        res => {
          for (let i in res) {
            console.log(res[i].imagePath.split(".")[1]);
            
              
            this.photos.push(res[i]);
            const ext: String = res[i].imagePath.split(".")[1]

            if (ext. 
             match(/\.(jpg|jpeg|png|bmp|gif|mp4|m4v|flv|ogv|webm)$/)){
               console.log("IMAGE")
             }
            if (ext === "png" || ext === "jpg") {
              this.types.push("png");
            } else
              if (ext === "mp4") {
                this.types.push("mp4");
              }
              
            
            // const ext: String = this.file.type.split("/")[0]
            
            // if (ext === "image") { this.typeForm = "img" }
            // else { this.typeForm = this.file.type }
          }
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id]);
  }

}
