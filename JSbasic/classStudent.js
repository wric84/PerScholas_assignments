var text = "<ul>"
const Class = "<li>" + "Per Scholas" + "</li>";
var idnum=0;
document.getElementById('school').innerHTML=Class;

class Student{
    constructor(fname, lname, address, phone){
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.phone = phone
        this.id = ++idnum;
    }
        displayStudent(){
            text=text+"<li>" + this.id + " " +this.fullname + "</li>"
            return text;
        }
        getFullName(){
            let fullName = this.fname+ " " +this.lname;
            this.fullName = fullName;        
        }
        displayStudents(){

        }

}
const student1 = new Student('John', 'Baptiste', '111 St', 'N/A');
student1.getFullName();
student1.displayStudent();

const student2 = new Student('Sherlock', 'Holmes', '157 Bleeker St', 'N/A');
student2.getFullName();
student2.displayStudent();

const student3 = new Student('Bruce', 'Banner', 'Avengers Tower', 'unknown');
student3.getFullName();
student3.displayStudent();

text=text+"</ul>";
document.getElementById('p1').innerHTML=text