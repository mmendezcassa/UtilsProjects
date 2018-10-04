import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  empleados:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
    this.selectedContacts = [];
       this.contactList = [{
    id: 1,
    name: "Steve"
  },
  {
    id: 2,
    name: "Mark"
  },
  {
    id: 3,
    name: "Lauren"
  }];

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  contactList: any[];

  selectedContacts: any[];


    clickedAvatar(id: number){

      console.log(this.selectedContacts);
       if(this.isInArray(id)){
         let index = this.selectedContacts.indexOf(id);

         this.selectedContacts.splice(index,1);
       }else{
          this.selectedContacts.push(id);
          console.log(this.selectedContacts.indexOf(id));
       }
    }

    isInArray(id: number): boolean{
      let check: boolean = false;
      for(let contactId of this.selectedContacts){
         if(contactId == id){ 
           check = true;
         }
      }
      return check;
    }
  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'User was added successfully',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

 public pressed(member){


this.presentToast();
var selected = [];

        
            var index = selected.indexOf(member);
            if (index > -1) {
                selected.splice(index, 1);
                member.selected = false;
            } else {
                selected.push(member);
                member.selected = true;
            }
        
        this.empleados = [{
            name: "item1"
        }, {
            name: "item2"
        }, {
            name: "item3"
        }, {
            name: "item4"
        }, {
            name: "item5"
        }];
      }


  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
