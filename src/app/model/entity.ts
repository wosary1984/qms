
// 用户信息实体类
export class User {
  id?: number;
  username: string;
  password: string;
  userPermissions?: string[] = [];
}

export class Person {
  id?: number;
  firstname: string;
  lastname: string;
  identityno?: string;
  gender:string;
  birthdate:any;
}

// 登录信息实体类
export class Auth {
  user: User;
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
  isLogged: boolean;
  xsrfToken: string;
}

export class BackMessage {

  action: string;
  code: number;
  status: string;
  data: {
    userName: string;
    isLogged: boolean;
    userPermissions: string[];
  };
  message: string;
  xsrfToken: string;
}
