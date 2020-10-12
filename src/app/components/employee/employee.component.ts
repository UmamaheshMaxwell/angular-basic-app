import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList :Employee[] = [
    {
      name:'Uma Mahesh',
      email: 'uma@mahesh.com',
      skills: [
        {
          name:'JavaScript',
          exp: '8+'
        },
        {
          name:'NodeJS',
          exp: '4+'
        },
        {
          name:'Angular',
          exp: '4+'
        }
      ]
    },
    {
      name:'Swathi Mahesh',
      email: 'swathi@mahesh.com',
      skills: [
        {
          name:'.Net Core',
          exp: '2+'
        },
        {
          name:'SQL',
          exp: '8+'
        },
        {
          name:'Angular',
          exp: '2+'
        }
      ]
    },
    {
      name:'Jagrav Master',
      email: 'jagrav@master.com',
      skills: [
        {
          name:'Python',
          exp: '4+'
        },
        {
          name:'Artifical Intellegence',
          exp: '1+'
        },
        {
          name:'Dev ops',
          exp: '2+'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
