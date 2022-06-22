import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalModalPage } from '../cal-modal/cal-modal.page';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor(
    private menu: MenuController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menu.toggle();
  }

  next() {
    this.myCal.slideNext();
  }

  prev() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  createRandomEvents() {
    let events = [];

    for (let i = 0; i < 50; i++) {
      let date = new Date();
      let eventType = Math.floor(Math.random() * 2);
      let startDay = Math.floor(Math.random() * 90) - 45;
      let endDay = Math.floor(Math.random() * 2) + startDay;
      let startTime;
      let endTime;

      if (eventType === 0) {
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );

        if (endDay === startDay) {
          endDay++;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay
          )
        );
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true,
        });
      } else {
        let startMinute = Math.floor(Math.random() * 24 * 60);
        let endMinute = Math.floor(Math.random() * 180) + startMinute;

        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay,
            0,
            date.getMinutes() + startMinute
          )
        );
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay,
            0,
            date.getMinutes() + endMinute
          )
        );
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }
    }
    this.eventSource = events;
  }

  removeEvents() {
    this.eventSource = [];
  }

  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false,
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event) {
        let event = result.data.event;
        if (event.allDay) {
          let start = event.startTime;
          event.startTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate()
            )
          );
          event.endTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate() + 1
            )
          );
        }
        this.eventSource.push(result.data.event);
        this.myCal.loadEvents();
      }
    });
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    return date < current;
  };
}
