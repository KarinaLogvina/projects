import React, {Component} from 'react';
import {connect} from 'react-redux';
import getWeatherError from './selector';

class Error extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    if (this.props.error) {
      return (
        <div className="error">
          Что-то пошло не так :( Скорее всего ты ошибся в названии города или мой API не находит для него погоду. Или он сломался. Или бытие тщетно, мир устарел и ничего не имеет смысла. В любом случае, будь немного внимательнее и попробуй еще раз. У тебя получится, я в тебя верю.
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    error: getWeatherError (state),
  };
};

export default connect (mapStateToProps) (Error);
