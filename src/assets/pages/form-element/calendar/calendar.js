
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import './calendar.scss';

let accept = {
    content: 'Принять',
    className: 'accept-button-classname',
    onClick: () => {
    }
}
new AirDatepicker('#air-datepicker', {
    range:true,
    clearButton: true,
    inline: true,
    toggleSelected: false,
    navTitles: {
        days: '<strong>yyyy</strong> <i>MMMM</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    buttons: ['clear', accept]
});
