import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'fr', 'ur', 'cn']);
        translate.setDefaultLang('cn');

        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|cn/) ? browserLang : 'cn');
    }

}

