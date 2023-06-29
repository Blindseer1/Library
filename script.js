

const container=document.querySelector('.bookContainer');
function Book(title,author,pages,state) {
  // the constructor...
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.state=state;
  
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
      newBookElement.classList.add(`${i}`);
      
       for(let property in obj)
       {   let newInfo=document.createElement('p');
       newInfo.textContent=obj[property];
       console.log(obj.author);
          newBookElement.appendChild(newInfo); 
       }
       const remove=document.createElement('button');
       remove.classList.add('remove');
       remove.classList.add(`${i}`)
       remove.textContent="remove";
       newBookElement.appendChild(remove);
       container.appendChild(newBookElement);
       i++;
    }
}
const childrenArray=container.children;
createBook()
let remove=document.querySelectorAll('.remove');
remove.forEach(item=>item.addEventListener('click',(e)=>
{ let index=item.classList.value.split(' ')[1];
   console.log(item.classList.value.split(' ')) 
   myLibrary.splice(index,1)
   console.log(myLibrary)
  
   container.removeChild(childrenArray[index])
    
}))




//author, title, number of pages, whether it’s been read
const newBook=document.getElementById('newBook');
newBook.addEventListener('click',()=>
{
   createBook()
})