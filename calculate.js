function calculateSI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    const result = document.getElementById("result");

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        result.innerHTML = "Please enter all values.";
        return;
    }

    const simpleInterest = (principal * rate * time) / 100;
    const totalAmount = principal + simpleInterest;

    result.innerHTML = `
        Simple Interest: ₹${simpleInterest.toFixed(2)}<br>
        Total Amount: ₹${totalAmount.toFixed(2)}
    `;
}