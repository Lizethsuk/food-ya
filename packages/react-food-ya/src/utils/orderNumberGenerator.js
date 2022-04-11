export function orderNumber() {
  let now = Date.now().toString(); // '1492341545873'
  now += now + Math.floor(Math.random() * 10);
  return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-');
}
