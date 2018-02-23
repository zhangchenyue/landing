import { browser, by, element } from 'protractor';

export class HelloPage {
  navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get('/hello');
  }

  getParagraphText() {
    return element(by.css('app-hello-root h1')).getText();
  }
}
