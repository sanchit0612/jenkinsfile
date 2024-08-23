import {Selector} from 'testcafe'
// const textbox=Selector("Search Google Maps")
const textbox=Selector(id =>{
    return document.getElementById("searchboxinput")
})
const searchbutton=Selector(id =>{
    return document.getElementById("searchbox-searchbutton")
})
fixture("My Fixture")
    .page("https://www.google.com/maps");
    test("test1", async (t) => {
        console.log("hello team");
    });
    fixture("My Fixture")
    .page("https://www.google.com/maps");
    test("input", async (t) => {
        await t
            .selectText(textbox)
            .typeText(textbox ,'Bangalore');
    });

    fixture("My Fixture")
    .page("https://www.google.com/maps");
    test("button", async (t) => {
        await t 
            .click(searchbutton);
        
    });


    
    
