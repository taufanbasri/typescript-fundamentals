class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount < 0) throw new Error("Invalid amount");

    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }
}

let acount = new Account(1, "Taufan", 0);
acount.deposit(1000);

console.log(acount);
console.log(typeof acount);
console.log(acount instanceof Account);
console.log(acount.getBalance());
