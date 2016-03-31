import {login} from '../api/login';

export class LoginService {

  loginUser(username: string, password: string) {
    return login(username, password);
  }

}
