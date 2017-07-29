import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/find'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/from'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  form: FormGroup;
  repoName;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder) {

    this.repoName = new FormControl('');
    this.form = this.formBuilder.group({
      repoName: this.repoName
    });
  }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f);
  }

  onKeyUp() {
    console.log(this.repoName);

    this.accountService.getRepos()
      .find(x => {
        this.repoName.setErrors(null);
        return x['name'] == this.repoName.value
      })
      .subscribe(x => {
        if (x) {
          this.repoName.setErrors({
            remote: false
          });
        }
      });
  }
}
