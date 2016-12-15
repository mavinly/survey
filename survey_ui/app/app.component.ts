import { Component } from '@angular/core';

@Component({
    selector: 's-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <div>starter Application</div>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Starter Application';
}
