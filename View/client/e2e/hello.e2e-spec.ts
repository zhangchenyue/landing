import { HelloPage } from './hello.po';

describe('client App', () => {
  let page: HelloPage;

  beforeEach(() => {
    page = new HelloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to hello!');
  });
});
