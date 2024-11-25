document.getElementById('addCourse').addEventListener('click', function () {
    const courseContainer = document.getElementById('courseContainer');
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course');
    courseDiv.innerHTML = `
      <input type="text" placeholder="Course Name" required>
      <input type="number" placeholder="Credits" min="0" required>
      <select required>
        <option value="" disabled selected>Grade</option>
        <option value="4">A+</option>
        <option value="4">A</option>
        <option value="3.7">A-</option>
        <option value="3.3">B+</option>
        <option value="3">B</option>
        <option value="2.7">B-</option>
        <option value="2.3">C+</option>
        <option value="2">C</option>
        <option value="1.7">C-</option>
        <option value="1.3">D+</option>
        <option value="1">D</option>
        <option value="0">E</option>
      </select>
    `;
    courseContainer.appendChild(courseDiv);
  });
  
  document.getElementById('calculateGPA').addEventListener('click', function () {
    const courses = document.querySelectorAll('.course');
    let totalCredits = 0;
    let weightedGrade = 0;
  
    courses.forEach(course => {
      const credits = parseFloat(course.children[1].value);
      const grade = parseFloat(course.children[2].value);
  
      if (!isNaN(credits) && !isNaN(grade)) {
        totalCredits += credits;
        weightedGrade += credits * grade;
      }
    });
  
    const gpa = (weightedGrade / totalCredits) || 0;
    document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
  });

  document.querySelector('button[type="reset"]').addEventListener('click', function () {
    document.getElementById('result').textContent = `Your GPA is: 0.00`;
});
  