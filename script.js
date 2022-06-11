// 1.Viết hàm USD2VND(n), hàm nhận một tham số (input) n là số tiền USD,
// Tính và in ra số tiền tương ứng theo mệnh giá Việt Nam theo công thức:

let USD2VND = function (n) {
  let tong = n * 23.5;

  console.log(`VND = ${tong}`);
};

USD2VND(5);
USD2VND(10);

// 2.Tính lãi suất kép ngân hàng (kỳ quan thứ 8)
// Viết hàm compoundInterest(P, r, n, t), hàm nhận 4 tham số (input):

// P: số tiền gốc ban đầu
// r: lãi suất hàng năm
// n: số lần ghép lãi 1 năm (*)
// t: số năm gửi ngân hàng
// (*) Ví dụ gửi theo tháng thì 1 năm ghép lãi 12 lần => n = 12, gửi theo quý (3 tháng) thì 1 năm ghép lãi 4 lần => n = 4, gửi theo năm thì 1 năm ghép lãi 1 lần => n = 1, …

// Công thức:

// A = P * (1 + r / n)**(n * t)

let compoundInterest = function (P, r, n, t) {
  let tong = P * (1 + r / n) ** (n * t);

  console.log(`${tong} = ${P} * (1 + ${r} / ${n})**(${n} * ${t}) = A`);
};

compoundInterest(2000000, 1.6, 12, 2);
