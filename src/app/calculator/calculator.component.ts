import { Component, OnInit } from '@angular/core';
import {Expression} from "./expression";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  inputValue: string;
  expression: Expression = new Expression();
  history: Expression[] = [];

  ngOnInit() {
  }

  plus() {
    this.setOperation('+');
  }

  divide() {
    this.setOperation('/');
  }

  multiply() {
    this.setOperation('*');
  }

  setOperation(operation: string) {
    this.expression.firstOperand = this.parseInput();
    this.expression.operation = operation;
  }

  calculate() {
    this.expression.secondOperand = this.parseInput();
    switch (this.expression.operation) {
      case '+':
        this.expression.result = this.expression.firstOperand + this.expression.secondOperand;
        break;

      case '/':
        this.expression.result = this.expression.firstOperand / this.expression.secondOperand;
        break;

      case '*':
        this.expression.result = this.expression.firstOperand * this.expression.secondOperand;
        break;
    }
    this.history.push(this.expression);
    this.expression = new Expression();
  }

  private parseInput(): number {
    const parsedValue: number = parseInt(this.inputValue, 10);
    this.inputValue = '';
    return parsedValue;
  }
}
