document.getElementById('taxForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const income = parseFloat(document.getElementById('income').value);

    if (income >= 0) {
        let tax = 0;

        if (income <= 150000) {
            tax = 0;
        } else if (income <= 300000) {
            tax = (income - 150000) * 0.05;
        } else if (income <= 500000) {
            tax = (income - 300000) * 0.1 + 7500;
        } else if (income <= 750000) {
            tax = (income - 500000) * 0.15 + 25000;
        } else if (income <= 1000000) {
            tax = (income - 750000) * 0.2 + 50000;
        } else if (income <= 2000000) {
            tax = (income - 1000000) * 0.25 + 75000;
        } else if (income <= 5000000) {
            tax = (income - 2000000) * 0.3 + 250000;
        } else {
            tax = (income - 5000000) * 0.35 + 850000;
        }

        document.getElementById('taxValue').textContent = tax.toFixed(2);
    } else {
        alert('กรุณากรอกข้อมูลรายได้ให้ถูกต้อง!');
    }
});
