// let getMan = async () => {
//     let response = await $.ajax (
// }$.ajax({
//     url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
//     type: "GET",
//     data: {
//       "$limit" : 5000,
//       "$$app_token" : "YOURAPPTOKENHERE"
//     }
// }).done(function(data) {
//   alert("Retrieved " + data.length + " records from the dataset!");
//   console.log(data);
// });

function getData() {
    let limit = document.getElementById("limit").value
    var borough = event.target.innerHTML.toUpperCase()
    fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=" + borough + "&$limit=" + limit)
        .then((dataset) => dataset.json())
        .then((jData) => displayData(jData)) //run displaydata function


}

function displayData(data) {
    removenodes()
    let contain = document.getElementById("container") // find container div


    // fun fact. you don't need all these elements I just created them because CSS is a mother fucker
    for (x in data) {
        let node = document.createElement("div") // create div for first descriptor plus response button
        let node2 = document.createElement("div") // create div for resolution
        let p1 = document.createElement("p") //descriptor text
        let resolution = document.createElement("p") //resolution text
        let btn = document.createElement("button") // response button
        let btnclass = document.createAttribute("class") // create class for response button
        let btnclick = document.createAttribute("onclick")// create onclick for response - onclick is show()
        let nodeclass = document.createAttribute("class") // create class for descriptor div
        let p1class = document.createAttribute("class") // create class for descriptor p tag
        let resclass = document.createAttribute("class") // create class for resolution div

        //set value to attribute nodes
        btn.innerHTML = "Response" // set button text
        btnclick.value = "show()" //set onclick to show resolution text
        btnclass.value = "response"
        nodeclass.value = "nclass"
        p1class.value = "p1"
        resclass.value = "resolutionclass"

        //set attribute nodes to elements
        btn.setAttributeNode(btnclass)
        btn.setAttributeNode(btnclick)
        node.setAttributeNode(nodeclass)
        node2.setAttributeNode(resclass)
        p1.setAttributeNode(p1class)

        p1.innerHTML = data[x].descriptor
        resolution.innerHTML = data[x].resolution_description

        //append attributes to container
        contain.appendChild(node)
        contain.appendChild(node2)
        node.appendChild(p1) // append descriptor p tag to outer first div
        p1.append(btn) // append response button to descriptor p tag
        node2.appendChild(resolution) // append resolution p tag to second div
        resolution.hidden = true // set resolution text to be hidden on load
        node2.style.backgroundColor = "#b2d3e6";//"rgb(210, 211, 204)"



    }
    console.log(data)
}

//  clear all nodes for new selection
function removenodes() {
    let container = document.getElementById("container")
    let outerdiv = container.getElementsByTagName("div")


    for (let i = 0; i < outerdiv.length; i++) {
        let firstpar = container.getElementsByTagName("p")
        for (i = 0; i < firstpar.length; i++) {
            if (firstpar[i].hasChildNodes()) {
                let btn = firstpar[i].firstChild
                btn.remove()
            }
            firstpar[i].remove()
        }

        outerdiv[i].remove()

        console.log(outerdiv)
    }
}

//  show/hide resolution text
function show() {
    x = event.target.parentElement.parentElement.nextSibling.firstChild
    if (x.hidden == true) {
        x.hidden = false

    }
    else x.hidden = true
    console.log(x)
}
