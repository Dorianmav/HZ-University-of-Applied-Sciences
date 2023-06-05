import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!:string;
  buttonText!: string;

  ngOnInit(): void {
    this.title = 'Ma-bibliotheque-web'
    this.description = "Un petit site personnelle qui me tient à cœur dans laquelle je réunis différente bibliothèque de bien en ma possession (jeux, manga, anime, scan) ainsi qu'un liste qui répertorie toutes les choses que j'ai précommandé. Site un peu en liens avec mon projet mobile"
    this.createdDate = new Date(2023,0o6, 0o5);
    this.snaps = 100;
    this.imageUrl = "https://img.icons8.com/?size=512&id=23664&format=png";
    this.buttonText = "Oh snap!"

  }

  onSnaps(){
    if (this.buttonText === "Oh snap!"){
      this.snaps++;
      this.buttonText = "Oops, unSnap!";
    }else{
      this.snaps--;
      this.buttonText = "Oh snap!"
    }


  }
}
