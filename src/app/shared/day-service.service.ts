import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DayServiceService {

  constructor(private firestore: AngularFirestore) {}
  
 
     form = new FormGroup({        
        customerName: new FormControl(''),
        orderNumber: new FormControl(''),
        coffeeOrder: new FormControl(''), 
        completed: new FormControl(false)
    })


    addDayData(data) {
      return new Promise<any>((resolve, reject) =>{
          this.firestore
              .collection("dayData")
              .add(data)
              .then(res => {
                
              }, err => reject(err));
      });
  }


  getAllDayData() { 
    return  this.firestore.collection("dayData").snapshotChanges();
  }

  updateDay(data) {
    return this.firestore
        .collection("dayData")
        .doc(data.payload.doc.id)
        .set({ completed: true }, { merge: true });
 }

 deleteDay(data) {
  return this.firestore
      .collection("dayData")
      .doc(data.payload.doc.id)
      .delete();
}
  
}
