const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){

  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;
  let name = document.querySelector('#name').value;


  if(height == '' || weight == '' || name == ''){
    alert('Please fill out ALL the input fields!');
    return;

  }

  height = height / 100

  let BMI = (weight / (height * height));

  BMI = BMI.toFixed(2);

  document.querySelector('#result').innerHTML = BMI;

  let status = '';

  if(BMI < 18.5){
    status = "Underweight";
  }
  if(BMI >=18.5 && BMI < 25){
    status = "at a Normal Weight";
  }
  if(BMI >=25 && BMI < 30){
    status = "Overweight";
  }
  if(BMI >=30 && BMI < 35){
    status = "Obese";
  }
  if(BMI > 35){
    status = "Clinically Obese";
  }
  document.querySelector('.comment').innerHTML = `${name}: you are <span id="comment">${status}</span>`;

});
