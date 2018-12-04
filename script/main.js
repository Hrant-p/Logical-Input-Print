let arr = [], in1, in2, i;

function fullName(arr, in1, in2){
    in1 = document.getElementById("inp1").value;
    in2 = document.getElementById("inp2").value;
    let text,
        area = document.getElementById("field"),
        reg = /[@!#$%^&*()_+|~=`{}\[\]:;<>?,\/123456789]/g;
    if( reg.test(in1) || reg.test(in2)  === true ) {
        text = " ";
        alert(`Please enter the correct firstname & lastnamme`);
    } else {
        arr.push(`${in1} ${in2}`);
        text = `${arr.length}. ${in1} ${in2}<br>`;
    }
       
    if(true){
    for(i = 0; i < arr.length; i++){
        if(arr[i - 1] === `${in1} ${in2}`){
            arr.pop();
            console.log(i, arr, false);
            alert(`This username is already exist in the names list`)
            text = " ";
            } else if (arr[i] === " "){
            arr.pop();
            text = " "
            alert(`Text input field is empty`);
            }
        }
    }
    area.innerHTML += text;
}



//////////////// 🙌 //////////////////////