export class User {
  picUrl:   string;   // VERIFY THIS NAME REFERENCE TO AVOID MAPPING
  username: string;
}

export class UserCreds {
  email:      string;
  password:   string;
  newAccount: boolean;
  termsCond:  boolean;
}

export class UserInfo extends User {
  email:  string;
}
