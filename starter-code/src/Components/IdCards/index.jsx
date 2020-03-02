import React from 'react';

const IdCard = props => {
  const { picture, firstName, lastName, height, gender, birth } = props;
  return (
    <div key={firstName} className="person">
      <img src={picture} alt="" />
      <div className="person__personal-propsrmation">
        <p> First Name: {firstName} </p>
        <p> Last Name: {lastName} </p>
        <p> Height: {height} </p>
        <p> Gender: {gender} </p>
        <p> Birth: {birth} </p>
      </div>
    </div>
  );
};

export default IdCard;
