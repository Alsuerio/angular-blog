import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../Data/datafake'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    
  //photoCover:string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXyguxiL7XTg7BiQhGXFv_rS2HEyKkLrMuscU1GiFS00v8Hp4xLRQdrovrVsNLYNMcww&usqp=CAU" 
 // photoCover:string = "https://miro.medium.com/v2/resize:fit:1400/1*qgo4_MwETtxdspEqt12sNA.png"
  //contentTitle:string = "NOVA ATUALIZAÇAO"
  photoCover:string =""
  contentTitle:string =""
  contentDescription:string=""
  //contentDescription:string = "Veja novas atualizaçoes"
  private id:string | null ="0"


  constructor(private route:ActivatedRoute) { }


  ngOnInit(): void {
   this.route.paramMap.subscribe( value =>
    this.id = value.get("id")
   )
this.setValuesToComponent(this.id)

  }
setValuesToComponent(id:string | null){
  const result = dataFake.filter(article => article.id==id)[0]

  this.contentTitle = result.title
  this.contentDescription = result.descripition
  this.photoCover = result.photoCover

}
}
