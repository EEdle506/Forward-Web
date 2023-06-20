

function sendRequest() {
    var form = document.getElementById('auth-form');
    var errorMsg = document.getElementById('error-message');

    var formDataObject = {};
    var formData = new FormData(form);

    // Iterate over each form field
    for (var pair of formData.entries()) {
        formDataObject[pair[0]] = pair[1];
    }
  
    // Convert form data object to JSON
    var formJson = JSON.stringify(formDataObject);

    var requestOptions = {
        method: form.method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: formJson
    };

    fetch(form.action, requestOptions)
        .then(response => {

            if (response.ok) {
                return response.json();
            } 
            else {
                errorMsg.textContent = 'Connection failed'
            }
        })
        .then(json => {
            if (json.error_msg) {
                errorMsg.textContent = json.error_msg
            } 
            else {
                errorMsg.textContent = ''
                console.log('success')
            }
        })
        .catch(error => {
            console.error('Error:', error)
            errorMsg.textContent = error
        })
}