import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  facesnaps!: FaceSnap[];

  ngOnInit() {
    this.facesnaps = [
      {
        title:'Ma-bibliotheque-web',
        description:"Un petit site personnelle qui me tient à cœur dans laquelle je réunis différente bibliothèque de bien en ma possession (jeux, manga, anime, scan) ainsi qu'un liste qui répertorie toutes les choses que j'ai précommandé. Site un peu en liens avec mon projet mobile",
        createdDate: new Date(2023,0o6, 0o5),
        snaps: 140,
        imageUrl:"https://img.icons8.com/?size=512&id=23664&format=png",
        location:"Paris"
      },
      {
        title:'Mon applis mobile',
        description:"Un petit site personnelle qui me tient à cœur dans laquelle je réunis différente bibliothèque de bien en ma possession (jeux, manga, anime, scan) ainsi qu'un liste qui répertorie toutes les choses que j'ai précommandé.",
        createdDate: new Date(2023,0o1, 0o5),
        snaps: 0,
        imageUrl:"https://www.svgrepo.com/show/164980/cell-phone.svg",
        location: "Vlissingen"
      },
      {
        title:'JSP',
        description:"a remplir",
        createdDate:new Date(),
        snaps:0,
        imageUrl:"https://img.icons8.com/?size=512&id=23664&format=png"
      },
      {
        title:'A voir',
        description:"A ajouter",
        createdDate: new Date(),
        snaps:0,
        imageUrl:"https://img.icons8.com/?size=512&id=23664&format=png"
      }
    ]

  }

  protected readonly FaceSnap = FaceSnap;
}
