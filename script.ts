(function() {
    const btn = document.getElementById("btn") as HTMLButtonElement;
    const bmiInput = document.getElementById("bmi-result") as HTMLInputElement;
    const weightCondition = document.getElementById("weight-condition") as HTMLSpanElement;

    btn.addEventListener("click", calculateBMI);


    function calculateBMI() {
        const heightValue = document.getElementById("height").value / 100;
        const weightValue = document.getElementById("weight").value;

        const bmiValue = weightValue / (heightValue * heightValue);
        bmiInput.value = bmiValue;

        if (bmiValue < 18.5) {
            weightCondition.innerText = "Underweight";
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            weightCondition.innerText = "Normal";
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            weightCondition.innerText = "Overweight";
        } else {
            weightCondition.innerText = "Obese";
        }
    }


})();