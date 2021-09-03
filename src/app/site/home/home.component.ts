import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
students!:FormGroup; studentList:any; submitted=false;
result:any
  constructor( public fb : FormBuilder, private srv : MainService) { }

  ngOnInit(): void {
    this.students = this.fb.group({
      Name:['',[Validators.required]],
      Contact:['',[Validators.required]],
      Email:['',[Validators.required]],
      Address:['',[Validators.required]]
    })
      this.loadstudentList();
  }

loadstudentList() {
    this.srv.getStudentsList().then(res => {
      this.studentList = res;
    })

    
} 
save()
    {
      this.srv.addNewStudent(this.students.value).then(res=>{
        this.result=res;
        alert(this.result.success);
      })
    }
    update()
    {
      var formData=this.students.value;
      formData.Sid=localStorage.getItem("SidForUpdate")
      this.srv. updateStudent(this.students.value).then(res=>{
        this.result=res;
        alert(this.result.success);
        this.loadstudentList();
      })
    }

    editRecord(item:any)
    {
      localStorage.setItem("SidForUpdate",item.Sid)
      this.students.setValue({
        Name:item.Name,
        Contact:item.Contact,
        Email:item.Email,
        Address:item.Address
      })
    }
    deletRecord(item:any)
    {
         this.srv. deleteStudent(item.Sid).then(res=>{
        this.result=res;
        alert(this.result.success);
        this.loadstudentList();
    })
    }
}
