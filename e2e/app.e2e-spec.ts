import { Angular2tut1Page } from './app.po';

describe('angular2tut1 App', () => {
  let page: Angular2tut1Page;

  beforeEach(() => {
    page = new Angular2tut1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
