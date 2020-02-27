/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
by: Diego Hernández 27/02/2019
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



const listItem = document.querySelectorAll('li');
//console.log(listItem); 
const itemsPerPage = 10;



const showPage = (list, page) => {

  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endOfIndex = (page * itemsPerPage)-1;

  for (let i = 0; i < list.length; i++) {
    if ([i] >= startIndex && [i] <= endOfIndex ) {
       listItem[i].style.display = '';
    } else {
      listItem[i].style.display = 'none';
    }
  }
}


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
  const pagesNeeded = Math.ceil(listItem.length/itemsPerPage);

  const div = document.createElement('div');
  div.className = 'pagination';
  const divPage = document.querySelector('.page');
  divPage.appendChild(div);

  const ul = document.createElement('ul');
  div.appendChild(ul);
  
  for (let i = 0; i < pagesNeeded; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = i+1;
    li.appendChild(a);
    ul.appendChild(li); 

    a.addEventListener('click', function(event) {  
      let anchorArray = document.getElementsByTagName('a');
      for (let index = 0; index < anchorArray.length; index++) {
        anchorArray[i].className = '';
      }

      event.target.className = 'active';
      showPage(listItem, a.innerHTML);
    });
  }
  
}

showPage(listItem, 1)
appendPageLinks(listItem);



