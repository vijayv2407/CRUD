let fullname = document.getElementById("FullName")
let email = document.getElementById("EmailAddress")
let password = document.getElementById("Password")
let Submit = document.getElementById("Submit")
let datasaveing = document.getElementById("datasaveing")

Submit.addEventListener("click", () => {
    let newdiv = document.createElement("div")
    newdiv.classList.add("curdDivInJS")
    datasaveing.appendChild(newdiv)

    // input tag for full name
    let newinputTagForFullName = document.createElement("input")
    newinputTagForFullName.classList.add("CrudInputTag")
    newinputTagForFullName.value = fullname.value
    newinputTagForFullName.setAttribute("readonly", "readonly")
    newdiv.appendChild(newinputTagForFullName)

    // input tag for email

    let newinputTagForEmailAddress = document.createElement("input")
    newinputTagForEmailAddress.classList.add("CrudInputTag")
    newinputTagForEmailAddress.value = email.value
    newinputTagForEmailAddress.setAttribute("readonly", "readonly")
    newinputTagForEmailAddress.setAttribute("type", "email")
    newdiv.appendChild(newinputTagForEmailAddress)

    // input tag for Password

    let newinputTagForPassword = document.createElement("input")
    newinputTagForPassword.classList.add("CrudInputTag")
    newinputTagForPassword.value = password.value
    newinputTagForPassword.setAttribute("readonly", "readonly")
    newinputTagForPassword.setAttribute("type", "password")
    newdiv.appendChild(newinputTagForPassword)


    // edit btn

    let editbtn = document.createElement("button")
    editbtn.innerHTML = "Edit"
    editbtn.classList.add("EditBtnInCSS")
    newdiv.appendChild(editbtn)
    editbtn.addEventListener("click", function () {
    newinputTagForFullName.removeAttribute("readonly", "readonly")
    newinputTagForEmailAddress.removeAttribute("readonly", "readonly")
    newinputTagForPassword.removeAttribute("readonly", "readonly")
    })

    // save btn

    let savebtn = document.createElement("button")
    savebtn.innerHTML = "Save"
    savebtn.classList.add("SaveBtnInCSS")
    newdiv.appendChild(savebtn)
    savebtn.addEventListener("click", function () {
    newinputTagForFullName.setAttribute("readonly", "readonly")
    newinputTagForEmailAddress.setAttribute("readonly", "readonly")
    newinputTagForPassword.setAttribute("readonly", "readonly")
    })

    // delete btn

    let deletebtn = document.createElement("button")
    deletebtn.innerHTML = "Delete"
    deletebtn.classList.add("deleteBtnInCSS")
    newdiv.appendChild(deletebtn)
    deletebtn.addEventListener("click", function () {
    newdiv.style.display = "none"
    })


})