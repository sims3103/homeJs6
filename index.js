'use strict';

// 1. Создать рекурсивную функцию вычисления факториала числа.Факториал - произведение всех натуральных чисел от 1 до x.
// 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorial(x) {
  return (x != 1) ? x * factorial(x - 1) : 1;
}
console.log(factorial(5));