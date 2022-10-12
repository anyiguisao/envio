import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Place from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }

  addPlace(place: Place){
    const placeRef = collection(this.firestore, 'places');
    return addDoc(placeRef, place)
  }
}
