
const body=document.querySelector('body');
const container=document.querySelector('.bookContainer');
const formContainer=document.querySelector('.formContainer');
function Book(title,author,pages,state) {
  // the constructor...
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.state=state;
  
}
Book.prototype.change=function()

{
   console.log(typeof(this.change))
}

const myLibrary=[
{
    title:'Lord of Flies',
    author:'William Golding',
    pages:"224",
    state:'read'
},
{
    title:'The Art Of War',
    author:'Sun Tzu',
    pages:"66",
    state:'not read'
},
{
    title:'1984',
    author:'George Orwell',
    pages:'326',
    state:'read',
}
,
{
    title:'Lolita',
    author:'Vladimir Nabokov',
    pages:'336',
    state:'read',
}
]

let i=0;
function createBook()
{
    while(i<myLibrary.length)
    {
      let obj= new Book;
      obj.author=myLibrary[i].author;
      obj.title=myLibrary[i].title;
      obj.pages=myLibrary[i].pages;
      obj.state=myLibrary[i].state;
     
      
      let newBookElement=document.createElement('div');
      newBookElement.classList.add('card');
      newBookElement.dataset.index=String(i);
       for(let property in obj)
       {   
        if(property!='change')
        {
            let newInfo=document.createElement('p');
            newInfo.textContent=obj[property];
            console.log(obj.author);
               newBookElement.appendChild(newInfo); 
        }
      
       }
       
       const remove=document.createElement('button');
       remove.classList.add('remove');
       remove.dataset.buttonIndex=String(i)
       remove.textContent="remove";
       newBookElement.appendChild(remove);

       const changeState=document.createElement('button');
       changeState.classList.add('change');
       changeState.textContent="Change Reading Status";
       changeState.dataset.changeIndex=String(i);
       newBookElement.appendChild(changeState)
      
       
       container.appendChild(newBookElement);
       i++;
    }

    removeItems()
    changeStatus()



}
const childrenArray=container.children;
createBook()
//remove button
function removeItems()
{
    let removeArray=document.querySelectorAll('.remove');
    removeArray.forEach(item=>item.addEventListener('click',(e)=>
    {let removeIndex=Number(item.dataset.buttonIndex);
     
       console.log(removeIndex)
     
       myLibrary.splice(removeIndex,1)
       container.removeChild(childrenArray[removeIndex])
       for(let j=removeIndex;j<myLibrary.length;j++)
       {
        let changeData=(document.querySelector(`[data-index="${j+1}"]`));
        
            changeData.dataset.index=String(j);
            
         let changeRemove=(document.querySelector(`[data-button-index="${j+1}"]`));
            changeRemove.dataset.buttonIndex=String(j);
    
            let changeButton=(document.querySelector(`[data-change-index="${j+1}"]`));
            changeButton.dataset.changeIndex=String(j);
       }
      
    }))
}



//author, title, number of pages, whether it’s been read
const newBook=document.getElementById('newBook');
newBook.addEventListener('click',()=>
{
  
   if(formContainer.childElementCount<1){
    createForm()
   }
  
})

//change reading status 
function changeStatus()
{
    let changeArray=document.querySelectorAll('.change');
changeArray.forEach(item=>item.addEventListener('click',(e)=>
{
    let changeElement=Number(item.dataset.changeIndex);
   let element=document.querySelector(`[data-index="${changeElement}"]`);
  let property= element.querySelector('p:nth-child(4)');
   (property.textContent=='read')? property.textContent="not read":property.textContent='read';

}))
}


function createForm()
{
    let divver=document.createElement('div');
    divver.setAttribute('id','divver');
     let formular=document.createElement('form');
    //author
     let authorInput=document.createElement('input');
    authorInput.type='text';
    authorInput.setAttribute('id','author');
    let authorLabel=document.createElement('label');
    authorLabel.htmlFor='author';
    authorLabel.innerHTML='Author';

    formular.appendChild(authorLabel)
    formular.appendChild(authorInput)
     //title
     let titleInput=document.createElement('input');
   titleInput.type='text';
    titleInput.setAttribute('id','title');
    let titleLabel=document.createElement('label');
    titleLabel.htmlFor='title';
    titleLabel.innerHTML='Title';

    formular.appendChild(titleLabel)
    formular.appendChild(titleInput)
     //pages
     let pagesInput=document.createElement('input');
    pagesInput.type='text';
    pagesInput.setAttribute('id','pages');
    let pagesLabel=document.createElement('label');
    pagesLabel.htmlFor='pages';
   pagesLabel.innerHTML='Pages';

    formular.appendChild(pagesLabel)
    formular.appendChild(pagesInput)
     //status
     let option2=document.createElement('input');
   option2.type='radio';
    option2.value='read';
   option2.name='status-option'
   option2.setAttribute('id','status');
    let option2Label=document.createElement('label');
   option2Label.htmlFor='status';
   option2Label.innerHTML='read';


   let option1=document.createElement('input');
   option1.type='radio';
   option1.value='not read';
   option1.name='status-option'
   option1.setAttribute('id','option1-id');
   let option1Label=document.createElement('label');
   option1Label.htmlFor='option1-id';
   option1Label.innerHTML='not read';
  

    formular.appendChild(option2Label)
    formular.appendChild(option2)
    formular.appendChild(option1Label)
    formular.appendChild(option1)

    const submit=document.createElement('button');
    submit.type="submit";
    submit.textContent="Add Book";
    submit.setAttribute('id','submit');
    formular.appendChild(submit)
    divver.appendChild(formular);
     formContainer.appendChild(divver);
     formular.addEventListener('submit',(e)=>{
        e.preventDefault();
        let submitedBook= new Book;
            submitedBook.title=formular.querySelector('#title').value;
            submitedBook.author=formular.querySelector('#author').value;
            submitedBook.pages=formular.querySelector('#pages').value;
            submitedBook.state=document.getElementsByName('status-option').value;
        console.log(submitedBook)
        myLibrary.push(submitedBook)
        createBook()
        })
    }
   