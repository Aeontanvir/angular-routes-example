import { AngularRoutesExamplePage } from './app.po';

describe('angular-routes-example App', () => {
  let page: AngularRoutesExamplePage;

  beforeEach(() => {
    page = new AngularRoutesExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
