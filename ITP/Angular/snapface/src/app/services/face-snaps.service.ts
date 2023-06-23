import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: "root"
})
export class FaceSnapsService{
  facesnaps: FaceSnap[] = [
    {
      id: 1,
      title:'Ma-bibliotheque-web',
      description:"Un petit site personnelle qui me tient à cœur dans laquelle je réunis différente bibliothèque de bien en ma possession (jeux, manga, anime, scan) ainsi qu'un liste qui répertorie toutes les choses que j'ai précommandé. Site un peu en liens avec mon projet mobile",
      createdDate: new Date(2023,0o6, 0o5),
      snaps: 140,
      imageUrl:"https://img.icons8.com/?size=512&id=23664&format=png",
      location:"Paris"
    },
    {
      id: 2,
      title:'Mon applis mobile',
      description:"Un petit site personnelle qui me tient à cœur dans laquelle je réunis différente bibliothèque de bien en ma possession (jeux, manga, anime, scan) ainsi qu'un liste qui répertorie toutes les choses que j'ai précommandé.",
      createdDate: new Date(2023,0o1, 0o5),
      snaps: 0,
      imageUrl:"https://www.svgrepo.com/show/164980/cell-phone.svg",
      location: "Vlissingen"
    },
    {
      id: 3,
      title:'JSP',
      description:"a remplir",
      createdDate:new Date(),
      snaps:0,
      imageUrl:"https://img.icons8.com/?size=512&id=23664&format=png"
    },
    {
      id: 4,
      title:'A voir',
      description:"A ajouter",
      createdDate: new Date(),
      snaps:0,
      imageUrl:"https://img.icons8.com/?size=512&id=23664&format=png"
    }
  ];

  getAllFaceSnaps(): FaceSnap[]{
    return this.facesnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap{
    const faceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--
  }

}
