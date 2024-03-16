//BOM(Browser Object Model):-
        //It Allows JS To Talk to the Browser.
        //Window-->document,history,screen,navigator,location.

console.log(window);
console.log(window.document);
console.log(screen);
console.log(screen.availHeight);
console.log(screen.availWidth);
console.log(screen.colorDepth);
console.log(screen.width);
console.log(screen.height);
console.log(screen.pixelDepth);

//Navigator:-

console.log(navigator);
console.log(navigator.cookieEnabled);
console.log(navigator.appCodeName);
console.log(navigator.platform);

//location:-

console.log(location);
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);
// console.log(location.assign("http://www.amazon.in"));

//history:-

console.log(history);
console.log(history.back());
console.log(history.forward());

//alert

// let x1 = alert("404 Not Found");
// console.log(x1);

var x2 = confirm("Do You Want To Continue?");
console.log(x2);

