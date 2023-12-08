class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

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
