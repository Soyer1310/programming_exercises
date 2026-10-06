const vacancies = [
  { title: 'Junior Frontend Developer', salary: 900, remote: true, experience: 0 },
  { title: 'Fullstack Developer', salary: 2500, remote: true, experience: 2 },
  { title: 'Backend Developer', salary: 1800, remote: false, experience: 1 },
  { title: 'Junior JavaScript Developer', salary: 1200, remote: true, experience: 1 },
  { title: 'Senior Frontend Developer', salary: 4000, remote: true, experience: 5 },
];

const findSuitableVacancies = (vacancies, minSalary, isRemote, maxExp) => {
  return vacancies.filter(({salary, remote, experience}) => salary >= minSalary && remote === isRemote && experience <= maxExp);
};

console.log(findSuitableVacancies(vacancies, 1000, true, 1));
console.log(findSuitableVacancies([], 1000, true, 1));

