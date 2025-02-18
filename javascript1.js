

let calculator = document.getElementById("calculator");

function clearScreen() {
    document.getElementById('given').value = '';
}

function addgiven(value) {
    document.getElementById('given').value += value;
}

function calculate() {
    let ans = document.getElementById('given');
    try {
        const temp=Function('return ' + ans.value);
        const ans1=temp();
        if(ans1==Infinity){
            ans.value='∞';
            setTimeout(clearScreen, 1800);
        }
        else{
            ans.value=ans1;
        }
    } catch (error) {
        ans.value = 'Error';
    }
}
