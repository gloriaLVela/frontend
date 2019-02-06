import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//  The router outlet lets angular know where to render the view you are trying to route to
import { RouterModule } from '@angular/router';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PlayComponent } from './play.component';
import { PlayQuizComponent } from './playquiz.component';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';
import { QuizComponent } from './quiz.component';
import { QuizzesComponent } from './quizzes.component';
import { NavComponent } from './nav.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';



const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'play', component: PlayComponent },
  { path: 'playQuiz/:quizId', component: PlayQuizComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    QuestionComponent,
    QuestionsComponent,
    QuizComponent,
    QuizzesComponent,
    NavComponent,
    RegisterComponent

  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),


  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
