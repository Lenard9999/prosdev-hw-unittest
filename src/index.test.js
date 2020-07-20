const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
  it('When grade is equals to 95.00 upto 100, then Letter Grade is O (Outstanding)', () => {
    // Arrange
    var grade = 100
    // Act
    var res = gradeClassifier(grade)
    // Assert
    expect(res).toBe("O - Outstanding")
  });
  it('When grade is equals to 90.00 upto 94.99, then Letter Grade is V (Very Good)', () => {
    // Arrange
    var grade = 90
    // Act
    var res = gradeClassifier(grade)
    // Assert
    expect(res).toBe("V - Very Good")
  });
  it('When grade is equals to 85.00 upto 89.99, then Letter Grade is G (Good)', () => {
    // Arrange
    var grade = 85
    // Act
    var res = gradeClassifier(grade)
    // Assert
    expect(res).toBe("G - Good")
  });
  it('When grade is equals to 80.00 upto 84.99, then Letter Grade is S (Satisfactory)', () => {
    // Arrange
    var grade = 80
    // Act
    var res = gradeClassifier(grade)
    // Assert
    expect(res).toBe("S - Satisfactory")
  });
  it('When grade is equals to 75.00 upto 79.99, then Letter Grade is N (Needs Improvement)', () => {
    // Arrange
    var grade = 75
    // Act
    var res = gradeClassifier(grade)
    // Assert
    expect(res).toBe("N - Needs Improvement")
  });
  it('When grade is equals to 75.00 upto 79.99, then Letter Grade is N (Needs Improvement)', () => {
    // Arrange
    var grade = 75
    // Act
    var res = gradeClassifier(grade)
    // Assert
    expect(res).toBe("N - Needs Improvement")
  });
  it('When grade is equals to 74.99 below, then Letter Grade is D (Did not Meet Expectation)', () => {
    // Arrange
    var grade = 74
    // Act
    var res = gradeClassifier(grade)
    // Assert
    expect(res).toBe("D - Did not Meet Expectation")
  });
  it('When grade is equals to an invalid number, then will res to invalid', () => {
    // Arrange
    var grade = 101
    // Act
    var res = gradeClassifier(grade)
    // Assert
    expect(res).toBe("Invalid")
  });
});
