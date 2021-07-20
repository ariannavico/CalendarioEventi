//import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Injectable } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDatepicker, NgbDatepickerKeyboardService, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const Key = {
  PageUp: 'PageUp',
  PageDown: 'PageDown',
  End: 'End',
  Home: 'Home'
};

@Injectable()
export class CustomKeyboardService extends NgbDatepickerKeyboardService {
  processKey(event: KeyboardEvent, dp: NgbDatepicker) {
    const state = dp.state;
    switch (event.code) {
      case Key.PageUp:
        dp.focusDate(dp.calendar.getPrev(state.focusedDate, event.altKey ? 'y' : 'm'));
        break;
      case Key.PageDown:
        dp.focusDate(dp.calendar.getNext(state.focusedDate, event.altKey ? 'y' : 'm'));
        break;
      case Key.End:
        dp.focusDate(event.altKey ? state.maxDate : state.lastDate);
        break;
      case Key.Home:
        dp.focusDate(event.altKey ? state.minDate : state.firstDate);
        break;
      default:
        super.processKey(event, dp);
        return;
    }
    event.preventDefault();
    event.stopPropagation();


  }
}
@Component({
  selector: 'app-events-calendar',
  templateUrl: './events-calendar.component.html',
  styleUrls: ['./events-calendar.component.scss']
})
export class EventsCalendarComponent implements OnInit {

  constructor() { }

  hasEvent = (date: NgbDate) => {
    this.elements = this.events.find((e:any) =>  {
      if (e.day == date.day && e.month == date.month && e.year == date.year) {
        return true     
      } else {
        return false
      }
    });
    console.log(this.elements);
    return this.elements
  }
  hasMyEvent = (date: NgbDate) => {
    this.myElements = this.myEvents.find((e: any) => {
      if (e.day == date.day && e.month == date.month && e.year == date.year) {
        return true
      }
      else {
        return false
      }
    });
    return this.myElements
  }
    ;
  //myDateCustom: any
  //dateCustom: any
  elements: any
  myElements: any
  model: any
  myModel: any
  todayEvent: any
  todayMyEvent: any
  scheda: any
  showEvent: boolean = false
  showMyEvent: boolean = false
  showScheda: boolean = false
  dayTemplate: any


