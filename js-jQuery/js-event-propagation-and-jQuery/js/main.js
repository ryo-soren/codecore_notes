//JS DOM query
// document.querySelectorAll('.shape') //this will return a node list of all the nodes with the shape class

//jQuery DOM query
// $('.shape') //this will return a collection of nodes with the class of shape, and it will allow you to use utility methods on the collection

//select the 2nd button
$('#button-2');

//select anchor tags inside the li tags
$('li a')

//count the number of blue circles
$('.blue.circle').length

//Attributes, Classes and Removal:

// Return the value of an attribute:
// $(selector).attr(attribute)
// Set the attribute and value:
// $(selector).attr(attribute,value)

// .addClass()
// It's important to note that this method does not replace a class. It simply adds the class, appending it to any which may already be assigned to the elements.
// .removeClass()
// If a class name is included as a parameter, then only that class will be removed from the set of matched elements. If no class names are specified in the parameter, all classes will be removed.

// The toggleClass() method toggles between adding and removing one or more class names from the selected elements.
// This method checks each element for the specified class names. The class names are added if missing, and removed if already set - This creates a toggle effect.


//change the href of all links oon the page
$('a').attr('href', 'http://nyan.cat');

//remove the blue class from all shapes, and replace it with the red class
$('.blue').removeClass('blue').addClass('red')

//set the class attribute of all a tags to highlight
$('a').attr('class', 'highlight');

//remove the class of circle and replace as diamond
$('.circle').removeClass('circle').addClass('diamond');

//Remove all the shapes in the purple and green containers:

//1
$('#purple-container, #green-container').find('.shape').remove()

//2
$('#purple-container .shape, #green-container .shape').remove()

//3
$('#purple-container, #green-container').empty()

//html, children, and parent

// 1.
$('#reset').html();
// 2.
$('a').map((index, element) => {
    console.log($(element).html())
});
// 3.
$('#reset').html('Launch Doggos');

//replace contents of every td with yass
$('td').html('yass')

//select parents of all td tags
$('td').parent()

//event listeners
//In JS we need to load the page with DOMContentLoaded
//In jQuery we use .ready

$(document).ready(() => {
    $('.blue.circle').on('mouseenter', event => {
        console.log('Blue Circle: Go Away!')})
    
    $('.blue.circle').on('mouseleave', event => {
        console.log('Blue Circle: Goodbye!')})

    $('#button-1').on('click', event => {
        $('.shape').remove()
    })

    $('#button-2').on("click", event => {
        $(event.currentTarget).attr('disabled', 'true')
    })

    $('#button-3').on("click", event => {
        $("#button-message").html('Button 3 was clicked')
    })

    $('tr').on("mouseenter", event => {
        $(event.currentTarget).addClass('highlight')
    })
    $('tr').on("mouseleave", event => {
        $(event.currentTarget).removeClass('highlight')
    })
    
})
