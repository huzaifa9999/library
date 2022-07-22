console.log("hello hellop ehllo")
class book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}


let submit = document.getElementById('ff');
submit.addEventListener('submit', libsubmit);


function libsubmit(e) {
    e.preventDefault();

    console.log("working");
    let name = document.getElementById('book').value;
    let author = document.getElementById('author').value;
    let type;
    let fic = document.getElementById('fic');
    let his = document.getElementById('his');
    let sci = document.getElementById('sci');

    if (fic.checked)
        type = fic.value;
    else if (his.checked)
        type = his.value;
    else if (sci.checked)
        type = sci.value;

    let books = new book(name, author, type);
    console.log(books);
    let dis = new display();
    if (dis.validate(books)) {

        dis.add(books);
        dis.clear();
        dis.show("success", "the desired book has been added")
    } else {
        dis.show("danger", "please write the correct information")
        console.log("eoor");
    }


}


class display {
    add(books) {
        console.log("aading")
        let table = document.getElementById('tbody')
        let text = `<tr>                           
                            <td>${books.name}</td>
                            <td>${books.author}</td>
                            <td>${books.type}</td>
                        </tr>`

        table.innerHTML += text;
    }

    clear() {
        let submit = document.getElementById('ff');
        submit.reset();
    }
    validate(books) {

        if (books.name.length < 2 || books.author.length < 2) {
            return false;
        } else
            return true;
    }

    show(hue, displaymsg)

    {
        let msg = document.getElementById('message');
        msg.innerHTML += `<div class="alert alert-${hue} alert-dismissible fade show" role="alert">
        <strong>MESSAGE!</strong> ${displaymsg} <span></span>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

    }
}