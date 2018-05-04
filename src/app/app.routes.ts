import { RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import HomeModule from "./home/home.module";

const routes = [
    { path: '', loadChildren: 'app/home/home.module' },
    { path: 'contacts', loadChildren: 'app/contacts/contacts.module' }
];

export default RouterModule.forRoot(routes); 