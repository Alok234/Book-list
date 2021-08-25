
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const btn = document.getElementById('btn');
const bookList = document.getElementById('book-list');



btn.addEventListener("click", function(e){
    e.preventDefault();

    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Bahi kno din Boi poren nai,kno akta Boi er name lakhen')
    } else {
        const newrow = document.createElement('tr');

        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newrow.appendChild(newTitle);
        title.value='';

        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newrow.appendChild(newAuthor);
        author.value = '';

        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newrow.appendChild(newYear);
        year.value = '';
        
        bookList.appendChild(newrow);
    }

    
  });