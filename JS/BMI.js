document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const errorElement = document.getElementById('bmiError');
    
    errorElement.textContent = '';

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        document.getElementById('bmiValue').textContent = bmi;
        
        let category = '';
        if (bmi < 18.5) {
            category = 'น้ำหนักต่ำกว่าเกณฑ์';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'น้ำหนักปกติ';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'น้ำหนักเกิน';
        } else {
            category = 'โรคอ้วน';
        }

        document.getElementById('bmiCategory').textContent = `ประเภท: ${category}`;
    } else {
        errorElement.textContent = 'กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง!';
    }
});
