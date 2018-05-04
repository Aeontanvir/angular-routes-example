import { RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import HomeModule from "./home/home.module";

const routes = [
    { path: '', loadChildren: 'app/home/home.module' },
    { path: 'contacts', component: ContactsComponent }
];

export default RouterModule.forRoot(routes); 