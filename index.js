function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  while (katzDeliLine.length > 0) {
    return katzDeliLine [0];
  }
  if (katzDeliLine.length > 0) {
    katzDeliLine.pop();
  } else {
    return "There is nobody waiting to be served!";
  }
}