import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

type FormAnswer = FormGroup<{test: FormControl<string>}>

type FormQuestion = FormGroup<{
  questionName: FormControl<string>
  answers: FormArray<FormAnswer>
}>

type Form = FormGroup<{
  questions: FormArray<FormQuestion>
}>

// FormGroup racks the value and validity state of a group of FormControl instances.

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent {
  fb = inject(NonNullableFormBuilder)

  quizForm: Form = this.fb.group({
    questions: this.fb.array<FormQuestion>([this.generateQuestion()])
  })

  constructor() {
    // console.log(this.quizForm.value);
    
  }

  generateQuestion(): FormQuestion {
    return this.fb.group({
      questionName: '',
      answers: this.fb.array<FormAnswer>([])
    })
  }

  onSubmit(): void {
    this.quizForm.getRawValue()
  }
}
