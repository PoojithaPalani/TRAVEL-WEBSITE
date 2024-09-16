function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mob = document.getElementById('mob').value;

    if (name === '' || email === '' || mob === '') {
        alert('Please fill in all fields');
        return
    }else{
        alert("Hotal Booked Successfully")
        window.location.href = "indexdelhi.html";
    }
}