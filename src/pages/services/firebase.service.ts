import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import {AngularFireAuth} from "angularfire2/auth";





@Injectable()
export class FirebaseService {


  private snapshotChangesSubscription: any;


  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getUsers(){
    return new Promise<any>((resolve,reject) =>{
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.doc(currentUser.uid).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  getJobs32(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/a6XSlhF3EGaj8YIB3jXgsy6mmLP2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getJobs31(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/0VfzeHMXm7WRj0HaeAxheXmCv3J3/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


    getJobs30(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/09XUJt1gMRh8sTuZ3nSi4J81Plo2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }

    getJobs29(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/0oEULf0ZO2MXuQn1RzeJylPptl13/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }



    getJobs28(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/yvwjp0G9wHWZQ3B8DdPaekHyaiz1/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }


    getJobs27(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/mTv0ZlPthBeveqgEt2p7kobj1uh1/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }


    getJobs26(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/QzdbRbeJoyVbxR9UPp4tbK6GpkT2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }

    getJobs25(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/3uxS0Nqfz0Oc6Xx26GVwYTpmnmf2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }



    getJobs24(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/UhdynffdPcb9E00GlScw7jeEisp1/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }

  getJobs23(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/uxcKa9K2DNeWEHcrLbs6kWuVx5W2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }

  getJobs22() {
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/5iPhOety9aaqc8IaUPuw0VfHxks2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getJobs21()
    {
      return new Promise<any>((resolve, reject) => {
        //let currentUser = firebase.auth().currentUser;
        this.snapshotChangesSubscription = this.afs.collection('/job/sHvjQU74RKfoWYcHSZmC4VIGRel2/offers').snapshotChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          })
      });
    }

  getJobs20()
      {
        return new Promise<any>((resolve, reject) => {
          //let currentUser = firebase.auth().currentUser;
          this.snapshotChangesSubscription = this.afs.collection('/job/inXlqicz0ZNKXj0xNLWXVprhD3A3/offers').snapshotChanges()
            .subscribe(snapshots => {
              resolve(snapshots);
            })
        });
      }

  getJobs19()
        {
          return new Promise<any>((resolve, reject) => {
            //let currentUser = firebase.auth().currentUser;
            this.snapshotChangesSubscription = this.afs.collection('/job/nm9ZiVAf3QSOPMnFa5vu7Ud7Ceg1/offers').snapshotChanges()
              .subscribe(snapshots => {
                resolve(snapshots);
              })
          });
        }

  getJobs18(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/a6X2x8u4h2P7veMT63Ad1tOlaaH3/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getJobs17(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/24ilQAPmqdg9qHFsdAprosWMLXp1/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getJobs16(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/c8aEI1aXR1W8PY2dlyhMcFVGEkG3/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }



  getJobs15(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/6iiBvB1bKdZ4btgfv6S8O5cyFDR2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getJobs14(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/ESl0yzYVdpOOXXXhxMQRX0WzZy43/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getJobs13(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/83qE2l9DGoZ0Rv11kehiG7tr0k53/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getJobs12(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/2JlP3BxAdZWJNGxmyawgM4vDTFE2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getJobs11(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/5ZdWOdcWgtQI0quIwoX6TNDMGQe2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getJobs10(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/EiZrVk9wFEh70CijEVeCqOvxgF13/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getJobs9(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/QeayQ5pULNb94BkOLhTx82cp56F2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getJobs8(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/i1TJy3Yz5HNyzsfstzoKzjN03Bn2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getJobs7(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/igH0MFbMHwQ3QGqKcYZ93hqXeVm2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getJobs6(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/Ti9l2ujNwOMxdnNggfrEGypQ5723/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getJobs5(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/tsH3xGijXLdzTLQEkJsqhKUpfFp2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getJobs4(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/pPpn9VIbcQVEaS21Ti7oK6XNgX13/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getJobs3(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/VvApMN5JLGYjwABPyeF9XcGeZ3z2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getJobs2(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/2Pm9lElw9Rdg5jckyp2eR0ky8sH3/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getJobs(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/job/SivvbPXSInMEBIHaLbYYcexurdq2/offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  getSales32(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/a6XSlhF3EGaj8YIB3jXgsy6mmLP2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getSales31(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/0VfzeHMXm7WRj0HaeAxheXmCv3J3/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getSales30(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/09XUJt1gMRh8sTuZ3nSi4J81Plo2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }

    getSales29(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/0oEULf0ZO2MXuQn1RzeJylPptl13/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }


    getSales28(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/yvwjp0G9wHWZQ3B8DdPaekHyaiz1/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }

    getSales27(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/mTv0ZlPthBeveqgEt2p7kobj1uh1/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }


    getSales26(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/QzdbRbeJoyVbxR9UPp4tbK6GpkT2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }

    getSales25(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/3uxS0Nqfz0Oc6Xx26GVwYTpmnmf2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
    }


    getSales24() {
      return new Promise<any>((resolve, reject) => {
        //let currentUser = firebase.auth().currentUser;
        this.snapshotChangesSubscription = this.afs.collection('/food/UhdynffdPcb9E00GlScw7jeEisp1/sales').snapshotChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          })
      });
    }

    getSales23()
      {
        return new Promise<any>((resolve, reject) => {
          //let currentUser = firebase.auth().currentUser;
          this.snapshotChangesSubscription = this.afs.collection('/food/uxcKa9K2DNeWEHcrLbs6kWuVx5W2/sales').snapshotChanges()
            .subscribe(snapshots => {
              resolve(snapshots);
            })
        });
      }

    getSales22() {
      return new Promise<any>((resolve, reject) => {
        //let currentUser = firebase.auth().currentUser;
        this.snapshotChangesSubscription = this.afs.collection('/food/5iPhOety9aaqc8IaUPuw0VfHxks2/sales').snapshotChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          })
      });
    }

    getSales21() {
      return new Promise<any>((resolve, reject) => {
        //let currentUser = firebase.auth().currentUser;
        this.snapshotChangesSubscription = this.afs.collection('/food/sHvjQU74RKfoWYcHSZmC4VIGRel2/sales').snapshotChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          })
      });
    }

  getSales20() {
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/inXlqicz0ZNKXj0xNLWXVprhD3A3/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getSales19() {
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/nm9ZiVAf3QSOPMnFa5vu7Ud7Ceg1/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getSales18(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/a6X2x8u4h2P7veMT63Ad1tOlaaH3/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getSales17(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/24ilQAPmqdg9qHFsdAprosWMLXp1/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getSales16(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/c8aEI1aXR1W8PY2dlyhMcFVGEkG3/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getSales15(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/6iiBvB1bKdZ4btgfv6S8O5cyFDR2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getSales14(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/ESl0yzYVdpOOXXXhxMQRX0WzZy43/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getSales13(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/83qE2l9DGoZ0Rv11kehiG7tr0k53/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getSales12(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/2JlP3BxAdZWJNGxmyawgM4vDTFE2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getSales11(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/5ZdWOdcWgtQI0quIwoX6TNDMGQe2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getSales10(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/EiZrVk9wFEh70CijEVeCqOvxgF13/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getSales9(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/QeayQ5pULNb94BkOLhTx82cp56F2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getSales8(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/i1TJy3Yz5HNyzsfstzoKzjN03Bn2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }
  getSales7(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/igH0MFbMHwQ3QGqKcYZ93hqXeVm2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getSales6(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/Ti9l2ujNwOMxdnNggfrEGypQ5723/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getSales5(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/tsH3xGijXLdzTLQEkJsqhKUpfFp2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getSales4(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/pPpn9VIbcQVEaS21Ti7oK6XNgX13/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getSales3(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/VvApMN5JLGYjwABPyeF9XcGeZ3z2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getSales2(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/2Pm9lElw9Rdg5jckyp2eR0ky8sH3/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getSales(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/food/SivvbPXSInMEBIHaLbYYcexurdq2/sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  getBorrow32(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/a6XSlhF3EGaj8YIB3jXgsy6mmLP2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow31(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/0VfzeHMXm7WRj0HaeAxheXmCv3J3/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow30(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/09XUJt1gMRh8sTuZ3nSi4J81Plo2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow29(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/0oEULf0ZO2MXuQn1RzeJylPptl13/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow28(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/yvwjp0G9wHWZQ3B8DdPaekHyaiz1/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow27(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/mTv0ZlPthBeveqgEt2p7kobj1uh1/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow26(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/QzdbRbeJoyVbxR9UPp4tbK6GpkT2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow25(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/3uxS0Nqfz0Oc6Xx26GVwYTpmnmf2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow24(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/UhdynffdPcb9E00GlScw7jeEisp1/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow23(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/uxcKa9K2DNeWEHcrLbs6kWuVx5W2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow22(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/5iPhOety9aaqc8IaUPuw0VfHxks2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow21(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/sHvjQU74RKfoWYcHSZmC4VIGRel2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow20(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/inXlqicz0ZNKXj0xNLWXVprhD3A3/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow19(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/nm9ZiVAf3QSOPMnFa5vu7Ud7Ceg1/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow18(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/a6X2x8u4h2P7veMT63Ad1tOlaaH3/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow17(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/24ilQAPmqdg9qHFsdAprosWMLXp1/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow16(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/c8aEI1aXR1W8PY2dlyhMcFVGEkG3/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow15(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/6iiBvB1bKdZ4btgfv6S8O5cyFDR2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow14(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/ESl0yzYVdpOOXXXhxMQRX0WzZy43/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow13(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/83qE2l9DGoZ0Rv11kehiG7tr0k53/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow12(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/2JlP3BxAdZWJNGxmyawgM4vDTFE2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow11(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/5ZdWOdcWgtQI0quIwoX6TNDMGQe2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow10(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/EiZrVk9wFEh70CijEVeCqOvxgF13/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow9(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/QeayQ5pULNb94BkOLhTx82cp56F2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow8(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/i1TJy3Yz5HNyzsfstzoKzjN03Bn2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow7(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/igH0MFbMHwQ3QGqKcYZ93hqXeVm2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow6(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/Ti9l2ujNwOMxdnNggfrEGypQ5723/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }



  getBorrow5(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/tsH3xGijXLdzTLQEkJsqhKUpfFp2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow4(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/pPpn9VIbcQVEaS21Ti7oK6XNgX13/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getBorrow3(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/VvApMN5JLGYjwABPyeF9XcGeZ3z2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow2(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/2Pm9lElw9Rdg5jckyp2eR0ky8sH3/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getBorrow(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('/borrow/SivvbPXSInMEBIHaLbYYcexurdq2/things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  getDonations32(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/a6XSlhF3EGaj8YIB3jXgsy6mmLP2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations31(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/0VfzeHMXm7WRj0HaeAxheXmCv3J3/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations30(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/09XUJt1gMRh8sTuZ3nSi4J81Plo2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


 getDonations29(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/0oEULf0ZO2MXuQn1RzeJylPptl13/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }



 getDonations28(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/yvwjp0G9wHWZQ3B8DdPaekHyaiz1/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


 getDonations27(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/mTv0ZlPthBeveqgEt2p7kobj1uh1/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }



 getDonations26(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/QzdbRbeJoyVbxR9UPp4tbK6GpkT2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


 getDonations25(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/3uxS0Nqfz0Oc6Xx26GVwYTpmnmf2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


 getDonations24(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/UhdynffdPcb9E00GlScw7jeEisp1/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


 getDonations23(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/uxcKa9K2DNeWEHcrLbs6kWuVx5W2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


 getDonations22(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/5iPhOety9aaqc8IaUPuw0VfHxks2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


 getDonations21(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/sHvjQU74RKfoWYcHSZmC4VIGRel2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations20(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/inXlqicz0ZNKXj0xNLWXVprhD3A3/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations19(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/nm9ZiVAf3QSOPMnFa5vu7Ud7Ceg1/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations18(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/a6X2x8u4h2P7veMT63Ad1tOlaaH3/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getDonations17(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/24ilQAPmqdg9qHFsdAprosWMLXp1/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations16(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/c8aEI1aXR1W8PY2dlyhMcFVGEkG3/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }



  getDonations15(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/6iiBvB1bKdZ4btgfv6S8O5cyFDR2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations14(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/ESl0yzYVdpOOXXXhxMQRX0WzZy43/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations13(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/83qE2l9DGoZ0Rv11kehiG7tr0k53/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations12(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/2JlP3BxAdZWJNGxmyawgM4vDTFE2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations11(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/5ZdWOdcWgtQI0quIwoX6TNDMGQe2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }

  getDonations10(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/EiZrVk9wFEh70CijEVeCqOvxgF13/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations9(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/QeayQ5pULNb94BkOLhTx82cp56F2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }



  getDonations8(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/i1TJy3Yz5HNyzsfstzoKzjN03Bn2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations7(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/igH0MFbMHwQ3QGqKcYZ93hqXeVm2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }




  getDonations6(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/Ti9l2ujNwOMxdnNggfrEGypQ5723/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }



  getDonations5(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/tsH3xGijXLdzTLQEkJsqhKUpfFp2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations4(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/pPpn9VIbcQVEaS21Ti7oK6XNgX13/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations3(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/VvApMN5JLGYjwABPyeF9XcGeZ3z2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getDonations2(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/2Pm9lElw9Rdg5jckyp2eR0ky8sH3/donations').snapshotChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          })
    });
  }

  getDonations(){
    return new Promise<any>((resolve, reject) => {
      //let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate/SivvbPXSInMEBIHaLbYYcexurdq2/donations').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  getDonation(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('donate').doc(currentUser.uid).collection('donations').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots);
      })
    });
  }

  getBorrows(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('borrow').doc(currentUser.uid).collection('things').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getSale(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('food').doc(currentUser.uid).collection('sales').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  getJob(){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.snapshotChangesSubscription = this.afs.collection('job').doc(currentUser.uid).collection('offers').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
    });
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  unsubscribeOnLogOut(){
    //remember to unsubscribe from the snapshotChanges
    // debugger;
    this.snapshotChangesSubscription.unsubscribe();
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  updateDonation(taskKey, value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('donate').doc(currentUser.uid).collection('donations').doc(taskKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  updateBorrow(taskKey, value2){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('borrow').doc(currentUser.uid).collection('things').doc(taskKey).set(value2)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }


  updateSale(taskKey, value3){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('food').doc(currentUser.uid).collection('sales').doc(taskKey).set(value3)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  updateJob(taskKey, value4){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('job').doc(currentUser.uid).collection('offers').doc(taskKey).set(value4)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  deleteDonation(taskKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('donate').doc(currentUser.uid).collection('donations').doc(taskKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }

  deleteBorrow(taskKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('borrow').doc(currentUser.uid).collection('things').doc(taskKey).delete()
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  deleteSale(taskKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('food').doc(currentUser.uid).collection('sales').doc(taskKey).delete()
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }


  deleteJob(taskKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('job').doc(currentUser.uid).collection('offers').doc(taskKey).delete()
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  createDonation(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('donate').doc(currentUser.uid).collection('donations').add({
        fullname: value.fullname,
        title: value.title,
        description: value.description,
        image: value.image
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }


  createBorrow(value2){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('borrow').doc(currentUser.uid).collection('things').add({
        fullname2: value2.fullname2,
        title2: value2.title2,
        description2: value2.description2,
        image2: value2.image2
      })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }


  createSale(value3){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('food').doc(currentUser.uid).collection('sales').add({
        fullname3: value3.fullname3,
        title3: value3.title3,
        description3: value3.description3,
        image3: value3.image3
      })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }


  createJob(value4){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('job').doc(currentUser.uid).collection('offers').add({
        fullname4: value4.fullname4,
        title4: value4.title4,
        description4: value4.description4,
        image4: value4.image4
      })
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  uploadImage(imageURI, randomId){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child(randomId);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
          .then(res => resolve(res))
        }, err => {
          reject(err);
        })
      })
    })
  }

  uploadImage2(imageURI, randomId){
    return new Promise<any>((resolve, reject) => {
      let storageRef2 = firebase.storage().ref();
      let imageRef2 = storageRef2.child('image2').child(randomId);
      this.encodeImageUri(imageURI, function(image64){
        imageRef2.putString(image64, 'data_url')
          .then(snapshot => {
            snapshot.ref.getDownloadURL()
              .then(res => resolve(res))
          }, err => {
            reject(err);
          })
      })
    })
  }


  uploadImage3(imageURI, randomId){
    return new Promise<any>((resolve, reject) => {
      let storageRef3 = firebase.storage().ref();
      let imageRef3 = storageRef3.child('image3').child(randomId);
      this.encodeImageUri(imageURI, function(image64){
        imageRef3.putString(image64, 'data_url')
          .then(snapshot => {
            snapshot.ref.getDownloadURL()
              .then(res => resolve(res))
          }, err => {
            reject(err);
          })
      })
    })
  }


  uploadImage4(imageURI, randomId){
    return new Promise<any>((resolve, reject) => {
      let storageRef4 = firebase.storage().ref();
      let imageRef4 = storageRef4.child('image4').child(randomId);
      this.encodeImageUri(imageURI, function(image64){
        imageRef4.putString(image64, 'data_url')
          .then(snapshot => {
            snapshot.ref.getDownloadURL()
              .then(res => resolve(res))
          }, err => {
            reject(err);
          })
      })
    })
  }



}
