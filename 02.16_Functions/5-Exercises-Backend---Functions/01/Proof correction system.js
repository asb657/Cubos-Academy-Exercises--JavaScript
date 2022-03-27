const test = {
    student: 'John',
    course: 'Russian',
    grade: 10,
    questions: [
      {
        answer: 'a',
        corrrect: 'b'
      },
      {
        answer: 'c',
        corrrect: 'c'
      },
      {
        answer: 'e',
        corrrect: 'b'
      },
      {
        answer: 'b',
        corrrect: 'b'
      },
      {
        answer: 'c',
        corrrect: 'c'
      }
    ],
    testCorrection: function () {
      let gradeByQuestions = this.grade / this.questions.length
      let studentGrade = null
      let sumRightAnswers = null
  
      for (itens of test.questions) {
        if (itens.answer == itens.corrrect) {
          studentGrade += gradeByQuestions
          sumRightAnswers++
        }
      }
      console.log(
        `The student ${this.student} answered ${sumRightAnswers} questions right and got ${studentGrade}/${this.grade} on test.`
      )
    }
  }
  
  test.testCorrection()