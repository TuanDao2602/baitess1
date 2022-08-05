// bài 1 Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và
// in ra kết quả. (1đ)
// ● Đầu vào: str
// ● Đầu ra: đảo ngược chuỗi và in ra kết quả
// ● Ví dụ:
// ○ Cho: str = &quot;program&quot;; in ra: &quot;margorp&quot;
// ○ Cho: str = &quot;data&quot;; in ra: &quot;atad&quot;
// ● Lưu ý: không sử dụng hàm reverse()

// let userInput = prompt('nhập vào chuỗi bạn muốn');
// let outPut = '';
// for(i=userInput.length-1; i>=0; i--){
//     outPut= outPut + userInput[i];
// }console.log(outPut);

//bài 2Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra
//chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
// let userInput= prompt(' nhập vào 1 chuỗi kí tự ').toLowerCase();
// let a = userInput.split(' ');
// for(let i = 0 ; i<a.length; i++){
//     a[i] = a[i][0.].toUpperCase() + a[i].slice(1);
// }let b = a.join(' ');
// console.log(b);

//bài 4Viết một chương sắp xếp các phần tử là số ở trong
// mảng theo thứ tự tăng dần. (1đ)
// ● Đầu vào: 1 mảng
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
// ● Ví dụ
// ○ Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]

// let arr = [5,2,3,4,1];
// for (let i = 0; i <= arr.length - 1; i++) {
//     for (let a = i + 1; a <= arr.length-1; a++) {
//         if (arr[a] < arr[i]) {
//             let b = arr[i];
//             arr[i] =arr[a];
//             arr[a] = b;
//         }
//     }
// } console.log(arr);




//bài 5 Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên
// nhân viên). Xây dựng chương trình quản lý nhân viên với các
// chức năng (Read, Create, Update, Delete). (2đ)
// let nhanVien = [ "Linh ", "Diệp", "Phú"] ;
// state = true;
// while(state){
// let userInput = prompt(' mời bạn nhập vào C/R/U/D').toLowerCase();
// if(userInput === "c"){
//     let them = prompt(' mời bạn nhập tên muốn thêm');
//     nhanVien.push(them)
//     for(i=0 ; i <= nhanVien.length-1;i++){
//         console.log((i + 1) + " ."+ nhanVien[i]);
       
//     } 
// }else if(userInput==="r"){
//     for(i=0 ; i <= nhanVien.length-1;i++){
//         console.log((i +1) + " ."+ nhanVien[i]);
// } 
// }else if(userInput==="u"){
//     let update= prompt("nhập vào vị trí muốn update")
//     let update2= prompt("nhập vào tên nhân viên update ")
//      nhanVien[update]=update2;
//      for(i=0;  i<= nhanVien.length-1; i++){
//         console.log((i + 1) + " ."+ nhanVien[i]);
//      }

// }else if (userInput === "d") {
//         let Delete = prompt(" nhập vào vị trí muốn xóa");
//         nhanVien.splice(Delete, 1);
//         for (i = 0; i < nhanVien.length; i++) {
//             console.log(i + '.' + nhanVien[i]);
//         }
// }else{
//     state= false
//     break;
// }
// }

// BÀI 7( chưa làm dc)
// let bookStore = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm"];
// let cart = [];
// for (let i = 0; i <= bookStore.length - 1; i = i + 1) {
//         console.log(`${i + 1}. ${bookStore[i]}`);
//       }
// let userInput = prompt("Nhập vào chữ C/R/U/D/E");
// if(userInput==="C") {
//     let canTim= prompt("MỜI BẠN NHẬP ITEAM CẦN TÌM");
//     let index = -1;
//     for (let i = 0; i <= store.length - 1; i = i + 1) {
//       if (cantim === bookStore[i]) {
//         index= i;
//       }
//     }
// }