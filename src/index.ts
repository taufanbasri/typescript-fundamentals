class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount < 0) throw new Error("Invalid amount");

    this.balance += amount;
  }
}

let acount = new Account(1, "Taufan", 0);
acount.deposit(1000);

console.log(acount);
console.log(typeof acount);
console.log(acount instanceof Account);
