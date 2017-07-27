import { TopmenuPage } from './app.po';

describe('topmenu App', () => {
  let page: TopmenuPage;

  beforeEach(() => {
    page = new TopmenuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
