import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// custom modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';
import { MaterialModule } from './material.module';
// components
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ShowTasksComponent } from './components/tasks/show-tasks/show-tasks.component';
import { ManageTaskComponent } from './components/tasks/manage-task/manage-task.component';
import { ShowInfoComponent} from './components/info/show-info/show-info.component';
// pipes
import { ModifiedPipe } from './pipes/modified.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ShowTasksComponent,
    ManageTaskComponent,
    ShowInfoComponent,
    ModifiedPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
