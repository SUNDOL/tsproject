import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

initTheme();

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (!savedTheme) {
    const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('theme', defaultTheme);
  } else {
    document.body.setAttribute('data-bs-theme', savedTheme);
  }
}