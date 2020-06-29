import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  repositories = [
    { name: 'angular/components',
      description: 'Component infrastructure and Material Design components for Angular ' },
    { name: 'spring-projects/spring-boot',
      description: 'Spring Boot' },
    { name: 'facebook/react',
      description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.' },
  ];

}
