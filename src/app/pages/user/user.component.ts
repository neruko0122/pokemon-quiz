import { Component, OnInit } from '@angular/core'
import { UsersService } from 'src/app/shared/services/users.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  response: any

  ngOnInit(): void {}

  find() {
    this.usersService.findUser().subscribe(res => {
      this.response = res.json()
      console.log(this.response)
    })
  }

  create() {
    var user = {
      userId: 'user3',
      nickName: 'fugaga'
    }
    this.usersService.createUser(user).subscribe(res => {
      console.log(res)
    })
  }
}
