const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は 0 から始まるため、+1 する
const day = today.getDate();

console.log(`${year}年${month}月${day}日`); 

