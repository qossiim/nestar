// ZK -Task

function printNumbers(): void {
  let num = 1; // boshlanish qiymati

  const interval = setInterval(() => {
    console.log(num); // har 1 sekundda sonni chiqaradi

    num++; // keyingi songa o‘tadi

    if (num > 5) { // agar 5 dan oshsa
      clearInterval(interval); // intervalni to‘xtatadi
    }
  }, 1000); // 1000ms = 1 sekund
}

// printNumbers();