/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
by: Diego Hernández 27/02/2019
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*Global variables needed to control properly our program */
const listItem = document.querySelectorAll('li'); //selects all the students from the provided list
const itemsPerPage = 10; 



const showPage = (list, page) => {
  /*Basic math used for determine the range of the students list to show*/
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endOfIndex = (page * itemsPerPage)-1;
  /*Loop to determine which section of students are gonna be shown*/ 
  for (let i = 0; i < list.length; i++) {
    if ([i] >= startIndex && [i] <= endOfIndex ) {
      listItem[i].style.display = '';
    } else {
      listItem[i].style.display = 'none';
    }
  }
}


const appendPageLinks = (list) => {
  const pagesNeeded = Math.ceil(listItem.length/itemsPerPage); // Basic Math used to determine the "pages" needed according to the students list
  /*DOM Tree Available on README.ms*/ 
  const div = document.createElement('div');
  div.className = 'pagination';
  const divPage = document.querySelector('.page');
  divPage.appendChild(div);

  const ul = document.createElement('ul');
  div.appendChild(ul);
  
  /*Loop that creates the links required depending on the list of students */
  for (let i = 0; i < pagesNeeded; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = i+1;
    li.appendChild(a);
    ul.appendChild(li); 

    let linksArray = document.getElementsByTagName('a'); //Gathered the 'a' tags into a single variable

    for (let index = 0; index < linksArray.length; index++) {  //loop to add e.listeners to the anchor tags
      linksArray[index].addEventListener('click', function(event) {
        for (let j = 0; j < linksArray.length; j++) { //inner loop that goes through all the anchor tags and removes the class
            linksArray[j].className = '';
        }
        event.target.className = 'active'; //sets the anchor tag class that was triggered to active 
        showPage(listItem, linksArray[index].textContent);  //show the selected range of students selected     
      });
    }
  }
  
}

//function calls to make it work :)
showPage(listItem, 1);
appendPageLinks(listItem);



