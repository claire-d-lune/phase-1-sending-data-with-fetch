// Add your code hered
function submitData(formName, formEmail) {
    const formData = {name: formName, email: formEmail}
    return fetch('http://localhost:3000/users',
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
         body: JSON.stringify(formData)
    }
    )
    .then(res => res.json())
    .then(function (obj) {document.body.innerHTML = obj["id"]})
    .catch(function (e) {document.body.innerHTML = e.message})
    
}

function addError(info) {
    document.body.innerHTML = info.message;
}

function addToPage(info) {
    const idValue = document.createElement('p')
    idValue.textContent = info;
    document.body.appendChild(idValue)
}

submitData("New Name!", "someemail@hotmail.com")