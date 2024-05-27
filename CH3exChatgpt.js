// (1) 計算2的十次方
const result1 = 2 ** 10;
console.log('(1) 2的十次方:', result1); // 1024

// (2) 計算100除以7的商和餘數
const quotient = Math.floor(100 / 7);
const remainder = 100 % 7;
console.log('(2) 100除以7的商:', quotient); // 14
console.log('(2) 100除以7的餘數:', remainder); // 2

// (3) 計算10除以3的結果並保留2位小數
const result3 = (10 / 3).toFixed(2);
console.log('(3) 10除以3的結果:', result3); // 3.33

// (4) 將字串"5"轉換成數值型別，然後加上10
const num4 = parseInt("5") + 10;
console.log('(4) "5"轉換成數值型別並加上10:', num4); // 15

// (5) 計算圓形的面積，半徑為7
const radius = 7;
const area = Math.PI * radius * radius;
console.log('(5) 圓形的面積:', area.toFixed(2)); // 153.94

// (6) 將字串"hello"與字串"world"連起來
const combinedStr = "hello" + "world";
console.log('(6) 連接後的字串:', combinedStr); // helloworld

// (7) 計算數字123的個位數字
const unitsDigit = 123 % 10;
console.log('(7) 數字123的個位數字:', unitsDigit); // 3

// (8) 將數字4轉換成字串型別，然後連接上字串"2"
const str8 = String(4) + "2";
console.log('(8) 數字4轉換成字串型別並連接上"2":', str8); // "42"

// (9) 判斷數字15是否在10到20的範圍內
const num9 = 15;
const isInRange = num9 >= 10 && num9 <= 20;
console.log('(9) 數字15是否在10到20的範圍內:', isInRange); // true

// (10) 判斷字串"hello"是否既不是空字串也不是undefined
const str10 = "hello";
const isValidString = str10 !== "" && str10 !== undefined;
console.log('(10) 字串"hello"是否不是空字串且不是undefined:', isValidString); // true

// (11) 判斷數字25是否為偶數
const num11 = 25;
const isEven = num11 % 2 === 0;
console.log('(11) 數字25是否為偶數:', isEven ? "Even" : "Odd"); // Odd

// (12) 比較數字x和數字y的大小
const x = 10;
const y = 20;
const largerNumber = x > y ? x : y;
console.log('(12) 數字x和數字y中較大的數字:', largerNumber); // 20