import { Component } from "@angular/core";

// @Component({
//     selector: 'app-navbar',   // The component selector is just like css selector, it identify this component
//     // The template parameter specify the HTML markup for this component
//     template: `<h1>Navbar Component</h1>
//                 <p>Lorem ipsum</p>`, 
                
//     styles: [`h1{
//                 color: cadetblue;
//                 font-size: 50px
//             }`]
// })
// export class NavbarComponent {}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}