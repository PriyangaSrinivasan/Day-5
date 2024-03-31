//1.create your own resume date in JSON format:

const resume = {
     "name"  :"Priyanga Srinivasan",
     "email" :"priyalaksha17@gmail.com",
     "phone" :"+91-6381257979",
     "github":"github.com/PriyangaSrinivasan",
     "about" :"I'm learning mern stack developer",
     "education" : [
        {
            "Degree":"B.E in Computer Science Engineering",
            "University":"Geentech colloge of engineering for women",
            "start_date":"2011",
            "end_date":"2015",
            "Percentage":"70%"
        },
        {
            "Higher Secondary":"Sri Ragavendra Matric Higher Secondary School",
             "Percentage":"67%"

        },
        {
            "SSLC":"Sri Ragavendra Matric Higher Secondary School",
            "Percentage":"62%"
        }
     ],
     "Skills":[
        "Front End",
        "Javascript",
        "HTML",
        "CSS", 
        "Git",
        "GitHub"  
     ],
     "certification": [
        {
            "title":"PGDB",
            "year" :"2018",
            "issuer":"NIIT Ltd",
            "place":"karur" 
        }
     ],
     "languages":[
        
            "Telugu",
            "Tamil",
            "English"
    ],
    "Hobbies":[
        "Sports(Badminton)",
        "Travel"
    ]

}

//2.Using a for ...in loop:
for (let key in resume) {
    console.log(key +": "+ resume[key]);
}

//2.Using a for ...of loop:
const entries = Object.entries(resume);
for(let[key, value]of entries) {
    console.log(key +": "+ value);
}
 
//2.Using Array.forEach() method:
Object.entries(resume).forEach(([key, value]) => {
    console.log(key+": "+value);
});