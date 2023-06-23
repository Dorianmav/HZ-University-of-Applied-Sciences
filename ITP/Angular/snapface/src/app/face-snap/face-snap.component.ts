import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
   @Input() facesnap!: FaceSnap;
  buttonText!: string;

  ngOnInit(): void {
    this.buttonText = "Oh snap!"

  }

  onSnaps(){
    if (this.buttonText === "Oh snap!"){
      this.facesnap.snaps++;
      this.buttonText = "Oops, unSnap!";
    }else{
      this.facesnap.snaps--;
      this.buttonText = "Oh snap!"
    }


  }
}
