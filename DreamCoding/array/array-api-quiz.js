// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  
  /** 내가 푼 풀이 **/
  let fruitToString = '';
  fruits.forEach((val, idx)=>{
    fruitToString += val + ' ';
  })
  console.log(`A1 : ${fruitToString}`);  
  
  /** 쌤이 푼 풀이 **/
  const result = fruits.join(', ');
  console.log(result);
  
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  
  /** 내가 푼 풀이 **/
  const fruitToArray = fruits.split(', ');
  console.log(`A2 : ${fruitToArray}`);
  
  /** 쌤이 푼 풀이 **/
  const result = fruits.split(', ');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  
  /** 내가 푼 풀이 **/
  const reverseArray = array.reverse();
  console.log(`A3 : ${reverseArray}`); 

  /** 쌤이 푼 풀이 **/
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  
  /** 내가 푼 풀이 **/
  const newArray = array.splice(2, 3); //배열 자체를 변경함
  console.log(`A4 : ${newArray}`); 
  
  /** 쌤이 푼 풀이 **/
  const array2 = [1, 2, 3, 4, 5];
  const result = array2.slice(2, 5); //배열은 그대로
  console.log(result);
  console.log(array2);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  /** 내가 푼 풀이 **/
  let student90;

  students.forEach((val, idx) => {
    //console.log(students[idx]);
    let score = students[idx].score;
    if (score === 90){
      //console.log(`score가 90점인 학생 찾기 >> ${students[idx].name}`);
      student90 = students[idx].name;
    }
  })
  console.log(`A5 : ${student90}`);


  /** 쌤이 푼 풀이 **/
  //find() : true 가 나오면 값 return, 원하는 값 찾기
  const result = students.find((student)=> student.score === 90) 
  console.log(result);
}

// Q6. make an array of enrolled students
{
  /** 내가 푼 풀이 **/
  let enrolledStudent = [];
  
  students.forEach((val, idx)=>{
    let enrolledYn = students[idx].enrolled;
    if(enrolledYn){
      //console.log(`등록된 학생 찾기 >> ${students[idx].name}`);
      enrolledStudent.push(students[idx].name);
    }
  })
  console.log(`A6 : ${enrolledStudent}`);
  

  /** 쌤이 푼 풀이 **/
  // filter() : true 가 나오면 값 return, 원하는 값만 필터링
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  /** 내가 푼 풀이 **/
  let scores = [];
  
  students.forEach((val, idx)=>{
    scores.push(students[idx].score);
  })
  console.log(`A7 : ${scores}`);
  
  
  /** 쌤이 푼 풀이 **/
  //map() : 배열 안의 모든 요소들을 가공하여 대체된 값 return
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  /** 내가 푼 풀이 **/
  students.forEach((val, idx)=>{
    if(students[idx].score < 50){
      console.log(`A8 : score가 50 보다 작은 학생 !! ${students[idx].name}`);
    }
  })
  
  
  /** 쌤이 푼 풀이 **/
  // some() : 조건에 해당하는 값이 하나라도 있으면 true
  const result = students.some((student) => student.score < 50);
  console.log(result);
  
  // every() : 모든 값이 조건에 만족한다면 true
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  /** 내가 푼 풀이 **/
  let sum = 0;
  
  students.forEach((val, idx) => {
    sum += students[idx].score;
  })
  console.log(`A9 : ${sum/(students.length)}`)  
  
  
  /** 쌤이 푼 풀이 **/
  // reduce() : 배열에 있는 모든 값 누적하는 함수 
  // reduceRight() : 배열 뒤에서부터 모든 값 누적
  const result = students.reduce((prev, curr) => prev + curr.score, 0); //초기값 : 0
  
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  /** 내가 푼 풀이 **/
  let str = '';
  students.forEach((val, idx)=>{
    
    str += students[idx].score + ', ';
  })
  
  console.log(`A10 : ${str}`);
  
  
  /** 쌤이 푼 풀이 **/
  const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  /** 내가 푼 풀이 **/
  let score = [];
  students.forEach((val, idx) => {
    score.push(students[idx].score);
  });
  console.log(`Bonus : ${score.sort()}`);
  
  
  /** 쌤이 푼 풀이 **/
  const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b) // a - b : 오름차순, b - a : 내림차순
  .join();
  console.log(result);
}
