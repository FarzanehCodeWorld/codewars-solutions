Description:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer

function digital_root(n) {
	let finalSum = 10, tempSum = 0;
  while (finalSum > 9) {
		while (n > 9) {
			tempSum += n%10;
			n = parseInt(n/10);
		}
    tempSum += n;
    finalSum = tempSum;
    n = finalSum;
    tempSum = 0;
	}
  return finalSum;
}