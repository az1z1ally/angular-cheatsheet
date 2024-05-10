import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

type FormAnswer = FormGroup<{text: FormControl<string>}>

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
      questionName: this.fb.control(''), // questionName: '',
      answers: this.fb.array<FormAnswer>([])
    })
  }

  addQuestion(): void {
    this.quizForm.controls.questions.push(this.generateQuestion())
  }

  removeQuestion(questionIndex: number): void {
    this.quizForm.controls.questions.removeAt(questionIndex)
  }

  addAnswer(questionIndex: number): void {
    const newAnswer: FormAnswer = this.fb.group({
      text: '' // this.fb.control('')
    })

    this.quizForm.controls.questions.at(questionIndex)?.controls?.answers?.push(newAnswer)
  }

  removeAnswer(answerIndex: number, questionIndex: number): void {
    this.quizForm.controls.questions.at(questionIndex)?.controls?.answers?.removeAt(answerIndex)
  }

  onSubmit(): void {
    console.log(this.quizForm.getRawValue());
  }
  
}
