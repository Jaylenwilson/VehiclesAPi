const baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json'
//console.log(baseUrl)
let url;

const userInput = document.getElementById('search');
const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const nav = document.querySelector('nav');
const submitBtn = document.getElementById('submit');

nav.style.display = 'none'
let pageNumber = 0;
let pageSize = 6;

prevBtn.addEventListener('click', previousbtn);
nextBtn.addEventListener('click', nextbtn);


function fetchResults() {


    url = `${baseUrl}&page=${pageNumber}&q=${userInput.value}`;
    console.log("URL:", url)


    fetch(url)
        .then(function (result) {
            // console.log(result)
            return result.json()
        })
        .then(function (json) {
            console.log(json);
            displayResults(json);
        })
}

function displayResults(json) {
    console.log(json.Results[0].Make_Name);
    console.log(json.Results)
    let cars = json.Results
    const carInfo = document.getElementById('carinfo');


    // while (carInfo.firstChild) {
    //     carInfo.removeChild(carInfo.firstChild)
    // }




    console.log(userInput.value)
    for (let car of cars) {

        let vehicle = car.Make_Name
        //console.log(vehicle);

        console.log(vehicle, userInput.value);

        if (userInput.value == vehicle) {
            var h3 = document.createElement('h3')
            h3.innerText = vehicle;
            carInfo.appendChild(h3);
        }
        else if (userInput.value !== cars.Make_Name) {
            return null
        }

    }


    // var ptag = document.createElement('p');
    // // element.joke = 
    // // element.setup + element.delivery
    // ptag.innerText = joke.joke
    // jokeContainer.append(ptag)


}




//   while (section.firstChild) { // while sction firstchild exist, get rid of results when we do another search 
//         section.removeChild(section.firstChild);
//     }

//     let articles = json.response.docs; // navigating the json with .notation
// console.log(articles);

// if (articles.length === 0) { // if responses are 0 there are no results
//     console.log('No results');
// } else {
//     let counter = pageNumber * pageSize;

// while (counter < ((pageNumber + 1) * pageSize)) {
//     if (counter < articles.length) {
//         // console.log(i);
//         let article = document.createElement('article');
//         let heading = document.createElement('h2');
//         let link = document.createElement('a');
//         let img = document.createElement('img');
//         let para = document.createElement('p');
//         let clearfix = document.createElement('div');
//         let current = articles[counter]; // loops through eacg article

//         // console.log('Current:', current);

//         link.href = current.web_url; // creating an anchor tag with the weburl of the current article
//         link.textContent = current.headline.main; // assigning text to our link in the words of our property 
//         para.textContent = 'Keywords: '; // p element has a keywors property that is empty

//         for (let j = 0; j < current.keywords.length; j++) {
//             let span = document.createElement('span');
//             span.textContent += current.keywords[j].value + ' '; // add text to the tag
//             para.appendChild(span);// appends child
//         }

//         if (current.multimedia.length > 0) {
//             img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;  //adds the currenrt articles multi media url to the image source
//             img.alt = current.headline.main; // if the image doesnt show it displays the header
//         }

//         clearfix.setAttribute('class', 'clearfix'); //makes a div with a class clearfix
//         heading.appendChild(link);
//         article.appendChild(heading);
//         article.appendChild(img);
//         article.appendChild(para);
//         article.appendChild(clearfix);
//         section.appendChild(article);
//     }

//     counter++;
// }
// debugger
// if (articles.length > 0)
//     nav.style.display = "block";

// if (pageNumber === 0) {
//     document.getElementById('btnPrevious').disabled = true;

// } else {
//     document.getElementById('btnPrevious').disabled = false;
// }

// if ((pageNumber + 1) * pageSize >= articles.length) {
//     document.getElementById('btnNext').disabled = true;
// } else {
//     document.getElementById('btnNext').disabled = false;
// }













function previousbtn() {

}

function nextbtn() {

}