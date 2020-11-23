import { Component, Input, OnInit } from '@angular/core';
import { faBoxTissue, faHeart } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.scss']
})
export class BookitemComponent implements OnInit {

  @Input() book;
  @Input() title: string;

  faHeart = faHeart;
  toggle: boolean = false;

  handleAddToFav(id) {
    this.toggle = !this.toggle;
    this.afs.doc(`collection/${id}`).set({id: id}, { merge: true});
  }

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    
  }

}
