//Task# 1

//Boolean(Number(’10’)) + 1;     - вернет 2;
//‘sub ’ + Number(false);        - вернет sub0;
//16  *  ‘      91    ‘;         - вернет 1456;
//true-70;                       - вернет -69;
//Number(1 + String(1)) + 1;     - вернет 12;


//Task# 2

const secPerHour = 3600;
const hours = +prompt('Введите колличество часов');
const result = secPerHour * hours;
alert (`Во введеном Вами колличестве часов ${result} секунд`);


//Task# 3

//let num = 1;
//num = num + 12;
//num = num — 14;
//num = num * 5;
//num = num / 7;
//num = num + 1;
//num = num — 1;
//alert(num);

let num = 1;
num += 12;
num -=14;
num*=5;
num /= 7;
num++;
num--;
alert(num);