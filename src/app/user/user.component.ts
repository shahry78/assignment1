import { Component, OnInit } from '@angular/core';
import { Channel } from '../classes';
import { HeroService } from '../services/hero.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  channels: Channel[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getChannels();
  }

  getChannels(): void {
    this.heroService.getChannels()
    .subscribe(channels => this.channels = channels);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addChannel({ name } as Channel)
      .subscribe(hero => {
        this.channels.push(hero);
      });
  }

  delete(hero: Channel): void {
    this.channels = this.channels.filter(h => h !== hero);
    this.heroService.deleteChannel(hero).subscribe();
  }

}
