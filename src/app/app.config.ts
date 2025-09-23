import { provideRouter } from '@angular/router';
import { Home } from './components/home';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: Home },
      { path: 'about', component: About },
      { path: 'skills', component: Skills },
      { path: 'projects', component: Projects },
      { path: 'contact', component: Contact },
      { path: '**', redirectTo: '' }
    ])
  ]
};