  events: any = [
    /* { day: 1, month: 5, year: 2021, event: 'Skillet', ore: '17.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245 Roma, Roma 00178 Italia', lat:41.820745, lng:12.5666, img: "https://i.pinimg.com/originals/b6/8e/b8/b68eb896062e0ac2e07e162e91e68ad0.jpg" },
    { day: 2, month: 5, year: 2021, event: 'Paul Kalkbrenner', ore: '17.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245 Roma, Roma 00178 Italia',  lat:41.820745, lng:12.5666, img: "https://imgproxy.ra.co/_/quality:100/plain//images/events/flyer/2009/de-1017-119454-front.jpg" },
    { day: 3, month: 5, year: 2021, event: 'Niccolò Fabi', ore: '18.00', place: 'Auditorium Parco della Musica, Via Pietro de Coubertin, 30, Roma 00196 Italia', lat:41.9206, lng:12.471227, img: "https://a6p8a2b3.stackpathcdn.com/biSM8WowTFHNYQvdV-GhXEisVr0=/300x300/smart/rockol-img/img/foto/upload/niccolofabi-fotoufficiale-simonececchetti-hq.jpg" },
    { day: 4, month: 5, year: 2021, event: 'The Chemical Brothers', ore: '20.00', place: 'Auditorium Parco della Musica, Via Pietro de Coubertin, 30, Roma 00196 Italia', lat:41.92906, lng:12.471227, img: "https://di1w2o32ai2v6.cloudfront.net/images/detailed/3/tcb.jpg?t=1574732900" },
    { day: 5, month: 5, year: 2021, event: 'Ketama 126', ore: '19.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245 Roma, Roma 00178 Italia', lat:41.820745, lng:12.5666, img: "https://i0.wp.com/www.hiphopstarztour.com/wp-content/uploads/2021/04/ketama126-0421-coverpage.jpg?resize=356%2C220&ssl=1" },
    { day: 6, month: 5, year: 2021, event: 'The Lumineers', ore: '18.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245 Roma, Roma 00178 Italia', lat:41.820745, lng:12.5666, img: "https://cdn.shopify.com/s/files/1/1486/5206/products/Lumineers_Parade_720x.jpg?v=1569035070" },
    { day: 7, month: 5, year: 2021, event: 'Cigarette After Sex', ore: '20.00', place: "Atlantico, Viale Dell'Oceano Atlantico 271 D, 00144 Roma Italia", lat:41.815163, lng:12.462349, img: "https://www.smartticket.cn/uploads/smartticket/flyer/smartticket1539771124.jpg" },
    { day: 8, month: 5, year: 2021, event: 'Frah Quintale', ore: '20.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245 Roma, Roma 00178 Italia', lat:41.820745, lng:12.5666, img: "https://s.mxmcdn.net/images-storage/albums4/9/6/0/3/7/5/38573069_800_800.jpg" },
    { day: 9, month: 5, year: 2021, event: 'Devenra Branhart', ore: '18.00', place: 'Auditorium Parco della Musica, Via Pietro de Coubertin, 30, Roma 00196 Italia', lat:41.92906, lng:12.471227, img: "https://i.pinimg.com/originals/5b/c5/22/5bc522ceb26b202e8e8779e70b69937a.jpg" },
     */{ day: 10, month: 5, year: 2021, event: 'Ozuna', ore: '19.00', place: 'Auditorium Parco della Musica, Via Pietro de Coubertin, 30, Roma 00196 Italia', lat: 41.92906, lng: 12.471227, img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/431bee92170091.5e4448c3a7539.png" },
    { day: 11, month: 5, year: 2021, event: 'Willie Peyote', ore: '20.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245 Roma, Roma 00178 Italia', lat: 41.820745, lng: 12.5666, img: "https://s.mxmcdn.net/images-storage/albums4/0/6/9/0/5/6/46650960_800_800.jpg" },
    { day: 12, month: 5, year: 2021, event: 'Psicologi', ore: '18.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245, Roma 00178 Italia', lat: 41.820745, lng: 12.5666, img: "https://a6p8a2b3.stackpathcdn.com/l6E2jjdNr69UOTxDw4vs10l4tsk=/300x300/smart/rockol-img/img/foto/upload/5dae65431e3a5cfe5aa0af0649515284-1000x1000x1.jpg" },
    { day: 13, month: 5, year: 2021, event: 'Brunori Sas', ore: '18.00', place: 'Auditorium Parco della Musica, Via Pietro de Coubertin, 30, Roma 00196 Italia', lat: 41.92906, lng: 12.471227, img: "https://www.unipolarena.it/wp-content/uploads/2019/09/Brunori.jpg" },
    { day: 14, month: 5, year: 2021, event: 'Deep Purple', ore: '20.00', place: "Atlantico, Viale Dell'Oceano Atlantico 271 D, 00144 Roma Italia", lat: 41.815163, lng: 12.462349, img: "https://i.pinimg.com/originals/0e/f6/68/0ef6686ace1ca646d65cbce07b5abfaa.jpg" },
    { day: 15, month: 5, year: 2021, event: 'God Is An Astronaut', ore: '20.00', place: 'Auditorium Parco della Musica, Via Pietro de Coubertin, 30, Roma 00196 Italia', lat: 41.92906, lng: 12.471227, img: "https://i.pinimg.com/originals/da/d1/62/dad162e6494bc7069faaa199b450f3dd.jpg" },
    { day: 16, month: 5, year: 2021, event: 'Carl Brave', ore: '21.00', place: "Atlantico, Viale Dell'Oceano Atlantico 271 D, 00144 Roma Italia", lat: 41.815163, lng: 12.462349, img: "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2020/carl-brave-biglietti.jpg" },
    { day: 17, month: 5, year: 2021, event: 'Gazzelle', ore: '20.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245 Roma, Roma 00178 Italia', lat: 41.820745, lng: 12.5666, img: "https://www.teamworld.it/wp-content/uploads/2020/10/Gazzelle-Tour-2021.jpg" },
    { day: 18, month: 5, year: 2021, event: 'Paul Weller', ore: '18.00', place: 'Auditorium Parco della Musica, Via Pietro de Coubertin, 30, Roma 00196 Italia', lat: 41.92906, lng: 12.471227, img: "https://i.pinimg.com/736x/68/e5/ed/68e5edb16df11d7fd40c7e2ff3b2e89e--tour-posters-band-posters.jpg" },
    { day: 19, month: 5, year: 2021, event: 'Levante ', ore: '20.00', place: "Atlantico, Viale Dell'Oceano Atlantico 271 D, 00144 Roma Italia", lat: 41.815163, lng: 12.462349, img: "https://www.ticketone.it/obj/media/IT-eventim/galery/222x222/l/levante-biglietti-3.jpg" },
    { day: 20, month: 5, year: 2021, event: 'Tiziano Ferro', ore: '19.00', place: "Atlantico, Viale Dell'Oceano Atlantico 271 D, 00144 Roma Italia", lat: 41.815163, lng: 12.462349, img: "https://dynamicmedia.livenationinternational.com/Media/p/i/e/5004f277-6d0d-4845-a251-2c7992b1b19f.jpg" },
    { day: 21, month: 5, year: 2021, event: 'Venerus', ore: '19.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245 Roma, Roma 00178 Italia', lat: 41.820745, lng: 12.5666, img: "https://a6p8a2b3.stackpathcdn.com/sYNAjJmnI7D1NB2ipplepBJ9oJA=/1200x900/smart/rockol-img/img/foto/upload/magica-musica-venerus-cover-ts1613689462.jpeg" },
    { day: 22, month: 5, year: 2021, event: 'Marco Masini', ore: '20.00', place: "Atlantico, Viale Dell'Oceano Atlantico 271 D, 00144 Roma Italia", lat: 41.815163, lng: 12.462349, img: "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2020/masini-biglietti-2.jpg" },
    { day: 23, month: 5, year: 2021, event: 'Almamegretta', ore: '18.00', place: "Atlantico, Viale Dell'Oceano Atlantico 271 D, 00144 Roma Italia", lat: 41.815163, lng: 12.462349, img: "https://www.jamsession20.com/wp-content/uploads/2020/10/Almamegretta_-ph.-Camillo-Ripaldi.jpg" },
    { day: 24, month: 5, year: 2021, event: 'Myss Keta', ore: '18.00', place: 'Auditorium Parco della Musica, Via Pietro de Coubertin, 30, Roma 00196 Italia', lat: 41.92906, lng: 12.471227, img: "https://metropolitanmagazine.it/wp-content/uploads/2021/05/myss-keta2-e1555340054526-min.jpeg" },
    { day: 25, month: 5, year: 2021, event: 'Umberto Tozzi', ore: '18.00', place: 'Auditorium Parco della Musica, Via Pietro de Coubertin, 30, Roma 00196 Italia', lat: 41.92906, lng: 12.471227, img: "https://lh3.googleusercontent.com/proxy/R-IxLQaHjqEkRp_Q12ncDVHmoSZ0AkoHRGnE2St1_WGOGrD95l2DIHBahD0d48heVsOYedPaZjunkWJdLIyG4WSCS0T2A9WfqGDi-sIOcgzNH-sHilEPuz9S9U9-1eIa-khZeXMExpJcxA" },
    { day: 26, month: 5, year: 2021, event: 'Dardust', ore: '20.00', place: "Atlantico, Viale Dell'Oceano Atlantico 271 D, 00144 Roma Italia", lat: 41.815163, lng: 12.462349, img: "https://www.concertiaroma.com/media/appimage/eb3faa017152c1d547d45fe8f4f43316682dee3e835b1c96bd539e08cb00e873_9kscDhf.jpg" },
    { day: 27, month: 5, year: 2021, event: 'Ghemon', ore: '21.00', place: "Atlantico, Viale Dell'Oceano Atlantico 271 D, 00144 Roma Italia", lat: 41.815163, lng: 12.462349, img: "https://www.concertiaroma.com/media/appimage/fa772264f2dcbbff3344a3a5aef637df33369f2313251804a3629b96516654a5_at5L8J9.jpg" },
    { day: 28, month: 5, year: 2021, event: 'Robben Ford', ore: '17.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245 Roma, Roma 00178 Italia', lat: 41.820745, lng: 12.5666, img: "https://citynews-romatoday.stgy.ovh/~media/original-hi/8542107929528/robben-ford-3.jpg" },
    { day: 29, month: 5, year: 2021, event: 'Fabrizio Moro', ore: '18.00', place: "Atlantico, Viale Dell'Oceano Atlantico 271 D, 00144 Roma Italia", lat: 41.815163, lng: 12.462349, img: "https://www.ticketone.it/obj/media/IT-eventim/teaser/222x222/2021/fabrizio-moro-biglietti-2.jpg" },
    { day: 30, month: 5, year: 2021, event: 'Mecna', ore: '17.00', place: 'Ippodromo delle Capannelle, Via Appia Nuova, 1245 Roma, Roma 00178 Italia', lat: 41.820745, lng: 12.5666, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WKIE0QAxS3JubVe7TUlqlrkO7C1s9m3ptw&usqp=CAU" },
    { day: 31, month: 5, year: 2021, event: 'Beck', ore: '20.00', place: 'Auditorium Parco della Musica, Via Pietro de Coubertin, 30, Roma 00196 Italia', lat: 41.92906, lng: 12.471227, img: "https://i.pinimg.com/736x/f6/7b/79/f67b795e128db7b20492f0bd67bdb97d.jpg" }
  ]
  myEvents: any = []



  ngbDatepickerDayView: any


  ngOnInit(): void {
    console.log(this.ngbDatepickerDayView);

  }

  showDate(e: any) {
    console.log(e);
    this.todayEvent = this.events.find((i: any) => { return i.day === e.day });
    this.showEvent = true
  }

  hideEvent() {
    this.showEvent = false
    this.showMyEvent = false
  }
  aggiungiEvento(d: any) {
    this.myEvents.push(d)
    this.scheda = d
    console.log(this.myEvents);
    this.hideEvent()
    this.showScheda = true;
    setTimeout(() => {
      this.showScheda = false
    }, 1000)
  }
  showMyDate(e: any) {
    console.log(e);
    this.todayMyEvent = this.myEvents.find((i: any) => {
      if (i.day === e.day) {
        this.showMyEvent = true;
        return i;
      }
    });
    if (this.todayMyEvent === undefined) {
      alert('non hai nessun evento per oggi')
    }
    console.log();

  }

  removeMyEvent(event: any) {
    this.myEvents = this.myEvents.filter((e: any) => {
      return e !== event;
    })
    this.showMyEvent = false;
    alert('evento rimosso')
    console.log(this.myEvents);
  }

}
