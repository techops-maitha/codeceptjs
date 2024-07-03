/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type settings = typeof import('./e2e/support/screens/Settings.js');
type scroll = typeof import('./e2e/support/helpers/scroll.js');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I,
    settings: settings,
    scroll: scroll
  }
  interface Methods extends Appium, Mochawesome { }
  interface I extends ReturnType<steps_file>, WithTranslation<Mochawesome> { }
  namespace Translation {
    interface Actions { }
  }
}
