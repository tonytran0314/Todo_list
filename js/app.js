

// ADD A NEW TASK: 
let submitButton = document.querySelector('.submit-btn');
submitButton.addEventListener('click', newTaskGenerating);

function newTaskGenerating() {

    // create a 'p' tag and add text to it:
    const paraTag = document.createElement("p");
    let taskContent = document.getElementById('new-task-content').value;
    const paraContent = document.createTextNode(taskContent);
    paraTag.appendChild(paraContent);  

    // create an 'a' tag and add text to it:
    
    const icon = document.createElement("i");
    icon.className = 'fa fa-trash';

    const linkTag = document.createElement("a");
    linkTag.href = '#';
    linkTag.className = 'delele-btn';
    linkTag.onclick = deleteTask;

    linkTag.appendChild(icon);
    
    // create a 'div' tag. Then, add paraTag and linkTag to it:
    const divTag = document.createElement("div");
    divTag.className = 'task';
    divTag.append(linkTag, paraTag);

    // add new task:
    let taskListing = document.getElementById('task-listing');
    taskListing.appendChild(divTag);

}

// DELETE A TASK:

function deleteTask() {
    this.parentNode.remove();
}

// NEW TASK VALIDATING:
// the 'add new task' button is initially disabled, until user type something on the new task text
let submitButtonOverlaid = document.querySelector('#overlaid');

function validating(value) {
    if(value) {
        // remove 'disabled' attribute in html 
        submitButton.disabled = false;
        // remove '::after' layer in css
        submitButtonOverlaid.style.display = 'none';
    } else {
        submitButton.disabled = true;
        submitButtonOverlaid.style.display = 'block';
    }
}