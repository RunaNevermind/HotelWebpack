import './like-button.scss';
import Like from './Classes/classes'

let increment = document.querySelectorAll('.like-button');

increment.forEach((i, el) => new Like(el))