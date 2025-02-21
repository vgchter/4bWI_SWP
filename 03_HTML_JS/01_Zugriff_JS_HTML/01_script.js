document.getElementById("Add").addEventListener("click", function () {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("Invalid value");
    } else {
        const erg = parseFloat(value1) + parseFloat(value2);
        document.getElementById("result").innerText = "Sum: " + erg;
    }
});

document.getElementById("Sub").addEventListener("click", function () {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("Invalid value");
    } else {
        const erg = parseFloat(value1) - parseFloat(value2);
        document.getElementById("result").innerText = "Sum: " + erg;
    }
});

document.getElementById("Mult").addEventListener("click", function () {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("Invalid value");
    } else {
        const erg = parseFloat(value1) * parseFloat(value2);
        document.getElementById("result").innerText = "Sum: " + erg;
    }
});

document.getElementById("Div").addEventListener("click", function () {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("Invalid value");
    } else {
        const erg = parseFloat(value1) / parseFloat(value2);
        document.getElementById("result").innerText = "Sum: " + erg;
    }
});
