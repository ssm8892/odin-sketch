const grid = document.querySelector(".container");

for(let i = 0;i < 16; i++){
    const rows = document.createElement('div');
    rows.style.display = 'flex';
    rows.style.flexDirection = 'row';
    grid.appendChild(rows);
    for(let j = 0; j < 16; j++){
        const box = document.createElement('div');
        box.classList.add('box')
        rows.appendChild(box);
    }
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.classList.add('box-hovered');
    })
})

//total height: 672px

function promptSize() {
    let size = prompt("What size grid would you like?", "16");
    if(size != null){
        //
    }
}

/*
CORE: (5)
    - CS 6320 Natural Language Processing
    - CS 6363 Design and Analysis of Computer Algorithms
    - CS 6364 Artificial Intelligence
    - CS 6375 Machine Learning
    - CS 6378 Advanced Operating Systems (INFO CERT)

ELECTIVES (6)
    - CS 5348 Operating Systems Concepts
    - 
    INFORMATION ASSURANCE CERT:
    - CS 6324 Information Security
    - CS 6348 Data and Application Security 
    - CS 6349 Network Security
    - CS 6363 Design and Analysis of Computer Algorithms
*/