import reactjs from "./reactjs.svg";
import angular from "./angular.svg";
import angularjs from "./angularjs.svg";
import ember from "./ember.svg";
import vuejs from "./vuejs.svg";
import backbone from "./backbone.svg";
import polymer from "./polymer.svg";


export const images: {[key:string] : any} = {
  'reactjs': reactjs,
  'angular': angular,
  'angularjs': angularjs,
  'ember': ember,
  'vuejs': vuejs,
  'backbone': backbone,
  'polymer': polymer
};

export interface Framework {
  name: string,
  year: number,
  img: string
}

export const frameworks: Framework[] = [
  {
    name: "React",
    year: 1972,
    img: "reactjs"
  },
  {
    name: "Angular",
    year: 2012,
    img: "angular"
  },
  {
    name: "AngularJS",
    year: 2012,
    img: "angularjs"
  },
  {
    name: "Vue",
    year: 2012,
    img: "vuejs"
  },
  {
    name: "EmberJS",
    year: 2012,
    img: "ember"
  },
  {
    name: "Backbone",
    year: 2012,
    img: "backbone"
  },
  {
    name: "Polymer",
    year: 2012,
    img: "polymer"
  }
];
