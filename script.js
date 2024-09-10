(function () {
    var btn = document.getElementById("btn");
    var bmiInput = document.getElementById("bmi-result");
    var weightCondition = document.getElementById("weight-condition");
    btn.addEventListener("click", calculateBMI);
    function calculateBMI() {
        var heightValue = document.getElementById("height").value / 100;
        var weightValue = document.getElementById("weight").value;
        var bmiValue = weightValue / (heightValue * heightValue);
        bmiInput.value = bmiValue;
        if (bmiValue < 18.5) {
            weightCondition.innerText = "Underweight";
        }
        else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            weightCondition.innerText = "Normal";
        }
        else if (bmiValue >= 25 && bmiValue <= 29.9) {
            weightCondition.innerText = "Overweight";
        }
        else {
            weightCondition.innerText = "Obese";
        }
    }
})();
