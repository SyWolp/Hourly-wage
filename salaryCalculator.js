class Calculator {
  constructor() {
    this.result = document.querySelectorAll(".resultPay");
    this.cumma = "";
    this.cumma1 = "";
    this.cumma2 = "";
  }

  calCul(Money,time,weeklyTime,Month,year) {
    this.cumma = (Money * time) * ((weeklyTime * Month) * year);
    this.result[0].value = parseInt(this.cumma).toLocaleString('kr') + "원";
    
    if(time * weeklyTime >= 15){
    this.cumma1 = ((Money * time) * ((weeklyTime * Month) * year)) + (Money * ((time * ((weeklyTime * Month) * year)) / 5));
    this.result[1].value = parseInt(this.cumma1).toLocaleString('kr') + "원";
    }

    else{
      this.result[1].value = "주 15시간 이하 입니다."
    }
    if(time * weeklyTime >= 15){
    this.cumma2 = ((Money * time) * ((weeklyTime * Month) * year)) + (Money * ((time * ((weeklyTime * Month) * year)) / 5)) - (((Money * time) * ((weeklyTime * Month) * year)) / 9.22);
    this.result[2].value = parseInt(this.cumma2).toLocaleString('kr') + "원";
    }
    else{
      this.result[2].value = "주 15시간 이하 입니다."
    }
  }

}
let main = (() => {
let changeMoney = document.querySelector("#changeMoney");
let resultButton = document.querySelector(".resultButton");
let inputMoney = document.querySelector(".inputMoney");
let inputTime = document.querySelector(".inputTime");
let inputWeeklyTime = document.querySelector(".inputWeeklyTime");

this.addEventListener("keyup",function(e){
 if(inputWeeklyTime.value > 7){
   alert("7일을 넘길 수 없습니다.");
   inputWeeklyTime.value = 7;
 }
 if(inputTime.value > 24) {
   alert("24시간을 넘길 수 없습니다.");
   inputTime.value = 24;
 }
 this.value.toLocaleString('kr'); 
})
let resultClass = new Calculator();
resultButton.addEventListener("click", () => {
  if(changeMoney.value == "weeklyPay") {
    resultClass.calCul(inputMoney.value,inputTime.value,inputWeeklyTime.value,1,1);
  }
  if(changeMoney.value == "salaryPay") {
    resultClass.calCul(inputMoney.value,inputTime.value,inputWeeklyTime.value,4.34,1);
  }
  if(changeMoney.value == "AnnualPay") {
    resultClass.calCul(inputMoney.value,inputTime.value,inputWeeklyTime.value,4.34,12);
  }
})
})();