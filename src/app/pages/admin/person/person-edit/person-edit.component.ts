import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/model/entity';
import { PersonService } from 'src/app/service/person/person.service';
declare var $: any;
@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
  providers: [PersonService]
})
export class PersonEditComponent implements OnInit {

  private title: string = 'New Person';
  @Input() person = new Person();
  @Input() visible = 'none';
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this._initDatePicker();
  }

  onClick(value: any) {
    if (value === 'save') {
      this.createPerson();
    }
    else{
      this.btnClick.emit('cancel');
    }
  }
  /**************************************************************************************************************/
  createPerson() {
    var data = {
      'action': 'create',
      'person': this.person
    }
    const that = this;
    that.personService.createPerson(data).then(back => {
      if (back.code == 200) {
        console.log(back.data);
        that.btnClick.emit('success');
      }
      else {
        that.btnClick.emit('failed');
      }
    });
  }
  _initDatePicker() {
    const that = this;
    $('#datepicker').datepicker({
      format: 'yyyy/mm/dd',
      autoclose: true
    });
    $("#datepicker").on("changeDate", function () {

      that.person.birthdate = $("#datepicker").val();
      //alert("selected date is " + this.selecteddate);

    });
  }

}
