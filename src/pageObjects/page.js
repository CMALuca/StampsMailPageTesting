//A default page.js that will serve as the base for our StampsMail.page.js.

export default class Page {    
    open(path) {
        browser.url(path);
    }
}
