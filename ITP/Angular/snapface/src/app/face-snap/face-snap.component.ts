import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapsService} from "../services/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
   @Input() facesnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private router: Router) {}


  ngOnInit(): void {
    this.buttonText = "Oh snap!"

  }

  onSnaps(){
    if (this.buttonText === "Oh snap!"){
      this.faceSnapService.snapFaceSnapById(this.facesnap.id, 'snap');
      this.buttonText = "Oops, unSnap!";
    }else{
      this.faceSnapService.snapFaceSnapById(this.facesnap.id, 'unsnap');
      this.buttonText = "Oh snap!"
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`)
  }
}
