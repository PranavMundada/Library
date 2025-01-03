const myLibrary=[];
const addBookbtn=document.getElementById('addBook');
const dialogDetail=document.getElementById('addDetails');
const cancelBtn=document.getElementById('cancel');
const addBtn=document.getElementById('add');
const bookList=document.getElementById('bookList');
const errorElement=document.getElementById('error');
const form=document.getElementById('form');
let books=0;
let done=1;

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(){
    dialogDetail.showModal();
}

addBookbtn.addEventListener("click",()=>{
    addBookToLibrary();
});

cancelBtn.addEventListener("click",()=>{
    dlg=document.getElementById('addDetails');
    if(dlg.open){
        dlg.close('Cancel');
    }
});

    // form.addEventListener('submit',(e)=>{
    //     let messages=[];
    //     if(title.value==='' || title.value==null){
    //         messages.push('name is req');
    //     }
    //     if(author.value==='' || author.value==null){
    //         messages.push('name is req');
    //     }
    //     if(messages.length>0){
    //         e.preventDefault();
    //         errorElement.innerText=messages.join(',');
    //     }
    // });

addBtn.addEventListener("click",()=>{
    dlg=document.getElementById('addDetails');
    done=1;
    if(dlg.open){
        dlg.addEventListener("submit",(e)=>{
            const book=document.createElement("div");
           e.preventDefault();
           books+=1;
            const data=new FormData(e.target);
            const title=data.get('title');
            const author=data.get('author');
            const pages=data.get('pages');
            const read=data.get('read');
            const bookObject=new Book(title,author,pages,read);
            const button = document.createElement('button');
            button.innerText=read;
            if(read==="Read"){
                button.style.backgroundColor="#ccff33";
            }
            else
            {
                button.style.backgroundColor="#ff0a54";
            }
            book.innerHTML = `
            <p>Title: ${bookObject.title}</p>
            <p>Author: ${bookObject.author}</p>
            <p>Pages: ${bookObject.pages}</p>
            `;
            book.appendChild(button);
            myLibrary.push(bookObject);
            if(done===1){
            bookList.appendChild(book);
            done=0;
            }
            button.addEventListener('click',(e)=>{
                if(e.target.innerText==='Unread'){
                e.target.innerText="Read";
                e.target.style.backgroundColor="#ccff33";
                }
                else{
                e.target.innerText="Unread";
                e.target.style.backgroundColor="#ff0a54";
                }
            });
        });
    dlg.close('Add');
    }
});
