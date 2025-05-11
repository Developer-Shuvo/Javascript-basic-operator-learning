// Learning about objects in JavaScript
// objects into another object


const information = [{Name: 'Shuvo', Age: 22, HomeTown: 'Tangail', profession: 'Student'}];
// console.log('=', information[0].Age);



const shuvo = [{Name: 'Md. Nazmul Hasan Shuvo',
     Dream: 'Professional Web Developer',
     Education: [{Bsc: 'BSc in CSE', University: 'Daffodil International University', 
        Diploma: 'Diploma in CST', College: 'Mymensingh Polytechnic Institute'}]
}];

// console.log (shuvo[0].Education[0].Diploma);



const OfficialInformation = {
        name: 'Kamal Uddin',
        age: 30,
        extraKnowledge: {
                expertOn: 'Web Development',
                experience: '2 years',
                skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        }
}


console.log(OfficialInformation.extraKnowledge.skills[1]);
