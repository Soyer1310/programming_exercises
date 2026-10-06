Практическая задача: поиск подходящих вакансий

Ты разрабатываешь небольшой сервис для поиска работы. Сервер возвращает массив вакансий:

const vacancies = [
{ title: 'Junior Frontend Developer', salary: 900, remote: true, experience: 0 },
{ title: 'Fullstack Developer', salary: 2500, remote: true, experience: 2 },
{ title: 'Backend Developer', salary: 1800, remote: false, experience: 1 },
{ title: 'Junior JavaScript Developer', salary: 1200, remote: true, experience: 1 },
{ title: 'Senior Frontend Developer', salary: 4000, remote: true, experience: 5 },
];

Напиши функцию findSuitableVacancies, которая принимает массив вакансий и три параметра:

минимальная зарплата;

требуется ли удалённая работа;

максимальный допустимый опыт в годах.

Функция должна вернуть только вакансии, удовлетворяющие всем условиям одновременно.

Например:

findSuitableVacancies(vacancies, 1000, true, 1);

должна вернуть вакансии, где зарплата не ниже 1000, работа удалённая, а требуемый опыт не превышает одного года.

Дополнительный вопрос: что должна вернуть функция, если подходящих вакансий нет? И почему в этом случае лучше вернуть пустой массив, а не null?
