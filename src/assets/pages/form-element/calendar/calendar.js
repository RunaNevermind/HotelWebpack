
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './calendar.scss';

var accept = {
    content: 'Принять',
    className: 'accept-button-classname',
    onClick: () => {
    }
}
var start= document.getElementById('air-datepicker');
var end= document.getElementById('end');

new AirDatepicker('#air-datepicker', {
    range:true,
    clearButton: true,
    toggleSelected: false,

    navTitles: {
        days: '<strong>yyyy</strong> <i>MMMM</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    buttons: ['clear', accept],
    minDate: new Date(),
    disableNavWhenOutOfRange:false,
    onSelect:function onselect(date){
        if(date.formattedDate.length>1){
            start.value = date.formattedDate.shift(' ');
            end.value = date.formattedDate.pop(' ');
    }   }
});