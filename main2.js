const form= document.getElementById('addForm')
const taskList= document.getElementById('items')
console.log(form);

form.addEventListener('submit',(e) => {
    e.preventDefault()

    var task = e.target.children[0].value;

    var li = document.createElement('li');
    li.classList.add("list-group-item");
    li.innerText=task;
    // console.log(li);

    const btn = document.createElement('button')
    btn.setAttribute( 'class' ,'btn list-btn btn-sm float-right delete')
    btn.innerText ='X'
    // console.log(btn);
    li.append(btn)
    console.log(li);
    taskList.append(li);
    e.target.children[0].value= ' '
})


// Delete task
const delteEle= document.getElementById('items')
// console.log(deleteLi);

delteEle.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
})

// search filter

const filter = document.getElementById('filter');


const listItem =document.getElementsByClassName('list-group-item')
filter.addEventListener('keyup' , (e)=>{
    console.log(e.target.value);

    for(let i = 0 ; i< listItem.length; i++){
        if(listItem[i].innerText.toLowerCase().includes(e.target.value)){
            listItem[i].style.display ='block';
        }
        else{
            listItem[i].style.display ='none';
        }
    }
})

//  themes

const theme = document.getElementById('theme');
const body = document.getElementsByTagName('body')[0];
theme.addEventListener('click', (e) =>{

    var color = e.target.getAttribute('id');
    // console.log(e.target.getAttribute('id'))
    // const themeColors = theme.children
    // for(let i = 0 ; i< themeColors; i++){
    //     if(themeColors[i].getAttribute('id')=== color){
    //         themeColors.classList.add('active')
    //     }
    //     else{
    //         themeColors.classList.remove('active')
    //     }
    // }
    removeClass()
    body.classList.add(color);
})

function removeClass(){
    for(let i= 0 ; i<body.classList ; i++)
    body.classList.remove(body.classList[i]);
}


