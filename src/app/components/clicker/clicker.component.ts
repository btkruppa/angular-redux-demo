import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ClickerState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { UpdateClicks } from 'src/app/actions/clicker.actions';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {

  clicker$: Observable<ClickerState>;

  constructor(private store: Store<{ clicker: ClickerState }>) {
    this.clicker$ = store.pipe(select('clicker'));
  }

  increment(amount: number) {
    this.store.dispatch(new UpdateClicks(amount));
  }

  ngOnInit() {
  }

}
