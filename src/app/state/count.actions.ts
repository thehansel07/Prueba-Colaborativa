export class Add {
  static readonly type = '[Add] Add number';
  constructor(public add: number) {}
}

export class Subtraction {
  static readonly type = '[subtraction] subtraction numbers';
  constructor(public subtraction: number) {}
}
