var inquirer = require('inquirer');
const cp = require('child_process');
const { listenerCount } = require('process');
function displayChoices() {
    inquirer
        .prompt([
            /* Pass your questions in here */
            //questions will be passed in form of object
            {
                type: 'list',
                name: 'Selection',
                choices: ['Name', 'Email ID', 'About', 'Skills', 'Education', 'Academics', 'Projects', 'Extra Curriculum']
            }
        ])
        .then((choices) => {
            // Use user feedback for... whatever!!
           // console.log(typeof choices.Selection)
            if (choices.Selection == 'Name') {
                console.log('Tanya Singh')
                displayBack()
            }
            else if (choices.Selection == 'Email ID') {
                console.log('tanyasingharora98@gmail.com')
                displayBack()
            }
            else if (choices.Selection == 'About') {
                console.log(`
        Secure a responsible career opportunity
        to fully utilize my training and skills, while
        making a significant contribution to the
        success of the company.Seeking growth
        and development in the field of Computer
        Applications`)
                displayBack()
            }
            else if (choices.Selection == 'Skills') {
                console.log(`
        Cloud Computing:AWS and Azure
        Programming Languages:C,Java,Python
        Operating System:Linux
        Graphic Designing:Photoshop and Coral Draw
        Web Designing:Adobe Dreamweaver`)
                displayBack()
            }
            else if (choices.Selection == 'Education') {
                console.log(`
        Bachelor of Computer Applications(BCA) 
        2017-2020
        MCM DAV College for Women ,Chandigarh
        Board: Panjab University
        Percentage:80%

        Secondary School,XII Class 
        2016-2017
        Sri Guru Gobind Senior Secondary High School,
        Chandigarh
        Board:CBSE
        Percentage:90%

        High School,X Class 
        2014-2015
        Delhi Public School,Chandigarh
        Board:CBSE
        CGPA:10
        `)
                displayBack()

            }
            else if (choices.Selection == 'Academics') {
                cp.execSync('start chrome https://1drv.ms/f/s!Anq84C5bhg8dg5VzuFk6rFS5dz4gGA')
                displayBack()
            }
            else if (choices.Selection == 'Projects') {
                cp.execSync('start chrome https://github.com/TanyaSingh25')
                displayBack()
            }
            else if (choices.Selection == 'Extra Curriculum') {
                console.log(`
            Volunteering in IT Fest in organising  the  Quiz and competitions 
            Member of MCM DAV College Rotaract Club  (2017-2019)
            Joined two Shiamak Dawar dance classes(Summer funk and winter funk)
            Stood first in On the Spot  Dancing Competition  in DPS
            Stood second in Singing Inter-DPS Competition`
                )
                displayBack()
            }






        })
}

displayChoices()

function displayBack() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'GoBack',
                choices: ["Back", "Exit"]
            }
        ])
        .then((choices) => {
            //console.log(typeof choices.GoBack);
            if (choices.GoBack == 'Back') {
               // console.log("hello")
                displayChoices();
            }
            else if (choices.GoBack == 'Exit') {
                return;
            }

        })


}
