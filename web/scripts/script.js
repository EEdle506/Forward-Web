function redirectToPage(url) {
    window.location.href = url
}

function formSubmit() {
    var password = document.getElementById('password')
    const hashed = crypto.createHash('sha-256').update(x).digest('hex')

    password.value = hashed
}