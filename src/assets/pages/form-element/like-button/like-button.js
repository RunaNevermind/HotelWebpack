import './like-button.scss';
import Like from './Classes/classes'

let increments = document.querySelectorAll('.like-button__wrap');



increments.forEach((increment)=> new Like(increment)
)
