import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddUser, DeleteUser, ListUsers } from 'src/store/user.action';
import { selectAllUsers } from 'src/store/user.selector';
import { User, UserState } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-entity-state-adapter';
  users$: Observable<User[] | any> = new Observable<User[]>();
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private store: Store<{ users: UserState }>
  ) {
    this.form = this.fb.group({
      firstname: [''],
      lastname: [''],
      handle: [''],
    });
  }

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectAllUsers));
  }

  deleteUser(user: any) {
    this.store.dispatch(new DeleteUser(user));
  }

  addUser() {
    this.store.dispatch(new AddUser(this.form.value));
  }

  refresh() {
    this.store.dispatch(new ListUsers());
  }
}
