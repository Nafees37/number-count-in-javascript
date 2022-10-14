// Total Project

let count1 = 0;

let Total_Project = setInterval(myFunction1, 50);

function myFunction1() {
    count1++;
    document.getElementById("num1").innerHTML = count1;

    if (count1 >= 300) {
        clearInterval(Total_Project);
    }
}

// Total Client

let count2 = 0;

let Total_Client = setInterval(myFunction2, 80);

function myFunction2() {
    count2++;
    document.getElementById("num2").innerHTML = count2;

    if (count2 >= 200) {
        clearInterval(Total_Client);
    }
}

// Total Review

let count3 = 0;

let Total_Review = setInterval(myFunction3, 15);

function myFunction3() {
    count3++;
    document.getElementById("num3").innerHTML = count3;

    if (count3 >= 1000) {
        clearInterval(Total_Review);
    }
}
